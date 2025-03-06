
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold flex items-center">
              <span className="text-primary">Realty</span>
              <span className="text-foreground">Nest</span>
            </Link>
            <p className="text-muted-foreground">
              Discovering exceptional properties tailored to your lifestyle and aspirations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/saved" className="text-muted-foreground hover:text-primary transition-colors">Saved Properties</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=residential" className="text-muted-foreground hover:text-primary transition-colors">Residential</Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-muted-foreground hover:text-primary transition-colors">Commercial</Link>
              </li>
              <li>
                <Link to="/properties?type=luxury" className="text-muted-foreground hover:text-primary transition-colors">Luxury</Link>
              </li>
              <li>
                <Link to="/properties?type=land" className="text-muted-foreground hover:text-primary transition-colors">Land</Link>
              </li>
              <li>
                <Link to="/properties?type=rental" className="text-muted-foreground hover:text-primary transition-colors">Rental</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Property Lane, Real Estate City, RE 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:info@realtynest.com" className="text-muted-foreground hover:text-primary transition-colors">info@realtynest.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-slate-200 text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RealtyNest. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
