export interface Parcours {
  id: string;
  title: string;
  description: string;
  formationSlugs: string[];
  note?: string;
}

export interface Metier {
  slug: string;
  romeCode: string; // code ROME de la fiche métier France Travail
  name: string;
  category: "marchandises" | "voyageurs";
  description: string;
  missions: string[];
  evolution: string;
  salaire: string;
  demande: string;
  insertion: string; // taux d'insertion dans l'emploi (source AFT)
  employeurs: string[]; // principaux employeurs/recruteurs du secteur en France
  image: string;
  parcours: Parcours[];
}

// Visuels fournis par le client (brandés PariPermis).
const PH_TRUCK = "/images/camion.jpg"; // porteur / livreur
const PH_SPL = "/images/super-lourd.jpg"; // super-lourd
const PH_BUS = "/images/autocar.jpg"; // conducteur de bus
const PH_CAR = "/images/autocar.jpg"; // conducteur de car

// Taux d'insertion : enquête AFT (2023) — ≈ 80 % en emploi 6 mois après une
// formation transport (permis + FIMO ou Titre Professionnel) cofinancée par l'AFT.
const INSERTION = "≈ 80 % en emploi dans les 6 mois suivant la formation (enquête AFT 2023)";

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
    slug: "chauffeur-poids-lourd",
    romeCode: "N4101",
    name: "Chauffeur Poids Lourd",
    category: "marchandises",
    description:
      "Le chauffeur poids lourd conduit un véhicule isolé de plus de 3,5 tonnes pour transporter des marchandises. Il assure la livraison en toute sécurité, gère le chargement/déchargement et respecte la réglementation du transport routier. C'est un métier d'autonomie avec une forte demande.",
    missions: [
      "Conduire un véhicule porteur de plus de 3,5 t et livrer les marchandises",
      "Vérifier, charger, arrimer et décharger la marchandise en sécurité",
      "Respecter la réglementation (temps de conduite et de repos, chronotachygraphe)",
      "Assurer la relation avec les clients et l'exploitation",
    ],
    evolution:
      "Évolution possible vers la conduite SPL (super lourd), des spécialisations (ADR, frigorifique, benne) ou des fonctions d'exploitation.",
    salaire: "1 900 € – 2 300 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Geodis", "XPO Logistics", "Dachser", "DB Schenker", "Jacky Perrenot", "FM Logistic"],
    image: PH_TRUCK,
    parcours: PORTEUR,
  },
  {
    slug: "chauffeur-spl",
    romeCode: "N4101",
    name: "Chauffeur SPL",
    category: "marchandises",
    description:
      "Le chauffeur SPL (Super Poids Lourd) conduit des ensembles articulés — tracteur + semi-remorque — pour le transport de marchandises longue distance, en national et international. C'est le profil le plus recherché du transport routier, avec les meilleures rémunérations.",
    missions: [
      "Conduire un ensemble articulé (tracteur + semi-remorque) sur longue distance",
      "Atteler/dételer et contrôler la sécurité de l'ensemble",
      "Organiser ses tournées (national/international) et gérer les documents de transport",
      "Optimiser sa conduite (sécurité et éco-conduite)",
    ],
    evolution:
      "Spécialisations très recherchées (ADR, transport exceptionnel, frigorifique) et évolution vers formateur ou exploitation.",
    salaire: "2 200 € – 2 600 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Geodis", "XPO Logistics", "Dachser", "Jacky Perrenot", "Transports Malherbe", "GT Solutions"],
    image: PH_SPL,
    parcours: SPL,
  },
  {
    slug: "chauffeur-livreur-pl",
    romeCode: "N4105",
    name: "Chauffeur-Livreur PL",
    category: "marchandises",
    description:
      "Le chauffeur-livreur poids lourd assure la distribution de marchandises en zone urbaine et régionale avec un véhicule de plus de 3,5 tonnes. Il combine conduite, relation client et manutention. C'est un métier dynamique avec de nombreuses opportunités d'embauche.",
    missions: [
      "Distribuer des marchandises en zone urbaine et régionale (tournées)",
      "Gérer le chargement, le déchargement et la manutention",
      "Assurer la relation client et les documents de livraison",
      "Respecter les délais et la réglementation routière",
    ],
    evolution:
      "Évolution vers la conduite longue distance (SPL), des spécialisations ou des postes de chef d'équipe / exploitation.",
    salaire: "1 850 € – 2 100 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Geodis", "DHL", "Chronopost", "DB Schenker", "Heppner", "FM Logistic"],
    image: PH_TRUCK,
    parcours: PORTEUR,
  },
  {
    slug: "conducteur-citerne-adr",
    romeCode: "N4101",
    name: "Conducteur Citerne / ADR",
    category: "marchandises",
    description:
      "Le conducteur citerne transporte des liquides (carburants, produits chimiques, alimentaires) dans des véhicules-citernes. Spécialisation très recherchée et parmi les mieux rémunérées du transport routier, elle nécessite une certification ADR complémentaire.",
    missions: [
      "Transporter des produits liquides ou dangereux en véhicule-citerne",
      "Appliquer les procédures de sécurité ADR (chargement, dépotage, signalisation)",
      "Contrôler la citerne et les équipements de sécurité",
      "Respecter une réglementation stricte (ADR, temps de conduite)",
    ],
    evolution:
      "Spécialisation parmi les mieux rémunérées ; évolution vers la formation, le conseil à la sécurité (CSTMD) ou l'exploitation.",
    salaire: "2 400 € – 2 800 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Groupe Charles André (GCA)", "Hoyer", "Suttons", "Transports Bert", "STEF (température dirigée)"],
    image: PH_SPL,
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
    slug: "conducteur-de-bus",
    romeCode: "N4103",
    name: "Conducteur de Bus",
    category: "voyageurs",
    description:
      "Le conducteur de bus assure le transport de voyageurs en milieu urbain et périurbain. Il conduit son véhicule en toute sécurité, accueille les passagers, vend des titres de transport et veille au confort et à la sécurité de tous. C'est un métier de contact, de responsabilité et de service.",
    missions: [
      "Transporter des voyageurs en milieu urbain et périurbain en sécurité",
      "Accueillir les passagers, vendre et contrôler les titres de transport",
      "Respecter les horaires, les arrêts et l'accessibilité PMR",
      "Veiller au confort et à la sécurité à bord",
    ],
    evolution:
      "Évolution vers la conduite de car (longue distance), le tutorat/formation ou des fonctions de régulation/exploitation.",
    salaire: "1 900 € – 2 200 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Keolis (groupe SNCF)", "Transdev", "RATP Dev", "réseaux urbains locaux"],
    image: PH_BUS,
    parcours: VOYAGEURS,
  },
  {
    slug: "conducteur-de-car",
    romeCode: "N4103",
    name: "Conducteur de Car",
    category: "voyageurs",
    description:
      "Le conducteur de car assure le transport de voyageurs sur longue distance : lignes interurbaines, transports scolaires, excursions touristiques en France et à l'étranger. C'est un métier qui allie conduite, relation client et découverte.",
    missions: [
      "Transporter des voyageurs sur lignes interurbaines, scolaires et touristiques",
      "Préparer les itinéraires et assurer le confort et la sécurité des passagers",
      "Accueillir et informer la clientèle",
      "Respecter la réglementation (temps de conduite, chronotachygraphe)",
    ],
    evolution:
      "Évolution vers le grand tourisme, le transport international, le tutorat ou l'exploitation.",
    salaire: "2 000 € – 2 300 € brut/mois",
    demande: "Forte demande",
    insertion: INSERTION,
    employeurs: ["Keolis", "Transdev", "RATP Dev", "FlixBus / BlaBlaCar Bus", "autocaristes régionaux"],
    image: PH_CAR,
    parcours: VOYAGEURS,
  },
];

export const getMetier = (slug: string) => metiers.find((m) => m.slug === slug);
