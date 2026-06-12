import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MapPin, Star, ShieldCheck, BadgeCheck, CreditCard,
  TrendingUp, Award, GraduationCap, Briefcase, Users, Bus, Truck,
  Wallet, Building2, Download,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FinalCta from "@/components/FinalCta";
import { site, stats, badges } from "@/lib/site";
import { marchandises, voyageurs } from "@/data/formations";

const heroBadgeIcons = [ShieldCheck, BadgeCheck, CreditCard, TrendingUp, MapPin];

const metiersHome = [
  { icon: Bus, name: "Conducteur de Bus", salaire: "1 900 – 2 800 € brut/mois" },
  { icon: Truck, name: "Chauffeur Poids Lourd", salaire: "1 900 – 3 000 € brut/mois" },
  { icon: Truck, name: "Chauffeur SPL", salaire: "2 200 – 3 500 € brut/mois" },
];

const atouts = [
  { icon: ShieldCheck, title: "Certifié Qualiopi", text: "Centre agréé préfecture, certification Qualiopi pour des formations reconnues par l'État." },
  { icon: Users, title: "Formateurs Experts", text: "Des professionnels du transport avec plus de 15 ans d'expérience terrain et pédagogique." },
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
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />
        <div className="container relative grid gap-10 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold text-white/80">
              Pari<span className="text-brand-green">permis</span> · {site.tagline}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Devenez conducteur
              <br />
              <span className="text-brand-green">professionnel</span>
            </h1>
            <p className="mt-5 max-w-lg text-white/75">
              Formation transport routier de qualité à Longjumeau (91). Permis C, CE, D, titres professionnels, FIMO et
              FCO.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/inscription" className="btn-green">
                S'inscrire maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/financement" className="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
                Financer ma formation
              </Link>
            </div>
          </div>

          {/* Rating card */}
          <div className="animate-fade-up rounded-2xl bg-white p-6 text-slate-700 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="font-extrabold text-brand-navy">
                Pari<span className="text-brand-green">permis</span>
              </p>
              <span className="text-xs text-slate-400">Centre de formation agréé</span>
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
      </section>

      {/* BADGES */}
      <div className="border-b border-slate-200 bg-white">
        <div className="container flex flex-wrap items-center justify-center gap-3 py-5">
          {badges.map((b, i) => {
            const Icon = heroBadgeIcons[i];
            return (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                <Icon className="h-3.5 w-3.5 text-brand-green" />
                {b}
              </span>
            );
          })}
        </div>
      </div>

      {/* STATS */}
      <section className="bg-slate-50">
        <div className="container grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-green md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARCHANDISES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Marchandises"
            title="Transport de Marchandises"
            subtitle="Permis, titres professionnels et formations obligatoires pour le transport de marchandises"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marchandises.filter((f) => f.slug !== "passerelle-marchandises").map((f) => (
              <FormationCard key={f.slug} formation={f} />
            ))}
          </div>
        </div>
      </section>

      {/* VOYAGEURS */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionTitle
            eyebrow="Voyageurs"
            title="Transport de Voyageurs"
            subtitle="Permis, titres professionnels et formations obligatoires pour le transport de voyageurs"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {voyageurs.filter((f) => f.slug !== "passerelle-voyageurs").map((f) => (
              <FormationCard key={f.slug} formation={f} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/formations" className="btn-outline">
              Voir toutes nos formations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* METIERS */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Quel métier vous correspond ?"
            subtitle="Découvrez les métiers du transport, les salaires et le parcours pour y accéder"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {metiersHome.map((m) => (
              <div key={m.name} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{m.name}</h3>
                <p className="mt-1 text-sm text-slate-500">Salaire : {m.salaire}</p>
                <Link
                  to="/metiers"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all"
                >
                  Découvrir le métier <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
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
          <SectionTitle
            title="Pourquoi choisir PariPermis ?"
            subtitle="Un centre de formation d'excellence au service de votre réussite"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {atouts.map((a) => (
              <div key={a.title} className="card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCEMENT */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Financez votre formation"
            subtitle="Plusieurs solutions de financement pour rendre nos formations accessibles à tous"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financements.map((f) => (
              <div key={f.title} className="card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.text}</p>
              </div>
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
            {avis.map((a) => (
              <div key={a.name} className="card p-6 text-left">
                <div className="flex text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm italic text-slate-600">"{a.text}"</p>
                <p className="mt-4 text-sm font-semibold text-brand-navy">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
