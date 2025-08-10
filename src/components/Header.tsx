"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name - Enhanced */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <span className="text-white font-bold text-sm">L7</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              LayerSeven
            </span>
          </Link>

          {/* Desktop Navigation Links - Enhanced */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200/50">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className={`block mx-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl text-center shadow-lg transition-all duration-300 transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;