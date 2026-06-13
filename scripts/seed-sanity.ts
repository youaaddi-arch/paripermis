/**
 * Seed Sanity avec toutes les formations + génération des PDF de programme.
 *
 * Usage :
 *   SANITY_WRITE_TOKEN=xxxx npx tsx scripts/seed-sanity.ts
 *
 * - Génère un PDF de programme par formation dans public/programmes/<slug>.pdf
 * - Crée/remplace et publie un document `formation` par formation dans Sanity
 *   (le champ programmePdfUrl pointe vers /programmes/<slug>.pdf)
 */
import { createClient } from "@sanity/client";
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { formations, type Formation } from "../src/data/formations";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PDF_DIR = join(ROOT, "public", "programmes");

const projectId = process.env.SANITY_PROJECT_ID || "yguvu8t3";
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

// Palette de marque
const NAVY = "#0b1f3a";
const NAVY_SOFT = "#13294d";
const GREEN = "#16a34a";
const GREEN_DARK = "#15803d";
const SLATE = "#475569";
const INK = "#1e293b";
const LIGHT = "#f1f5f9";
const BORDER = "#e2e8f0";
const MUTED = "#94a3b8";

const PAGE_W = 595.28;
const ML = 50; // marge gauche
const MR = 545; // bord droit du contenu
const CW = MR - ML; // largeur de contenu

function slimHeader(doc: PDFKit.PDFDocument) {
  doc.save();
  doc.rect(0, 0, PAGE_W, 60).fill(NAVY);
  doc.rect(0, 60, PAGE_W, 3).fill(GREEN);
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(13).text("PariPermis", ML, 22);
  doc.fillColor("#9fb3c8").font("Helvetica").fontSize(8).text("Programme de formation", ML, 40);
  doc.fillColor("#7dd3a8").font("Helvetica-Bold").fontSize(8).text("CERTIFIÉ QUALIOPI", MR - 160, 31, { width: 160, align: "right", characterSpacing: 0.6 });
  doc.restore();
  doc.x = ML;
  doc.y = 86;
}

function hero(doc: PDFKit.PDFDocument, f: Formation) {
  doc.save();
  doc.rect(0, 0, PAGE_W, 150).fill(NAVY);
  // bande décorative
  doc.rect(0, 0, 6, 150).fill(GREEN);
  doc.rect(0, 150, PAGE_W, 5).fill(GREEN);
  // marque
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(24).text("PariPermis", ML, 38);
  doc.fillColor("#7dd3a8").font("Helvetica-Bold").fontSize(9).text("CENTRE DE FORMATION · TRANSPORT ROUTIER", ML, 72, { characterSpacing: 1 });
  doc.fillColor("#cbd5e1").font("Helvetica").fontSize(9).text("Programme détaillé de formation", ML, 88);
  // badge Qualiopi
  const bw = 150, bx = MR - bw, by = 40;
  doc.roundedRect(bx, by, bw, 32, 16).fill("#ffffff");
  doc.save();
  doc.lineWidth(2).strokeColor(GREEN);
  doc.moveTo(bx + 18, by + 16).lineTo(bx + 23, by + 21).lineTo(bx + 33, by + 11).stroke();
  doc.restore();
  doc.fillColor(GREEN_DARK).font("Helvetica-Bold").fontSize(9.5).text("CERTIFIÉ QUALIOPI", bx + 40, by + 12, { width: bw - 48, characterSpacing: 0.4 });
  doc.restore();
  doc.x = ML;
  doc.y = 174;
}

function infoCards(doc: PDFKit.PDFDocument, items: { label: string; value: string }[]) {
  const gap = 12;
  const w = (CW - gap * (items.length - 1)) / items.length;
  const y = doc.y;
  items.forEach((it, i) => {
    const x = ML + i * (w + gap);
    doc.roundedRect(x, y, w, 50, 7).fill(LIGHT);
    doc.roundedRect(x, y, 3, 50, 1.5).fill(GREEN);
    doc.fillColor(GREEN_DARK).font("Helvetica-Bold").fontSize(7).text(it.label.toUpperCase(), x + 12, y + 9, { width: w - 18, characterSpacing: 0.8 });
    doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(9.5).text(it.value, x + 12, y + 22, { width: w - 18, height: 22, lineGap: -1, ellipsis: true });
  });
  doc.x = ML;
  doc.y = y + 50;
  doc.moveDown(0.7);
}

function section(doc: PDFKit.PDFDocument, title: string) {
  doc.moveDown(0.8);
  if (doc.y > 720) doc.addPage();
  const y = doc.y;
  doc.save();
  doc.roundedRect(ML, y + 1, 3.5, 13, 1.5).fill(GREEN);
  doc.restore();
  doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(12).text(title.toUpperCase(), ML + 12, y, { characterSpacing: 0.5 });
  doc.moveDown(0.5);
  doc.save();
  doc.strokeColor(BORDER).lineWidth(1).moveTo(ML, doc.y).lineTo(MR, doc.y).stroke();
  doc.restore();
  doc.moveDown(0.55);
  doc.x = ML;
}

function paragraph(doc: PDFKit.PDFDocument, text: string) {
  doc.fillColor(SLATE).font("Helvetica").fontSize(10.5).text(text, ML, doc.y, { width: CW, align: "justify", lineGap: 1.5 });
}

