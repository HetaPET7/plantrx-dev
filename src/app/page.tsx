"use client";
import HeroBanner from "@/components/layout/hero/HeroBanner";
import Header from "@/components/navigation/Header";
import ImageGridSection from '@/components/ImageGridSection';
import Footer from '@/components/navigation/Footer';
import QuickProduct from '@/components/Product/QuickProductSection';
import ProductStory from "@/components/Product/ProductStory";
import VideoWithText from "@/components/VideoWithText";
import ProductBenefits from "@/components/Product/Benefits/ProductBenefits";
import IngredientsSection from "@/components/IngredientsSection";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-cream relative z-1">
      <HeroBanner />
        <ProductBenefits />
        <IngredientsSection />
        <VideoWithText />
      </div>
      <Footer />
    </>
  );
}