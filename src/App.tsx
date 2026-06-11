import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import UserAgreement from "./pages/UserAgreement";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Markets from "./pages/Markets";
import Futures from "./pages/Futures";
import Spot from "./pages/Spot";
import Institutional from "./pages/Institutional";
import RiskDisclosure from "./pages/RiskDisclosure";
import AMLPolicy from "./pages/AMLPolicy";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import PressMedia from "./pages/PressMedia";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();
const SUPPORTED_LANGS = ["pt", "es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"];

/** Syncs i18n with the optional /:lang URL prefix. */
const LangSync = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  useEffect(() => {
    const target = lang && SUPPORTED_LANGS.includes(lang) ? lang : "en";
    if (i18n.language !== target) {
      i18n.changeLanguage(target);
      localStorage.setItem("language", target);
    }
  }, [lang, i18n]);
  return <>{children}</>;
};

const AppRoutes = () => (
  <Routes>
    {/* Root (English) */}
    <Route path="/" element={<LangSync><Index /></LangSync>} />
    <Route path="/about-us" element={<LangSync><AboutUs /></LangSync>} />
    <Route path="/markets" element={<LangSync><Markets /></LangSync>} />
    <Route path="/futures" element={<LangSync><Futures /></LangSync>} />
    <Route path="/spot" element={<LangSync><Spot /></LangSync>} />
    <Route path="/institutional" element={<LangSync><Institutional /></LangSync>} />
    <Route path="/privacy-policy" element={<LangSync><PrivacyPolicy /></LangSync>} />
    <Route path="/disclaimer" element={<LangSync><Disclaimer /></LangSync>} />
    <Route path="/user-agreement" element={<LangSync><UserAgreement /></LangSync>} />
    <Route path="/terms-of-service" element={<LangSync><TermsOfService /></LangSync>} />
    <Route path="/risk-disclosure" element={<LangSync><RiskDisclosure /></LangSync>} />
    <Route path="/aml-policy" element={<LangSync><AMLPolicy /></LangSync>} />
    <Route path="/compliance" element={<LangSync><Compliance /></LangSync>} />
    <Route path="/contact" element={<LangSync><Contact /></LangSync>} />
    <Route path="/our-team" element={<LangSync><OurTeam /></LangSync>} />
    <Route path="/careers" element={<LangSync><Careers /></LangSync>} />
    <Route path="/press-media" element={<LangSync><PressMedia /></LangSync>} />
    <Route path="/faq" element={<LangSync><FAQ /></LangSync>} />

    {/* Language-prefixed routes (/pt, /es, /de, /id, /th, /ko, /ru, /ja, /ms, /zh) */}
    <Route path="/:lang" element={<LangSync><Index /></LangSync>} />
    <Route path="/:lang/about-us" element={<LangSync><AboutUs /></LangSync>} />
    <Route path="/:lang/markets" element={<LangSync><Markets /></LangSync>} />
    <Route path="/:lang/futures" element={<LangSync><Futures /></LangSync>} />
    <Route path="/:lang/spot" element={<LangSync><Spot /></LangSync>} />
    <Route path="/:lang/institutional" element={<LangSync><Institutional /></LangSync>} />
    <Route path="/:lang/privacy-policy" element={<LangSync><PrivacyPolicy /></LangSync>} />
    <Route path="/:lang/disclaimer" element={<LangSync><Disclaimer /></LangSync>} />
    <Route path="/:lang/user-agreement" element={<LangSync><UserAgreement /></LangSync>} />
    <Route path="/:lang/terms-of-service" element={<LangSync><TermsOfService /></LangSync>} />
    <Route path="/:lang/risk-disclosure" element={<LangSync><RiskDisclosure /></LangSync>} />
    <Route path="/:lang/aml-policy" element={<LangSync><AMLPolicy /></LangSync>} />
    <Route path="/:lang/compliance" element={<LangSync><Compliance /></LangSync>} />
    <Route path="/:lang/contact" element={<LangSync><Contact /></LangSync>} />
    <Route path="/:lang/our-team" element={<LangSync><OurTeam /></LangSync>} />
    <Route path="/:lang/careers" element={<LangSync><Careers /></LangSync>} />
    <Route path="/:lang/press-media" element={<LangSync><PressMedia /></LangSync>} />
    <Route path="/:lang/faq" element={<LangSync><FAQ /></LangSync>} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
