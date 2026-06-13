export interface Dispositif {
  code: string;
  name: string;
  description: string;
  public: string;
  link: { label: string; url: string };
  links?: { label: string; url: string }[]; // liens complémentaires (ex. liste des OPCO)
  linksLabel?: string; // titre de la liste de liens complémentaires
}

export const dispositifs: Dispositif[] = [
  {
    code: "CPF",
    name: "Compte Personnel de Formation",
    description:
      "Le CPF est un compte individuel permettant à une personne de financer une formation certifiante inscrite au RNCP ou au Répertoire Spécifique. Depuis 2024, une participation forfaitaire obligatoire de 102,23 € (montant 2025, revalorisé chaque année) est à la charge du bénéficiaire pour toute formation financée via le CPF. Cette participation est réglée directement sur la plateforme Mon Compte Formation. Les demandeurs d'emploi inscrits à France Travail en sont exonérés.",
    public: "Salariés, demandeurs d'emploi, travailleurs indépendants.",
    link: { label: "Accéder à Mon Compte Formation", url: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/" },
    links: [
      { label: "Le CPF avec France Travail", url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/le-compte-personnel-de-formation.html" },
    ],
    linksLabel: "Autres accès",
  },
  {
    code: "AIF",
    name: "Aide Individuelle à la Formation",
    description:
      "Aide financière permettant de financer une formation lorsque les autres dispositifs ne couvrent pas la totalité du coût.",
    public: "Demandeurs d'emploi inscrits à France Travail.",
    link: {
      label: "En savoir plus sur l'AIF",
      url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html",
    },
  },
  {
    code: "POE",
    name: "Préparation Opérationnelle à l'Emploi (POEI)",
    description:
      "Dispositif permettant de financer une formation avant une embauche lorsqu'un candidat doit acquérir des compétences pour occuper un poste.",
    public: "Demandeurs d'emploi avec promesse d'embauche.",
    link: {
      label: "En savoir plus sur la POEI",
      url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/la-preparation-operationnelle-a.html",
    },
  },
  {
    code: "POEC",
    name: "Préparation Opérationnelle à l'Emploi Collective",
    description:
      "Formation collective financée par les OPCO et l'État pour répondre aux besoins de recrutement d'un secteur.",
    public: "Demandeurs d'emploi, publics en insertion.",
    link: {
      label: "En savoir plus sur la POEC",
      url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/la-preparation-operationnelle-1.html",
    },
  },
  {
    code: "AFPR",
    name: "Action de Formation Préalable au Recrutement",
    description:
      "L'AFPR permet de financer une formation courte préalable à une embauche (CDD de 6 à 12 mois ou contrat de professionnalisation à durée déterminée) afin d'adapter les compétences du candidat au poste proposé.",
    public: "Demandeurs d'emploi avec promesse d'embauche.",
    link: {
      label: "Fiche AFPR (France Travail)",
      url: "https://www.francetravail.fr/files/live/sites/PE/files/fichiers-en-telechargement/fichiers-en-telechargement---emp/com6387613490809875433-1.pdf",
    },
  },
  {
    code: "OPCO",
    name: "OPCO / Plan de développement des compétences",
    description:
      "Les OPCO (Opérateurs de Compétences) financent la formation des salariés des entreprises de leur branche. Pour le transport routier, l'OPCO de référence est OPCO Mobilités.",
    public: "Salariés en poste, entreprises du secteur transport.",
    link: { label: "OPCO Mobilités (transport routier)", url: "https://www.opcomobilites.fr/" },
    linksLabel: "Les 11 OPCO",
    links: [
      { label: "OPCO EP", url: "https://www.opcoep.fr/" },
      { label: "OPCO Mobilités", url: "https://www.opcomobilites.fr/" },
      { label: "OPCO 2i", url: "https://www.opco2i.fr/" },
      { label: "L'Opcommerce", url: "https://www.lopcommerce.com/" },
      { label: "Atlas", url: "https://www.opco-atlas.fr/" },
      { label: "OPCO Santé", url: "https://www.opco-sante.fr/" },
      { label: "AKTO", url: "https://www.akto.fr/" },
      { label: "AFDAS", url: "https://www.afdas.com/" },
      { label: "OCAPIAT", url: "https://www.ocapiat.fr/" },
      { label: "Constructys", url: "https://www.constructys.fr/" },
      { label: "Uniformation", url: "https://www.uniformation.fr/" },
    ],
  },
  {
    code: "PRO",
    name: "Contrat de professionnalisation",
    description: "Formation en alternance permettant d'acquérir une qualification reconnue.",
    public: "Demandeurs d'emploi, jeunes en insertion professionnelle.",
    link: { label: "En savoir plus sur le contrat pro", url: "https://entreprendre.service-public.fr" },
  },
  {
    code: "APP",
    name: "Contrat d'apprentissage",
    description: "Contrat en alternance permettant de préparer un diplôme ou titre professionnel.",
    public: "Jeunes en formation, personnes en reconversion selon conditions.",
    link: { label: "En savoir plus sur l'apprentissage", url: "https://www.service-public.fr" },
  },
  {
    code: "PTP",
    name: "Projet de Transition Professionnelle (CPF de transition)",
    description:
      "Dispositif permettant à un salarié de suivre une formation pour changer de métier, avec maintien partiel du salaire.",
    public: "Salariés en reconversion.",
    link: { label: "Accéder à Transitions Pro Île-de-France", url: "https://www.transitionspro-idf.fr/" },
  },
  {
    code: "REG",
    name: "Région / Programme régional de formation",
    description: "Certaines régions financent des formations pour les métiers en tension.",
    public: "Demandeurs d'emploi.",
    link: { label: "Voir les aides Île-de-France", url: "https://www.iledefrance.fr" },
  },
];

export interface Profil {
  id: string;
  label: string;
  intro: string;
  codes: string[];
}

export const profils: Profil[] = [
  {
    id: "demandeur",
    label: "Demandeur d'emploi",
    intro:
      "Vous êtes inscrit à France Travail ? Vous bénéficiez du CPF sans payer les 102,23 € de participation, et France Travail peut compléter votre solde. Plusieurs autres dispositifs existent aussi.",
    codes: ["CPF", "AIF", "POE", "POEC", "AFPR", "REG"],
  },
  {
    id: "salarie",
    label: "Salarié en activité",
    intro:
      "Vous êtes en poste et souhaitez évoluer ou vous reconvertir dans le transport ? Voici vos options.",
    codes: ["CPF", "OPCO", "PTP"],
  },
  {
    id: "independant",
    label: "Travailleur indépendant",
    intro: "Auto-entrepreneur, gérant ou indépendant : vous avez aussi droit à des financements.",
    codes: ["CPF"],
  },
  {
    id: "alternance",
    label: "Alternance & contrats pro",
    intro:
      "L'alternance permet de se former tout en travaillant. Le coût de la formation est pris en charge par l'OPCO de l'entreprise d'accueil, et l'alternant est rémunéré.",
    codes: ["PRO", "APP"],
  },
];
