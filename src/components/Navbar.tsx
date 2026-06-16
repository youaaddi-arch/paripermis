import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useFormationsByCategory } from "@/lib/formations";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group relative text-sm font-medium transition-colors hover:text-brand-green ${
    isActive ? "text-brand-green" : "text-slate-700"
  }`;

// soulignement animé partagé par les liens du menu
function Underline() {
  return (
    <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-green to-brand-cyan transition-all duration-300 group-hover:w-full" />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { marchandises, voyageurs, auto, deuxRoues } = useFormationsByCategory();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/95 backdrop-blur"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            Accueil <Underline />
          </NavLink>

          {/* Formations dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-brand-green">
              Formations <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[920px] -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-4 gap-6 rounded-xl border border-slate-200 bg-white p-5 shadow-lg">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                    Auto
                  </p>
                  <ul className="space-y-1.5">
                    {auto.map((f) => (
                      <li key={f.slug}>
                        <Link to={`/formations/${f.slug}`} className="text-sm text-slate-600 hover:text-brand-green">
                          {f.cardTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                    Deux-roues
                  </p>
                  <ul className="space-y-1.5">
                    {deuxRoues.map((f) => (
                      <li key={f.slug}>
                        <Link to={`/formations/${f.slug}`} className="text-sm text-slate-600 hover:text-brand-green">
                          {f.cardTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
                    Transport de Marchandises
                  </p>
                  <ul className="space-y-1.5">
                    {marchandises.map((f) => (
                      <li key={f.slug}>
                        <Link to={`/formations/${f.slug}`} className="text-sm text-slate-600 hover:text-brand-green">
                          {f.cardTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    Transport en commun sur route
                  </p>
                  <ul className="space-y-1.5">
                    {voyageurs.map((f) => (
                      <li key={f.slug}>
                        <Link to={`/formations/${f.slug}`} className="text-sm text-slate-600 hover:text-brand-green">
                          {f.cardTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/formations"
                  className="col-span-4 mt-1 text-sm font-semibold text-brand-green hover:underline"
                >
                  Voir toutes nos formations →
                </Link>
              </div>
            </div>
          </div>

          <NavLink to="/financement" className={navLinkClass}>
            Financement <Underline />
          </NavLink>
          <NavLink to="/metiers" className={navLinkClass}>
            Métiers <Underline />
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog <Underline />
          </NavLink>
          <NavLink to="/simulateur" className={navLinkClass}>
            Trouver ma formation <Underline />
          </NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>
            Notre Centre <Underline />
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact <Underline />
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/inscription"
            className="btn px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:shadow-glow-blue focus:ring-brand-blue"
          >
            S'inscrire
          </Link>
        </div>

        <button
          className="lg:hidden text-brand-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container flex flex-col gap-1 py-4">
            {[
              ["/", "Accueil"],
              ["/formations", "Formations"],
              ["/financement", "Financement"],
              ["/metiers", "Métiers"],
              ["/blog", "Blog"],
              ["/simulateur", "Trouver ma formation"],
              ["/a-propos", "Notre Centre"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {label}
              </NavLink>
            ))}
            <Link to="/inscription" onClick={() => setOpen(false)} className="btn-blue mt-2">
              S'inscrire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
