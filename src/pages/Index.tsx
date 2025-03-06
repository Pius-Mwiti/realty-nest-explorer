
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building, Home, Clock, Award, Users, BarChart } from 'lucide-react';
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pb-32 relative bg-gradient-to-br from-white to-slate-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Discover the perfect property that matches your lifestyle with our curated selection of exceptional real estate.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            <SearchFilters />
          </div>
          
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
            <Link to="/properties?type=sale" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">Properties for Sale</h3>
              <p className="text-slate-500 mb-4">Find your perfect home among our exclusive selection of properties for sale.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Browse listings</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/properties?type=rent" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">Properties for Rent</h3>
              <p className="text-slate-500 mb-4">Discover rental properties that offer comfort and convenience for your lifestyle.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Browse listings</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/contact" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">Speak to an Agent</h3>
              <p className="text-slate-500 mb-4">Connect with our experienced agents for personalized real estate guidance.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Get in touch</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Properties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-slate-600 max-w-2xl">
                Discover our handpicked selection of stunning properties that stand out for their exceptional
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RealtyNest</h2>
            <p className="text-slate-600">
              We strive to provide exceptional service and results for all your real estate needs.
              Here's what makes us different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Premium Selection</h3>
              <p className="text-slate-600">
                We carefully curate the finest properties that meet our high standards for quality and value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Expert Agents</h3>
              <p className="text-slate-600">
                Our team of experienced professionals provides knowledgeable guidance throughout your journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Fast Processing</h3>
              <p className="text-slate-600">
                We streamline the buying and selling process to save you time and reduce stress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Market Insights</h3>
              <p className="text-slate-600">
                Our data-driven approach provides valuable insights to inform your real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Properties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Properties</h2>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-white/90 text-lg mb-8">
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
