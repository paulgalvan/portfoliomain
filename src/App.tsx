import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import PersonalAbout from "./pages/PersonalAbout"; // Import PersonalAbout
import CadPortfolio from "./pages/CadPortfolio";
import CadPortfolioV2 from "./pages/CadPortfolioV2";
import ProjectDetail from "./pages/ProjectDetail"; // Import ProjectDetail

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/personal-about" element={<PersonalAbout />} /> {/* New Route */}
          <Route path="/projects/cad-portfolio" element={<CadPortfolio />} /> {/* New CAD Portfolio Route */}
          <Route path="/projects/lego-simple-robotics" element={<CadPortfolioV2 />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* New Project Detail Route */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
