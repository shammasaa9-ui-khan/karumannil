"use client";

import Image from "next/image";
import { aboutData } from "@/data/home/aboutData";

export default function AboutMain() {
  const main = aboutData.main;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#740101] py-14 sm:py-20 lg:py-28 text-white select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-black/15 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Direct live text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-7 h-[2px] bg-[#deb56c]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#deb56c] uppercase">
                {main.tagline}
              </span>
            </div>

            {/* Title */}
            <div className="mb-5">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.08]">
                Karumannil
                <br />
                Holding.
              </h1>
              {/* Gold Underline Bar */}
              <div className="mt-2.5 w-16 sm:w-20 h-1 bg-[#deb56c] rounded-full shadow-sm" />
            </div>

            {/* Mobile/Tablet Image (Positioned directly below heading on responsive screens) */}
            <div className="block lg:hidden my-6">
              <div className="relative w-full aspect-[1757/1229] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/15 bg-black/20">
                <Image
                  src={main.image}
                  alt="Karumannil Holding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* 4 Paragraphs with Exact Content & Bold Highlights */}
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-white/90 text-left">
              {/* Paragraph 1 */}
              <p>
                <strong className="text-white font-bold">Karumannil Holding </strong>
                is a dynamic and diversified business group committed to shaping the future through strategic investments, visionary leadership, and a steadfast dedication to excellence. Rooted in strong values and a legacy of trust, we have grown from humble beginnings into a trusted name across multiple industries.
              </p>

              {/* Paragraph 2 */}
              <p>
                At the heart of Karumannil Holdings is our belief in purposeful growth — not just for our businesses, but for the communities we serve and the people we work with. Our ventures span across sectors including{" "}
                <strong className="text-white font-bold underline decoration-[#deb56c]/70 decoration-2 underline-offset-4">
                  construction, trading, real estate, logistics, etc.
                </strong>
                , each driven by innovation, operational integrity, and long-term value creation.
              </p>

              {/* Paragraph 3 */}
              <p>
                We don&apos;t just build businesses; we build lasting partnerships. With a keen eye for opportunity and a deep understanding of evolving markets, Karumannil Holdings continuously adapts and scales with resilience. Our team of experienced professionals, combined with a forward-thinking leadership approach, allows us to navigate challenges and seize opportunities with confidence.
              </p>

              {/* Paragraph 4 */}
              <p>
                Whether we&apos;re launching a new venture or strengthening an existing one, our commitment remains the same: to deliver sustainable growth, empower entrepreneurs, and contribute{" "}
                <strong className="text-white font-bold underline decoration-[#deb56c]/70 decoration-2 underline-offset-4">
                  to a better tomorrow.
                </strong>
              </p>
            </div>
          </div>

          {/* Right Column: Prominent Image Box (Desktop only, 6 cols) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center">
            <div className="relative w-full max-w-[620px] aspect-[1757/1229] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/15 bg-black/20 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={main.image}
                alt="Karumannil Holding"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 650px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
