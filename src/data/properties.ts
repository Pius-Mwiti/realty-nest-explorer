import { PropertyType } from '../components/PropertyCard';

// New images from Unsplash (high-quality furnished apartments)
const luxuryImages = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1592928302636-c83cf1ffe27b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
];

// Additional premium furnished properties
const premiumImages = [
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1561503972-839d068075aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
];

// Base properties using the new images
export const properties: PropertyType[] = [
  // Westlands properties
  {
    id: "1",
    title: "Modern 1 Bedroom Apartment in Westlands",
    address: "Waiyaki Way, Westlands, Nairobi",
    price: 7500000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    image: luxuryImages[0],
    type: "sale",
    propertyType: "apartment",
    location: "Westlands",
    description: "Luxurious 1 bedroom apartment with modern finishes, located in a secure compound with access to shared amenities.",
    floor: 3,
    totalFloors: 6
  },
  {
    id: "2",
    title: "Spacious 1 Bedroom Apartment in Westlands",
    address: "Parklands Road, Westlands, Nairobi",
    price: 8500000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 800,
    image: luxuryImages[1],
    featured: true,
    type: "sale",
    propertyType: "apartment",
    location: "Westlands",
    description: "Well-lit 1 bedroom apartment with modern finishes, 24-hour security, and backup water supply.",
    floor: 5,
    totalFloors: 10
  },
  {
    id: "3",
    title: "Luxurious 2 Bedroom Apartment in Westlands",
    address: "Westlands Road, Nairobi",
    price: 15000000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    image: luxuryImages[2],
    featured: true,
    type: "sale",
    propertyType: "apartment",
    location: "Westlands",
    description: "Modern apartment with open-plan kitchen, balcony, and master ensuite. Located in a secure compound with parking.",
    floor: 8,
    totalFloors: 12
  },
  
  // Kilimani properties
  {
    id: "4",
    title: "Elegant 1 Bedroom Apartment in Kilimani",
    address: "Argwings Kodhek Road, Kilimani, Nairobi",
    price: 9000000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 780,
    image: luxuryImages[3],
    type: "sale",
    propertyType: "apartment",
    location: "Kilimani",
    description: "Well-maintained 1 bedroom apartment with modern kitchen and spacious living area in a quiet neighborhood.",
    floor: 2,
    totalFloors: 6
  },
  {
    id: "5",
    title: "Premium 2 Bedroom Apartment in Kilimani",
    address: "Rose Avenue, Kilimani, Nairobi",
    price: 18000000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1350,
    image: luxuryImages[4],
    type: "sale",
    propertyType: "apartment",
    location: "Kilimani",
    description: "Modern 2 bedroom apartment with private bathroom, full kitchen, and balcony offering city views.",
    floor: 4,
    totalFloors: 7
  },
  {
    id: "6",
    title: "Elegant 3 Bedroom Apartment in Kilimani",
    address: "Dennis Pritt Road, Kilimani, Nairobi",
    price: 25000000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    image: luxuryImages[5],
    featured: true,
    type: "sale",
    propertyType: "apartment",
    location: "Kilimani",
    description: "Spacious apartment with modern finishes, large balcony, dining area, and secure parking.",
    floor: 6,
    totalFloors: 14
  },
  
  // Upper Hill properties
  {
    id: "7",
    title: "Spacious 1 Bedroom Apartment in Upper Hill",
    address: "Elgon Road, Upper Hill, Nairobi",
    price: 10500000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 850,
    image: luxuryImages[6],
    type: "sale",
    propertyType: "apartment",
    location: "Upper Hill",
    description: "Elegant 1 bedroom apartment in a prestigious building with excellent amenities and facilities.",
    floor: 2,
    totalFloors: 6
  },
  {
    id: "8",
    title: "Modern 2 Bedroom Apartment in Upper Hill",
    address: "Hospital Road, Upper Hill, Nairobi",
    price: 19500000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1320,
    image: luxuryImages[7],
    type: "sale",
    propertyType: "apartment",
    location: "Upper Hill",
    description: "Well-designed 2 bedroom apartment with high-end finishes. Includes WIFI and water supply.",
    floor: 5,
    totalFloors: 10
  },
  {
    id: "9",
    title: "Executive 3 Bedroom Apartment in Upper Hill",
    address: "Upper Hill Road, Nairobi",
    price: 30000000,
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2100,
    image: luxuryImages[8],
    type: "sale",
    propertyType: "apartment",
    location: "Upper Hill",
    description: "Luxury apartment with high-end finishes, spacious bedrooms, and stunning city views.",
    floor: 8,
    totalFloors: 12
  },
  
  // South C properties
  {
    id: "10",
    title: "Compact 1 Bedroom Apartment in South C",
    address: "Muhoho Avenue, South C, Nairobi",
    price: 6500000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    image: luxuryImages[9],
    type: "sale",
    propertyType: "apartment",
    location: "South C",
    description: "Well-maintained 1 bedroom apartment with modern amenities and good security.",
    floor: 1,
    totalFloors: 4
  },
  {
    id: "11",
    title: "Comfortable 2 Bedroom Apartment in South C",
    address: "Mugoya Estate, South C, Nairobi",
    price: 12000000,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    image: luxuryImages[10],
    type: "sale",
    propertyType: "apartment",
    location: "South C",
    description: "Cozy 2 bedroom apartment with modern kitchen, spacious living area, and 24-hour security.",
    floor: 3,
    totalFloors: 6
  },
  {
    id: "12",
    title: "Family-Friendly 3 Bedroom Apartment in South C",
    address: "Ole Shapara Road, South C, Nairobi",
    price: 17500000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    image: luxuryImages[11],
    featured: true,
    type: "sale",
    propertyType: "apartment",
    location: "South C",
    description: "Spacious apartment ideal for families with children's play area, secure compound, and ample parking.",
    floor: 5,
    totalFloors: 7
  }
];

