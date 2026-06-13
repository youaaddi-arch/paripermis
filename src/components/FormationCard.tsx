import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Formation } from "@/data/formations";

export default function FormationCard({ formation }: { formation: Formation }) {
  const accent = formation.category === "marchandises" ? "bg-brand-blue" : "bg-brand-green";
  return (
    <Link
      to={`/formations/${formation.slug}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={formation.image}
          alt={formation.cardTitle}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* dégradé bas pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full ${accent} px-2.5 py-1 text-xs font-semibold text-white shadow-lg`}
        >
          <Clock className="h-3 w-3" />
          {formation.durationBadge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-brand-navy transition-colors group-hover:text-brand-green">
          {formation.cardTitle}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{formation.cardSubtitle}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-all group-hover:gap-2">
          Voir la formation <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
