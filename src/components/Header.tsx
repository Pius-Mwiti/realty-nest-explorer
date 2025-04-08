
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          ? "py-3 bg-white/95 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold flex items-center"
          >
            <span className="text-primary">SMART HOMES</span>
            <span className="text-foreground ml-1">Real Estate</span>
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
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted/80 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-600 font-bold" strokeWidth={2.5} />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/98 backdrop-blur-lg md:hidden transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col pt-24 p-6 space-y-4 h-full overflow-y-auto">
          <Link 
            to="/" 
            className={cn(
              "px-5 py-4 text-base font-medium rounded-md transition-colors",
              isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/properties" 
            className={cn(
              "px-5 py-4 text-base font-medium rounded-md transition-colors",
              isActive("/properties") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Properties
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "px-5 py-4 text-base font-medium rounded-md transition-colors",
              isActive("/about") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "px-5 py-4 text-base font-medium rounded-md transition-colors",
              isActive("/contact") ? "bg-primary/10 text-primary" : "hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-6 border-t border-muted">
            <Link
              to="/saved"
              className="block px-5 py-4 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Saved Properties
            </Link>
            
            <Link
              to="/contact"
              className="mt-4 block w-full px-5 py-4 text-base font-medium text-center text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
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
