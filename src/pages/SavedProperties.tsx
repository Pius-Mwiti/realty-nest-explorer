
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { PropertyType } from '../components/PropertyCard';
import { FileX } from 'lucide-react';

const SavedProperties = () => {
  const [savedProperties, setSavedProperties] = useState<PropertyType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Saved Properties - SMART HOMES Real Estate";
    window.scrollTo(0, 0);
    
    // In a real app, we would fetch saved properties from localStorage or backend
    // For now, let's simulate with some random properties
    const randomIds = Array.from({ length: 5 }, () => 
      Math.floor(Math.random() * 150) + 1
    );
    
    const savedProps = properties.filter(property => 
      randomIds.includes(parseInt(property.id))
    );
    
    setSavedProperties(savedProps);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">Saved Properties</h1>
            
            {savedProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {savedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                  <FileX className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">No saved properties</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  You haven't saved any properties yet. Click the heart icon on properties you like to save them for later.
                </p>
                <a 
                  href="/properties" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Explore Properties
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedProperties;
