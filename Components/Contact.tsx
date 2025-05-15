'use client';

import { useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function AppointmentSection() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nf4erav',
        'template_d9r3k9w',
        form.current!,
        'Sz7hnQdcLPFkFfpea'
      )
      .then(() => {
        setSent(true);
        toast.success('Appointment request sent successfully! Our Team will contact you soon.');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        toast.error('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="bg-pink-50 py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="space-y-6">
          <h4 className="text-rose-500 italic font-semibold text-lg">Make An Appointment</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug">
            Transforming Beauty, One<br />Smile at a Time
          </h2>
          <p className="text-gray-600">
            Every smile tells a story, and we help you make it radiant.
            With expert makeup, we enhance your natural charm and confidence.
            Transforming beauty is not just about looks — it is about how you feel.
            Because your smile is the most beautiful accessory you wear.
          </p>

          <hr className="border-t border-gray-300 my-6" />

          <div className="mt-8 flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-full">
              <FaPhoneAlt className="text-rose-500 text-2xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">NEED HELP?</p>
              <p className="text-rose-500 text-lg font-bold">(+91 6391 319 110)</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Book an appointment</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 text-black outline-black sm:grid-cols-2 gap-4">
              <input type="text" name="user_name" placeholder="Name" className="input bg-rose-50 outline-black" required />
              <input type="text" name="user_phone" placeholder="Phone" className="input bg-rose-50 outline-black" required />
              <input type="email" name="user_email" placeholder="Email" className="input bg-rose-50 outline-black" required />
            </div>
            <textarea name="message" placeholder="Message" rows={4} className="input bg-rose-100 text-black w-full" required></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-rose-400 to-rose-600 text-black py-2 rounded-md font-semibold">
              {sent ? 'SENT ✅' : 'SEND'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input {
          @apply bg-pink-50 border border-pink-100 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300;
        }
      `}</style>
    </div>
  );
}
