"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 via-white to-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
        
        {/* Connecting gradient to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-medium text-teal-700">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              Based in Bahrain • Global Standards
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Powering Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                  Next-Gen
                </span>
                <br />
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
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out hover:bg-teal-50"
              >
                View Services
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">20+ Years</div>
                  <div className="text-sm text-gray-500">Combined Experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quality First</div>
                  <div className="text-sm text-gray-500">Reliable Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:order-2">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card - Code Editor Mock */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-mono">LayerSeven.tsx</div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="text-gray-700">
                    <span className="text-purple-600">const</span>{' '}
                    <span className="text-blue-600">LayerSeven</span>{' '}
                    <span className="text-gray-600">=</span>{' '}
                    <span className="text-gray-600">() = {'{'}
                  </span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <div className="h-3 bg-teal-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-orange-200 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="h-3 bg-teal-200 rounded w-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="text-gray-600">{'}'}</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Stats Floating Card */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 border border-gray-200/50 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">99%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;