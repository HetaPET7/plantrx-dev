"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { slideUpVariants } from '@/animations/framerMotionVariants';
import Parallax from '@/animations/Parallax';
import RevealText from '@/utils/RevealText';
import Link from 'next/link';
import { useState } from "react";

function Footer() {
  const [hovered, setHovered] = useState(false);
  return (
    <footer className="footer py-28 bg-primary">
      <div className="container">
        <div className="footer-main">
          <div className='flex gap-5 justify-between flex-wrap'>
            <div className='flex flex-col gap-5 max-w-xl'>
              <RevealText
                tag="h2"
                className="xl:text-5xl font-bold text-cream">
                We Value Your Opinion
              </RevealText>
              <div className='content'>
                <RevealText
                  tag="p"
                  className="text-cream">
                  Help us grow by sharing your thoughts. Your feedback shapes the future of PlantRx.
                </RevealText>
              </div>
              <div className='offer'>
                <RevealText
                  tag="span"
                  className="text-cream font-bold">
                  Get 15% off any purchase as a thank you!
                </RevealText>
                <span></span>
              </div>
              <Link href="" className="nav-link flex ctm-button btn-cream btn-link-paddle-item">
                <span className="btn-link-paddle" data-text="Share Feedback">
                  <span className="btn-link-paddle-top">Share Feedback</span>
                  <span className="btn-link-paddle-bottom">Share Feedback</span>
                </span>
              </Link>
            </div>
            <div className='contact'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col'>
                  <RevealText
                    tag="h4"
                    className="text-cream font-bold uppercase">
                    General Support
                  </RevealText>
                  <Link href="" className="nav-link flex link-paddle-item">
                    <span className="link-paddle text-cream text-2xl leading-7" data-text="Share Feedback">
                      <span className="link-paddle-top">support@plantrxapp.com</span>
                      <span className="link-paddle-bottom">support@plantrxapp.com</span>
                    </span>
                  </Link>
                </div>
                <div className='flex flex-col'>
                  <RevealText
                    tag="h4"
                    className="text-cream font-bold uppercase">
                    General Support
                  </RevealText>
                  <Link href="" className="nav-link flex link-paddle-item">
                    <span className="link-paddle text-cream text-2xl leading-7" data-text="Share Feedback">
                      <span className="link-paddle-top">support@plantrxapp.com</span>
                      <span className="link-paddle-bottom">support@plantrxapp.com</span>
                    </span>
                  </Link>
                </div>
                <div className='flex flex-col'>
                  <RevealText
                    tag="h4"
                    className="text-cream font-bold uppercase">
                    General Support
                  </RevealText>
                  <Link href="" className="nav-link flex link-paddle-item">
                    <span className="link-paddle text-cream text-2xl leading-7" data-text="Share Feedback">
                      <span className="link-paddle-top">support@plantrxapp.com</span>
                      <span className="link-paddle-bottom">support@plantrxapp.com</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='social-media'>
              <div className="social-main">
                <Link
                  href=""
                  className="inline-flex items-center relative"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <span
                    style={{
                      maxWidth: hovered ? "48px" : "0px",
                      opacity: hovered ? 1 : 0,
                      transform: hovered
                        ? "translateX(0) scale(1)"
                        : "translateX(-5px) scale(0.85)",
                      overflow: "hidden",
                      transition:
                        "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10 text-cream"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>

                  <span
                    style={{
                      transform: hovered ? "translateX(44px)" : "translateX(0)",
                      transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                    }}
                    className="text-cream text-5xl uppercase leading-12"
                  >
                    Facebook
                  </span>
                </Link>
              </div>

              {/* <div className="social-main">
                <Link href="" className="nav-link flex link-paddle-item">
                  <div className='icone'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      width="1em"
                      height="1em"
                      className='w-6 h-6 text-cream'
                    >
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </div>
                  <span className="link-paddle text-cream text-2xl leading-7" data-text="Share Feedback">
                    <span className="link-paddle-top">Facebook</span>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

