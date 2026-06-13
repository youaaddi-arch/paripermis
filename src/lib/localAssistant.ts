// Assistant local (sans IA) : répond aux questions fréquentes à partir du
// contenu du site. Utilisé par défaut, et en repli si le chatbot IA n'est pas
// configuré (pas de clé ANTHROPIC_API_KEY).
import { formations, type Formation } from "@/data/formations";
import { dispositifs } from "@/data/financements";
import { site } from "@/lib/site";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

function findFormation(q: string): Formation | undefined {
  const n = norm(q);
  // mots-clés -> slug
  const map: [RegExp, string][] = [
    [/permis c\b|permis-c\b|porteur/, "permis-c"],
    [/permis ce|permis-ce|articul|semi|super lourd|spl/, "permis-ce"],
    [/permis d\b|permis-d\b|bus|car|autocar|voyageur/, "permis-d"],
    [/fimo.*march|march.*fimo/, "fimo-marchandises"],
    [/fimo.*voyage|voyage.*fimo/, "fimo-voyageurs"],
    [/fco.*march|march.*fco/, "fco-marchandises"],
    [/fco.*voyage|voyage.*fco/, "fco-voyageurs"],
    [/passerelle.*march/, "passerelle-marchandises"],
    [/passerelle.*voyage/, "passerelle-voyageurs"],
    [/tp.*porteur|titre.*porteur/, "tp-transport-marchandises-porteur"],
    [/tous vehicule|tous-vehicule|tp.*tous/, "tp-transport-marchandises-tous-vehicules"],
    [/transport en commun|tp.*commun/, "tp-transport-en-commun"],
    [/fimo/, "fimo-marchandises"],
    [/fco/, "fco-marchandises"],
  ];
  for (const [re, slug] of map) if (re.test(n)) return formations.find((f) => f.slug === slug);
  // sinon, match par titre de carte
  return formations.find((f) => n.includes(norm(f.cardTitle)));
}

export function localAnswer(question: string): string {
  const n = norm(question);
  const f = findFormation(question);

  // Prérequis
  if (/prerequis|pre-requis|condition|faut-il|age|quel age|requis/.test(n)) {
    if (f) return `Prérequis pour « ${f.cardTitle} » :\n• ${f.prerequis.join("\n• ")}\n\nDétails : /formations/${f.slug}`;
    return "Dites-moi quelle formation vous intéresse (Permis C, CE, D, FIMO, FCO, Titre Pro…) et je vous donne les prérequis. Vous pouvez aussi voir toutes les formations : /formations";
  }

  // Prix / tarif
  if (/prix|tarif|cout|coute|combien|euro/.test(n)) {
    if (f) return `Tarif « ${f.cardTitle} » : ${f.price}.\nLe prix varie selon le financement mobilisé. Détails et devis : /formations/${f.slug}`;
    return "Le tarif dépend de la formation et du financement mobilisé. Indiquez la formation souhaitée, ou demandez un devis gratuit : /contact";
  }

  // Financement
  if (/financ|cpf|aif|opco|poe|afpr|transition|alternance|apprentissage|payer|prise en charge|gratuit/.test(n)) {
    const list = dispositifs.map((d) => `• ${d.name} (/financement/${d.code})`).join("\n");
    return `Plusieurs financements sont possibles selon votre statut :\n${list}\n\nUtilisez aussi le simulateur : /simulateur — ou voir la page : /financement`;
  }

  // Durée
  if (/duree|combien de temps|semaine|mois|heures/.test(n)) {
    if (f) return `Durée « ${f.cardTitle} » : ${f.duration}. Détails : /formations/${f.slug}`;
    return "Les durées varient (de 5 jours pour une FCO à 3 mois pour un Titre Pro). Précisez la formation, ou voir : /formations";
  }

  // Inscription
  if (/inscri|s'inscrire|comment commencer|demarrer|dossier/.test(n)) {
    return `Pour vous inscrire, remplissez le formulaire : /inscription — ou appelez-nous au ${site.phone}. Nous vérifions les prérequis et étudions votre financement.`;
  }

  // Contact / lieu
  if (/contact|telephone|tel\b|appeler|adresse|ou etes|ou se trouve|horaire|email|mail|joindre/.test(n)) {
    return `📍 ${site.address}\n📞 ${site.phone}\n✉️ ${site.email}\nNous sommes à ${site.city}, centre certifié Qualiopi.`;
  }

  // Une formation précise (sans intention claire)
  if (f) {
    return `${f.title}\n${f.summary}\n\n⏱️ ${f.duration} · 💶 ${f.price}\nFiche complète : /formations/${f.slug}`;
  }

  // Métiers
  if (/metier|chauffeur|conducteur|devenir|travailler|emploi|debouche/.test(n)) {
    return "Découvrez les métiers et les parcours adaptés (permis + FIMO ou Titre Pro) avec le simulateur : /simulateur — ou la page métiers : /metiers";
  }

  // Salutations
  if (/bonjour|salut|bonsoir|coucou|hello/.test(n)) {
    return `Bonjour 👋 Je peux vous renseigner sur nos formations, les financements, les prérequis ou l'inscription. Que recherchez-vous ?`;
  }

  // Défaut
  return `Je n'ai pas toutes les infos sur ce point précis. Voici ce que je peux vous montrer :\n• Nos formations : /formations\n• Les financements : /financement\n• Le simulateur de parcours : /simulateur\n\nPour une réponse personnalisée : ${site.phone} ou /contact`;
}
