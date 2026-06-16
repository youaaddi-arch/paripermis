import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { useFormations } from "@/lib/formations";

/** Carrousel des catégories : photo + nom de la catégorie + formations cliquables. */
export default function CategoryCarousel() {
  const formations = useFormations();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 md:justify-start [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c) => {
          const items = formations.filter((f) => f.category === c.slug);
          return (
            <article
              key={c.slug}
              className="group relative h-[430px] w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl ring-1 ring-white/15 sm:w-[330px]"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Voile sombre pour la lisibilité du texte blanc */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/60 to-black/25" />

              <div className="relative flex h-full flex-col justify-end p-5 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                <Link
                  to={`/categorie/${c.slug}`}
                  className="text-xl font-extrabold leading-tight text-white hover:text-brand-green"
                >
                  {c.title}
                </Link>

                <ul className="mt-3 space-y-1.5">
                  {items.slice(0, 6).map((f) => (
                    <li key={f.slug}>
                      <Link
                        to={`/formations/${f.slug}`}
                        className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-green"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0 text-brand-green" />
                        <span className="truncate">{f.cardTitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {items.length > 6 && (
                  <Link to={`/categorie/${c.slug}`} className="mt-3 text-sm font-semibold text-white/85 hover:text-brand-green">
                    + {items.length - 6} autres formations…
                  </Link>
                )}

                <Link
                  to={`/categorie/${c.slug}`}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-sm font-bold text-white shadow-lg transition-all hover:gap-2.5 [text-shadow:none]"
                >
                  Voir la catégorie <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Flèches de navigation (desktop) */}
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => scroll(-1)}
        className="absolute -left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-brand-navy shadow-xl transition hover:bg-brand-green hover:text-white md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => scroll(1)}
        className="absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-brand-navy shadow-xl transition hover:bg-brand-green hover:text-white md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
