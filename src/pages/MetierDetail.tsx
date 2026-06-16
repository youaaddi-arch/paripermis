import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Truck, Bus, TrendingUp, Banknote, ListChecks,
  Route as RouteIcon, GraduationCap, Phone, Clock, ExternalLink, Target, Building2,
} from "lucide-react";
import { getMetier } from "@/data/metiers";
import { useFormations } from "@/lib/formations";
import { site } from "@/lib/site";

export default function MetierDetail() {
  const { slug } = useParams();
  const m = getMetier(slug ?? "");
  const formations = useFormations();
  if (!m) return <Navigate to="/metiers" replace />;

  const Icon = m.category === "marchandises" ? Truck : Bus;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy py-14 text-white">
        <img src={m.image} alt={m.name} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/60" />
        <div className="container relative">
          <Link to="/metiers" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour aux métiers
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
              <Icon className="h-3.5 w-3.5 text-brand-green" />
              {m.category === "marchandises" ? "Transport de marchandises" : "Transport de voyageurs"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/20 px-3 py-1 text-xs font-semibold text-brand-green ring-1 ring-brand-green/30">
              <TrendingUp className="h-3 w-3" /> {m.demande}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
              Code ROME {m.romeCode}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold text-white md:text-4xl">{m.name}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{m.description}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <p className="inline-flex items-center gap-2 font-semibold text-brand-green">
              <Banknote className="h-4 w-4" /> Salaire débutant : {m.salaire}
            </p>
            <p className="inline-flex items-center gap-2 font-semibold text-brand-green">
              <Target className="h-4 w-4" /> Insertion : {m.insertion}
            </p>
          </div>
        </div>
      </section>

      <div className="container grid gap-10 py-14 lg:grid-cols-[1fr_320px]">
        {/* MAIN */}
        <div className="space-y-8">
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <ListChecks className="h-5 w-5 text-brand-green" /> Missions principales
            </h2>
            <ul className="mt-4 space-y-2 text-slate-600">
              {m.missions.map((mi, i) => (
                <li key={i} className="flex gap-2.5">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                  <span>{mi}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <TrendingUp className="h-5 w-5 text-brand-green" /> Perspectives et évolution
            </h2>
            <p className="mt-4 text-slate-600">{m.evolution}</p>
          </section>

          {/* EMPLOYEURS */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <Building2 className="h-5 w-5 text-brand-green" /> Principaux employeurs en France
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Parmi les principaux recruteurs du secteur en France :
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {m.employeurs.map((e) => (
                <span key={e} className="rounded-full bg-brand-blue/5 px-3 py-1.5 text-sm font-semibold text-brand-navy ring-1 ring-brand-blue/15">
                  {e}
                </span>
              ))}
            </div>
          </section>

          {/* PARCOURS DE FORMATION */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <RouteIcon className="h-5 w-5 text-brand-green" /> Comment accéder à ce métier ?
            </h2>
            <p className="mt-2 text-slate-600">
              Plusieurs parcours de formation permettent d'exercer ce métier. Cliquez sur une formation pour découvrir
              son programme, sa durée et son financement.
            </p>
            <div className="mt-6 space-y-5">
              {m.parcours.map((p) => (
                <div key={p.id} className="card p-6">
                  <h3 className="text-lg font-bold text-brand-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  {p.note && (
                    <p className="mt-2 rounded-lg bg-brand-blue/5 px-3 py-2 text-sm text-brand-blue">{p.note}</p>
                  )}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {p.formationSlugs.map((fs) => {
                      const f = formations.find((x) => x.slug === fs);
                      if (!f) return null;
                      return (
                        <Link
                          key={fs}
                          to={`/formations/${f.slug}`}
                          className="group flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 transition-colors hover:border-brand-green/50 hover:bg-brand-green/5"
                        >
                          <span>
                            <span className="flex items-center gap-2 font-semibold text-brand-navy">
                              <GraduationCap className="h-4 w-4 text-brand-green" /> {f.cardTitle}
                            </span>
                            <span className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                              <Clock className="h-3 w-3" /> {f.durationBadge}
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-brand-green transition-transform group-hover:translate-x-1" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SOURCES */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <ExternalLink className="h-5 w-5 text-brand-green" /> Sources
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={`https://candidat.francetravail.fr/metierscope/fiche-metier/${m.romeCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline"
                >
                  France Travail — fiche métier ROME {m.romeCode} <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-slate-400"> (missions, accès au métier, salaires)</span>
              </li>
              <li>
                <a
                  href="https://statistiques.francetravail.org/bmo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline"
                >
                  France Travail — enquête Besoins en Main-d'Œuvre (BMO) <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-slate-400"> (tensions et projets de recrutement)</span>
              </li>
              <li>
                <a
                  href="https://www.aft-dev.com/actualites/taux-demploi-pres-80-apres-formation-cofinancee-laft"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline"
                >
                  AFT — taux d'emploi après une formation transport <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-slate-400"> (taux d'insertion à 6 mois)</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              Salaires indicatifs susceptibles de varier selon l'expérience, la région et la convention collective
              nationale des transports routiers.
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="card p-6">
              <p className="text-sm font-semibold text-slate-400">Salaire débutant</p>
              <p className="mt-1 text-lg font-bold text-brand-navy">{m.salaire}</p>
              <p className="mt-3 text-sm font-semibold text-slate-400">Demande</p>
              <p className="font-bold text-brand-green">{m.demande}</p>
              <Link to="/contact" className="btn-green mt-4 w-full">Demander un conseil</Link>
              <Link to="/simulateur" className="btn-outline mt-2 w-full">Trouver ma formation</Link>
            </div>

            <div className="card bg-brand-navy p-6 text-white">
              <p className="text-sm font-semibold">Une question ?</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-2 text-lg font-bold hover:text-brand-green">
                <Phone className="h-5 w-5 text-brand-green" /> {site.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="bg-brand-green text-white">
        <div className="container py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">Prêt à vous lancer ?</h2>
          <p className="mt-3 text-white/85">Contactez-nous pour un bilan personnalisé et la formation adaptée.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-brand-green hover:bg-white/90">
              Contactez-nous <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/formations" className="btn bg-brand-navy text-white hover:bg-brand-navy-light">
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
