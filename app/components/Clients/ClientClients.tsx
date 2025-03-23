"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Clients component with loading fallback
const Clients = dynamic(() => import('./Clients'), {
  loading: () => (
    <div className="bg-[#f8f5f1] py-8">
      <div className="max-w-7xl mx-auto px-7.5">
        <div className="flex justify-between items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="h-20 bg-gray-200 animate-pulse flex-1 mx-4 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering to prevent hydration issues
});

export default function ClientClients() {
  return (
    <Suspense>
      <Clients />
    </Suspense>
  );
} 