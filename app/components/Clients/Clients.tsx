"use client";

import { default as NextImage } from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Client data
const clientsData = [
  {
    id: 1,
    image: "/images/clients/1.jpg",
    name: "Client 1",
    color: "#4285F4", // Google blue
  },
  {
    id: 2,
    image: "/images/clients/2.jpg",
    name: "Client 2",
    color: "#EA4335", // Red
  },
  {
    id: 3,
    image: "/images/clients/3.jpg",
    name: "Client 3",
    color: "#FBBC05", // Yellow
  },
  {
    id: 4,
    image: "/images/clients/4.jpg",
    name: "Client 4",
    color: "#34A853", // Green
  },
  {
    id: 5,
    image: "/images/clients/5.jpg",
    name: "Client 5",
    color: "#5F6368", // Dark gray
  },
  {
    id: 6,
    image: "/images/clients/6.jpg",
    name: "Client 6",
    color: "#c5a47e", // Gold
  }
];

// Memoize the ClientLogo component to prevent re-renders
const ClientLogo = React.memo(({ client }: { client: typeof clientsData[0] }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div 
        className="h-[100px] w-[200px] flex items-center justify-center text-white font-medium"
        style={{ backgroundColor: client.color }}
      >
        {client.name}
      </div>
    );
  }

  return (
    <NextImage 
      src={client.image}
      alt={client.name}
      className="object-contain"
      fill={true}
      sizes="200px"
      loading="eager" // Force eager loading to prevent lazy loading on scroll
      onError={() => setImageError(true)}
    />
  );
});

ClientLogo.displayName = 'ClientLogo';

const Clients = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Only mount animation after component is mounted
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || typeof IntersectionObserver === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (tickerRef.current) {
          tickerRef.current.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationPlayState = 'running';
    }
  };

  // Memoize the client logos to prevent re-renders
  const clientLogos = React.useMemo(() => (
    <>
      {clientsData.map((client) => (
        <div 
          key={client.id}
          className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100 opacity-70 h-[100px] w-[200px] relative"
          role="listitem"
        >
          <ClientLogo client={client} />
        </div>
      ))}
    </>
  ), []);

  // Memoize the duplicate logos
  const duplicateLogos = React.useMemo(() => (
    <>
      {clientsData.map((client) => (
        <div 
          key={`duplicate-${client.id}`}
          className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100 opacity-70 h-[100px] w-[200px] relative"
          role="listitem"
          aria-hidden="true"
        >
          <ClientLogo client={client} />
        </div>
      ))}
    </>
  ), []);

  return (
    <section className="bg-[#f8f5f1] py-8">
      <div className="max-w-7xl mx-auto px-7.5 relative">
        <div 
          className="relative overflow-hidden"
          role="region"
          aria-label="Clients Ticker"
          ref={sliderRef}
        >
          <div 
            className="flex w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={tickerRef}
              className={`flex gap-4 ${isAnimating ? 'animate-ticker' : ''}`}
            >
              {clientLogos}
              {duplicateLogos}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients; 