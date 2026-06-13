import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Truck, Bus } from "lucide-react";
import { metiers } from "@/data/metiers";
import { site } from "@/lib/site";

const heroStats = [
  { value: "50 000+", label: "postes à pourvoir" },
  { value: "98%", label: "taux d'insertion" },
  { value: "CDI", label: "quasi garanti" },
  { value: "Dès 18 ans", label: "avec Titre Pro" },
];

function MetierCard({ m }: { m: (typeof metiers)[number] }) {
  const Icon = m.category === "marchandises" ? Truck : Bus;
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
          <Icon className="h-5 w-5" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-2.5 py-1 text-xs font-semibold text-brand-green">
          <TrendingUp className="h-3 w-3" /> {m.demande}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-navy">{m.name}</h3>
      <p className="mt-2 text-sm text-slate-500">{m.description}</p>
      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="text-xs text-slate-400">Salaire débutant</p>
        <p className="font-bold text-brand-navy">{m.salaire}</p>
      </div>
    </div>
  );
}

export default function Metiers() {
  const marchandises = metiers.filter((m) => m.category === "marchandises");
  const voyageurs = metiers.filter((m) => m.category === "voyageurs");

  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Les Métiers du Transport</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Un secteur qui recrute massivement : plus de 50 000 postes à pourvoir en France. Découvrez les métiers, les
            salaires, les perspectives et le parcours de formation pour y accéder.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-brand-green md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-extrabold">Transport de Marchandises</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {marchandises.map((m) => <MetierCard key={m.name} m={m} />)}
          </div>

          <h2 className="mt-16 text-2xl font-extrabold">Transport de Voyageurs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {voyageurs.map((m) => <MetierCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      <section className="bg-brand-green text-white">
        <div className="container py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">Prêt à vous lancer ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Contactez-nous pour un bilan personnalisé et trouvez la formation adaptée à votre projet professionnel.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-brand-green hover:bg-white/90">
              Contactez-nous <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/simulateur" className="btn bg-brand-navy text-white hover:bg-brand-navy-light">
              Simuler mon projet
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">{site.phone} · {site.city}</p>
        </div>
      </section>
    </>
  );
}
