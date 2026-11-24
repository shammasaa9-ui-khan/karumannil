"use client";

import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/home/heroData";

export default function Hero() {
  return (
    <>
      {/* ================= DESKTOP VIEW (Original Layout - paye pole) ================= */}
      <section
        id="hero"
        className="hidden lg:flex relative w-full h-[calc(100vh-52px)] min-h-[640px] max-h-[920px] overflow-hidden bg-[#eff0eb] text-[#121212] select-none flex-col justify-between"
      >
        {/* 0. Architectural Studio Wall */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top off-white wall base */}
          <div className="absolute inset-0 bg-[#eff0eb]" />

          {/* Lower Wall - Light Red */}
          <div className="absolute inset-x-0 bottom-0 top-[30%] bg-[#740101]" />
        </div>

        {/* 1. Giant Background Word Layer */}
        <div className="absolute inset-x-0 top-[60px] z-[2] flex justify-center pointer-events-none px-4">
          <span className="font-sans text-[12.6vw] font-black tracking-[0.04em] leading-[0.88] text-[#740101] uppercase whitespace-nowrap select-none text-center">
            {heroData.backgroundWord}
          </span>
        </div>

        {/* 2. Team at Table Foreground Cutout (11.png with feathered alpha edges) */}
        <div className="absolute inset-x-0 bottom-0 top-[2%] z-10 flex items-end justify-center pointer-events-none">
          <div className="relative w-full max-w-[1683px] h-full flex items-end justify-center">
            <Image
              src={heroData.characterImage.src}
              alt={heroData.characterImage.alt}
              fill
              sizes="1683px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= MOBILE & TABLET VIEW (Responsive Optimized) ================= */}
      <section
        id="hero-mobile"
        className="lg:hidden relative w-full overflow-hidden bg-[#eff0eb] text-[#121212] select-none"
      >
        {/* Architectural Studio Wall */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#eff0eb]" />
          <div className="absolute inset-x-0 bottom-0 top-[calc(20px+12vw)] sm:top-[calc(30px+11.4vw)] bg-[#740101]" />
        </div>

        {/* Giant Background Word Layer */}
        <div className="absolute inset-x-0 top-[20px] sm:top-[30px] z-[2] flex justify-center pointer-events-none px-2 sm:px-3">
          <span className="font-sans text-[13.8vw] sm:text-[13.2vw] font-black tracking-[0.025em] sm:tracking-[0.035em] leading-[0.88] text-[#740101] uppercase whitespace-nowrap select-none text-center">
            {heroData.backgroundWord}
          </span>
        </div>

        {/* Team Cutout Image */}
        <div className="relative z-10 w-full mx-auto flex justify-center pt-5 sm:pt-8">
          <Image
            src={heroData.characterImage.src}
            alt={heroData.characterImage.alt}
            width={1683}
            height={935}
            className="w-full h-auto object-contain block"
            priority
          />
        </div>

        {/* Responsive Content: Scale Up! */}
        <div className="relative z-20 w-full px-6 sm:px-10 pb-10 pt-2 bg-[#740101]">
          <div className="max-w-xl mx-auto text-left">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Scale Up!
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-white/90">
              {heroData.description}
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.22em] text-white uppercase border-b-2 border-[#deb56c] pb-1 transition-colors hover:text-[#deb56c]"
              >
                DISCOVER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
