import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-t border-slate-100 bg-white text-slate-700">
      <div className="absolute -left-16 -top-10 -z-10 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="container py-20 text-center">
        <p className="text-2xl font-extrabold text-brand-navy">
          Pari<span className="text-gradient">permis</span>
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-brand-navy md:text-4xl">Prêt à démarrer votre formation ?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Contactez-nous pour un entretien personnalisé et un devis gratuit
        </p>
        <p className="mt-4 text-sm text-slate-400">
          {site.address}
          <br />
          {site.agrement}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-green text-base">
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
