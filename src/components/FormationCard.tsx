import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Formation } from "@/data/formations";

export default function FormationCard({ formation }: { formation: Formation }) {
  const accent = formation.category === "marchandises" ? "bg-brand-blue" : "bg-brand-green";
  return (
    <div className="card group flex flex-col overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <img
          src={formation.image}
          alt={formation.cardTitle}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full ${accent} px-2.5 py-1 text-xs font-semibold text-white`}
        >
          <Clock className="h-3 w-3" />
          {formation.durationBadge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-brand-navy">{formation.cardTitle}</h3>
        <p className="mt-1 text-sm text-slate-500">{formation.cardSubtitle}</p>
        <Link
          to={`/formations/${formation.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all"
        >
          Voir la formation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
