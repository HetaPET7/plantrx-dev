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
        <div className="cta-wrapper">
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
      <div className="relative z-9 bg-cream">
        <SvgLayout />
        {/* <ProductCanvas /> */}
        <HeroBannerV2 />
        <ProductStory />
        <ProductBenefits />
        {/* <ImageGridSection /> */}
        {/* <ProductBenefits /> */}
      </div>
      <div className="relative z-999999 bg-cream">
        <ProductInformation />
        <VideoWithText />
        <Footer />
      </div>
    </main>
  );
}