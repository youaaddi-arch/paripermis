import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { formations } from "@/data/formations";

interface Props {
  submitLabel?: string;
  defaultFormation?: string;
}

export default function LeadForm({ submitLabel = "Envoyer ma demande", defaultFormation = "" }: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-green" />
        <h3 className="mt-3 text-lg font-bold text-brand-navy">Demande envoyée !</h3>
        <p className="mt-2 text-sm text-slate-600">
          Merci, notre équipe vous recontactera très rapidement pour étudier votre projet et votre financement.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-navy">Prénom *</label>
          <input required className="input" placeholder="Votre prénom" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-navy">Nom *</label>
          <input required className="input" placeholder="Votre nom" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-navy">Email *</label>
          <input required type="email" className="input" placeholder="vous@email.fr" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-navy">Téléphone *</label>
          <input required type="tel" className="input" placeholder="06 12 34 56 78" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-navy">Formation souhaitée</label>
        <select defaultValue={defaultFormation} className="input">
          <option value="">Je ne sais pas encore</option>
          {formations.map((f) => (
            <option key={f.slug} value={f.slug}>{f.cardTitle}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-navy">Votre statut</label>
        <select className="input">
          <option>Demandeur d'emploi</option>
          <option>Salarié en activité</option>
          <option>Travailleur indépendant</option>
          <option>Alternance / contrat pro</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-navy">Message</label>
        <textarea rows={4} className="input" placeholder="Décrivez votre projet, vos disponibilités…" />
      </div>
      <button type="submit" className="btn-green w-full">
        {submitLabel} <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-slate-400">
        En envoyant ce formulaire, vous acceptez d'être recontacté par PariPermis au sujet de votre projet.
      </p>
    </form>
  );
}
