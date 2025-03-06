
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import PropertyTypeSection from '../components/home/PropertyTypeSection';
import RecentProperties from '../components/home/RecentProperties';
import CTASection from '../components/home/CTASection';
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
      <HeroSection />
      <FeaturedProperties properties={featuredProperties} />
      <PropertyTypeSection />
      <RecentProperties properties={recentProperties} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
