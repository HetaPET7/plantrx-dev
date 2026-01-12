"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const HeroBanner = () => {
    // Initialize Lenis for general smooth scrolling if you have other content on the site
    // useEffect(() => {
    //     const lenis = new Lenis();
    //     function raf(time: number) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);
    //     return () => lenis.destroy();
    // }, []);

    // --- ENTRANCE ANIMATION VARIANTS (Kept) ---
    const wordVars = {
        initial: { opacity: 0, filter: "blur(10px)", y: 15 },
        animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
    };

    const imgFrontLoadVars = {
        initial: { opacity: 0, x: 253 }, // This creates the "filling" effect on load
        animate: { opacity: 1, x: 0, transition: { delay: 1, duration: 1.5, ease: [0.33, 1, 0.68, 1] } },
    };

    const iconLoadVars = (delay: number) => ({
        initial: { opacity: 0, filter: "blur(15px)", scale: 0.7 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { delay, duration: 1 } },
    });

    const words = "EXPERT NATURAL REMEDIES THAT WORK. NO CHEMICALS. NO SIDE EFFECTS. REAL RESULTS.".split(" ");

    return (
        // Changed to h-screen so it only takes up the viewport and doesn't scroll forever
        <main className="relative h-screen w-full overflow-hidden bg-cream">
            
            <section className="h-full w-full flex items-center justify-center">
                
                {/* Background road-map (Optional: Set to static opacity since scroll logic is gone) */}
                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-[80%] h-[500px]">
                        <svg width="100%" height="100%" viewBox="0 0 485 322" fill="none">
                            <path 
                                d="M472.479 0.161545C493.646 62.1615 500.379 193.062 357.979 220.662C179.979 255.162 44.4795 172.662 0.479492 321.662" 
                                stroke="#ccc" strokeWidth="2" strokeDasharray="12 12" 
                            />
                        </svg>
                    </div>                        
                </div>

                <div className="px-10 lg:px-[100px] w-full relative z-10">
                    <div className="flex flex-wrap items-center">
                        
                        {/* LEFT CONTENT: Text Stagger Animation */}
                        <div className="lg:w-5/12 w-full">
                            <motion.div 
                                initial="initial" 
                                animate="animate" 
                                transition={{ staggerChildren: 0.05 }}
                            >
                                <h2 className="capitalize font-heading text-4xl lg:text-5xl leading-[1.1] font-bold flex flex-wrap">
                                    {words.map((word, i) => (
                                        <motion.span key={i} variants={wordVars} className="inline-block mr-3 mt-1">
                                            {word}
                                        </motion.span>
                                    ))}
                                </h2>
                            </motion.div>
                        </div>

                        {/* RIGHT CONTENT: Product Animation */}
                        <div className="lg:w-7/12 w-full relative flex justify-center items-center">
                            
                            {/* Floating Icons: Animation on Load */}
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div variants={iconLoadVars(1.2)} initial="initial" animate="animate" className="absolute -top-16 left-[15%] w-24 h-24"><Image src="/hero-1.png" alt="icon" width={100} height={100} /></motion.div>
                                <motion.div variants={iconLoadVars(1.4)} initial="initial" animate="animate" className="absolute -top-16 right-[15%] w-24 h-24"><Image src="/hero-2.png" alt="icon" width={100} height={100} /></motion.div>
                                <motion.div variants={iconLoadVars(1.6)} initial="initial" animate="animate" className="absolute -bottom-16 left-[15%] w-24 h-24"><Image src="/hero-3.png" alt="icon" width={100} height={100} /></motion.div>
                                <motion.div variants={iconLoadVars(1.8)} initial="initial" animate="animate" className="absolute -bottom-16 right-[15%] w-24 h-24"><Image src="/hero-4.png" alt="icon" width={100} height={100} /></motion.div>
                            </div>

                            {/* Main Product: Removed Scroll Transformations */}
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
            </section>
        </main>
    );
};

export default HeroBanner;