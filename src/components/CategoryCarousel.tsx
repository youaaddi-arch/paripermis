import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";

/** Carrousel des domaines (style « domaines de compétences ») : photo + titre + « En savoir plus ». */
export default function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/categorie/${c.slug}`}
            className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:w-[300px]"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold leading-tight text-brand-navy">{c.title}</h3>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-green transition-all group-hover:gap-2.5">
                En savoir plus <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation : flèches + barre de progression */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => scroll(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white ring-1 ring-white/30 transition hover:bg-white hover:text-brand-navy"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="relative h-1 w-40 rounded-full bg-white/20">
          <div
            className="absolute top-0 h-1 w-1/3 rounded-full bg-brand-green transition-[left] duration-150"
            style={{ left: `${progress * 66}%` }}
          />
        </div>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => scroll(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white ring-1 ring-white/30 transition hover:bg-white hover:text-brand-navy"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
