import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-immersive px-6 py-16 text-center md:px-16 md:py-24">
          <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
          <span className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-white/30" />
            PariPermis
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-[2.8rem]">
            Prêt à démarrer votre formation ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            Contactez-nous pour un entretien personnalisé et un devis gratuit, sans engagement.
          </p>
          <p className="mt-5 text-sm text-white/45">
            {site.address}
            <br />
            {site.agrement}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-green text-base">
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn glass text-white hover:bg-white/20">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
