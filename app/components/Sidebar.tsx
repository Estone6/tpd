"use client";

import { memo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import BurgerButton from "./BurgerButton";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialPinterest } from "react-icons/ti";

// Social links data
const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com/", icon: TiSocialFacebook, ariaLabel: "Visit our Facebook page" },
  { name: "Twitter", url: "https://www.twitter.com/", icon: TiSocialTwitter, ariaLabel: "Visit our Twitter profile" },
  { name: "Instagram", url: "https://www.instagram.com/", icon: TiSocialInstagram, ariaLabel: "Visit our Instagram profile" },
  { name: "Pinterest", url: "https://www.pinterest.com/", icon: TiSocialPinterest, ariaLabel: "Visit our Pinterest page" }
];

// Memoized social icon component for better performance
const SocialIcon = memo(({ url, Icon, ariaLabel }: { url: string, Icon: React.ElementType, ariaLabel: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="w-8 h-8 flex items-center justify-center border border-gray-200 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
  >
    <Icon className="text-lg" aria-hidden="true" />
  </a>
));

SocialIcon.displayName = 'SocialIcon';

// Memoized nav item component to prevent unnecessary re-renders
const NavItem = memo(({ 
  name, 
  path, 
  isActive, 
  onClick 
}: { 
  name: string, 
  path: string, 
  isActive: boolean, 
  onClick: () => void 
}) => (
  <li className="my-2 pb-2 list-none text-xs font-normal leading-normal uppercase tracking-wider">
    <Link
      href={path}
      onClick={onClick}
      className={`${
        isActive 
          ? "text-gold" 
          : "text-black hover:border-b hover:border-black hover:border-solid"
      } no-underline relative p-0 font-nunito font-normal transition-all duration-300 border-b border-transparent`}
      aria-current={isActive ? "page" : undefined}
    >
      {name}
    </Link>
  </li>
));

NavItem.displayName = 'NavItem';

function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Memoized click handler to avoid re-creates on re-renders
  const handleItemClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  return (
    <aside
      aria-label="Main navigation"
      className={`sidebar w-64 md:w-80 lg:w-64 xl:w-80 h-screen fixed left-0 top-0 p-6 md:p-8 lg:p-6 xl:p-8 shadow-lg z-40 transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
      style={{ willChange: "transform" }}
    >
      {/* Burger button for mobile navigation */}
      <BurgerButton />
      
      <div className="text-center flex flex-col h-full justify-between">
        {/* Header and Navigation */}
        <div>
          {/* Logo */}
          <header>
            <h1 className="text-4xl !font-cormorant font-semibold uppercase mb-0 mt-4 text-black">
              TPD
              <span className="text-sm align-top relative top-1.25" aria-hidden="true">®</span>
            </h1>
            <p className="font-cursive font-medium text-gold text-2xl tracking-wide m-0">
              weddings <small className="font-medium text-4xl" aria-hidden="true">•</small> events
            </p>
          </header>
          
          {/* Main Navigation */}
          <nav id="sidebar-menu" className="mt-15" aria-label="Main menu">
            <ul className="text-center m-0 p-0 list-none">
              {navItems.map((item) => (
                <NavItem 
                  key={item.path}
                  name={item.name}
                  path={item.path}
                  isActive={pathname === item.path}
                  onClick={() => handleItemClick()}
                />
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer section */}
        <footer className="absolute bottom-15 right-0 left-0 text-center text-sm text-gray-600">
          <div className="w-16 mx-auto mb-2.5 border-b border-gray-200" aria-hidden="true"></div>
          
          {/* Contact Info */}
          <address className="text-base text-black font-cormorant mb-2 not-italic">
            <a href="tel:+11234440000" className="text-black no-underline hover:underline">+1.123.444.0000</a>
            <br />
            <a href="mailto:info@tpdweddings.com" className="text-black no-underline hover:underline">info@tpdweddings.com</a>
          </address>
          
          {/* Social Links */}
          <nav aria-label="Social media links">
            <div className="flex justify-center space-x-2">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon 
                  key={social.name}
                  url={social.url}
                  Icon={social.icon}
                  ariaLabel={social.ariaLabel}
                />
              ))}
            </div>
          </nav>
        </footer>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
