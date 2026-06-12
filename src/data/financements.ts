export interface Dispositif {
  code: string;
  name: string;
  description: string;
  public: string;
  link: { label: string; url: string };
}

export const dispositifs: Dispositif[] = [
  {
    code: "CPF",
    name: "Compte Personnel de Formation",
    description:
      "Le CPF est un compte individuel permettant à une personne de financer une formation certifiante inscrite au RNCP ou au Répertoire Spécifique. Depuis 2024, une participation forfaitaire obligatoire de 102,23 € (montant 2025, revalorisé chaque année) est à la charge du bénéficiaire pour toute formation financée via le CPF. Cette participation est réglée directement sur la plateforme Mon Compte Formation. Les demandeurs d'emploi inscrits à France Travail en sont exonérés.",
    public: "Salariés, demandeurs d'emploi, travailleurs indépendants.",
    link: { label: "Accéder à Mon Compte Formation", url: "https://www.moncompteformation.gouv.fr" },
  },
  {
    code: "AIF",
    name: "Aide Individuelle à la Formation",
    description:
      "Aide financière permettant de financer une formation lorsque les autres dispositifs ne couvrent pas la totalité du coût.",
    public: "Demandeurs d'emploi inscrits à France Travail.",
    link: { label: "En savoir plus sur l'AIF", url: "https://www.francetravail.fr" },
  },
  {
    code: "POE",
    name: "Préparation Opérationnelle à l'Emploi",
    description:
      "Dispositif permettant de financer une formation avant une embauche lorsqu'un candidat doit acquérir des compétences pour occuper un poste.",
    public: "Demandeurs d'emploi avec promesse d'embauche.",
    link: { label: "En savoir plus sur la POE", url: "https://www.francetravail.fr" },
  },
  {
    code: "POEC",
    name: "Préparation Opérationnelle à l'Emploi Collective",
    description:
      "Formation collective financée par les OPCO et l'État pour répondre aux besoins de recrutement d'un secteur.",
    public: "Demandeurs d'emploi, publics en insertion.",
    link: { label: "Voir les aides France Travail", url: "https://www.francetravail.fr" },
  },
  {
    code: "OPCO",
    name: "OPCO / Plan de développement des compétences",
    description: "Dispositif permettant aux entreprises de financer la formation de leurs salariés via leur OPCO.",
    public: "Salariés en poste, entreprises du secteur transport.",
    link: { label: "Informations sur le plan de formation", url: "https://www.service-public.fr" },
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
    name: "Projet de Transition Professionnelle",
    description:
      "Dispositif permettant à un salarié de suivre une formation pour changer de métier, avec maintien partiel du salaire.",
    public: "Salariés en reconversion.",
    link: { label: "Accéder à Transitions Pro", url: "https://www.transitionspro.fr" },
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
    codes: ["CPF", "AIF", "POE", "POEC", "REG"],
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
