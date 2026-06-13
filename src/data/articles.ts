export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  image: string;
  body: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "permis-c-ce-d-quelle-formation-choisir",
    title: "Permis C, CE ou D : quelle formation choisir ?",
    excerpt:
      "Tour d'horizon des permis poids lourd et transport en commun pour orienter votre projet professionnel.",
    date: "Juin 2026",
    readingTime: "5 min",
    tag: "Formations",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        paragraphs: [
          "Vous souhaitez devenir conducteur professionnel mais vous hésitez entre les différents permis ? Chaque permis correspond à un type de véhicule et à des métiers bien précis. Voici un guide clair pour faire le bon choix selon votre projet.",
        ],
      },
      {
        heading: "Le permis C : le poids lourd « porteur »",
        paragraphs: [
          "Le permis C autorise la conduite des véhicules de transport de marchandises de plus de 3,5 tonnes (camions porteurs). C'est la porte d'entrée vers les métiers de chauffeur poids lourd (livraison, messagerie, benne, frigorifique…).",
          "Il s'adresse aux personnes âgées d'au moins 21 ans (ou 18 ans avec le titre professionnel ou la FIMO) et titulaires du permis B.",
        ],
      },
      {
        heading: "Le permis CE : l'ensemble articulé (semi-remorque)",
        paragraphs: [
          "Le permis CE permet de conduire un véhicule de catégorie C attelé à une remorque de plus de 750 kg, c'est-à-dire les ensembles articulés et semi-remorques. C'est le permis du chauffeur SPL (super poids lourd), l'un des profils les plus recherchés et les mieux rémunérés.",
          "Il nécessite d'être déjà titulaire du permis C.",
        ],
      },
      {
        heading: "Le permis D : le transport de voyageurs",
        paragraphs: [
          "Le permis D autorise la conduite des autobus et autocars de plus de 9 places. Il ouvre vers les métiers de conducteur de bus urbain, de car scolaire ou de tourisme.",
          "Il s'adresse aux personnes d'au moins 24 ans (ou 21 ans avec le titre professionnel ou la FIMO Voyageurs).",
        ],
      },
      {
        heading: "Comment choisir ?",
        paragraphs: [
          "Si vous visez la livraison locale ou régionale, commencez par le permis C. Pour le longue distance et les meilleurs salaires, ajoutez le permis CE. Si vous préférez le contact avec le public, orientez-vous vers le permis D.",
          "Dans tous les cas, n'hésitez pas à utiliser notre simulateur de parcours ou à nous contacter : nous étudions votre situation et votre financement gratuitement.",
        ],
      },
    ],
  },
  {
    slug: "fimo-fco-formations-obligatoires",
    title: "FIMO / FCO : tout comprendre sur les formations obligatoires",
    excerpt:
      "Qui est concerné, quelle durée, quelle validité ? On vous explique la qualification initiale et continue.",
    date: "Mai 2026",
    readingTime: "4 min",
    tag: "Réglementation",
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        paragraphs: [
          "Au-delà du permis, la conduite professionnelle impose une qualification spécifique : la FIMO et la FCO. Ces formations sont obligatoires pour exercer le métier de conducteur, que ce soit en marchandises ou en voyageurs.",
        ],
      },
      {
        heading: "La FIMO : la qualification initiale",
        paragraphs: [
          "La FIMO (Formation Initiale Minimale Obligatoire) est exigée pour débuter le métier de conducteur. Elle dure 140 heures (environ 4 semaines) et aborde la conduite rationnelle, la sécurité, la réglementation sociale et la santé du conducteur.",
          "Elle existe en deux versions : FIMO Marchandises et FIMO Voyageurs.",
        ],
      },
      {
        heading: "La FCO : la formation continue",
        paragraphs: [
          "La FCO (Formation Continue Obligatoire) doit être suivie tous les 5 ans pour conserver le droit de conduire à titre professionnel. Elle dure 35 heures (5 jours) et permet d'actualiser ses connaissances.",
          "Ne pas être à jour de sa FCO expose à des sanctions et à l'impossibilité d'exercer.",
        ],
      },
      {
        heading: "Et la passerelle ?",
        paragraphs: [
          "Si vous êtes déjà qualifié en marchandises et souhaitez passer aux voyageurs (ou inversement), une formation passerelle de 35 heures suffit, au lieu de repasser une FIMO complète.",
          "Vous avez un doute sur votre situation ? Contactez-nous, nous vérifions vos qualifications et la date de votre prochaine FCO.",
        ],
      },
    ],
  },
  {
    slug: "financer-permis-poids-lourd-cpf-2026",
    title: "Financer son permis poids lourd avec le CPF en 2026",
    excerpt:
      "Reste à charge, exonération des demandeurs d'emploi, abondements… le point sur le CPF.",
    date: "Mai 2026",
    readingTime: "4 min",
    tag: "Financement",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        paragraphs: [
          "Le Compte Personnel de Formation (CPF) est l'un des moyens les plus simples de financer un permis poids lourd ou une formation transport. Voici comment cela fonctionne en 2026.",
        ],
      },
      {
        heading: "Qu'est-ce que le CPF ?",
        paragraphs: [
          "Chaque personne active cumule des droits à la formation tout au long de sa carrière, crédités en euros sur son compte. Ces droits peuvent financer une formation éligible, comme nos permis et titres professionnels.",
          "Tout se gère sur la plateforme officielle Mon Compte Formation, où vous recherchez la formation et l'organisme (PariPermis).",
        ],
      },
      {
        heading: "Le reste à charge",
        paragraphs: [
          "Depuis 2024, une participation forfaitaire reste à la charge du titulaire lorsqu'il mobilise son CPF. Les demandeurs d'emploi en sont exonérés, et l'employeur ou un OPCO peut prendre en charge ce montant (abondement).",
          "Le montant exact et les conditions à jour figurent sur notre page dédiée : /financement/CPF.",
        ],
      },
      {
        heading: "Compléter son financement",
        paragraphs: [
          "Si vos droits CPF ne suffisent pas à couvrir l'intégralité de la formation, plusieurs solutions existent : abondement employeur, aides France Travail (AIF), OPCO, ou alternance.",
          "Notre équipe monte votre plan de financement avec vous, gratuitement. Faites une simulation ou contactez-nous.",
        ],
      },
    ],
  },
  {
    slug: "metiers-transport-qui-recrutent",
    title: "Les métiers du transport qui recrutent le plus",
    excerpt:
      "Chauffeur SPL, conducteur de bus, conducteur citerne : salaires et perspectives d'un secteur en tension.",
    date: "Avril 2026",
    readingTime: "5 min",
    tag: "Métiers",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    body: [
      {
        paragraphs: [
          "Le secteur du transport routier fait face à une forte pénurie de conducteurs. Pour qui se forme aujourd'hui, les débouchés sont nombreux et les salaires attractifs. Tour d'horizon des métiers les plus porteurs.",
        ],
      },
      {
        heading: "Chauffeur SPL (super poids lourd)",
        paragraphs: [
          "Au volant d'ensembles articulés, le chauffeur SPL assure le transport longue distance. C'est l'un des profils les plus recherchés, avec une rémunération qui grimpe rapidement avec l'expérience et les découchés.",
        ],
      },
      {
        heading: "Conducteur de bus et de car",
        paragraphs: [
          "Transport urbain, scolaire ou tourisme : le conducteur de voyageurs bénéficie d'emplois stables, souvent en CDI, et d'un fort besoin de recrutement dans les réseaux de transport public.",
        ],
      },
      {
        heading: "Conducteurs spécialisés",
        paragraphs: [
          "Citerne (ADR / matières dangereuses), benne, frigorifique, messagerie… les spécialisations valorisent votre profil et augmentent votre rémunération.",
          "Envie de savoir quel métier vous correspond ? Lancez notre simulateur de parcours ou découvrez tous les métiers du transport sur /metiers.",
        ],
      },
    ],
  },
];

export function getArticle(slug?: string) {
  return articles.find((a) => a.slug === slug);
}
