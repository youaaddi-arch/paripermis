import { Link } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Truck, Map, Presentation, ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const formateurPoints = [
  "Formateurs certifiés BEPECASER mention lourds",
  "Plus de 15 ans d'expérience en moyenne",
  "Pédagogie adaptée à chaque profil",
  "Suivi individualisé de chaque stagiaire",
];

const equipements = [
  { icon: Truck, title: "Flotte de véhicules", text: "Poids lourds, ensembles articulés, autocars — tous récents et parfaitement entretenus." },
  { icon: Map, title: "Piste de manœuvres", text: "Piste privée dédiée aux exercices de manœuvres et à la prise en main des véhicules." },
  { icon: Presentation, title: "Salles de formation", text: "Salles équipées de matériel multimédia, simulateurs et supports pédagogiques modernes." },
];

export default function NotreCentre() {
  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Notre Centre</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Découvrez PariPermis, votre centre de formation transport routier à Longjumeau
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">Un centre d'excellence pour le transport</h2>
            <div className="mt-4 space-y-4 text-slate-600">
              <p>
                PariPermis est un centre de formation spécialisé dans le transport routier, implanté à Longjumeau
                (Essonne). Depuis plus de 15 ans, nous formons les conducteurs professionnels de demain.
              </p>
              <p>
                Notre mission : vous accompagner vers l'obtention de votre permis poids lourd ou titre professionnel avec
                un enseignement de qualité, dispensé par des formateurs expérimentés et passionnés.
              </p>
              <p>
                Certifié Qualiopi, notre centre répond aux exigences les plus strictes en matière de qualité de
                formation professionnelle.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green">
                <ShieldCheck className="h-4 w-4" /> Certifié Qualiopi
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1.5 text-sm font-semibold text-brand-blue">
                <BadgeCheck className="h-4 w-4" /> Agrément Préfectoral
              </span>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=900&q=80"
            alt="Centre de formation PariPermis"
            className="h-80 w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80"
            alt="Nos formateurs"
            className="order-2 h-80 w-full rounded-2xl object-cover shadow-lg lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-extrabold">Nos Formateurs</h2>
            <p className="mt-4 text-slate-600">
              Notre équipe est composée de formateurs professionnels, titulaires des diplômes requis et forts d'une
              expérience significative dans le transport routier. Chacun apporte son expertise terrain pour une formation
              au plus proche de la réalité du métier.
            </p>
            <ul className="mt-6 space-y-3">
              {formateurPoints.map((p) => (
                <li key={p} className="flex gap-2.5 text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold">Nos Équipements</h2>
          <p className="mt-2 text-slate-500">Des infrastructures modernes pour une formation optimale</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {equipements.map((e) => (
              <div key={e.title} className="card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{e.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue text-white">
        <div className="container py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">Venez découvrir notre centre</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Prenez rendez-vous pour une visite de nos locaux et un entretien avec nos formateurs
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/contact" className="btn bg-white text-brand-blue hover:bg-white/90">
              Prendre rendez-vous <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">{site.address}</p>
        </div>
      </section>
    </>
  );
}
