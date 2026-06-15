import type { ReactNode } from "react";

/** Mise en page commune aux pages légales (mentions légales, CGU, données personnelles). */
export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-immersive py-14 text-white">
        <div className="container">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl space-y-6 text-slate-600 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
          <p className="mt-10 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
            ⚠️ Modèle à compléter / valider : renseignez la raison sociale, le SIRET, le directeur de la publication et
            l'hébergeur, puis faites relire par un professionnel avant mise en ligne.
          </p>
        </div>
      </section>
    </>
  );
}
