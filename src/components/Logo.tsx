import { Link } from "react-router-dom";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-brand-navy";
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-navy text-sm font-semibold text-white ring-1 ring-brand-green/30">
        P<span className="text-brand-green">P</span>
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${text}`}>
        Pari<span className="text-brand-green">permis</span>
        <sup className="align-super text-[9px] text-brand-green">®</sup>
      </span>
    </Link>
  );
}
