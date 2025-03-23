"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowRight } from "react-icons/tfi";

interface ServiceProps {
  id?: number;
  image: string;
  category: string;
  title: string;
  link: string;
  alt?: string;
}

const Service: React.FC<ServiceProps> = memo(({ image, category, title, link, alt }) => {
  // Default alt text if none provided
  const imageAlt = alt || `${category} - ${title}`;
  
  return (
    <article className="relative overflow-hidden group text-center h-full">
      <div className="relative overflow-hidden h-96">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-[10%_50%] transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
        {/* Add structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": title,
              "description": `${category} - ${title}`,
              "url": link,
              "provider": {
                "@type": "Organization",
                "name": "Wedding and Event Planning Services"
              },
              "serviceType": category
            })
          }}
        />
      </div>
      <div className="absolute -bottom-13 left-0 w-full p-6 text-center z-20 transition-all duration-300 bg-gradient-to-b from-transparent via-black/5 to-black/75 group-hover:bottom-0 group-hover:pb-8">
        <div className="block font-cursive text-3xl text-white leading-none mb-0">
          <Link 
            href={link} 
            className="text-white transition-colors focus:outline-none focus-visible:underline"
            aria-label={`${category} services`}
          >
            {category}
          </Link>
        </div>
        <h3 className="font-nunito text-white text-lg uppercase tracking-wider mt-3 mb-4">
          <Link 
            href={link} 
            className="text-white transition-colors focus:outline-none focus-visible:underline"
            aria-label={`Learn more about ${title}`}
          >
            {title}
          </Link>
        </h3>
        <div className="flex justify-center">
          <Link
            className="inline-block text-white text-xl hover:text-gold transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 rounded-full"
            href={link}
            aria-label={`Learn more about ${title} services`}
            title={`View details for ${title}`}
          >
            <TfiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
});

Service.displayName = 'Service';

export default Service; 