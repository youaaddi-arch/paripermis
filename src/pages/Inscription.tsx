import { CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const steps = [
  "Vous remplissez le formulaire d'inscription ci-contre",
  "Un conseiller vous rappelle pour valider votre projet et vos prérequis",
  "Nous montons ensemble votre dossier de financement (CPF, France Travail, OPCO…)",
  "Vous démarrez votre formation à Longjumeau",
];

export default function Inscription() {
  return (
    <>
      <section className="bg-brand-navy py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">S'inscrire à une formation</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Lancez votre projet en quelques minutes. Inscription sans engagement et étude de financement gratuite.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold">Comment ça se passe ?</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-slate-600">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl bg-slate-50 p-6">
              <p className="flex items-center gap-2 font-semibold text-brand-navy">
                <CheckCircle2 className="h-5 w-5 text-brand-green" /> Financement possible à 100%
              </p>
              <p className="mt-2 text-sm text-slate-500">
                98% de nos formations sont financées intégralement selon votre situation. Nous vous accompagnons
                gratuitement dans toutes vos démarches.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-bold text-brand-navy">Formulaire d'inscription</h2>
            <p className="mt-1 text-sm text-slate-500">Tous les champs marqués d'un * sont obligatoires.</p>
            <div className="mt-6">
              <LeadForm submitLabel="Envoyer mon inscription" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
