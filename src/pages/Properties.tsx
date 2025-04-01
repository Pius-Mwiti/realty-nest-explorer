
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import SearchFilters from '../components/SearchFilters';
import { properties } from '../data/properties';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Properties = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get('type');
  const propertyTypeParam = queryParams.get('propertyType');
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilters, setActiveFilters] = useState<{
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    beds?: number;
    baths?: number;
    propertyType?: string;
  }>({
    type: typeParam || undefined,
    propertyType: propertyTypeParam || undefined
  });
  
  useEffect(() => {
    // Apply initial filters from URL if present
    if (typeParam || propertyTypeParam) {
      applyFilters({ 
        type: typeParam || undefined,
        propertyType: propertyTypeParam || undefined
      });
    }
  }, [typeParam, propertyTypeParam]);
  
  const applyFilters = (filters: any) => {
    let filtered = [...properties];
    
    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type);
    }
    
    if (filters.minPrice) {
      filtered = filtered.filter(property => property.price >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(property => property.price <= filters.maxPrice);
    }
    
    if (filters.beds) {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.beds));
    }
    
    if (filters.baths) {
      filtered = filtered.filter(property => property.bathrooms >= parseInt(filters.baths));
    }
    
    if (filters.propertyType) {
      if (filters.propertyType === 'all') {
        // No filtering needed for "all"
      } else if (filters.propertyType === '1bedroom') {
        filtered = filtered.filter(property => 
          property.propertyType === 'apartment' && property.bedrooms === 1
        );
      } else if (filters.propertyType === '2bedroom') {
        filtered = filtered.filter(property => 
          property.propertyType === 'apartment' && property.bedrooms === 2
        );
      } else if (filters.propertyType === '3bedroom') {
        filtered = filtered.filter(property => 
          property.propertyType === 'apartment' && property.bedrooms === 3
        );
      } else if (filters.propertyType === '4bedroom') {
        filtered = filtered.filter(property => 
          property.propertyType === 'apartment' && property.bedrooms === 4
        );
      } else {
        filtered = filtered.filter(property => property.propertyType === filters.propertyType);
      }
    }
    
    setFilteredProperties(filtered);
    setActiveFilters(filters);
    
    // Update URL parameters
    const params = new URLSearchParams();
    if (filters.type) params.set('type', filters.type);
    if (filters.propertyType) params.set('propertyType', filters.propertyType);
    if (filters.beds) params.set('beds', filters.beds);
    if (filters.baths) params.set('baths', filters.baths);
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };
  
  const clearFilters = () => {
    setFilteredProperties(properties);
    setActiveFilters({});
    
    navigate({
      pathname: location.pathname
    });
  };
  
  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handlePropertyTypeChange = (value: string) => {
    applyFilters({ ...activeFilters, propertyType: value });
  };
  
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar on desktop / Collapsible panel on mobile */}
            <aside className={cn(
              "lg:w-80 lg:flex-shrink-0",
              "lg:block", // Always visible on desktop
              showFilters ? "block fixed inset-0 z-40 bg-white p-4 lg:p-0 lg:static lg:bg-transparent" : "hidden" // Toggle on mobile
            )}>
              {showFilters && (
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={toggleFilters}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}
              
              <SearchFilters 
                variant="detailed"
                className="sticky top-24"
                onSearch={applyFilters}
              />
            </aside>
            
            {/* Main content */}
            <div className="lg:flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Properties</h1>
                  <p className="text-muted-foreground">
                    {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={toggleFilters}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  
                  <Select onValueChange={handlePropertyTypeChange} defaultValue={activeFilters.propertyType || ""}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="apartment">Apartments</SelectItem>
                      <SelectItem value="house">Houses</SelectItem>
                      <SelectItem value="1bedroom">1 Bedroom</SelectItem>
                      <SelectItem value="2bedroom">2 Bedroom</SelectItem>
                      <SelectItem value="3bedroom">3 Bedroom</SelectItem>
                      <SelectItem value="4bedroom">4 Bedroom</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="border rounded-md flex">
                    <button
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === 'grid' ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setViewMode('grid')}
                      aria-label="Grid view"
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === 'list' ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setViewMode('list')}
                      aria-label="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b">
                  <span className="text-sm font-medium">Active filters:</span>
                  
                  {activeFilters.type && (
                    <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                      {activeFilters.type === 'sale' ? 'For Sale' : 'For Sale'}
                      <button
                        onClick={() => applyFilters({ ...activeFilters, type: undefined })}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {activeFilters.propertyType && (
                    <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                      {activeFilters.propertyType === 'all' 
                        ? 'All Properties'
                        : activeFilters.propertyType === '1bedroom'
                          ? '1 Bedroom'
                          : activeFilters.propertyType === '2bedroom'
                            ? '2 Bedroom'
                            : activeFilters.propertyType === '3bedroom'
                              ? '3 Bedroom'
                              : activeFilters.propertyType === '4bedroom'
                                ? '4 Bedroom'
                                : activeFilters.propertyType.charAt(0).toUpperCase() + activeFilters.propertyType.slice(1)}
                      <button
                        onClick={() => applyFilters({ ...activeFilters, propertyType: undefined })}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {activeFilters.beds && (
                    <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                      {activeFilters.beds}+ Beds
                      <button
                        onClick={() => applyFilters({ ...activeFilters, beds: undefined })}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {activeFilters.baths && (
                    <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                      {activeFilters.baths}+ Baths
                      <button
                        onClick={() => applyFilters({ ...activeFilters, baths: undefined })}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  <button
                    onClick={clearFilters}
                    className="text-primary text-sm font-medium hover:underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              )}
              
              {filteredProperties.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 border rounded-xl">
                  <p className="text-lg text-muted-foreground mb-4">No properties found matching your criteria.</p>
                  <Button onClick={clearFilters} variant="outline">Clear filters</Button>
                </div>
              ) : (
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col space-y-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} className="!block md:flex" />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
