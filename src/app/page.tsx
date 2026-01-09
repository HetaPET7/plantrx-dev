"use client";
import { useState } from 'react';
import HeroBanner from "@/components/layout/hero/HeroBanner";
import Header from "@/components/navigation/Header";
import ImageGridSection from '@/components/ImageGridSection';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Header onLoadingComplete={handleLoadingComplete} />
      
      <div > 
        <HeroBanner />
        <div id="next-section">
          <ImageGridSection />
        </div>
        <Footer />
      </div> 
    </>
  );
}