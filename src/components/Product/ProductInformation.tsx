"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BarChart3, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  PieChart, 
  Users 
} from "lucide-react";
import Image from "next/image";

export default function ProductInformation() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  const { scrollYProgress: scrollYCard1 } = useScroll({
    target: card1Ref,
    offset: ["start start", "end start"],
  });
  const scale1 = useTransform(scrollYCard1, [0, 1], [1, 0.9]);

  const { scrollYProgress: scrollYCard2 } = useScroll({
    target: card2Ref,
    offset: ["start end", "start start"],
  });
  const scale2 = useTransform(scrollYCard2, [0, 1], [0.95, 1]);

  return (
    <div className="w-full bg-primary">
      <div className="relative container">
        
        <div ref={card1Ref} className="h-screen sticky top-0 flex items-center justify-center">
          <motion.div 
            style={{ scale: scale1 }}
            className="w-full h-full mt-[200px] bg-cream rounded-t-[40px] overflow-hidden grid md:grid-cols-2 "
          >
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-cream">
                <BarChart3 size={40} />
              </div>
              <h3 className="text-4xl mb-4">Suggested use</h3>
              <p className="max-w-lg w-full">
              Place one strip on your tongue and let it dissolve before swallowing. Take up to one strip daily.
              </p>
            </div> 

            <div className="flex flex-col items-center justify-center p-12 text-center bg-green-100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-cream">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-4xl mb-4">Caution</h3>
              <p className="max-w-lg w-full">
                Use as directed. Consult a physician if pregnant, nursing, under 18, or with medical conditions.
              </p>
            </div>
          </motion.div>
        </div>

        <div ref={card2Ref} className="h-screen sticky top-0 flex items-center justify-center">
          <motion.div 
            className="w-full h-full bg-black rounded-t-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="relative h-full w-full">
              <Image
                src="/image-gallary-1.png" 
                alt="Operational Excellence"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-16 text-cream">
              <h2 className="mb-12 tracking-tight text-cream">Benefits</h2>
              
              <div className="grid grid-cols-2 gap-x-10 gap-y-16">
                <div className="flex flex-col gap-4 max-w-[250px]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Target size={40} className="text-cream" />
                  </div>
                  <p>Cognitive Support from Lion’s Mane                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-[250px]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <TrendingUp size={40} className="text-cream" />
                  </div>
                  <p>Stamina-Promoting Cordyceps                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-[250px]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <PieChart size={40} className="text-cream" />
                  </div>
                  <p>Maitake & Shiitake’s Wellness Boost                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-[250px]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Users size={40} className="text-cream" />
                  </div>
                  <p>Chocolate Flavor, Zero Fuss                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}