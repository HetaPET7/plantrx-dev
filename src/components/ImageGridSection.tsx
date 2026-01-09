"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Parallax from '@/animations/Parallax';
import RevealText from '@/utils/RevealText';
import { useIsMobile } from '@/hooks/useIsMobile';

function ImageGridSection() {
    const isMobile = useIsMobile(768);
    return (
        <div className="image-grids-section overflow-hidden relative -z-1" >

            <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                viewport={{ amount: 0.3 }} 
                className="image-grids-inner"
            >
                <div className="image-grid grid xl:grid-cols-3 sm:grid-cols-7 grid-cols-10 2xl:gap-7.5 md:gap-5 gap-2">
                    <div className='max-xl:col-span-2 '>
                        <Parallax distance={500} className="h-full">
                            <motion.div
                                className="flex flex-col 2xl:gap-7.5 md:gap-5 gap-2 h-full">
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-1.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-2.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-3.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                            </motion.div>
                        </Parallax>
                    </div>
                    <div className='max-xl:col-span-3 max-sm:col-span-6'>
                        <Parallax distance={-100} className="h-full">
                            <div className="flex flex-col 2xl:gap-7.5 md:gap-5 gap-2">
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-4.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                <div
                                    className="image-wrapper h-full relative overflow-hidden text-cream bg-primary"
                                >
                                    <div className="relative z-10 xl:p-10 md:p-7 p-3 text-cream">
                                        <RevealText
                                            tag="h2"
                                            className="italic 2xl:text-7xl lg:text-6xl md:text-4xl text-32 max-md:leading-9 max-md:leading-7 lg:mb-10 mb-5 text-cream lg:max-w-[400px]"
                                        >
                                            Wellness Rooted in Nature
                                        </RevealText>

                                        <RevealText
                                            tag="p"
                                            className="xl:*:text-2xl! xl:*:leadinng-9! max-sm:*:text-sm! max-sm:*:leading-[17px]!"
                                        >
                                            Discover plant-powered remedies crafted to support everyday health,
                                            combining traditional knowledge with modern insight for a balanced lifestyle.
                                        </RevealText>

                                    </div>
                                </div>

                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-1.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                
                            </div>
                        </Parallax>
                    </div>
                    <div className='max-xl:col-span-2'>
                        <Parallax distance={500} className="h-full">
                            <div className="flex flex-col 2xl:gap-7.5 md:gap-5 gap-2 h-full">
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-2.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-3.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                                <div className="image-wrapper h-full">
                                    <Image src="/image-grid-4.jpg" alt="image" width={1000} height={1000}
                                        className=" w-full xl:aspect-square aspect-3/4 h-full sm:min-h-[400px] min-h-[320px] object-cover"
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ImageGridSection