import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { site } from "@/lib/site";

const articles = [
  {
    title: "Permis C, CE ou D : quelle formation choisir ?",
    excerpt: "Tour d'horizon des permis poids lourd et transport en commun pour orienter votre projet professionnel.",
    date: "Juin 2026",
    tag: "Formations",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FIMO / FCO : tout comprendre sur les formations obligatoires",
    excerpt: "Qui est concerné, quelle durée, quelle validité ? On vous explique la qualification initiale et continue.",
    date: "Mai 2026",
    tag: "Réglementation",
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financer son permis poids lourd avec le CPF en 2026",
    excerpt: "Participation de 102,23 €, exonération des demandeurs d'emploi, abondements… le point sur le CPF.",
    date: "Mai 2026",
    tag: "Financement",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Les métiers du transport qui recrutent le plus",
    excerpt: "Chauffeur SPL, conducteur de bus, conducteur citerne : salaires et perspectives d'un secteur en tension.",
    date: "Avril 2026",
    tag: "Métiers",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-brand-navy py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Le Blog PariPermis</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Conseils, actualités et guides sur les formations, la réglementation et les métiers du transport routier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title} className="card group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full bg-brand-green/10 px-2.5 py-1 font-semibold text-brand-green">{a.tag}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-brand-navy">{a.title}</h2>
                <p className="mt-2 text-sm text-slate-500">{a.excerpt}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="container mt-12 text-center">
          <p className="text-slate-500">Une question sur une formation ? Notre équipe vous répond au {site.phone}.</p>
          <Link to="/contact" className="btn-green mt-5">Nous contacter <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
