import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ShoppingCart, User, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Brain, Anchor, Moon, Zap, Sparkles, Heart } from "lucide-react";

type MenuItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  dropdownIcons?: React.ComponentType<any>[];
};

export default function Header() {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Product",
      href: "/product",
      hasDropdown: true,
      dropdownItems: [
        "Mushroom Focus Strips",
        "Digestive + Gut Health Strips",
        "Iron Strips",
        "Sleep Strips",
        "Energy Strips",
        "Beauty + Collagen Strips",
      ],
      dropdownIcons: [Brain, Heart, Anchor, Moon, Zap, Sparkles],
    },
    { name: "Articles", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" }
  ];

  const toggleMobileDropdown = (itemName: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === itemName ? null : itemName);
  };

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "site-header w-full z-999",
          "will-change-transform",
          visible
            ? "sticky top-0 animate-[header-slide-down_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            : "animate-[header-slide-up_0.4s_ease-in_forwards]"
        )}
      >
        <div className="bg-cream">
          <div className="container">
            <div className="flex items-center justify-between h-16 lg:h-20">


              <a href="#">
                <div className="flex items-center gap-3 lg:gap-4">

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


              <nav className="hidden xl:flex items-center gap-8">
                {menuItems.map((item) => {
                  const containerRef = useRef<HTMLDivElement>(null);

                  return (
                    <div
                      key={item.name}
                      ref={containerRef}
                      className="relative group"
                      onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                      onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        className="font-playfair font-bold tracking-[.025em]! flex items-center text-base text-black37 gap-1 transition-colors duration-200 py-2 hover:text-dark-yellow"
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </a>



                      {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                        <div className="absolute top-full mt-0 left-0 mt-0 w-56 z-50">
                          <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-3xl blur-md opacity-30 animate-pulse pointer-events-none"></div>
                          <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-300 rounded-2xl opacity-20 animate-[pulse_2s_ease-in-out_infinite] pointer-events-none"></div>
                          <div className="relative bg-white rounded-2xl shadow-2xl py-4 border border-yellow-200/50 dark:border-yellow-700/30 overflow-hidden animate-slide-down">
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <a
                                key={dropdownItem}
                                href="#"
                                style={{
                                  animationDelay: `${index * 50}ms`,
                                  animationFillMode: 'both'
                                }}
                                className="text-sm  font-playfair px-6 py-3 flex items-center gap-3 font-medium hover:text-yellow-700 transition-all duration-200 hover:bg-yellow-50/70"
                              >
                                <div className="w-9 h-9 p-2 flex items-center justify-center rounded-xl bg-gray-100 transition-transform duration-200 shrink-0">
                                  {item.dropdownIcons && item.dropdownIcons[index] ? (
                                    React.createElement(item.dropdownIcons[index], { className: "w-5 h-5 fill-green stroke-green text-white flex-shrink-0", strokeWidth: 2.5 })
                                  ) : (
                                    <span className="w-5 h-5 shrink-0"></span>
                                  )}
                                </div>
                                <span className="transition-transform duration-200">{dropdownItem}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </nav>



              <div className="hidden xl:flex items-center gap-3">

                <button className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>

                </button>


                <button className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </button>


                <button className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                </button>


                <button className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                </button>


                <button className="cursor-pointer font-playfair  items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground rounded-md px-2.5 py-1 text-xs sm:h-10 sm:px-3 sm:py-1.5 sm:text-sm hidden sm:flex text-black37 hover:text-gray-300 border-gray-300 dark:border-black37 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span> Sign In</span>
                </button>


                <button
                  className="cursor-pointer font-playfair text-black items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-transform duration-300 ease-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 sm:[&_svg]:size-5 [&_svg]:shrink-0 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 h-9 px-3 py-1.5 sm:h-10 sm:px-4 sm:py-2 sm:text-base luxury-button-primary hidden sm:flex text-sm"
                >
                  Sign Up
                </button>
              </div>


              <button
                onClick={handleHamburgerClick}
                className="xl:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200 z-50"
                type="button"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>


      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}


      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-cream z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="px-4 py-6 space-y-4">


          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>


          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="flex-1 py-3 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2"
                    >
                      <ChevronDown
                        className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${mobileActiveDropdown === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </div>


                {item.hasDropdown && mobileActiveDropdown === item.name && item.dropdownItems && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block py-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>


          <div className="pt-6 border-t-2 border-gray-200">
            <h4 className="text-xl font-semibold text-black37 uppercase tracking-wide mb-4">Settings</h4>

            <div className="space-y-3">

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <span className="text-black37 font-medium">Font Size</span>
                <span className="text-lg font-semibold text-black37">A</span>
              </button>


              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <span className="text-black37 font-medium">Language</span>
                <svg className="w-5 h-5 text-black37" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>


              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <span className="text-black37 font-medium">Theme</span>
                <svg className="w-5 h-5 text-black37" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
                </svg>
              </button>
            </div>
          </div>


          <div className="pt-6 border-t-2 border-gray-200">
            <h4 className="text-xl font-semibold text-black37 uppercase tracking-wide mb-4">Account</h4>

            <div className="space-y-3">

              <a
                href="#"
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-black37 font-medium">Shopping Cart</span>
                <ShoppingCart className="w-5 h-5 text-black37" />
              </a>


              <a
                href="#"
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-black37 font-medium">My Account</span>
                <User className="w-5 h-5 text-black37" />
              </a>
            </div>
          </div>


          <div className="pt-6 space-y-3">
            <button
              className="w-full px-4 py-3 text-black37 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </button>
            <button
              className="w-full px-4 py-3 bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-yellow-500 text-gray-900 rounded-lg font-semibold transition-colors duration-200 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </>
  );
}