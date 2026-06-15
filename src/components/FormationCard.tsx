import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Formation } from "@/data/formations";

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <Link
      to={`/formations/${formation.slug}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={formation.image}
          alt={formation.cardTitle}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm backdrop-blur">
          <Clock className="h-3 w-3 text-brand-green" />
          {formation.durationBadge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-brand-navy transition-colors group-hover:text-brand-green">
          {formation.cardTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{formation.cardSubtitle}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-all group-hover:gap-2.5">
          Voir la formation <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
