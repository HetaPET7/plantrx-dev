"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { slideUpVariants } from '@/animations/framerMotionVariants';
import { useRef } from 'react';

function ImageGridSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center center'],
    });

    const bgScale = useTransform(scrollYProgress, [0, 1], [4.2, 1]);
    return (
        <div className="image-grids-section overflow-hidden relative -z-1" ref={sectionRef}>

            <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ amount: 0.4 }}
                className="image-grids-inner"
            >
                <div className="image-grid grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="image-wrapper">
                            <Image src="/image-grid-1.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image src="/image-grid-2.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image src="/image-grid-3.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="image-wrapper">
                            <Image src="/image-grid-4.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                        <div
                            className="image-wrapper relative overflow-hidden text-cream"
                        >
                            <motion.div
                                style={{ scale: bgScale }}
                                className="absolute inset-0 bg-primary origin-center"
                            />

                            {/* 🔹 Content layer (static position) */}
                            <div className="relative z-10 p-5 text-cream">
                                <motion.h2
                                    variants={slideUpVariants as any}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.5 }}
                                    className="italic xl:text-7xl mb-20 text-cream"
                                >
                                    Wellness <br /> Rooted in <br /> Nature
                                </motion.h2>
                                <motion.div
                                    variants={slideUpVariants as any}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.5 }}
                                    className="xl:text-2xl"
                                >
                                    Discover plant-powered remedies crafted to support everyday health,
                                    combining traditional knowledge with modern insight for a balanced lifestyle.
                                </motion.div>


                            </div>
                        </div>

                        <div className="image-wrapper">
                            <Image src="/image-grid-1.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="image-wrapper">
                            <Image src="/image-grid-2.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image src="/image-grid-3.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image src="/image-grid-4.jpg" alt="image" width={1000} height={1000}
                                className=" w-full h-auto aspect-square min-h-[200px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default ImageGridSection