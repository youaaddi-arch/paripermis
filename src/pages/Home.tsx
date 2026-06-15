import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MapPin, Star, ShieldCheck, BadgeCheck, CreditCard,
  TrendingUp, Award, Briefcase, Users, Bus, Truck,
  Wallet, Building2, Download, ChevronDown, Sparkles,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import DrivingTruck from "@/components/DrivingTruck";
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

export default function Home() {
  const { marchandises, voyageurs, auto, deuxRoues } = useFormationsByCategory();
  // Scission des marchandises : poids lourd (porteur) vs super-lourd (ensemble articulé).
  const superLourdSlugs = ["permis-ce", "tp-transport-marchandises-tous-vehicules"];
  const poidsLourd = marchandises.filter((f) => !superLourdSlugs.includes(f.slug));
  const superLourd = marchandises.filter((f) => superLourdSlugs.includes(f.slug));
  return (
    <>
      {/* HERO immersif */}
      <section className="relative isolate overflow-hidden bg-immersive text-white">
        {/* image de fond */}
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        />
        {/* grille discrète */}
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        {/* blobs animés */}
        <div className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-brand-green/30 blur-3xl animate-blob" />
        <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:4s]" />

        <div className="container relative grid gap-10 py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-32">
          <div className="animate-fade-up">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              {site.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
              Devenez conducteur
              <br />
              <span className="text-gradient">professionnel</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              Formation transport routier de qualité à Longjumeau (91). Permis C, CE, D, titres
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
            {/* mini-stats */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} className="text-2xl font-extrabold text-white" />
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rating card flottante */}
          <div className="animate-fade-up [animation-delay:150ms] lg:animate-float-slow">
            <div className="rounded-2xl bg-white p-6 text-slate-700 shadow-2xl ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="font-extrabold text-brand-navy">
                  Pari<span className="text-brand-green">permis</span>
                </p>
                <span className="text-xs text-slate-400">Centre agréé</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-4xl font-extrabold text-brand-navy">{site.rating}</span>
                <div>
                  <div className="flex text-brand-green">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">{site.reviews} avis vérifiés</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm">
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

        {/* indicateur de scroll */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      {/* BADGES défilants */}
      <div className="border-b border-slate-200 bg-white">
        <div className="container flex flex-wrap items-center justify-center gap-3 py-5">
          {badges.map((b, i) => {
            const Icon = heroBadgeIcons[i];
            return (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-brand-green/40 hover:text-brand-navy"
              >
                <Icon className="h-3.5 w-3.5 text-brand-green" />
                {b}
              </span>
            );
          })}
        </div>
      </div>

      {/* STATS animées */}
      <section className="bg-slate-50">
        <div className="container grid grid-cols-2 gap-6 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <Counter value={s.value} className="text-3xl font-extrabold text-brand-green md:text-4xl" />
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMATIONS (fond bleu immersif) */}
      <section className="relative isolate overflow-hidden bg-immersive py-16 text-white md:py-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl animate-blob" />
        <div className="absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:4s]" />

        {[
          {
            img: "/images/camion.webp",
            eyebrow: "Poids lourd",
            title: "Poids lourd — porteur",
            subtitle: "Permis C, titre pro porteur, FIMO et FCO marchandises.",
            items: poidsLourd,
          },
          {
            img: "/images/super-lourd.webp",
            eyebrow: "Super lourd",
            title: "Super lourd — ensemble articulé",
            subtitle: "Permis CE et titre professionnel tous véhicules.",
            items: superLourd,
          },
          {
            img: "/images/autocar.webp",
            eyebrow: "Voyageurs",
            title: "Transport en commun sur route",
            subtitle: "Permis D, titres professionnels, FIMO et FCO voyageurs.",
            items: voyageurs,
          },
          {
            img: "/images/voiture.webp",
            eyebrow: "Auto",
            title: "Permis Auto & Code de la route",
            subtitle: "Permis B, BEA, conduite accompagnée et supervisée, accéléré et Code.",
            items: auto,
          },
          {
            img: "/images/moto.webp",
            eyebrow: "Deux-roues",
            title: "Permis Deux-roues",
            subtitle: "Permis AM (BSR), A1 (& stage 125 cm³), A2 et passerelle A2 → A.",
            items: deuxRoues,
          },
        ].map((cat, idx) => (
          <div key={cat.eyebrow} className={`container ${idx > 0 ? "mt-12" : ""}`}>
            <Reveal>
              <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                {/* Bannière de catégorie (une seule image) */}
                <div className="relative min-h-[240px] overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img src={cat.img} alt={cat.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-green">{cat.eyebrow}</span>
                    <h3 className="mt-1 text-2xl font-extrabold text-white">{cat.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">{cat.subtitle}</p>
                  </div>
                </div>
                {/* Rubriques (permis) sans image répétée */}
                <div className="grid content-start gap-3 sm:grid-cols-2">
                  {cat.items.map((f) => (
                    <FormationCard key={f.slug} formation={f} compact />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        ))}

        <div className="container mt-12 text-center">
          <Link to="/formations" className="btn glass text-white hover:bg-white/20">
            Voir toutes nos formations <ArrowRight className="h-4 w-4" />
          </Link>
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {metiersHome.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="card card-hover group h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-blue-400 text-white shadow-glow-blue transition-transform group-hover:scale-110">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-navy">{m.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">Salaire : {m.salaire}</p>
                  <Link
                    to="/metiers"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-all hover:gap-2"
                  >
                    Découvrir le métier <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/simulateur" className="btn-blue">
              Simuler mon projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/metiers" className="btn-outline">
              Tous les métiers du transport <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="section bg-slate-50">
        <div className="container">
          <Reveal>
            <SectionTitle
              title="Pourquoi choisir PariPermis ?"
              subtitle="Un centre de formation d'excellence au service de votre réussite"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {atouts.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="card card-hover group h-full p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-emerald-400 text-white shadow-glow transition-transform group-hover:scale-110">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-navy">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{a.text}</p>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financements.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="card card-hover group h-full p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-glow-blue transition-transform group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/financement" className="btn-blue">
              En savoir plus sur le financement <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/guide-financements.pdf" className="btn-outline">
              <Download className="h-4 w-4" /> Télécharger le guide (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="section bg-slate-50">
        <div className="container text-center">
          <p className="text-lg font-bold text-brand-navy">
            {site.rating}/5{" "}
            <span className="ml-1 inline-flex translate-y-0.5 text-brand-green">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Ils nous font confiance</h2>
          <p className="mt-2 text-sm text-slate-400 underline">{site.reviews} avis certifiés norme ISO 20488</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {avis.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <div className="card card-hover h-full p-6 text-left">
                  <div className="flex text-brand-green">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm italic text-slate-600">"{a.text}"</p>
                  <p className="mt-4 text-sm font-semibold text-brand-navy">{a.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG sur fond bleu avec camion animé */}
      <section className="relative isolate overflow-hidden bg-immersive py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
        <div className="absolute -right-16 top-0 -z-10 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl animate-blob" />
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white/90">
              Blog
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Conseils & actualités du <span className="text-gradient">transport</span>
            </h2>
            <p className="mt-3 text-white/75">
              Formations, réglementation, financement et métiers : nos guides pour réussir votre projet.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 90}>
                <Link
                  to={`/blog/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="self-start rounded-full bg-brand-green/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      {a.tag}
                    </span>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-white">{a.title}</h3>
                    <p className="mt-2 line-clamp-3 text-xs text-white/65">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan transition-all group-hover:gap-2">
                      Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <DrivingTruck />

          <div className="text-center">
            <Link to="/blog" className="btn glass text-white hover:bg-white/20">
              Voir tous les articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
