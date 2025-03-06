
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PropertyCard from '../PropertyCard';
import { PropertyType } from '../PropertyCard';

interface FeaturedPropertiesProps {
  properties: PropertyType[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  return (
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
          {properties.map((property, index) => (
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
  );
};

export default FeaturedProperties;
