
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SavedProperties from "./pages/SavedProperties";
import NotFound from "./pages/NotFound";
import React from "react";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AnimatedPropertyAd from "./components/AnimatedPropertyAd";

const queryClient = new QueryClient();

// Layout component to show AnimatedPropertyAd on all pages except home and admin pages
const PageWithAd = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-white to-slate-50">
        <AnimatedPropertyAd className="max-w-4xl mx-auto mb-12" />
      </div>
    </>
  );
};

// Protected route component for admin pages
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <PageWithAd>
              <Index />
            </PageWithAd>
          } />
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
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
