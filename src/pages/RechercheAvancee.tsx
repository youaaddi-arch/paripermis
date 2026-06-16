import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, RefreshCw, Building2, Repeat, Search, GraduationCap, Handshake, Star, CheckCircle2 } from "lucide-react";
import { dispositifs } from "@/data/financements";
import { getFormation } from "@/data/formations";

type ProfileId = "entreprise" | "reconversion" | "demandeur" | "etudiant" | "partenaire";

const PROFILES: { id: ProfileId; label: string; desc: string; icon: any }[] = [
  { id: "entreprise", label: "Entreprise", desc: "Former mes salariés ou recruter des conducteurs", icon: Building2 },
  { id: "reconversion", label: "Salarié en reconversion", desc: "Changer de métier avec maintien de salaire", icon: Repeat },
  { id: "demandeur", label: "Demandeur d'emploi", desc: "Me former pour (re)trouver un emploi", icon: Search },
  { id: "etudiant", label: "Étudiant / jeune", desc: "Me former en alternance", icon: GraduationCap },
  { id: "partenaire", label: "Partenaire / prescripteur", desc: "Orienter ou financer des candidats", icon: Handshake },
];

const DOMAINES = [
  { id: "march-porteur", label: "Marchandises — porteur", tp: "tp-transport-marchandises-porteur", permis: "permis-c", fimo: "fimo-marchandises", fco: "fco-marchandises", passerelle: "passerelle-marchandises" },
  { id: "march-spl", label: "Marchandises — super-lourd (CE)", tp: "tp-transport-marchandises-tous-vehicules", permis: "permis-ce", fimo: "fimo-marchandises", fco: "fco-marchandises", passerelle: "passerelle-marchandises" },
  { id: "voyageurs", label: "Voyageurs (bus & car)", tp: "tp-transport-en-commun", permis: "permis-d", fimo: "fimo-voyageurs", fco: "fco-voyageurs", passerelle: "passerelle-voyageurs" },
];

interface Reco { code: string; note: string; priority?: boolean }

function financementReco(profile: ProfileId, ctx: { objectif?: string; promesse?: boolean }): Reco[] {
  switch (profile) {
    case "entreprise":
      return ctx.objectif === "recruter"
        ? [
            { code: "POE", note: "POEI : France Travail finance la formation avant l'embauche (CDI, CDD, intérim). Idéal pour recruter des conducteurs.", priority: true },
            { code: "AFPR", note: "Variante pour un CDD de 6 à moins de 12 mois." },
            { code: "POEC", note: "Recrutement collectif financé par l'OPCO Mobilités." },
          ]
        : [
            { code: "OPCO", note: "Plan de développement des compétences (OPCO Mobilités) pour vos salariés en poste.", priority: true },
            { code: "PRO", note: "Contrat de professionnalisation pour faire monter en qualification." },
            { code: "PTP", note: "Pour un salarié en reconversion, sur un Titre Professionnel." },
          ];
    case "reconversion":
      return [
        { code: "PTP", note: "Projet de Transition Pro : prise en charge totale sur un Titre Professionnel + maintien de salaire. Conditions : 24 mois d'ancienneté (dont 12 dans l'entreprise actuelle).", priority: true },
        { code: "CPF", note: "Mobilisable en complément, surtout si vous avez déjà les prérequis (permis)." },
      ];
    case "demandeur":
      return ctx.promesse
        ? [
            { code: "POE", note: "Promesse d'embauche : formation financée avant l'embauche (POEI).", priority: true },
            { code: "AFPR", note: "Pour un CDD de 6 à moins de 12 mois." },
            { code: "CPF", note: "En complément de vos droits." },
          ]
        : [
            { code: "POEC", note: "Formation collective vers les métiers qui recrutent (OPCO Mobilités).", priority: true },
            { code: "AIF", note: "Aide individuelle de France Travail, en complément du CPF." },
            { code: "REG", note: "Programme régional de formation." },
            { code: "CPF", note: "Selon vos droits acquis." },
          ];
    case "etudiant":
      return [
        { code: "APP", note: "Apprentissage : formation gratuite et rémunérée, sur un Titre Professionnel.", priority: true },
        { code: "PRO", note: "Contrat de professionnalisation (alternance)." },
      ];
    default:
      return [];
  }
}

