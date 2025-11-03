import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HypeeConnect from "./pages/HypeeConnect";
import Donumi from "./pages/Donumi";
import Storya from "./pages/Storya";
import Evivi from "./pages/Evivi";
import NotFound from "./pages/NotFound";
import Confidentialite from "./pages/Confidentialite";
import Conditions from "./pages/Conditions";
import MentionsLegales from "./pages/MentionsLegales";
import Carrieres from "./pages/Carrieres";
import Presse from "./pages/Presse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes future={{ v7_relativeSplatPath: true }}>
        <Route path="/" element={<Index />} />
        <Route path="/hypeeconnect" element={<HypeeConnect />} />
        <Route path="/donumi" element={<Donumi />} />
        <Route path="/storya" element={<Storya />} />
        <Route path="/evivi" element={<Evivi />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/conditions-d-utilisation" element={<Conditions />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/carrieres" element={<Carrieres />} />
        <Route path="/presse" element={<Presse />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
