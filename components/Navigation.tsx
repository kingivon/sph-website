"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: Array<{ href: string; label: string; isFeatured?: boolean }> = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Our Books" },
    { href: "/services", label: "Publishing Services" },
    { href: "/course-development", label: "Course Development", isFeatured: true },
    { href: "/authors", label: "For Authors" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Orange.png"
              alt="Sapiential Publishing House"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.isFeatured
                    ? "bg-primary text-white hover:bg-primary-600 transition-colors duration-200 font-bold px-4 py-2 rounded-lg"
                    : "text-charcoal hover:text-primary transition-colors duration-200 font-medium"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.isFeatured
                    ? "block py-3 bg-primary text-white hover:bg-primary-600 transition-colors duration-200 font-bold px-4 rounded-lg mb-2"
                    : "block py-3 text-charcoal hover:text-primary transition-colors duration-200 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
