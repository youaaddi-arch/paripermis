export interface Parcours {
  id: string;
  title: string;
  description: string;
  formationSlugs: string[];
  note?: string;
}

export interface Metier {
  name: string;
  category: "marchandises" | "voyageurs";
  description: string;
  salaire: string;
  demande: string;
  parcours: Parcours[];
}

// Parcours réutilisables
const PORTEUR: Parcours[] = [
  {
    id: "permis-c-fimo",
    title: "Permis C + FIMO Marchandises",
    description:
      "Le permis C seul ne permet pas d'exercer : la FIMO (qualification initiale) est obligatoire pour conduire à titre professionnel.",
    formationSlugs: ["permis-c", "fimo-marchandises"],
    note: "Déjà qualifié dans le transport de voyageurs ? Une passerelle de 35 h remplace la FIMO.",
  },
  {
    id: "tp-porteur",
    title: "Titre Pro Conducteur Marchandises sur porteur",
    description:
      "Un parcours unique qui délivre par équivalence le permis C, la qualification de conducteur (CQC) et le certificat ADR.",
    formationSlugs: ["tp-transport-marchandises-porteur"],
  },
];

const SPL: Parcours[] = [
  {
    id: "permis-ce-fimo",
    title: "Permis CE + FIMO Marchandises",
    description:
      "Conduite d'ensembles articulés (super lourd). Le permis CE nécessite le permis C ; la FIMO reste obligatoire pour exercer.",
    formationSlugs: ["permis-ce", "fimo-marchandises"],
  },
  {
    id: "tp-tous-vehicules",
    title: "Titre Pro Conducteur Marchandises sur tous véhicules",
    description:
      "Parcours complet super lourd : délivre par équivalence le permis CE, la qualification de conducteur (CQC) et le certificat ADR.",
    formationSlugs: ["tp-transport-marchandises-tous-vehicules"],
  },
];

const VOYAGEURS: Parcours[] = [
  {
    id: "permis-d-fimo",
    title: "Permis D + FIMO Voyageurs",
    description:
      "Le permis D seul ne permet pas d'exercer : la FIMO Voyageurs est obligatoire pour transporter des voyageurs à titre professionnel.",
    formationSlugs: ["permis-d", "fimo-voyageurs"],
    note: "Déjà qualifié dans le transport de marchandises ? Une passerelle de 35 h remplace la FIMO.",
  },
  {
    id: "tp-commun",
    title: "Titre Pro Conducteur de transport en commun sur route",
    description:
      "Parcours complet qui délivre le permis D et la qualification de conducteur de voyageurs.",
    formationSlugs: ["tp-transport-en-commun"],
  },
];

export const metiers: Metier[] = [
  {
    name: "Chauffeur Poids Lourd",
    category: "marchandises",
    description:
      "Le chauffeur poids lourd conduit un véhicule isolé de plus de 3,5 tonnes pour transporter des marchandises. Il assure la livraison en toute sécurité, gère le chargement/déchargement et respecte la réglementation du transport routier. C'est un métier d'autonomie avec une forte demande.",
    salaire: "1 900 € – 2 300 € brut/mois",
    demande: "Forte demande",
    parcours: PORTEUR,
  },
  {
    name: "Chauffeur SPL",
    category: "marchandises",
    description:
      "Le chauffeur SPL (Super Poids Lourd) conduit des ensembles articulés — tracteur + semi-remorque — pour le transport de marchandises longue distance, en national et international. C'est le profil le plus recherché du transport routier, avec les meilleures rémunérations.",
    salaire: "2 200 € – 2 600 € brut/mois",
    demande: "Forte demande",
    parcours: SPL,
  },
  {
    name: "Chauffeur-Livreur PL",
    category: "marchandises",
    description:
      "Le chauffeur-livreur poids lourd assure la distribution de marchandises en zone urbaine et régionale avec un véhicule de plus de 3,5 tonnes. Il combine conduite, relation client et manutention. C'est un métier dynamique avec de nombreuses opportunités d'embauche.",
    salaire: "1 850 € – 2 100 € brut/mois",
    demande: "Forte demande",
    parcours: PORTEUR,
  },
  {
    name: "Conducteur Citerne / ADR",
    category: "marchandises",
    description:
      "Le conducteur citerne transporte des liquides (carburants, produits chimiques, alimentaires) dans des véhicules-citernes. Spécialisation très recherchée et parmi les mieux rémunérées du transport routier, elle nécessite une certification ADR complémentaire.",
    salaire: "2 400 € – 2 800 € brut/mois",
    demande: "Forte demande",
    parcours: [
      {
        id: "permis-c-fimo-adr",
        title: "Permis C/CE + FIMO + habilitation ADR",
        description:
          "Base conducteur marchandises (permis + FIMO), à compléter par une habilitation ADR pour le transport de matières dangereuses.",
        formationSlugs: ["permis-c", "fimo-marchandises"],
        note: "L'habilitation ADR est une formation complémentaire spécifique — nous consulter.",
      },
      {
        id: "tp-porteur-adr",
        title: "Titre Pro Conducteur Marchandises",
        description: "Le titre professionnel inclut le certificat ADR par équivalence.",
        formationSlugs: ["tp-transport-marchandises-porteur"],
      },
    ],
  },
  {
    name: "Conducteur de Bus",
    category: "voyageurs",
    description:
      "Le conducteur de bus assure le transport de voyageurs en milieu urbain et périurbain. Il conduit son véhicule en toute sécurité, accueille les passagers, vend des titres de transport et veille au confort et à la sécurité de tous. C'est un métier de contact, de responsabilité et de service.",
    salaire: "1 900 € – 2 200 € brut/mois",
    demande: "Forte demande",
    parcours: VOYAGEURS,
  },
  {
    name: "Conducteur de Car",
    category: "voyageurs",
    description:
      "Le conducteur de car assure le transport de voyageurs sur longue distance : lignes interurbaines, transports scolaires, excursions touristiques en France et à l'étranger. C'est un métier qui allie conduite, relation client et découverte.",
    salaire: "2 000 € – 2 300 € brut/mois",
    demande: "Forte demande",
    parcours: VOYAGEURS,
  },
];
