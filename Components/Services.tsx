"use client";

import { FC } from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Bridal Makeup",
    description:
      "Every bride deserves to feel like royalty. We craft timeless bridal looks that reflect your beauty and personality. Because your big day deserves nothing less than perfection.",
    imageUrl: "/bridal.jpg",
  },
  {
    title: "Special Event Makeup",
    description:
      "Every special event deserves a touch of glamour. We create stunning looks that enhance your natural beauty and make you feel confident.",
    imageUrl: "/special.jpg",
  },
  {
    title: "Photoshoot Makeup",
    description:
      "Picture-perfect makeup for every shot. Highlight your best features with flawless, camera-ready looks. Make every frame unforgettable with professional artistry.",
    imageUrl: "/photoshoot.jpg",
  },
  {
    title: "Eye Makeup",
    description:
      "Every detail matters. We create eye-catching looks that enhance your natural beauty and make your eyes pop.",
    imageUrl: "/eye.jpg",
  },
//   {
//     title: "Special Effects",
//     description:
//       "Metus aliquet lorem suscipit maecenas eget rutrum egestas sociosqu lobortis letius nisi eu condimentum quam bibendum ad pede",
//     imageUrl: "/icons/effects.png",
//   },
  {
    title: "Glam Makeup",
    description:
      "Step into the spotlight with dazzling glam.Bold, radiant looks that turn heads and steal hearts.Unleash your inner diva with makeup that shines all night.",
    imageUrl: "/glam.jpg",
  },
];

const OurServices: FC = () => {
  return (
    <section className="bg-[#FFF5F5] py-20 px-4 md:px-10 scroll-smooth">
      <div className="text-center mb-16">
        <p className="text-rose-400 font-semibold text-2xl italic">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mt-2">
          Let us make your beauty
          <br /> more perfect
        </h2>
      </div>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 transition-transform duration-500 transform hover:scale-105 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-80 h-96 flex-shrink-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[#F3C8C8] object-cover rounded-2xl scale-110 z-0" />
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="relative z-10 rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-md mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
