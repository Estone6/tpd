"use client";

import React, { useRef } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import {default as NextImage} from "next/image";
import Script from "next/script";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonialsData = [
  {
    id: 1,
    text: "I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn't have been happier with her services and upbeat personality!",
    authorImg: "/images/testimonials/1.jpg",
    authorName: "Fredia & Pablo",
    date: "April 15, 2024 USA"
  },
  {
    id: 2,
    text: "I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn't have been happier with her services and upbeat personality!",
    authorImg: "/images/testimonials/2.jpg", 
    authorName: "Olivia & Enrico",
    date: "April 13, 2024 CA"
  },
  {
    id: 3,
    text: "I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn't have been happier with her services and upbeat personality!",
    authorImg: "/images/testimonials/3.jpg",
    authorName: "Tammy & Matthew",
    date: "April 11, 2024 USA"
  }
];

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Custom arrow components
  const PrevArrow = () => (
    <button 
      onClick={() => sliderRef.current?.slickPrev()}
      className="w-10 h-10 cursor-pointer border border-white hover:border-[#a2783a] rounded-full flex items-center justify-center text-white hover:text-[#a2783a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black/50"
      aria-label="Previous testimonial"
    >
      <TfiAngleLeft aria-hidden="true" />
    </button>
  );

  const NextArrow = () => (
    <button 
      onClick={() => sliderRef.current?.slickNext()}
      className="w-10 h-10 cursor-pointer border border-white hover:border-[#a2783a] rounded-full flex items-center justify-center text-white hover:text-[#a2783a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black/50"
      aria-label="Next testimonial"
    >
      <TfiAngleRight aria-hidden="true" />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true
  };

  // Preload images
  React.useEffect(() => {
    testimonialsData.forEach(testimonial => {
      const img = new Image();
      img.src = testimonial.authorImg;
    });
  }, []);

  return (
    <>
      {/* Structured data for testimonials */}
      <Script id="testimonials-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              ${testimonialsData.map((testimonial, index) => `{
                "@type": "ListItem",
                "position": ${index + 1},
                "item": {
                  "@type": "Review",
                  "reviewBody": "${testimonial.text.replace(/"/g, '\\"')}",
                  "author": {
                    "@type": "Person",
                    "name": "${testimonial.authorName}"
                  },
                  "datePublished": "${testimonial.date.split(' ')[0]} ${testimonial.date.split(' ')[1]}"
                }
              }`).join(',')}
            ]
          }
        `}
      </Script>

      <section 
        className="relative py-24 bg-cover bg-left bg-fixed"
        style={{ backgroundImage: `url(/images/banner.jpg)` }}
        aria-labelledby="testimonials-heading"
        id="testimonials"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-7.5">
          <div className="flex flex-wrap -mx-4">
            {/* Left side - Section head */}
            <div className="w-full md:w-5/12 px-4 mb-10 md:mb-0">
              <div className="text-left">
                <span className="block font-cursive text-3xl text-gray-300 -mt-3 mb-1">testimonials</span>
                <h2 id="testimonials-heading" className="!text-white font-nunito text-2xl md:text-3xl uppercase font-medium tracking-wider mb-4">From our clients</h2>
                <p className="text-white text-lg mb-8">
                  We are always eager to hear your opinion and share your experience. Here you can find some of our affectionate customers opinions.
                </p>
                <div className="flex space-x-2" role="group" aria-label="Testimonial navigation">
                  <PrevArrow />
                  <NextArrow />
                </div>
              </div>
            </div>
            
            {/* Right side - Testimonial slider */}
            <div className="w-full md:w-7/12 px-4">
              <div className="testimonials-slider">
                <Slider ref={sliderRef} {...settings}>
                  {testimonialsData.map((item) => (
                    <div key={item.id}>
                      <div className="bg-white p-8">
                        <blockquote>
                          <p className="text-gray-600 italic text-base md:text-lg mb-8">{item.text}</p>
                          <footer className="flex items-center">
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
                              <NextImage 
                                src={item.authorImg} 
                                alt={`Portrait of ${item.authorName}`}
                                fill
                                sizes="60px"
                                className="object-cover"
                                quality={85}
                              />
                            </div>
                            <div className="ml-4">
                              <cite className="text-black text-sm uppercase font-medium tracking-wider mb-0.5 not-italic">{item.authorName}</cite>
                              <time dateTime={item.date.split(' ')[0] + ' ' + item.date.split(' ')[1]} className="text-gray-600 italic text-sm block">{item.date}</time>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles for Slick */}
      <style jsx global>{`
        .testimonials-slider .slick-slide {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .testimonials-slider .slick-slide.slick-active {
          opacity: 1;
        }
        .testimonials-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Testimonials; 