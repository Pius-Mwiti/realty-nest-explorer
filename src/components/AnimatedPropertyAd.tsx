
import React, { useEffect, useRef } from 'react';

interface AnimatedPropertyAdProps {
  className?: string;
}

const AnimatedPropertyAd: React.FC<AnimatedPropertyAdProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (containerRef.current) {
        const firstItem = containerRef.current.querySelector('.ad-item');
        if (firstItem) {
          containerRef.current.style.transition = 'transform 1s ease-in-out';
          containerRef.current.style.transform = 'translateX(-100%)';
          
          setTimeout(() => {
            containerRef.current!.style.transition = 'none';
            containerRef.current!.style.transform = 'translateX(0)';
            containerRef.current!.appendChild(firstItem);
          }, 1000);
        }
      }
    }, 5000);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className={`w-full overflow-hidden rounded-lg shadow-lg bg-white ${className}`}>
      <div className="bg-primary text-white py-3 px-4 font-bold text-lg text-center">
        <span className="animate-pulse">Featured Properties</span>
      </div>
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        ref={containerRef}
      >
        {adItems.map((item, index) => (
          <div key={index} className="ad-item min-w-full">
            <div className="aspect-video relative overflow-hidden">
              {item.type === 'video' ? (
                <iframe 
                  src={`${item.src}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                  frameBorder="0"
                ></iframe>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs font-medium px-2 py-1 rounded ${tag.className}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updated ad items with only real estate media content
const adItems = [
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/jssO8-5qmag',
    title: 'Luxury Homes in Prime Locations',
    description: 'Discover our exclusive collection of luxury properties across Nairobi.',
    tags: [
      { label: 'Limited Time Offer', className: 'bg-primary/10 text-primary' },
      { label: 'Premium Location', className: 'bg-yellow-100 text-yellow-800' },
      { label: 'Smart Investment', className: 'bg-green-100 text-green-800' }
    ]
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/o85pzTRYhmw',
    title: 'Modern Family Apartments',
    description: 'Spacious and comfortable living spaces for families in secure neighborhoods.',
    tags: [
      { label: 'Family-Friendly', className: 'bg-blue-100 text-blue-800' },
      { label: 'Secure Location', className: 'bg-purple-100 text-purple-800' },
      { label: 'Ready to Move', className: 'bg-green-100 text-green-800' }
    ]
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    title: 'Countryside Villas',
    description: 'Peaceful and serene living with stunning views of nature.',
    tags: [
      { label: 'Nature Views', className: 'bg-emerald-100 text-emerald-800' },
      { label: 'Spacious Land', className: 'bg-amber-100 text-amber-800' },
      { label: 'Private Location', className: 'bg-indigo-100 text-indigo-800' }
    ]
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/S57yhzGU5hQ',
    title: 'Luxury Penthouses',
    description: 'Experience urban living at its finest with our premium penthouses.',
    tags: [
      { label: 'City Views', className: 'bg-sky-100 text-sky-800' },
      { label: 'Premium Amenities', className: 'bg-rose-100 text-rose-800' },
      { label: 'Exclusive Access', className: 'bg-violet-100 text-violet-800' }
    ]
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/X7UrQMpyVHM',
    title: 'Beachfront Properties',
    description: 'Wake up to breathtaking ocean views in our beachfront properties.',
    tags: [
      { label: 'Ocean Views', className: 'bg-cyan-100 text-cyan-800' },
      { label: 'Private Beach', className: 'bg-teal-100 text-teal-800' },
      { label: 'Luxury Living', className: 'bg-fuchsia-100 text-fuchsia-800' }
    ]
  }
];

export default AnimatedPropertyAd;
