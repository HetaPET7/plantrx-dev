'use client'

import Parallax from '@/animations/Parallax';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function HeroBanner() {
    // 1. Setup Motion Values for performance (avoids re-renders)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Smoothen the movement
    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    // 3. Handle Mouse Movement
    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const wordVars = {
        initial: { opacity: 0, filter: "blur(10px)", y: 15 },
        animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div
            className='hero-banner-section relative overflow-hidden'
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Hide the default cursor when inside this section
            style={{ cursor: 'none' }}
        >
            {/* 4. The Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovered ? 1 : 0, // Shrink when leaving
                    opacity: isHovered ? 1 : 0,
                }}
            />

            <div>
                <div className="container flex flex-col justify-between items-start h-full pt-50 pb-10">
                    <div className="head-wrapper">
                        <Parallax distance={200}>
                            <motion.h1
                                variants={wordVars}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 1.1 }}
                                className='text-[168px] leading-[141px] text-center tracking-[0.03em] text-primary noisy-text relative'>
                                Mushroom focus Strips
                            </motion.h1>
                        </Parallax>
                    </div>
                    <motion.div
                        className='arrow-wrapper absolute left-10 top-2/4 -translate-y-2/4 z-999'
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="cta-wrapper">
                            <svg width="43" height="216" viewBox="0 0 43 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_71_957)">
                                    <mask id="mask0_71_957" maskUnits="userSpaceOnUse" x="0" y="0" width="43" height="216">
                                        <path d="M42.311 0H0V215.139H42.311V0Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_71_957)">
                                        <path d="M20.8 0L21.542 0.551L21.915 205.462L24.351 199.921C27.494 194.552 33.919 190.145 40.243 189.842C40.725 189.819 42.493 189.496 42.301 190.413C40.321 191.077 38.227 191.144 36.201 191.74C27.487 194.308 23.158 202.328 21.953 210.897C21.831 211.772 22.361 215.412 20.987 215.123C20.097 214.935 20.5 211.802 20.379 210.9C19.226 202.309 14.857 194.311 6.134 191.74C4.346 191.213 2.524 191.162 0.841998 190.711C0.180998 190.534 -0.117002 190.818 0.0419982 189.862C7.379 189.431 14.254 193.808 17.986 199.922L20.796 206.208L20.8 0Z" fill="#218656" stroke="#218656" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_71_957">
                                        <rect width="42.311" height="215.139" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </motion.div>
                    <motion.div
                        className='product-cta-wrapper absolute max-w-[130px] -rotate-12 right-20 bottom-30 z-999'
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="cta-wrapper">
                            <Link href={"#"}>
                                <Image
                                    alt='shop-now-btn'
                                    src={"/shop-now.svg"}
                                    width={600}
                                    height={600}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner