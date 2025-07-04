import React, { useState } from 'react'
import logo from './NavBarImage/logo.png'
import { FaShoppingBasket, FaSearch, FaUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-900 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} className="h-10 sm:h-12 w-auto" alt="DSHOP Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-amber-300 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="text-white hover:text-amber-300 transition-colors duration-200 font-medium">Products</a>
            <a href="#" className="text-white hover:text-amber-300 transition-colors duration-200 font-medium">About</a>
            <a href="#" className="text-white hover:text-amber-300 transition-colors duration-200 font-medium">Contact</a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-amber-300 focus:bg-white/20 transition-all duration-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile */}
            <button className="lg:hidden text-white hover:text-amber-300 transition-colors duration-200">
              <FaSearch className="w-5 h-5" />
            </button>

            {/* User Icon */}
            <button className="hidden sm:block text-white hover:text-amber-300 transition-colors duration-200">
              <FaUser className="w-5 h-5" />
            </button>

            {/* Shopping Cart */}
            <button className="relative text-white hover:text-amber-300 transition-colors duration-200 p-2 rounded-full ring-2 ring-amber-300 hover:bg-amber-300/20">
              <FaShoppingBasket className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-amber-300 transition-colors duration-200 p-2 rounded-full ring-2 ring-amber-300"
            >
              {isMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-teal-800 rounded-lg mt-2">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-amber-300 focus:bg-white/20 transition-all duration-200"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                </div>
              </div>
              
              <a href="#" className="text-white hover:text-amber-300 hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-white hover:text-amber-300 hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Products
              </a>
              <a href="#" className="text-white hover:text-amber-300 hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-white hover:text-amber-300 hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Contact
              </a>
              <a href="#" className="text-white hover:text-amber-300 hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                My Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar