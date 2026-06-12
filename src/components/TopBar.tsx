import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-white text-xs">
      <div className="container flex h-9 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-brand-green transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>{site.phone}</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            {site.city}
          </span>
        </div>
        <Link
          to="/contact"
          className="rounded bg-brand-green px-3 py-1 font-semibold hover:bg-brand-green-dark transition-colors"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
