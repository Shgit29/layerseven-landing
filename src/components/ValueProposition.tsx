"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ValueProposition = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2, false);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.3, false);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.4, false);

  const valuePropositions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "20+ Years of Excellence",
      subtitle: "Proven Track Record",
      description: "Combined decades of experience in software engineering and SaaS development. We've seen technologies evolve and know what works at scale.",
      highlights: ["Enterprise-grade solutions", "Scalable architectures", "Battle-tested practices", "Future-proof technology"],
      color: "teal",
      delay: "0ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Local + Global Excellence",
      subtitle: "Best of Both Worlds",
      description: "Based in Bahrain with deep understanding of regional markets, yet applying international best practices and global technology standards.",
      highlights: ["Bahrain market expertise", "Regional compliance knowledge", "Global best practices", "International standards"],
      color: "orange",
      delay: "200ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quality & Reliability",
      subtitle: "Excellence in Every Line",
      description: "Our commitment to quality means thorough testing, clean code, comprehensive documentation, and reliable performance that you can trust.",
      highlights: ["99.9% uptime guarantee", "Comprehensive testing", "Clean, maintainable code", "Detailed documentation"],
      color: "blue",
      delay: "400ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Agile & Transparent",
      subtitle: "Clear Communication Always",
      description: "Regular updates, transparent processes, and agile methodologies ensure you're always in the loop and can adapt quickly to changing requirements.",
      highlights: ["Weekly progress reports", "Real-time project tracking", "Flexible methodologies", "Direct communication"],
      color: "green",
      delay: "600ms"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Combined Experience", icon: "🏆" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛡️" },
    { number: "100%", label: "Client Satisfaction", icon: "❤️" }
  ];

  const clientLogos = [
    { name: "TechCorp", placeholder: true },
    { name: "InnovateSaaS", placeholder: true },
    { name: "CloudSolutions", placeholder: true },
    { name: "DigitalFirst", placeholder: true },
    { name: "ScaleUp", placeholder: true },
    { name: "FutureApp", placeholder: true }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: {
        bg: "from-teal-500 to-teal-600",
        light: "from-teal-50 to-teal-100",
        text: "text-teal-600",
        border: "border-teal-200",
        dot: "bg-teal-500"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        dot: "bg-orange-500"
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        dot: "bg-blue-500"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200",
        dot: "bg-green-500"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 bg-gradient-to-b from-blue-50/30 via-white to-teal-50/20 overflow-hidden transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ marginTop: '-1px' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Seamless continuation */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
        
        {/* Large background gradients */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-teal-400/10 to-teal-600/15 rounded-full blur-3xl transform translate-x-48"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-orange-600/20 rounded-full blur-3xl transform -translate-x-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-green-500/10 rounded-full blur-2xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-16 w-32 h-32 bg-gradient-to-br from-green-200/20 to-green-300/30 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-lg rotate-45 opacity-40 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-teal-50/10"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-full px-4 py-2 text-sm font-medium text-teal-700 shadow-sm mb-6 transition-all duration-500 hover:scale-105 hover:shadow-md ${
            headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Why Choose LayerSeven
          </div>
          
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}>
            Your Success is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600">
              Our Priority
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}>
            We combine decades of experience with modern innovation to deliver SaaS solutions 
            that not only meet your needs today but scale with your ambitions tomorrow.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div 
          ref={valuesRef}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {valuePropositions.map((value, index) => {
            const colors = getColorClasses(value.color);
            
            return (
              <div
                key={value.title}
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:bg-white/90 hover:scale-105 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: valuesVisible ? value.delay : '0ms'
                }}
              >
                {/* Icon and Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className={`text-sm font-medium ${colors.text}`}>{value.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {value.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {value.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlight}
                      className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                        valuesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: valuesVisible ? `${parseInt(value.delay) + (highlightIndex * 100)}ms` : '0ms'
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${colors.bg} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm mb-20 transition-all duration-800 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-600 ${
                  statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: statsVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos / Testimonials Placeholder */}
        <div className={`text-center transition-all duration-800 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: statsVisible ? '600ms' : '0ms' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by Forward-Thinking Companies
            </h3>
            
            {/* Placeholder for client logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {clientLogos.map((client, index) => (
                <div
                  key={client.name}
                  className={`bg-gray-100 rounded-lg p-4 flex items-center justify-center h-16 hover:bg-gray-200 transition-all duration-300 ${
                    statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: statsVisible ? `${700 + (index * 100)}ms` : '0ms'
                  }}
                >
                  <span className="text-gray-500 text-sm font-medium">{client.name}</span>
                </div>
              ))}
            </div>

            {/* Testimonial Placeholder */}
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-gray-600 mb-4">
                "LayerSeven transformed our business idea into a scalable SaaS platform that exceeded 
                all our expectations. Their expertise and attention to detail is unmatched."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-600">CEO, TechStartup</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-8 border-t border-gray-200/50">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Join Our Success Stories?
              </h4>
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Project Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;