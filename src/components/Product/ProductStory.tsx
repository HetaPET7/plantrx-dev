'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image';
import { useRef, useMemo } from 'react'

const title = "Focus That Fits Your Day";
const lines = ['Clean energy and clarity in a simple daily strip.'];

const imageData = [
    { 
        src: '/image-story-1.png', 
        range: [0.35, 0.45, 0.55, 0.65], 
        side: 'left', align: '3%', targetTop: '25%' 
    },
    { 
        src: '/image-story-2.png', 
        range: [0.50, 0.60, 0.70, 0.80], 
        side: 'right', align: '3%', targetTop: '30%' 
    },
    { 
        src: '/image-story-3.png', 
        range: [0.65, 0.75, 0.85, 0.95], 
        side: 'left', align: '3%', targetTop: '35%' 
    },
];

export default function ProductStory() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const characters = useMemo(() => {
        return title.split("").map((char) => {
            const start = Math.random() * 0.15;
            const end = start + 0.15;
            return { char, start, end };
        });
    }, []);

    return (
        <section className='product-story-section relative'>
            <div ref={sectionRef} className="relative h-[800vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div className='container flex flex-col items-center justify-center h-full'>
                      <h3 className="font-heading text-6xl md:text-8xl font-bold text-center max-w-4xl flex flex-wrap justify-center z-10">
                          {characters.map((item, i) => (
                              <Character
                                  key={i}
                                  char={item.char}
                                  progress={scrollYProgress}
                                  range={[item.start, item.end]}
                              />
                          ))}
                      </h3>

                      <div className="mt-10 text-xl md:text-2xl text-center text-gray-600 z-10">
                          {lines.map((text, index) => {
                              const clipPath = useTransform(
                                  scrollYProgress,
                                  [0.25, 0.35],
                                  [
                                      'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                                      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                  ]
                              )
                              return (
                                  <motion.div key={index} style={{ clipPath }}>
                                      {text}
                                  </motion.div>
                              )
                          })}
                      </div>
                    </div>

                    {imageData.map((img, i) => (
                        <StoryImage 
                            key={i} 
                            src={img.src} 
                            progress={scrollYProgress} 
                            range={img.range as [number, number, number, number]} 
                            side={img.side as 'left' | 'right'}
                            align={img.align}
                            targetTop={img.targetTop}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Character({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) {
    const blur = useTransform(progress, range, [20, 0]);
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]);

    return (
        <motion.span
            style={{
                filter: useTransform(blur, (v) => `blur(${v}px)`),
                opacity,
                y,
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal"
            }}
        >
            {char}
        </motion.span>
    )
}

function StoryImage({ src, progress, range, side, align, targetTop }: { 
  src: string, 
  progress: MotionValue<number>, 
  range: [number, number, number, number],
  side: 'left' | 'right',
  align: string,
  targetTop: string
}) {
  const y = useTransform(progress, range, ["100vh", "0vh", "0vh", "-100vh"]);
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const scale = useTransform(progress, range, [0.6, 1, 1, 0.6]);
  
  const x = useTransform(progress, range, [
    side === 'left' ? "-50%" : "50%",
    "0%", 
    "0%", 
    side === 'left' ? "-50%" : "50%"
]);

const rotate = useTransform(progress, range, [
  side === 'left' ? -60 : 60,  
  side === 'left' ? -10 : 10,  
  side === 'left' ? -10 : 10,  
  side === 'left' ? 60 : -60   
]);
  return (
      <motion.div
      style={{
        y,
        x,
        opacity,
        scale,
        rotate,
        top: targetTop,
        [side]: align,
        originY: 1, 
        originX: side === 'left' ? 0 : 1, 
    }}
          className="absolute w-full max-w-[30%] z-20 pointer-events-none"
      >
          <Image
              src={src}
              alt="Product Story"
              width={1080}
              height={1080}
              className="w-full h-auto object-contain drop-shadow-2xl"
          />
      </motion.div>
  )
}