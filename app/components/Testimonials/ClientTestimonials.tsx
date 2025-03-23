"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Testimonials component
const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => (
    <div className="relative py-24 bg-cover bg-left bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div className="text-2xl text-gray-400">Loading testimonials...</div>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering to prevent hydration issues
});

export default function ClientTestimonials() {
  return (
    <Suspense>
      <Testimonials />
    </Suspense>
  );
} 