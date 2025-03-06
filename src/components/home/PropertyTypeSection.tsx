
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PropertyTypeSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Property Type</h2>
          <p className="text-slate-600">
            Explore our diverse range of properties categorized to help you find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/properties?type=house" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Houses" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Houses</h3>
                <p className="text-white/90 mb-3">Find your perfect family home</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse houses <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?type=apartment" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Apartments</h3>
                <p className="text-white/90 mb-3">Urban living at its finest</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse apartments <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?type=commercial" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Commercial" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Commercial</h3>
                <p className="text-white/90 mb-3">Premium spaces for your business</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse commercial <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeSection;
