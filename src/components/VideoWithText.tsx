import RevealText from '@/utils/RevealText';
import React, { useEffect, useRef, useState } from 'react';

function VideoWithText() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollProgress = Math.max(0, Math.min(1,
                (windowHeight - rect.top) / windowHeight
            ));
            const newScale = 1.5 - (scrollProgress * 0.5);
            setScale(newScale);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen overflow-hidden">
            <div ref={containerRef} className="relative w-full mx-auto h-screen top-0">
                <div className="relative overflow-hidden w-full h-full"
                    style={{
                        transform: `scale(${scale})`,
                        transition: 'transform 0.1s ease-out'
                    }}>

                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center max-w-4xl">

                            <RevealText
                                tag="h2"
                                className="font-bold text-white mb-4"
                            >
                                We Craft Durable Gear That Stays Out of the Landfill.
                            </RevealText>

                            <RevealText
                                tag="p"
                                className="text-lg md:text-xl text-white"
                            >
                                Sustainable quality built to last generations
                            </RevealText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWithText;