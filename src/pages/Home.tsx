import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MapPin, Star, ShieldCheck, BadgeCheck, CreditCard,
  TrendingUp, Award, Briefcase, Users, Bus, Truck,
  Wallet, Building2, Download,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { site, stats, badges } from "@/lib/site";
import { useFormationsByCategory } from "@/lib/formations";
import { articles } from "@/data/articles";

const heroBadgeIcons = [ShieldCheck, BadgeCheck, CreditCard, TrendingUp, MapPin];

const metiersHome = [
  { icon: Bus, name: "Conducteur de Bus", salaire: "1 900 – 2 800 € brut/mois" },
  { icon: Truck, name: "Chauffeur Poids Lourd", salaire: "1 900 – 3 000 € brut/mois" },
  { icon: Truck, name: "Chauffeur SPL", salaire: "2 200 – 3 500 € brut/mois" },
];

const atouts = [
  { icon: ShieldCheck, title: "Certifié Qualiopi", text: "Centre agréé préfecture, certification Qualiopi pour des formations reconnues par l'État." },
  { icon: Users, title: "Formateurs Experts", text: "Des professionnels du transport avec 20 ans d'expérience terrain et pédagogique." },
  { icon: Briefcase, title: "Accompagnement Emploi", text: "Aide à la recherche d'emploi et mise en relation avec nos entreprises partenaires." },
  { icon: Building2, title: "Formations Financées", text: "Éligibles CPF, France Travail, OPCO, alternance. Financement possible à 100%." },
];

const financements = [
  { icon: Wallet, title: "CPF", text: "Utilisez votre Compte Personnel de Formation" },
  { icon: Building2, title: "France Travail", text: "AIF, POE pour les demandeurs d'emploi" },
  { icon: Users, title: "OPCO / Entreprises", text: "Plan de développement des compétences" },
  { icon: Award, title: "Alternance", text: "Contrat pro ou apprentissage" },
];

const avis = [
  { text: "Excellente formation ! J'ai obtenu mon permis CE du premier coup grâce aux formateurs. Je travaille maintenant en CDI.", name: "Karim B." },
  { text: "Le titre professionnel m'a permis de changer de carrière. Équipe à l'écoute et accompagnement au top.", name: "Sophie L." },
  { text: "Formation FIMO très complète. Le centre est bien équipé et les formateurs sont de vrais professionnels.", name: "Mehdi A." },
];

/** Petite vignette d'icône sobre et premium */
function IconTile({ icon: Icon }: { icon: typeof ShieldCheck }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green ring-1 ring-brand-green/15">
      <Icon className="h-5 w-5" />
    </div>
  );
}

