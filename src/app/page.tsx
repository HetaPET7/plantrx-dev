"use client";
import { useState } from 'react';
import HeroBanner from "@/components/layout/hero/HeroBanner";
import Header from "@/components/navigation/Header";

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
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen" id="next-section"></div>
      </div>
    </>
  );
}