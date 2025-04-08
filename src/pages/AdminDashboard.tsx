
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle, LogOut, Home, Image, Settings } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem('adminAuth');
    if (!adminAuth || adminAuth !== 'true') {
      navigate('/admin/login');
      return;
    }
    
    setIsAuthenticated(true);
    document.title = "Admin Dashboard - SMART HOMES Real Estate";
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminEmail');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              {localStorage.getItem('adminEmail')}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Property Management Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Properties</h2>
              <Home className="h-5 w-5 text-primary" />
            </div>
            <p className="text-gray-600 mb-4">Manage your property listings, add new properties, or update existing ones.</p>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Property
            </Button>
          </div>
          
          {/* Media Management Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Media</h2>
              <Image className="h-5 w-5 text-primary" />
            </div>
            <p className="text-gray-600 mb-4">Upload and manage images, videos and other media for your properties.</p>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Upload Media
            </Button>
          </div>
          
          {/* Settings Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Settings</h2>
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <p className="text-gray-600 mb-4">Configure website settings, advertisements, and user access.</p>
            <Button>
              Manage Settings
            </Button>
          </div>
        </div>
        
        {/* Recently Added Properties Section */}
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">Recently Added Properties</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              <li className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Luxury Villa in Karen</h3>
                  <p className="text-gray-500 text-sm">Added on April 8, 2025</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </li>
              <li className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Modern Apartment in Westlands</h3>
                  <p className="text-gray-500 text-sm">Added on April 7, 2025</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </li>
              <li className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Family Home in Lavington</h3>
                  <p className="text-gray-500 text-sm">Added on April 6, 2025</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
