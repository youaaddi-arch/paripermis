import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { site } from "@/lib/site";
import { articles } from "@/data/articles";

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-16 text-white">
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
