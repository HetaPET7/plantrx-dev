"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ModelViewer from '@/components/Product/ModelViewer';
import RevealText from '@/utils/RevealText';
import Link from 'next/link';
import Parallax from '@/animations/Parallax';

function QuickProduct() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });      
  
    const modelY = useTransform(
        scrollYProgress,
        [0, 0.45],
        [-120, 0]
      )
      
      const rotationY = useTransform(
        scrollYProgress,
        [0.45, 0.75],
        [Math.PI * 0.6, Math.PI * 2.6]
      )      
      
    
    return (
        <>
        <div
            className="relative product-hero-section bg-cream overflow-hidden pt-20" ref={sectionRef}
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
                <div className="absolute w-full h-full inset-0 z-9">
                    <Parallax distance={500}
                        className="w-full h-screen flex items-end justify-center pointer-events-none"
                    >
                        <motion.div 
                        style={{y: modelY}}
                        className="w-full h-full 2xl:max-w-[900px] max-w-[750px] mr-15 pointer-events-auto cursor-grab">
                            <ModelViewer rotationY={rotationY} />
                        </motion.div>
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
                            <span className="link-paddle-top">Shop Now</span>
                            <span className="link-paddle-bottom">Shop Now</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default QuickProduct;
