import type { Category } from "@/data/formations";

// Catégories du catalogue : utilisées pour le carrousel d'accueil et les pages
// de catégorie (/categorie/:slug). Le slug correspond au champ `category` des formations.
export interface CategoryInfo {
  slug: Category;
  title: string;
  short: string; // nom court (carrousel)
  subtitle: string;
  image: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "marchandises",
    title: "Transport de marchandises",
    short: "Marchandises",
    subtitle: "Permis poids lourd (C, CE), titres professionnels, FIMO et FCO marchandises.",
    image: "/images/camion.webp",
  },
  {
    slug: "voyageurs",
    title: "Transport en commun sur route",
    short: "Voyageurs",
    subtitle: "Permis D, titre professionnel, FIMO et FCO voyageurs.",
    image: "/images/autocar.webp",
  },
  {
    slug: "auto",
    title: "Permis Auto & Code de la route",
    short: "Auto",
    subtitle: "Permis B, BEA, conduite accompagnée et supervisée, accéléré et Code.",
    image: "/images/voiture.webp",
  },
  {
    slug: "deux-roues",
    title: "Permis Deux-roues",
    short: "Deux-roues",
    subtitle: "Permis AM (BSR), A1 (& stage 125 cm³), A2 et passerelle A2 → A.",
    image: "/images/moto.webp",
  },
];

export const getCategory = (slug?: string) => categories.find((c) => c.slug === slug);
