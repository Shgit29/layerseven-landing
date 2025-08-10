"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Process = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2, false);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.3, false);

  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      subtitle: "Understanding Your Vision",
      description: "We start by deeply understanding your business goals, target audience, and technical requirements. This phase includes market research, competitor analysis, and creating a comprehensive project roadmap.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Requirements Analysis", "Technical Architecture", "Project Timeline", "Resource Planning"],
      duration: "1-2 weeks",
      color: "blue",
      delay: "0ms"
    },
    {
      number: "02",
      title: "Development",
      subtitle: "Building Your Solution",
      description: "Our development phase follows agile methodologies with regular check-ins and updates. We build scalable, secure, and performant applications using modern technologies and best practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Agile Development", "Regular Updates", "Quality Assurance", "Code Reviews"],
      duration: "4-12 weeks",
      color: "teal",
      delay: "200ms"
    },
    {
      number: "03",
      title: "Launch & Deployment",
      subtitle: "Going Live Seamlessly",
      description: "We handle the complete deployment process, including cloud infrastructure setup, security configurations, and performance optimization. Your application goes live with confidence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["Cloud Deployment", "Security Setup", "Performance Testing", "Go-Live Support"],
      duration: "1 week",
      color: "orange",
      delay: "400ms"
    },
    {
      number: "04",
      title: "Ongoing Support",
      subtitle: "Long-term Partnership",
      description: "Our relationship doesn't end at launch. We provide continuous monitoring, regular updates, feature enhancements, and 24/7 support to ensure your SaaS thrives and scales.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ["24/7 Monitoring", "Regular Updates", "Feature Enhancements", "Technical Support"],
      duration: "Ongoing",
      color: "green",
      delay: "600ms"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "from-blue-100 to-blue-200",
        text: "text-blue-600",
        border: "border-blue-200",
        dot: "bg-blue-500"
      },
      teal: {
        bg: "from-teal-500 to-teal-600",
        light: "from-teal-100 to-teal-200",
        text: "text-teal-600",
        border: "border-teal-200",
        dot: "bg-teal-500"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "from-orange-100 to-orange-200",
        text: "text-orange-600",
        border: "border-orange-200",
        dot: "bg-orange-500"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "from-green-100 to-green-200",
        text: "text-green-600",
        border: "border-green-200",
        dot: "bg-green-500"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 via-white to-blue-50/30 overflow-hidden transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ marginTop: '-1px' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Seamless continuation */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50/20 to-transparent"></div>
        
        {/* Large background gradients */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/15 rounded-full blur-3xl transform -translate-x-48"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-teal-400/10 to-teal-600/20 rounded-full blur-3xl transform translate-x-40"></div>
        
        {/* Timeline background element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-b from-blue-200/50 via-teal-200/50 to-green-200/50 rounded-full hidden lg:block"></div>
        
        {/* Floating elements */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-teal-300/30 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-lg rotate-45 opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-blue-50/20"></div>
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
          <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 shadow-sm mb-6 transition-all duration-500 hover:scale-105 hover:shadow-md ${
            headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Our Process
          </div>
          
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}>
            How We Transform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600">
              Ideas into Reality
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}>
            Our proven 4-step process ensures your SaaS project is delivered on time, 
            within budget, and exceeds expectations at every milestone.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 via-orange-200 to-green-200 rounded-full"></div>
              
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color);
                
                return (
                  <div
                    key={step.number}
                    className={`relative transition-all duration-800 ${
                      timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: timelineVisible ? step.delay : '0ms' }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-white shadow-lg z-10`}></div>
                    
                    {/* Step Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 mt-32 group hover:scale-105">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colors.bg} text-white rounded-xl font-bold text-lg mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colors.light} ${colors.text} rounded-lg mb-4 ml-2`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className={`text-sm font-medium ${colors.text} mb-3`}>{step.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {step.features.map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Duration */}
                      <div className={`inline-flex items-center gap-1 ${colors.text} bg-gradient-to-r ${colors.light} px-3 py-1 rounded-full text-xs font-medium`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              
              return (
                <div
                  key={step.number}
                  className={`relative transition-all duration-800 ${
                    timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: timelineVisible ? step.delay : '0ms' }}
                >
                  <div className="flex gap-6">
                    {/* Timeline Side */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} text-white rounded-xl font-bold text-lg flex items-center justify-center shadow-lg`}>
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-1 h-16 bg-gradient-to-b ${colors.light} rounded-full mt-4`}></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${colors.light} ${colors.text} rounded-lg flex items-center justify-center`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                          <p className={`text-sm font-medium ${colors.text}`}>{step.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {step.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`inline-flex items-center gap-1 ${colors.text} bg-gradient-to-r ${colors.light} px-3 py-1 rounded-full text-xs font-medium`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-800 ${
          timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: timelineVisible ? '800ms' : '0ms' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's begin with a discovery call to understand your needs and outline 
              the perfect roadmap for your SaaS project.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;