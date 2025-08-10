import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Powering Your{' '}
                <span className="text-teal-600">Next-Gen</span>{' '}
                SaaS Experience
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Expert software engineering and SaaS development services. 
                We build scalable, reliable solutions that drive your business forward 
                with cutting-edge technology and proven expertise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Code className="h-5 w-5 text-teal-600" />
                <span className="font-medium">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Based in Bahrain</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-teal-200 rounded w-1/2"></div>
                    <div className="h-4 bg-orange-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <Code className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;