import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/spot" element={<Spot />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press-media" element={<PressMedia />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
