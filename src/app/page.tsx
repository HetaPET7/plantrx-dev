"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import CustomCursor from "@/utils/CustomCursor";
import SvgLayout from "@/components/layout/SvgLayout";
import HeroBannerV2 from "@/components/layout/hero/HeroBannerV2";
import ProductStory from "@/components/Product/ProductStory";
import ProductBenefits from "@/components/Product/ProductBenefits";
import MushroomSection from "@/components/Product/MushroomSection";

export default function Home() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [hideCTA, setHideCTA] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideCTA(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      <CustomCursor />

      {/* FLOATING VECTOR CTA (OPTIONAL) */}
      <motion.div
        className="product-cta-wrapper fixed max-w-[140px] -rotate-12 right-14 bottom-10 z-[999999]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="cta-wrapper hidden">
          <Link href="#" className="relative block">
            <Image
              alt="shop-now-btn"
              src="/shop-now-vector.svg"
              width={600}
              height={600}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <h4 className="text-white text-center font-playfair font-bold text-2xl">
                Add To Cart
              </h4>
            </div>
          </Link>
        </div>
      </motion.div>

      <Header />

      {/* FIXED BOTTOM ADD TO CART */}
      <motion.div
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9999999]"
        animate={{
          y: hideCTA ? 120 : 0,
          opacity: hideCTA ? 0 : 1,
          scale: hideCTA ? 0.95 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <Link
          href="#"
          className="luxury-button-primary flex items-center justify-center gap-3
            font-playfair font-bold tracking-[2px]
            bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600
            text-black
            h-10 sm:h-11 px-6 sm:px-8 rounded-md
            shadow-lg hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          <span>Add To Cart</span>
        </Link>
      </motion.div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 bg-cream">
        <SvgLayout />
        <HeroBannerV2 />
        <ProductStory />
        <ProductBenefits />
        <MushroomSection />
      </div>

      {/* FOOTER (OBSERVED) */}
      <div ref={footerRef} className="relative z-10 bg-cream">
        <Footer />
      </div>
    </main>
  );
}