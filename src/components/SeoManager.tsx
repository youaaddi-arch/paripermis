import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFormation } from "@/data/formations";
import { getMetier } from "@/data/metiers";
import { getArticle } from "@/data/articles";
import { dispositifs } from "@/data/financements";

// Domaine de production (conservé lors de la migration) → URLs canoniques & SEO.
export const SITE_URL = "https://paripermis.com";

const DEFAULT_TITLE = "PariPermis — Centre de formation transport routier à Longjumeau (91)";
const DEFAULT_DESC =
  "PariPermis, centre de formation certifié Qualiopi à Longjumeau (91). Permis auto, deux-roues, poids lourd (C/CE/D), titres professionnels, FIMO/FCO. Formations finançables CPF, France Travail, OPCO.";

const staticMeta: Record<string, { title: string; description: string }> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESC },
  "/formations": {
    title: "Nos formations — auto, deux-roues, poids lourd & transport | PariPermis",
    description:
      "Toutes nos formations : permis auto (B, BEA, AAC, CS), deux-roues (AM, A1, A2), permis poids lourd C/CE/D, titres professionnels, FIMO et FCO. Financements CPF, France Travail, OPCO.",
  },
  "/metiers": {
    title: "Les métiers du transport : salaires, débouchés et formations | PariPermis",
    description:
      "Chauffeur poids lourd, SPL, conducteur de bus ou de car : découvrez les métiers du transport, les salaires, le taux d'insertion et les formations pour y accéder.",
  },
  "/financement": {
    title: "Financer sa formation : CPF, France Travail, OPCO, alternance | PariPermis",
    description:
      "Toutes les solutions pour financer votre formation transport : CPF, AIF, POEI/POEC, OPCO, contrat de professionnalisation, apprentissage, Transitions Pro et aides régionales.",
  },
  "/blog": {
    title: "Blog — conseils, réglementation et métiers du transport | PariPermis",
    description:
      "Guides et actualités : choisir sa formation, FIMO/FCO, financer son permis poids lourd, métiers qui recrutent dans le transport routier.",
  },
  "/a-propos": {
    title: "Notre centre de formation à Longjumeau (91) | PariPermis",
    description:
      "Découvrez PariPermis : centre de formation transport routier certifié Qualiopi à Longjumeau, ses formateurs, ses véhicules et son accompagnement.",
  },
  "/contact": {
    title: "Contact & inscription | PariPermis Longjumeau (91)",
    description: "Contactez PariPermis pour un devis ou une inscription : téléphone, e-mail et adresse à Longjumeau (91).",
  },
  "/inscription": {
    title: "S'inscrire à une formation | PariPermis",
    description: "Inscrivez-vous à nos formations permis et transport. Évaluation offerte et accompagnement au financement.",
  },
  "/simulateur": {
    title: "Trouver ma formation & mon financement | PariPermis",
    description: "En 2 étapes, identifiez la formation et les financements adaptés à votre situation — particulier comme entreprise.",
  },
  "/mentions-legales": {
    title: "Mentions légales | PariPermis",
    description: "Mentions légales du site PariPermis : éditeur, hébergeur et informations réglementaires.",
  },
  "/cgu": {
    title: "Conditions Générales d'Utilisation | PariPermis",
    description: "Conditions Générales d'Utilisation du site PariPermis.",
  },
  "/donnees-personnelles": {
    title: "Politique de protection des données personnelles | PariPermis",
    description: "Politique de confidentialité et protection des données personnelles (RGPD) du site PariPermis.",
  },
};

function resolveMeta(pathname: string): { title: string; description: string } {
  const clean = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (staticMeta[clean]) return staticMeta[clean];

  const [, section, param] = clean.split("/");
  if (section === "formations" && param) {
    const f = getFormation(param);
    if (f) return { title: `${f.title} | PariPermis`, description: f.summary };
  }
  if (section === "metiers" && param) {
    const m = getMetier(param);
    if (m) return { title: `${m.name} — métier, salaire et formation | PariPermis`, description: m.description };
  }
  if (section === "blog" && param) {
    const a = getArticle(param);
    if (a) return { title: `${a.title} | PariPermis`, description: a.excerpt };
  }
  if (section === "financement" && param) {
    const d = dispositifs.find((x) => x.code.toLowerCase() === param.toLowerCase());
    if (d) return { title: `${d.name} — financer sa formation | PariPermis`, description: d.description.slice(0, 160) };
  }
  return { title: DEFAULT_TITLE, description: DEFAULT_DESC };
}

function upsertMeta(selector: string, create: () => HTMLMetaElement | HTMLLinkElement, value: string, attr: "content" | "href") {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setNamedMeta(name: string, content: string) {
  upsertMeta(`meta[name="${name}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  }, content, "content");
}

function setPropMeta(property: string, content: string) {
  upsertMeta(`meta[property="${property}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  }, content, "content");
}

function setCanonical(href: string) {
  upsertMeta('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  }, href, "href");
}

/** Met à jour title + meta description + canonical + Open Graph à chaque changement de route. */
export default function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const { title, description } = resolveMeta(pathname);
    const url = SITE_URL + (pathname === "/" ? "" : pathname);
    document.title = title;
    setNamedMeta("description", description);
    setCanonical(url);
    setPropMeta("og:title", title);
    setPropMeta("og:description", description);
    setPropMeta("og:url", url);
    setPropMeta("og:type", "website");
    setPropMeta("og:site_name", "PariPermis");
    setNamedMeta("twitter:card", "summary_large_image");
  }, [pathname]);
  return null;
}
