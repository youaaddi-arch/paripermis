export type Category = "marchandises" | "voyageurs" | "auto" | "deux-roues";

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
  modalitesExamen?: string[]; // modalités d'examen / de certification (réglementation, référentiels RNCP/RS)
  remuneration?: string; // rémunération indicative du métier visé (formations professionnelles)
  qualiopi?: boolean;
  programmePdfUrl?: string; // lien du PDF de programme à télécharger
  cpfUrl?: string; // lien de la fiche sur Mon Compte Formation (CPF)
  cpfEligible?: boolean; // éligibilité au CPF (faux : AM/BSR, passerelles, formation 7 h)
  rncpCode?: string; // Titres Professionnels
  rsCode?: string; // FIMO / FCO / Passerelle (Répertoire Spécifique)
  certifInfo?: string; // numéro Certif'Info (= identifiant CARIF OREF)
  franceCompetencesUrl?: string; // fiche RNCP / RS
  carifOrefUrl?: string; // fiche CARIF OREF / Certif'Info
  passerelles?: string; // passerelles, équivalences et voies d'accès (France Compétences)
}

const PX = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1100`;
const TRUCK = PX(2199293); // semi-remorque moderne (porteur / marchandises)
const TRUCK2 = PX(27099095); // Kenworth T680 — ensemble articulé moderne (SPL)
const BUS = PX(68427); // bus blanc moderne en circulation
const BUS2 = PX(18029613); // autocar moderne
const CAR = PX(18948281); // voiture moderne sur route
const CAR2 = PX(34404246); // berline moderne
const MOTO = PX(13274378); // motard équipé sur route
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
      "Conduire en sécurité un véhicule porteur de plus de 3,5 tonnes de PTAC",
      "Adapter sa conduite au gabarit du véhicule et aux différentes conditions de circulation",
      "Adopter une conduite autonome, sûre, économique et citoyenne",
      "Se présenter et réussir les épreuves de l'examen du permis C",
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
      "Être âgé d'au moins 21 ans, ou 18 ans dans le cadre d'une formation professionnelle de conducteur (titre professionnel, CAP ou Bac pro)",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé par sa préfecture (ou de la commission médicale des permis de conduire selon les cas)",
      "Savoir lire et écrire la langue française",
      "Avoir procédé à l'enregistrement de la demande de permis en ligne sur le site ANTS en lien avec notre centre de formation",
    ],
    programme: [
      "Compétence 1 — Maîtriser le maniement du véhicule dans un trafic faible ou nul : connaître les principaux organes et commandes, s'installer au poste de conduite, démarrer et s'arrêter, doser l'accélération et le freinage, utiliser la boîte de vitesses, diriger le véhicule en avant et en marche arrière",
      "Compétence 2 — Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité : vérifications intérieures et extérieures, interrogation orale (fiches), manœuvres de maniabilité (marche arrière sinueuse, mise à quai, demi-tour)",
      "Compétence 3 — Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation : rechercher la signalisation et les indices utiles, positionner le véhicule et choisir la voie, adapter l'allure, franchir intersections et carrefours à sens giratoire en tenant compte du porte-à-faux et du balayage",
      "Compétence 4 — Circuler dans des conditions difficiles et partager la route avec les autres usagers : évaluer et maintenir les distances de sécurité, croiser, dépasser et être dépassé, négocier les virages et les déclivités, s'insérer et sortir d'une voie rapide, conduire quand l'adhérence et la visibilité sont réduites",
      "Compétence 5 — Pratiquer une conduite autonome, sûre et économique : suivre un itinéraire en autonomie, anticiper et analyser les situations, connaître les facteurs de risque et les comportements en cas d'accident, pratiquer l'éco-conduite et utiliser les aides à la conduite",
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
      "Évaluations de compétences réalisées en continu selon le REMC (Référentiel pour l'Éducation à une Mobilité Citoyenne) et le livret d'apprentissage de la catégorie C (arrêté du 12 mai 2014) : 5 compétences globales et 37 compétences associées",
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
      "Conduire en sécurité un ensemble articulé (tracteur + remorque ou semi-remorque > 750 kg)",
      "Maîtriser l'attelage/dételage et les manœuvres propres à l'ensemble articulé",
      "Adapter sa conduite au gabarit de l'ensemble et aux différentes conditions de circulation",
      "Adopter une conduite autonome, sûre, économique et citoyenne",
      "Se présenter et réussir les épreuves de l'examen du permis CE",
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
      "Être âgé d'au moins 21 ans, ou 18 ans dans le cadre d'une formation professionnelle de conducteur (titre professionnel, CAP ou Bac pro)",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé par sa préfecture (ou de la commission médicale des permis de conduire selon les cas)",
      "Savoir lire et écrire la langue française",
      "Avoir procédé à l'enregistrement de la demande de permis en ligne sur le site ANTS en lien avec notre centre de formation",
    ],
    programme: [
      "Compétence 1 — Maîtriser le maniement de l'ensemble dans un trafic faible ou nul : organes et commandes, installation au poste de conduite, démarrer et s'arrêter, doser l'accélération et le freinage, utiliser la boîte de vitesses, diriger l'ensemble en avant et en marche arrière",
      "Compétence 2 — Effectuer les vérifications courantes de sécurité et les exercices de maniabilité : attelage et dételage de la remorque/semi-remorque, vérifications intérieures et extérieures, interrogation orale (fiches), manœuvres de maniabilité (marche arrière, mise à quai)",
      "Compétence 3 — Appréhender la route en fonction du gabarit de l'ensemble dans des conditions normales de circulation : signalisation et indices utiles, positionnement et choix de voie, adaptation de l'allure, intersections et giratoires en tenant compte du porte-à-faux et du balayage",
      "Compétence 4 — Circuler dans des conditions difficiles et partager la route avec les autres usagers : distances de sécurité, croiser/dépasser/être dépassé, virages et déclivités, insertion et sortie de voie rapide, adhérence et visibilité réduites",
      "Compétence 5 — Pratiquer une conduite autonome, sûre et économique : itinéraire en autonomie, anticipation et analyse des situations, facteurs de risque, comportements en cas d'accident, éco-conduite et aides à la conduite",
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
      "Évaluations de compétences réalisées en continu selon le REMC (Référentiel pour l'Éducation à une Mobilité Citoyenne) et le livret d'apprentissage des catégories C1/C1E/C/CE (arrêté du 12 mai 2014)",
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
      "Accueil, positionnement et perfectionnement de la conduite d'un véhicule porteur du groupe lourd (préparation au permis C)",
      "Réglementation des transports : réglementation sociale européenne (RSE), temps de conduite et de repos, chronotachygraphe, documents de transport",
      "Contrôles obligatoires et de sécurité du véhicule, prévention des risques et éco-conduite",
      "Prise en charge, chargement, calage/arrimage et utilisation des moyens de manutention ; livraison des marchandises",
      "Conduite et manœuvres en sécurité, hors circulation et en circulation",
      "Conduite en situation difficile, procédures en cas d'incident ou d'accident et secourisme",
      "Qualification initiale de conducteur (FIMO) et préparation à la session d'examen (mise en situation professionnelle, dossier professionnel)",
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
      "Évaluation conforme au référentiel d'évaluation (RE) du titre professionnel — France Compétences / Ministère du Travail",
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
      "Accueil, positionnement et perfectionnement de la conduite d'un ensemble articulé du groupe lourd (préparation au permis CE)",
      "Réglementation des transports : réglementation sociale européenne (RSE), temps de conduite et de repos, chronotachygraphe, documents de transport",
      "Attelage/dételage, contrôles obligatoires et de sécurité de l'ensemble, prévention des risques et éco-conduite",
      "Prise en charge, chargement, calage/arrimage et utilisation des moyens de manutention ; livraison des marchandises",
      "Conduite et manœuvres en sécurité de l'ensemble articulé, hors circulation et en circulation",
      "Conduite en situation difficile, procédures en cas d'incident ou d'accident et secourisme",
      "Qualification initiale de conducteur (FIMO) et préparation à la session d'examen (mise en situation professionnelle, dossier professionnel)",
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
      "Évaluation conforme au référentiel d'évaluation (RE) du titre professionnel — France Compétences / Ministère du Travail",
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
      "Être âgé d'au moins 18 ans : la FIMO permet de conduire un véhicule du groupe lourd de marchandises dès 18 ans (21 ans sans qualification)",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (4 domaines de la qualification initiale)",
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
      "Être âgé d'au moins 18 ans (secteur marchandises)",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (actualisation des 4 domaines)",
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
      "Être âgé d'au moins 18 ans (secteur marchandises)",
      "Savoir lire et écrire le français",
    ],
    programme: [
      "Bilan et positionnement : connaissances réglementaires et techniques propres au transport de marchandises",
      "Thème 1 — Perfectionnement à la conduite rationnelle axée sur la sécurité : chargement, calage, arrimage, manutention + conduite individuelle",
      "Thème 2 — Réglementation spécifique au transport de marchandises : réglementation sociale européenne, temps de conduite et de repos, chronotachygraphe, documents de transport",
      "Thème 3 — Santé, sécurité routière et environnementale : conduite préventive, prévention des risques, secourisme",
      "Thème 4 — Service et logistique : qualité de service et environnement économique du transport de marchandises",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (formation passerelle de 35 h)",
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
      "Être âgé d'au moins 24 ans, ou 21 ans avec la qualification (FIMO voyageurs) ou dans le cadre d'un titre professionnel ; abaissements spécifiques pour les services réguliers dont le parcours ne dépasse pas 50 km",
      "Être reconnu apte lors d'une visite médicale auprès d'un médecin agréé",
      "Savoir lire et écrire la langue française",
    ],
    programme: [
      "Compétence 1 — Maîtriser le maniement du véhicule dans un trafic faible ou nul : organes et commandes, installation au poste de conduite, démarrer et s'arrêter, doser l'accélération et le freinage, utiliser la boîte de vitesses, diriger le véhicule en avant et en marche arrière",
      "Compétence 2 — Effectuer les vérifications courantes de sécurité du véhicule et les exercices de maniabilité : vérifications intérieures et extérieures, contrôles liés au transport de personnes (portes, accessibilité PMR), interrogation orale (fiches), manœuvres de maniabilité et accostage aux arrêts",
      "Compétence 3 — Appréhender la route en fonction du gabarit du véhicule dans des conditions normales de circulation : signalisation et indices utiles, positionnement et choix de voie, adaptation de l'allure, intersections et giratoires en tenant compte du porte-à-faux et du balayage",
      "Compétence 4 — Circuler dans des conditions difficiles et partager la route avec les autres usagers : distances de sécurité, croiser/dépasser/être dépassé, virages et déclivités, insertion et sortie de voie rapide, adhérence et visibilité réduites, confort et sécurité des passagers",
      "Compétence 5 — Pratiquer une conduite autonome, sûre et économique : itinéraire en autonomie, anticipation et analyse des situations, facteurs de risque, comportements en cas d'accident, éco-conduite et aides à la conduite",
    ],
    methodes: ["Formation en présentiel", "Méthodes pédagogiques actives, participatives et didactiques"],
    moyens: [
      "Véhicules de transport en commun de catégorie D adaptés à la formation",
      "Aires d'évolution spécialement aménagées",
      "Salle de cours équipée de moyens multimédia",
    ],
    evaluation: [
      "Évaluations de compétences réalisées en continu selon le REMC et le livret d'apprentissage des catégories D1/D1E/D/DE (arrêté du 12 mai 2014) : 5 compétences globales et leurs compétences associées",
      "Examen hors circulation (vérifications, interrogation orale et manœuvres)",
      "Examen de conduite en circulation, réalisé par un inspecteur du permis de conduire",
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
      "Accueil, positionnement et perfectionnement de la conduite d'un autobus/autocar (préparation au permis D)",
      "Consignes d'exploitation et contrôles de sécurité du véhicule (dont accessibilité PMR)",
      "Conduite et manœuvres en sécurité, confort et sécurité des passagers, éco-conduite",
      "Accueil, information et relation clientèle ; prestations commerciales (titres de transport, caisse)",
      "Réglementation du transport de voyageurs : réglementation sociale européenne (RSE), temps de conduite et de repos, chronotachygraphe",
      "Prévention et gestion des situations difficiles (incident, malaise, accident), secourisme et détection des dysfonctionnements",
      "Qualification initiale de conducteur (FIMO voyageurs) et préparation à la session d'examen (mise en situation professionnelle, dossier professionnel)",
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
      "Évaluation conforme au référentiel d'évaluation (RE) du titre professionnel — France Compétences / Ministère du Travail",
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
      "Être âgé d'au moins 21 ans avec la qualification (FIMO voyageurs) : conduite possible dès 21 ans (24 ans sans qualification ; abaissements pour certains services réguliers ≤ 50 km)",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (4 domaines de la qualification initiale)",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (actualisation des 4 domaines)",
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
      "Bilan et positionnement : connaissances réglementaires et techniques propres au transport de voyageurs",
      "Thème 1 — Perfectionnement à la conduite rationnelle axée sur la sécurité : confort et sécurité des passagers, accessibilité PMR + conduite individuelle",
      "Thème 2 — Réglementation spécifique au transport de voyageurs : réglementation sociale européenne, temps de conduite et de repos, chronotachygraphe, transport scolaire",
      "Thème 3 — Santé, sécurité routière et environnementale : conduite préventive, gestion des situations conflictuelles, secourisme",
      "Thème 4 — Service et qualité : accueil de la clientèle, qualité de service et environnement économique du transport de voyageurs",
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
      "Programme et modalités conformes à l'arrêté du 3 janvier 2008 (formation passerelle de 35 h)",
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
      "Filière classique : être âgé d'au moins 17 ans révolus pour s'inscrire et conduire dès l'obtention du permis (depuis le 1ᵉʳ janvier 2024)",
      "Conduite accompagnée (AAC) : début de la formation dès 15 ans, épreuve pratique et conduite autonome à partir de 17 ans",
      "Avoir obtenu ou préparer l'épreuve théorique générale (le Code de la route), en cours de validité (5 ans, dans la limite de 5 présentations à l'examen pratique)",
      "Réaliser une évaluation de départ afin de déterminer le volume de formation nécessaire (20 h de conduite minimum réglementaires)",
      "Savoir lire et écrire le français ; enregistrement de la demande de permis sur le site ANTS avec le centre",
    ],
    programme: [
      "Évaluation de départ sur simulateur, parcours individualisé et formation au Code de la route (épreuve théorique générale)",
      "Compétence 1 — Maîtriser le maniement du véhicule dans un trafic faible ou nul : installation au poste de conduite, démarrage et arrêt, dosage de l'accélération et du freinage, utilisation de la boîte de vitesses, direction du véhicule en avant et en marche arrière",
      "Compétence 2 — Appréhender la route et circuler dans des conditions normales : signalisation et indices utiles, positionnement et choix de voie, adaptation de l'allure, franchissement des intersections et des giratoires",
      "Compétence 3 — Circuler dans des conditions difficiles et partager la route avec les autres usagers : distances de sécurité, croiser/dépasser/être dépassé, voie rapide, adhérence et visibilité réduites, partage de la route",
      "Compétence 4 — Pratiquer une conduite autonome, sûre et économique : conduite autonome, préparation d'un trajet, facteurs de risque, premiers secours et éco-conduite",
      "Bilan de compétences et préparation à l'examen (examen blanc)",
      "Formules possibles : traditionnelle, conduite accompagnée (AAC) dès 15 ans, ou conduite supervisée dès 18 ans",
    ],
    methodes: [
      "Pédagogie individualisée à partir du niveau évalué de chaque candidat",
      "Alternance de cours de code, de simulateur et de conduite réelle",
      "Suivi pédagogique numérique : le moniteur note vos progrès sur tablette, consultable depuis votre compte personnel",
      "Leçons de conduite possibles en duo : deux élèves par séance, en alternance conduite / observation",
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
      "Être âgé d'au moins 17 ans pour s'inscrire et conduire dès l'obtention du permis BEA (depuis le 1ᵉʳ janvier 2024) ; conduite accompagnée possible dès 15 ans",
      "Avoir obtenu ou préparer l'épreuve théorique générale (le Code de la route), en cours de validité (5 ans)",
      "Effectuer les heures de conduite avec un instructeur agréé jusqu'à l'autonomie (13 h minimum réglementaires sur boîte automatique)",
      "Réaliser une évaluation de départ pour déterminer le nombre d'heures nécessaires",
      "Enregistrement de la demande de permis sur le site ANTS avec le centre",
    ],
    programme: [
      "Évaluation de départ, parcours individualisé et formation au Code de la route (épreuve théorique générale)",
      "Compétence 1 — Maîtriser le maniement du véhicule à boîte automatique dans un trafic faible ou nul : installation au poste de conduite, commandes spécifiques (BVA), démarrage et arrêt, dosage de l'accélération et du freinage, marche arrière",
      "Compétence 2 — Appréhender la route et circuler dans des conditions normales : signalisation et indices utiles, positionnement et choix de voie, adaptation de l'allure, intersections et giratoires",
      "Compétence 3 — Circuler dans des conditions difficiles et partager la route avec les autres usagers : distances de sécurité, croiser/dépasser/être dépassé, voie rapide, adhérence et visibilité réduites",
      "Compétence 4 — Pratiquer une conduite autonome, sûre et économique : conduite autonome, préparation d'un trajet, facteurs de risque, premiers secours et éco-conduite",
      "Bilan de compétences et préparation à l'examen (examen blanc)",
    ],
    methodes: [
      "Pédagogie individualisée et progressive",
      "Alternance code / simulateur / conduite réelle",
      "Suivi pédagogique numérique consultable sur compte personnel",
      "Leçons de conduite possibles en duo : deux élèves par séance, en alternance conduite / observation",
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
    slug: "permis-aac",
    category: "auto",
    kind: "Permis",
    title: "Permis B en AAC — Conduite accompagnée (dès 15 ans)",
    cardTitle: "Permis AAC",
    cardSubtitle: "Conduite accompagnée dès 15 ans",
    durationBadge: "Dès 15 ans",
    duration: "Formation initiale (20 h minimum) + phase de conduite accompagnée (1 an et 3 000 km minimum)",
    price: "Sur devis — évaluation d'1 h offerte en agence",
    summary:
      "L'Apprentissage Anticipé de la Conduite (AAC) permet de commencer la formation au permis B dès 15 ans. Après une formation initiale en auto-école, le candidat conduit accompagné d'un adulte pendant au moins 1 an, ce qui augmente fortement le taux de réussite et réduit la période probatoire à 2 ans.",
    objectifs: [
      "Acquérir les bases de la conduite lors de la formation initiale",
      "Consolider son expérience pendant la phase de conduite accompagnée",
      "Conduire de façon autonome, sûre, économique et citoyenne",
      "Se présenter et réussir l'examen du permis B dès 17 ans",
    ],
    competences: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Appréhender la route et circuler dans des conditions normales",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Jeunes dès 15 ans souhaitant préparer le permis B en conduite accompagnée. Les personnes en situation de handicap peuvent avoir des besoins spécifiques : contactez-nous pour une analyse de vos besoins.",
    prerequis: [
      "Être âgé d'au moins 15 ans à l'entrée en formation",
      "Accord des représentants légaux et de l'assureur du véhicule",
      "Obtenir l'épreuve théorique générale (Code de la route), en cours de validité (5 ans)",
      "Réaliser la formation initiale (20 h de conduite minimum) sanctionnée par une attestation de fin de formation initiale (AFFI)",
      "Accompagnateur titulaire du permis B depuis au moins 5 ans sans interruption",
    ],
    programme: [
      "Formation au Code de la route (épreuve théorique générale)",
      "Compétence 1 — Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Compétence 2 — Appréhender la route et circuler dans des conditions normales",
      "Compétence 3 — Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Compétence 4 — Pratiquer une conduite autonome, sûre et économique",
      "Rendez-vous préalable avec l'enseignant et l'accompagnateur, puis phase de conduite accompagnée (≥ 1 an et ≥ 3 000 km)",
      "Deux rendez-vous pédagogiques obligatoires pendant la phase accompagnée",
    ],
    methodes: [
      "Pédagogie individualisée à partir du niveau évalué",
      "Alternance code / simulateur / conduite réelle",
      "Suivi pédagogique numérique consultable sur compte personnel",
      "Leçons de conduite possibles en duo : deux élèves par séance, en alternance conduite / observation",
    ],
    moyens: [
      "Moniteurs diplômés (BEPECASER ou Titre Pro ECSR)",
      "Véhicules à double commande récents",
      "Simulateurs de conduite et plateforme de Code en ligne",
    ],
    evaluation: [
      "Évaluations continues consignées dans le livret d'apprentissage (REMC, arrêté du 13 mai 2013)",
      "Attestation de fin de formation initiale (AFFI) puis rendez-vous pédagogiques",
      "Examen officiel : Code puis épreuve pratique (dès 17 ans)",
    ],
    acces:
      "Inscription après une évaluation de départ (1 h offerte). Délai indicatif d'accès : sous 2 semaines après validation du dossier.",
    accessibilite: HANDICAP,
    debouches: [
      "Période probatoire réduite à 2 ans (au lieu de 3)",
      "Meilleur taux de réussite à l'examen",
      "Autonomie et mobilité au quotidien",
    ],
    certification:
      "Permis de conduire catégorie B délivré par l'État après réussite de l'épreuve pratique (présentation possible dès 17 ans).",
    image: CAR,
  },
  {
    slug: "permis-cs",
    category: "auto",
    kind: "Permis",
    title: "Permis B en conduite supervisée (CS)",
    cardTitle: "Permis CS",
    cardSubtitle: "Conduite supervisée dès 18 ans",
    durationBadge: "Dès 18 ans",
    duration: "Formation initiale (20 h minimum) + phase de conduite supervisée (sans durée ni kilométrage minimum)",
    price: "Sur devis — évaluation d'1 h offerte en agence",
    summary:
      "La conduite supervisée permet, dès 18 ans, d'acquérir de l'expérience accompagné d'un conducteur avant de passer (ou repasser) l'examen pratique du permis B. Elle peut être choisie dès le départ ou après un échec à l'épreuve pratique.",
    objectifs: [
      "Acquérir les bases de la conduite lors de la formation initiale",
      "Gagner en expérience et en confiance pendant la phase supervisée",
      "Conduire de façon autonome, sûre, économique et citoyenne",
      "Se présenter et réussir l'examen pratique du permis B",
    ],
    competences: [
      "Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Appréhender la route et circuler dans des conditions normales",
      "Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Candidats de 18 ans minimum souhaitant acquérir de l'expérience avant l'examen, ou après un ou plusieurs échecs à l'épreuve pratique. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être âgé d'au moins 18 ans",
      "Obtenir l'épreuve théorique générale (Code de la route), en cours de validité (5 ans)",
      "Avoir suivi la formation initiale (20 h de conduite minimum) et obtenu l'attestation de fin de formation initiale (AFFI)",
      "Accord de l'assureur du véhicule ; accompagnateur titulaire du permis B depuis au moins 5 ans",
    ],
    programme: [
      "Formation au Code de la route (épreuve théorique générale)",
      "Compétence 1 — Maîtriser le maniement du véhicule dans un trafic faible ou nul",
      "Compétence 2 — Appréhender la route et circuler dans des conditions normales",
      "Compétence 3 — Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Compétence 4 — Pratiquer une conduite autonome, sûre et économique",
      "Rendez-vous préalable avec l'enseignant et l'accompagnateur, puis phase de conduite supervisée (sans durée ni distance minimale)",
    ],
    methodes: [
      "Pédagogie individualisée à partir du niveau évalué",
      "Alternance code / simulateur / conduite réelle",
      "Suivi pédagogique numérique consultable sur compte personnel",
      "Leçons de conduite possibles en duo : deux élèves par séance, en alternance conduite / observation",
    ],
    moyens: [
      "Moniteurs diplômés (BEPECASER ou Titre Pro ECSR)",
      "Véhicules à double commande récents",
      "Simulateurs de conduite et plateforme de Code en ligne",
    ],
    evaluation: [
      "Évaluations continues consignées dans le livret d'apprentissage (REMC, arrêté du 13 mai 2013)",
      "Attestation de fin de formation initiale (AFFI) puis rendez-vous préalable",
      "Examen officiel : Code puis épreuve pratique de conduite avec un inspecteur",
    ],
    acces:
      "Inscription après une évaluation de départ (1 h offerte). Délai indicatif d'accès : sous 2 semaines après validation du dossier.",
    accessibilite: HANDICAP,
    debouches: [
      "Expérience de conduite renforcée avant l'examen",
      "Solution adaptée après un échec à l'épreuve pratique",
      "Autonomie et mobilité au quotidien",
    ],
    certification:
      "Permis de conduire catégorie B délivré par l'État après réussite de l'épreuve pratique.",
    image: CAR,
  },
  {
    slug: "passerelle-bea-b",
    category: "auto",
    kind: "Formation",
    title: "Passerelle BEA → B — Boîte automatique vers boîte manuelle (7 h)",
    cardTitle: "Passerelle BEA → B",
    cardSubtitle: "Boîte auto vers boîte manuelle",
    durationBadge: "7 h",
    duration: "7 heures de formation pratique (sans examen)",
    price: "Sur devis — nous consulter",
    summary:
      "Cette formation de 7 heures permet aux titulaires du permis B limité à la boîte automatique (BEA, code 78) de lever cette restriction et de conduire un véhicule à boîte manuelle. Depuis le 1ᵉʳ mars 2024, elle est accessible immédiatement après l'obtention du permis BEA (plus de délai de 3 mois).",
    objectifs: [
      "Maîtriser l'utilisation de la boîte de vitesses manuelle (embrayage, passage des rapports)",
      "Adapter sa conduite à un véhicule à boîte manuelle en sécurité",
      "Lever la restriction « boîte automatique » (code 78) du permis B",
    ],
    competences: [
      "Démarrer, s'arrêter et utiliser l'embrayage avec aisance",
      "Passer les rapports en fonction de l'allure et de la situation",
      "Conduire un véhicule à boîte manuelle en circulation en sécurité",
    ],
    public:
      "Titulaires du permis B restreint à la boîte automatique (BEA) souhaitant conduire une boîte manuelle. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être titulaire du permis B limité à la boîte automatique (code 78), y compris depuis l'obtention récente (plus de délai de 3 mois depuis le 1ᵉʳ mars 2024)",
      "Formation dispensée par une auto-école labellisée « École conduite qualité »",
    ],
    programme: [
      "Séquence théorique : intérêt et fonctionnement de la boîte de vitesses manuelle",
      "Maîtrise du véhicule hors circulation : embrayage, démarrages, passage des rapports",
      "Conduite en circulation : utilisation de la boîte manuelle dans des situations variées",
      "Bilan de la formation et délivrance de l'attestation de suivi",
    ],
    methodes: [
      "Formation pratique individualisée de 7 h",
      "Alternance hors circulation et en circulation",
    ],
    moyens: [
      "Moniteurs diplômés",
      "Véhicule à boîte manuelle à double commande",
    ],
    evaluation: [
      "Pas d'examen : évaluation continue par l'enseignant pendant les 7 h",
      "Délivrance d'une attestation de suivi de formation permettant de lever la restriction « boîte automatique »",
    ],
    acces:
      "Inscription après vérification des prérequis. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Conduite de tous les véhicules de catégorie B, boîte manuelle comme automatique",
      "Suppression de la restriction « boîte automatique » (code 78) sur le permis",
    ],
    certification:
      "Attestation de suivi de la formation de 7 h ; la restriction « boîte automatique » est levée et le permis B « complet » est délivré par l'État.",
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
    slug: "permis-am",
    category: "deux-roues",
    kind: "Permis",
    title: "Permis AM (BSR) — Scooter & cyclomoteur 50 cm³",
    cardTitle: "Permis AM (BSR)",
    cardSubtitle: "Scooter 50 cm³ dès 14 ans",
    durationBadge: "8 h",
    duration: "8 heures minimum de formation pratique sur au moins 2 jours (4 h maximum par jour)",
    price: "Sur devis — nous consulter",
    summary:
      "Le permis AM (ex-BSR) permet de conduire un cyclomoteur ou scooter de 50 cm³ et un quadricycle léger à moteur dès 14 ans. Il associe une attestation de sécurité routière (ASSR/ASR) et une formation pratique de 8 heures.",
    objectifs: [
      "Conduire un cyclomoteur 50 cm³ ou un quadricycle léger en sécurité",
      "Adopter les équipements et comportements de sécurité adaptés",
      "Connaître les principaux risques routiers du deux-roues",
    ],
    competences: [
      "Maîtriser le maniement du cyclomoteur hors circulation",
      "Circuler en sécurité sur les voies ouvertes à la circulation",
      "Identifier et anticiper les risques propres au deux-roues",
    ],
    public:
      "Jeunes dès 14 ans (et toute personne née à partir du 1ᵉʳ janvier 1988 ne possédant pas de permis) souhaitant conduire un scooter 50 cm³. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être âgé d'au moins 14 ans",
      "Être titulaire de l'ASSR1 ou ASSR2 (au collège) ou de l'ASR — obligatoire pour les personnes nées à partir du 1ᵉʳ janvier 1988",
    ],
    programme: [
      "Échanges sur les représentations individuelles de la conduite (30 min)",
      "Formation aux règles de circulation et au code (30 min)",
      "Conduite hors circulation : maniement du véhicule (1 h minimum)",
      "Conduite sur les voies ouvertes à la circulation publique (3 h minimum)",
      "Sensibilisation aux risques (1 h minimum)",
    ],
    methodes: [
      "Formation pratique de 8 h sur 2 jours, en petit groupe",
      "Alternance hors circulation et en circulation",
    ],
    moyens: [
      "Cyclomoteurs et équipements de protection",
      "Piste / plateau et moniteurs diplômés",
    ],
    evaluation: [
      "Évaluation continue par l'enseignant pendant la formation (pas d'examen)",
      "Délivrance d'une attestation de suivi (catégorie AM) ; le certificat d'examen permet de circuler 4 mois en attendant le titre (validité 15 ans)",
    ],
    acces:
      "Inscription après vérification des prérequis (ASSR/ASR). Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Mobilité autonome dès 14 ans en scooter 50 cm³",
      "Conduite d'un quadricycle léger à moteur (voiturette ≤ 50 cm³)",
    ],
    certification:
      "Catégorie AM du permis de conduire délivrée par l'État après la formation (volet théorique ASSR/ASR + 8 h pratiques).",
    image: MOTO,
  },
  {
    slug: "permis-a1",
    category: "deux-roues",
    kind: "Permis",
    title: "Permis A1 — Moto légère 125 cm³ (& stage 125)",
    cardTitle: "Permis A1",
    cardSubtitle: "Moto 125 cm³ dès 16 ans",
    durationBadge: "Dès 16 ans",
    duration: "Épreuve théorique moto (ETM) + formation pratique (plateau et circulation)",
    price: "Sur devis — évaluation offerte en agence",
    summary:
      "Le permis A1 autorise la conduite des motos légères jusqu'à 125 cm³ et 11 kW dès 16 ans. PariPermis prépare l'épreuve théorique moto (ETM) et les épreuves pratiques (plateau et circulation). Les titulaires du permis B peuvent, eux, conduire un 125 cm³ après une formation de 7 h (« stage 125 »).",
    objectifs: [
      "Connaître et maîtriser la moto à allure lente et soutenue (plateau)",
      "Circuler en sécurité en intégrant la vulnérabilité du motard",
      "Adopter l'équipement et les comportements de sécurité",
      "Réussir l'épreuve théorique moto (ETM) et les épreuves pratiques",
    ],
    competences: [
      "Connaître et maîtriser sa moto dans un trafic faible ou nul (plateau)",
      "Appréhender la route et circuler dans des conditions normales",
      "Circuler dans des conditions difficiles et partager la route",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Toute personne d'au moins 16 ans souhaitant conduire une moto légère 125 cm³ (A1), et titulaires du permis B visant la formation 125 (« stage 125 »). Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Permis A1 : être âgé d'au moins 16 ans et réussir l'épreuve théorique moto (ETM) — 40 questions, 35 bonnes réponses requises, valable 5 ans",
      "Permis A1 : enregistrement de la demande de permis sur le site ANTS",
      "Stage 125 (autre voie, pour les titulaires du permis B) : permis B depuis au moins 2 ans — ni ETM ni examen requis (dispense si conduite d'un 125/L5e attestée dans les 5 ans)",
    ],
    programme: [
      "Permis A1 — Épreuve théorique moto (ETM)",
      "Permis A1 — Compétence 1 : connaître et maîtriser sa moto dans un trafic faible ou nul (plateau : maniabilité lente et rapide, freinages)",
      "Permis A1 — Compétence 2 : appréhender la route et circuler dans des conditions normales",
      "Permis A1 — Compétence 3 : circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Permis A1 — Compétence 4 : pratiquer une conduite autonome, sûre et économique",
      "Stage 125 (titulaires du permis B) : formation de 7 h (2 h théorie + 2 h plateau + 3 h circulation), SANS examen ni ETM — attestation de suivi délivrée, pour conduire un 125 cm³ ou un tricycle L5e (depuis le 1ᵉʳ janvier 2011)",
    ],
    methodes: [
      "Alternance théorie (ETM) / plateau / circulation",
      "Suivi pédagogique numérique",
    ],
    moyens: [
      "Motos A1 récentes, piste / plateau de maniabilité",
      "Équipements de protection ; moniteurs de la mention deux-roues",
    ],
    evaluation: [
      "Suivi continu sur plateau et en circulation (livret REMC, arrêté du 12 mai 2014)",
      "Examen blanc avant présentation",
      "Examens officiels : ETM, plateau et circulation",
    ],
    acces:
      "Inscription après évaluation. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Conduite d'une moto légère 125 cm³ (A1)",
      "Conduite d'un 125 cm³ avec le permis B après le stage de 7 h",
      "Accès ultérieur au permis A2 puis A",
    ],
    certification:
      "Permis A1 délivré par l'État après réussite de l'ETM et des épreuves pratiques ; attestation de suivi pour le stage 125 (titulaires du permis B).",
    image: MOTO,
  },
  {
    slug: "permis-a2",
    category: "deux-roues",
    kind: "Permis",
    title: "Permis A2 — Moto de puissance intermédiaire (≤ 35 kW)",
    cardTitle: "Permis A2",
    cardSubtitle: "Moto ≤ 35 kW dès 18 ans",
    durationBadge: "Dès 18 ans",
    duration: "Épreuve théorique moto (ETM) + formation pratique (plateau et circulation)",
    price: "Sur devis — évaluation offerte en agence",
    summary:
      "Le permis A2 autorise la conduite des motos d'une puissance maximale de 35 kW dès 18 ans. Après 2 ans de permis A2, une formation passerelle de 7 h donne accès au permis A (toutes cylindrées).",
    objectifs: [
      "Connaître et maîtriser la moto à allure lente et soutenue (plateau)",
      "Circuler en sécurité en intégrant la vulnérabilité du motard",
      "Adopter l'équipement et les comportements de sécurité",
      "Réussir l'épreuve théorique moto (ETM) et les épreuves pratiques",
    ],
    competences: [
      "Connaître et maîtriser sa moto dans un trafic faible ou nul (plateau)",
      "Appréhender la route et circuler dans des conditions normales",
      "Circuler dans des conditions difficiles et partager la route",
      "Pratiquer une conduite autonome, sûre et économique",
    ],
    public:
      "Toute personne d'au moins 18 ans souhaitant conduire une moto de puissance intermédiaire (≤ 35 kW). Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être âgé d'au moins 18 ans",
      "Réussir l'épreuve théorique moto (ETM) — dispense si titulaire du permis A1 depuis 5 ans au plus",
      "Enregistrement de la demande de permis sur le site ANTS",
    ],
    programme: [
      "Épreuve théorique moto (ETM) le cas échéant",
      "Compétence 1 — Connaître et maîtriser sa moto dans un trafic faible ou nul (plateau : maniabilité lente et rapide, freinages)",
      "Compétence 2 — Appréhender la route et circuler dans des conditions normales",
      "Compétence 3 — Circuler dans des conditions difficiles et partager la route avec les autres usagers",
      "Compétence 4 — Pratiquer une conduite autonome, sûre et économique",
      "Sensibilisation aux risques et examen blanc avant présentation",
    ],
    methodes: [
      "Alternance théorie (ETM) / plateau / circulation",
      "Interventions ponctuelles de spécialistes (pompiers, secouristes)",
      "Suivi pédagogique numérique",
    ],
    moyens: [
      "Motos A2 récentes (ex. Yamaha MT-07 bridée), piste / plateau de maniabilité",
      "Équipements de protection ; moniteurs de la mention deux-roues",
    ],
    evaluation: [
      "Suivi continu sur plateau et en circulation (livret REMC, arrêté du 12 mai 2014)",
      "Examen blanc avant présentation",
      "Examens officiels : ETM, plateau et circulation",
    ],
    acces:
      "Inscription après évaluation. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Conduite d'une moto ≤ 35 kW (A2)",
      "Accès au permis A après 2 ans et la formation passerelle de 7 h",
      "Mobilité et loisir à moto",
    ],
    certification:
      "Permis A2 délivré par l'État après réussite de l'ETM (le cas échéant) et des épreuves pratiques (plateau et circulation).",
    image: MOTO,
  },
  {
    slug: "passerelle-a2-a",
    category: "deux-roues",
    kind: "Formation",
    title: "Passerelle A2 → A — Formation de 7 h",
    cardTitle: "Passerelle A2 → A",
    cardSubtitle: "Accès au permis A (toutes cylindrées)",
    durationBadge: "7 h",
    duration: "7 heures de formation (2 h théorie + 2 h hors circulation + 3 h en circulation), sans examen",
    price: "Sur devis — nous consulter",
    summary:
      "La formation passerelle de 7 heures permet aux titulaires du permis A2 depuis au moins 2 ans d'accéder au permis A (motos de plus de 35 kW), sans nouvel examen. Elle est encadrée par l'arrêté du 8 novembre 2012.",
    objectifs: [
      "Approfondir la connaissance et la maîtrise d'une moto plus puissante",
      "Renforcer la sécurité et l'analyse des situations de conduite",
      "Obtenir le permis A (toutes cylindrées)",
    ],
    competences: [
      "Analyser les accidents les plus fréquents et les facteurs de risque du motard",
      "Maîtriser la moto lors de manœuvres hors circulation",
      "Conduire en sécurité une moto de forte puissance en circulation",
    ],
    public:
      "Titulaires du permis A2 depuis au moins 2 ans souhaitant accéder au permis A. Accessible aux personnes en situation de handicap (nous contacter).",
    prerequis: [
      "Être titulaire du permis A2 depuis au moins 2 ans",
      "Enregistrement de la demande de permis sur le site ANTS",
    ],
    programme: [
      "Module théorique (2 h) : accidentalité du motard, facteurs de risque, réglementation et équipement",
      "Module hors circulation (2 h) : maniabilité d'une moto de forte puissance (plateau)",
      "Module en circulation (3 h) : conduite sécurisée et analyse des situations",
    ],
    methodes: [
      "Formation pratique de 7 h en petit groupe",
      "Alternance théorie / plateau / circulation",
    ],
    moyens: [
      "Motos de catégorie A (> 35 kW), piste / plateau",
      "Équipements de protection ; moniteurs de la mention deux-roues",
    ],
    evaluation: [
      "Pas d'examen : évaluation continue par l'enseignant pendant les 7 h (arrêté du 8 novembre 2012)",
      "Délivrance d'une attestation de suivi de formation",
    ],
    acces:
      "Inscription après vérification de l'ancienneté du permis A2. Délai indicatif d'accès : sous 2 semaines.",
    accessibilite: HANDICAP,
    debouches: [
      "Conduite de toutes les motos (permis A, sans limite de puissance)",
      "Conduite des tricycles à moteur de plus de 15 kW",
    ],
    certification:
      "Permis A délivré par l'État après la formation de 7 h (attestation de suivi), sans nouvel examen.",
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
      "Toute personne préparant le Code de la route (préalable au permis B et poids lourd ; le permis moto A1/A2 relève de l'ETM) en autonomie, en salle ou en formule mixte. Accessible aux personnes en situation de handicap (nous contacter).",
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
      "Obtention du Code de la route (ETG), valable 5 ans (dans la limite de 5 présentations à l'examen pratique)",
      "Prérequis indispensable au permis B et poids lourd (le permis moto A1/A2 relève d'une épreuve théorique moto, l'ETM, distincte)",
    ],
    certification:
      "Réussite de l'épreuve théorique générale (ETG) du Code de la route — 40 questions, 35 bonnes réponses requises ; validité 5 ans pour le passage des épreuves pratiques.",
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

// Modalités d'examen / de certification — formations professionnelles uniquement
// (permis lourds C/CE/D, FIMO/FCO/passerelles, Titres Professionnels).
// Sources : Sécurité Routière (épreuves HC + circulation), Code des transports
// (qualification CQC / FIMO-FCO) et fiches France Compétences (référentiels RNCP/RS).
const EXAM_FIMO = [
  "Formation de 140 h évaluée en continu, complétée d'une évaluation finale des connaissances et des compétences (questionnaire/QCM et évaluation de conduite)",
  "L'évaluation est réalisée par le centre agréé, sous le contrôle de la DREAL (pas d'épreuve devant un inspecteur de l'État)",
  "La réussite donne lieu à l'attestation de qualification initiale (FIMO) et à la délivrance de la carte de qualification de conducteur (CQC), valable 5 ans",
];
const EXAM_FCO = [
  "Formation de 35 h sans examen final : évaluations formatives et bilan en cours de stage (actualisation des connaissances, sécurité, réglementation des temps de conduite et de repos)",
  "À l'issue, délivrance de l'attestation de FCO et renouvellement de la carte de qualification de conducteur (CQC) pour 5 ans",
  "Formation à renouveler tous les 5 ans pour maintenir le droit de conduire à titre professionnel",
];
const EXAM_PASSERELLE = [
  "Formation passerelle de 35 h évaluée en continu par le centre agréé (sans épreuve devant un inspecteur de l'État)",
  "À l'issue, attestation de formation et carte de qualification de conducteur (CQC) pour le nouveau secteur, valable 5 ans",
  "Pré-requis : être déjà titulaire de la qualification (FIMO/FCO) dans l'autre secteur (marchandises ↔ voyageurs)",
];
const examPermis = (cat: "C" | "CE" | "D", hc: string) => [
  "Prérequis théorique : être titulaire du code de la route (ETG) en cours de validité, ou d'un permis obtenu depuis moins de 5 ans",
  `Épreuve hors circulation (HC / « plateau ») : ${hc} ; épreuve éliminatoire dont l'admission ouvre l'accès à l'épreuve en circulation`,
  `Épreuve en circulation (CIR) : conduite autonome sur parcours varié évaluée par un inspecteur du permis de conduire ; admission à partir de 17 points et sans erreur éliminatoire (permis ${cat})`,
  "Résultat consultable en ligne sous 48 h ; en cas de réussite, le Certificat d'Examen du Permis de Conduire (CEPC) tient lieu de permis pendant 4 mois",
];
const examTitrePro = (equivalence: string) => [
  "Évaluation finale devant un jury habilité par le ministère du Travail : mise en situation professionnelle (conduite rationnelle, manœuvres et étude de cas), entretien technique, questionnaire professionnel et entretien final portant sur le Dossier Professionnel (DP)",
  "Prise en compte des résultats des évaluations réalisées en cours de formation",
  "Titre constitué d'un bloc de compétences unique non sécable : pas de validation partielle (CCP)",
  equivalence,
];

