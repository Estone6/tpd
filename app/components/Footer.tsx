"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessName = "TPD Weddings & Events";
  const phoneNumber = "+1.123.444.0000";
  const email = "info@pweddings.com";
  const address = {
    street: "Wallaway 5st St Normain",
    city: "New York",
    state: "NY",
    country: "USA",
    postalCode: "98499"
  };

  return (
    <>
      {/* Structured data for better SEO */}
      <Script id="ld-json-local-business" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EventPlanner",
            "name": "${businessName}",
            "telephone": "${phoneNumber}",
            "email": "${email}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${address.street}",
              "addressLocality": "${address.city}",
              "addressRegion": "${address.state}",
              "postalCode": "${address.postalCode}",
              "addressCountry": "${address.country}"
            },
            "url": "https://pweddings.com",
            "sameAs": [
              "https://www.facebook.com/tpdweddings",
              "https://www.twitter.com/tpdweddings",
              "https://www.instagram.com/tpdweddings",
              "https://www.pinterest.com/tpdweddings"
            ]
          }
        `}
      </Script>

      <footer className="bg-black py-24 px-7.5" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            
            {/* Logo and Social Section */}
            <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
              <div className="md:max-w-xs">
                <h2 className="!font-cormorant text-4xl font-medium text-white leading-none relative w-full group">
                  <Link href="/" className="block text-white no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#a2783a] transition-all duration-200 rounded-sm" aria-label="TPD Weddings and Events, back to homepage">
                    TPD<i className="text-white text-base align-super not-italic">®</i>
                    <span className="block font-cursive text-2xl text-[#a2783a] font-medium tracking-wide mt-1 group-hover:text-white transition-colors duration-300">
                      weddings <small className="inline-block mx-0.5">•</small> events
                    </span>
                  </Link>
                </h2>
                
                <p className="text-gray-300 mt-6 font-cormorant text-lg italic leading-relaxed">
                  Creating unforgettable moments and timeless memories for your special day.
                </p>
                
                <nav aria-label="Social media links" className="mt-6">
                  <ul className="flex space-x-3">
                    <li>
                      <a href="https://www.facebook.com/" 
                        aria-label="Follow us on Facebook" 
                        className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#a2783a] hover:border-[#a2783a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black"
                        rel="noopener noreferrer" 
                        target="_blank">
                        <TiSocialFacebook className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" 
                        aria-label="Follow us on Twitter" 
                        className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#a2783a] hover:border-[#a2783a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black"
                        rel="noopener noreferrer" 
                        target="_blank">
                        <TiSocialTwitter className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" 
                        aria-label="Follow us on Instagram" 
                        className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#a2783a] hover:border-[#a2783a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black"
                        rel="noopener noreferrer" 
                        target="_blank">
                        <TiSocialInstagram className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" 
                        aria-label="Follow us on Pinterest" 
                        className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#a2783a] hover:border-[#a2783a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#a2783a] focus:ring-offset-2 focus:ring-offset-black"
                        rel="noopener noreferrer" 
                        target="_blank">
                        <TiSocialPinterest className="text-xl" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0 md:text-left text-center">
              <h3 className="text-white text-xl font-medium mb-6 font-cormorant">Contact Us</h3>
              
              <dl>
                <div className="mb-6">
                  <dt className="text-[#a2783a] uppercase tracking-wider text-sm mb-1 font-medium">Ring</dt>
                  <dd className="font-cormorant text-lg italic text-white">
                    <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="hover:text-[#a2783a] transition-colors duration-300 focus:outline-none focus:underline">{phoneNumber}</a>
                  </dd>
                </div>
                
                <div>
                  <dt className="text-[#a2783a] uppercase tracking-wider text-sm mb-1 font-medium">Write</dt>
                  <dd className="font-cormorant text-lg italic text-white">
                    <a href={`mailto:${email}`} className="hover:text-[#a2783a] transition-colors duration-300 focus:outline-none focus:underline">{email}</a>
                  </dd>
                </div>
              </dl>
            </div>
            
            {/* Address & Copyright Section */}
            <div className="w-full md:w-1/3 px-4 md:text-left text-center">
              <h3 className="text-white text-xl font-medium mb-6 font-cormorant">Location</h3>
              
              <address className="not-italic mb-6">
                <h4 className="text-[#a2783a] uppercase tracking-wider text-sm mb-1 font-medium">Address</h4>
                <p className="font-cormorant text-lg italic text-white">
                  {address.street}
                  <br />
                  {address.city}, {address.state}, {address.postalCode}
                </p>
              </address>
              
              <div className="pt-4 border-t border-[#222]">
                <p className="text-gray-400 font-cormorant italic text-base">
                  &copy; {currentYear} {businessName}. All rights reserved.
                </p>
                <div className="mt-2 flex flex-wrap md:justify-start justify-center gap-4 text-xs text-gray-500">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300 focus:outline-none focus:underline">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors duration-300 focus:outline-none focus:underline">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 