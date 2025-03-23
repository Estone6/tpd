"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Blog component with loading fallback
const Blog = dynamic(() => import('./Blog'), {
  loading: () => (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-7.5">
        <div className="h-96 bg-gray-100 animate-pulse flex items-center justify-center">
          <span className="text-2xl text-gray-400">Loading blog posts...</span>
        </div>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering to prevent hydration issues
});

export default function ClientBlog() {
  return (
    <Suspense>
      <Blog />
    </Suspense>
  );
} 