"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Header() {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY.current) {
        // scrolling UP → show header
        setVisible(true);
      } else {
        // scrolling DOWN → hide header
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "site-header w-full z-[999]",
          "will-change-transform",
          visible
            ? "sticky top-0 animate-[header-slide-down_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            : "animate-[header-slide-up_0.4s_ease-in_forwards]"
        )}
      >
        <div className="relative lg:py-7 py-4 bg-cream">
          <div className="container px-5 flex items-center justify-between gap-5 md:min-h-10 min-h-8">
            
            {/* Logo */}
            <div className="logo-wrapper relative h-fit">
              <div className="custom-transition -mt-1.5 xl:text-[40px] xl:leading-[46px] text-[32px] leading-8 font-heading text-primary">
                <Link href="/">
                  Plant<span className="text-secondary">R</span>x
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <motion.nav
              className="navigation-panel"
              initial="hidden"
              animate="visible"
            >
              <ul className="flex items-center xl:gap-20 gap-10">
                {["CART", "LOGIN"].map((item) => (
                  <li
                    key={item}
                    className="nav-item flex group link-paddle-item"
                  >
                    <Link href="" className="nav-link flex">
                      <span className="link-paddle">
                        <span className="link-paddle-top">{item}</span>
                        <span className="link-paddle-bottom">{item}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

          </div>
        </div>
      </header>
    </>
  );
}