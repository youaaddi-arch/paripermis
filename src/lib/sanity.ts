import { createClient } from "@sanity/client";
import type { Formation } from "@/data/formations";

// Sanity est OPTIONNEL et entièrement piloté par variables d'environnement.
// Aucun identifiant de projet n'est codé en dur : si VITE_SANITY_PROJECT_ID
// n'est pas défini, le site fonctionne uniquement sur ses données intégrées
// (src/data/formations.ts). Cela garantit la portabilité : le dépôt peut être
// transféré sur un autre compte sans aucun lien vers un compte tiers.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || "production";

export const sanityEnabled = Boolean(projectId);

export const sanityClient = sanityEnabled
  ? createClient({ projectId: projectId!, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;

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
  if (!sanityClient) return [];
  const res = await sanityClient.fetch<Formation[]>(FORMATIONS_QUERY);
  return (res || []).filter((f) => f && f.slug);
}
