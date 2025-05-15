'use client';

import Image from 'next/image';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className="bg-pink-50 py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Images */}
        <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-end lg:gap-0">
          {/* Left Image - smaller */}
          <div className="relative w-full mb-10 lg:w-1/2 h-[400px] lg:h-[500px]">
            <Image
              src="/saumya.jpeg"
              alt="Makeup process 1"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Image - larger */}
          <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] -mt-4 lg:mt-0">
            <Image
              src="/brush.jpg"
              alt="Makeup process 2"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 mt-10 lg:mt-0">
          <h4 className="text-rose-500 italic font-semibold text-lg mb-4">Why Choose Us</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug mb-6">
            Makeup will make you<br />feel confident
          </h2>
          <p className="text-gray-600 mb-8">
            Makeup is more than just colors — it’s confidence in every stroke.
            It empowers you to express your true self and shine from within.
            With the right look, you do not just wear makeup — you wear your confidence.
            Feel unstoppable, beautiful, and ready to conquer the world.
          </p>

          {/* Skills Highlight */}
          <div className="mb-6 border-b border-pink-200 pb-4">
            <div className="flex items-center gap-3 text-rose-500 mb-1">
              <FaCheckCircle className="text-xl" />
              <h3 className="text-lg font-serif font-semibold text-gray-900">Skills in Makeup</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Mastery of makeup is an art and a science.
              From flawless base to perfect contour, every detail matters.
              I combine creativity with technique to enhance your natural beauty.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-rose-500" />
              <span className="text-gray-900 font-medium text-base">Quality Cosmetics</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-rose-500" />
              <span className="text-gray-900 font-medium text-base">Positive Client Experiences</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-rose-500" />
              <span className="text-gray-900 font-medium text-base">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
