
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
            Explore our diverse range of premium properties for sale in Nairobi's prime locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/properties?propertyType=apartment" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Apartments</h3>
                <p className="text-white/90 mb-3">KES 4,000,000 - 26,000,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse apartments <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?propertyType=1bedroom" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="1 Bedroom Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">1 Bedroom Apartments</h3>
                <p className="text-white/90 mb-3">KES 4,000,000 - 6,500,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse 1 Bedrooms <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?propertyType=2bedroom" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="2 Bedroom Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">2 Bedroom Apartments</h3>
                <p className="text-white/90 mb-3">KES 7,000,000 - 9,500,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse 2 Bedrooms <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Link to="/properties?propertyType=3bedroom" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="3 Bedroom Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">3 Bedroom Apartments</h3>
                <p className="text-white/90 mb-3">KES 11,000,000 - 22,500,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse 3 Bedrooms <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?propertyType=4bedroom" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="4 Bedroom Apartments" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">4 Bedroom Apartments</h3>
                <p className="text-white/90 mb-3">KES 14,000,000 - 26,000,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse 4 Bedrooms <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/properties?propertyType=house" className="group">
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <img 
                src="https://images.unsplash.com/photo-1592928302636-c83cf1ffe27b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                alt="Houses" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Houses</h3>
                <p className="text-white/90 mb-3">KES 14,000,000 - 26,000,000</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  Browse Houses <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
