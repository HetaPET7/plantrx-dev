import RevealText from '@/utils/RevealText'
import Image from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BenefitItem from './BenefitItem'
import FocusIcon from '@/components/icons/FocusIcon'
import ChocolateIcon from '@/components/icons/ChocolateIcon'
import AbsorptionIcon from '@/components/icons/Absorption'
import WellnessIcon from '@/components/icons/WellnessIcon'
import MushroomIcon from '@/components/icons/MushroomIcon'
import PlantIcon from '@/components/icons/PlantIcon'

function ProductBenefits() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end end'],
    });

    const gradientOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    const leftBenefits = [
        { title: "Enhanced Focus & Clarity", description: "Supports sustained attention and mental sharpness...", icon: <FocusIcon /> },
        { title: "Fast & Convenient Absorption", description: "Oral strips dissolve quickly, delivering benefits...", icon: <AbsorptionIcon /> },
        { title: "Functional Mushroom Powered", description: "Crafted with functional mushrooms traditionally used...", icon: <MushroomIcon /> },
    ];
 

    const rightBenefits = [
        { title: "Clean, Chocolate Flavor", description: "Smooth, rich chocolate taste with no bitterness...", icon: <ChocolateIcon />  },
        { title: "Daily Wellness Support", description: "Designed for everyday use to support balance...", icon: <WellnessIcon />  },
        { title: "Plant-Based Cognitive Support", description: "A plant-based formula that fits seamlessly...", icon: <PlantIcon />  },
    ];

    return (
        <div ref={sectionRef} className="product-benefits-section relative">
            <div className="benefits-inner container text-center">
            <div className="content-wrapper">
                <RevealText className='capitalize' tag='h2'>Why Mushroom Focus Strips?</RevealText>
                <div className="max-w-[767px] mx-auto mt-5">
                    <RevealText tag='p'>Designed to support mental clarity and everyday focus, Mushroom Focus Strips combine functional mushrooms with a convenient, great-tasting format—so you can stay sharp without the hassle of pills or powders.</RevealText>
                </div>
            </div>
                
                <div className='benefits-wrapper mt-[20vh]'>
                    <div className='flex justify-between gap-20'>

                        <div className='benefits-left mt-[60vh]'>
                            <div className="flex flex-col">
                                {leftBenefits.map((benefit, idx) => (
                                    <BenefitItem
                                        key={idx}
                                        title={benefit.title}
                                        description={benefit.description}
                                        icon={benefit.icon}
                                        className={`benefit h-[70vh] ${idx !== 0 ? 'mt-[60vh]' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='product-wrapper mt-auto sticky bottom-0'>
                        <div className='relative'>
                            <Image
                                src={"/product-empty-new.webp"}
                                width={1000}
                                height={1000}
                                alt='product-benefit-image'
                                className='max-w-[500px]'
                            />
                            <Image
                                src={"/product-fill-new.webp"}
                                width={1000}
                                height={1000}
                                alt='product-benefit-image'
                                className='max-w-[500px] inset-0 absolute z-1'
                            />
                        </div>
                    </div>

                        <div className='benefits-right mt-[60vh]'>
                            <div className="flex flex-col">
                                {rightBenefits.map((benefit, idx) => (
                                    <BenefitItem
                                        key={idx}
                                        title={benefit.title}
                                        description={benefit.description}
                                        icon={benefit.icon}
                                        className="benefit h-[70vh] mt-[60vh]"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <motion.div
            style={{ opacity: gradientOpacity }}
            className="absolute w-full h-full inset-0 block bg-[linear-gradient(180deg,#fffeef_0%,rgba(5,150,105,0.18)_45%,rgba(5,150,105,0.35)_70%,rgba(5,150,105,0.5)_100%)] -z-1"
        />
        </div>
    );
}
export default ProductBenefits;