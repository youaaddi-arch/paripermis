import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="bg-brand-blue text-white">
      <div className="container py-16 text-center">
        <p className="text-2xl font-extrabold text-white">
          Pari<span className="text-white/80">permis</span>
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
          <Link to="/contact" className="btn-green">
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
