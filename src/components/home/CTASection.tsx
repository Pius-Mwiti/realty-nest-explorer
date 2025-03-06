
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Find Your Dream Home?</h2>
          <p className="text-white/90 text-lg mb-10">
            Connect with our expert agents today to start your journey toward finding the perfect property that meets all your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/properties">Browse Properties</Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact an Agent</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
