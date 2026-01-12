"use client";

import React, { useState } from "react";
import Link from "next/link";
export default function IngredientsSection() {
  const ingredients = [
    {
      title: "Lion's Mane",
      description: "Supports cognitive function, memory, and mental clarity. Known for promoting nerve growth and brain health.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.3" />
          <path
            d="M 30 45 Q 35 35 40 45 T 50 45 T 60 45 T 70 45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 30 55 Q 35 50 40 55 T 50 55 T 60 55 T 70 55"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 30 65 Q 35 60 40 65 T 50 65 T 60 65 T 70 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Reishi",
      description: "Enhances immune system function and promotes relaxation. Known as the 'mushroom of immortality' for its calming properties.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <ellipse cx="50" cy="45" rx="30" ry="20" fill="currentColor" opacity="0.3" />
          <path
            d="M 25 45 Q 25 25 50 20 Q 75 25 75 45"
            fill="currentColor"
            opacity="0.5"
          />
          <rect x="45" y="45" width="10" height="30" fill="currentColor" rx="2" />
          <ellipse cx="50" cy="75" rx="15" ry="5" fill="currentColor" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: "Cordyceps",
      description: "Boosts energy levels and athletic performance. Supports oxygen utilization and stamina for active lifestyles.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <path
            d="M 45 70 Q 40 60 35 45 Q 33 35 35 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 55 75 Q 52 65 50 50 Q 48 38 50 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="35" cy="25" r="6" fill="currentColor" />
          <circle cx="50" cy="25" r="6" fill="currentColor" />
          <ellipse cx="45" cy="78" rx="18" ry="6" fill="currentColor" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: "Chaga",
      description: "Rich in antioxidants that support overall wellness. Helps protect cells and maintain healthy immune function.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <path
            d="M 40 30 Q 35 40 35 50 Q 35 65 45 70 L 55 70 Q 65 65 65 50 Q 65 40 60 30 Z"
            fill="currentColor"
            opacity="0.4"
          />
          <circle cx="42" cy="40" r="3" fill="currentColor" />
          <circle cx="58" cy="38" r="3" fill="currentColor" />
          <circle cx="48" cy="50" r="4" fill="currentColor" />
          <circle cx="55" cy="55" r="3" fill="currentColor" />
          <path
            d="M 45 70 L 48 85 L 52 85 L 55 70"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Turkey Tail",
      description: "Supports digestive and immune health. Contains beneficial compounds that promote gut microbiome balance.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <path
            d="M 50 70 Q 30 65 25 50 Q 23 40 30 35 Q 40 30 50 35"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M 50 70 Q 70 65 75 50 Q 77 40 70 35 Q 60 30 50 35"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M 30 45 Q 35 42 40 45 Q 42 48 40 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 60 45 Q 65 42 70 45 Q 72 48 70 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Shiitake",
      description: "Promotes cardiovascular health and vitality. Contains compounds that support heart health and energy metabolism.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-40 h-40">
          <ellipse cx="50" cy="40" rx="28" ry="18" fill="currentColor" opacity="0.3" />
          <path
            d="M 25 40 Q 30 28 50 25 Q 70 28 75 40"
            fill="currentColor"
            opacity="0.5"
          />
          <rect x="46" y="40" width="8" height="35" fill="currentColor" rx="2" />
          <ellipse cx="50" cy="75" rx="12" ry="4" fill="currentColor" opacity="0.4" />
          <path
            d="M 30 35 L 45 38"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M 70 35 L 55 38"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-font space-y-8 lg:sticky lg:top-24">
            <p className="text-sm uppercase tracking-wider font-light">
              Premium Ingredients
            </p>
            <h2 className="text-font">
              Mushroom Focus Strips
              <span className="block text-3xl mt-4 font-light">
                Chocolate Flavor
              </span>
            </h2>
            <p className="text-font text-lg leading-relaxed font-light max-w-xl">
              Our premium mushroom focus strips combine six powerful functional
              mushrooms to support cognitive function, energy, and overall wellness.
              Each strip delivers a carefully balanced blend of nature's most
              beneficial fungi in a delicious chocolate flavor.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Dietary Supplement</p>
              <p>30 Oral Strips per Container</p>
            </div>
            <Link href="/feedback" className="nav-link flex ctm-button btn-green btn-link-paddle-item">
              <span className="btn-link-paddle" data-text="Share Feedback">
                <span className="btn-link-paddle-top">Learn More</span>
                <span className="btn-link-paddle-bottom">Learn More</span>
              </span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-1 gap-6 xl:gap-20">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex gap-14 justify-start items-center max-w-xl mx-auto"
              >
                <div className="text-green-600 flex justify-center">
                  {item.icon}
                </div>
                <div className="content flex flex-col gap-4">
                  <h3 className="text-[26px] max-lg:text-2xl font-bold text-font">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}