"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import { slideDownVariants } from "@/animations/framerMotionVariants";
import { useIsMobile } from "@/hooks/useIsMobile";

interface HeaderProps {
    onLoadingComplete?: () => void;
}

function Header({ onLoadingComplete }: HeaderProps) {
    const isMobile = useIsMobile(768);
    const [animationStage, setAnimationStage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [lockLogoAnimation, setLockLogoAnimation] = useState(false);
    const [logoTarget, setLogoTarget] = useState<{ x: number; y: number } | null>(null);

    const logoSlotRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const timers = [
            setTimeout(() => setAnimationStage(1), 100),
            setTimeout(() => setAnimationStage(2), 700),
            setTimeout(() => setAnimationStage(3), 1300),
            setTimeout(() => setAnimationStage(4), 2000),
            setTimeout(() => setAnimationStage(5), 2400),
            setTimeout(() => {
                setIsLoading(false);
                onLoadingComplete?.();
            }, 3600),
        ];

        return () => timers.forEach(clearTimeout);
    }, [onLoadingComplete]);

    useEffect(() => {
        if (!logoSlotRef.current || animationStage !== 5) return;
      
        const measure = () => {
          const rect = logoSlotRef.current!.getBoundingClientRect();
      
          setLogoTarget({
            x: rect.left + rect.width / 2,
            y: isMobile ? 18 : 28 + rect.height / 2, 
          });
        };
      
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
      }, [animationStage]);
      
      

    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoading ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-cream z-99998 flex items-center justify-center"
                style={{ pointerEvents: isLoading ? "auto" : "none" }}
            />

            <header className="site-header md:py-7 py-5 container fixed top-0 z-99999 w-full ">
                <div className="flex items-center justify-between gap-5 md:min-h-10 min-h-8">
                    <div ref={logoSlotRef} className="logo-wrapper relative h-fit" />

                    <motion.nav
                        className="navigation-panel"
                        variants={slideDownVariants as any}
                        initial="hidden"
                        whileInView={!isLoading ? 'visible' : 'opacity: 0 '}
                    >
                        <ul className="flex items-center xl:gap-20 gap-10">
                            <li className="nav-item flex group link-paddle-item">
                                <Link href="" className="nav-link flex">
                                    <span className="link-paddle">
                                        <span className="link-paddle-top">CART</span>
                                        <span className="link-paddle-bottom">CART</span>
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-item flex group link-paddle-item">
                                <Link href="" className="nav-link flex">
                                    <span className="link-paddle">
                                        <span className="link-paddle-top">LOGIN</span>
                                        <span className="link-paddle-bottom">LOGIN</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>
                </div>
            </header>

            <motion.div
                initial={{
                    x: "48vw",
                    y: "48vh",
                    scale: 4,
                }}
                animate={
                    logoTarget
                        ? {
                            x: logoTarget.x,
                            y: logoTarget.y,
                            scale: 1,
                        }
                        : undefined
                }
                transition={{   
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                }}
                onAnimationComplete={() => {
                    setLockLogoAnimation(true); 
                }}
                style={{
                    position: "fixed",
                    transform: "translate(-50%, -50%)",
                    zIndex: 99999
                }}
                className="flex items-center justify-center"
            >   
            <motion.div>
                <Logo
                    isLink={!isLoading}
                    animationStage={lockLogoAnimation ? undefined : animationStage}
                />
            </motion.div>
            </motion.div>

        </>
    );
}

export default Header;