const modalitesExamenBySlug: Record<string, string[]> = {
  "permis-c": examPermis("C", "vérifications courantes de sécurité, interrogation orale (fiches), maniabilité et manœuvres"),
  "permis-ce": examPermis("CE", "attelage/dételage, vérifications de sécurité, interrogation orale (fiches) et manœuvres de l'ensemble articulé"),
  "permis-d": examPermis("D", "vérifications de sécurité propres au transport de personnes, interrogation orale (fiches), maniabilité et manœuvres"),
  "tp-transport-marchandises-porteur": examTitrePro(
    "Le titre confère par équivalence le permis C, la qualification initiale de conducteur (CQC) et le certificat ADR de base",
  ),
  "tp-transport-marchandises-tous-vehicules": examTitrePro(
    "Le titre confère par équivalence le permis CE, la qualification initiale de conducteur (CQC) et le certificat ADR de base",
  ),
  "tp-transport-en-commun": examTitrePro(
    "Le titre confère par équivalence le permis D et la qualification initiale de conducteur de voyageurs (CQC)",
  ),
  "fimo-marchandises": EXAM_FIMO,
  "fimo-voyageurs": EXAM_FIMO,
  "fco-marchandises": EXAM_FCO,
  "fco-voyageurs": EXAM_FCO,
  "passerelle-marchandises": EXAM_PASSERELLE,
  "passerelle-voyageurs": EXAM_PASSERELLE,
};

