"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2, false);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3, false);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Custom SaaS Development",
      description: "End-to-end development of scalable SaaS applications tailored to your business needs. From MVP to enterprise-grade solutions with modern tech stacks.",
      features: ["React/Next.js Frontend", "Node.js/Python Backend", "Cloud Architecture", "Database Design"],
      color: "teal",
      delay: "0ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Product Consulting & Strategy",
      description: "Strategic guidance to transform your ideas into successful SaaS products. Market analysis, technical planning, and roadmap development.",
      features: ["Market Research", "Technical Architecture", "Product Roadmap", "Competitive Analysis"],
      color: "orange",
      delay: "200ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API Integrations",
      description: "Seamless integration with third-party services and APIs. Connect your SaaS with payment gateways, CRMs, analytics tools, and more.",
      features: ["Payment Systems", "CRM Integration", "Analytics Tools", "Custom APIs"],
      color: "blue",
      delay: "400ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Ongoing support to keep your SaaS running smoothly. Updates, bug fixes, performance optimization, and 24/7 monitoring.",
      features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Bug Fixes"],
      color: "green",
      delay: "600ms"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: {
        bg: "from-teal-500 to-teal-600",
        hover: "group-hover:from-teal-600 group-hover:to-teal-700",
        text: "text-teal-600",
        border: "border-teal-200",
        bgLight: "bg-teal-50"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        hover: "group-hover:from-orange-600 group-hover:to-orange-700",
        text: "text-orange-600",
        border: "border-orange-200",
        bgLight: "bg-orange-50"
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        hover: "group-hover:from-blue-600 group-hover:to-blue-700",
        text: "text-blue-600",
        border: "border-blue-200",
        bgLight: "bg-blue-50"
      },
      green: {
        bg: "from-green-500 to-green-600",
        hover: "group-hover:from-green-600 group-hover:to-green-700",
        text: "text-green-600",
        border: "border-green-200",
        bgLight: "bg-green-50"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 bg-gradient-to-b from-teal-50/30 via-white to-gray-50/50 overflow-hidden transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ marginTop: '-1px' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Seamless continuation from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-50/20 to-transparent"></div>
        
        {/* Large background gradients */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-teal-600/15 rounded-full blur-3xl transform translate-x-48"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-orange-600/20 rounded-full blur-3xl transform -translate-x-40"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-300/30 rounded-lg rotate-12 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-24 w-24 h-24 bg-gradient-to-br from-green-200/30 to-green-300/20 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-full px-4 py-2 text-sm font-medium text-teal-700 shadow-sm mb-6 transition-all duration-500 hover:scale-105 hover:shadow-md ${
            headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2m0 0v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v7" />
            </svg>
            Services & Expertise
          </div>
          
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}>
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600">
              SaaS Solutions
            </span>
            {' '}for Your Business
          </h2>
          
          <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}>
            From initial concept to ongoing support, we provide end-to-end SaaS development 
            services that scale with your business and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={service.title}
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:bg-white/90 hover:scale-105 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: servicesVisible ? service.delay : '0ms'
                }}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} ${colors.hover} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                          servicesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: servicesVisible ? `${parseInt(service.delay) + (featureIndex * 100)}ms` : '0ms'
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${colors.bg} rounded-full flex-shrink-0`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4">
                    <button className={`inline-flex items-center gap-2 ${colors.text} hover:text-white bg-transparent hover:bg-gradient-to-r hover:${colors.bg} border-2 ${colors.border} hover:border-transparent rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:scale-105`}>
                      Learn More
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-800 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: servicesVisible ? '800ms' : '0ms' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Next SaaS Product?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help bring your vision to life 
              with our comprehensive SaaS development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-teal-50">
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;