"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/data/home/navbarData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full select-none transition-all duration-300">
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-3.5 pb-1"
            : "max-w-7xl px-6 sm:px-10 lg:px-12 py-4 sm:py-5"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-white/85 backdrop-blur-md rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border-0"
              : "bg-transparent py-0 border-0"
          }`}
        >
          {/* Left: Brand Icon + 2-Line Name */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group">
            <div
              className={`relative flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-9 w-9 sm:h-11 sm:w-11" : "h-10 w-10 sm:h-12 sm:w-12"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Karumannil Holding"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-sans font-bold tracking-tight text-[#1c1c1c] transition-all duration-300 ${
                  isScrolled
                    ? "text-[1.18rem] sm:text-[1.28rem]"
                    : "text-[1.26rem] sm:text-[1.36rem]"
                }`}
              >
                Karumannil
              </span>
              <span
                className={`font-sans font-semibold tracking-[0.22em] uppercase text-[#740101] transition-all duration-300 ${
                  isScrolled
                    ? "text-[0.62rem] sm:text-[0.68rem] mt-0.5"
                    : "text-[0.66rem] sm:text-[0.72rem] mt-0.5"
                }`}
              >
                Holding
              </span>
            </div>
          </Link>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden items-center gap-8 lg:gap-10 lg:flex text-[17px] lg:text-[18px]">
            {navbarData.navLinks.map((link) => {
              const isLinkActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1.5 px-1 tracking-wide transition-colors duration-200 ${
                    isLinkActive
                      ? "text-[#740101] font-bold"
                      : "text-[#2e2e2a] hover:text-[#740101] font-medium"
                  }`}
                >
                  <span className="inline-block">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop "CONTACT NOW" CTA Button */}
          <div className="hidden items-center lg:flex">
            <Link
              href={navbarData.action.href}
              className={`inline-flex items-center justify-center rounded-full bg-[#740101] hover:bg-[#5a0000] text-white font-bold tracking-widest uppercase transition-all duration-200 shadow-sm ${
                isScrolled ? "px-6 py-2.5 sm:py-3 text-[12.5px] sm:text-[13px]" : "px-7 py-3 text-[13.5px] sm:text-sm"
              }`}
            >
              {navbarData.action.label}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#121212] hover:bg-black/5 focus:outline-none lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Under Top Navbar) */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-white/95 backdrop-blur-md px-6 py-5 shadow-xl lg:hidden border border-black/5 select-none">
            <nav className="flex flex-col gap-3.5">
              {navbarData.navLinks.map((link) => {
                const isLinkActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-[16px] font-semibold transition-colors ${
                      isLinkActive
                        ? "text-[#740101] font-bold"
                        : "text-[#1c1c1c] hover:text-[#740101]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 text-black/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href={navbarData.action.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#740101] hover:bg-[#5a0000] px-5 py-3 text-xs font-bold text-white tracking-widest uppercase shadow-md transition-colors"
                >
                  {navbarData.action.label}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
