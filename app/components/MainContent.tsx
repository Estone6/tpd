"use client";

import { ReactNode, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import Footer from "./Footer";

export default function MainContent({ children }: { children: ReactNode }) {
  const { isOpen, setIsOpen } = useSidebar();
  
  // Close sidebar on scroll on smaller devices only
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.innerWidth < 1024) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, setIsOpen]);

  return (
    <div className={`main-content ${isOpen ? 'active' : ''} text-gray`} style={{ willChange: "transform" }}>
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
} 