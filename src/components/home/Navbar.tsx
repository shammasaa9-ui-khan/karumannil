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
    <>
      {/* ================= DESKTOP TOP NAVBAR (hidden on mobile, lg:block) ================= */}
      <header className="hidden lg:block sticky top-0 z-50 w-full select-none transition-all duration-300">
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
            <nav className="flex items-center gap-8 lg:gap-10 text-[17px] lg:text-[18px]">
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
            <div className="flex items-center">
              <Link
                href={navbarData.action.href}
                className={`inline-flex items-center justify-center rounded-full bg-[#740101] hover:bg-[#5a0000] text-white font-bold tracking-widest uppercase transition-all duration-200 shadow-sm ${
                  isScrolled ? "px-6 py-2.5 sm:py-3 text-[12.5px] sm:text-[13px]" : "px-7 py-3 text-[13.5px] sm:text-sm"
                }`}
              >
                {navbarData.action.label}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE / RESPONSIVE TOP NAVBAR (lg:hidden) ================= */}
      <header className="sticky top-0 z-50 w-full lg:hidden bg-[#740101] text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] select-none">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Left: Brand Logo + Stacked Name (Karumannil / HOLDING) */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Karumannil Holding"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-bold text-[1.05rem] tracking-tight text-white leading-tight">
                Karumannil
              </span>
              <span className="font-sans font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-[#deb56c] mt-0.5 leading-tight">
                Holding
              </span>
            </div>
          </Link>

          {/* Right: Contact Profile + Search + Hamburger Icon */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-white">
            {/* User / Contact Icon */}
            <Link
              href="/contact"
              aria-label="Contact"
              className="p-1 text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Search / Portfolio Icon */}
            <Link
              href="/portfolio"
              aria-label="Portfolio"
              className="p-1 text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white hover:text-white/80 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Drops down directly from top navbar) */}
        {mobileMenuOpen && (
          <div className="bg-[#5a0000] border-t border-[#deb56c]/30 px-6 py-5 shadow-2xl select-none transition-all">
            <nav className="flex flex-col gap-3">
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
                    className={`flex items-center justify-between py-2 text-[16px] font-semibold transition-colors ${
                      isLinkActive
                        ? "text-[#deb56c] font-bold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}

              <div className="pt-3">
                <Link
                  href={navbarData.action.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#deb56c] hover:bg-[#c99f57] py-3 text-xs font-bold text-[#141414] tracking-widest uppercase shadow-md transition-colors"
                >
                  {navbarData.action.label}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