// Rémunération indicative (à titre informatif). Fourchettes de marché susceptibles
// de varier selon l'expérience, la région, l'entreprise et la convention collective
// nationale des transports routiers (primes, frais de déplacement, heures supplémentaires).
const REMU_PORTEUR =
  "À titre indicatif : conducteur routier « porteur » débutant rémunéré autour du SMIC à 2 000 € brut/mois, et 2 000 à 2 400 € brut/mois avec de l'expérience. S'y ajoutent les frais de déplacement (indemnités de repas), les heures supplémentaires et les primes prévues par la convention collective nationale des transports routiers.";
const REMU_SPL =
  "À titre indicatif : conducteur SPL / longue distance rémunéré de 2 000 à 2 800 € brut/mois selon l'expérience, auxquels s'ajoutent les frais de route (découchers, repas), les heures supplémentaires et les primes prévues par la convention collective des transports routiers.";
const REMU_VOYAGEURS =
  "À titre indicatif : conducteur de voyageurs (autocar/autobus) rémunéré du SMIC à environ 2 200 € brut/mois selon l'expérience, avec primes (amplitude, coupures), 13e mois et avantages selon l'entreprise et la convention collective applicable.";

const remunerationBySlug: Record<string, string> = {
  "permis-c": REMU_PORTEUR,
  "tp-transport-marchandises-porteur": REMU_PORTEUR,
  "fimo-marchandises": REMU_PORTEUR,
  "fco-marchandises": REMU_PORTEUR,
  "passerelle-marchandises": REMU_PORTEUR,
  "permis-ce": REMU_SPL,
  "tp-transport-marchandises-tous-vehicules": REMU_SPL,
  "permis-d": REMU_VOYAGEURS,
  "tp-transport-en-commun": REMU_VOYAGEURS,
  "fimo-voyageurs": REMU_VOYAGEURS,
  "fco-voyageurs": REMU_VOYAGEURS,
  "passerelle-voyageurs": REMU_VOYAGEURS,
};

