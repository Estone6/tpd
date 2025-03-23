"use client";

import React from "react";
import Slider from "react-slick";
import Service from "./Service";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated services data with Indian context
const servicesData = [
  {
    id: 1,
    image: "/images/services/dream-weddings.webp",
    category: "Weddings",
    title: "Dream Weddings",
    link: "/services/dream-weddings",
    alt: "Luxurious Indian wedding decoration with mandap",
    description: "Complete wedding planning services including pre-wedding ceremonies, decor, catering, and vendor management",
    packages: [
      {
        name: "Essential",
        price: "Starting at ₹2,50,000",
        features: ["Wedding Day Coordination", "Basic Decor", "Vendor Recommendations"]
      },
      {
        name: "Premium",
        price: "Starting at ₹5,00,000",
        features: ["Full Wedding Planning", "Premium Decor", "Vendor Management", "Pre-wedding Events"]
      },
      {
        name: "Luxury",
        price: "Starting at ₹10,00,000",
        features: ["End-to-End Planning", "Luxury Decor", "Complete Vendor Management", "All Ceremonies"]
      }
    ]
  },
  {
    id: 2,
    image: "/images/services/proposals.webp",
    category: "Special Moments",
    title: "Magical Proposals",
    link: "/services/proposals",
    alt: "Romantic proposal setup with rose petals and candles",
    description: "Create unforgettable proposal moments with personalized setups and surprise elements"
  },
  {
    id: 3,
    image: "/images/services/birthdays.webp",
    category: "Celebrations",
    title: "Birthday Celebrations",
    link: "/services/birthdays",
    alt: "Themed birthday party decoration",
    description: "Customized birthday celebrations for all ages with themes and entertainment"
  },
  {
    id: 4,
    image: "/images/services/anniversaries.webp",
    category: "Special Moments",
    title: "Heartfelt Anniversaries",
    link: "/services/anniversaries",
    alt: "Romantic anniversary celebration setup",
    description: "Memorable anniversary celebrations with personalized touches"
  },
  {
    id: 5,
    image: "/images/services/ring-ceremony.webp",
    category: "Weddings",
    title: "Ring Ceremonies",
    link: "/services/ring-ceremony",
    alt: "Traditional Indian ring ceremony setup",
    description: "Elegant engagement and ring ceremony planning with traditional elements"
  },
  {
    id: 6,
    image: "/images/services/receptions.webp",
    category: "Weddings",
    title: "Glamorous Receptions",
    link: "/services/receptions",
    alt: "Luxurious wedding reception venue setup",
    description: "Grand reception planning with modern and traditional fusion elements"
  },
  {
    id: 7,
    image: "/images/services/corporate.webp",
    category: "Corporate",
    title: "Corporate Events",
    link: "/services/corporate",
    alt: "Professional corporate event setup",
    description: "Professional corporate event management for conferences, seminars, and team events"
  },
  {
    id: 8,
    image: "/images/services/bachelor-parties.webp",
    category: "Pre-Wedding",
    title: "Bachelor Parties",
    link: "/services/bachelor-parties",
    alt: "Modern bachelor party celebration setup",
    description: "Exciting bachelor and bachelorette party planning with unique experiences"
  },
  {
    id: 9,
    image: "/images/services/kitty-parties.webp",
    category: "Social",
    title: "Kitty Parties",
    link: "/services/kitty-parties",
    alt: "Elegant kitty party setup with themed decoration",
    description: "Chic kitty party planning with themes, games, and catering"
  },
  {
    id: 10,
    image: "/images/services/intimate-gatherings.webp",
    category: "Social",
    title: "Intimate Gatherings",
    link: "/services/intimate-gatherings",
    alt: "Cozy intimate gathering setup",
    description: "Personal social gatherings and soirees with attention to detail"
  }
];

// Preload all service images
const preloadImages = () => {
  servicesData.forEach(service => {
    const img = new Image();
    img.src = service.image;
  });
};

const OurServices = () => {
  // Preload images on mount
  React.useEffect(() => {
    preloadImages();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      {/* Updated Structured data for services */}
      <Script id="services-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Perfect Date",
            "description": "Premier event management company in India specializing in weddings, corporate events, and special celebrations",
            "url": "https://theperfectdate.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Event Planning Services",
              "itemListElement": [
                ${servicesData.map((service) => `{
                  "@type": "Service",
                  "name": "${service.title}",
                  "description": "${service.description}",
                  "url": "${service.link}",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Perfect Date"
                  },
                  "serviceType": "${service.category}",
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  }
                }`).join(',')}
              ]
            }
          }
        `}
      </Script>

      <section id="services-section" className="py-24 clear-both bg-[#f8f5f1]" aria-labelledby="services-heading">
        <div className="w-full max-w-7xl mx-auto px-7.5">
          <div className="mb-12">
            <p className="block font-cursive text-3xl text-gray-400 mb-2">creating perfect moments</p>
            <h2 id="services-heading" className="font-nunito text-3xl uppercase tracking-wider text-heading-color">Our Services</h2>
          </div>

          <div className="services-slider">
            <Slider {...settings}>
              {servicesData.map(service => (
                <div key={service.id}>
                  <Service {...service} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Custom styles for Slick */}
      <style jsx global>{`
        .services-slider .slick-list {
          margin: 0 -8px;
        }
        .services-slider .slick-slide {
          padding: 0 8px;
        }
        .services-slider .slick-dots {
          bottom: -30px;
        }
        .services-slider .slick-dots li {
          width: 10px;
        }
        .services-slider .slick-dots li button:before {
          font-size: 12px;
        }
        .services-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .services-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default OurServices;