
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';

const LocationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Locations</h2>
          <p className="text-slate-600">
            Discover premium rental properties in Nairobi's most sought-after neighborhoods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/properties?location=Westlands" className="group block">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1550240479-9e39d28179fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Westlands" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Westlands</h3>
                <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center text-slate-600 mt-1">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Nairobi's Business Hub</span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?location=Kilimani" className="group block">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Kilimani" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Kilimani</h3>
                <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center text-slate-600 mt-1">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Upscale Residential Area</span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?location=Upper Hill" className="group block">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Upper Hill" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Upper Hill</h3>
                <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center text-slate-600 mt-1">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Financial District</span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?location=South C" className="group block">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="South C" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">South C</h3>
                <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center text-slate-600 mt-1">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Family-Friendly Neighborhood</span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?location=South B" className="group block">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1494526585095-c41cabfe98bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="South B" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">South B</h3>
                <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex items-center text-slate-600 mt-1">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Affordable & Accessible</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
