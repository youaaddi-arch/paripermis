import SectionTitle from "@/components/SectionTitle";
import FormationCard from "@/components/FormationCard";
import FinalCta from "@/components/FinalCta";
import { useFormationsByCategory } from "@/lib/formations";

export default function Formations() {
  const { marchandises, voyageurs, auto } = useFormationsByCategory();
  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-16 text-center text-white">
        <div className="container">
          <h1 className="text-4xl font-extrabold text-white">Nos Formations</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Permis auto et moto, Code de la route, permis poids lourd, titres professionnels et formations obligatoires
            (FIMO / FCO) pour le transport de marchandises et de voyageurs.
          </p>
        </div>
      </section>

      {auto.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Auto & Moto"
              title="Permis Auto, Moto & Code de la route"
              subtitle="Permis B, boîte automatique, permis accéléré, permis moto et préparation au Code de la route"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {auto.map((f) => <FormationCard key={f.slug} formation={f} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-slate-50">
        <div className="container">
          <SectionTitle
            eyebrow="Marchandises"
            title="Transport de Marchandises"
            subtitle="Permis, titres professionnels et formations obligatoires pour le transport de marchandises"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marchandises.map((f) => <FormationCard key={f.slug} formation={f} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Voyageurs"
            title="Transport de Voyageurs"
            subtitle="Permis, titres professionnels et formations obligatoires pour le transport de voyageurs"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {voyageurs.map((f) => <FormationCard key={f.slug} formation={f} />)}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
