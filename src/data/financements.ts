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
      "Le CPF est un compte individuel permettant de financer une formation certifiante inscrite au RNCP ou au Répertoire Spécifique. Il est alimenté automatiquement chaque année : 500 € par an dans la limite de 5 000 € (800 € par an jusqu'à 8 000 € pour les personnes peu qualifiées ou en situation de handicap). Depuis le 1er janvier 2026, une participation forfaitaire de 150 € (revalorisée chaque année) est à la charge du titulaire, réglée sur Mon Compte Formation. En sont exonérés : les demandeurs d'emploi, les bénéficiaires d'un abondement (employeur ou France Travail) et les titulaires mobilisant leur Compte Professionnel de Prévention (C2P). Si le solde est insuffisant, l'employeur ou France Travail peuvent co-financer (abonder) la formation.",
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
      "Le Compte Personnel de Formation (CPF) accompagne chaque actif tout au long de sa vie professionnelle. Il est alimenté automatiquement chaque année : 500 € par an dans la limite de 5 000 € (800 € par an jusqu'à 8 000 € pour les personnes peu qualifiées ou en situation de handicap). Il finance des formations certifiantes inscrites au RNCP ou au Répertoire Spécifique : permis poids lourd, FIMO/FCO ou titre professionnel du transport.",
    prerequis: [
      "Disposer d'un compte CPF alimenté en droits (500 €/an, plafond 5 000 € ; 800 €/an, plafond 8 000 € pour les moins qualifiés ou en situation de handicap)",
      "Choisir une formation éligible, inscrite au RNCP ou au Répertoire Spécifique",
      "Participation forfaitaire de 150 € à la charge du titulaire (depuis le 1er janvier 2026, revalorisée chaque année) — exonérés : demandeurs d'emploi, bénéficiaires d'un abondement (employeur ou France Travail), mobilisation du C2P",
    ],
    modalites: [
      "Créer ou activer son compte sur Mon Compte Formation (connexion FranceConnect+)",
      "Rechercher la formation PariPermis et vérifier son solde de droits",
      "Envoyer la demande d'inscription en ligne (délai minimum de 11 jours ouvrés avant le début)",
      "Si le solde est insuffisant, solliciter un abondement (employeur ou France Travail), puis valider le dossier",
    ],
    avantages: [
      "Financement total ou partiel sans avance de frais",
      "Co-financement possible par l'employeur (plan de développement des compétences) pour couvrir le reste à charge",
      "Co-financement possible par France Travail (abondement / AIF) pour les demandeurs d'emploi",
      "Un abondement (employeur ou France Travail) exonère de la participation forfaitaire de 150 €",
    ],
  },
  AIF: {
    scope: "all",
    intro:
      "L'Aide Individuelle à la Formation (AIF) est une aide de France Travail qui finance tout ou partie du coût d'une formation lorsque les autres dispositifs (CPF, conventionnements, aides de la Région…) ne couvrent pas la totalité. Elle est accordée au cas par cas, dans le cadre du Projet Personnalisé d'Accès à l'Emploi (PPAE), pour une formation cohérente avec le retour à l'emploi.",
    prerequis: [
      "Être inscrit comme demandeur d'emploi à France Travail",
      "Disposer d'un devis de formation (Cerfa) établi par PariPermis",
      "Avoir d'abord mobilisé son CPF si le solde le permet (l'AIF intervient en complément)",
      "Que le projet de formation soit validé par le conseiller (cohérence avec le projet de retour à l'emploi)",
    ],
    modalites: [
      "1. Demander un devis et le programme à PariPermis (nous nous en chargeons avec vous)",
      "2. Prendre rendez-vous avec votre conseiller France Travail pour présenter et faire valider le projet",
      "3. Le conseiller saisit la demande d'AIF en ligne ; vous joignez le devis Cerfa et le programme",
      "4. France Travail instruit le dossier et notifie l'accord AVANT l'entrée en formation (anticipez ~15 jours)",
    ],
    avantages: [
      "Complète le CPF et les autres financements pour couvrir le reste à charge",
      "Peut financer jusqu'à 100 % du coût selon la situation",
      "Cumulable avec une rémunération de formation (RFF / AREF) pendant la formation",
    ],
  },
  POE: {
    scope: "all",
    intro:
      "La Préparation Opérationnelle à l'Emploi Individuelle (POEI) finance une formation d'adaptation au poste avant une embauche, lorsque l'employeur identifie un écart de compétences à combler.",
    prerequis: [
      "Être demandeur d'emploi inscrit à France Travail (indemnisé ou non)",
      "Disposer d'une offre d'emploi déposée par l'employeur : CDI, CDD d'au moins 6 mois, contrat de professionnalisation ou d'apprentissage d'au moins 6 mois, contrat saisonnier d'au moins 4 mois, ou intérim (6 mois cumulés sur 9 mois)",
      "Un écart de compétences à combler entre votre profil et le poste proposé",
    ],
    modalites: [
      "L'employeur dépose la demande auprès de son conseiller France Travail",
      "Réalisation de la formation d'adaptation au poste (jusqu'à 450 heures, 600 heures pour certains publics)",
      "Validation du plan de formation par le candidat, puis par France Travail",
      "Embauche du candidat à l'issue de la formation",
    ],
    avantages: [
      "Formation financée par France Travail (et/ou l'OPCO) sans mobiliser votre CPF",
      "Maintien de l'indemnisation / rémunération de stagiaire pendant la formation",
      "Débouché direct sur un emploi durable (CDI ou CDD long)",
    ],
  },
  POEC: {
    scope: "all",
    intro:
      "La Préparation Opérationnelle à l'Emploi Collective (POEC) est une formation collective (groupe de demandeurs d'emploi) financée par un OPCO — OPCO Mobilités pour le transport — avec l'appui de l'État (Plan d'Investissement dans les Compétences). Elle prépare aux métiers en tension d'une branche et débouche sur des opportunités d'emploi, sans qu'une promesse d'embauche individuelle soit nécessaire au départ.",
    prerequis: [
      "Être inscrit comme demandeur d'emploi à France Travail",
      "Correspondre au profil de la session ouverte pour le secteur transport (entretien / tests de sélection)",
      "Aucune promesse d'embauche individuelle requise (contrairement à la POEI / AFPR)",
    ],
    modalites: [
      "1. Repérer une session POEC « transport » (via France Travail, l'OPCO Mobilités ou PariPermis)",
      "2. Candidater et participer à la réunion d'information / sélection",
      "3. Suivre la formation collective (gratuite, avec maintien de votre indemnisation ou rémunération de stagiaire)",
      "4. Bénéficier de la mise en relation avec les entreprises qui recrutent à l'issue",
    ],
    avantages: [
      "Formation entièrement financée, sans mobiliser votre CPF",
      "Maintien de l'indemnisation ou rémunération de stagiaire pendant la formation",
      "Forte employabilité : sessions construites avec des entreprises qui recrutent",
    ],
  },
  AFPR: {
    scope: "all",
    intro:
      "L'Action de Formation Préalable au Recrutement (AFPR) permet à un employeur de former un futur salarié pour combler l'écart entre ses compétences et le poste à pourvoir, avant une embauche en CDD de 6 à moins de 12 mois (ou contrat de professionnalisation à durée déterminée). C'est le pendant de la POEI pour les contrats plus courts.",
    prerequis: [
      "Être demandeur d'emploi inscrit à France Travail (indemnisé ou non)",
      "Disposer d'une promesse d'embauche : CDD de 6 à moins de 12 mois, ou contrat de professionnalisation à durée déterminée",
      "Un besoin d'adaptation des compétences au poste proposé",
    ],
    modalites: [
      "1. L'employeur formalise son besoin de recrutement et l'offre d'emploi",
      "2. L'employeur dépose la demande d'AFPR auprès de son conseiller France Travail (formation chez PariPermis)",
      "3. Réalisation de la formation préalable au recrutement (jusqu'à 400 heures)",
      "4. Embauche du candidat à l'issue de la formation",
    ],
    avantages: [
      "Formation prise en charge par France Travail (frais pédagogiques + éventuels frais annexes)",
      "Maintien de l'indemnisation / rémunération de stagiaire pendant la formation",
      "Sécurise le recrutement pour l'employeur comme pour le candidat",
    ],
  },
  OPCO: {
    scope: "all",
    intro:
      "Les OPCO (Opérateurs de Compétences) financent la formation des salariés dans le cadre du plan de développement des compétences de l'entreprise. Chaque entreprise dépend d'un OPCO selon sa branche professionnelle (convention collective / IDCC). Pour le transport routier, l'OPCO de référence est OPCO Mobilités. C'est l'employeur qui mobilise ce financement.",
    prerequis: [
      "Être salarié d'une entreprise cotisant à un OPCO (transport routier : OPCO Mobilités)",
      "Formation inscrite au plan de développement des compétences de l'employeur",
      "Accord de l'employeur (c'est lui qui engage la démarche)",
    ],
    modalites: [
      "1. L'employeur identifie son OPCO selon sa branche (IDCC) — utilisez notre simulateur d'OPCO ci-dessous",
      "2. Demander un devis et le programme à PariPermis",
      "3. L'employeur dépose la demande de prise en charge sur l'espace en ligne de son OPCO",
      "4. Après accord, l'OPCO finance tout ou partie des frais pédagogiques (subrogation possible : pas d'avance par l'entreprise)",
    ],
    avantages: [
      "Prise en charge des frais pédagogiques (selon les niveaux définis par la branche)",
      "Possibilité de subrogation (l'OPCO paie directement l'organisme)",
      "Maintien de la rémunération du salarié pendant la formation",
    ],
  },
  PRO: {
    scope: "registered",
    intro:
      "Le contrat de professionnalisation est un contrat de travail en alternance (CDD de 6 à 12 mois, parfois jusqu'à 36 mois, ou CDI débutant par une période de professionnalisation). Il permet d'acquérir une qualification reconnue (RNCP ou Répertoire Spécifique) tout en étant salarié et rémunéré. La formation est financée par l'OPCO de l'entreprise.",
    prerequis: [
      "Avoir 16 à 25 ans révolus, OU être demandeur d'emploi de 26 ans et plus, OU bénéficiaire du RSA / ASS / AAH ou d'un CUI",
      "Trouver une entreprise du transport prête à signer le contrat",
      "Viser une qualification enregistrée (RNCP/RS) — titre pro, FIMO, FCO",
    ],
    modalites: [
      "1. Rechercher une entreprise d'accueil (nous pouvons vous orienter vers nos partenaires)",
      "2. Signer le contrat de professionnalisation (Cerfa) avec l'employeur",
      "3. L'employeur transmet le contrat à son OPCO pour prise en charge",
      "4. Démarrage de l'alternance : formation chez PariPermis + travail en entreprise",
    ],
    avantages: [
      "Rémunération pendant toute la formation (% du SMIC selon l'âge et le niveau)",
      "Frais de formation pris en charge par l'OPCO",
      "Expérience professionnelle et insertion facilitée à l'issue",
    ],
  },
  APP: {
    scope: "rncp",
    intro:
      "Le contrat d'apprentissage est un contrat de travail en alternance permettant de préparer un titre professionnel inscrit au RNCP tout en étant salarié et rémunéré. Il concerne nos titres professionnels (conducteur marchandises ou voyageurs). La formation est gratuite pour l'apprenti et financée par l'OPCO.",
    prerequis: [
      "Avoir entre 16 et 29 ans révolus (sans limite d'âge pour les travailleurs handicapés ou les créateurs/repreneurs d'entreprise)",
      "Trouver une entreprise du transport prête à signer le contrat",
      "Préparer un titre professionnel enregistré au RNCP",
    ],
    modalites: [
      "1. Rechercher une entreprise d'accueil (nous pouvons vous accompagner)",
      "2. Signer le contrat d'apprentissage (Cerfa) avec l'employeur",
      "3. L'employeur transmet le contrat à son OPCO pour prise en charge",
      "4. Démarrage de l'alternance : formation chez PariPermis + travail en entreprise",
    ],
    avantages: [
      "Formation gratuite pour l'apprenti (zéro reste à charge)",
      "Rémunération mensuelle (% du SMIC selon l'âge et l'année du contrat)",
      "Aide au permis B de 500 € possible pour les apprentis majeurs",
    ],
  },
  PTP: {
    scope: "registered",
    intro:
      "Le Projet de Transition Professionnelle (PTP), aussi appelé CPF de transition (ex-CIF), permet à un salarié de s'absenter de son poste pour suivre une formation certifiante en vue d'une reconversion. La rémunération est maintenue (en grande partie) pendant la formation et les frais pédagogiques sont pris en charge. Le dispositif est géré par les associations Transitions Pro (ATpro) de chaque région.",
    prerequis: [
      "Être salarié en CDI : justifier de 24 mois d'ancienneté (consécutifs ou non) dont 12 mois dans l'entreprise actuelle",
      "Salariés en CDD : avoir travaillé 24 mois (consécutifs ou non) au cours des 5 dernières années dont 4 mois en CDD sur les 12 derniers mois",
      "Viser une certification RNCP/RS correspondant à un projet de reconversion (ancienneté non exigée pour certains publics : licenciés économiques, bénéficiaires de l'obligation d'emploi…)",
    ],
    modalites: [
      "1. Construire son projet, si besoin avec un Conseil en Évolution Professionnelle (CEP) gratuit",
      "2. Demander une autorisation d'absence à l'employeur (60 jours avant si formation < 6 mois, 120 jours si ≥ 6 mois ou à temps partiel)",
      "3. Constituer le dossier de financement auprès de Transitions Pro Île-de-France (avec le devis PariPermis)",
      "4. Passage en commission ; en cas d'accord, prise en charge des frais et maintien de la rémunération",
    ],
    avantages: [
      "Maintien de la rémunération (100 % jusqu'à 2 SMIC, 90 % au-delà, sous conditions)",
      "Prise en charge des frais pédagogiques et, le cas échéant, des frais annexes",
      "Congé spécifique : votre contrat de travail est suspendu, pas rompu",
    ],
  },
  REG: {
    scope: "all",
    intro:
      "Le Conseil régional finance des programmes de formation pour les métiers en tension, dont le transport routier, principalement pour les demandeurs d'emploi. En Île-de-France, ces formations sont souvent gratuites et rémunérées pendant la durée du parcours.",
    prerequis: [
      "Être inscrit comme demandeur d'emploi",
      "Que la formation soit inscrite au programme régional (PRF) ou conventionnée",
      "Répondre aux critères de la session (entretien / positionnement)",
    ],
    modalites: [
      "1. Vérifier l'éligibilité et les sessions ouvertes avec France Travail ou la Région (Île-de-France)",
      "2. Se positionner sur une session conventionnée (avec l'aide de PariPermis)",
      "3. Validation du dossier par la Région / France Travail avant l'entrée en formation",
      "4. Suivre la formation (prise en charge des frais + rémunération de stagiaire possible)",
    ],
    avantages: [
      "Formation prise en charge sans mobiliser le CPF",
      "Rémunération de stagiaire de la formation professionnelle possible",
      "Orientée vers les métiers qui recrutent en région",
    ],
  },
};

