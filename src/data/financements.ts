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

// Détail de chaque dispositif pour sa fiche dédiée (/financement/:code).
// scope : formations concernées — "all" (toutes), "registered" (RNCP/RS), "rncp" (Titres Pro).
export interface DispositifDetail {
  scope: "all" | "registered" | "rncp";
  intro: string;
  prerequis: string[];
  modalites: string[];
  avantages?: string[];
}

export const dispositifDetails: Record<string, DispositifDetail> = {
  CPF: {
    scope: "all",
    intro:
      "Le Compte Personnel de Formation (CPF) accompagne chaque actif tout au long de sa vie professionnelle. Il est crédité en euros chaque année et permet de financer une formation certifiante, comme un permis, une FIMO/FCO ou un titre professionnel du transport.",
    prerequis: [
      "Disposer d'un compte CPF alimenté en droits (en euros)",
      "Choisir une formation éligible, inscrite au RNCP ou au Répertoire Spécifique",
      "Participation forfaitaire de 102,23 € à la charge du bénéficiaire (montant 2025) — demandeurs d'emploi indemnisés exonérés",
    ],
    modalites: [
      "Créer ou activer son compte sur Mon Compte Formation (connexion FranceConnect+)",
      "Rechercher la formation PariPermis et vérifier son solde de droits",
      "Envoyer la demande d'inscription en ligne (délai minimum de 11 jours ouvrés avant le début)",
      "Régler la participation forfaitaire et valider le dossier",
    ],
    avantages: [
      "Financement total ou partiel sans avance de frais",
      "Abondements possibles (France Travail, employeur, Région) pour compléter le solde",
    ],
  },
  AIF: {
    scope: "all",
    intro:
      "L'Aide Individuelle à la Formation (AIF) est versée par France Travail pour financer tout ou partie d'une formation lorsque les autres dispositifs ne suffisent pas. Elle s'inscrit dans le cadre du projet de retour à l'emploi.",
    prerequis: [
      "Être inscrit comme demandeur d'emploi à France Travail",
      "Disposer d'un devis de formation établi par PariPermis",
      "Que le projet soit validé par le conseiller France Travail (cohérence avec le projet de retour à l'emploi)",
    ],
    modalites: [
      "Faire valider son projet de formation avec son conseiller France Travail",
      "Transmettre le devis et le programme PariPermis",
      "France Travail étudie la demande et notifie la prise en charge avant l'entrée en formation",
    ],
    avantages: ["Complète les autres financements (CPF, OPCO…)", "Peut couvrir le reste à charge"],
  },
  POE: {
    scope: "all",
    intro:
      "La Préparation Opérationnelle à l'Emploi Individuelle (POEI) finance une formation d'adaptation au poste avant une embauche, lorsque l'employeur identifie un écart de compétences.",
    prerequis: [
      "Être demandeur d'emploi inscrit à France Travail",
      "Disposer d'une promesse d'embauche (CDD d'au moins 6 mois, CDI ou contrat de professionnalisation)",
      "Un besoin d'adaptation des compétences au poste proposé",
    ],
    modalites: [
      "L'employeur dépose la demande auprès de France Travail (et/ou de l'OPCO)",
      "Réalisation de la formation d'adaptation (jusqu'à 400 heures)",
      "Embauche du candidat à l'issue de la formation",
    ],
  },
  POEC: {
    scope: "all",
    intro:
      "La Préparation Opérationnelle à l'Emploi Collective (POEC) est une formation collective financée par les OPCO et l'État pour répondre aux besoins de recrutement d'un secteur, comme le transport routier.",
    prerequis: [
      "Être demandeur d'emploi ou en parcours d'insertion",
      "Correspondre au profil recherché par la branche / les entreprises partenaires",
    ],
    modalites: [
      "Repérage des candidats avec France Travail et l'OPCO",
      "Formation collective débouchant sur les besoins en emploi du secteur",
      "Accompagnement vers l'emploi à l'issue",
    ],
  },
  AFPR: {
    scope: "all",
    intro:
      "L'Action de Formation Préalable au Recrutement (AFPR) finance une formation courte préalable à une embauche en CDD de 6 à moins de 12 mois ou en contrat de professionnalisation à durée déterminée.",
    prerequis: [
      "Être demandeur d'emploi inscrit à France Travail",
      "Disposer d'une promesse d'embauche (CDD de 6 à moins de 12 mois ou contrat pro à durée déterminée)",
    ],
    modalites: [
      "L'employeur dépose la demande auprès de France Travail",
      "Réalisation de la formation préalable au recrutement (jusqu'à 400 heures)",
      "Recrutement du candidat à l'issue",
    ],
  },
  OPCO: {
    scope: "all",
    intro:
      "Les OPCO (Opérateurs de Compétences) financent la formation des salariés dans le cadre du plan de développement des compétences de l'entreprise. Pour le transport routier, l'OPCO de référence est OPCO Mobilités.",
    prerequis: [
      "Être salarié d'une entreprise relevant d'un OPCO (transport : OPCO Mobilités)",
      "Formation inscrite au plan de développement des compétences de l'employeur",
    ],
    modalites: [
      "L'employeur identifie son OPCO selon sa branche professionnelle (IDCC)",
      "Dépôt de la demande de prise en charge auprès de l'OPCO",
      "Accord puis financement de la formation",
    ],
  },
  PRO: {
    scope: "registered",
    intro:
      "Le contrat de professionnalisation est un contrat de travail en alternance qui permet d'acquérir une qualification reconnue (RNCP ou Répertoire Spécifique) tout en étant rémunéré.",
    prerequis: [
      "Avoir 16 à 25 ans révolus, être demandeur d'emploi de 26 ans et plus, ou bénéficiaire de minima sociaux",
      "Signer un contrat de professionnalisation avec une entreprise du transport",
    ],
    modalites: [
      "Trouver une entreprise d'accueil",
      "Signature du contrat (CDD ou CDI)",
      "Formation financée par l'OPCO, rémunération prise en charge selon l'âge et le niveau",
    ],
  },
  APP: {
    scope: "rncp",
    intro:
      "Le contrat d'apprentissage est un contrat de travail en alternance permettant de préparer un titre professionnel inscrit au RNCP, tout en étant rémunéré. Il concerne nos titres professionnels.",
    prerequis: [
      "Avoir entre 16 et 29 ans révolus (dérogations possibles, notamment pour les travailleurs handicapés)",
      "Signer un contrat d'apprentissage avec une entreprise",
      "Préparer un titre professionnel enregistré au RNCP",
    ],
    modalites: [
      "Trouver une entreprise d'accueil",
      "Signature du contrat d'apprentissage",
      "Formation financée par l'OPCO, rémunération selon l'âge et l'année du contrat",
    ],
  },
  PTP: {
    scope: "registered",
    intro:
      "Le Projet de Transition Professionnelle (PTP, ex-CIF, aussi appelé CPF de transition) permet à un salarié de s'absenter pour suivre une formation certifiante en vue d'une reconversion, avec maintien partiel de sa rémunération.",
    prerequis: [
      "Être salarié et justifier de l'ancienneté requise (24 mois dont 12 dans l'entreprise, sauf cas particuliers)",
      "Viser une certification RNCP/RS dans le cadre d'un projet de reconversion",
    ],
    modalites: [
      "Constituer le dossier auprès de l'association Transitions Pro de sa région",
      "Demander une autorisation d'absence à son employeur",
      "Validation et financement par Transitions Pro (maintien partiel du salaire)",
    ],
  },
  REG: {
    scope: "all",
    intro:
      "Les Régions financent des programmes de formation pour les métiers en tension, dont le transport routier, principalement à destination des demandeurs d'emploi.",
    prerequis: [
      "Être demandeur d'emploi",
      "Formation inscrite au programme régional de formation",
    ],
    modalites: [
      "Vérifier l'éligibilité auprès de la Région ou de France Travail",
      "Inscription via l'organisme de formation",
    ],
  },
};

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
