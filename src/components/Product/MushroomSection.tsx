"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const FLOAT_ITEMS = [
  { id: 1, src: "/float-mushroom.png",   packX: -50, packY: -30,  x: -650, y: -450, rotate: -45, scale: 1.2, delay: 0.1 },  
  { id: 2, src: "/float-mushroom2.png",  packX: -100,  packY: -60,  x: 750,  y: 50,   rotate: -90, scale: 0.8, delay: 0.25 },  
  { id: 3, src: "/float-chocolate1.png", packX: 20,   packY: -50,  x: 650,  y: -450, rotate: 180, scale: 0.9, delay: 0.15 }, 
  { id: 4, src: "/float-chocolate2.png", packX: 0, packY: -40,  x: -750, y: -50,  rotate: 25,  scale: 1.1, delay: 0.25 }, 
  { id: 5, src: "/float-mushroom2.png",  packX: 70,  packY: -25,  x: -600, y: 400,  rotate: 360, scale: 1.0, delay: 0.35 },  
  { id: 6, src: "/brown-strips.png",      packX: 10,  packY: 0,   x: 50,   y: -700, rotate: 720, scale: 0.9, delay: 0.3 },  
  { id: 7, src: "/brown-strips.png",      packX: 30,  packY: 60,  x: 600,  y: 450,  rotate: -360, scale: 0.7, delay: 0.4 }, 
  { id: 8, src: "/brown-strips.png",      packX: -30, packY: 55,  x: -150, y: 650,  rotate: 450, scale: 0.8, delay: 0.45 }, 
];
export default function MushroomSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const LID_START_OFFSET = 40; 
  
  const lidY = useTransform(smoothProgress, [0, 0.25], [LID_START_OFFSET, -600]);
  const lidRotate = useTransform(smoothProgress, [0, 0.25], [0, -20]);
  const lidOpacity = useTransform(smoothProgress, [0.3, 0.4], [1, 0]);

  const textOpacity = useTransform(smoothProgress, [0.2, 0.3, 0.8, 0.9], [0, 1, 1, 0]);
  const textScale = useTransform(smoothProgress, [0.2, 0.3], [0.9, 1]);
  const textBlur = useTransform(
    smoothProgress,
    [0.2, 0.3, 0.8, 0.9],
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
  );

  return (
    <section ref={containerRef} className="relative h-[600vh]">
      <div className="sticky pt-50 top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] ">
          
          <div className="absolute top-0 left-0 w-full z-0">
            <img 
               src="/Product-fill-box.png" 
               alt="Box" 
               className="w-full h-auto block" 
            />
          </div>

          {FLOAT_ITEMS.map((item) => (
            <FloatingElement 
              key={item.id} 
              item={item} 
              progress={smoothProgress} 
            />
          ))}

          <motion.div
            style={{ y: lidY, rotate: lidRotate, opacity: lidOpacity, zIndex: 20 }}
            className="absolute top-0 left-0 w-full pointer-events-none"
          >
            <img 
               src="/Product-lid.png" 
               alt="Lid" 
               className="w-full h-auto block drop-shadow-2xl" 
            />
          </motion.div>

        </div>

        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, filter: textBlur }}
          className="absolute bottom-10 text-center pointer-events-none z-30"
        >
          <h2>
            UNBOX YOUR FOCUS
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingElement({ item, progress }: { item: any, progress: MotionValue<number> }) {
  const isStrip = item.src.includes('strips');

  const x = useTransform(
    progress, 
    [0, 0.2, 0.6, 1], 
    [item.packX, item.packX, item.x, item.x] 
  );
  
  const y = useTransform(
    progress, 
    [0, 0.2, 0.6, 1], 
    [item.packY, item.packY, item.y, item.y - 150] 
  );

  const opacity = useTransform(
    progress, 
    isStrip 
      ? [0, 0.25, 0.4, 0.85, 1]  
      : [0, 0.85, 1],           
    isStrip 
      ? [0, 0, 1, 1, 0] 
      : [1, 1, 0] 
  );

  const scale = useTransform(
    progress, 
    [0, 0.2, 0.5, 1], 
    [0.6, 0.5, item.scale, item.scale * 0.8]
  );

  const rotate = useTransform(
    progress, 
    [0.2, 1], 
    [0, item.rotate]
  );

  return (
    <motion.img
      src={item.src}
      style={{ 
        x, y, opacity, rotate, scale, 
        zIndex: 10 
      }}
      className={`absolute left-2/4 top-2/4 -translate-2/4 object-contain pointer-events-none drop-shadow-xl
        ${isStrip ? 'w-40 md:w-56' : 'w-32 md:w-48'}`}
    />
  );
} 