import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-immersive text-white">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute -left-16 -top-10 -z-10 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl animate-blob" />
      <div className="absolute -right-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="container py-20 text-center">
        <p className="text-2xl font-extrabold text-white">
          Pari<span className="text-gradient">permis</span>
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Prêt à démarrer votre formation ?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Contactez-nous pour un entretien personnalisé et un devis gratuit
        </p>
        <p className="mt-4 text-sm text-white/70">
          {site.address}
          <br />
          {site.agrement}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-green text-base">
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn bg-white text-brand-blue hover:bg-white/90">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
