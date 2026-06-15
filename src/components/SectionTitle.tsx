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
        <span className={`eyebrow mb-4 ${light ? "text-brand-green" : ""}`}>
          <span className={`h-px w-6 ${light ? "bg-white/30" : "bg-brand-green/40"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold leading-[1.1] tracking-tight md:text-[2.6rem] ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
