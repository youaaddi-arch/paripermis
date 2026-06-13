import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Truck, Bus, RefreshCw } from "lucide-react";
import { metiers } from "@/data/metiers";
import { profils, dispositifs } from "@/data/financements";
import { useFormations } from "@/lib/formations";

const steps = ["Votre projet", "Votre statut", "Résultat"];

export default function Simulateur() {
  const [step, setStep] = useState(0);
  const [metier, setMetier] = useState<string | null>(null);
  const [statut, setStatut] = useState<string | null>(null);
  const formations = useFormations();

  const selectedMetier = metiers.find((m) => m.name === metier);
  const profil = profils.find((p) => p.id === statut);

  // Parcours du métier, avec leurs formations résolues.
  const parcoursList = (selectedMetier?.parcours ?? []).map((p) => ({
    ...p,
    formations: p.formationSlugs.map((s) => formations.find((f) => f.slug === s)).filter(Boolean) as typeof formations,
  }));

  // Financements applicables à un parcours = éligibilité liée au statut
  // ET au type de formation (apprentissage = RNCP ; transition pro = RNCP/RS).
  const financementsFor = (parcoursFormations: typeof formations) => {
    if (!profil) return [];
    const kinds = parcoursFormations.map((f) => f.kind);
    const hasRNCP = kinds.includes("Titre Professionnel");
    const hasRegistered = kinds.some((k) => k === "Titre Professionnel" || k === "Formation Obligatoire");
    const codes = profil.codes.filter((c) => {
      if (c === "APP") return hasRNCP; // contrat d'apprentissage : RNCP uniquement
      if (c === "PTP") return hasRegistered; // transition pro : RNCP / RS uniquement
      return true;
    });
    return dispositifs.filter((d) => codes.includes(d.code));
  };

  const reset = () => {
    setStep(0);
    setMetier(null);
    setStatut(null);
  };

  return (
    <>
      <section className="bg-brand-navy py-14 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Simulez votre projet transport</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            En 2 étapes, découvrez les formations et financements adaptés à votre situation
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          {/* Stepper */}
          <div className="mb-10 flex items-center justify-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    i <= step ? "bg-brand-green text-white" : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`hidden text-sm font-medium sm:block ${i <= step ? "text-brand-navy" : "text-slate-400"}`}>
                  {s}
                </span>
                {i < steps.length - 1 && <div className="h-px w-8 bg-slate-200" />}
              </div>
            ))}
          </div>

          {/* STEP 0 - metier */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Quel métier vous intéresse ?</h2>
              <p className="mt-1 text-sm text-slate-500">Sélectionnez le métier vers lequel vous souhaitez vous orienter</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metiers.map((m) => {
                  const Icon = m.category === "marchandises" ? Truck : Bus;
                  return (
                    <button
                      key={m.name}
                      onClick={() => setMetier(m.name)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                        metier === m.name ? "border-brand-green bg-brand-green/5" : "border-slate-200 hover:border-brand-green/40"
                      }`}
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      <div>
                        <p className="font-semibold text-brand-navy">{m.name}</p>
                        <p className="text-xs text-slate-500">Salaire : {m.salaire}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-end">
                <button disabled={!metier} onClick={() => setStep(1)} className="btn-green disabled:opacity-40">
                  Continuer <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 1 - statut */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Quelle est votre situation ?</h2>
              <p className="mt-1 text-sm text-slate-500">Cela nous permet d'identifier vos financements possibles</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {profils.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setStatut(p.id)}
                    className={`rounded-xl border p-4 text-left transition-colors ${
                      statut === p.id ? "border-brand-green bg-brand-green/5" : "border-slate-200 hover:border-brand-green/40"
                    }`}
                  >
                    <p className="font-semibold text-brand-navy">{p.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{p.intro}</p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(0)} className="btn-outline">
                  <ArrowLeft className="h-4 w-4" /> Retour
                </button>
                <button disabled={!statut} onClick={() => setStep(2)} className="btn-green disabled:opacity-40">
                  Voir mon résultat <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 - result */}
          {step === 2 && selectedMetier && profil && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Votre projet : {selectedMetier.name}</h2>
              <p className="mt-1 text-sm text-slate-500">
                Profil : {profil.label} · Salaire débutant {selectedMetier.salaire}
              </p>

              <h3 className="mt-8 text-base font-bold text-brand-navy">
                Vos parcours possibles ({parcoursList.length})
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Pour ce métier, plusieurs parcours mènent à l'emploi. Les financements ci-dessous tiennent compte de votre
                statut <span className="font-medium text-brand-navy">({profil.label})</span> et du type de formation.
              </p>

              <div className="mt-5 space-y-5">
                {parcoursList.map((p, idx) => {
                  const aides = financementsFor(p.formations);
                  return (
                    <div key={p.id} className="card p-5">
                      <div className="flex items-baseline gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-xs font-bold text-brand-green">
                          {idx + 1}
                        </span>
                        <p className="font-bold text-brand-navy">{p.title}</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-500">{p.description}</p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {p.formations.map((f) => (
                          <Link
                            key={f.slug}
                            to={`/formations/${f.slug}`}
                            className="rounded-lg border border-slate-200 p-3 hover:border-brand-green/40"
                          >
                            <p className="text-sm font-semibold text-brand-navy">{f.cardTitle}</p>
                            <p className="text-xs text-slate-500">{f.duration}</p>
                            <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                              Voir la formation <ArrowRight className="h-3 w-3" />
                            </span>
                          </Link>
                        ))}
                      </div>

                      {p.note && (
                        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">{p.note}</p>
                      )}

                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Financements possibles
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {aides.length > 0 ? (
                          aides.map((a) => (
                            <span
                              key={a.code}
                              className="rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-medium text-brand-green"
                            >
                              {a.name}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-slate-400">
                            Aucun dispositif standard pour ce statut — contactez-nous pour étudier votre situation.
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-6">
                <p className="text-sm text-slate-600">Un conseiller peut affiner votre projet et votre devis.</p>
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
