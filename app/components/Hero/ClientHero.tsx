"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Hero component with loading fallback
const Hero = dynamic(() => import('./Hero'), {
  loading: () => (
    <div className="relative h-screen bg-gray-100 animate-pulse flex items-center justify-center">
      <span className="text-2xl text-gray-400">Loading hero section...</span>
    </div>
  ),
  ssr: false // Disable server-side rendering for slider to prevent hydration issues
});

export default function ClientHero() {
  return (
    <Suspense>
      <Hero />
    </Suspense>
  );
} 