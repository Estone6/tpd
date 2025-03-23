"use client";

import { memo } from "react";
import Link from "next/link";

interface ContactButtonProps {
  buttonText: string;
  href: string;
}

/**
 * ContactButton - A styled call-to-action button
 */
function ContactButton({ buttonText, href }: ContactButtonProps) {
  return (
    <Link 
      href={href}
      className="inline-block px-8 py-3 bg-black text-white no-underline uppercase text-xs tracking-wider font-nunito border border-black transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
    >
      {buttonText}
    </Link>
  );
}

export default memo(ContactButton); 