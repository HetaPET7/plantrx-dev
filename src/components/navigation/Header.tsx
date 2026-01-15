"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideDownVariants } from "@/animations/framerMotionVariants";
import { cn } from "@/utils/cn";

function Header() {
    return (
        <>
            <header className="site-header relative z-999 w-full ">
                <div className="relative py-7">
                    <div className="container px-5 flex items-center justify-between gap-5 md:min-h-10 min-h-8">
                        <div className="logo-wrapper relative h-fit">
                            <div className={cn("custom-transition -mt-1.5 xl:text-[40px] xl:leading-[46px] text-[32px] leading-8 font-heading text-primary")}>
                                <Link href={"/"}>
                                Plant<span className="text-secondary">R</span>x
                                </Link>
                            </div>
                        </div>
                        <motion.nav
                            className="navigation-panel"
                            variants={slideDownVariants as any}
                            initial="hidden"
                            whileInView={'visible'}
                        >
                            <ul className="flex items-center xl:gap-20 gap-10">
                                <li className={cn("nav-item flex group link-paddle-item")}>
                                    <Link href="" className="nav-link flex">
                                        <span className="link-paddle">
                                            <span className="link-paddle-top">CART</span>
                                            <span className="link-paddle-bottom">CART</span>
                                        </span>
                                    </Link>
                                </li> 

                                <li className={cn("nav-item flex group link-paddle-item")}>
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
                </div>
            </header>
        </>
    );
}

export default Header;
