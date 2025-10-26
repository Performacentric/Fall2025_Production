import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo-1.png"
            alt="Performacentric"
            className="h-12 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/what-we-do"
            className="text-sm font-medium text-gray-700 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
          >
            What We Do
          </Link>
          <Link
            to="/industries"
            className="text-sm font-medium text-gray-700 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
          >
            Industries
          </Link>
          <Link
            to="/resources"
            className="text-sm font-medium text-gray-700 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
          >
            Resources
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
