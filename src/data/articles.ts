export interface Article {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
}

export const articles: Article[] = [
  {
    title: "Permis C, CE ou D : quelle formation choisir ?",
    excerpt: "Tour d'horizon des permis poids lourd et transport en commun pour orienter votre projet professionnel.",
    date: "Juin 2026",
    tag: "Formations",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FIMO / FCO : tout comprendre sur les formations obligatoires",
    excerpt: "Qui est concerné, quelle durée, quelle validité ? On vous explique la qualification initiale et continue.",
    date: "Mai 2026",
    tag: "Réglementation",
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financer son permis poids lourd avec le CPF en 2026",
    excerpt: "Participation de 102,23 €, exonération des demandeurs d'emploi, abondements… le point sur le CPF.",
    date: "Mai 2026",
    tag: "Financement",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Les métiers du transport qui recrutent le plus",
    excerpt: "Chauffeur SPL, conducteur de bus, conducteur citerne : salaires et perspectives d'un secteur en tension.",
    date: "Avril 2026",
    tag: "Métiers",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];
