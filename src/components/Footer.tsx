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

const colTitle = "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/50";
const link = "text-white/70 transition-colors hover:text-brand-green";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="container grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Centre de formation transport routier certifié Qualiopi. Permis poids lourd, titres
            professionnels, FIMO et FCO à Longjumeau.
          </p>
        </div>

        <div>
          <h4 className={colTitle}>Formations</h4>
          <ul className="space-y-3 text-sm">
            {footerFormations.map((f) => (
              <li key={f.slug}>
                <Link to={`/formations/${f.slug}`} className={link}>
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
          <h4 className={colTitle}>Liens utiles</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/financement" className={link}>Financement</Link></li>
            <li><Link to="/a-propos" className={link}>Notre Centre</Link></li>
            <li><Link to="/contact" className={link}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={colTitle}>Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              {site.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={site.phoneHref} className={link}>{site.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={`mailto:${site.email}`} className={link}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/45 sm:flex-row">
          <p>© 2026 PariPermis — Centre de formation transport routier. Tous droits réservés.</p>
          <p>{site.agrement} — Centre certifié Qualiopi</p>
        </div>
      </div>
    </footer>
  );
}
