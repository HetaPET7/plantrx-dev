"use client";
import Parallax from "@/animations/Parallax";
import HeroBanner from "@/components/layout/hero/HeroBanner";
import Header from "@/components/navigation/Header";

export default function Home() {
  return (
    <>
    <Header />
    <HeroBanner />
    <div className="h-screen">
    </div>
    <div className="h-screen"></div>
    <div className="h-screen" id="next-section">
    </div>
    </>
  );
}