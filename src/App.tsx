import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Formations from "@/pages/Formations";
import FormationDetail from "@/pages/FormationDetail";
import Financement from "@/pages/Financement";
import Metiers from "@/pages/Metiers";
import Simulateur from "@/pages/Simulateur";
import NotreCentre from "@/pages/NotreCentre";
import Contact from "@/pages/Contact";
import Inscription from "@/pages/Inscription";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/:slug" element={<FormationDetail />} />
        <Route path="/financement" element={<Financement />} />
        <Route path="/metiers" element={<Metiers />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/a-propos" element={<NotreCentre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
