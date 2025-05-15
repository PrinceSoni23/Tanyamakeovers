// pages/index.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import { StickyScrollRevealDemo } from "./sticky-scroll";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFadeOut(true), 2000); // Start fading
    const removeTimeout = setTimeout(() => setLoading(false), 2700); // Remove loader after fade
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  const toggleMobileMenu = () => {
    console.log('Hamburger clicked!');  // Add a simple log for debugging
    setIsMobileMenuOpen((prev) => !prev); // Toggle the mobile menu state
  };

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-200 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src="/tanya-logo.png"
            alt="Loading..."
            className="w-80 h-80 animate-fadeIn"
          />
        </div>
      )}

      {/* Main content (visible behind loader) */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Navbar Component */}
        <Navbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />

        {/* Background Video */}
        <video
          src="/bgvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white">
          <h2 className="text-3xl md:text-5xl font-light">Enhancing</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Your Beauty</h1>
         <Link href="#contact"><button className="bg-white hover:bg-rose-400 text-black hover:text-white px-6 py-3 rounded-full transition">
            Enquire Now
          </button></Link>
        </div>
       
      </div>
    </>
  );
}
