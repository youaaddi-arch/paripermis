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

const NAVY = "#0b1f3a";
const GREEN = "#16a34a";
const SLATE = "#475569";

function section(doc: PDFKit.PDFDocument, title: string) {
  if (doc.y > 700) doc.addPage();
  doc.moveDown(0.8);
  doc.fillColor(GREEN).fontSize(13).font("Helvetica-Bold").text(title.toUpperCase());
  doc.moveTo(doc.x, doc.y + 2).lineTo(545, doc.y + 2).strokeColor(GREEN).lineWidth(1).stroke();
  doc.moveDown(0.5);
  doc.fillColor(SLATE).fontSize(10.5).font("Helvetica");
}

function paragraph(doc: PDFKit.PDFDocument, text: string) {
  doc.fillColor(SLATE).fontSize(10.5).font("Helvetica").text(text, { align: "justify" });
}

function bullets(doc: PDFKit.PDFDocument, items: string[]) {
  doc.fillColor(SLATE).fontSize(10.5).font("Helvetica");
  for (const it of items) {
    if (doc.y > 760) doc.addPage();
    doc.text(`•  ${it}`, { indent: 6, align: "left" });
    doc.moveDown(0.2);
  }
}

function generatePdf(f: Formation): Promise<void> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: `Programme — ${f.title}`, Author: "PariPermis" } });
    const out = createWriteStream(join(PDF_DIR, `${f.slug}.pdf`));
    out.on("finish", () => resolve());
    out.on("error", reject);
    doc.pipe(out);

    // En-tête
    doc.rect(0, 0, 595, 110).fill(NAVY);
    doc.fillColor("#ffffff").fontSize(22).font("Helvetica-Bold").text("PariPermis", 50, 34);
    doc.fillColor(GREEN).fontSize(10).font("Helvetica-Bold").text("Centre de formation transport routier  •  Certifié Qualiopi", 50, 64);
    doc.fillColor("#cbd5e1").fontSize(9).font("Helvetica").text("Programme de formation", 50, 80);
    doc.moveDown(2);
    doc.y = 130;

    // Titre formation
    doc.fillColor(NAVY).fontSize(17).font("Helvetica-Bold").text(f.title, 50, 130, { width: 495 });
    doc.moveDown(0.4);
    doc.fillColor(GREEN).fontSize(11).font("Helvetica-Bold").text(`${f.kind}  •  ${f.duration}`);
    doc.fillColor(SLATE).fontSize(10.5).font("Helvetica").text(f.price);
    doc.moveDown(0.6);
    paragraph(doc, f.summary);

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

    doc.moveDown(1.2);
    doc.fillColor("#94a3b8").fontSize(8).font("Helvetica").text(
      "PariPermis — Centre de formation au transport routier certifié Qualiopi. Document non contractuel, mis à jour régulièrement. Pour toute information : nous consulter.",
      { align: "center" }
    );

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
