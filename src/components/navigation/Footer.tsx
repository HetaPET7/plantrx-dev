"use client";

import React, { useState } from "react";
import Link from "next/link";

import RevealText from "@/utils/RevealText";

function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    // <footer className="footer sticky bottom-0 -z-1">
    //   <div className="container">
    //     <div className="footer-main pt-20 pb-16 max-md:mt-10">

    //       <div className="flex max-[991px]:flex-wrap gap-5 max-[991px]:gap-y-9 max-[991px]:gap-x-0 justify-between min-[991px]:py-10 py-8">

    //         {/* LEFT CONTENT */}
    //         <div className="flex flex-col gap-4 max-w-xl w-1/2 max-md:w-full max-[991px]:pr-5 max-md:pr-0">
    //           <RevealText tag="h2" className="text-2xl! leading-normal!">
    //             We Value Your Opinion
    //           </RevealText>

    //           <RevealText tag="p" className="text-font text-base leading-relaxed">
    //             Help us grow by sharing your thoughts. Your feedback shapes the future of PlantRx.
    //           </RevealText>

    //           <RevealText tag="span" className="text-font  text-base">
    //             Get 15% off any purchase as a thank you!
    //           </RevealText>

    //           <Link href="/feedback" className="nav-link flex ctm-button btn-green btn-link-paddle-item">
    //             <span className="btn-link-paddle" data-text="Share Feedback">
    //               <span className="btn-link-paddle-top">Share Feedback</span>
    //               <span className="btn-link-paddle-bottom">Share Feedback</span>
    //             </span>
    //           </Link>
    //         </div>

    //         {/* CONTACT */}
    //         <div className="contact w-[30%] max-[991px]:w-1/2 max-md:w-full">
    //           <div className="flex flex-col gap-10 max-[990px]:gap-7">

    //             {[
    //               { title: "General Support", email: "support@plantrxapp.com" },
    //               { title: "Privacy & GDPR", email: "legal@plantrxapp.com" },
    //               { title: "Billing & Refunds", email: "billing@plantrxapp.com" },
    //             ].map((item, index) => (
    //               <div key={index} className="flex flex-col">
    //                 <RevealText tag="h4" className="uppercase *:text-lg *:leading-[22px]">
    //                   {item.title}
    //                 </RevealText>

    //                 <Link href={`mailto:${item.email}`} className="nav-link flex link-paddle-item">
    //                   <span className="link-paddle text-font text-lg max-md:text-base leading-7">
    //                     <span className="link-paddle-top">{item.email}</span>
    //                     <span className="link-paddle-bottom">{item.email}</span>
    //                   </span>
    //                 </Link>
    //               </div>
    //             ))}

    //           </div>
    //         </div>

    //         {/* SOCIAL MEDIA */}
    //         <div className="social-media w-[20%] max-[991px]:w-1/2 max-md:w-full">
    //           <div className="flex flex-col gap-4">
    //             {/* Instagram */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://instagram.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("instagram")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "instagram" ? "20px" : "0px",
    //                     opacity: hoveredItem === "instagram" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "instagram"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-4.5">
    //                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    //                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    //                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "instagram" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   Instagram
    //                 </span>
    //               </Link>
    //             </div>

    //             {/* Facebook */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://facebook.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("facebook")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "facebook" ? "20px" : "0px",
    //                     opacity: hoveredItem === "facebook" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "facebook"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" width="1em" height="1em" className="w-10 h-4.5">
    //                     <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "facebook" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   Facebook
    //                 </span>
    //               </Link>
    //             </div>

    //             {/* Pinterest */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://pinterest.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("pinterest")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "pinterest" ? "20px" : "0px",
    //                     opacity: hoveredItem === "pinterest" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "pinterest"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
    //                     <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "pinterest" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   Pinterest
    //                 </span>
    //               </Link>
    //             </div>

    //             {/* TikTok */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://tiktok.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("tiktok")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "tiktok" ? "20px" : "0px",
    //                     opacity: hoveredItem === "tiktok" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "tiktok"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
    //                     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "tiktok" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   TikTok
    //                 </span>
    //               </Link>
    //             </div>

    //             {/* X (Twitter) */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://twitter.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("twitter")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "twitter" ? "20px" : "0px",
    //                     opacity: hoveredItem === "twitter" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "twitter"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
    //                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "twitter" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   Twitter
    //                 </span>
    //               </Link>
    //             </div>

    //             {/* LinkedIn */}
    //             <div className="social-main">
    //               <Link
    //                 href="https://linkedin.com"
    //                 className="inline-flex items-center relative text-font"
    //                 onMouseEnter={() => setHoveredItem("linkedin")}
    //                 onMouseLeave={() => setHoveredItem(null)}
    //               >
    //                 <span
    //                   style={{
    //                     maxWidth: hoveredItem === "linkedin" ? "20px" : "0px",
    //                     opacity: hoveredItem === "linkedin" ? 1 : 0,
    //                     transform:
    //                       hoveredItem === "linkedin"
    //                         ? "translateX(0) scale(1)"
    //                         : "translateX(-5px) scale(0.85)",
    //                     overflow: "hidden",
    //                     transition:
    //                       "max-width 0.35s ease, opacity 0.25s ease, transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                     display: "flex",
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                   }}
    //                 >
    //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-4.5">
    //                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    //                   </svg>
    //                 </span>
    //                 <span
    //                   style={{
    //                     transform: hoveredItem === "linkedin" ? "translateX(10px)" : "translateX(0)",
    //                     transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    //                   }}
    //                   className="text-xl max-md:text-lg capitalize leading-6 text-font"
    //                 >
    //                   LinkedIn
    //                 </span>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* COPYRIGHT */}
    //       <div className="border-t border-font min-[991px]:py-5 py-2.5">
    //         <div className="flex gap-2 flex-wrap items-center justify-between">
    //         <a href="#">
    //             <div className="flex items-center gap-3 lg:gap-4">

    //               <div className="w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl lg:rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="24"
    //                   height="24"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   className="w-5 h-5 lg:w-6 lg:h-6 text-white"
    //                 >
    //                   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    //                   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    //                 </svg>

    //               </div>
    //               <div className="text-2xl lg:text-[30px] font-bold font-playfair text-primary">
    //                 Plant<span className="text-light-orange">R</span>x
    //               </div>
    //             </div>
    //           </a>

    //           <RevealText tag="p" className="text-lg font-bold text-font">
    //             © 2025, PlantRx Ltd. All rights reserved.
    //           </RevealText>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>



    <footer className="bg-cream text-gray-900 border-t border-gray-200">
      <div className="container">
          <div className="hidden py-8 border-b border-gray-200">
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-white">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Join The Herb Club</h3>
                <p className="text-sm text-gray-600">Get 10% off your first purchase + exclusive wellness tips</p>
            </div>
            <form className="flex gap-2">
                <input type="email" className="flex sm:h-10 w-full rounded-md border px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm sm:file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-gray-50  border-gray-200  h-12" placeholder="Your email" data-testid="input-newsletter-email-mobile" defaultValue="" />
                <button className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 sm:[&amp;_svg]:size-5 [&amp;_svg]:shrink-0 py-1.5 text-sm sm:h-10 sm:px-4 sm:py-2 sm:text-base bg-amber-500 hover:bg-amber-600 text-white font-medium h-12 px-4 touch-manipulation" type="submit" data-testid="button-newsletter-subscribe-mobile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </button>
            </form>
          </div>
          <div className="hidden py-6 border-b border-gray-200 ">
            <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider text-center mb-4">Follow Us</h4>
            <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/plantrxapp/" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5 text-gray-700 ">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578851222577" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="Facebook">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
                  </svg>
                </a>
                <a href="https://uk.pinterest.com/PlantRxApp/" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="Pinterest">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@plantrx" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="TikTok">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                  </svg>
                </a>
                <a href="https://x.com/PlantRxApp" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="X (Twitter)">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/zayan-beg-91002a378/" className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center hover:bg-amber-100  transition-colors cursor-pointer" aria-label="LinkedIn">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
            </div>
          </div>
          <div className="hidden">
            <div className="border-b border-gray-200  md:border-0">
                <button type="button" className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default touch-manipulation">
                  <h4 className="text-sm font-semibold text-gray-900  uppercase tracking-wider">Explore</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform md:hidden ">
                      <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <div className="overflow-hidden transition-all duration-300 md:overflow-visible max-h-0 md:max-h-none">
                  <ul className="space-y-3 pl-1">
                      <li><a href="/" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Home</a></li>
                      <li><a href="/remedies" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Remedies</a></li>
                      <li><a href="/articles" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Articles</a></li>
                      <li><a href="/store" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Store</a></li>
                      <li><a href="/smart-tools" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Tools</a></li>
                      <li><a href="/pricing" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Pricing</a></li>
                  </ul>
                </div>
            </div>
            <div className="border-b border-gray-200 md:border-0">
                <button type="button" className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default touch-manipulation">
                  <h4 className="text-sm font-semibold text-gray-900  uppercase tracking-wider">Company</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform md:hidden ">
                      <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <div className="overflow-hidden transition-all duration-300 md:overflow-visible max-h-0 md:max-h-none">
                  <ul className="space-y-3 pl-1">
                      <li><a href="/about/plantrx" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">About PlantRx</a></li>
                      <li><a href="/experts" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Expert Network</a></li>
                      <li><a href="https://af.uppromote.com/0yx2kn-wu/register" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1 cursor-pointer">Affiliate Program</a></li>
                      <li><a href="/contact" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Contact Us</a></li>
                  </ul>
                </div>
            </div>
            <div className="border-b border-gray-200 md:border-0">
                <button type="button" className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default touch-manipulation">
                  <h4 className="text-sm font-semibold text-gray-900  uppercase tracking-wider">Legal</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform md:hidden ">
                      <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <div className="overflow-hidden transition-all duration-300 md:overflow-visible max-h-0 md:max-h-none">
                  <ul className="space-y-3 pl-1">
                      <li><a href="/privacy-policy" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Privacy Policy</a></li>
                      <li><a href="/terms" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Terms of Service</a></li>
                      <li><a href="/refunds" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Refund Policy</a></li>
                      <li><a href="/disclaimer" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Medical Disclaimer</a></li>
                      <li><a href="/cookie-policy" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Cookie Policy</a></li>
                      <li><a href="/dmca-policy" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">DMCA Policy</a></li>
                      <li><a href="/liability" className="text-sm text-gray-600  hover:text-amber-600  transition-colors block py-1">Liability Waiver</a></li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="block py-12">
            {/* <div className="flex items-center space-x-3 mb-10">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-6 h-6 text-white">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900 ">PlantRx</span>
            </div> */}
            <a href="#">
              <div className="flex items-center gap-3 lg:gap-4 mb-10">
                <div className="w-11 h-11 lg:w-14 lg:h-14 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                    >
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                </div>
                <div className="text-2xl lg:text-[30px] font-bold font-playfair text-primary">
                    Plant<span className="text-light-orange">R</span>x
                </div>
              </div>
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <div>
                  <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider mb-4">Platform</h4>
                  <ul className="space-y-3">
                      <li><a href="/about/plantrx" className="text-sm text-black37  hover:text-secondary  transition-colors">About PlantRx</a></li>
                      <li><a href="/remedies" className="text-sm text-black37  hover:text-secondary  transition-colors">Our Remedies</a></li>
                      <li><a href="/experts" className="text-sm text-black37  hover:text-secondary  transition-colors">Expert Network</a></li>
                      <li><a href="https://af.uppromote.com/0yx2kn-wu/register" className="text-sm text-black37  hover:text-secondary  transition-colors cursor-pointer">Affiliate Program</a></li>
                      <li><a href="/privacy-policy" className="text-sm text-black37  hover:text-secondary  transition-colors">Privacy Policy</a></li>
                      <li><a href="/terms" className="text-sm text-black37  hover:text-secondary  transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider mb-4">Support</h4>
                  <ul className="space-y-3">
                      <li><a href="/contact" className="text-sm text-black37  hover:text-secondary  transition-colors">Contact Us</a></li>
                      <li><a href="/refunds" className="text-sm text-black37  hover:text-secondary  transition-colors">Refund Policy</a></li>
                      <li><a href="/disclaimer" className="text-sm text-black37  hover:text-secondary  transition-colors">Medical Disclaimer</a></li>
                      <li><a href="/liability" className="text-sm text-black37  hover:text-secondary  transition-colors">Liability Waiver</a></li>
                      <li><a href="/cookie-policy" className="text-sm text-black37  hover:text-secondary  transition-colors">Cookie Policy</a></li>
                      <li><a href="/dmca-policy" className="text-sm text-black37  hover:text-secondary  transition-colors">DMCA Policy</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider mb-4">Explore</h4>
                  <ul className="space-y-3">
                      <li><a href="/" className="text-sm text-black37  hover:text-secondary  transition-colors">Home</a></li>
                      <li><a href="/remedies" className="text-sm text-black37  hover:text-secondary  transition-colors">Remedies</a></li>
                      <li><a href="/articles" className="text-sm text-black37  hover:text-secondary  transition-colors">Articles</a></li>
                      <li><a href="/store" className="text-sm text-black37  hover:text-secondary  transition-colors">Store</a></li>
                      <li><a href="/smart-tools" className="text-sm text-black37  hover:text-secondary  transition-colors">Tools</a></li>
                      <li><a href="/pricing" className="text-sm text-black37  hover:text-secondary  transition-colors">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider mb-4">Connect</h4>
                  <ul className="space-y-3">
                      <li>
                        <a href="https://www.instagram.com/plantrxapp/" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                            Instagram
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=61578851222577" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
                            </svg>
                            Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://uk.pinterest.com/PlantRxApp/" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                            </svg>
                            Pinterest
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@plantrx" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                            </svg>
                            TikTok
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/PlantRxApp" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                            </svg>
                            X (Twitter)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/zayan-beg-91002a378/" className="text-sm text-black37  hover:text-secondary  transition-colors flex items-center gap-2 cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                            LinkedIn
                        </a>
                      </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary  uppercase tracking-wider mb-4">We Value Your Opinion</h4>
                  <p className="!text-sm text-black37  mb-3">Help us grow by sharing your thoughts. Your feedback shapes the future of PlantRx.</p>
                  <p className="!text-sm font-medium text-light-orange  mb-4">Get 15% off any purchase as a thank you!</p>
                  <a href="https://tally.so/r/xXjYaG" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-[20px] py-[15px] bg-light-orange hover:bg-green text-white font-medium rounded-[10px] transition-colors cursor-pointer !w-fit xl:min-w-[217px] text-[16px] leading-[20px]" data-testid="button-feedback">Share Feedback</a>
                  {/* <a href="https://tally.so/r/xXjYaG" rel="noopener noreferrer" className="cursor-pointer font-playfair text-black items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-transform duration-300 ease-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 sm:[&_svg]:size-5 [&_svg]:shrink-0 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 h-9 px-3 py-1.5 sm:h-10 sm:px-4 sm:py-2 sm:text-base luxury-button-primary flex text-sm w-max" data-testid="button-feedback">Share Feedback</a> */}
                </div>
            </div>
          </div>
          <div className="hidden py-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-4 h-4 text-white">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900 ">PlantRx</span>
            </div>
            <p className="text-xs text-gray-500  mb-3 px-4">*These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.</p>
            <p className="text-sm text-gray-600 ">© 2025 PlantRx Ltd. All rights reserved.</p>
          </div>
          <div className="block py-6 border-t border-gray-200">
            <p className="text-center !text-xs text-black37  mb-4">*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            <p className="text-center !text-sm text-black37 ">© 2025, PlantRx Ltd. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;