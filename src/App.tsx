import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Formations from "@/pages/Formations";
import FormationDetail from "@/pages/FormationDetail";
import Financement from "@/pages/Financement";
import FinancementDetail from "@/pages/FinancementDetail";
import Metiers from "@/pages/Metiers";
import MetierDetail from "@/pages/MetierDetail";
import Simulateur from "@/pages/Simulateur";
import NotreCentre from "@/pages/NotreCentre";
import Contact from "@/pages/Contact";
import Inscription from "@/pages/Inscription";
import Blog from "@/pages/Blog";
import ArticleDetail from "@/pages/ArticleDetail";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/:slug" element={<FormationDetail />} />
        <Route path="/financement" element={<Financement />} />
        <Route path="/financement/:code" element={<FinancementDetail />} />
        <Route path="/metiers" element={<Metiers />} />
        <Route path="/metiers/:slug" element={<MetierDetail />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/a-propos" element={<NotreCentre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
