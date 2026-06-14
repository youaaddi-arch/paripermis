import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé : extrait le nombre d'une valeur type "2 500+" ou "92%"
 * et l'anime de 0 jusqu'à la cible quand il devient visible, en conservant
 * le préfixe / suffixe (espaces, %, +, etc.).
 */
export default function Counter({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/[\d  .,]+/);
  const raw = match ? match[0] : "";
  const target = parseFloat(raw.replace(/[  \s]/g, "").replace(",", ".")) || 0;
  const prefix = match ? value.slice(0, match.index) : value;
  const suffix = match ? value.slice((match.index ?? 0) + raw.length) : "";
  const decimals = (raw.split(/[.,]/)[1] || "").length;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  // Valeur non numérique (ex. "Meilleur") : affichage tel quel, sans animation.
  const isNumeric = match !== null;

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) {
      setN(target);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display = decimals > 0 ? n.toFixed(decimals).replace(".", ",") : Math.round(n).toLocaleString("fr-FR");

  if (!isNumeric) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
