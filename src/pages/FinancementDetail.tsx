import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Users, ClipboardCheck,
  ListChecks, Sparkles, GraduationCap, Phone,
} from "lucide-react";
import { dispositifs, dispositifDetails } from "@/data/financements";
import { useFormations } from "@/lib/formations";
import { site } from "@/lib/site";
import OpcoFinder from "@/components/OpcoFinder";

function Block({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="flex items-center gap-2 text-lg font-bold text-brand-navy">
        <Icon className="h-5 w-5 text-brand-green" /> {title}
      </h2>
      <div className="mt-3 text-slate-600">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FinancementDetail() {
  const { code } = useParams();
  const formations = useFormations();
  const d = dispositifs.find((x) => x.code === code);
  const detail = code ? dispositifDetails[code] : undefined;
  if (!d || !detail) return <Navigate to="/financement" replace />;

  const concernees = formations.filter((f) => {
    if (detail.scope === "rncp") return f.kind === "Titre Professionnel";
    if (detail.scope === "registered") return f.kind !== "Permis";
    return true;
  });

  const scopeLabel =
    detail.scope === "rncp"
      ? "Nos titres professionnels (RNCP)"
      : detail.scope === "registered"
      ? "Nos formations certifiantes (RNCP / RS)"
      : "Toutes nos formations";

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy py-14 text-white">
        <div className="container">
          <Link to="/financement" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour aux financements
          </Link>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold text-white md:text-4xl">{d.name}</h1>
          <p className="mt-4 max-w-2xl text-white/75">{detail.intro}</p>
        </div>
      </section>

      <div className="container grid gap-10 py-14 lg:grid-cols-[1fr_320px]">
        {/* MAIN */}
        <div className="space-y-7">
          <section>
            <h2 className="flex items-center gap-2 text-lg font-bold text-brand-navy">
              <Users className="h-5 w-5 text-brand-green" /> Pour qui ?
            </h2>
            <p className="mt-3 text-slate-600">{d.public}</p>
          </section>

          <Block icon={ClipboardCheck} title="Prérequis et conditions"><BulletList items={detail.prerequis} /></Block>

          <Block icon={ListChecks} title="Modalités et démarches">
            <ol className="space-y-3">
              {detail.modalites.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </Block>

          {detail.avantages && detail.avantages.length > 0 && (
            <Block icon={Sparkles} title="Avantages"><BulletList items={detail.avantages} /></Block>
          )}

          {d.code === "OPCO" && (
            <section className="border-t border-slate-200 pt-7">
              <OpcoFinder />
            </section>
          )}

          <Block icon={GraduationCap} title={`Formations concernées — ${scopeLabel}`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {concernees.map((f) => (
                <Link
                  key={f.slug}
                  to={`/formations/${f.slug}`}
                  className="rounded-lg border border-slate-200 p-3 hover:border-brand-green/40"
                >
                  <p className="text-sm font-semibold text-brand-navy">{f.cardTitle}</p>
                  <p className="text-xs text-slate-500">{f.duration}</p>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                    Voir la formation <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </Block>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="card p-6">
              <p className="text-sm font-semibold text-brand-navy">Liens officiels</p>
              <a
                href={d.link.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-brand-navy hover:border-brand-blue/50 hover:text-brand-blue transition-colors"
              >
                {d.link.label} <ExternalLink className="h-3.5 w-3.5" />
              </a>
              {d.links && (
                <div className="mt-3 space-y-2">
                  {d.linksLabel && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{d.linksLabel}</p>
                  )}
                  {d.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-brand-navy hover:border-brand-blue/50 hover:text-brand-blue transition-colors"
                    >
                      {l.label} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="card bg-brand-navy p-6 text-white">
              <p className="text-sm font-semibold">Besoin d'aide ?</p>
              <p className="mt-2 text-sm text-white/70">
                Notre équipe étudie vos droits et monte votre dossier de financement.
              </p>
              <Link to="/contact" className="btn-green mt-4 w-full">Être recontacté</Link>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-2 text-sm font-bold hover:text-brand-green">
                <Phone className="h-4 w-4 text-brand-green" /> {site.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
