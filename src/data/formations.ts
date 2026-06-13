export type Category = "marchandises" | "voyageurs" | "auto";

export interface Formation {
  slug: string;
  category: Category;
  kind: string; // "Permis" | "Titre Professionnel" | "Formation Obligatoire"
  title: string; // full title on detail page
  cardTitle: string; // short title on home cards
  cardSubtitle: string; // small line on cards
  durationBadge: string; // "3 semaines"
  duration: string; // "105 heures (3 semaines)"
  price: string;
  summary: string;
  objectifs: string[];
  competences: string[];
  public: string;
  prerequis: string[];
  programme: string[];
  methodes: string[];
  moyens: string[];
  evaluation: string[];
  acces: string;
  accessibilite: string;
  debouches: string[];
  certification: string;
  image: string;
  qualiopi?: boolean;
  programmePdfUrl?: string; // lien du PDF de programme à télécharger
  rncpCode?: string; // Titres Professionnels
  rsCode?: string; // FIMO / FCO / Passerelle (Répertoire Spécifique)
  certifInfo?: string; // numéro Certif'Info (= identifiant CARIF OREF)
  franceCompetencesUrl?: string; // fiche RNCP / RS
  carifOrefUrl?: string; // fiche CARIF OREF / Certif'Info
  passerelles?: string; // passerelles, équivalences et voies d'accès (France Compétences)
}

const TRUCK = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80";
const TRUCK2 = "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=900&q=80";
const BUS = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80";
const BUS2 = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80";
const CAR = "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80";
const CAR2 = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80";
const MOTO = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80";
const CODE = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80";

const CPF_INTRO =
  "Inscription après vérification des prérequis. Délai : 14 jours à compter de la demande, sous réserve de réponse favorable du financeur et de disponibilité.";
const HANDICAP =
  "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins et un éventuel aménagement.";

