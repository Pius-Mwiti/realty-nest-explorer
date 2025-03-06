
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Building, ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPropertyById, properties } from '../data/properties';
import { Button } from '@/components/ui/button';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState(getPropertyById(id || ''));
  const [similarProperties, setSimilarProperties] = useState(properties.slice(0, 3));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (property) {
      document.title = `${property.title} - Smart Homes Real Estate`;
      // Get similar properties from same location
      const similar = properties
        .filter(p => p.id !== property.id && p.location === property.location)
        .slice(0, 3);
      setSimilarProperties(similar);
    }
    setIsLoaded(true);
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the property you're looking for.</p>
            <Link 
              to="/properties" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hello, I'm interested in your property: ${property.title} (${property.propertyType}) in ${property.location} priced at ${formatPrice(property.price)}/month. Can I schedule a viewing?`
    );
    return `https://wa.me/254708333761?text=${message}`;
  };

  const getEmailLink = () => {
    const subject = encodeURIComponent(`Inquiry about ${property.title} in ${property.location}`);
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in your property:\n\n${property.title}\nLocation: ${property.location}\nPrice: ${formatPrice(property.price)}/month\n\nI would like to schedule a viewing. Please contact me at your earliest convenience.\n\nThank you.`
    );
    return `mailto:daviszack043@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link 
              to="/properties" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-[60vh] object-cover"
                />
              </div>
              
              <div className="mt-8">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(property.price)}
                    <span className="text-sm font-normal">/month</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-200">
                  <div className="flex flex-col items-center">
                    <BedDouble className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">Bedrooms</span>
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">Bathrooms</span>
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Square className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">Area</span>
                    <span className="font-semibold">{property.squareFeet} sq ft</span>
                  </div>
                  {property.floor && (
                    <div className="flex flex-col items-center">
                      <Building className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm text-gray-600">Floor</span>
                      <span className="font-semibold">{property.floor}/{property.totalFloors}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description || `This ${property.propertyType} is located in the prime area of ${property.location}, Nairobi. It features ${property.bedrooms} bedroom(s) and ${property.bathrooms} bathroom(s), with approximately ${property.squareFeet} square feet of living space. The property is well-maintained and located in a secure compound with good amenities.`}
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Property Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Property ID</span>
                      <span className="font-semibold">{property.id}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Property Type</span>
                      <span className="font-semibold capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Location</span>
                      <span className="font-semibold">{property.location}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Status</span>
                      <span className="font-semibold">For Rent</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Price</span>
                      <span className="font-semibold">{formatPrice(property.price)}/month</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Area</span>
                      <span className="font-semibold">{property.squareFeet} sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Contact Agent</h2>
                
                <div className="space-y-6 mb-8">
                  <a 
                    href="tel:0708333761"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <span>0708333761</span>
                  </a>
                  
                  <a 
                    href="mailto:daviszack043@gmail.com"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>daviszack043@gmail.com</span>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    className="w-full"
                  >
                    <a href={`tel:0708333761`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Agent
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full"
                  >
                    <a 
                      href={getEmailLink()}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {similarProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProperties.map(prop => (
                  <Link 
                    key={prop.id}
                    to={`/property/${prop.id}`}
                    className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img 
                        src={prop.image} 
                        alt={prop.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          For Rent
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-bold">{prop.title}</h3>
                        <div className="flex items-center text-white/90 text-sm">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          <span className="truncate">{prop.address}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 capitalize">{prop.propertyType} in {prop.location}</span>
                        <span className="font-bold text-primary">{formatPrice(prop.price)}/mo</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{prop.bedrooms} Bed{prop.bedrooms !== 1 ? 's' : ''}</span>
                        <span>{prop.bathrooms} Bath{prop.bathrooms !== 1 ? 's' : ''}</span>
                        <span>{prop.squareFeet} sq ft</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
