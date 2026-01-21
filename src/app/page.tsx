"use client";
import Header from "@/components/navigation/Header";
import Footer from '@/components/navigation/Footer';
import VideoWithText from "@/components/VideoWithText";
import CustomCursor from "@/utils/CustomCursor";
import SvgLayout from "@/components/layout/SvgLayout";
import ProductStory from "@/components/Product/ProductStory";
import ProductInformation from "@/components/Product/ProductInformation";
import HeroBannerV2 from "@/components/layout/hero/HeroBannerV2";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProductBenefits from "@/components/Product/ProductBenefits";
import ProductDetails from "@/components/Product/ProductDetails";
import MushroomSection from "@/components/Product/MushroomSection";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <motion.div
        className='product-cta-wrapper fixed max-w-[140px] -rotate-12 right-14 mb-10 bottom-0 z-999999'
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="cta-wrapper max-lg:hidden">
          <Link href={"#"} className="relative">
            <Image
              alt='shop-now-btn'
              src={"/shop-now-vector.svg"}
              width={600}
              height={600}
              className="bg-vector"
            />
            <Image
              alt='shop-now-btn'
              src={"/shop-now-text.svg"}
              width={600}
              height={600}
              className="transition-transform duration-300 absolute inset-0"
            />
          </Link>
        </div>
      </motion.div>
      <Header />
      <div className="fixed bottom-0 inset-x-0 z-9999999 pt-2 hidden max-lg:block bg-primary/70 backdrop-blur-md">
        <Link
          href="#"
          className="relative block text-center"
        >
          <h3 className="tracking-[2px]! uppercase font-bold font-heading text-white">
            Shop Now
          </h3>
        </Link>
      </div>
      <div className="relative z-9 bg-cream">
        <SvgLayout />
        <HeroBannerV2 />
        <ProductStory />
        <ProductBenefits />
        <MushroomSection />
      </div>
      <div className="relative z-999999 bg-cream">
        {/* <ProductDetails /> */}
        <VideoWithText />
        <Footer />
      </div>
    </main>
  );
}