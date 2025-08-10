"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  // Set triggerOnce to false so animations work on every scroll
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2, false);
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation(0.3, false);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 via-white to-teal-50/30 overflow-hidden transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ marginTop: '-1px' }} // Remove any gap
    >
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Seamless continuation from hero */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
        
        {/* Large background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-teal-600/20 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-400/15 to-orange-600/25 rounded-full blur-3xl transform translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/8 to-orange-500/12 rounded-full blur-2xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-teal-300/20 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-lg rotate-45 opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0f766e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Bottom transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/50"></div>
      </div>

      {/* Content - same as before but with re-triggering animations */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 transition-all duration-800 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Section Header */}
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-full px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transform transition-all duration-500 hover:scale-105 hover:shadow-md ${
                contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                About LayerSeven
              </div>
              
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight transition-all duration-800 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Building the Future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600">
                  SaaS Solutions
                </span>
              </h2>
            </div>

            {/* Story Content with enhanced cards */}
            <div className="space-y-6">
              <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm transition-all duration-600 hover:shadow-md hover:bg-white/80 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: contentVisible ? '200ms' : '0ms' }}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">LayerSeven</strong> was founded with a simple yet powerful vision: 
                  to bridge the gap between innovative ideas and exceptional software solutions. 
                  Based in the heart of Bahrain, we combine local market understanding with 
                  global development standards.
                </p>
              </div>
              
              <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm transition-all duration-600 hover:shadow-md hover:bg-white/80 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: contentVisible ? '400ms' : '0ms' }}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a passionate software engineer with over{' '}
                  <strong className="text-teal-600 bg-teal-50 px-2 py-1 rounded-md">20+ years of combined experience</strong>, 
                  I've witnessed the evolution of technology and the transformative power of 
                  well-crafted SaaS applications. My journey began with a curiosity for 
                  problem-solving and has evolved into a commitment to building solutions 
                  that truly make a difference.
                </p>
              </div>
              
              <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm transition-all duration-600 hover:shadow-md hover:bg-white/80 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: contentVisible ? '600ms' : '0ms' }}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What drives me is the intersection of{' '}
                  <strong className="text-gray-900">continuous learning</strong> and{' '}
                  <strong className="text-gray-900">quality craftsmanship</strong>. 
                  Every project is an opportunity to push boundaries, embrace new technologies, 
                  and deliver software that not only meets requirements but exceeds expectations.
                </p>
              </div>
            </div>

            {/* Enhanced Values/Principles */}
            <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-800 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: contentVisible ? '800ms' : '0ms' }}>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Every line of code is crafted with precision, tested thoroughly, 
                      and built to last.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Never Stop Learning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Technology evolves rapidly, and so do we. Continuous learning 
                      keeps us ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm transition-all duration-800 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: contentVisible ? '1000ms' : '0ms' }}>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-teal-600 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-teal-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div 
            ref={visualRef}
            className={`relative lg:order-2 transition-all duration-800 ${
              visualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Same content as before but with re-triggering animations */}
            <div className="relative max-w-md mx-auto">
              {/* Enhanced decorative background for photo area */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-orange-400/20 rounded-3xl blur-2xl transform scale-110"></div>
              
              {/* Main Photo Container */}
              <div className="relative group">
                {/* Enhanced Background Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/20 to-teal-500/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                
                {/* Photo Container with glass effect */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/50">
                  <div className="aspect-[4/5] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Your Photo Here</p>
                      <p className="text-sm text-gray-500 mt-1">Founder & Lead Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className={`absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-3 border border-white/50 transition-all duration-600 hover:scale-105 hover:shadow-2xl ${
                visualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`} style={{ transitionDelay: visualVisible ? '400ms' : '0ms' }}>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">TS</span>
                  </div>
                  <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">React</span>
                  </div>
                </div>
              </div>

              <div className={`absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-3 border border-white/50 transition-all duration-600 hover:scale-105 hover:shadow-2xl ${
                visualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: visualVisible ? '600ms' : '0ms' }}>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">Node</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">AWS</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Quote Bubble */}
              <div className={`absolute -left-6 top-1/3 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 border border-white/50 max-w-xs hidden lg:block transition-all duration-600 hover:scale-105 hover:shadow-2xl ${
                visualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`} style={{ transitionDelay: visualVisible ? '800ms' : '0ms' }}>
                <div className="text-sm text-gray-600 italic">
                  "Building software isn't just about code—it's about solving real problems for real people."
                </div>
                <div className="w-3 h-3 bg-white border-r border-b border-gray-200/50 transform rotate-45 absolute -right-1.5 top-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;