const formationsData: Formation[] = [
  // ---------------------- MARCHANDISES ----------------------
  {
    slug: "permis-c",
    category: "marchandises",
    kind: "Permis",
    title: "Permis C — Poids Lourd Isolé de + 3T5",
    cardTitle: "Permis C",
    cardSubtitle: "Poids lourd > 3,5t",
    durationBadge: "3 semaines",
    duration: "105 heures (3 semaines)",
    price: "À partir de 2 800 € — Nous consulter pour un devis personnalisé",
    summary:
      "Être capable de conduire un véhicule isolé de transport de marchandises de plus de 3 500 kg de Poids Total Autorisé en Charge (PTAC). Pour information, les véhicules de cette catégorie peuvent atteler une remorque ne dépassant pas 750 kg de PTAC.",
    objectifs: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    competences: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et effectuer les exercices de maniabilité",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Toute personne souhaitant conduire un véhicule affecté au transport de marchandises de plus de 3,5 tonnes de PTAC. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter pour en discuter. Une analyse de vos besoins spécifiques sera réalisée.",
    prerequis: [
      "Être titulaire du permis B en cours de validité",
      "Être titulaire de l'Épreuve Théorique Générale (ETG) ou avoir obtenu son dernier permis (sauf permis deux-roues) depuis moins de 5 ans",
      "Être âgé d'au moins 21 ans",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé par sa préfecture (ou de la commission médicale des permis de conduire selon les cas)",
      "Savoir lire et écrire la langue française",
      "Avoir procédé à l'enregistrement de la demande de permis en ligne sur le site ANTS en lien avec notre centre de formation",
    ],
    programme: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques multiples : actives, participatives et didactiques"],
    moyens: [
      "Infrastructure et aire d'évolution adaptées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite adapté aux programmes des véhicules lourds",
      "Véhicules porteurs adaptés à l'enseignement",
      "Équipement de protection individuelle conforme à la réglementation",
      "Ressources pédagogiques : outils, supports et ouvrages réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Assiduité attestée par un état de présence par demi-journée, confirmé par le formateur",
      "Évaluations formatives : tests théoriques (QCM) et/ou pratiques en cours et en fin de formation",
      "Évaluations de compétences réalisées en continu, correspondant aux contenus du REMC (Référentiel d'Éducation pour une Mobilité Citoyenne)",
      "Épreuves pratiques de l'examen du permis C : hors circulation et en circulation, réalisées par un inspecteur du permis de conduire",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces:
      "Inscription directe après vérification des prérequis. Délai : 14 jours à compter de la demande de renseignements, sous réserve de réponse favorable du financeur et de disponibilité.",
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins. Nous vous mettrons en relation avec notre réseau d'acteurs du champ du handicap le cas échéant.",
    debouches: [
      "Chauffeur poids lourd",
      "Conducteur de véhicules de livraison",
      "Conducteur de benne",
      "Conducteur de citerne",
      "Métiers du transport et de la logistique",
    ],
    certification:
      "Permis de conduire catégorie C délivré par la Préfecture après réussite aux épreuves. Attestation de fin de formation. Formation éligible au CPF.",
    image: TRUCK,
  },
  {
    slug: "permis-ce",
    category: "marchandises",
    kind: "Permis",
    title: "Permis CE — Véhicule Couplé dont Remorque > 750 kg",
    cardTitle: "Permis CE",
    cardSubtitle: "Ensemble articulé",
    durationBadge: "3 semaines",
    duration: "105 heures (3 semaines)",
    price: "À partir de 3 200 € — Nous consulter pour un devis personnalisé",
    summary:
      "Être capable de conduire un ensemble de véhicules couplés dont le véhicule tracteur entre dans la catégorie C, attelé d'une remorque ou semi-remorque dont le PTAC est supérieur à 750 kg.",
    objectifs: [
      "Maîtriser le maniement de l'ensemble de véhicules dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité",
      "Réaliser un attelage de la remorque ou de la semi-remorque et désaccoupler cet ensemble",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    competences: [
      "Maîtriser le maniement de l'ensemble de véhicules dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et effectuer les exercices de maniabilité",
      "Réaliser un attelage de la remorque ou de la semi-remorque et désaccoupler cet ensemble",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Toute personne souhaitant conduire à titre personnel ou professionnel un ensemble de véhicules affecté au transport de marchandises dont le véhicule tracteur entre dans la catégorie C, attelé d'une remorque ou semi-remorque de plus de 750 kg de PTAC. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis C en cours de validité",
      "Être titulaire de l'Épreuve Théorique Générale (ETG) ou avoir obtenu son dernier permis (sauf permis deux-roues) depuis moins de 5 ans",
      "Être âgé d'au moins 21 ans",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé par sa préfecture (ou de la commission médicale des permis de conduire selon les cas)",
      "Savoir lire et écrire la langue française",
      "Avoir procédé à l'enregistrement de la demande de permis en ligne sur le site ANTS en lien avec notre centre de formation",
    ],
    programme: [
      "Maîtriser le maniement de l'ensemble de véhicules dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité",
      "Réaliser un attelage de la remorque ou de la semi-remorque et désaccoupler cet ensemble",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques multiples : actives, participatives et didactiques"],
    moyens: [
      "Infrastructure et aire d'évolution adaptées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite adapté aux programmes des véhicules lourds",
      "Véhicules porteurs adaptés à l'enseignement",
      "Équipement de protection individuelle conforme à la réglementation",
      "Ressources pédagogiques : outils, supports et ouvrages réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Assiduité attestée par un état de présence par demi-journée, confirmé par le formateur",
      "Évaluations formatives : tests théoriques (QCM) et/ou pratiques en cours et en fin de formation",
      "Évaluations de compétences réalisées en continu, correspondant aux contenus du REMC (Référentiel d'Éducation pour une Mobilité Citoyenne)",
      "Épreuves pratiques de l'examen du permis CE : hors circulation et en circulation, réalisées par un inspecteur du permis de conduire",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces:
      "Inscription directe après vérification des prérequis. Délai : 14 jours à compter de la demande de renseignements, sous réserve de réponse favorable du financeur et de disponibilité.",
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins. Nous vous mettrons en relation avec notre réseau d'acteurs du champ du handicap le cas échéant.",
    debouches: [
      "Conducteur routier longue distance",
      "Conducteur d'ensembles articulés",
      "Conducteur de semi-remorques",
      "Conducteur de transport exceptionnel",
      "Métiers du transport et de la logistique",
    ],
    certification:
      "Permis de conduire catégorie CE délivré par la Préfecture après réussite aux épreuves. Attestation de fin de formation. Formation éligible au CPF.",
    image: TRUCK2,
  },
  {
    slug: "tp-transport-marchandises-porteur",
    category: "marchandises",
    kind: "Titre Professionnel",
    title: "TP Conducteur du Transport Routier de Marchandises sur Porteur",
    cardTitle: "TP Marchandises Porteur",
    cardSubtitle: "Titre professionnel — Permis C + FIMO",
    durationBadge: "3 mois",
    duration: "434 heures (399 h de formation + 35 h de validation)",
    price: "Nous consulter pour un devis personnalisé",
    summary:
      "Le titre professionnel de Conducteur du transport routier de marchandises sur porteur permet de réaliser en sécurité un transport routier de marchandises sur porteur de plus de 3,5 tonnes et d'utiliser des moyens de manutention adaptés lors des chargements et déchargements.",
    objectifs: [
      "Être capable de réaliser en sécurité un transport routier de marchandises sur porteur de plus de 3,5 tonnes",
      "Être capable d'utiliser en sécurité des moyens de manutention adaptés lors des chargements et des déchargements",
    ],
    competences: [
      "Respecter et appliquer les réglementations des transports tout au long de l'activité",
      "Effectuer les contrôles obligatoires et de sécurité d'un véhicule de transport de marchandises du groupe lourd tout au long de l'activité",
      "Conduire et manœuvrer en sécurité un véhicule porteur du groupe lourd",
      "Prendre en charge, transporter et livrer les marchandises",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident ou d'accident à l'arrêt comme en circulation",
    ],
    public:
      "Toute personne souhaitant effectuer dans le cadre professionnel du transport de marchandises avec un véhicule relevant de la catégorie C, à partir de 18 ans et obtenir une qualification professionnelle. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis B en cours de validité tout au long de la formation",
      "Fournir un relevé d'information restreint (RIR) de moins de 15 jours à la date d'entrée en formation",
      "Être âgé d'au moins 18 ans",
      "Comprendre, savoir lire et écrire le français",
      "Satisfaire à l'Évaluation des Compétences et Acquis Professionnels (ECAP) le cas échéant",
      "Avoir été reconnu apte lors d'une visite auprès d'un médecin agréé",
    ],
    programme: [
      "Respecter et appliquer les réglementations des transports tout au long de l'activité",
      "Effectuer les contrôles obligatoires et de sécurité d'un véhicule de transport de marchandises du groupe lourd tout au long de l'activité",
      "Conduire et manœuvrer en sécurité un véhicule porteur du groupe lourd",
      "Prendre en charge, transporter et livrer les marchandises",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident ou d'accident à l'arrêt comme en circulation",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicule de la catégorie C, simulateur possible",
      "Aires d'évolution et infrastructure adaptées",
      "Salle de cours équipée de moyens multimédia",
      "Quai de chargement, lots de charges et matériels de manutention, de calage et d'arrimage",
      "Équipement de protection individuelle (gants, gilet haute visibilité, chaussures de sécurité)",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives : tests théoriques (QCM) et/ou pratiques",
      "Évaluations de compétences réalisées en cours de formation",
      "Session d'examen validée par un jury de professionnels",
      "Mise en situation professionnelle complétée d'un entretien technique",
      "Dossier professionnel et entretien final",
    ],
    acces: CPF_INTRO,
    accessibilite: HANDICAP,
    debouches: [
      "Conducteur de transport de marchandises sur longue distance",
      "Conducteur et livreur par tournées sur courte distance",
      "Le titre donne par équivalence : le permis C (sans restriction), la qualification initiale de conducteur routier (CQC) et le certificat ADR",
    ],
    certification:
      "Titre Professionnel de Conducteur du transport routier de marchandises sur porteur — Niveau 3. Code RNCP 39796. Certificateur : Ministère du Travail.",
    image: TRUCK,
  },
  {
    slug: "tp-transport-marchandises-tous-vehicules",
    category: "marchandises",
    kind: "Titre Professionnel",
    title: "TP Conducteur du Transport Routier de Marchandises sur Tous Véhicules",
    cardTitle: "TP Tous Véhicules",
    cardSubtitle: "Titre professionnel — Permis CE + FIMO",
    durationBadge: "3 mois",
    duration: "434 heures (399 h de formation + 35 h de validation)",
    price: "Nous consulter pour un devis personnalisé",
    summary:
      "Le titre professionnel de Conducteur du transport routier de marchandises sur tous véhicules permet de réaliser en sécurité un transport routier de marchandises avec un ensemble articulé (tracteur + semi-remorque) et d'utiliser des moyens de manutention adaptés lors des chargements et déchargements.",
    objectifs: [
      "Être capable de réaliser en sécurité un transport routier de marchandises avec un ensemble articulé du groupe lourd",
      "Être capable d'utiliser en sécurité des moyens de manutention adaptés lors des chargements et des déchargements",
    ],
    competences: [
      "Respecter et appliquer les réglementations des transports tout au long de l'activité",
      "Effectuer les contrôles obligatoires et de sécurité d'un véhicule articulé de transport de marchandises du groupe lourd",
      "Conduire et manœuvrer en sécurité un ensemble articulé du groupe lourd",
      "Prendre en charge, transporter et livrer les marchandises",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident ou d'accident à l'arrêt comme en circulation",
    ],
    public:
      "Toute personne souhaitant effectuer dans le cadre professionnel du transport de marchandises avec un ensemble articulé relevant de la catégorie CE, à partir de 18 ans et obtenir une qualification professionnelle. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis B en cours de validité tout au long de la formation",
      "Fournir un relevé d'information restreint (RIR) de moins de 15 jours à la date d'entrée en formation",
      "Être âgé d'au moins 18 ans",
      "Comprendre, savoir lire et écrire le français",
      "Satisfaire à l'Évaluation des Compétences et Acquis Professionnels (ECAP) le cas échéant",
      "Avoir été reconnu apte lors d'une visite auprès d'un médecin agréé",
    ],
    programme: [
      "Respecter et appliquer les réglementations des transports tout au long de l'activité",
      "Effectuer les contrôles obligatoires et de sécurité d'un ensemble articulé du groupe lourd",
      "Conduire et manœuvrer en sécurité un ensemble articulé du groupe lourd",
      "Prendre en charge, transporter et livrer les marchandises",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident ou d'accident à l'arrêt comme en circulation",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Ensemble articulé de la catégorie CE, simulateur possible",
      "Aires d'évolution et infrastructure adaptées",
      "Salle de cours équipée de moyens multimédia",
      "Quai de chargement, lots de charges et matériels de manutention, de calage et d'arrimage",
      "Équipement de protection individuelle (gants, gilet haute visibilité, chaussures de sécurité)",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives : tests théoriques (QCM) et/ou pratiques",
      "Évaluations de compétences réalisées en cours de formation",
      "Session d'examen validée par un jury de professionnels",
      "Mise en situation professionnelle complétée d'un entretien technique",
      "Dossier professionnel et entretien final",
    ],
    acces: CPF_INTRO,
    accessibilite: HANDICAP,
    debouches: [
      "Conducteur routier longue distance sur ensemble articulé",
      "Conducteur de semi-remorques (national et international)",
      "Le titre donne par équivalence : le permis CE, la qualification initiale de conducteur routier (CQC) et le certificat ADR",
    ],
    certification:
      "Titre Professionnel de Conducteur du transport routier de marchandises sur tous véhicules — Niveau 3. Code RNCP 39795. Certificateur : Ministère du Travail.",
    image: TRUCK2,
  },
  {
    slug: "fimo-marchandises",
    category: "marchandises",
    kind: "Formation Obligatoire",
    title: "FIMO Marchandises — Formation Initiale Minimale Obligatoire",
    cardTitle: "FIMO Marchandises",
    cardSubtitle: "Formation initiale obligatoire",
    durationBadge: "4 semaines",
    duration: "140 heures (4 semaines — 7 h/jour)",
    price: "À partir de 2 100 € — Nous consulter",
    summary:
      "La Formation Initiale Minimale Obligatoire (FIMO) Marchandises est indispensable pour exercer le métier de conducteur routier de marchandises avec un véhicule de plus de 3,5 tonnes de PTAC. Elle complète le permis C ou CE.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de marchandises dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation professionnelle en assurant un service de qualité",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité",
      "Application des réglementations du transport de marchandises (sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe)",
      "Santé, sécurité routière et sécurité environnementale (prévention de l'hypovigilance, conduite préventive, secourisme, accidents du travail)",
      "Service et logistique (valorisation de l'image de marque, qualité de service, environnement économique du transport routier)",
    ],
    public:
      "Toute personne débutante souhaitant exercer une activité de transport de marchandises dans un cadre professionnel (compte d'autrui ou compte propre, salarié ou indépendant) ou dans le cadre associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis C ou CE ou C1 ou C1E en cours de validité",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Thème 1 — Perfectionnement à la conduite rationnelle axée sur les règles de sécurité : caractéristiques techniques du véhicule, fonctionnement des organes de sécurité, conduite sûre et économique, informatique embarquée, optimisation de la consommation de carburant, boîte de vitesses automatisée, chargement, arrimage, manutention des marchandises",
      "Application pratique : 10 h de conduite individuelle incluant 1 h de manœuvres professionnelles + 1 h de commentaires pédagogiques",
      "Thème 2 — Application des réglementations : réglementation sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe électronique, conventions collectives, contrats et documents de transport",
      "Thème 3 — Santé, sécurité routière et sécurité environnementale : prévention de l'hypovigilance, aptitude physique et mentale, conduite préventive, situations d'urgence, secourisme, règles de circulation, risques de la route, accidents du travail, tunnels, passages à niveau",
      "Thème 4 — Service et logistique : valorisation de l'image de marque, qualité de service, environnement économique du transport routier",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport de marchandises adaptés à la formation",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite le cas échéant",
      "Atelier et salle de mécanique avec moteurs sur bancs et/ou maquettes",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation, tests théoriques (QCM) et/ou pratiques",
      "Partie théorique : QCM de 60 questions (recevabilité à 36 bonnes réponses)",
      "Partie pratique : contrôle continu",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces: CPF_INTRO,
    accessibilite: HANDICAP,
    debouches: [
      "Conducteur de véhicules de transport de marchandises dont le PTAC excède 3,5 tonnes",
      "Possibilité de suivre une formation passerelle voyageurs pour travailler dans le secteur voyageurs",
    ],
    certification:
      "Carte de Qualification de Conducteur (CQC) délivrée par l'Imprimerie Nationale — Validité 5 ans. Code RS 5769. Certificateur : Ministère de la Transition Écologique. Formation éligible au CPF.",
    image: TRUCK,
  },
  {
    slug: "fco-marchandises",
    category: "marchandises",
    kind: "Formation Obligatoire",
    title: "FCO Marchandises — Formation Continue Obligatoire",
    cardTitle: "FCO Marchandises",
    cardSubtitle: "Renouvellement tous les 5 ans",
    durationBadge: "5 jours",
    duration: "35 heures (5 jours — 7 h/jour)",
    price: "À partir de 450 € — Nous consulter",
    summary:
      "La Formation Continue Obligatoire (FCO) Marchandises permet le renouvellement de la carte de qualification de conducteur tous les 5 ans. Elle est obligatoire pour continuer à exercer le métier de conducteur de transport de marchandises.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de marchandises dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation, suite à la réactualisation des connaissances acquises",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité (actualisation)",
      "Application des réglementations du transport de marchandises (actualisation sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe)",
      "Santé, sécurité routière et sécurité environnementale (actualisation : prévention des risques physiques, conduite préventive, secourisme)",
      "Service et logistique (actualisation : valorisation de l'image de marque, qualité de service, environnement économique)",
    ],
    public:
      "Toute personne ayant une qualification initiale de conducteur de transport de marchandises, souhaitant exercer une activité de transport de marchandises dans un cadre professionnel ou associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis C ou CE ou C1 ou C1E en cours de validité et justifier de la régularité de sa situation au regard des obligations de qualification",
      "Être titulaire d'une CQC (Carte de Qualification de Conducteur) ou d'un titre ou diplôme admis en équivalence",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Bilan des connaissances relatives aux réglementations transport et sécurité routière, techniques et comportement en conduite (évaluation individuelle 0 h 30)",
      "Thème 1 — Perfectionnement à la conduite rationnelle : caractéristiques du véhicule, conduite sûre et économique, informatique embarquée, chargement, arrimage, manutention + 1 h 30 de conduite individuelle",
      "Thème 2 — Application des réglementations (actualisation) : réglementation sociale nationale et européenne, temps de conduite et repos, chronotachygraphe, contrats et documents de transport",
      "Thème 3 — Santé, sécurité routière et environnementale (actualisation) : prévention des risques physiques, conduite préventive, secourisme, règles de circulation, tunnels, passages à niveau",
      "Thème 4 — Service et logistique (actualisation) : valorisation de l'image de marque, qualité de service, environnement économique",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport de marchandises adaptés à la formation",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite le cas échéant",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation, tests théoriques (QCM) et/ou pratiques",
      "Partie théorique : QCM de 40 questions",
      "Partie pratique : contrôle continu",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces: CPF_INTRO,
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins.",
    debouches: [
      "Maintien dans l'emploi de conducteur routier de marchandises",
      "Possibilité de suivre une formation passerelle voyageurs",
    ],
    certification:
      "Renouvellement de la CQC Marchandises — Validité 5 ans. Code RS 5769. Certificateur : Ministère de la Transition Écologique. Formation éligible au CPF.",
    image: TRUCK2,
  },
  {
    slug: "passerelle-marchandises",
    category: "marchandises",
    kind: "Formation Obligatoire",
    title: "Passerelle Marchandises — Formation Spécifique",
    cardTitle: "Passerelle Marchandises",
    cardSubtitle: "Formation spécifique (35h)",
    durationBadge: "5 jours",
    duration: "35 heures (5 jours — 7 h/jour)",
    price: "À partir de 450 € — Nous consulter",
    summary:
      "La formation spécifique dite « Passerelle Marchandises » permet aux conducteurs titulaires de la qualification initiale voyageurs d'obtenir l'habilitation pour conduire des véhicules de transport de marchandises de plus de 3,5 tonnes.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de marchandises dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation professionnelle en assurant un service de qualité",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité en transport de marchandises",
      "Application des réglementations spécifiques au transport de marchandises",
      "Santé, sécurité routière et sécurité environnementale appliquées au transport de marchandises",
      "Service et logistique du transport de marchandises",
    ],
    public:
      "Toute personne titulaire de la qualification initiale de conducteur de transport de voyageurs, souhaitant exercer une activité de transport de marchandises dans un cadre professionnel ou associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis C ou CE ou C1 ou C1E en cours de validité",
      "Être titulaire d'une CQC ou d'un titre ou diplôme admis en équivalence au titre de la qualification initiale des conducteurs de transport de voyageurs",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Programme spécifique au transport de marchandises adapté aux conducteurs déjà qualifiés dans le secteur voyageurs",
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité en transport de marchandises",
      "Application des réglementations spécifiques au transport de marchandises",
      "Santé, sécurité routière et sécurité environnementale",
      "Service et logistique du transport de marchandises",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport de marchandises adaptés à la formation",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Supports et ouvrages pédagogiques réglementaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation",
      "Tests théoriques (QCM) et/ou pratiques",
      "Évaluation de satisfaction",
    ],
    acces: CPF_INTRO,
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins.",
    debouches: [
      "Conducteur de véhicules de transport de marchandises dont le PTAC excède 3,5 tonnes",
      "Possibilité de travailler dans les secteurs marchandises ET voyageurs",
      "Cette formation permet de renouveler en même temps la validité de la CQC du secteur voyageurs",
    ],
    certification:
      "Carte de Qualification de Conducteur (CQC) Marchandises délivrée par l'Imprimerie Nationale — Validité 5 ans. Formation éligible au CPF.",
    image: TRUCK,
  },
  // ---------------------- VOYAGEURS ----------------------
  {
    slug: "permis-d",
    category: "voyageurs",
    kind: "Permis",
    title: "Permis D — Transport en Commun",
    cardTitle: "Permis D",
    cardSubtitle: "Transport en commun > 9 places",
    durationBadge: "3 semaines",
    duration: "105 heures (3 semaines)",
    price: "À partir de 3 000 € — Nous consulter pour un devis personnalisé",
    summary:
      "Le permis D autorise la conduite de véhicules de transport en commun pouvant transporter plus de huit personnes, conducteur non compris. Formation complète pour devenir conducteur de bus ou d'autocar.",
    objectifs: [
      "Être capable de conduire un véhicule de transport en commun pouvant transporter plus de huit personnes, conducteur non compris",
    ],
    competences: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et effectuer les exercices de maniabilité",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Toute personne souhaitant conduire à titre personnel ou professionnel un véhicule affecté au transport de voyageurs pouvant transporter plus de huit personnes, conducteur non compris. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis B en cours de validité",
      "Être titulaire de l'Épreuve Théorique Générale ou avoir obtenu son dernier permis depuis moins de 5 ans",
      "Être âgé d'au moins 24 ans (abaissement possible sous conditions)",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé",
      "Savoir lire et écrire la langue française",
    ],
    programme: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité",
      "Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives, participatives et didactiques"],
    moyens: [
      "Véhicules de transport en commun de catégorie D adaptés à la formation",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
    ],
    evaluation: [
      "Évaluation continue tout au long de la formation",
      "Examen de conduite en circulation",
      "Examen hors circulation (vérifications et manœuvres)",
    ],
    acces:
      "Inscription directe après vérification des prérequis. Délai : 14 jours à compter de la demande, sous réserve de réponse favorable du financeur et de disponibilité.",
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins.",
    debouches: [
      "Conducteur de bus urbain",
      "Conducteur d'autocar",
      "Conducteur de transport scolaire",
      "Conducteur de navette",
    ],
    certification:
      "Permis de conduire catégorie D délivré par la Préfecture après réussite aux épreuves. Pour devenir conducteur de bus à titre professionnel, il est nécessaire de suivre une formation FIMO voyageurs.",
    image: BUS,
  },
  {
    slug: "tp-transport-en-commun",
    category: "voyageurs",
    kind: "Titre Professionnel",
    title: "TP Conducteur de Transport en Commun sur Route",
    cardTitle: "TP Transport en Commun",
    cardSubtitle: "Titre professionnel — Permis D + CQC",
    durationBadge: "3 mois",
    duration: "434 heures (399 h de formation + 35 h de validation)",
    price: "Nous consulter pour un devis personnalisé",
    summary:
      "Le titre professionnel de Conducteur de transport en commun sur route permet de conduire un véhicule de type autobus ou autocar dans des conditions de sécurité et de confort optimales, sur tout type de parcours selon des horaires prescrits.",
    objectifs: [
      "Être capable de conduire un véhicule de type autobus ou autocar dans des conditions de sécurité et de confort optimales",
      "Être capable de conduire sur tout type de parcours selon des horaires prescrits et sur des itinéraires comportant des points d'arrêt définis",
    ],
    competences: [
      "Appliquer les consignes d'exploitation et effectuer les contrôles de sécurité dans le cadre d'un transport en commun",
      "Conduire et manœuvrer en sécurité tout type de véhicule de transport en commun",
      "Accueillir et renseigner la clientèle dans le cadre d'un transport en commun",
      "Assurer les prestations commerciales de l'entreprise dans le cadre d'un transport en commun",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident, de malaise ou d'accident",
      "Détecter et localiser un dysfonctionnement et renseigner les services concernés",
    ],
    public:
      "Toute personne souhaitant effectuer dans le cadre professionnel du transport de voyageurs avec un véhicule relevant de la catégorie D, à partir de 18 ans et obtenir une qualification professionnelle. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis B en cours de validité tout au long de la formation",
      "Fournir un relevé d'information restreint (RIR) de moins de 15 jours",
      "Être âgé d'au moins 18 ans (conditions d'âge selon le type de service)",
      "Comprendre, savoir lire et écrire le français",
      "Satisfaire à l'Évaluation des Compétences et Acquis Professionnels (ECAP) le cas échéant",
      "Avoir été reconnu apte lors d'une visite auprès d'un médecin agréé",
    ],
    programme: [
      "Appliquer les consignes d'exploitation et effectuer les contrôles de sécurité dans le cadre d'un transport en commun",
      "Conduire et manœuvrer en sécurité tout type de véhicule de transport en commun",
      "Accueillir et renseigner la clientèle dans le cadre d'un transport en commun",
      "Assurer les prestations commerciales de l'entreprise dans le cadre d'un transport en commun",
      "Prévenir les situations difficiles et appliquer les procédures en cas d'incident, de malaise ou d'accident",
      "Détecter et localiser un dysfonctionnement et renseigner les services concernés",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicule de catégorie D équipé d'une plateforme PMR",
      "Fauteuil pour personne à mobilité réduite et dispositif d'attache réglementaire",
      "Aires d'évolution et infrastructure adaptées",
      "Salle de cours équipée de moyens multimédia, simulateur possible",
      "Équipement de protection individuelle (gants, gilet haute visibilité)",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives : tests théoriques (QCM) et/ou pratiques",
      "Évaluations de compétences réalisées en cours de formation",
      "Session d'examen validée par un jury de professionnels",
      "Mise en situation professionnelle complétée d'un entretien technique",
      "Dossier professionnel et entretien final",
    ],
    acces: CPF_INTRO,
    accessibilite: HANDICAP,
    debouches: [
      "Conducteur d'autobus ou d'autocar sur services réguliers urbains, interurbains, départementaux, régionaux",
      "Conducteur en période scolaire (CPS)",
      "Conducteur de navettes de gares, d'aéroports ou de personnel d'entreprises",
      "Conducteur accompagnateur de personnes à mobilité réduite",
      "Machiniste receveur / conducteur receveur",
      "Évolution possible vers l'exploitation, le commercial ou le contrôle du transport de voyageurs",
    ],
    certification:
      "Titre Professionnel de Conducteur de transport en commun sur route — Niveau 3. Code RNCP 37878. Certificateur : Ministère du Travail.",
    image: BUS2,
  },
  {
    slug: "fimo-voyageurs",
    category: "voyageurs",
    kind: "Formation Obligatoire",
    title: "FIMO Voyageurs — Formation Initiale Minimale Obligatoire",
    cardTitle: "FIMO Voyageurs",
    cardSubtitle: "Formation initiale obligatoire",
    durationBadge: "4 semaines",
    duration: "140 heures (4 semaines — 7 h/jour)",
    price: "À partir de 2 100 € — Nous consulter",
    summary:
      "La Formation Initiale Minimale Obligatoire (FIMO) Voyageurs est indispensable pour exercer le métier de conducteur de transport en commun avec un véhicule de plus de 9 places. Elle complète le permis D.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de voyageurs dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation professionnelle en assurant un service de qualité",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité",
      "Application des réglementations du transport de voyageurs (sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe)",
      "Santé, sécurité routière et sécurité environnementale (prévention de l'hypovigilance, conduite préventive, secourisme, sécurité transport scolaire)",
      "Service et qualité du transport de voyageurs (valorisation de l'image de marque, qualité de service, environnement économique)",
    ],
    public:
      "Toute personne débutante souhaitant exercer une activité de transport de voyageurs dans un cadre professionnel (compte d'autrui ou compte propre, salarié ou indépendant) ou dans le cadre associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis D ou DE ou D1 ou D1E en cours de validité",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Thème 1 — Perfectionnement à la conduite rationnelle axée sur les règles de sécurité : caractéristiques techniques du véhicule, fonctionnement des organes de sécurité, conduite sûre et économique, boîte de vitesses automatique, sécurité et confort des passagers",
      "Application pratique : 10 h de conduite individuelle incluant 1 h de manœuvres professionnelles + 1 h de commentaires pédagogiques",
      "Thème 2 — Application des réglementations : réglementation sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe, contrats et documents de transport voyageurs",
      "Thème 3 — Santé, sécurité routière et sécurité environnementale : prévention de l'hypovigilance, conduite préventive, secourisme, sécurité dans le transport scolaire, gestion des situations conflictuelles, tunnels, passages à niveau",
      "Thème 4 — Service et qualité : valorisation de l'image de marque, qualité de service, environnement économique du transport de voyageurs",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport en commun adaptés à la formation, équipés PMR",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite le cas échéant",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation, tests théoriques (QCM) et/ou pratiques",
      "Partie théorique : QCM de 60 questions (recevabilité à 36 bonnes réponses)",
      "Partie pratique : contrôle continu",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces: CPF_INTRO,
    accessibilite: HANDICAP,
    debouches: [
      "Conducteur de véhicules de transport de personnes comportant plus de 9 places",
      "Possibilité de suivre une formation passerelle marchandises pour travailler dans le secteur marchandises",
    ],
    certification:
      "Carte de Qualification de Conducteur (CQC) délivrée par l'Imprimerie Nationale — Validité 5 ans. Code RS 5768. Certificateur : Ministère de la Transition Écologique. Formation éligible au CPF.",
    image: BUS,
  },
  {
    slug: "fco-voyageurs",
    category: "voyageurs",
    kind: "Formation Obligatoire",
    title: "FCO Voyageurs — Formation Continue Obligatoire",
    cardTitle: "FCO Voyageurs",
    cardSubtitle: "Renouvellement tous les 5 ans",
    durationBadge: "5 jours",
    duration: "35 heures (5 jours — 7 h/jour)",
    price: "À partir de 450 € — Nous consulter",
    summary:
      "La Formation Continue Obligatoire (FCO) Voyageurs permet le renouvellement de la CQC voyageurs tous les 5 ans. Obligatoire pour continuer à exercer le métier de conducteur de transport en commun.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de voyageurs dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation, suite à la réactualisation des connaissances acquises",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité (actualisation)",
      "Application des réglementations du transport de voyageurs (actualisation sociale nationale et européenne, temps de conduite et de repos, chronotachygraphe)",
      "Santé, sécurité routière et sécurité environnementale (actualisation : prévention de l'hypovigilance, conduite préventive, secourisme, sécurité transport scolaire)",
      "Service et qualité du transport de voyageurs (actualisation : valorisation de l'image de marque, qualité de service, environnement économique)",
    ],
    public:
      "Toute personne ayant une qualification initiale de conducteur de transport de voyageurs, souhaitant continuer à exercer dans un cadre professionnel ou associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis D ou DE ou D1 ou D1E en cours de validité et justifier de la régularité de sa situation au regard des obligations de qualification",
      "Être titulaire d'une CQC ou d'un titre ou diplôme admis en équivalence",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Bilan des connaissances relatives aux réglementations transport et sécurité routière, techniques et comportement en conduite (évaluation individuelle 0 h 30)",
      "Thème 1 — Perfectionnement à la conduite rationnelle : caractéristiques du véhicule, conduite sûre et économique, boîte de vitesses automatique, sécurité et confort des passagers + 1 h 30 de conduite individuelle",
      "Thème 2 — Application des réglementations (actualisation) : réglementation sociale nationale et européenne, temps de conduite et repos, chronotachygraphe, transport voyageurs urbain et non urbain",
      "Thème 3 — Santé, sécurité routière et environnementale (actualisation) : prévention de l'hypovigilance, conduite préventive, secourisme, sécurité transport scolaire, gestion des situations conflictuelles, tunnels, passages à niveau",
      "Thème 4 — Service et qualité (actualisation) : valorisation de l'image de marque, qualité de service, environnement économique du transport de voyageurs",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport en commun adaptés à la formation, équipés PMR",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Simulateur de conduite le cas échéant",
      "Supports et ouvrages pédagogiques réglementaires remis aux stagiaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation, tests théoriques (QCM) et/ou pratiques",
      "Partie théorique : QCM de 40 questions",
      "Partie pratique : contrôle continu",
      "Évaluation de satisfaction réalisée avant l'examen",
    ],
    acces: CPF_INTRO,
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins.",
    debouches: [
      "Maintien dans l'emploi de conducteur de transport en commun",
      "Possibilité de suivre une formation passerelle marchandises",
    ],
    certification:
      "Renouvellement de la CQC Voyageurs — Validité 5 ans. Code RS 5768. Certificateur : Ministère de la Transition Écologique. Formation éligible au CPF.",
    image: BUS2,
  },
  {
    slug: "passerelle-voyageurs",
    category: "voyageurs",
    kind: "Formation Obligatoire",
    title: "Passerelle Voyageurs — Formation Spécifique",
    cardTitle: "Passerelle Voyageurs",
    cardSubtitle: "Formation spécifique (35h)",
    durationBadge: "5 jours",
    duration: "35 heures (5 jours — 7 h/jour)",
    price: "À partir de 450 € — Nous consulter",
    summary:
      "La formation spécifique dite « Passerelle Voyageurs » permet aux conducteurs titulaires de la qualification initiale marchandises d'obtenir l'habilitation pour conduire des véhicules de transport de voyageurs de plus de 9 places.",
    objectifs: [
      "Être capable d'effectuer un acte de transport de voyageurs dans le cadre professionnel ou associatif, dans le respect de la sécurité et de la réglementation professionnelle en assurant un service de qualité",
    ],
    competences: [
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité en transport de voyageurs",
      "Application des réglementations spécifiques au transport de voyageurs",
      "Santé, sécurité routière et sécurité environnementale appliquées au transport de voyageurs",
      "Service et qualité du transport de voyageurs",
    ],
    public:
      "Toute personne titulaire de la qualification initiale de conducteur de transport de marchandises, souhaitant exercer une activité de transport de voyageurs dans un cadre professionnel ou associatif. Les personnes en situation de handicap peuvent avoir des besoins spécifiques, n'hésitez pas à nous contacter.",
    prerequis: [
      "Être titulaire du permis D ou DE ou D1 ou D1E en cours de validité",
      "Être titulaire d'une CQC ou d'un titre ou diplôme admis en équivalence au titre de la qualification initiale des conducteurs de transport de marchandises",
      "Être âgé d'au moins 21 ans",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Programme spécifique au transport de voyageurs adapté aux conducteurs déjà qualifiés dans le secteur marchandises",
      "Perfectionnement à la conduite rationnelle axée sur les règles de sécurité en transport de voyageurs",
      "Application des réglementations spécifiques au transport de voyageurs",
      "Santé, sécurité routière et sécurité environnementale",
      "Service et qualité du transport de voyageurs",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives et expositives"],
    moyens: [
      "Véhicules de transport en commun adaptés à la formation, équipés PMR",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
      "Supports et ouvrages pédagogiques réglementaires",
    ],
    evaluation: [
      "Évaluations formatives en cours et/ou en fin de formation",
      "Tests théoriques (QCM) et/ou pratiques",
      "Évaluation de satisfaction",
    ],
    acces: CPF_INTRO,
    accessibilite:
      "Les personnes en situation de handicap peuvent avoir des besoins spécifiques. Contactez-nous pour une analyse de vos besoins.",
    debouches: [
      "Conducteur de véhicules de transport de personnes comportant plus de 9 places",
      "Possibilité de travailler dans les secteurs voyageurs ET marchandises",
      "Cette formation permet de renouveler en même temps la validité de la CQC du secteur marchandises",
    ],
    certification:
      "Carte de Qualification de Conducteur (CQC) Voyageurs délivrée par l'Imprimerie Nationale — Validité 5 ans. Formation éligible au CPF.",
    image: BUS,
  },

  // ---------------------- AUTO / MOTO ----------------------
  {
    slug: "permis-b",
    category: "auto",
    kind: "Permis",
    title: "Permis B — Voiture (boîte manuelle)",
    cardTitle: "Permis B",
    cardSubtitle: "Voiture & utilitaire ≤ 3,5t",
    durationBadge: "Parcours sur-mesure",
    duration: "Formation individualisée selon l'évaluation de départ (forfait adapté à chaque candidat)",
    price: "Sur devis — évaluation d'1 h offerte en agence",
    summary:
      "Le permis de la catégorie B permet la conduite de tous les véhicules de tourisme et des véhicules utilitaires dont le poids total en charge ne dépasse pas 3,5 tonnes. PariPermis propose une offre sur-mesure : un parcours établi à partir d'un test d'évaluation sur simulateur, tenant compte de vos prérequis, de vos disponibilités et de votre rythme de progression.",
    objectifs: [
      "Maîtriser le maniement du véhicule et les commandes en sécurité",
      "Appréhender la route et circuler dans des conditions normales puis difficiles",
      "Partager la route avec les autres usagers et respecter le Code de la route",
      "Pratiquer une conduite autonome, sûre, citoyenne et économique (éco-conduite)",
      "Être prêt à se présenter et réussir l'examen pratique du permis B",
    ],
    competences: [
      "Connaître et utiliser les commandes, lire la signalisation et anticiper les dangers",
      "Réaliser les vérifications de sécurité (intérieures et extérieures)",
      "Circuler en agglomération, sur route et sur voie rapide en autonomie",
      "Adopter les bons comportements en situation difficile (pluie, nuit, trafic dense)",
      "Adopter une conduite éco-responsable et respectueuse de l'environnement",
    ],
    public:
      "Toute personne souhaitant obtenir le permis B (conduite de véhicules de tourisme et utilitaires ≤ 3,5 t). Les personnes en situation de handicap peuvent avoir des besoins spécifiques : contactez-nous pour une analyse de vos besoins et un éventuel aménagement.",
    prerequis: [
      "Être âgé de 15 ans minimum pour s'inscrire (apprentissage anticipé de la conduite dès 15 ans)",
      "Avoir 18 ans à la date de l'examen pratique (17 ans dans le cadre de la conduite accompagnée, selon la réglementation en vigueur)",
      "Avoir obtenu ou préparer l'épreuve théorique générale (le Code de la route), en cours de validité",
      "Réaliser une évaluation de départ afin de déterminer le volume de formation nécessaire",
      "Savoir lire et écrire le français ; enregistrement de la demande de permis sur le site ANTS avec le centre",
    ],
    programme: [
      "Évaluation de départ sur simulateur et élaboration d'un parcours individualisé",
      "Formation au Code de la route (en salle et/ou plateforme en ligne illimitée)",
      "Maîtrise du véhicule à allure réduite, hors circulation (commandes, manœuvres)",
      "Conduite en circulation : agglomération, route, voies rapides",
      "Conduite dans des conditions difficiles et gestion des situations à risque",
      "Éco-conduite et sensibilisation à l'environnement (bonnes pratiques, pics de pollution)",
      "Bilan de compétences et préparation à l'examen (examen blanc)",
    ],
    methodes: [
      "Pédagogie individualisée à partir du niveau évalué de chaque candidat",
      "Alternance de cours de code, de simulateur et de conduite réelle",
      "Suivi pédagogique numérique : le moniteur note vos progrès sur tablette, consultable depuis votre compte personnel",
    ],
    moyens: [
      "Moniteurs diplômés (titulaires du BEPECASER ou du Titre Pro ECSR)",
      "Véhicules à double commande récents",
      "Simulateurs de conduite (agglomération, autoroute, tunnel, pluie, verglas, neige, nuit, brouillard)",
      "Plateforme de Code de la route en ligne, accès à un agenda de réservation des leçons",
    ],
    evaluation: [
      "Évaluations continues de la progression consignées dans le livret numérique",
      "Examen blanc avant présentation",
      "Examen officiel : épreuve théorique générale (Code) puis épreuve pratique de conduite avec un inspecteur",
    ],
    acces:
      "Inscription après une évaluation de départ (1 h offerte). Démarrage selon les disponibilités et le financement. Délai indicatif d'accès : sous 2 semaines après validation du dossier.",
    accessibilite: HANDICAP,
    debouches: [
      "Autonomie et mobilité au quotidien (vie personnelle et professionnelle)",
      "Accès aux emplois nécessitant le permis B",
      "Prérequis pour les permis poids lourd (C, CE) et transport en commun (D)",
    ],
    certification:
      "Permis de conduire catégorie B délivré par l'État après réussite de l'épreuve pratique. Évaluation gratuite en agence.",
    image: CAR,
  },
  {
    slug: "permis-bea",
    category: "auto",
    kind: "Permis",
    title: "Permis BEA — Voiture boîte automatique (BVA)",
    cardTitle: "Permis BEA",
    cardSubtitle: "Voiture boîte automatique",
    durationBadge: "13 h minimum",
    duration: "Parcours individualisé (13 h de conduite minimum réglementaires)",
    price: "Sur devis — évaluation d'1 h offerte en agence",
    summary:
      "Le permis B avec Embrayage Automatique (BEA) permet la conduite des véhicules de tourisme et utilitaires ≤ 3,5 t équipés d'une Boîte de Vitesses Automatique (BVA). Souvent plus rapide à obtenir car il nécessite moins de temps d'apprentissage du passage des vitesses, il se concentre sur la maîtrise de la circulation et de la sécurité.",
    objectifs: [
      "Maîtriser la conduite d'un véhicule à boîte automatique en sécurité",
      "Connaître et appliquer les règles du Code de la route",
      "Circuler en autonomie en agglomération, sur route et voie rapide",
      "Adopter une conduite sûre, apaisée et économique",
      "Être prêt à réussir l'examen pratique du permis BEA",
    ],
    competences: [
      "Utiliser les commandes spécifiques d'un véhicule à boîte automatique (BVA)",
      "Réaliser les vérifications de sécurité et les manœuvres",
      "Conduire en circulation dans des conditions variées",
      "Anticiper et gérer les situations à risque",
      "Pratiquer l'éco-conduite",
    ],
    public:
      "Toute personne souhaitant conduire un véhicule à boîte automatique (≤ 3,5 t). Particulièrement adapté pour une obtention plus rapide ou en cas de difficultés avec la boîte manuelle. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être âgé d'au moins 17 ans",
      "Avoir obtenu ou préparer le Code de la route (épreuve théorique générale) en cours de validité",
      "Réaliser une évaluation de départ pour déterminer le nombre d'heures nécessaires",
      "Avoir 18 ans à la date de l'examen pratique",
      "Enregistrement de la demande de permis sur le site ANTS avec le centre",
    ],
    programme: [
      "Évaluation de départ et parcours individualisé",
      "Formation au Code de la route (salle et/ou plateforme en ligne)",
      "Prise en main du véhicule à boîte automatique hors circulation",
      "Conduite en circulation : agglomération, route, voie rapide",
      "Conduite en conditions difficiles et gestion des risques",
      "Éco-conduite et préparation à l'examen (examen blanc)",
    ],
    methodes: [
      "Pédagogie individualisée et progressive",
      "Alternance code / simulateur / conduite réelle",
      "Suivi pédagogique numérique consultable sur compte personnel",
    ],
    moyens: [
      "Moniteurs diplômés",
      "Véhicules à boîte automatique à double commande",
      "Simulateurs de conduite et plateforme de Code en ligne",
    ],
    evaluation: [
      "Suivi continu de la progression (livret numérique)",
      "Examen blanc avant présentation",
      "Examen officiel : Code puis épreuve pratique BEA avec un inspecteur",
    ],
    acces:
      "Inscription après évaluation (1 h offerte). Une formation passerelle de 7 h permet ensuite de lever la restriction « boîte automatique » pour conduire une boîte manuelle. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Mobilité et autonomie au quotidien",
      "Obtention souvent plus rapide du permis",
      "Possibilité de passer ensuite à la boîte manuelle (formation 7 h)",
    ],
    certification:
      "Permis de conduire catégorie B restreint « boîte automatique » (BEA) délivré par l'État après réussite de l'épreuve pratique.",
    image: CAR,
  },
  {
    slug: "permis-accelere",
    category: "auto",
    kind: "Permis",
    title: "Permis accéléré — B et A (moto)",
    cardTitle: "Permis accéléré",
    cardSubtitle: "Obtention en quelques semaines",
    durationBadge: "Intensif",
    duration: "Formation intensive : 2 jours de Code en collectif + conduite en accéléré selon forfait",
    price: "Sur devis — évaluation d'1 h offerte en agence",
    summary:
      "Rapide et efficace, le permis accéléré vous immerge complètement dans l'univers du permis pour une obtention en quelques semaines. Dispensé pour le permis B et le permis A (moto), il associe un apprentissage intensif du Code et un planning de conduite sur-mesure, avec une date d'examen rapprochée.",
    objectifs: [
      "Acquérir rapidement les connaissances du Code de la route",
      "Réussir l'examen théorique général dans un délai court",
      "Atteindre le niveau de conduite requis grâce à un planning intensif",
      "Obtenir une date d'examen pratique rapprochée",
    ],
    competences: [
      "Maîtriser les 10 thèmes du Code de la route",
      "Conduire en sécurité en circulation",
      "Gérer le stress et les situations d'examen",
    ],
    public:
      "Candidats disponibles et motivés souhaitant obtenir leur permis B ou A dans un délai court (reconversion, mobilité urgente, emploi…). Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Remplir les conditions d'âge du permis visé (B ou A)",
      "Forte disponibilité pour suivre une formation intensive",
      "Évaluation de conduite d'1 h pour déterminer le forfait adapté",
      "Enregistrement de la demande de permis sur le site ANTS avec le centre",
    ],
    programme: [
      "Code en accéléré : 2 jours de formation intensive en collectif (1 formateur dédié, 10 thèmes)",
      "Accès illimité à la plateforme de Code en ligne pour s'entraîner",
      "Passage de l'examen du Code de la route",
      "Évaluation de conduite (1 h) et élaboration d'un planning sur-mesure",
      "Formation à la conduite en accéléré selon le forfait et les disponibilités",
      "Obtention d'une date d'examen en seulement 2 semaines (selon places disponibles)",
    ],
    methodes: [
      "Formation intensive en immersion, formateur dédié",
      "Alternance code / conduite, planning resserré",
      "Suivi pédagogique numérique",
    ],
    moyens: [
      "Moniteurs diplômés",
      "Salle de code et plateforme en ligne illimitée",
      "Véhicules (ou motos) à double commande, simulateurs",
    ],
    evaluation: [
      "Tests blancs de Code pendant les 2 jours intensifs",
      "Suivi continu de la conduite et examen blanc",
      "Examens officiels : Code puis épreuve pratique",
    ],
    acces:
      "Sessions planifiées selon le calendrier des stages de Code et la disponibilité des places d'examen. Délai indicatif : démarrage sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Obtention du permis dans un délai court",
      "Mobilité rapide pour un emploi ou une reconversion",
    ],
    certification:
      "Permis de conduire (B ou A) délivré par l'État après réussite des épreuves théorique et pratique.",
    image: CAR2,
  },
  {
    slug: "permis-moto",
    category: "auto",
    kind: "Permis",
    title: "Permis Moto — AM (BSR), A1, A2 et A",
    cardTitle: "Permis Moto",
    cardSubtitle: "AM / BSR, A1, A2, A",
    durationBadge: "Selon catégorie",
    duration: "Variable selon le permis visé (AM : 8 h ; A1/A2 : plateau + circulation ; passerelle A2→A : 7 h)",
    price: "Sur devis — évaluation offerte en agence",
    summary:
      "PariPermis vous prépare au BSR / permis AM, ainsi qu'aux permis A1, A2 et A (motos de plus de 35 kW). Nous alternons cours théoriques et formation pratique sur nos motos (Yamaha MT-07, BMW GS 800) régulièrement renouvelées, avec interventions ponctuelles de spécialistes (sapeurs-pompiers, secouristes) pour la sensibilisation aux risques.",
    objectifs: [
      "Maîtriser la conduite d'un deux-roues motorisé en sécurité (plateau et circulation)",
      "Connaître et appliquer la réglementation propre aux deux-roues",
      "Adopter l'équipement et les comportements de sécurité adaptés",
      "Être prêt à réussir les épreuves du permis moto visé",
    ],
    competences: [
      "Réaliser les manœuvres de maniabilité à allure lente et soutenue (plateau)",
      "Circuler en sécurité en intégrant la vulnérabilité du motard",
      "Vérifier et utiliser les équipements de protection individuelle",
      "Gérer les situations à risque spécifiques aux deux-roues",
    ],
    public:
      "Toute personne souhaitant conduire un deux-roues : scooter ≤ 50 cm³ (AM/BSR dès 14 ans), motos légères A1, motos A2, puis A. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Permis AM (BSR) : avoir 14 ans ou plus ; ASSR1/ASSR2 ou ASR pour les personnes nées après le 31/12/1997",
      "Permis A1 : être âgé d'au moins 16 ans et avoir le Code de la route",
      "Permis A2 : être âgé d'au moins 18 ans et avoir le Code de la route",
      "Permis A : avoir au moins 2 ans de permis A2 et suivre la formation passerelle de 7 h",
      "Évaluation préalable du niveau ; enregistrement de la demande sur le site ANTS",
    ],
    programme: [
      "AM / BSR : 8 h de formation pratique (dont circulation) et sensibilisation aux risques",
      "Formation théorique moto (ETM) pour les permis A1/A2 (le cas échéant)",
      "Maîtrise du véhicule hors circulation : plateau (maniabilité lente et rapide)",
      "Conduite en circulation et partage de la route",
      "Sensibilisation aux risques avec intervenants spécialisés",
      "Examen blanc et préparation aux épreuves",
      "Formation 7 h obligatoire pour conduire un 125 cm³ avec le permis B (le cas échéant)",
    ],
    methodes: [
      "Alternance cours théoriques / pratique pour une mise en application progressive",
      "Interventions ponctuelles de spécialistes (pompiers, secouristes, préventeurs santé)",
      "Suivi pédagogique numérique",
    ],
    moyens: [
      "Motos récentes et régulièrement renouvelées (Yamaha MT-07, BMW GS 800, motos A1/A2)",
      "Piste / plateau de maniabilité, équipements de protection",
      "Moniteurs diplômés de la mention deux-roues",
    ],
    evaluation: [
      "Suivi continu de la progression sur plateau et en circulation",
      "Examen blanc avant présentation",
      "Examens officiels : épreuve théorique moto (ETM) le cas échéant, plateau et circulation",
    ],
    acces:
      "Inscription après évaluation. Démarrage selon les disponibilités et le calendrier d'examen. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Mobilité à deux-roues (scooter, moto)",
      "Conduite d'un 125 cm³ avec le permis B après la formation de 7 h",
      "Loisir et liberté de déplacement",
    ],
    certification:
      "Permis AM, A1, A2 ou A délivré par l'État après réussite des épreuves ; attestation de suivi pour la formation 7 h (125 cm³).",
    image: MOTO,
  },
  {
    slug: "code-de-la-route",
    category: "auto",
    kind: "Formation",
    title: "Code de la route — en ligne et en salle",
    cardTitle: "Code de la route",
    cardSubtitle: "En ligne illimité & cours collectifs",
    durationBadge: "Illimité",
    duration: "Accès illimité en ligne + cours collectifs ; formule accélérée possible (2 jours)",
    price: "Sur devis — packs Code disponibles",
    summary:
      "Préparez et obtenez votre Code de la route grâce à notre plateforme en ligne illimitée, mise à jour quotidiennement, accessible depuis votre ordinateur ou votre mobile. Choisissez la formule qui vous convient : 100 % digital, en auto-école (cours collectifs) ou les deux. Une solution d'apprentissage accéléré sur 2 jours est aussi proposée pour les plus pressés.",
    objectifs: [
      "Acquérir une connaissance complète et à jour du Code de la route",
      "Maîtriser les règles de circulation, la signalisation et les situations à risque",
      "Se préparer efficacement à l'examen théorique général (ETG)",
      "Réussir l'examen du Code de la route",
    ],
    competences: [
      "Connaître la réglementation et la signalisation routière",
      "Analyser des situations de conduite et identifier les dangers",
      "Répondre aux questions de l'examen officiel (séries type ETG)",
    ],
    public:
      "Toute personne préparant le Code de la route (préalable au permis B, A, ou poids lourd) en autonomie, en salle ou en formule mixte. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Savoir lire et écrire le français",
      "Disposer d'un accès internet pour la plateforme en ligne (formule digitale)",
      "Enregistrement de la demande de permis sur le site ANTS pour le passage de l'examen",
    ],
    programme: [
      "Les 10 thèmes officiels du Code de la route",
      "Entraînement illimité en ligne (séries de questions mises à jour quotidiennement)",
      "Cours collectifs en salle avec un formateur (selon la formule)",
      "Formule accélérée : 2 jours d'immersion complète au Code",
      "Examens blancs et suivi des résultats via un compte personnel",
      "Passage de l'examen théorique général (ETG)",
    ],
    methodes: [
      "Apprentissage flexible : 100 % digital, en salle, ou mixte",
      "Plateforme pédagogique avec mises en situation réelles",
      "Cours collectifs bénéficiant de l'effet de groupe et des réponses du formateur",
    ],
    moyens: [
      "Plateforme de Code en ligne illimitée (ordinateur et mobile)",
      "Salle de code et formateurs diplômés",
      "Compte personnel de suivi des résultats",
    ],
    evaluation: [
      "Séries d'entraînement et examens blancs notés",
      "Suivi de la progression sur compte personnel",
      "Examen officiel : épreuve théorique générale (ETG) en centre agréé",
    ],
    acces:
      "Accès à la plateforme dès l'achat du pack. Cours collectifs et sessions accélérées selon le calendrier de l'agence.",
    accessibilite: HANDICAP,
    debouches: [
      "Obtention du Code de la route (ETG), valable 5 ans",
      "Prérequis indispensable au permis B, A et poids lourd",
    ],
    certification:
      "Réussite de l'épreuve théorique générale (ETG) du Code de la route — validité 5 ans pour le passage des épreuves pratiques.",
    image: CODE,
  },
];

