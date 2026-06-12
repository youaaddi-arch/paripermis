export interface Metier {
  name: string;
  category: "marchandises" | "voyageurs";
  description: string;
  salaire: string;
  demande: string;
}

export const metiers: Metier[] = [
  {
    name: "Chauffeur Poids Lourd",
    category: "marchandises",
    description:
      "Le chauffeur poids lourd conduit un véhicule isolé de plus de 3,5 tonnes pour transporter des marchandises. Il assure la livraison en toute sécurité, gère le chargement/déchargement et respecte la réglementation du transport routier. C'est un métier d'autonomie avec une forte demande.",
    salaire: "1 900 € – 2 300 € brut/mois",
    demande: "Forte demande",
  },
  {
    name: "Chauffeur SPL",
    category: "marchandises",
    description:
      "Le chauffeur SPL (Super Poids Lourd) conduit des ensembles articulés — tracteur + semi-remorque — pour le transport de marchandises longue distance, en national et international. C'est le profil le plus recherché du transport routier, avec les meilleures rémunérations.",
    salaire: "2 200 € – 2 600 € brut/mois",
    demande: "Forte demande",
  },
  {
    name: "Chauffeur-Livreur PL",
    category: "marchandises",
    description:
      "Le chauffeur-livreur poids lourd assure la distribution de marchandises en zone urbaine et régionale avec un véhicule de plus de 3,5 tonnes. Il combine conduite, relation client et manutention. C'est un métier dynamique avec de nombreuses opportunités d'embauche.",
    salaire: "1 850 € – 2 100 € brut/mois",
    demande: "Forte demande",
  },
  {
    name: "Conducteur Citerne / ADR",
    category: "marchandises",
    description:
      "Le conducteur citerne transporte des liquides (carburants, produits chimiques, alimentaires) dans des véhicules-citernes. Spécialisation très recherchée et parmi les mieux rémunérées du transport routier, elle nécessite une certification ADR complémentaire.",
    salaire: "2 400 € – 2 800 € brut/mois",
    demande: "Forte demande",
  },
  {
    name: "Conducteur de Bus",
    category: "voyageurs",
    description:
      "Le conducteur de bus assure le transport de voyageurs en milieu urbain et périurbain. Il conduit son véhicule en toute sécurité, accueille les passagers, vend des titres de transport et veille au confort et à la sécurité de tous. C'est un métier de contact, de responsabilité et de service.",
    salaire: "1 900 € – 2 200 € brut/mois",
    demande: "Forte demande",
  },
  {
    name: "Conducteur de Car",
    category: "voyageurs",
    description:
      "Le conducteur de car assure le transport de voyageurs sur longue distance : lignes interurbaines, transports scolaires, excursions touristiques en France et à l'étranger. C'est un métier qui allie conduite, relation client et découverte.",
    salaire: "2 000 € – 2 300 € brut/mois",
    demande: "Forte demande",
  },
];
