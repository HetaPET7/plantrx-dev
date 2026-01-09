"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ModelViewer from '@/components/ModelViewer';
import RevealText from '@/utils/RevealText';
import Link from 'next/link';
import Parallax from '@/animations/Parallax';

function Product() {
    return (
        <>
        <div className="h-screen bg-cream"></div>
        <div
            className="relative h-screen product-hero-section bg-cream overflow-hidden"
        >
            <div className='h-screen container mx-auto px-6 flex flex-col justify-between pt-15 pb-10 overflow-hidden pointer-events-none'>

                <div className='flex flex-col md:flex-row justify-between gap-10 items-start z-10 pointer-events-auto'>
                    <RevealText
                        tag='h1'
                        className='font-heading text-[14vw] md:text-[8vw] font-extrabold uppercase leading-[0.85] text-primary -tracking-[0.02em] max-w-[600px]'
                    >
                        Focus Strips
                    </RevealText>

                    <div className='content-wrapper 2xl:max-w-[600px] max-w-[400px] select-none'>
                        <RevealText tag='p' className='2xl:*:text-2xl text-justify text-primary leading-relaxed'>
                            Boost your focus naturally with chocolate-flavored mushroom strips. A clean, convenient way to support mental clarity and daily performance.
                        </RevealText>
                    </div>
                </div>
                <div className="absolute inset-0 z-9">
                    <Parallax distance={200}
                        className="w-full h-screen flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-full h-full max-w-[900px] pointer-events-auto cursor-grab">
                            <ModelViewer />
                        </div>
                    </Parallax>
                </div>

                <div className='flex justify-between gap-10 items-end z-10 pointer-events-auto'>
                    <div className='product-info flex flex-col w-full md:w-auto'>
                        <div className='pb-3 uppercase text-primary md:text-xl font-bold flex'>
                            <RevealText tag='p'>Chocolate Flavour</RevealText>
                        </div>
                        <div className='border-t border-primary pt-4 pb-3 uppercase text-primary md:text-xl font-bold flex '>
                            <RevealText tag='p'>Dietary Supplement</RevealText>
                        </div>
                        <div className='border-t border-primary pt-4 pb-3 uppercase text-primary md:text-xl font-bold flex'>
                            <RevealText tag='p'>30 Oral Strips</RevealText>
                        </div>
                    </div>

                    <Link
                        href={"#"}
                        className="ctm-button btn-green link-paddle-item relative z-10 max-w-[250px] w-full"
                    >
                        <span className="link-paddle">
                            <span className="link-paddle-top">Order Now</span>
                            <span className="link-paddle-bottom">Order Now</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="h-screen"></div>
        </>
    );
}

export default Product;
