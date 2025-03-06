
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavItem = ({ path, label }: { path: string; label: string }) => (
    <Link 
      to={path} 
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-300",
        isActive(path) 
          ? "text-primary" 
          : "text-foreground/80 hover:text-primary",
      )}
    >
      {label}
      {isActive(path) && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-full" />
      )}
    </Link>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold flex items-center"
          >
            <span className="text-primary">Realty</span>
            <span className="text-foreground">Nest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem path="/" label="Home" />
            <NavItem path="/properties" label="Properties" />
            <NavItem path="/about" label="About" />
            <NavItem path="/contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/saved" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Saved Properties
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col pt-20 p-6 space-y-6">
          <Link 
            to="/" 
            className={cn(
              "px-4 py-3 text-base font-medium rounded-md transition-colors",
              isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/properties" 
            className={cn(
              "px-4 py-3 text-base font-medium rounded-md transition-colors",
              isActive("/properties") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Properties
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "px-4 py-3 text-base font-medium rounded-md transition-colors",
              isActive("/about") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "px-4 py-3 text-base font-medium rounded-md transition-colors",
              isActive("/contact") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 border-t">
            <Link
              to="/saved"
              className="block px-4 py-3 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Saved Properties
            </Link>
            
            <Link
              to="/contact"
              className="mt-3 block w-full px-4 py-3 text-base font-medium text-center text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
