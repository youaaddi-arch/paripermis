import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Info, Phone } from "lucide-react";
import { profils, dispositifs } from "@/data/financements";
import { site } from "@/lib/site";

export default function Financement() {
  const [active, setActive] = useState(profils[0].id);
  const profil = profils.find((p) => p.id === active)!;
  const list = dispositifs.filter((d) => profil.codes.includes(d.code));

  return (
    <>
      <section className="bg-brand-navy py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Financez votre Formation Transport</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Selon votre statut, votre formation transport peut être financée par le CPF, France Travail, un OPCO, votre
            employeur, la Région, un contrat en alternance ou un dispositif de reconversion.
          </p>
          <a href="/guide-financements.pdf" className="btn-green mt-8">
            <Download className="h-4 w-4" /> Télécharger le guide complet (PDF)
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Profil tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {profils.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === p.id
                    ? "bg-brand-blue text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="text-2xl font-extrabold">{profil.label}</h2>
            <p className="mt-2 text-slate-500">{profil.intro}</p>

            <div className="mt-8 space-y-5">
              {list.map((d) => (
                <div key={d.code} className="card p-6">
                  <p className="text-lg font-bold text-brand-navy">{d.name}</p>
                  <p className="mt-2 text-sm text-slate-600">{d.description}</p>
                  <p className="mt-3 text-xs font-medium text-slate-400">Public : {d.public}</p>
                  <a
                    href={d.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all"
                  >
                    {d.link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Info box */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6">
            <p className="flex items-center gap-2 font-bold text-brand-navy">
              <Info className="h-5 w-5 text-brand-blue" /> Information importante
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Éligibilité et prise en charge étudiées selon votre situation. Les montants, plafonds et conditions
              indiqués sont donnés à titre indicatif et peuvent évoluer. Un devis personnalisé et une étude de
              financement sont réalisés avant l'entrée en formation. Contactez-nous pour étudier la solution la plus
              adaptée à votre profil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold">Besoin d'aide pour votre financement ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Notre équipe vous accompagne dans toutes vos démarches de financement, de l'étude de vos droits jusqu'à la
            validation de votre dossier.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-blue">Contactez-nous <ArrowRight className="h-4 w-4" /></Link>
            <a href={site.phoneHref} className="btn-outline"><Phone className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
