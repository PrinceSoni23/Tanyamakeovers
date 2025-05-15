'use client';

import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 shadow-xl px-4 sm:px-8 md:px-12 lg:px-24 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo */}
        <div className="w-40 md:w-48">
          <Image
            src="/tanya-logo.png" // Replace with your actual logo path
            alt="Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Hours & Contact */}
        <div className="text-sm w-full md:w-56">
          <h4 className="font-bold text-2xl mb-2">Reach Us Out</h4>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 text-xl">
            <Link href="https://www.instagram.com/glamourous_look_by_tanya?igsh=djIwbDhxeGc1Nnhy"><FaInstagram /></Link>
            <Link href="https://www.facebook.com/tanyamakeovers"><FaFacebookF /></Link>
            <Link href="mailto:tanyamakeovers153@gmail.com"><FaGoogle /></Link>
          </div>

          <div className="mt-4">tel: +91 6391 319 110</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-4xl mx-auto border-t border-gray-200 mt-6 pt-4 text-xs flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <p>2025 © All Rights Reserved.</p>
        {/* Uncomment if needed */}
        {/* <p>Zostaw opinię <span className="text-pink-600">♥</span> w <a href="#" className="underline">Google</a></p> */}
        {/* <p><a href="#" className="underline">Grochowska 278, 03-841</a></p> */}
      </div>
    </footer>
  );
}
