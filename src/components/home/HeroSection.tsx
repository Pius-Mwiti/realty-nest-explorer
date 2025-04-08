
import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

// Enhanced ad items with real estate video and image content
const adItems = [
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/jssO8-5qmag',
    title: 'Luxury Homes in Prime Locations',
    description: 'Discover our exclusive collection of luxury properties across Nairobi.',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/o85pzTRYhmw',
    title: 'Modern Family Apartments',
    description: 'Spacious and comfortable living spaces for families in secure neighborhoods.',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    title: 'Countryside Villas',
    description: 'Peaceful and serene living with stunning views of nature.',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/S57yhzGU5hQ',
    title: 'Luxury Penthouses',
    description: 'Experience urban living at its finest with our premium penthouses.',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/X7UrQMpyVHM',
    title: 'Beachfront Properties',
    description: 'Wake up to breathtaking ocean views in our beachfront properties.',
  }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (propertyType) params.set('propertyType', propertyType);
    
    navigate(`/properties?${params.toString()}`);
  };
  
  // Effect to animate background transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % adItems.length);
    }, 7000); // Change every 7 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background items container */}
      <div className="absolute inset-0 z-0" ref={bgRef}>
        {adItems.map((item, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="relative w-full h-full">
              <iframe 
                src={`${item.src}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${item.src.split('/').pop()}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                frameBorder="0"
              ></iframe>
            </div>
            {/* Overlay with animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 animate-pulse-slow"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find Your Ideal Home in Nairobi
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            Discover beautiful apartments and houses in Westlands, Kilimani, Upper Hill, South C, and South B.
          </p>
          
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800"
                  >
                    <option value="">Select Location</option>
                    <option value="Westlands">Westlands</option>
                    <option value="Kilimani">Kilimani</option>
                    <option value="Upper Hill">Upper Hill</option>
                    <option value="South C">South C</option>
                    <option value="South B">South B</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-10 py-3 pr-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800"
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="1bedroom">1 Bedroom</option>
                    <option value="2bedroom">2 Bedroom</option>
                    <option value="3bedroom">3 Bedroom</option>
                    <option value="4bedroom">4 Bedroom</option>
                  </select>
                </div>
              </div>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
