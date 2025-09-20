
import React from 'react';
import Header from '@/components/Header';
import CompanyProfile from '@/components/CompanyProfile';
import ProductsSection from '@/components/ProductsSection';
import ReviewsSection from '@/components/ReviewsSection';
import CreatorSection from '@/components/CreatorSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5ff]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Company Profile */}
          <CompanyProfile />
          
          {/* Products & Services */}
          <ProductsSection />
          
          {/* Content Creator Services */}
          <CreatorSection />
          
          {/* Reviews & Ratings */}
          <ReviewsSection />
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-[#00dcaa] to-[#00b894] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Business?</h2>
            <p className="text-xl text-white mb-6">Join thousands of satisfied customers and start your advertising journey today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/dashboard"
                className="bg-white text-[#00dcaa] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Go to Dashboard
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00dcaa] transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#00dcaa] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">▶</span>
              </div>
              <span className="text-2xl font-bold text-[#00dcaa]">AdTip</span>
            </div>
            
            <div className="flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-[#00dcaa]">Privacy Policy</a>
              <a href="#" className="hover:text-[#00dcaa]">Terms of Service</a>
              <a href="#" className="hover:text-[#00dcaa]">Contact</a>
              <a href="#" className="hover:text-[#00dcaa]">Support</a>
            </div>
            
            <p className="text-gray-600 mt-4 md:mt-0">© 2024 AdTip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
