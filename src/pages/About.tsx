
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Award, Shield, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About Us - SMART HOMES Real Estate";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">About SMART HOMES Real Estate</h1>
              <p className="text-lg text-slate-600">
                Your trusted partner in finding quality and affordable rental properties in Nairobi.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-slate-600 mb-4">
                  SMART HOMES Real Estate was established with a simple yet powerful mission: to connect people with quality rental properties in Nairobi's most desirable neighborhoods at affordable prices.
                </p>
                <p className="text-slate-600 mb-4">
                  We understand that finding the right home is more than just a transaction—it's about finding a space where you can build your life, feel comfortable, and thrive.
                </p>
                <p className="text-slate-600">
                  With years of experience in the Nairobi real estate market, our team has developed deep insights into the rental market across Westlands, Kilimani, Upper Hill, South C, and South B areas, allowing us to provide exceptional service to our clients.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                  alt="Office building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-slate-600">
                At SMART HOMES Real Estate, we operate with unwavering commitment to these fundamental principles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-slate-600">
                  We conduct business with honesty and transparency, providing accurate information about every property.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
                <p className="text-slate-600">
                  We place our clients' needs at the center of everything we do, ensuring personalized service.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-slate-600">
                  We strive for excellence in all aspects of our service, from property selection to client communication.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Affordability</h3>
                <p className="text-slate-600">
                  We are committed to providing quality housing options across different price points to meet diverse needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-slate-600">
                Our dedicated team of real estate professionals is committed to helping you find the perfect rental property
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Davis Zack</h3>
                  <p className="text-primary mb-3">Founder & Lead Agent</p>
                  <p className="text-slate-600">
                    With over 10 years in Nairobi's real estate market, Davis leads our team with expert knowledge and dedication.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Njeri</h3>
                  <p className="text-primary mb-3">Property Manager</p>
                  <p className="text-slate-600">
                    Sarah ensures all our properties are well-maintained and that tenants receive excellent service.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1565328500432-e7a3f8fe391a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Kamau</h3>
                  <p className="text-primary mb-3">Client Relations</p>
                  <p className="text-slate-600">
                    John specializes in matching clients with properties that perfectly suit their needs and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
