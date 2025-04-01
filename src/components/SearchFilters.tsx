
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchFiltersProps {
  className?: string;
  variant?: 'simple' | 'detailed';
  onSearch?: (filters: any) => void;
}

const SearchFilters = ({ className, variant = 'simple', onSearch }: SearchFiltersProps) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [advancedOpen, setAdvancedOpen] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        location,
        propertyType,
        priceRange,
        bedrooms,
        bathrooms
      });
    }
  };

  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-lg",
      className
    )}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="City, neighborhood, or address"
              className="pl-10 w-full rounded-lg border border-input bg-background py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <select
                className="w-full rounded-lg border border-input bg-background py-3 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartments</option>
                <option value="house">Houses</option>
                <option value="1bedroom">1 Bedroom</option>
                <option value="2bedroom">2 Bedroom</option>
                <option value="3bedroom">3 Bedroom</option>
                <option value="4bedroom">4 Bedroom</option>
                <option value="all">All Properties</option>
              </select>
            </div>
            
            <div>
              <select
                className="w-full rounded-lg border border-input bg-background py-3 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="">Bedrooms</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>
            
            <div>
              <select
                className="w-full rounded-lg border border-input bg-background py-3 px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              >
                <option value="">Bathrooms</option>
                <option value="1">1+ Bathrooms</option>
                <option value="2">2+ Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          {variant === 'detailed' && (
            <>
              <button
                type="button"
                className="flex items-center justify-center text-sm text-primary font-medium mt-2"
                onClick={() => setAdvancedOpen(!advancedOpen)}
              >
                Advanced Search
                <ChevronDown className={cn(
                  "h-4 w-4 ml-1 transition-transform",
                  advancedOpen ? "rotate-180" : ""
                )} />
              </button>
              
              {advancedOpen && (
                <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      </label>
                      <Slider
                        defaultValue={[0, 20000000]}
                        max={50000000}
                        step={500000}
                        onValueChange={(values) => setPriceRange(values as [number, number])}
                        className="my-4"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Property Status</label>
                        <select className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm">
                          <option value="">Any</option>
                          <option value="sale">For Sale</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Square Feet</label>
                        <select className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm">
                          <option value="">Any</option>
                          <option value="500-1000">500-1,000 sq ft</option>
                          <option value="1000-1500">1,000-1,500 sq ft</option>
                          <option value="1500-2000">1,500-2,000 sq ft</option>
                          <option value="2000-3000">2,000-3,000 sq ft</option>
                          <option value="3000+">3,000+ sq ft</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Year Built</label>
                        <select className="w-full rounded-lg border border-input bg-background py-2 px-3 text-sm">
                          <option value="">Any</option>
                          <option value="2020+">2020 or newer</option>
                          <option value="2010-2020">2010-2020</option>
                          <option value="2000-2010">2000-2010</option>
                          <option value="1990-2000">1990-2000</option>
                          <option value="1980-1990">1980-1990</option>
                          <option value="pre-1980">Before 1980</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-primary text-white hover:bg-primary/90"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Apply Filters
                      </Button>
                      
                      <Button 
                        type="button" 
                        variant="outline"
                        className="border-slate-200 text-muted-foreground hover:bg-slate-50"
                        onClick={() => {
                          setLocation('');
                          setPropertyType('');
                          setPriceRange([0, 20000000]);
                          setBedrooms('');
                          setBathrooms('');
                        }}
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
