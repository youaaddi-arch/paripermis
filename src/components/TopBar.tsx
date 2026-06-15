import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-brand-ink text-white/75 text-xs">
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-5">
          <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Phone className="h-3.5 w-3.5 text-brand-green" />
            <span>{site.phone}</span>
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="h-3.5 w-3.5 text-brand-green" />
            {site.city}
          </span>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand-green"
        >
          Demander un devis
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