function bullets(doc: PDFKit.PDFDocument, items: string[]) {
  for (const it of items) {
    if (doc.y > 752) doc.addPage();
    const y = doc.y;
    doc.save();
    doc.circle(ML + 4, y + 5, 1.9).fill(GREEN);
    doc.restore();
    doc.fillColor(INK).font("Helvetica").fontSize(10.5).text(it, ML + 16, y, { width: CW - 16, align: "left", lineGap: 1.5 });
    doc.moveDown(0.35);
  }
}

function generatePdf(f: Formation): Promise<void> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 50, bottom: 66, left: ML, right: 50 },
      bufferPages: true,
      info: { Title: `Programme de formation — ${f.title}`, Author: "PariPermis", Subject: "Programme de formation certifié Qualiopi" },
    });
    const out = createWriteStream(join(PDF_DIR, `${f.slug}.pdf`));
    out.on("finish", () => resolve());
    out.on("error", reject);
    doc.pipe(out);

    // En-tête courant pour les pages 2 et suivantes
    doc.on("pageAdded", () => slimHeader(doc));

    // --- Page 1 : hero + titre + cartes ---
    hero(doc, f);
    doc.fillColor(GREEN_DARK).font("Helvetica-Bold").fontSize(9.5).text(f.kind.toUpperCase(), ML, doc.y, { characterSpacing: 1 });
    doc.moveDown(0.25);
    doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(19).text(f.title, ML, doc.y, { width: CW, lineGap: 1 });
    doc.moveDown(0.5);
    doc.fillColor(SLATE).font("Helvetica").fontSize(10.5).text(f.summary, ML, doc.y, { width: CW, align: "justify", lineGap: 1.5 });
    doc.moveDown(0.9);
    infoCards(doc, [
      { label: "Durée", value: f.duration },
      { label: "Tarif", value: f.price.split("—")[0].trim() },
      { label: "Type", value: f.kind },
    ]);

    section(doc, "Objectifs pédagogiques");
    bullets(doc, f.objectifs);
    section(doc, "Compétences visées");
    bullets(doc, f.competences);
    section(doc, "Public concerné");
    paragraph(doc, f.public);
    section(doc, "Prérequis");
    bullets(doc, f.prerequis);
    section(doc, "Programme détaillé");
    bullets(doc, f.programme);
    section(doc, "Méthodes pédagogiques");
    bullets(doc, f.methodes);
    section(doc, "Moyens pédagogiques");
    bullets(doc, f.moyens);
    section(doc, "Modalités d'évaluation");
    bullets(doc, f.evaluation);
    section(doc, "Modalités d'accès et délais");
    paragraph(doc, f.acces);
    section(doc, "Accessibilité aux personnes en situation de handicap");
    paragraph(doc, f.accessibilite);
    section(doc, "Débouchés professionnels");
    bullets(doc, f.debouches);
    section(doc, "Certification / Validation");
    paragraph(doc, f.certification);

    // --- Pieds de page numérotés (toutes les pages) ---
    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(range.start + i);
      const fy = 794;
      doc.save();
      doc.strokeColor(BORDER).lineWidth(0.8).moveTo(ML, fy).lineTo(MR, fy).stroke();
      doc.fillColor(MUTED).font("Helvetica").fontSize(7.5).text(
        "PariPermis · Centre de formation au transport routier certifié Qualiopi · Document non contractuel",
        ML, fy + 7, { width: 370, lineBreak: false }
      );
      doc.fillColor(MUTED).font("Helvetica").fontSize(8).text(`Page ${i + 1} / ${range.count}`, MR - 100, fy + 7, { width: 100, align: "right" });
      doc.restore();
    }

    doc.end();
  });
}

async function main() {
  mkdirSync(PDF_DIR, { recursive: true });

  // 1) Générer les PDF
  for (const f of formations) {
    await generatePdf(f);
    console.log(`PDF généré : public/programmes/${f.slug}.pdf`);
  }

  if (!token) {
    console.log("\nSANITY_WRITE_TOKEN absent → documents Sanity non créés (PDF générés uniquement).");
    return;
  }

  // 2) Créer / publier les documents Sanity
  const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

  for (let i = 0; i < formations.length; i++) {
    const f = formations[i];
    const _id = `formation-${f.slug}`;
    const doc = {
      _id,
      _type: "formation",
      title: f.title,
      slug: { _type: "slug", current: f.slug },
      order: i,
      category: f.category,
      kind: f.kind,
      qualiopi: true,
      cardTitle: f.cardTitle,
      cardSubtitle: f.cardSubtitle,
      durationBadge: f.durationBadge,
      duration: f.duration,
      price: f.price,
      summary: f.summary,
      objectifs: f.objectifs,
      competences: f.competences,
      public: f.public,
      prerequis: f.prerequis,
      programme: f.programme,
      methodes: f.methodes,
      moyens: f.moyens,
      evaluation: f.evaluation,
      acces: f.acces,
      accessibilite: f.accessibilite,
      debouches: f.debouches,
      certification: f.certification,
      imageUrl: f.image,
      programmePdfUrl: `/programmes/${f.slug}.pdf`,
    };
    await client.createOrReplace(doc);
    console.log(`Sanity : ${_id} publié`);
  }

  console.log(`\n✅ ${formations.length} formations publiées dans Sanity (${projectId}/${dataset}).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
