"use client";

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = false) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Only disconnect if triggerOnce is true
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
};

// Alternative hook for multiple elements that re-trigger
export const useScrollAnimations = (count: number, threshold = 0.1, triggerOnce = false) => {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    new Array(count).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisibleElements(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
            
            if (triggerOnce && entry.isIntersecting) {
              observer.disconnect();
            }
          },
          { 
            threshold,
            rootMargin: '0px 0px -50px 0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, count, triggerOnce]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleElements };
};