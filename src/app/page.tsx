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
        <div className="cta-wrapper hidden">
          <Link href={"#"} className="relative">
            <Image
              alt='shop-now-btn'
              src={"/shop-now-vector.svg"}
              width={600}
              height={600}
              className="bg-vector"
            />
            {/* <Image
              alt='shop-now-btn'
              src={"/shop-now-text.svg"}
              width={600}
              height={600}
              className="transition-transform duration-300 absolute inset-0"
            /> */}
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full">
            <h4 className="text-white text-center font-playfair font-bold max-w-[200px] lg:text-2xl">Add To Cart</h4>
            </div>
          </Link>
        </div>
      </motion.div>
      <Header />
      <div className="fixed bottom-3 inset-x-0 z-9999999 cursor-pointer font-playfair text-black items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-transform duration-300 ease-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 sm:[&_svg]:size-5 [&_svg]:shrink-0 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 h-9 px-3 py-1.5 sm:h-10 sm:px-7 sm:py-6 sm:text-xl luxury-button-primary flex text-sm w-max left-1/2 -translate-x-1/2">
        <Link
          href="#"
          className="relative flex items-center justify-center gap-3 text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart lg:w-6! lg:h-6! w-8 h-8 text-black" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>

          <h4 className="tracking-[2px]! capitalize font-bold font-playfair text-black">
            Add To Cart
          </h4>
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
        {/* <VideoWithText /> */}
        <Footer />
      </div>
    </main>
  );
}