// Liens des fiches sur Mon Compte Formation (CPF) — financement direct par le CPF.
const cpfUrlBySlug: Record<string, string> = {
  "permis-c":
    "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/78520849700012_permiscsanscode/78520849700012_permiscsanscode?contexteFormation=ACTIVITE_PROFESSIONNELLE",
  "fco-marchandises":
    "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/78520849700012_FCOOCT/78520849700012_FCOOCT?contexteFormation=ACTIVITE_PROFESSIONNELLE",
  "passerelle-marchandises":
    "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/78520849700012_PASSERELLEMARCHANDISE/78520849700012_PASSERELLEMARCHANDISE?contexteFormation=ACTIVITE_PROFESSIONNELLE",
  "fimo-marchandises":
    "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/78520849700012_FIMOMARCHANDISESOCT/78520849700012_FIMOMARCHANDISESOCT?contexteFormation=ACTIVITE_PROFESSIONNELLE",
  "permis-b":
    "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/78520849700012_20hmanuelle/78520849700012_longjumeau?contexteFormation=ACTIVITE_PROFESSIONNELLE",
};

// Formations NON éligibles au CPF : permis AM (BSR), passerelles et formation
// de 7 h ne figurent pas dans la liste légale (code + groupe léger B/A1/A2 +
// groupe lourd C/CE/D + certifications RNCP/RS).
const cpfNonEligible = new Set(["permis-am", "passerelle-bea-b", "passerelle-a2-a"]);

// Chaque formation est certifiée Qualiopi et dispose d'un programme PDF servi
// par le site (/programmes/<slug>.pdf) — repli autonome si Sanity est indisponible.
export const formations: Formation[] = formationsData.map((f) => ({
  ...f,
  qualiopi: f.qualiopi ?? true,
  programmePdfUrl: f.programmePdfUrl ?? `/programmes/${f.slug}.pdf`,
  ...registrations[f.slug],
  passerelles: passerellesBySlug[f.slug],
  modalitesExamen: modalitesExamenBySlug[f.slug],
  remuneration: remunerationBySlug[f.slug],
  cpfUrl: cpfUrlBySlug[f.slug],
  cpfEligible: !cpfNonEligible.has(f.slug),
}));

export const getFormation = (slug: string) => formations.find((f) => f.slug === slug);
export const marchandises = formations.filter((f) => f.category === "marchandises");
export const voyageurs = formations.filter((f) => f.category === "voyageurs");
