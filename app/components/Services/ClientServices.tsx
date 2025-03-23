"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import OurServices with loading fallback
const OurServices = dynamic(() => import('./OurServices'), {
  loading: () => (
    <div className="py-24 clear-both" aria-live="polite" aria-busy="true">
      <div className="w-full max-w-7xl mx-auto px-7.5">
        <div className="mb-8">
          <p className="block font-cursive text-3xl text-gray-400 mb-2" aria-hidden="true">weddings . events</p>
          <h2 id="services-loading-heading" className="font-nunito text-3xl uppercase tracking-wider text-heading-color">Our Services</h2>
        </div>
        <div 
          className="h-96 bg-gray-100 animate-pulse flex items-center justify-center"
          role="status"
          aria-labelledby="services-loading-heading"
        >
          <span className="text-gray-400">Loading services...</span>
        </div>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering for carousel to prevent hydration issues
});

export default function ClientServices() {
  return (
    <Suspense fallback={<div className="h-48 flex items-center justify-center" aria-live="polite">Loading services...</div>}>
      <OurServices />
    </Suspense>
  );
} 