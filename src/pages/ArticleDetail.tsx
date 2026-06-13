import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { getArticle, articles } from "@/data/articles";
import { site } from "@/lib/site";

// rend les chemins /xxx présents dans le texte sous forme de liens cliquables
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)/gi);
  return (
    <>
      {parts.map((p, i) =>
        /^\/[a-z0-9]/i.test(p) ? (
          <Link key={i} to={p} className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-dark">
            {p}
          </Link>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/blog" replace />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-immersive py-16 text-white">
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        />
        <div className="container">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour au blog
          </Link>
          <span className="mt-5 inline-block rounded-full bg-brand-green/20 px-3 py-1 text-xs font-semibold text-emerald-300">
            {article.tag}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold text-white md:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readingTime} de lecture</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <article className="container max-w-3xl py-14">
        <img
          src={article.image}
          alt={article.title}
          className="mb-10 h-64 w-full rounded-2xl object-cover shadow-soft md:h-80"
        />
        <p className="text-lg font-medium text-slate-600">{article.excerpt}</p>

        <div className="mt-8 space-y-8">
          {article.body.map((sec, i) => (
            <section key={i}>
              {sec.heading && <h2 className="text-xl font-bold text-brand-navy">{sec.heading}</h2>}
              <div className="mt-3 space-y-3 leading-relaxed text-slate-600">
                {sec.paragraphs.map((p, j) => (
                  <p key={j}><RichText text={p} /></p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-immersive p-8 text-center text-white">
          <h3 className="text-xl font-bold text-white">Un projet de formation ?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/75">
            Notre équipe vous accompagne et étudie votre financement gratuitement.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-green">Nous contacter <ArrowRight className="h-4 w-4" /></Link>
            <a href={site.phoneHref} className="btn bg-white text-brand-blue hover:bg-white/90">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </article>

      {/* AUTRES ARTICLES */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-extrabold">À lire également</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="card card-hover group overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">{a.tag}</span>
                  <h3 className="mt-3 text-sm font-bold text-brand-navy group-hover:text-brand-green">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
