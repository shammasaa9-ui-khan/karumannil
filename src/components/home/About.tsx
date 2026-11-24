"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/home/aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf8f5] py-10 sm:py-14 lg:py-16 text-[#121212] select-none"
    >
      {/* Soft warm background glow (Wave graphic removed as requested) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#f4e2d7]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-[20%] w-64 h-64 bg-[#eed7cb]/30 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand Story and Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline Badge with accent lines: — ABOUT US — */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#9e3a32] uppercase">
                {aboutData.tagline}
              </span>
              <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
            </div>

            {/* Elegant 2-Line Serif Headline: Karumannil Holding */}
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#141414] leading-[1.12] tracking-tight">
              {aboutData.headline.line1}
              <br />
              {aboutData.headline.line2}
            </h2>

            {/* Narrative Body Paragraph 1 */}
            <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-[#2a2a26] font-normal max-w-xl text-left">
              {aboutData.paragraph1}
            </p>

            {/* Italic Philosophy / Callout Paragraph 2 */}
            <p className="mt-3 italic text-[12.5px] sm:text-[13.5px] leading-relaxed text-[#4a4a46] max-w-xl">
              {aboutData.paragraph2}
            </p>

            {/* Pill CTA Button: READ MORE → */}
            <div className="mt-6">
              <Link
                href={aboutData.readMoreButton.href}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#9e3a32]/85 bg-white/95 px-7 py-2.5 text-xs font-bold tracking-[0.14em] text-[#1a1a1a] uppercase transition-all duration-300 hover:bg-[#9e3a32] hover:text-white hover:border-[#9e3a32] shadow-sm hover:shadow-md"
              >
                <span>{aboutData.readMoreButton.label}</span>
                <svg
                  className="w-3.5 h-3.5 text-[#9e3a32] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Dual Overlapping Floating Cards (Compact Proportions) */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-[320px] sm:h-[380px] lg:h-[410px]">
              {/* Card 1: Headquarters Building (Upper-Left) */}
              <div className="absolute top-0 left-0 sm:left-2 w-[185px] sm:w-[235px] lg:w-[260px] aspect-[4/5] rounded-[22px] sm:rounded-[28px] overflow-hidden border-[2.5px] border-[#deb56c] shadow-[0_12px_35px_rgba(222,181,108,0.32),0_4px_16px_rgba(0,0,0,0.1)] z-10 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={aboutData.images.card1.src}
                  alt={aboutData.images.card1.alt}
                  fill
                  sizes="(max-width: 640px) 185px, 260px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Card 2: Strategy / Value Creation Cubes (Lower-Right Overlapping) */}
              <div className="absolute bottom-0 right-0 sm:right-2 w-[185px] sm:w-[235px] lg:w-[260px] aspect-[4/5] rounded-[22px] sm:rounded-[28px] overflow-hidden border-[2.5px] border-[#deb56c] shadow-[0_16px_40px_rgba(222,181,108,0.36),0_6px_18px_rgba(0,0,0,0.12)] z-20 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={aboutData.images.card2.src}
                  alt={aboutData.images.card2.alt}
                  fill
                  sizes="(max-width: 640px) 185px, 260px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
