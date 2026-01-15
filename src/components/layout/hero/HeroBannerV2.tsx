"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Parallax from "@/animations/Parallax";
import RevealText from "@/utils/RevealText";

const HeroBannerV2 = () => {
    const wordVars = {
        initial: { opacity: 0, filter: "blur(10px)", y: 15 },
        animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
    };

    const imgFrontLoadVars = {
        initial: { opacity: 0, x: 253 },
        animate: { opacity: 1, x: 0, transition: { delay: 1, duration: 1.5, ease: [0.33, 1, 0.68, 1] } },
    };

    const iconLoadVars = (delay: number) => ({
        initial: { opacity: 0, filter: "blur(15px)", scale: 0.7 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { delay, duration: 1 } },
    });

    return (
        <section className="hero-banner-section relative">
            <div className="relative h-[calc(100dvh-96px)] w-full overflow-hidden ">
                <div className="container h-full">
                    <div className="h-full w-full flex items-center justify-center">
                        <div className="w-full relative z-10">
                            <div className="flex flex-wrap items-center">

                                <div className="lg:w-5/12 w-full">
                                    <div className="head-wrapper">
                                        <Parallax distance={200}>
                                            <motion.h1
                                                variants={wordVars}
                                                initial="initial"
                                                animate="animate"
                                                transition={{ duration: 1.1 }}
                                                className='relative'>
                                                Mushroom focus Strips
                                            </motion.h1>
                                            <RevealText tag="p" className="mt-5">
                                                Enhance focus and everyday wellness with chocolate-flavored Mushroom Focus Strips powered by functional mushrooms.
                                            </RevealText>
                                        </Parallax>
                                    </div>
                                </div>

                                <div className="lg:w-7/12 w-full relative flex justify-center items-center">
                                    <div className="absolute inset-0 pointer-events-none">
                                        <motion.div variants={iconLoadVars(1.2)} initial="initial" animate="animate" className="absolute -top-16 left-[15%] w-24 h-24"><Image src="/hero-1.png" alt="icon" width={100} height={100} /></motion.div>
                                        <motion.div variants={iconLoadVars(1.4)} initial="initial" animate="animate" className="absolute -top-16 right-[15%] w-24 h-24"><Image src="/hero-2.png" alt="icon" width={100} height={100} /></motion.div>
                                        <motion.div variants={iconLoadVars(1.6)} initial="initial" animate="animate" className="absolute -bottom-16 left-[15%] w-24 h-24"><Image src="/hero-3.png" alt="icon" width={100} height={100} /></motion.div>
                                        <motion.div variants={iconLoadVars(1.8)} initial="initial" animate="animate" className="absolute -bottom-16 right-[15%] w-24 h-24"><Image src="/hero-4.png" alt="icon" width={100} height={100} /></motion.div>
                                    </div>
                                    <div className="relative z-50">
                                        <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
                                            <div className="img-bg">
                                                <Image
                                                    src="/product-empty-new.webp"
                                                    alt="Box"
                                                    width={450}
                                                    height={450}
                                                    priority
                                                    className="drop-shadow-2xl"
                                                />
                                            </div>
                                            {/* The "Filling" effect is kept here via imgFrontLoadVars */}
                                            <motion.div
                                                variants={imgFrontLoadVars as any}
                                                initial="initial"
                                                animate="animate"
                                                className="img-front absolute top-0 left-0"
                                            >
                                                <Image src="/product-fill-new.webp" alt="Label" width={450} height={450} />
                                            </motion.div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default HeroBannerV2;