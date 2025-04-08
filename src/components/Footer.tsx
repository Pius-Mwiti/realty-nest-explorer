import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold flex items-center">
              <span className="text-primary">SMART</span>
              <span className="text-foreground"> HOMES real estate</span>
            </Link>
            <p className="text-muted-foreground">
              Finding you quality and affordable properties in Nairobi's prime locations.
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?propertyType=single" className="text-muted-foreground hover:text-primary transition-colors">Single Rooms</Link>
              </li>
              <li>
                <Link to="/properties?propertyType=bedsitter" className="text-muted-foreground hover:text-primary transition-colors">Bedsitters</Link>
              </li>
              <li>
                <Link to="/properties?propertyType=apartment" className="text-muted-foreground hover:text-primary transition-colors">Apartments</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?location=Westlands" className="text-muted-foreground hover:text-primary transition-colors">Westlands</Link>
              </li>
              <li>
                <Link to="/properties?location=Kilimani" className="text-muted-foreground hover:text-primary transition-colors">Kilimani</Link>
              </li>
              <li>
                <Link to="/properties?location=Upper Hill" className="text-muted-foreground hover:text-primary transition-colors">Upper Hill</Link>
              </li>
              <li>
                <Link to="/properties?location=South C" className="text-muted-foreground hover:text-primary transition-colors">South C</Link>
              </li>
              <li>
                <Link to="/properties?location=South B" className="text-muted-foreground hover:text-primary transition-colors">South B</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+254708333761" className="text-muted-foreground hover:text-primary transition-colors">0708333761</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:daviszack043@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">daviszack043@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MessageCircle size={18} className="mr-2 text-primary" />
                <a href="https://wa.me/254708333761" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-slate-200 text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smart Homes Real Estate. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-4 italic">Developed by: Pius Mwiti James (Mirrors Technology +254729990696)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
