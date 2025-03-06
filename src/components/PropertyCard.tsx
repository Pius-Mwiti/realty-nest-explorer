
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PropertyType {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  image: string;
  featured?: boolean;
  type: 'sale' | 'rent';
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial';
}

interface PropertyCardProps {
  property: PropertyType;
  className?: string;
  featured?: boolean;
}

const PropertyCard = ({ property, className, featured = false }: PropertyCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <Link 
      to={`/property/${property.id}`}
      className={cn(
        "group property-card",
        featured ? "md:col-span-2" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={handleSaveToggle}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-300",
            isSaved 
              ? "bg-white text-red-500" 
              : "bg-black/30 text-white hover:bg-white hover:text-red-500"
          )}
        >
          <Heart className={cn("h-4 w-4", isSaved ? "fill-red-500" : "")} />
        </button>
        <div className="absolute top-3 left-3">
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-md",
            property.type === 'sale' 
              ? "bg-blue-500 text-white" 
              : "bg-amber-500 text-white"
          )}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
          {property.featured && (
            <span className="ml-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-md">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
              <span>{property.address}</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary">
            {formatPrice(property.price)}
            {property.type === 'rent' && <span className="text-sm font-normal">/mo</span>}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center text-muted-foreground text-sm">
            <BedDouble className="h-4 w-4 mr-1.5" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Bath className="h-4 w-4 mr-1.5" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Square className="h-4 w-4 mr-1.5" />
            <span>{property.squareFeet} sq ft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
