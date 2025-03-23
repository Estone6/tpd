"use client";

import { memo, useCallback } from "react";
import { useSidebar } from "../context/SidebarContext";

/**
 * BurgerButton - A mobile navigation toggle button
 * 
 * This component displays a hamburger menu icon that transforms into an X
 * when the sidebar is open. It's only visible on mobile/tablet devices.
 */
function BurgerButton() {
  const { isOpen, setIsOpen } = useSidebar();
  
  // Memoized toggle handler to prevent unnecessary re-renders
  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  
  return (
    <button 
      onClick={toggleSidebar}
      className="absolute -right-19.5 top-4 rounded-full bg-black shadow-md w-12 h-12 flex flex-col items-center justify-center cursor-pointer group lg:hidden z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="sidebar-menu"
      type="button"
    >
      {/* Burger icon that transforms to X */}
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <div 
        className={`w-5 h-0.25 relative bg-white transition-all ${!isOpen && 'group-hover:mb-2'} ${
          isOpen ? 'transform rotate-45 top-[1px]' : 'mb-1.5'
        }`}
        aria-hidden="true"
      ></div>
      <div 
        className={`w-5 h-0.25 bg-white transition-all ${
          isOpen ? 'hidden' : 'opacity-100 mb-1.5'
        }`}
        aria-hidden="true"
      ></div>
      <div 
        className={`w-5 h-0.25 relative bg-white transition-all ${!isOpen && 'group-hover:mt-0.5'} ${
          isOpen ? 'transform -rotate-45' : ''
        }`}
        aria-hidden="true"
      ></div>
    </button>
  );
}

// Export a memoized version of the component
export default memo(BurgerButton);