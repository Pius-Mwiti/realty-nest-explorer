
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface PropertyAdProps {
  className?: string;
}

const PropertyAd = ({ className }: PropertyAdProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-play the video after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-primary text-white py-3 px-4 font-bold text-lg flex items-center justify-between">
        <span className="animate-pulse">Featured Property Video</span>
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-white text-primary rounded-full p-1 hover:bg-primary-foreground transition-colors"
          >
            <Play size={18} />
          </button>
        )}
      </div>
      <div className={`aspect-video relative ${isHovered ? 'scale-[1.02] transition-transform duration-300' : 'transition-transform duration-300'}`}>
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer" onClick={() => setIsPlaying(true)}>
            <div className="bg-white/90 rounded-full p-4 animate-pulse">
              <Play size={36} className="text-primary" />
            </div>
            <span className="absolute bottom-4 text-white font-semibold text-lg">Click to Play Video</span>
          </div>
        ) : null}
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/dQw-e5Bjkb0?si=T7XmdFJ-3RmWb24K${isPlaying ? '&autoplay=1' : ''}`}
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
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">Limited Time Offer</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">Prime Locations</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Great Investment</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyAd;