// Enregistrement officiel par formation.
// - certifInfo : identifiant CARIF OREF (= n° de la fiche intercariforef)
// - Titres Professionnels : code RNCP + fiche France Compétences
// - FIMO / FCO / Passerelle : code RS (Répertoire Spécifique) + fiche France Compétences
// - Permis : fiche CARIF OREF uniquement
const reg = (certifInfo: string, codes?: { rncp?: string; rs?: string }): Partial<Formation> => ({
  certifInfo,
  carifOrefUrl: `https://www.intercariforef.org/formations/certification-${certifInfo}.html`,
  ...(codes?.rncp
    ? { rncpCode: codes.rncp, franceCompetencesUrl: `https://www.francecompetences.fr/recherche/rncp/${codes.rncp}/` }
    : {}),
  ...(codes?.rs
    ? { rsCode: codes.rs, franceCompetencesUrl: `https://www.francecompetences.fr/recherche/rs/${codes.rs}/` }
    : {}),
});

const registrations: Record<string, Partial<Formation>> = {
  // Permis (fiche CARIF OREF)
  "permis-c": reg("54660"),
  "permis-ce": reg("81306"),
  "permis-d": reg("54662"),
  // Titres Professionnels (RNCP + France Compétences)
  "tp-transport-marchandises-porteur": reg("103807", { rncp: "39796" }),
  "tp-transport-marchandises-tous-vehicules": reg("117566", { rncp: "39795" }),
  "tp-transport-en-commun": reg("100817", { rncp: "37878" }),
  // FIMO / FCO / Passerelle (RS + France Compétences)
  "fimo-marchandises": reg("84554", { rs: "5769" }),
  "fco-marchandises": reg("84557", { rs: "5769" }),
  "passerelle-marchandises": reg("84558", { rs: "5769" }),
  "fimo-voyageurs": reg("84405", { rs: "5768" }),
  "fco-voyageurs": reg("84529", { rs: "5768" }),
  "passerelle-voyageurs": reg("84532", { rs: "5768" }),
};

