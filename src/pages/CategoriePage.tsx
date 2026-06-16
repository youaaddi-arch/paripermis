import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FormationCard from "@/components/FormationCard";
import FinalCta from "@/components/FinalCta";
import { getCategory } from "@/data/categories";
import { useFormations } from "@/lib/formations";

export default function CategoriePage() {
  const { cat } = useParams();
  const category = getCategory(cat);
  const formations = useFormations();
  if (!category) return <Navigate to="/formations" replace />;

  const items = formations.filter((f) => f.category === category.slug);

  return (
    <>
      {/* HERO catégorie (une seule grande photo) */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <img src={category.image} alt={category.title} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />
        <div className="container relative py-16">
          <Link to="/formations" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Toutes les formations
          </Link>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold text-white md:text-4xl">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-white/80">{category.subtitle}</p>
        </div>
      </section>

      {/* Formations de la catégorie (avec photos) */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((f) => (
              <FormationCard key={f.slug} formation={f} />
            ))}
          </div>
          <div className="mt-10">
            <Link to="/formations" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all">
              Voir toutes les catégories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
