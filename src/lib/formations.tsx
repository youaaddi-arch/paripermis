import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { formations as staticFormations, type Formation } from "@/data/formations";
import { fetchFormations } from "@/lib/sanity";

/**
 * Source des formations : Sanity (CMS) avec les données statiques en repli.
 * Le rendu initial utilise les données statiques (aucun écran vide / flash),
 * puis Sanity prend le relais dès que les documents sont chargés.
 */
const FormationsContext = createContext<Formation[]>(staticFormations);

export function FormationsProvider({ children }: { children: ReactNode }) {
  const [formations, setFormations] = useState<Formation[]>(staticFormations);

  useEffect(() => {
    let active = true;
    fetchFormations()
      .then((data) => {
        if (!active || !data.length) return;
        // Fusion : Sanity surcharge les champs renseignés, mais on conserve
        // toujours les formations définies en statique (y compris celles
        // absentes de Sanity, ex. permis auto/moto récemment ajoutés).
        const staticBySlug = new Map(staticFormations.map((f) => [f.slug, f]));
        const clean = (obj: Formation) =>
          Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== ""));
        const merged = data.map((d) => ({ ...(staticBySlug.get(d.slug) || {}), ...clean(d) } as Formation));
        const sanitySlugs = new Set(data.map((d) => d.slug));
        const staticOnly = staticFormations.filter((f) => !sanitySlugs.has(f.slug));
        setFormations([...merged, ...staticOnly]);
      })
      .catch(() => {
        /* on conserve les données statiques en cas d'erreur réseau */
      });
    return () => {
      active = false;
    };
  }, []);

  return <FormationsContext.Provider value={formations}>{children}</FormationsContext.Provider>;
}

export function useFormations() {
  return useContext(FormationsContext);
}

export function useFormation(slug: string | undefined) {
  return useFormations().find((f) => f.slug === slug);
}

export function useFormationsByCategory() {
  const formations = useFormations();
  return {
    marchandises: formations.filter((f) => f.category === "marchandises"),
    voyageurs: formations.filter((f) => f.category === "voyageurs"),
    auto: formations.filter((f) => f.category === "auto"),
  };
}
