"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const columnImagesData = [
    "./saumya.jpeg",
    "./img1.jpg",
    "./img2.jpg",
    "./img4.jpg",
    "./img3.jpg",
    "./img5.jpg",
    "./img7.jpg",
    "./img4.jpg",
    "./img6.jpg",
    "./saumya.jpeg",
    "./img4.jpg",
    "./img5.jpg",
];

export function ColumnsBlock({ className }: { className?: string }) {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.15]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.45]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.25]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section className={`${className} main bg-pink-50  w-full`}>
                    <p className="text-rose-400 font-semibold py-8 text-center text-5xl italic">Our Gallery</p>
            <div className="spacer h-[5vh]" />
            <div
                ref={gallery}
                className="gallery h-[175vh] sm:h-screen  bg-pink-50 overflow-hidden px-12 xl:px-4 xs:px-0"
            >
                <div className="galleryWrapper relative  h-[200vh] flex items-center justify-center gap-12 xl:gap-8 lg:gap-4 xs:gap-2">
                    <Column
                        images={[columnImagesData[0], columnImagesData[1], columnImagesData[2]]}
                        y={y} className={undefined}                    />
                    <Column
                        images={[columnImagesData[3], columnImagesData[4], columnImagesData[5]]}
                        y={y2} className={undefined}                    />
                    <Column
                        images={[columnImagesData[6], columnImagesData[7], columnImagesData[8]]}
                        y={y3} className={undefined}                    />
                    <Column
                        className="xs:hidden"
                        images={[columnImagesData[9], columnImagesData[10], columnImagesData[11]]}
                        y={y4}
                    />
                </div>
            </div>
            <div className="spacer h-48" />
        </section>
    );
}

type ColumnProps = {
    images: string[];
    y: any;
    className?: string;
};

function Column({ images, y, className }: ColumnProps) {
    return (
        <motion.div
            className={`${className} column relative h-full w-1/4 min-w-[20%] 2xs:min-w-[34%] flex flex-col gap-12 xl:gap-8 lg:gap-4 xs:gap-2 sm:w-1/3`}
            style={{ y }}
        >
            {images.map(src => (
                <div
                    key={src}
                    className="imageContainer relative h-1/3 w-full rounded-xl xl:h-1/4 sm:h-1/6"
                >
                    <Image
                        src={`/images/gallery/columns/${src}`}
                        alt={`image${src}`}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ))}
        </motion.div>
    );
}

Column.propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    y: PropTypes.shape({
        current: PropTypes.number.isRequired,
    }).isRequired,
};

ColumnsBlock.propTypes = {
    className: PropTypes.string,
};
