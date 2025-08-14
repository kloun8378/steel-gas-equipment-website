
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SpeedValve from "./pages/SpeedValve";
import SafetyValve from "./pages/SafetyValve";
import Components from "./pages/Components";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import IconPreview from "./components/IconPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IconPreview />} />
          <Route path="/speed-valve" element={<SpeedValve />} />
          <Route path="/safety-valve" element={<SafetyValve />} />
          <Route path="/components" element={<Components />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;