
import { PropertyType } from '../components/PropertyCard';

export const properties: PropertyType[] = [
  // Westlands properties
  {
    id: "1",
    title: "Modern Single Room in Westlands",
    address: "Waiyaki Way, Westlands, Nairobi",
    price: 7000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 200,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "single",
    location: "Westlands",
    description: "Cozy single room with modern finishes, located in a secure compound with access to shared amenities.",
    floor: 3,
    totalFloors: 6
  },
  {
    id: "2",
    title: "Spacious Bedsitter in Westlands",
    address: "Parklands Road, Westlands, Nairobi",
    price: 11000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 300,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    featured: true,
    type: "rent",
    propertyType: "bedsitter",
    location: "Westlands",
    description: "Well-lit bedsitter with modern finishes, 24-hour security, and backup water supply.",
    floor: 5,
    totalFloors: 10
  },
  {
    id: "3",
    title: "Luxurious 2 Bedroom Apartment in Westlands",
    address: "Westlands Road, Nairobi",
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 850,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    featured: true,
    type: "rent",
    propertyType: "apartment",
    location: "Westlands",
    description: "Modern apartment with open-plan kitchen, balcony, and master ensuite. Located in a secure compound with parking.",
    floor: 8,
    totalFloors: 12
  },
  
  // Kilimani properties
  {
    id: "4",
    title: "Cozy Single Room in Kilimani",
    address: "Argwings Kodhek Road, Kilimani, Nairobi",
    price: 6500,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 180,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "single",
    location: "Kilimani",
    description: "Well-maintained single room with shared kitchen and bathroom facilities in a quiet neighborhood.",
    floor: 2,
    totalFloors: 3
  },
  {
    id: "5",
    title: "Stylish Bedsitter in Kilimani",
    address: "Rose Avenue, Kilimani, Nairobi",
    price: 15000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 350,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "bedsitter",
    location: "Kilimani",
    description: "Modern bedsitter with private bathroom, kitchenette, and balcony offering city views.",
    floor: 4,
    totalFloors: 7
  },
  {
    id: "6",
    title: "Elegant 3 Bedroom Apartment in Kilimani",
    address: "Dennis Pritt Road, Kilimani, Nairobi",
    price: 45000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    featured: true,
    type: "rent",
    propertyType: "apartment",
    location: "Kilimani",
    description: "Spacious apartment with modern finishes, large balcony, dining area, and secure parking.",
    floor: 6,
    totalFloors: 14
  },
  
  // Upper Hill properties
  {
    id: "7",
    title: "Budget Single Room in Upper Hill",
    address: "Elgon Road, Upper Hill, Nairobi",
    price: 5500,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 160,
    image: "https://images.unsplash.com/photo-1536399651773-d8098d34f65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "single",
    location: "Upper Hill",
    description: "Affordable single room in a well-maintained building with shared facilities.",
    floor: 2,
    totalFloors: 6
  },
  {
    id: "8",
    title: "Modern Bedsitter in Upper Hill",
    address: "Hospital Road, Upper Hill, Nairobi",
    price: 12000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 320,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "bedsitter",
    location: "Upper Hill",
    description: "Well-designed bedsitter with private bathroom and kitchenette. Includes WIFI and water supply.",
    floor: 5,
    totalFloors: 10
  },
  {
    id: "9",
    title: "Executive 2 Bedroom Apartment in Upper Hill",
    address: "Upper Hill Road, Nairobi",
    price: 30000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 900,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "apartment",
    location: "Upper Hill",
    description: "Modern apartment with high-end finishes, spacious bedrooms, and stunning city views.",
    floor: 8,
    totalFloors: 12
  },
  
  // South C properties
  {
    id: "10",
    title: "Affordable Single Room in South C",
    address: "Muhoho Avenue, South C, Nairobi",
    price: 5000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 150,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "single",
    location: "South C",
    description: "Budget-friendly single room with basic amenities and good security.",
    floor: 1,
    totalFloors: 3
  },
  {
    id: "11",
    title: "Comfortable Bedsitter in South C",
    address: "Mugoya Estate, South C, Nairobi",
    price: 9000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 280,
    image: "https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "bedsitter",
    location: "South C",
    description: "Cozy bedsitter with private bathroom, kitchenette, and 24-hour security.",
    floor: 3,
    totalFloors: 6
  },
  {
    id: "12",
    title: "Family-Friendly 3 Bedroom Apartment in South C",
    address: "Ole Shapara Road, South C, Nairobi",
    price: 40000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1100,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    featured: true,
    type: "rent",
    propertyType: "apartment",
    location: "South C",
    description: "Spacious apartment ideal for families with children's play area, secure compound, and ample parking.",
    floor: 5,
    totalFloors: 7
  },
  
  // South B properties
  {
    id: "13",
    title: "Budget Single Room in South B",
    address: "Kapiti Road, South B, Nairobi",
    price: 5200,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 170,
    image: "https://images.unsplash.com/photo-1585129777188-9c240b3889c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "single",
    location: "South B",
    description: "Clean and affordable single room in a quiet neighborhood with good transport links.",
    floor: 2,
    totalFloors: 3
  },
  {
    id: "14",
    title: "Spacious Bedsitter in South B",
    address: "Mariakani Estate, South B, Nairobi",
    price: 10000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 300,
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "bedsitter",
    location: "South B",
    description: "Well-maintained bedsitter with private entrance, kitchenette, and bathroom.",
    floor: 3,
    totalFloors: 6
  },
  {
    id: "15",
    title: "Premium 2 Bedroom Apartment in South B",
    address: "Mombasa Road, South B, Nairobi",
    price: 28000,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 800,
    image: "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    type: "rent",
    propertyType: "apartment",
    location: "South B",
    description: "Modern apartment with open-plan living space, balcony, and secure parking.",
    floor: 4,
    totalFloors: 6
  }
];

