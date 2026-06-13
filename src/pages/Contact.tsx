import { MapPin, Phone, Mail, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-immersive py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold text-white">Contactez-nous</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Une question, un projet de formation, une demande de devis ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Infos */}
          <div>
            <h2 className="text-2xl font-extrabold">Nos coordonnées</h2>
            <p className="mt-3 text-slate-500">
              Contactez-nous pour un entretien personnalisé et un devis gratuit. Nous étudions votre situation et vos
              possibilités de financement.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy">Adresse</p>
                  <p className="text-sm text-slate-500">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy">Téléphone</p>
                  <a href={site.phoneHref} className="text-sm text-slate-500 hover:text-brand-green">{site.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy">Email</p>
                  <a href={`mailto:${site.email}`} className="text-sm text-slate-500 hover:text-brand-green">{site.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy">Horaires</p>
                  <p className="text-sm text-slate-500">Du lundi au vendredi · 9h – 18h</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Localisation PariPermis"
                className="h-64 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=18+avenue+du+G%C3%A9n%C3%A9ral+de+Gaulle+91160+Longjumeau&output=embed"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-brand-navy">Demander un devis gratuit</h2>
            <p className="mt-1 text-sm text-slate-500">Remplissez ce formulaire, nous vous recontactons sous 24h.</p>
            <div className="mt-6">
              <LeadForm submitLabel="Demander mon devis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
