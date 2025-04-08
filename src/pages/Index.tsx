
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import PropertyTypeSection from '../components/home/PropertyTypeSection';
import LocationsSection from '../components/home/LocationsSection';
import AnimatedPropertyAd from '../components/AnimatedPropertyAd';
import CTASection from '../components/home/CTASection';
import { properties, getFeaturedProperties } from '../data/properties';
import { Button } from '@/components/ui/button';
import PropertyCard from '../components/PropertyCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const initialRecentProperties = properties.slice(0, 9);
  const displayedProperties = showAllProperties ? properties.slice(0, 21) : initialRecentProperties;

  useEffect(() => {
    setIsLoaded(true);
    document.title = "SMART HOMES Real Estate - Find Your Ideal Property in Nairobi";
    window.scrollTo(0, 0);
  }, []);

  const handleShowMore = () => {
    setShowAllProperties(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('recent-properties')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <HeroSection />
      <FeaturedProperties properties={featuredProperties} />
      <PropertyTypeSection />
      
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Property</h2>
          <AnimatedPropertyAd className="max-w-4xl mx-auto hover-scale" />
        </div>
      </section>
      
      <LocationsSection />
      
      <section id="recent-properties" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Properties</h2>
              <p className="text-slate-600 max-w-2xl">
                Explore our extensive collection of properties for sale in Nairobi's prime locations, ranging from comfortable apartments to spacious houses.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {!showAllProperties && (
            <div className="mt-12 text-center">
              <Button 
                onClick={handleShowMore}
                className="px-8 py-6 bg-primary hover:bg-primary/90 text-white text-lg font-medium"
              >
                View More Properties
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