export default function Home() {
  const { marchandises, voyageurs, auto, deuxRoues } = useFormationsByCategory();
  return (
    <>
      {/* HERO premium */}
      <section className="relative isolate overflow-hidden bg-immersive text-white">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

        <div className="container relative grid gap-12 py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-36">
          <div className="animate-fade-up">
            <span className="eyebrow text-brand-green">
              <span className="h-px w-6 bg-white/30" />
              {site.tagline}
            </span>
            <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-white md:text-6xl">
              Devenez conducteur{" "}
              <span className="text-gradient">professionnel</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">
              Formation transport routier d'excellence à Longjumeau (91). Permis C, CE, D, titres
              professionnels, FIMO et FCO — financement jusqu'à 100 %.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/inscription" className="btn-green text-base">
                S'inscrire maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/financement" className="btn glass text-white hover:bg-white/20">
                Financer ma formation
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} className="font-display text-3xl font-semibold text-white" />
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carte de réputation flottante */}
          <div className="animate-fade-up [animation-delay:150ms] lg:animate-float-slow">
            <div className="rounded-2xl bg-white p-7 text-slate-600 shadow-2xl ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-brand-navy">
                  Pari<span className="text-brand-green">permis</span>
                </p>
                <span className="text-xs uppercase tracking-wider text-slate-400">Centre agréé</span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-display text-5xl font-semibold text-brand-navy">{site.rating}</span>
                <div>
                  <div className="flex text-brand-green">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">{site.reviews} avis vérifiés</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm">
                <p className="flex items-center gap-2 text-xs text-slate-400">
                  <BadgeCheck className="h-4 w-4 text-brand-green" /> Avis certifiés norme ISO 20488
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {site.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-green" /> {site.phone}
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-green" /> {site.agrement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU de confiance */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {badges.map((b, i) => {
            const Icon = heroBadgeIcons[i];
            return (
              <span
                key={b}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500"
              >
                <Icon className="h-4 w-4 text-brand-green" />
                {b}
              </span>
            );
          })}
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white">
        <div className="container grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <Counter value={s.value} className="font-display text-4xl font-semibold text-brand-navy md:text-5xl" />
              <p className="mt-2 text-sm text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMATIONS — fond clair, aéré */}
      <section className="section border-t border-slate-200/70 bg-slate-50/60">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Marchandises"
              title="Transport de Marchandises"
              subtitle="Permis, titres professionnels et formations obligatoires pour le transport de marchandises"
            />
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {marchandises.filter((f) => f.slug !== "passerelle-marchandises").map((f, i) => (
              <Reveal key={f.slug} delay={(i % 3) * 90}>
                <FormationCard formation={f} />
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionTitle
                eyebrow="Voyageurs"
                title="Transport de Voyageurs"
                subtitle="Permis, titres professionnels et formations obligatoires pour le transport de voyageurs"
              />
            </Reveal>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {voyageurs.filter((f) => f.slug !== "passerelle-voyageurs").map((f, i) => (
                <Reveal key={f.slug} delay={(i % 3) * 90}>
                  <FormationCard formation={f} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionTitle
                eyebrow="Auto"
                title="Permis Auto & Code de la route"
                subtitle="Permis B, boîte automatique (BEA), conduite accompagnée, conduite supervisée, passerelle BEA → B, accéléré et Code"
              />
            </Reveal>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {auto.map((f, i) => (
                <Reveal key={f.slug} delay={(i % 3) * 90}>
                  <FormationCard formation={f} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionTitle
                eyebrow="Deux-roues"
                title="Permis Deux-roues"
                subtitle="Permis AM (BSR), A1 (& stage 125 cm³), A2 et passerelle A2 vers A"
              />
            </Reveal>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {deuxRoues.map((f, i) => (
                <Reveal key={f.slug} delay={(i % 3) * 90}>
                  <FormationCard formation={f} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/formations" className="btn-outline">
                Voir toutes nos formations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METIERS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              title="Quel métier vous correspond ?"
              subtitle="Découvrez les métiers du transport, les salaires et le parcours pour y accéder"
            />
          </Reveal>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {metiersHome.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="card card-hover group h-full p-7">
                  <IconTile icon={m.icon} />
                  <h3 className="mt-5 text-lg font-semibold text-brand-navy">{m.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">Salaire : {m.salaire}</p>
                  <Link
                    to="/metiers"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-all group-hover:gap-2.5"
                  >
                    Découvrir le métier <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/simulateur" className="btn-navy">
              Simuler mon projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/metiers" className="btn-outline">
              Tous les métiers du transport <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="section border-y border-slate-200/70 bg-slate-50/60">
        <div className="container">
          <Reveal>
            <SectionTitle
              title="Pourquoi choisir PariPermis ?"
              subtitle="Un centre de formation d'excellence au service de votre réussite"
            />
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {atouts.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="card card-hover h-full p-7">
                  <IconTile icon={a.icon} />
                  <h3 className="mt-5 text-base font-semibold text-brand-navy">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCEMENT */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              title="Financez votre formation"
              subtitle="Plusieurs solutions de financement pour rendre nos formations accessibles à tous"
            />
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {financements.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="card card-hover h-full p-7">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-5 text-base font-semibold text-brand-navy">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/financement" className="btn-navy">
              En savoir plus sur le financement <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/guide-financements.pdf" className="btn-outline">
              <Download className="h-4 w-4" /> Télécharger le guide (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="section border-t border-slate-200/70 bg-slate-50/60">
        <div className="container text-center">
          <p className="inline-flex items-center gap-2 text-lg font-semibold text-brand-navy">
            {site.rating}/5
            <span className="inline-flex text-brand-green">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[2.6rem]">Ils nous font confiance</h2>
          <p className="mt-3 text-sm text-slate-400">{site.reviews} avis certifiés norme ISO 20488</p>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {avis.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <div className="card h-full p-7 text-left">
                  <div className="flex text-brand-green">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-600">“{a.text}”</p>
                  <p className="mt-5 text-sm font-semibold text-brand-navy">{a.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand-green/40" />
              Blog
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight md:text-[2.6rem]">
              Conseils & actualités du <span className="text-gradient">transport</span>
            </h2>
            <p className="mt-4 text-slate-500">
              Formations, réglementation, financement et métiers : nos guides pour réussir votre projet.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 90}>
                <Link
                  to={`/blog/${a.slug}`}
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="self-start rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green">
                      {a.tag}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold leading-snug text-brand-navy">{a.title}</h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green transition-all group-hover:gap-2.5">
                      Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog" className="btn-outline">
              Voir tous les articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