export default function RechercheAvancee() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<ProfileId | null>(null);
  const [domaine, setDomaine] = useState<string>("march-porteur");
  const [objectif, setObjectif] = useState<string>("recruter");
  const [promesse, setPromesse] = useState<boolean>(false);
  const [dejaPermis, setDejaPermis] = useState<boolean>(false);

  const dom = DOMAINES.find((d) => d.id === domaine)!;
  const reset = () => { setStep(0); setProfile(null); };

  const finRecos = profile ? financementReco(profile, { objectif, promesse }) : [];

  // Formations recommandées : priorité au Titre Professionnel (financement souvent total).
  const formationRecos: { slug: string; label: string; priority?: boolean }[] = dejaPermis
    ? [
        { slug: dom.fimo, label: "Qualification obligatoire (FIMO) — si vous n'êtes pas encore qualifié", priority: true },
        { slug: dom.fco, label: "Recyclage (FCO) — si votre carte de qualification arrive à échéance" },
        { slug: dom.passerelle, label: "Passerelle — si vous changez de secteur (marchandises ↔ voyageurs)" },
      ]
    : [
        { slug: dom.tp, label: "Titre Professionnel — recommandé (inclut le permis + la qualification, financement souvent total)", priority: true },
        { slug: dom.permis, label: "Le permis seul" },
        { slug: dom.fimo, label: "+ la qualification obligatoire (FIMO)" },
      ];

  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-14 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Recherche avancée par profil</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Dites-nous qui vous êtes : nous vous proposons la formation et le financement les plus adaptés.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          {/* STEP 0 — profil */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Vous êtes…</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {PROFILES.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setProfile(p.id); setStep(1); }}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-left transition-colors hover:border-brand-green/50 hover:bg-brand-green/5"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      <span>
                        <span className="block font-semibold text-brand-navy">{p.label}</span>
                        <span className="block text-xs text-slate-500">{p.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1 — contexte */}
          {step === 1 && profile && profile !== "partenaire" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-brand-navy">Quel domaine visez-vous ?</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {DOMAINES.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDomaine(d.id)}
                      className={`rounded-xl border p-3 text-left text-sm font-semibold transition-colors ${domaine === d.id ? "border-brand-green bg-brand-green/5 text-brand-navy" : "border-slate-200 text-slate-600 hover:border-brand-green/40"}`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {profile === "entreprise" && (
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">Votre objectif</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[{ id: "recruter", l: "Recruter de nouveaux conducteurs" }, { id: "former", l: "Former mes salariés en poste" }].map((o) => (
                      <button key={o.id} onClick={() => setObjectif(o.id)} className={`rounded-xl border p-3 text-left text-sm font-semibold transition-colors ${objectif === o.id ? "border-brand-green bg-brand-green/5 text-brand-navy" : "border-slate-200 text-slate-600 hover:border-brand-green/40"}`}>
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {profile === "demandeur" && (
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">Avez-vous une promesse d'embauche ?</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[{ v: true, l: "Oui (employeur identifié)" }, { v: false, l: "Non, pas encore" }].map((o) => (
                      <button key={String(o.v)} onClick={() => setPromesse(o.v)} className={`rounded-xl border p-3 text-left text-sm font-semibold transition-colors ${promesse === o.v ? "border-brand-green bg-brand-green/5 text-brand-navy" : "border-slate-200 text-slate-600 hover:border-brand-green/40"}`}>
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold text-brand-navy">Avez-vous déjà le permis visé ?</h2>
                <p className="mt-1 text-sm text-slate-500">S'il vous manque seulement la qualification, on vous oriente vers la FIMO, une passerelle ou un recyclage (FCO).</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[{ v: false, l: "Non, je dois passer le permis" }, { v: true, l: "Oui, j'ai déjà le permis" }].map((o) => (
                    <button key={String(o.v)} onClick={() => setDejaPermis(o.v)} className={`rounded-xl border p-3 text-left text-sm font-semibold transition-colors ${dejaPermis === o.v ? "border-brand-green bg-brand-green/5 text-brand-navy" : "border-slate-200 text-slate-600 hover:border-brand-green/40"}`}>
                      {o.l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button onClick={() => setStep(0)} className="btn-outline"><ArrowLeft className="h-4 w-4" /> Retour</button>
                <button onClick={() => setStep(2)} className="btn-green">Voir mes recommandations <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          {/* STEP 1 — partenaire (direct) */}
          {step === 1 && profile === "partenaire" && (
            <div className="card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Partenaire / prescripteur</h2>
              <p className="mt-2 text-slate-600">
                Vous orientez ou financez des candidats (France Travail, mission locale, OPCO, entreprise…) ? Nous
                conventionnons des sessions (TP, permis + FIMO, POEC) et privilégions les parcours qualifiants.
              </p>
              <div className="mt-5 flex gap-3">
                <button onClick={() => setStep(0)} className="btn-outline"><ArrowLeft className="h-4 w-4" /> Retour</button>
                <Link to="/contact" className="btn-green">Nous contacter <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          )}

          {/* STEP 2 — résultat */}
          {step === 2 && profile && profile !== "partenaire" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-brand-navy">Formations recommandées</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {dejaPermis
                    ? "Vous avez déjà le permis : voici les qualifications et recyclages adaptés."
                    : "Nous privilégions le Titre Professionnel : il inclut le permis et la qualification, avec une prise en charge souvent totale."}
                </p>
                <div className="mt-5 space-y-3">
                  {formationRecos.map((r) => {
                    const f = getFormation(r.slug);
                    if (!f) return null;
                    return (
                      <Link
                        key={r.slug}
                        to={`/formations/${f.slug}`}
                        className={`flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors hover:bg-slate-50 ${r.priority ? "border-brand-green bg-brand-green/5" : "border-slate-200"}`}
                      >
                        <span>
                          <span className="flex items-center gap-2 font-bold text-brand-navy">
                            {r.priority && <Star className="h-4 w-4 fill-brand-green text-brand-green" />}
                            {f.cardTitle}
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-500">{r.label}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-brand-navy">Financements adaptés à votre profil</h2>
                <div className="mt-5 space-y-3">
                  {finRecos.map((r) => {
                    const d = dispositifs.find((x) => x.code === r.code);
                    if (!d) return null;
                    return (
                      <div key={r.code} className={`rounded-xl border p-4 ${r.priority ? "border-brand-green bg-brand-green/5" : "border-slate-200"}`}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="flex items-center gap-2 font-bold text-brand-navy">
                            {r.priority && <Star className="h-4 w-4 fill-brand-green text-brand-green" />}
                            {d.name}
                          </p>
                          <Link to={`/financement/${d.code}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2">
                            Détails <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                        <p className="mt-1.5 flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {r.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-6">
                <p className="text-sm text-slate-600">Un conseiller vérifie votre éligibilité et établit votre devis.</p>
                <div className="flex gap-3">
                  <button onClick={reset} className="btn-outline"><RefreshCw className="h-4 w-4" /> Recommencer</button>
                  <Link to="/contact" className="btn-green">Être recontacté <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