// Simulateur d'OPCO : secteur d'activité de l'entreprise → OPCO compétent.
export interface OpcoSecteur {
  secteur: string;
  opco: string;
  url: string;
  exemples: string;
}

export const opcoSecteurs: OpcoSecteur[] = [
  {
    secteur: "Transport, logistique & mobilités",
    opco: "OPCO Mobilités",
    url: "https://www.opcomobilites.fr/",
    exemples: "Transport routier de marchandises et de voyageurs, logistique, services de l'automobile, tourisme.",
  },
  {
    secteur: "Industrie",
    opco: "OPCO 2i",
    url: "https://www.opco2i.fr/",
    exemples: "Métallurgie, plasturgie, chimie, énergie, textile, ameublement, papier-carton.",
  },
  {
    secteur: "Artisanat & entreprises de proximité",
    opco: "OPCO EP",
    url: "https://www.opcoep.fr/",
    exemples: "Artisanat, professions libérales, pharmacie d'officine, boulangerie, coiffure, fleuristes.",
  },
  {
    secteur: "Commerce & distribution",
    opco: "L'Opcommerce",
    url: "https://www.lopcommerce.com/",
    exemples: "Commerce de détail, de gros, grande distribution, e-commerce.",
  },
  {
    secteur: "Banque, assurance & conseil",
    opco: "Atlas",
    url: "https://www.opco-atlas.fr/",
    exemples: "Banque, assurance, audit, conseil, bureaux d'études techniques.",
  },
  {
    secteur: "Santé, social & médico-social privé",
    opco: "OPCO Santé",
    url: "https://www.opco-sante.fr/",
    exemples: "Établissements de santé privés, secteur social et médico-social.",
  },
  {
    secteur: "Services à forte main-d'œuvre",
    opco: "AKTO",
    url: "https://www.akto.fr/",
    exemples: "Propreté, sécurité, travail temporaire, hôtellerie-restauration, formation.",
  },
  {
    secteur: "Culture, médias, sport & loisirs",
    opco: "AFDAS",
    url: "https://www.afdas.com/",
    exemples: "Spectacle, audiovisuel, presse, communication, sport, loisirs.",
  },
  {
    secteur: "Agriculture, agroalimentaire & pêche",
    opco: "OCAPIAT",
    url: "https://www.ocapiat.fr/",
    exemples: "Production agricole, agroalimentaire, coopératives, pêche.",
  },
  {
    secteur: "Bâtiment & travaux publics",
    opco: "Constructys",
    url: "https://www.constructys.fr/",
    exemples: "Bâtiment, travaux publics, négoce des matériaux de construction.",
  },
  {
    secteur: "Cohésion sociale & économie sociale",
    opco: "Uniformation",
    url: "https://www.uniformation.fr/",
    exemples: "Animation, sport, aide à domicile, mutualité, économie sociale et solidaire.",
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
