"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial state and resize
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      // Hidden by default on mobile (<768px) and tablet (768px-1023px)
      // Visible by default on desktop (>=1024px)
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Ensure isOpen is only used client-side
  const contextValue = {
    isOpen: isMounted ? isOpen : false,
    setIsOpen
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
} 