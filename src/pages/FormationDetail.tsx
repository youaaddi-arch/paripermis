import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Clock, Phone, MapPin, CheckCircle2, Target,
  Users, ListChecks, Wrench, ClipboardCheck, CalendarClock, Accessibility,
  Briefcase, Award, Download, FileText, ShieldCheck, ExternalLink, Route,
  GraduationCap, Banknote,
} from "lucide-react";
import { useFormation } from "@/lib/formations";
import { dispositifs } from "@/data/financements";
import { site } from "@/lib/site";

function Block({
  icon: Icon, title, children,
}: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-200 pt-8">
      <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
        <Icon className="h-5 w-5 text-brand-green" /> {title}
      </h2>
      <div className="mt-4 text-slate-600">{children}</div>
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

export default function FormationDetail() {
  const { slug } = useParams();
  const f = useFormation(slug);
  if (!f) return <Navigate to="/formations" replace />;

  const accent = f.category === "marchandises" ? "text-brand-blue" : "text-brand-green";

  // Apprentissage : réservé aux certifications RNCP (Titres Pro).
  // Transition Pro : réservée aux certifications enregistrées RNCP/RS (pas les permis).
  const finDispositifs = dispositifs.filter((d) => {
    if (d.code === "APP") return f.kind === "Titre Professionnel";
    if (d.code === "PTP") return f.kind !== "Permis";
    return true;
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <img src={f.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/60" />
        <div className="container relative py-14">
          <Link to="/formations" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour aux formations
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-semibold">
              {f.kind}
            </span>
            {f.qualiopi !== false && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-green" /> Certifié Qualiopi
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold text-white md:text-4xl">{f.title}</h1>
          <p className="mt-3 inline-flex items-center gap-2 text-white/80">
            <Clock className="h-4 w-4" /> {f.duration}
          </p>
          <p className="mt-2 font-semibold text-brand-green">{f.price}</p>
          {(f.rncpCode || f.rsCode || f.certifInfo) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {f.rncpCode && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                  Code RNCP {f.rncpCode}
                </span>
              )}
              {f.rsCode && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                  Code RS {f.rsCode}
                </span>
              )}
              {f.certifInfo && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                  N° Certif'Info {f.certifInfo}
                </span>
              )}
            </div>
          )}
          <p className="mt-4 max-w-2xl text-white/75">{f.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/inscription" className="btn-green">
              S'inscrire <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
              Demander un devis
            </Link>
            {f.programmePdfUrl && (
              <a
                href={f.programmePdfUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="btn bg-white text-brand-navy hover:bg-white/90"
              >
                <Download className="h-4 w-4" /> Télécharger le programme
              </a>
            )}
            {f.cpfUrl && (
              <a
                href={f.cpfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn bg-[#5b29c7] text-white hover:bg-[#4a1fa6]"
              >
                <Banknote className="h-4 w-4" /> S'inscrire avec mon CPF
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="container grid gap-10 py-14 lg:grid-cols-[1fr_320px]">
        {/* MAIN CONTENT */}
        <div className="space-y-8">
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <Target className="h-5 w-5 text-brand-green" /> Objectifs pédagogiques
            </h2>
            <div className="mt-4 text-slate-600"><BulletList items={f.objectifs} /></div>
          </section>

          <Block icon={ListChecks} title="Compétences visées"><BulletList items={f.competences} /></Block>

          <Block icon={Users} title="Public concerné"><p>{f.public}</p></Block>

          <Block icon={ClipboardCheck} title="Prérequis"><BulletList items={f.prerequis} /></Block>

          <Block icon={ListChecks} title="Programme détaillé">
            <ol className="space-y-3">
              {f.programme.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-xs font-bold text-brand-green">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block icon={Wrench} title="Méthodes & moyens pédagogiques">
            <p className="font-semibold text-brand-navy">Méthodes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">{f.methodes.map((m, i) => <li key={i}>{m}</li>)}</ul>
            <p className="mt-4 font-semibold text-brand-navy">Moyens</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">{f.moyens.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </Block>

          <Block icon={ClipboardCheck} title="Modalités d'évaluation">
            <ul className="list-disc space-y-1 pl-5">{f.evaluation.map((e, i) => <li key={i}>{e}</li>)}</ul>
          </Block>

          {f.modalitesExamen && f.modalitesExamen.length > 0 && (
            <Block icon={GraduationCap} title="Modalités d'examen / de certification">
              <BulletList items={f.modalitesExamen} />
            </Block>
          )}

          <Block icon={CalendarClock} title="Modalités d'accès"><p>{f.acces}</p></Block>

          <Block icon={Accessibility} title="Accessibilité handicap">
            <p>{f.accessibilite}</p>
            <p className="mt-3 text-sm">
              <span className="font-semibold text-brand-navy">Référent handicap :</span>{" "}
              <a href={`mailto:${site.referentHandicapEmail}`} className="font-semibold text-brand-blue hover:underline">
                {site.referentHandicapEmail}
              </a>
            </p>
          </Block>

          <Block icon={Briefcase} title="Débouchés professionnels"><BulletList items={f.debouches} /></Block>

          {f.remuneration && (
            <Block icon={Banknote} title="Rémunération">
              <p>{f.remuneration}</p>
            </Block>
          )}

          {f.passerelles && (
            <Block icon={Route} title="Passerelles, équivalences et voies d'accès"><p>{f.passerelles}</p></Block>
          )}

          <Block icon={Award} title="Certification / Validation">
            <p>{f.certification}</p>
          </Block>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="card p-6">
              <p className="text-sm font-semibold text-slate-400">Prix de la formation</p>
              <p className={`mt-1 text-lg font-bold ${accent}`}>{f.price}</p>
              <p className="mt-2 text-xs text-slate-400">
                Le prix peut varier selon le financement mobilisé et la situation du candidat.
              </p>
              <Link to="/contact" className="btn-green mt-4 w-full">Demander un devis</Link>
              <Link to="/inscription" className="btn-outline mt-2 w-full">S'inscrire</Link>
            </div>

            {f.cpfUrl && (
              <div className="card border-[#5b29c7]/30 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <Banknote className="h-4 w-4 text-[#5b29c7]" /> Financer avec le CPF
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Cette formation est éligible au Compte Personnel de Formation. Inscrivez-vous et mobilisez vos droits
                  directement sur Mon Compte Formation.
                </p>
                <a
                  href={f.cpfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn mt-4 w-full bg-[#5b29c7] text-white hover:bg-[#4a1fa6]"
                >
                  <ExternalLink className="h-4 w-4" /> S'inscrire avec mon CPF
                </a>
              </div>
            )}

            {(f.rncpCode || f.rsCode || f.certifInfo || f.franceCompetencesUrl || f.carifOrefUrl) && (
              <div className="card border-brand-green/30 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <Award className="h-4 w-4 text-brand-green" /> Enregistrement officiel
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {f.rncpCode && (
                    <li className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      RNCP {f.rncpCode}
                    </li>
                  )}
                  {f.rsCode && (
                    <li className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      RS {f.rsCode}
                    </li>
                  )}
                  {f.certifInfo && (
                    <li className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-brand-navy">
                      Certif'Info {f.certifInfo}
                    </li>
                  )}
                </ul>
                <div className="mt-4 space-y-2">
                  {f.franceCompetencesUrl && (
                    <a
                      href={f.franceCompetencesUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-brand-navy hover:border-brand-green/50 hover:text-brand-green transition-colors"
                    >
                      Fiche France Compétences <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {f.carifOrefUrl && (
                    <a
                      href={f.carifOrefUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-brand-navy hover:border-brand-green/50 hover:text-brand-green transition-colors"
                    >
                      Fiche CARIF OREF <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {f.programmePdfUrl && (
              <div className="card p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <FileText className="h-4 w-4 text-brand-green" /> Programme de formation
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Téléchargez le programme détaillé au format PDF (objectifs, prérequis, contenu, évaluation,
                  certification).
                </p>
                <a
                  href={f.programmePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="btn-outline mt-4 w-full"
                >
                  <Download className="h-4 w-4" /> Télécharger le PDF
                </a>
              </div>
            )}

            <div className="card bg-brand-navy p-6 text-white">
              <p className="text-sm font-semibold">Une question ?</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-2 text-lg font-bold hover:text-brand-green">
                <Phone className="h-5 w-5 text-brand-green" /> {site.phone}
              </a>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-brand-green" /> {site.city}
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* FINANCEMENT */}
      <section className="bg-slate-50 py-14">
        <div className="container">
          <h2 className="text-2xl font-extrabold">Financer cette formation</h2>
          <p className="mt-2 max-w-2xl text-slate-500">
            Plusieurs dispositifs peuvent permettre de financer tout ou partie de cette formation selon votre situation
            (salarié, demandeur d'emploi, entreprise).
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {finDispositifs.map((d) => (
              <div key={d.code} className="card p-5">
                <p className="font-bold text-brand-navy">{d.name}</p>
                <p className="mt-2 text-sm text-slate-500">{d.description.split(". ")[0]}.</p>
                <p className="mt-3 text-xs font-medium text-slate-400">Public : {d.public}</p>
                <a
                  href={d.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all"
                >
                  {d.link.label} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green text-white">
        <div className="container py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">Intéressé par cette formation ?</h2>
          <p className="mt-3 text-white/85">Contactez-nous pour un entretien personnalisé et un devis gratuit</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/inscription" className="btn bg-white text-brand-green hover:bg-white/90">S'inscrire</Link>
            <a href={site.phoneHref} className="btn bg-brand-navy text-white hover:bg-brand-navy-light">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
