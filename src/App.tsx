
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SavedProperties from "./pages/SavedProperties";
import NotFound from "./pages/NotFound";
import React from "react";
import PropertyAd from "./components/PropertyAd";

const queryClient = new QueryClient();

// Layout component to show PropertyAd on all pages except home
const PageWithAd = ({ children }: { children: React.ReactNode }) => {
  // Don't show on homepage as it's already included there
  const isHomePage = window.location.hash === "#/" || window.location.hash === "";
  
  if (isHomePage) {
    return <>{children}</>;
  }
  
  return (
    <>
      {children}
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-white to-slate-50">
        <PropertyAd className="max-w-4xl mx-auto mb-12" />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={
            <PageWithAd>
              <Properties />
            </PageWithAd>
          } />
          <Route path="/property/:id" element={
            <PageWithAd>
              <PropertyDetail />
            </PageWithAd>
          } />
          <Route path="/about" element={
            <PageWithAd>
              <About />
            </PageWithAd>
          } />
          <Route path="/contact" element={
            <PageWithAd>
              <Contact />
            </PageWithAd>
          } />
          <Route path="/saved" element={
            <PageWithAd>
              <SavedProperties />
            </PageWithAd>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
