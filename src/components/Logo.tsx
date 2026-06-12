import { Link } from "react-router-dom";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const pari = variant === "light" ? "text-white" : "text-brand-navy";
  return (
    <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
      <span className={pari}>
        Pari<span className="text-brand-green">permis</span>
        <sup className="text-[10px] align-super text-brand-green">®</sup>
      </span>
    </Link>
  );
}
