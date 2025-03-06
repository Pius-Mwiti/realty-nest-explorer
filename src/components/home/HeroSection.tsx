
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (propertyType) params.set('propertyType', propertyType);
    
    navigate(`/properties?${params.toString()}`);
  };
  
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          className="w-full h-full object-cover"
          alt="Nairobi real estate"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find Your Ideal Rental in Nairobi
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            Discover affordable singles, bedsitters, and apartments in Westlands, Kilimani, Upper Hill, South C, and South B.
          </p>
          
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800"
                  >
                    <option value="">Select Location</option>
                    <option value="Westlands">Westlands</option>
                    <option value="Kilimani">Kilimani</option>
                    <option value="Upper Hill">Upper Hill</option>
                    <option value="South C">South C</option>
                    <option value="South B">South B</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800"
                  >
                    <option value="">Property Type</option>
                    <option value="single">Single Room</option>
                    <option value="bedsitter">Bedsitter</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
