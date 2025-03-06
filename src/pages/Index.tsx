
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import PropertyTypeSection from '../components/home/PropertyTypeSection';
import LocationsSection from '../components/home/LocationsSection';
import RecentProperties from '../components/home/RecentProperties';
import CTASection from '../components/home/CTASection';
import { properties, getFeaturedProperties } from '../data/properties';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const initialRecentProperties = properties.slice(0, 12);
  const displayedProperties = showAllProperties ? properties.slice(0, 100) : initialRecentProperties;

  useEffect(() => {
    setIsLoaded(true);
    document.title = "SMART HOMES Real Estate - Find Your Ideal Rental Property in Nairobi";
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
      <LocationsSection />
      
      <section id="recent-properties" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Properties</h2>
              <p className="text-slate-600 max-w-2xl">
                Explore our extensive collection of rental properties in Nairobi's prime locations, ranging from affordable single rooms to spacious apartments.
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

// PropertyCard component imported directly here to make the Index.tsx file more self-contained 
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Building, Heart, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PropertyType } from '../components/PropertyCard';

const PropertyCard = ({ property, className, featured = false, style }: {
  property: PropertyType;
  className?: string;
  featured?: boolean;
  style?: React.CSSProperties;
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const getWhatsAppLink = (property: PropertyType) => {
    const message = encodeURIComponent(
      `Hello, I'm interested in your property: ${property.title} (${property.propertyType}) in ${property.location} priced at ${formatPrice(property.price)}/month. Please provide more information.`
    );
    return `https://wa.me/254708333761?text=${message}`;
  };

  const getEmailLink = (property: PropertyType) => {
    const subject = encodeURIComponent(`Inquiry about ${property.title} in ${property.location}`);
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in your property:\n\n${property.title}\nLocation: ${property.location}\nPrice: ${formatPrice(property.price)}/month\n\nPlease provide more information.\n\nThank you.`
    );
    return `mailto:daviszack043@gmail.com?subject=${subject}&body=${body}`;
  };

  const handlePropertyClick = () => {
    navigate(`/property/${property.id}`);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/contact`, { 
      state: { 
        propertyInfo: {
          id: property.id,
          title: property.title,
          location: property.location,
          price: property.price,
          propertyType: property.propertyType
        } 
      } 
    });
  };

  return (
    <div 
      onClick={handlePropertyClick}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer",
        featured ? "md:col-span-2" : "",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <button
          onClick={handleSaveToggle}
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full transition-all duration-300 z-10",
            isSaved 
              ? "bg-white text-red-500" 
              : "bg-white/30 text-white hover:bg-white hover:text-red-500"
          )}
        >
          <Heart className={cn("h-5 w-5", isSaved ? "fill-red-500" : "")} />
        </button>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            For Rent
          </span>
          {property.featured && (
            <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-xl text-white font-bold mb-1 drop-shadow-md">
            {property.title}
          </h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span className="truncate">{property.address}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-sm text-slate-700">
              <BedDouble className="h-4 w-4 mr-1.5 text-primary" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center text-sm text-slate-700">
              <Bath className="h-4 w-4 mr-1.5 text-primary" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center text-sm text-slate-700">
              <Square className="h-4 w-4 mr-1.5 text-primary" />
              <span>{property.squareFeet} sq ft</span>
            </div>
            {property.floor && (
              <div className="flex items-center text-sm text-slate-700">
                <Building className="h-4 w-4 mr-1.5 text-primary" />
                <span>Floor {property.floor}/{property.totalFloors}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-slate-600 capitalize">{property.propertyType} in {property.location}</span>
          <p className="text-xl font-bold text-primary">
            {formatPrice(property.price)}
            <span className="text-sm font-normal">/mo</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Button 
            onClick={handleContactClick}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Contact Us
          </Button>
          <div className="flex gap-2">
            <a 
              href={getWhatsAppLink(property)}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a 
              href={getEmailLink(property)}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