// Adding 135 more properties to reach the 150 requested property count
for (let i = 16; i <= 150; i++) {
  const locations = ["Westlands", "Kilimani", "Upper Hill", "South C", "South B"];
  const location = locations[Math.floor(Math.random() * locations.length)];
  
  const propertyTypes = ["single", "bedsitter", "apartment"];
  const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
  
  let bedrooms = 1;
  let price = 5000;
  let title = "";
  
  if (propertyType === "single") {
    bedrooms = 1;
    price = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
    title = `Affordable Single Room in ${location}`;
  } else if (propertyType === "bedsitter") {
    bedrooms = 1;
    price = Math.floor(Math.random() * (15000 - 7500 + 1)) + 7500;
    title = `Modern Bedsitter in ${location}`;
  } else {
    bedrooms = Math.floor(Math.random() * 3) + 1;
    if (bedrooms === 1) {
      price = Math.floor(Math.random() * (22000 - 15000 + 1)) + 15000;
      title = `Cozy 1 Bedroom Apartment in ${location}`;
    } else if (bedrooms === 2) {
      price = Math.floor(Math.random() * (35000 - 25000 + 1)) + 25000;
      title = `Spacious 2 Bedroom Apartment in ${location}`;
    } else {
      price = Math.floor(Math.random() * (50000 - 35000 + 1)) + 35000;
      title = `Luxury 3 Bedroom Apartment in ${location}`;
    }
  }
  
  const totalFloors = [3, 6, 7, 10, 12, 14][Math.floor(Math.random() * 6)];
  const floor = Math.floor(Math.random() * totalFloors) + 1;
  
  const images = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
  ];
  
  properties.push({
    id: i.toString(),
    title: title,
    address: `Random Street, ${location}, Nairobi`,
    price: price,
    bedrooms: bedrooms,
    bathrooms: Math.ceil(bedrooms / 2),
    squareFeet: 150 + bedrooms * 200,
    image: images[Math.floor(Math.random() * images.length)],
    type: "rent",
    propertyType: propertyType,
    location: location,
    description: `Well-maintained ${propertyType} with great amenities in ${location} area.`,
    floor: floor,
    totalFloors: totalFloors,
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
