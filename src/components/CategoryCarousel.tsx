import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { categories } from "@/data/categories";
import { useFormations } from "@/lib/formations";

/** Carrousel des catégories : photo + nom de la catégorie + spécialités, lien vers la page de catégorie. */
export default function CategoryCarousel() {
  const formations = useFormations();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c) => {
          const items = formations.filter((f) => f.category === c.slug);
          return (
            <Link
              key={c.slug}
              to={`/categorie/${c.slug}`}
              className="group relative h-[440px] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl ring-1 ring-white/10 sm:w-[340px]"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-brand-navy/10" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-extrabold leading-tight">{c.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {items.slice(0, 6).map((f) => (
                    <li key={f.slug} className="flex items-center gap-2 text-sm text-white/85">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-green" />
                      <span className="truncate">{f.cardTitle}</span>
                    </li>
                  ))}
                  {items.length > 6 && (
                    <li className="text-sm font-medium text-white/60">+ {items.length - 6} autres…</li>
                  )}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                  Voir les formations <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Flèches de navigation */}
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => scroll(-1)}
        className="absolute -left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-brand-navy shadow-lg transition hover:bg-brand-green hover:text-white md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => scroll(1)}
        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-brand-navy shadow-lg transition hover:bg-brand-green hover:text-white md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
