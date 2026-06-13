// Génère les PDF de programme (public/programmes/<slug>.pdf) à partir des
// données de formations. Usage : tsx scripts/gen-programmes.ts [slug...]
import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { formations, type Formation } from "../src/data/formations";

const slugs = process.argv.slice(2);
const targets = formations.filter((f) => (slugs.length ? slugs.includes(f.slug) : true));

const outDir = path.join(process.cwd(), "public", "programmes");
fs.mkdirSync(outDir, { recursive: true });

function build(f: Formation): Promise<void> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: "A4" });
    const stream = fs.createWriteStream(path.join(outDir, `${f.slug}.pdf`));
    stream.on("finish", () => resolve());
    stream.on("error", reject);
    doc.pipe(stream);

    doc.fontSize(20).fillColor("#0f1f3d").text("PariPermis");
    doc.fontSize(15).fillColor("#16a34a").text(f.title);
    doc.moveDown(0.3);
    doc.fontSize(10).fillColor("#475569").text(`${f.kind} · ${f.duration}`);
    doc.text(`Tarif : ${f.price}`);
    doc.text("Centre certifié Qualiopi");
    doc.moveDown(0.5);
    doc.fontSize(11).fillColor("#334155").text(f.summary, { align: "justify" });

    const list = (title: string, items: string[]) => {
      doc.moveDown(0.5);
      doc.fontSize(13).fillColor("#0f1f3d").text(title);
      doc.moveDown(0.15);
      doc.fontSize(10).fillColor("#334155");
      items.forEach((it) => doc.text(`•  ${it}`, { indent: 6, align: "left" }));
    };
    const para = (title: string, text: string) => {
      doc.moveDown(0.5);
      doc.fontSize(13).fillColor("#0f1f3d").text(title);
      doc.moveDown(0.15);
      doc.fontSize(10).fillColor("#334155").text(text, { align: "justify" });
    };

    list("Objectifs pédagogiques", f.objectifs);
    list("Compétences visées", f.competences);
    para("Public concerné", f.public);
    list("Prérequis", f.prerequis);
    list("Programme détaillé", f.programme);
    list("Méthodes pédagogiques", f.methodes);
    list("Moyens pédagogiques", f.moyens);
    list("Modalités d'évaluation", f.evaluation);
    para("Modalités d'accès", f.acces);
    para("Accessibilité handicap", f.accessibilite);
    list("Débouchés", f.debouches);
    para("Certification / Validation", f.certification);

    doc.moveDown(1);
    doc
      .fontSize(8)
      .fillColor("#94a3b8")
      .text(
        "PariPermis — Centre certifié Qualiopi — 18 avenue du Général de Gaulle, 91160 Longjumeau — 01 69 09 29 27",
        { align: "center" }
      );

    doc.end();
  });
}

(async () => {
  for (const f of targets) {
    await build(f);
    console.log("généré:", `${f.slug}.pdf`);
  }
})();
