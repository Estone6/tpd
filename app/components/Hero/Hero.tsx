"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ContactButton from "../ContactButton";

// Define the slide data type
interface SlideData {
  id: number;
  background: string;
  subTitle: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

// Data for three slides
const slidesData: SlideData[] = [
  {
    id: 0,
    background: "/images/slider/01.jpg",
    subTitle: "planning events",
    title: "Big or Small, We Plan It All!",
    description:
      "Weddings, birthdays, corporate galas - our expert team makes every event epic.",
    buttonText: "Plan Your Perfect Event Now!",
    href: "/services",
  },
  {
    id: 1,
    background: "/images/slider/02.jpg",
    subTitle: "celebrate events",
    title: "We Plan, You Party!",
    description:
      "No stress, no fuss - just show up and enjoy the fun.",
    buttonText: "Start Planning, Stress-Free!",
    href: "/services",
  },
  {
    id: 2,
    background: "/images/slider/03.jpg",
    subTitle: "planning dream",
    title: "Where Imagination Meets Celebration!",
    description:
      "Creative ideas and meticulous details - we bring your dream event to life.",
    buttonText: "Let's Make Magic!",
    href: "/services",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Preload all images first
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = slidesData.length;
    
    const imagePromises = slidesData.map((slide) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesPreloaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${slide.background}`);
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesPreloaded(true);
          }
          resolve();
        };
        img.src = slide.background;
      });
    });
    
    Promise.all(imagePromises).then(() => {
      setImagesPreloaded(true);
    });
  }, []);
  
  // Function to advance to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1));
  }, []);
  
  // Stop the auto-slide timer and reset the reference
  const stopSlideTimer = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  }, []);
  
  // Start the auto-slide timer
  const startSlideTimer = useCallback(() => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 6000);
  }, [nextSlide, stopSlideTimer]);
  
  // Set up timer when component mounts and clear on unmount
  useEffect(() => {
    if (imagesPreloaded) {
      startSlideTimer();
    }
    return () => stopSlideTimer();
  }, [startSlideTimer, stopSlideTimer, imagesPreloaded]);
  
  // Use IntersectionObserver to pause autoplay when not in viewport
  useEffect(() => {
    if (!heroRef.current || typeof IntersectionObserver === 'undefined') return;
    
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (imagesPreloaded) startSlideTimer();
        } else {
          stopSlideTimer();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [startSlideTimer, stopSlideTimer, imagesPreloaded]);
  
  // Handle dot click
  const handleDotClick = useCallback((index: number) => {
    stopSlideTimer();
    setCurrentSlide(index);
    startSlideTimer();
  }, [stopSlideTimer, startSlideTimer]);
  
  return (
    <div 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      onMouseEnter={stopSlideTimer}
      onMouseLeave={() => imagesPreloaded && startSlideTimer()}
      role="region"
      aria-label="Featured Slides"
    >
      {!imagesPreloaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-100">
          <div className="text-2xl text-gray-400">Loading slides...</div>
        </div>
      )}
      
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
          style={{ backgroundImage: `url(${slide.background})` }}
          aria-hidden={index !== currentSlide}
          id={`slide-${slide.id}`}
        >
          <div className={`absolute bottom-8 left-7.5 right-7.5 z-10 transition-all duration-800 delay-300 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}>
            <div className="bg-white p-8 mb-8 max-w-full md:max-w-[540px]">
              <h2 className="!font-cursive text-3xl !text-gray-400 leading-none text-center mb-0">{slide.subTitle}</h2>
              <h1 className="text-2xl leading-tight text-black font-nunito font-medium mt-2.5 mb-5 uppercase tracking-wider">{slide.title}</h1>
              <p className="mb-5 text-gray-700">{slide.description}</p>
              <ContactButton buttonText={slide.buttonText} href={slide.href} />
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots */}
      <div className="absolute bottom-8 right-1.5 z-20 flex flex-col space-y-1.5">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-black/80' 
                : 'bg-white/60 hover:bg-black/80'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === currentSlide}
            aria-controls={`slide-${slide.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
