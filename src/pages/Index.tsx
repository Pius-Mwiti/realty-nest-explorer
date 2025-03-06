
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building, Home, Clock, Award, Users, BarChart, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchFilters from '../components/SearchFilters';
import { Button } from '@/components/ui/button';
import { properties, getFeaturedProperties } from '../data/properties';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const recentProperties = properties.slice(0, 6);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
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
      
      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-slate-600 max-w-2xl">
                Discover our handpicked selection of premium properties that stand out for their exceptional
                features, locations, and value.
              </p>
            </div>
            <Link 
              to="/properties" 
              className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:underline"
            >
              View all properties
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Browse by Category Section */}
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
      
      {/* Recent Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Properties</h2>
              <p className="text-slate-600 max-w-2xl">
                Explore our newest listings on the market, offering fresh opportunities for buyers and investors.
              </p>
            </div>
            <Link 
              to="/properties" 
              className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:underline"
            >
              View all properties
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
