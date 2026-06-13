interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-500">{subtitle}</p>}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-green to-brand-cyan ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
