// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-6 md:px-20 py-4 bg-transparent text-white">
      <div className="text-2xl font-bold -ml-10 " ><Image src="/logo1.png" alt="Tanya Makeovers" width={250} height={250} /></div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-base font-medium">
  <li><a href="#home">Home</a></li>
  <li><a href="#services">Our Promise</a></li>
  <li><a href="#why-us">What We Offer</a></li>
  <li><a href="#about">Why Us</a></li>
  <li><a href="#working">Working</a></li>
  <li><a href="#gallery">Gallery</a></li>
  <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div
        className="md:hidden cursor-pointer"
        onClick={toggleMobileMenu} // Toggle mobile menu
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/40 backdrop-blur-md text-white md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`} // Toggle visibility of mobile menu
      >
        <ul className="flex flex-col gap-6 text-base font-medium py-4 px-6">
  <li><a href="#home">Home</a></li>
  <li><a href="#services">Our Promise</a></li>
  <li><a href="#why-us">What We Offer</a></li>
  <li><a href="#about">Why Us</a></li>
  <li><a href="#working">Working</a></li>
  <li><a href="#gallery">Gallery</a></li>
  <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
