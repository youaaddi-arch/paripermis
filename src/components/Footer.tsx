import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const footerFormations = [
  { label: "Permis C", slug: "permis-c" },
  { label: "Permis CE", slug: "permis-ce" },
  { label: "Permis D", slug: "permis-d" },
  { label: "TP Marchandises Porteur", slug: "tp-transport-marchandises-porteur" },
  { label: "FIMO Marchandises", slug: "fimo-marchandises" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Centre de formation transport routier certifié. Formations permis poids lourd, titres professionnels, FIMO
            et FCO à Longjumeau.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Formations</h4>
          <ul className="space-y-2 text-sm">
            {footerFormations.map((f) => (
              <li key={f.slug}>
                <Link to={`/formations/${f.slug}`} className="hover:text-brand-green transition-colors">
                  {f.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/formations" className="font-semibold text-brand-green hover:underline">
                Voir toutes →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/financement" className="hover:text-brand-green transition-colors">Financement</Link></li>
            <li><Link to="/a-propos" className="hover:text-brand-green transition-colors">Notre Centre</Link></li>
            <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={site.phoneHref} className="hover:text-brand-green">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-green">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© 2026 PariPermis — Centre de formation transport routier. Tous droits réservés.</p>
          <p>{site.agrement} — Centre certifié Qualiopi</p>
        </div>
      </div>
    </footer>
  );
}
