interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  /** variante claire pour fond foncé (texte blanc) */
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, center = true, light = false }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`eyebrow mb-3 ${light ? "bg-white/10 text-white ring-white/20" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : ""}`}>{title}</h2>
      {subtitle && <p className={`mt-3 ${light ? "text-white/75" : "text-slate-500"}`}>{subtitle}</p>}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-green to-brand-cyan ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
