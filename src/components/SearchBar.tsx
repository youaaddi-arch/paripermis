import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useFormations } from "@/lib/formations";
import { dispositifs } from "@/data/financements";

/** Barre de recherche du hero : formations + dispositifs de financement. */
export default function SearchBar() {
  const formations = useFormations();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const query = q.trim().toLowerCase();
  const fResults = query
    ? formations
        .filter((f) => `${f.title} ${f.cardTitle} ${f.cardSubtitle}`.toLowerCase().includes(query))
        .slice(0, 6)
    : [];
  const dResults = query
    ? dispositifs.filter((d) => `${d.name} ${d.code}`.toLowerCase().includes(query)).slice(0, 3)
    : [];
  const hasResults = fResults.length > 0 || dResults.length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/formations");
  };

  return (
    <form onSubmit={submit} className="relative max-w-xl">
      <div className="flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-2xl ring-1 ring-black/5">
        <Search className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Rechercher une formation ou un financement…"
          className="min-w-0 flex-1 bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
        <button type="submit" className="btn-green shrink-0 rounded-full px-5 py-2 text-sm">
          Rechercher
        </button>
      </div>

      {open && query && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl bg-white text-left shadow-2xl ring-1 ring-black/5">
          {hasResults ? (
            <ul className="max-h-80 overflow-auto py-2">
              {fResults.map((f) => (
                <li key={f.slug}>
                  <Link to={`/formations/${f.slug}`} className="block px-4 py-2.5 hover:bg-slate-50">
                    <span className="font-semibold text-brand-navy">{f.cardTitle}</span>
                    <span className="ml-2 text-xs text-slate-400">{f.cardSubtitle}</span>
                  </Link>
                </li>
              ))}
              {dResults.map((d) => (
                <li key={d.code}>
                  <Link to={`/financement/${d.code}`} className="block px-4 py-2.5 hover:bg-slate-50">
                    <span className="font-semibold text-brand-blue">{d.name}</span>
                    <span className="ml-2 text-xs text-slate-400">Financement</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-slate-500">
              Aucun résultat —{" "}
              <Link to="/formations" className="font-semibold text-brand-green hover:underline">
                voir toutes les formations
              </Link>
            </p>
          )}
        </div>
      )}
    </form>
  );
}
