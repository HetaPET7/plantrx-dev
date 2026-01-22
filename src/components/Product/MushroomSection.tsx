"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const FLOAT_ITEMS = [
  { id: 1, src: "/float-mushrrom.png", name: "Magic Mushroom", packX: -50, packY: -30, x: -650, y: -450, rotate: -45, scale: 1.2, delay: 0.1 },
  { id: 2, src: "/float-mushroom2.png", name: "Golden Shroom", packX: -100, packY: -60, x: 750, y: 50, rotate: -90, scale: 0.8, delay: 0.25 },
  { id: 3, src: "/float-chocolate1.png", name: "Dark Chocolate", packX: 20, packY: -50, x: 650, y: -450, rotate: 180, scale: 0.9, delay: 0.15 },
  { id: 4, src: "/float-chocolate2.png", name: "Milk Chocolate", packX: 0, packY: -40, x: -750, y: -50, rotate: 25, scale: 1.1, delay: 0.25 },
  { id: 5, src: "/float-mushroom2.png", name: "Wild Shroom", packX: 70, packY: -25, x: -600, y: 400, rotate: 360, scale: 1.0, delay: 0.35 },
  { id: 6, src: "/brown-strips.png", name: "Candy Strips", packX: 10, packY: 0, x: 50, y: -700, rotate: 720, scale: 0.9, delay: 0.3 },
  { id: 7, src: "/brown-strips.png", name: "Sweet Strips", packX: 30, packY: 60, x: 600, y: 450, rotate: -360, scale: 0.7, delay: 0.4 },
  { id: 8, src: "/brown-strips.png", name: "Caramel Strips", packX: -30, packY: 55, x: -150, y: 650, rotate: 450, scale: 0.8, delay: 0.45 },
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
    <section ref={containerRef} className="product-box relative h-[600vh]">
      <div className="product-box  sticky lg:pt-50 top-0 flex h-screen w-full items-center justify-center overflow-hidden">

        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">

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
          <h2>UNBOX YOUR FOCUS</h2>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingElement({ item, progress }: { item: typeof FLOAT_ITEMS[number], progress: MotionValue<number> }) {
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

  const containerOpacity = useTransform(
    progress,
    isStrip
      ? [0, 0.25, 0.4, 0.85, 1]
      : [0, 0.85, 1],
    isStrip
      ? [0, 0, 1, 1, 0]
      : [1, 1, 0]
  );


  const textOpacity = useTransform(progress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0]);
  const textScale = useTransform(progress, [0.2, 0.4], [0.8, 1]);

  const imgScale = useTransform(
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
    <motion.div
      style={{
        x,
        y,
        opacity: containerOpacity,
        zIndex: 10
      }}
      className="box-img absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 w-max max-md:top-[52%]!"
    >
      <motion.img
        src={item.src}
        alt={item.name}
        style={{ scale: imgScale, rotate }}
        className={`object-contain drop-shadow-2xl origin-center
        /* Mobile (<640px) */
        w-35 h-35
        /* Tablet (768px+) */
        md:w-50 md:h-50
        /* Desktop (1024px+) */
        xl:w-60 xl:h-60
        ${isStrip
            ? 'w-20 h-10 xs:w-24 xs:h-12 sm:w-28 sm:h-14 md:w-36 md:h-18 lg:w-44 lg:h-22 xl:w-48 xl:h-24'
            : 'aspect-square'
          }`}
      />


      <motion.p
        style={{ opacity: textOpacity, scale: textScale }}
        className="text-[10px]! xs:!text-xs sm:text-sm! font-bold text-white/95 drop-shadow-2xl text-center px-1.5 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1.5 md:py-2 bg-linear-to-r from-green/80 via-green/90 to-green/80 backdrop-blur-md  rounded-full shadow-2xl whitespace-nowrap min-w-[60px] xs:min-w-[70px] sm:min-w-[85px] md:min-w-[100px] tracking-wide leading-tight"
      >
        {item.name}
      </motion.p>
    </motion.div>
  );
}
