"use client";
import { slideDownVariants } from '@/animations/framerMotionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
    return (
        <header>
            <motion.div 
            variants={slideDownVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="site-header py-7 container fixed top-0 z-99999 w-full">
                <div className="flex items-center justify-between gap-5">
                    <div className='logo-wrapper'>
                        <h1 className="logo-heading text-4xl font-body font-bold text-primary">
                            <Link href={'/'}>
                            Plant
                            <span className='text-secondary'>R</span>
                            x
                            </Link>
                        </h1>
                    </div>
                    <nav className="navigation-panel">
                        <ul className='flex items-center xl:gap-20 gap-10'>
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
                    </nav>
                </div>
            </motion.div>
        </header>
    )
}

export default Header 