// Adding more properties using the premium images
for (let i = 13; i <= 150; i++) {
  const locations = ["Westlands", "Kilimani", "Upper Hill", "South C", "South B"];
  const location = locations[Math.floor(Math.random() * locations.length)];
  
  const propertyTypes = ["apartment", "house"] as const;
  const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
  
  let bedrooms = 1;
  let price = 5000000;
  let title = "";
  
  if (propertyType === "apartment") {
    bedrooms = Math.floor(Math.random() * 4) + 1; // 1-4 bedrooms
    if (bedrooms === 1) {
      price = Math.floor(Math.random() * (12000000 - 6500000 + 1)) + 6500000;
      title = `Cozy 1 Bedroom Apartment in ${location}`;
    } else if (bedrooms === 2) {
      price = Math.floor(Math.random() * (22000000 - 12000000 + 1)) + 12000000;
      title = `Spacious 2 Bedroom Apartment in ${location}`;
    } else if (bedrooms === 3) {
      price = Math.floor(Math.random() * (35000000 - 22000000 + 1)) + 22000000;
      title = `Luxury 3 Bedroom Apartment in ${location}`;
    } else {
      price = Math.floor(Math.random() * (45000000 - 35000000 + 1)) + 35000000;
      title = `Premium 4 Bedroom Apartment in ${location}`;
    }
  } else if (propertyType === "house") {
    bedrooms = Math.floor(Math.random() * 2) + 3; // 3-4 bedrooms
    price = Math.floor(Math.random() * (65000000 - 35000000 + 1)) + 35000000;
    title = `${bedrooms} Bedroom House in ${location}`;
  }
  
  const totalFloors = [3, 6, 7, 10, 12, 14][Math.floor(Math.random() * 6)];
  const floor = Math.floor(Math.random() * totalFloors) + 1;
  
  // Use premium images and luxury images in a rotating pattern
  const imageIndex = (i - 13) % (luxuryImages.length + premiumImages.length);
  const image = imageIndex < luxuryImages.length 
    ? luxuryImages[imageIndex] 
    : premiumImages[imageIndex - luxuryImages.length];
  
  properties.push({
    id: i.toString(),
    title: title,
    address: `Prime Location, ${location}, Nairobi`,
    price: price,
    bedrooms: bedrooms,
    bathrooms: Math.ceil(bedrooms / 2),
    squareFeet: 150 + bedrooms * 300,
    image: image,
    type: "sale",
    propertyType: propertyType,
    location: location,
    description: `Well-maintained ${propertyType} with great amenities in ${location} area.`,
    floor: propertyType === 'apartment' ? floor : undefined,
    totalFloors: propertyType === 'apartment' ? totalFloors : undefined,
    featured: i % 20 === 0 // Make every 20th property featured
  });
}

export const getPropertyById = (id: string): PropertyType | undefined => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = (): PropertyType[] => {
  return properties.filter(property => property.featured);
};

export const getPropertiesByType = (type: 'sale' | 'rent'): PropertyType[] => {
  return properties.filter(property => property.type === type);
};

export const getPropertiesByLocation = (location: string): PropertyType[] => {
  return properties.filter(property => property.location === location);
};

export const getPropertiesByPropertyType = (propertyType: string): PropertyType[] => {
  return properties.filter(property => property.propertyType === propertyType);
};

export const filterProperties = (filters: {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: string;
  location?: string;
  status?: 'sale' | 'rent';
}): PropertyType[] => {
  return properties.filter(property => {
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.beds && property.bedrooms < filters.beds) return false;
    if (filters.baths && property.bathrooms < filters.baths) return false;
    if (filters.propertyType && property.propertyType !== filters.propertyType) return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.status && property.type !== filters.status) return false;
    
    return true;
  });
};
