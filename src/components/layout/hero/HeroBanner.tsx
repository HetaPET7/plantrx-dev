'use client';

import { useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Parallax from '@/animations/Parallax';
import {
  slideUpVariants,
  textContainerVariants,
} from '@/animations/framerMotionVariants';
import RevealText from '@/utils/RevealText';
import Link from 'next/link';
import { useIsTablet } from '@/hooks/useIsTablet';

type HoverZone = 'left' | 'right' | null;

function HeroBanner() {
  const isTablet = useIsTablet(0, 1025)
  const scrollToNext = () => {
    const target = document.getElementById('next-section');
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY;

    animate(window.scrollY, y, {
      duration: 1,
      ease: 'easeInOut',
      onUpdate: (v) => window.scrollTo(0, v),
    });
  };

  const [activeZone, setActiveZone] = useState<HoverZone>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imageX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };
  const Tag = isTablet ? 'div' : Parallax;

  return (
    <section className="hero-banner-section relative overflow-hidden">
      <div className="relative min-[1025px]:h-dvh min-[768px]:h-[75dvh] h-[85dvh] w-full md:mb-30 mb-10">
        <div className="h-full flex flex-col justify-center items-center">

          <Tag {...(isTablet ? {} : { distance: 200 })} className='h-full w-full flex items-center justify-center'>
            <div
            className='container'
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setActiveZone(null)}
            >
              <motion.div
              className="flex flex-col items-center relative z-20">
                <h1
                className="font-heading md:text-[7vw] md:leading-[10vw] text-[13vw] leading-[15vw] text-center text-primary">
                  Welcome To <span> Plant<span className="text-secondary">R</span>x</span>
                </h1>

                <motion.div 
                  className="text-center md:mt-6 mt-4 text-primary font-body"
                >
                  <RevealText tag='p'>
                    Expert natural remedies that work.
                  </RevealText>
                  <RevealText tag='p'>
                    No chemicals. No side effects. Real results.
                  </RevealText>
                </motion.div>
              </motion.div>

              {/* <div className="absolute inset-0 z-20">
                <div
                  className="absolute left-0 top-0 h-full w-1/2"
                  onMouseEnter={() => setActiveZone('left')}
                />
                <div
                  className="absolute right-0 top-0 h-full w-1/2"
                  onMouseEnter={() => setActiveZone('right')}
                />
              </div>

              <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={
                    activeZone === 'left'
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.85 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ x: imageX, y: imageY }}
                  className="absolute xl:left-30 md:left-20 left-10 xl:top-[10%] md:top-[4%] top-[15%]"
                >
                  <div className='xl:h-[28vw] md:h-[45vw] h-[50vw] w-full aspect-3/4'>
                    <Image
                      src="/hero-hover-1.jpg"
                      alt="hero hover left"
                      width={1000}
                      height={1000} 
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={
                    activeZone === 'right'
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.85 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ x: imageX, y: imageY }}
                  className="absolute xl:right-30 md:right-20 right-7 xl:-bottom-[5%] bottom-20"
                >
                  <div className="xl:h-[28vw] md:h-[45vw] h-[50vw] w-full aspect-3/4">
                    <Image
                      src="/hero-hover-2.jpg"
                      alt="hero hover right"
                      width={1000}
                      height={1000}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div> */}

            </div>
          </Tag>
          <div className='absolute bottom-5 flex justify-center w-full left-0 z-10 container'>
            <motion.div
              onClick={scrollToNext}
              className="scroll-discover-link cursor-pointer z-30"
            >
              <p className="scroll-link text-primary uppercase text-base link-paddle-item *:tracking-normal">
                <span className="link-paddle">
                  <span className="link-paddle-top">Scroll to discover</span>
                  <span className="link-paddle-bottom">Scroll to discover</span>
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
