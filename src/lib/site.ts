export const site = {
  name: "PariPermis",
  tagline: "Centre de formation transport routier",
  phone: "01 69 09 29 27",
  phoneHref: "tel:+33169092927",
  email: "contact@paripermis.fr",
  referentHandicapEmail: "contact@paripermis.fr",
  address: "18 avenue du Général de Gaulle, 91160 Longjumeau",
  city: "Longjumeau (91)",
  agrement: "Agrément n° E1709100250",
  rating: "4,8",
  reviews: "793",
  successRate: "83%",
};

// Deux agences. Paris est dédiée au permis auto uniquement ; Longjumeau couvre
// l'ensemble des formations (auto, deux-roues, poids lourd, transport).
export const agences = [
  {
    name: "PariPermis Longjumeau",
    address: "18 avenue du Général de Gaulle, 91160 Longjumeau",
    phone: "01 69 09 29 27",
    phoneHref: "tel:+33169092927",
    note: "Toutes nos formations : auto, deux-roues, poids lourd et transport.",
    mapsQuery: "18 avenue du Général de Gaulle 91160 Longjumeau",
  },
  {
    name: "PariPermis Paris",
    address: "27 rue Linné, 75005 Paris",
    phone: "09 82 31 86 41",
    phoneHref: "tel:+33982318641",
    note: "Permis auto uniquement.",
    mapsQuery: "27 rue Linné 75005 Paris",
  },
];

export const stats = [
  { value: "4 500", label: "Formations par an" },
  { value: "83%", label: "Réussite au permis" },
  { value: "4,8/5", label: "Avis Google" },
  { value: "20 ans", label: "D'expérience" },
];

export const badges = [
  "Certifié Qualiopi",
  "Agrément préfectoral",
  "Éligible CPF",
  "83% de réussite",
  "Longjumeau (91)",
];
