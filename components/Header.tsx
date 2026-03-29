"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-800 sticky top-0 z-40 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <Image
                src="/images/Logos/NDW.png"
                alt="Nexio Dev Logo"
                width={150}
                height={150}
              />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors link-touch ${
                  isActive("/") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors link-touch ${
                  isActive("/about") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About
              </Link>
              <Link 
                href="/projectpage" 
                className={`px-3 py-2 text-sm font-medium transition-colors link-touch ${
                  isActive("/projectpage") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors link-touch ${
                  isActive("/contact") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white button-touch"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium link-touch ${
                isActive("/")
                  ? "text-blue-400 bg-slate-700"
                  : "text-gray-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium link-touch ${
                isActive("/about")
                  ? "text-blue-400 bg-slate-700"
                  : "text-gray-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              About
            </Link>
            <Link
              href="/projectpage"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium link-touch ${
                isActive("/projectpage")
                  ? "text-blue-400 bg-slate-700"
                  : "text-gray-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium link-touch ${
                isActive("/contact")
                  ? "text-blue-400 bg-slate-700"
                  : "text-gray-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
