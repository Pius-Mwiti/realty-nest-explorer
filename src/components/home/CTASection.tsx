
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const emailSubject = encodeURIComponent("Property Inquiry - Smart Homes Real Estate");
  const emailBody = encodeURIComponent("Hello,\n\nI'm interested in booking a property viewing. Please contact me with more information.\n\nThank you.");
  
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your properties. Can you provide more information?");
  
  return (
    <section className="py-24 bg-primary relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Find Your Perfect Home?</h2>
          <p className="text-white/90 text-lg mb-10">
            Connect with our agents today to start your journey toward finding the ideal rental property in Nairobi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <a 
              href={`tel:0708333761`}
              className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors"
            >
              <Phone className="h-10 w-10 text-white mb-4" />
              <h3 className="text-white font-semibold mb-1">Call Us</h3>
              <p className="text-white/90">0708333761</p>
            </a>
            
            <a 
              href={`mailto:daviszack043@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors"
            >
              <Mail className="h-10 w-10 text-white mb-4" />
              <h3 className="text-white font-semibold mb-1">Email Us</h3>
              <p className="text-white/90">daviszack043@gmail.com</p>
            </a>
            
            <a 
              href={`https://wa.me/254708333761?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors"
            >
              <MessageCircle className="h-10 w-10 text-white mb-4" />
              <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
              <p className="text-white/90">0708333761</p>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="tel:0708333761">Call Now</a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href={`mailto:daviszack043@gmail.com?subject=${emailSubject}&body=${emailBody}`}>
                Send Email Inquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
