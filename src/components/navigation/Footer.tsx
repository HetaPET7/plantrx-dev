"use client";

import React, { useState } from "react";
import Link from "next/link";

import RevealText from "@/utils/RevealText";

function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <footer className="footer sticky bottom-0 z-0">
      <div className="container">
        <div className="footer-main mt-20 mb-10 max-md:mt-10">

          <div className="flex max-[991px]:flex-wrap gap-5 max-[991px]:gap-y-9 max-[991px]:gap-x-0 justify-between min-[991px]:py-10 py-8">

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-4 max-w-xl w-1/2 max-md:w-full max-[991px]:pr-5 max-md:pr-0">
              <RevealText tag="h2" className="text-2xl! leading-normal! font-bold text-font">
                We Value Your Opinion
              </RevealText>

              <RevealText tag="p" className="text-font text-base leading-normal">
                Help us grow by sharing your thoughts. Your feedback shapes the future of PlantRx.
              </RevealText>

              <RevealText tag="span" className="text-font font-bold text-base">
                Get 15% off any purchase as a thank you!
              </RevealText>

              <Link href="/feedback" className="nav-link flex ctm-button btn-green btn-link-paddle-item">
                <span className="btn-link-paddle" data-text="Share Feedback">
                  <span className="btn-link-paddle-top">Share Feedback</span>
                  <span className="btn-link-paddle-bottom">Share Feedback</span>
                </span>
              </Link>
            </div>

            {/* CONTACT */}
            <div className="contact w-[30%] max-[991px]:w-1/2 max-md:w-full">
              <div className="flex flex-col gap-10 max-[990px]:gap-7">

                {[
                  { title: "General Support", email: "support@plantrxapp.com" },
                  { title: "Privacy & GDPR", email: "legal@plantrxapp.com" },
                  { title: "Billing & Refunds", email: "billing@plantrxapp.com" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <RevealText tag="h4" className="text-font font-bold uppercase text-sm">
                      {item.title}
                    </RevealText>

                    <Link href={`mailto:${item.email}`} className="nav-link flex link-paddle-item">
                      <span className="link-paddle text-font text-lg max-md:text-base leading-7">
                        <span className="link-paddle-top">{item.email}</span>
                        <span className="link-paddle-bottom">{item.email}</span>
                      </span>
                    </Link>
                  </div>
                ))}

              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="social-media w-[20%] max-[991px]:w-1/2 max-md:w-full">
              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <div className="social-main">
                  <Link
                    href="https://instagram.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("instagram")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "instagram" ? "20px" : "0px",
                        opacity: hoveredItem === "instagram" ? 1 : 0,
                        transform:
                          hoveredItem === "instagram"
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-4.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "instagram" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      Instagram
                    </span>
                  </Link>
                </div>

                {/* Facebook */}
                <div className="social-main">
                  <Link
                    href="https://facebook.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("facebook")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "facebook" ? "20px" : "0px",
                        opacity: hoveredItem === "facebook" ? 1 : 0,
                        transform:
                          hoveredItem === "facebook"
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
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" width="1em" height="1em" className="w-10 h-4.5">
                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "facebook" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      Facebook
                    </span>
                  </Link>
                </div>

                {/* Pinterest */}
                <div className="social-main">
                  <Link
                    href="https://pinterest.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("pinterest")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "pinterest" ? "20px" : "0px",
                        opacity: hoveredItem === "pinterest" ? 1 : 0,
                        transform:
                          hoveredItem === "pinterest"
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "pinterest" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      Pinterest
                    </span>
                  </Link>
                </div>

                {/* TikTok */}
                <div className="social-main">
                  <Link
                    href="https://tiktok.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("tiktok")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "tiktok" ? "20px" : "0px",
                        opacity: hoveredItem === "tiktok" ? 1 : 0,
                        transform:
                          hoveredItem === "tiktok"
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "tiktok" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      TikTok
                    </span>
                  </Link>
                </div>

                {/* X (Twitter) */}
                <div className="social-main">
                  <Link
                    href="https://twitter.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("twitter")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "twitter" ? "20px" : "0px",
                        opacity: hoveredItem === "twitter" ? 1 : 0,
                        transform:
                          hoveredItem === "twitter"
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "twitter" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      Twitter
                    </span>
                  </Link>
                </div>

                {/* LinkedIn */}
                <div className="social-main">
                  <Link
                    href="https://linkedin.com"
                    className="inline-flex items-center relative text-font"
                    onMouseEnter={() => setHoveredItem("linkedin")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      style={{
                        maxWidth: hoveredItem === "linkedin" ? "20px" : "0px",
                        opacity: hoveredItem === "linkedin" ? 1 : 0,
                        transform:
                          hoveredItem === "linkedin"
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                    <span
                      style={{
                        transform: hoveredItem === "linkedin" ? "translateX(10px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
                      }}
                      className="text-xl max-md:text-lg capitalize leading-6 text-font"
                    >
                      LinkedIn
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-font min-[991px]:py-5 py-2.5">
            <div className="flex gap-2 flex-wrap items-center justify-between">
              <Link href="/" className="nav-link flex xl:text-5xl text-3xl font-heading font-semibold text-font">
                <span className="logo-text" data-text="PlantRx">
                  <span className="logo">PlantRx</span>
                </span>
              </Link>

              <RevealText tag="p" className="text-lg font-bold text-font">
                © 2025, PlantRx Ltd. All rights reserved.
              </RevealText>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;