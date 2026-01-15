"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/image-gallary-1.png",
  "/image-gallary-2.png",
  "/image-gallary-3.png",
  "/image-gallary-4.png",
  "/image-gallary-5.png", 
];

export default function ContinuousImageGallery() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 10% of the section is visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const startSequence = async () => {
        // 1. Initial nudge to the left (move to -100px)
        await controls.start({
          x: -300,
          transition: { duration: 1.2, ease: "easeOut" },
        });

        // 2. Start continuous infinite scroll
        // We animate from the current -100px position 
        // to (-50% - 100px) to ensure the loop is seamless.
        controls.start({
          x: [ "-100px", "calc(-50% - 100px)" ],
          transition: {
            duration: 25, // Adjust this for speed (higher = slower)
            ease: "linear",
            repeat: Infinity,
          },
        });
      };

      startSequence();
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="w-full py-30 overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          className="flex gap-10 px-3"
          style={{ width: "max-content" }}
        >
          {/* Render images twice for a seamless infinite loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative shrink-0 xl:w-[400px] w-[300px] aspect-square h-auto rounded-[30px] overflow-hidden shadow-black"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                priority={index < 5} // Priority for the first set of images
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}