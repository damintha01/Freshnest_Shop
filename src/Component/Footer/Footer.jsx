import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-green-400">DSHOP</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Your trusted partner for fresh groceries and household essentials. 
              We deliver quality products right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Fresh Fruits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Vegetables</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Dairy Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Snacks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Beverages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-400 text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  123 Main Street, City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-400 text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-400 text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  info@dshop.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Get the latest deals and fresh product updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:outline-none w-full sm:w-64"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 DSHOP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
