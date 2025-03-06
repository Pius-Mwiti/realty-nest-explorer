
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
  style?: React.CSSProperties;
}

const PropertyCard = ({ property, className, featured = false, style }: PropertyCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  
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
        "group flex flex-col overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300",
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
            "absolute top-4 right-4 p-2 rounded-full transition-all duration-300",
            isSaved 
              ? "bg-white text-red-500" 
              : "bg-white/30 text-white hover:bg-white hover:text-red-500"
          )}
        >
          <Heart className={cn("h-5 w-5", isSaved ? "fill-red-500" : "")} />
        </button>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={cn(
            "text-xs font-semibold px-3 py-1.5 rounded-full",
            property.type === 'sale' 
              ? "bg-blue-600 text-white" 
              : "bg-amber-500 text-white"
          )}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
          {property.featured && (
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
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
          <div className="flex items-center space-x-4">
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
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">{property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}</span>
          <p className="text-xl font-bold text-primary">
            {formatPrice(property.price)}
            {property.type === 'rent' && <span className="text-sm font-normal">/mo</span>}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
