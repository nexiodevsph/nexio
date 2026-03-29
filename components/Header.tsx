"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <Image
                src="/images/Logos/NDW.png"
                alt="Nexio Dev Logo"
                width={240}
                height={240}
              />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About
              </Link>
              <Link 
                href="/projectpage" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/projectpage") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contact") 
                    ? "text-blue-400" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
