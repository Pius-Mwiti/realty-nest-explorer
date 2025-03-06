
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, BedDouble, Bath, Square, Calendar, Briefcase, Heart, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties, getPropertyById } from '../data/properties';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState(id ? getPropertyById(id) : null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Similar properties (mock data for demonstration)
  const similarProperties = properties
    .filter(p => p.id !== id && p.propertyType === property?.propertyType)
    .slice(0, 3);
  
  useEffect(() => {
    if (id) {
      const foundProperty = getPropertyById(id);
      setProperty(foundProperty);
    }
    
    setIsLoaded(true);
  }, [id]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };
  
  // Mock multiple images using the same image
  const propertyImages = property ? [
    property.image,
    "https://images.unsplash.com/photo-1617098650990-16e03d38ac0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1631048543279-35c897070658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  ] : [];
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading property details...</div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/properties">Browse All Properties</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to listings */}
          <div className="mb-6">
            <Link 
              to="/properties" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to listings
            </Link>
          </div>
          
          {/* Property header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-primary">
                {formatPrice(property.price)}
                {property.type === 'rent' && <span className="text-lg font-normal">/mo</span>}
              </div>
              <div className="flex items-center mt-2">
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
          </div>
          
          {/* Property images */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-8">
            <div className="md:col-span-3 md:row-span-2 rounded-xl overflow-hidden">
              <img 
                src={propertyImages[activeImageIndex]} 
                alt={property.title}
                className="w-full h-full object-cover"
                style={{ height: '500px' }}
              />
            </div>
            
            <div className="hidden md:block md:row-span-1 rounded-xl overflow-hidden">
              <img 
                src={propertyImages[1]}
                alt={property.title + " - image 2"}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setActiveImageIndex(1)}
              />
            </div>
            
            <div className="hidden md:block md:row-span-1 rounded-xl overflow-hidden">
              <img 
                src={propertyImages[2]}
                alt={property.title + " - image 3"}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setActiveImageIndex(2)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Property details */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl mb-8">
                <div>
                  <div className="flex items-center mb-1">
                    <BedDouble className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="font-semibold">{property.bedrooms}</div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <Bath className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="font-semibold">{property.bathrooms}</div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <Square className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Area</span>
                  </div>
                  <div className="font-semibold">{property.squareFeet} sq ft</div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Year Built</span>
                  </div>
                  <div className="font-semibold">2018</div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Property Type</span>
                  </div>
                  <div className="font-semibold capitalize">{property.propertyType}</div>
                </div>
              </div>
              
              {/* Tabs */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-6 border rounded-xl mt-6">
                  <h3 className="text-lg font-semibold mb-4">About This Property</h3>
                  <p className="text-muted-foreground mb-4">
                    This exceptional {property.propertyType} boasts {property.bedrooms} bedrooms and {property.bathrooms} bathrooms, 
                    offering {property.squareFeet} square feet of thoughtfully designed living space. Located in a prime area, 
                    the property features modern amenities and elegant finishes throughout.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The open floor plan creates a seamless flow between living areas, while large windows provide 
                    abundant natural light and stunning views. The gourmet kitchen is equipped with high-end appliances, 
                    custom cabinetry, and a spacious island perfect for entertaining.
                  </p>
                  <p className="text-muted-foreground">
                    Outside, you'll find beautifully landscaped grounds and a private patio area ideal for relaxation 
                    and outdoor dining. This property offers the perfect blend of luxury, comfort, and convenience in a 
                    highly desirable location.
                  </p>
                </TabsContent>
                <TabsContent value="features" className="p-6 border rounded-xl mt-6">
                  <h3 className="text-lg font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Interior Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Hardwood flooring
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Central air conditioning
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Gourmet kitchen with island
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Marble countertops
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Walk-in closets
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Custom lighting fixtures
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Exterior Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Private patio
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Landscaped garden
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Two-car garage
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Security system
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Outdoor lighting
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Sprinkler system
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="p-6 border rounded-xl mt-6">
                  <h3 className="text-lg font-semibold mb-4">Location Information</h3>
                  <div className="bg-slate-100 w-full h-64 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  </div>
                  <h4 className="font-medium mb-2">Nearby Amenities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Schools: Lincoln Elementary (0.5 miles), Washington High School (1.2 miles)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Shopping: Metro Mall (0.8 miles), Riverside Shopping Center (1.5 miles)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Dining: Various restaurants within 1 mile radius
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Parks: Riverside Park (0.3 miles), Community Recreation Center (1.1 miles)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Transit: Bus station (0.2 miles), Train station (1 mile)
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Contact card */}
              <div className="border rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Interested in this property?</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      rows={4}
                      placeholder="I'm interested in this property..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-4 mb-6">
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center"
                  onClick={handleSaveToggle}
                >
                  <Heart className={cn("h-4 w-4 mr-2", isSaved ? "fill-red-500 text-red-500" : "")} />
                  {isSaved ? 'Saved' : 'Save'}
                </Button>
                
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              {/* Agent info */}
              <div className="border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Listed by</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Senior Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <span className="w-5 inline-block">📱</span>
                    (123) 456-7890
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <span className="w-5 inline-block">✉️</span>
                    john.doe@realtynest.com
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">View Agent Profile</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar properties */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
