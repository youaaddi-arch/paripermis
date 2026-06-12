import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-extrabold text-brand-green">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page introuvable</h1>
      <p className="mt-2 max-w-md text-slate-500">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn-green mt-8">
        <Home className="h-4 w-4" /> Retour à l'accueil
      </Link>
    </section>
  );
}
