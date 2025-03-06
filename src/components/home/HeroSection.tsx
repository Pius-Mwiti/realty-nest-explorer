
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          className="w-full h-full object-cover"
          alt="Luxury real estate"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            Discover exceptional properties in premier locations. Your dream home is just a search away.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input 
                    type="text" 
                    placeholder="Enter location, property type, or keyword" 
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
