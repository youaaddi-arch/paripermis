import { createClient } from "@sanity/client";
import type { Formation } from "@/data/formations";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "yguvu8t3",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Récupère le programme PDF : priorité au fichier uploadé dans Sanity, sinon URL fournie.
const FORMATIONS_QUERY = `*[_type == "formation"] | order(order asc){
  "slug": slug.current,
  category, kind, title, cardTitle, cardSubtitle, durationBadge, duration, price,
  summary, objectifs, competences, public, prerequis, programme, methodes, moyens,
  evaluation, acces, accessibilite, debouches, certification, qualiopi,
  rncpCode, rsCode, certifInfo, franceCompetencesUrl, carifOrefUrl, passerelles,
  "image": coalesce(image.asset->url, imageUrl),
  "programmePdfUrl": coalesce(programmePdf.asset->url, programmePdfUrl)
}`;

export async function fetchFormations(): Promise<Formation[]> {
  const res = await sanityClient.fetch<Formation[]>(FORMATIONS_QUERY);
  return (res || []).filter((f) => f && f.slug);
}
