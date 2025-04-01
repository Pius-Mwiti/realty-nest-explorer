
import React from 'react';

interface PropertyAdProps {
  className?: string;
}

const PropertyAd = ({ className }: PropertyAdProps) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div className="bg-primary text-white py-3 px-4 font-bold text-lg">
        Featured Property Video
      </div>
      <div className="aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/dQw-e5Bjkb0?si=T7XmdFJ-3RmWb24K" 
          title="Property Video Tour" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg mb-2">Luxury Properties in Nairobi</h3>
        <p className="text-gray-700 text-sm">
          Discover our exclusive collection of luxury properties in prime locations across Nairobi. 
          Perfect for investment or your dream home.
        </p>
      </div>
    </div>
  );
};

export default PropertyAd;
