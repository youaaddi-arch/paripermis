// Fonction serverless Vercel : proxy sécurisé vers l'API Anthropic (Claude).
// La clé n'est JAMAIS dans le code : elle est lue depuis la variable
// d'environnement ANTHROPIC_API_KEY (à configurer par le gestionnaire du site
// dans les paramètres Vercel du projet). Aucune clé n'est committée.
import { formations } from "../src/data/formations";
import { dispositifs } from "../src/data/financements";
import { metiers } from "../src/data/metiers";
import { site } from "../src/lib/site";

const MODEL = "claude-haiku-4-5-20251001";

function buildContext(): string {
  const f = formations
    .map((x) => {
      const codes = [
        x.rncpCode ? `RNCP ${x.rncpCode}` : "",
        x.rsCode ? `RS ${x.rsCode}` : "",
        x.certifInfo ? `Certif'Info ${x.certifInfo}` : "",
      ]
        .filter(Boolean)
        .join(", ");
      return `- ${x.title} [${x.kind}] — durée : ${x.duration} ; prix : ${x.price}. Prérequis : ${x.prerequis.join(
        " ; "
      )}.${codes ? ` Enregistrement : ${codes}.` : ""} Fiche : /formations/${x.slug}`;
    })
    .join("\n");

  const d = dispositifs
    .map((x) => `- ${x.name} : ${x.description} (Public : ${x.public}) Fiche : /financement/${x.code}`)
    .join("\n");

  const m = metiers.map((x) => `- ${x.name} (${x.category}) : ${x.salaire}`).join("\n");

  return `ÉTABLISSEMENT
${site.name} — ${site.tagline}. Centre certifié Qualiopi, ${site.agrement}.
Adresse : ${site.address}. Téléphone : ${site.phone}. Email : ${site.email}.

FORMATIONS
${f}

MÉTIERS
${m}

FINANCEMENTS
${d}`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: "not_configured" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    if (messages.length === 0) {
      res.status(400).json({ error: "no_messages" });
      return;
    }

    const system = `Tu es l'assistant virtuel de ${site.name}, centre de formation au transport routier certifié Qualiopi à ${site.city}.
Réponds en français, de manière chaleureuse, claire et concise.
Appuie-toi UNIQUEMENT sur les informations ci-dessous (formations, financements, métiers, coordonnées).
Quand c'est pertinent, oriente vers la bonne page du site (ex. « voir /formations/permis-c ») et propose de contacter le centre.
N'invente jamais de prix, de codes de certification ni de règles de financement : si une information n'est pas fournie ou si tu as un doute, invite à contacter le centre au ${site.phone} ou à ${site.email}.

${buildContext()}`;

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system,
        messages: messages.slice(-12).map((msg: any) => ({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: String(msg.content || ""),
        })),
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      res.status(502).json({ error: "api_error" });
      return;
    }

    const reply = (data.content || [])
      .filter((c: any) => c.type === "text")
      .map((c: any) => c.text)
      .join("\n")
      .trim();

    res.status(200).json({ reply: reply || "Désolé, je n'ai pas de réponse. Contactez-nous au " + site.phone + "." });
  } catch {
    res.status(500).json({ error: "server_error" });
  }
}
