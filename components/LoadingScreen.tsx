"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Keep loading screen visible for a bit after reaching 100%
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Fallback: hide loading screen after 3 seconds max
    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isMounted || !isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-center px-4">
        {/* Logo Container */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto relative">
            <Image
              src="/images/Logos/NDW.png"
              alt="Nexio Dev Logo"
              fill
              className="object-contain responsive-img"
              priority
            />
          </div>
          
          {/* Rotating ring effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-blue-600/20 rounded-full border-t-blue-600 animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Nexio Dev</h2>
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Loading amazing experiences...</p>

        {/* Progress Bar */}
        <div className="w-48 sm:w-56 md:w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-3 sm:mb-4 mx-auto">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{progress}%</p>

        {/* Loading dots animation */}
        <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