// Passerelles, équivalences et voies d'accès (source : fiches France Compétences).
// Uniquement pour les certifications enregistrées (RNCP / RS) ; les permis n'en relèvent pas.
const passerellesBySlug: Record<string, string> = {
  "tp-transport-marchandises-porteur":
    "Certification constituée d'un bloc unique non sécable : aucune certification partielle possible. Aucune passerelle ni équivalence vers une autre certification enregistrée. Le titre confère par équivalence le permis C, la qualification initiale de conducteur (CQC) et le certificat ADR. Voies d'accès : formation continue, contrat d'apprentissage, contrat de professionnalisation, VAE ou candidature individuelle.",
  "tp-transport-marchandises-tous-vehicules":
    "Certification constituée d'un bloc unique non sécable : aucune certification partielle possible. Aucune passerelle ni équivalence vers une autre certification enregistrée. Le titre confère par équivalence le permis CE, la qualification initiale de conducteur (CQC) et le certificat ADR. Voies d'accès : formation continue, contrat d'apprentissage, contrat de professionnalisation, VAE ou candidature individuelle.",
  "tp-transport-en-commun":
    "Certification constituée d'un bloc unique non sécable : aucune certification partielle possible. Aucune passerelle ni équivalence vers une autre certification enregistrée. Voies d'accès : formation initiale, contrat d'apprentissage, formation continue, reconversion, VAE ou candidature individuelle. (Remplace l'ancien titre RNCP31085.)",
  "fimo-marchandises":
    "Aucune correspondance officielle avec d'autres certifications. Passerelle reconnue : les conducteurs déjà titulaires de la qualification initiale voyageurs peuvent accéder à la qualification marchandises via une formation passerelle de 35 h (au lieu de la FIMO complète).",
  "fco-marchandises":
    "Aucune correspondance officielle avec d'autres certifications. Les conducteurs déjà qualifiés dans le transport de voyageurs peuvent rejoindre le secteur marchandises via une formation passerelle de 35 h.",
  "passerelle-marchandises":
    "Formation passerelle de 35 h réservée aux conducteurs déjà titulaires de la qualification initiale voyageurs souhaitant exercer dans le transport de marchandises. Aucune autre correspondance officielle.",
  "fimo-voyageurs":
    "Aucune correspondance officielle avec d'autres certifications. Passerelle reconnue : les conducteurs déjà titulaires de la qualification initiale marchandises peuvent accéder à la qualification voyageurs via une formation passerelle de 35 h (au lieu de la FIMO complète).",
  "fco-voyageurs":
    "Aucune correspondance officielle avec d'autres certifications. Les conducteurs déjà qualifiés dans le transport de marchandises peuvent rejoindre le secteur voyageurs via une formation passerelle de 35 h.",
  "passerelle-voyageurs":
    "Formation passerelle de 35 h réservée aux conducteurs déjà titulaires de la qualification initiale marchandises souhaitant exercer dans le transport de voyageurs. Aucune autre correspondance officielle.",
};

// Chaque formation est certifiée Qualiopi et dispose d'un programme PDF servi
// par le site (/programmes/<slug>.pdf) — repli autonome si Sanity est indisponible.
export const formations: Formation[] = formationsData.map((f) => ({
  ...f,
  qualiopi: f.qualiopi ?? true,
  programmePdfUrl: f.programmePdfUrl ?? `/programmes/${f.slug}.pdf`,
  ...registrations[f.slug],
  passerelles: passerellesBySlug[f.slug],
}));

export const getFormation = (slug: string) => formations.find((f) => f.slug === slug);
export const marchandises = formations.filter((f) => f.category === "marchandises");
export const voyageurs = formations.filter((f) => f.category === "voyageurs");
