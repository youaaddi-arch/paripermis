import { useState } from "react";
import { ExternalLink, Building2, ArrowRight } from "lucide-react";
import { opcoSecteurs } from "@/data/financements";

export default function OpcoFinder() {
  const [idx, setIdx] = useState<number>(0); // par défaut : transport / mobilités
  const sel = opcoSecteurs[idx];

  return (
    <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6">
      <p className="flex items-center gap-2 font-bold text-brand-navy">
        <Building2 className="h-5 w-5 text-brand-blue" /> Simulateur : trouvez votre OPCO
      </p>
      <p className="mt-1 text-sm text-slate-600">
        L'OPCO compétent dépend de la branche professionnelle de votre entreprise (convention collective / IDCC).
        Sélectionnez votre secteur d'activité.
      </p>

      <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        Secteur d'activité
      </label>
      <select
        value={idx}
        onChange={(e) => setIdx(Number(e.target.value))}
        className="input mt-1"
      >
        {opcoSecteurs.map((s, i) => (
          <option key={s.opco} value={i}>
            {s.secteur}
          </option>
        ))}
      </select>

      <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Votre OPCO</p>
        <p className="mt-1 text-xl font-extrabold text-brand-navy">{sel.opco}</p>
        <p className="mt-2 text-sm text-slate-600">{sel.exemples}</p>
        <a
          href={sel.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
        >
          Accéder au site de {sel.opco} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Vous ne savez pas de quelle branche vous relevez ? Vérifiez l'IDCC sur votre bulletin de paie, ou
        contactez-nous : nous vous aidons à identifier votre OPCO.{" "}
        <a href="https://www.cfadock.fr/" target="_blank" rel="noreferrer" className="font-semibold text-brand-blue">
          Outil officiel CFADOCK <ArrowRight className="inline h-3 w-3" />
        </a>
      </p>
    </div>
  );
}
