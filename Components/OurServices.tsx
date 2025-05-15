'use client';

import Image from 'next/image';
import { FaCut, FaTshirt } from 'react-icons/fa';
import { GiMirrorMirror } from 'react-icons/gi';

export default function BeautyServices() {
    return (
        <div className="bg-pink-50 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1">
                    <h4 className="text-rose-500 italic font-semibold text-2xl mb-4">How It Works</h4>
                    <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug mb-6">
                        Express your unique self
                        with instant beauty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Your beauty is one of a kind — let it shine instantly.
                        With expert makeup, reveal the best version of yourself in no time.
                        Effortless elegance that highlights your personality and charm.
                        Because feeling beautiful should never wait.
                    </p>

                    {/* Services List */}
                    <div className="space-y-6">
                        {/* Make up */}
                        <div className="flex items-start gap-4">
                            <GiMirrorMirror className="text-rose-400 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-serif font-semibold text-gray-900">Get an appointment</h3>
                                <p className="text-gray-600 text-sm">
                                    Book your spot today and glow tomorrow.
                                    Your beauty transformation is just one click away.
                                </p>
                            </div>
                        </div>

                        {/* Hair style */}
                        <div className="flex items-start gap-4">
                            <FaCut className="text-rose-400 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-serif font-semibold text-gray-900">Choose a Package</h3>
                                <p className="text-gray-600 text-sm">
                                    Pick the perfect makeover plan tailored just for you.
                                    Discover your dream look with our flexible packages.
                                </p>
                            </div>
                        </div>

                        {/* Fashion */}
                        <div className="flex items-start gap-4">
                            <FaTshirt className="text-rose-400 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-serif font-semibold text-gray-900">Get the Services</h3>
                                <p className="text-gray-600 text-sm">
                                    Explore our range of expert makeup services made for you.
                                    Let us bring out your best look with professional care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative w-full max-w-md">
                    <Image
                        src="/servicess.jpg"
                        alt="Beauty Service"
                        width={700}
                        height={700}
                        className="w-full h-auto rounded-l-full object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
