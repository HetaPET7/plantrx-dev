'use client'

import RevealText from '@/utils/RevealText'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import { useRef, useMemo, useEffect, useState } from 'react'
import { containerBlurVars, itemBlurLeftVars, itemBlurRightVars } from '@/animations/framerMotionVariants';

const title = 'Focus That Fits Your Day'
const lines = ['Clean energy and clarity in a simple daily strip.']

const imageData = [
    {
        src: '/image-story-1.png',
        range: [0.35, 0.45, 0.55, 0.65],
        side: 'left',
        align: '3%',
        targetTop: '25%',
    },
    {
        src: '/image-story-2.png',
        range: [0.5, 0.6, 0.7, 0.8],
        side: 'right',
        align: '3%',
        targetTop: '30%',
    },
    {
        src: '/image-story-3.png',
        range: [0.65, 0.75, 0.85, 0.95],
        side: 'left',
        align: '3%',
        targetTop: '35%',
    },
]

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    return isDesktop
}

export default function ProductStory() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isDesktop = useIsDesktop()

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const characters = useMemo(() => {
        return title.split('').map((char, i) => {
            const start = Math.random() * 0.15
            const end = start + 0.15
            
            // "Focus" positions 0-4 (F-o-c-u-s)
            const isFocusChar = i >= 0 && i <= 4
            // "Day" positions 22-24 (D-a-y)
            const isDayChar = i >= 15 && i <= 26
            
            const className = isFocusChar ? 'green' : 
                             isDayChar ? 'orange' : ''
                             
            return { char, start, end, className }
        })
    }, [])

    const clipPath = useTransform(
        scrollYProgress,
        [0.25, 0.35],
        [
            'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ]
    )

    return (
        <section className='product-story-section relative'>
            <div ref={sectionRef} className="relative lg:h-[800vh] h-auto max-lg:pt-50 max-lg:pb-60 max-sm:pt-10 max-sm:pb-40">
                <div className="text-image sticky top-0 lg:h-screen w-full lg:overflow-hidden">
                    <div className='container flex flex-col items-center justify-center h-full'>
                        <h2 className="font-body lg:text-7xl! lg:leading-23! xl:text-8xl! xl:leading-25! md:text-6xl! md:leading-17! font-bold text-center xl:max-w-3xl max-w-xl">
                            {isDesktop ? (
                                <span className="flex flex-wrap justify-center">
                                    {characters.map((item, i) => (
                                        <Character
                                            key={i}
                                            char={item.char}
                                            className={item.className}
                                            progress={scrollYProgress}
                                            range={[item.start, item.end]}
                                        />
                                    ))}
                                </span>
                            ) : (
                                <RevealText tag="h2" className="text-2xl leading-normal">
                                    <span className="focus-green">Focus</span> That Fits Your <span className="day-orange">Day</span>
                                </RevealText>
                            )}
                        </h2>

                        <div className="lg:mt-4 mt-0 text-center z-10">
                            {isDesktop ? (
                                <>
                                    {lines.map((text, index) => (
                                        <motion.div key={index} style={{ clipPath }}>
                                            {text}
                                        </motion.div>
                                    ))}
                                </>
                            ) : (
                                <RevealText tag="p">
                                    Clean energy and clarity in a simple daily strip.
                                </RevealText>
                            )}
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

function Character({ 
    char, 
    className = '', 
    progress, 
    range 
}: { 
    char: string, 
    className?: string, 
    progress: MotionValue<number>, 
    range: [number, number] 
}) {
    const blur = useTransform(progress, range, [20, 0]);
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]);

    return (
        <motion.span
            className={className}
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
            className="text-with-img absolute w-full max-w-[30%] z-20 pointer-events-none max-lg:transform-none! max-[1025px]:top-[unset]! max-[1025px]:bottom-[150px] max-sm:bottom-[100px] max-lg:opacity-100!"
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
