import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Truck, Bus, RefreshCw } from "lucide-react";
import { metiers } from "@/data/metiers";
import { profils, dispositifs } from "@/data/financements";
import { formations } from "@/data/formations";

const steps = ["Votre projet", "Votre statut", "Résultat"];

export default function Simulateur() {
  const [step, setStep] = useState(0);
  const [metier, setMetier] = useState<string | null>(null);
  const [statut, setStatut] = useState<string | null>(null);

  const selectedMetier = metiers.find((m) => m.name === metier);
  const profil = profils.find((p) => p.id === statut);
  const reco = selectedMetier
    ? formations.filter((f) => f.category === selectedMetier.category).slice(0, 4)
    : [];
  const aides = profil ? dispositifs.filter((d) => profil.codes.includes(d.code)) : [];

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

              <h3 className="mt-8 text-base font-bold text-brand-navy">Formations recommandées</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {reco.map((f) => (
                  <Link key={f.slug} to={`/formations/${f.slug}`} className="card p-4 hover:border-brand-green/40">
                    <p className="font-semibold text-brand-navy">{f.cardTitle}</p>
                    <p className="text-xs text-slate-500">{f.duration}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      Voir la formation <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>

              <h3 className="mt-8 text-base font-bold text-brand-navy">Vos financements possibles</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {aides.map((a) => (
                  <span key={a.code} className="rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-medium text-brand-green">
                    {a.name}
                  </span>
                ))}
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
