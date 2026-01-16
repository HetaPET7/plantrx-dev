"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ProductDetails() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const dropAnimation = (settleY: number, delayTime: number) => ({
    initial: { y: -800, opacity: 0 },
    animate: isInView ? { y: settleY, opacity: 1 } : { y: -800, opacity: 0 },
    transition: {
      delay: delayTime,
      duration: 0.8,
      type: "spring" as const,
      damping: 15,
      stiffness: 100
    }
  });

  return (
    <div 
      ref={containerRef} 
      className='relative flex items-stretch justify-between min-h-[700px] w-full bg-white overflow-hidden'
    >
        <div className="w-1/2 bg-green-100 flex items-center justify-center">
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <motion.div 
                    {...dropAnimation(200, 0.9)}
                    className="absolute w-[200px]"
                >
                    <img src="/image4-new.png" alt="Bottom Tin" className="w-full drop-shadow-2xl" />
                </motion.div>

                <motion.div 
                    {...dropAnimation(0, 1.5)}
                    className="absolute w-[200px]"
                >
                    <img src="/image3-new.png" alt="Middle Tin" className="w-full drop-shadow-2xl" />
                </motion.div>

                <motion.div 
                    {...dropAnimation(-195, 2.5)}
                    className="absolute w-[240px]"
                >
                    <img src="/image2-new.png" alt="Top Open Tin" className="w-full drop-shadow-2xl" />
                </motion.div>
            </div>
        </div>

        <div className="w-1/2 bg-green-500 flex items-center justify-center">
             <div className="text-white p-10 max-w-sm">
                <p className="text-lg">Chocolate Flavor Dietary Supplement</p>
                <h3 className="text-2xl font-bold mt-2">30 ORAL STRIPS</h3>
             </div>
        </div>
    </div>
  )
}

export default ProductDetails;
