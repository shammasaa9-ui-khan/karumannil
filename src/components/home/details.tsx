"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { detailData, ApartmentDetail } from "@/data/home/detailData";

export default function Details() {
  // Mobile tap & scroll support: track which card is active/toggled open
  const [activeCardId, setActiveCardId] = useState<number | null>(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use IntersectionObserver matching ServicesSection for smooth, jank-free scroll detection on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 640) {
            const id = Number(entry.target.getAttribute("data-id"));
            if (id) {
              setActiveCardId(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -35% 0px",
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleCard = (id: number) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="apartments"
      className="relative bg-[#faf8f5] py-8 sm:py-12 lg:py-14 text-[#121212] select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#f4e2d7]/35 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#eed7cb]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          {/* Tagline */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.26em] text-[#9e3a32] uppercase">
              {detailData.tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
          </div>

          {/* Luxury Serif Title */}
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#141414] leading-tight">
            {detailData.headline}
          </h2>

          {/* Warm Golden Underline Pill */}
          <div className="mt-3 w-14 sm:w-16 h-1 rounded-full bg-[#deb56c] shadow-sm" />
        </div>

        {/* 4 Cards: Sticky Stacking & Scroll Reveal on Mobile, Responsive Grid on sm/lg */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pb-8 sm:pb-0">
          {detailData.apartments.map((apartment: ApartmentDetail, index: number) => {
            const isToggled = activeCardId === apartment.id;

            return (
              <div
                key={apartment.id}
                data-id={apartment.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => toggleCard(apartment.id)}
                style={{
                  top: `calc(75px + ${index * 12}px)`,
                  zIndex: index + 1,
                }}
                className={`group relative cursor-pointer h-[320px] sm:h-[360px] lg:h-auto lg:aspect-[250/408] rounded-[22px] overflow-hidden bg-[#380e10] transition-all duration-500 ease-out sticky sm:static sm:top-auto mb-8 sm:mb-0 ${
                  isToggled
                    ? "scale-[1.01] border-2 border-[#deb56c] shadow-[0_20px_45px_rgba(56,14,16,0.45),0_0_20px_rgba(222,181,108,0.25)]"
                    : "scale-100 border-2 border-transparent shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(74,21,24,0.32)] hover:-translate-y-1"
                }`}
              >
                {/* Gold shimmer / glint indicator on active card */}
                {isToggled && (
                  <div className="absolute top-3 right-3 z-30 pointer-events-none">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fdeecb] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_7px_#deb56c]" />
                    </span>
                  </div>
                )}

                {/* 1. Base Card Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={apartment.frontImage}
                    alt={apartment.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={apartment.id <= 2}
                  />
                </div>

                {/* Subtle bottom preview pill when not toggled on mobile */}
                <div
                  className={`absolute bottom-3 left-3 right-3 z-10 transition-all duration-300 sm:hidden ${
                    isToggled ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="bg-black/65 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center justify-between shadow-lg">
                    <div className="flex flex-col">
                      <span className="font-serif text-white font-bold text-[13px] tracking-tight">
                        {apartment.title}
                      </span>
                      {apartment.location && (
                        <span className="text-[#deb56c] text-[10.5px] font-medium flex items-center gap-1">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {apartment.location}
                        </span>
                      )}
                    </div>
                    <span className="text-[#deb56c] text-[11px] font-bold">
                      {apartment.price}
                    </span>
                  </div>
                </div>

                {/* 2. Slide-up Content Overlay (Slides up from bottom to top on hover or tap) */}
                <div
                  className={`absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 transition-transform duration-500 ease-out ${
                    apartment.overlayGradient
                  } ${
                    isToggled
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
                >
                  {/* Top: Title & Price */}
                  <div>
                    <h3 className="font-serif text-[22px] sm:text-[24px] font-bold tracking-tight text-white leading-tight">
                      {apartment.title}
                    </h3>

                    {apartment.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-[#f5dbb0]">
                        <svg className="w-3.5 h-3.5 text-[#deb56c] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{apartment.location}</span>
                      </p>
                    )}

                    <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
                      <span className="font-serif text-[22px] sm:text-[24px] font-bold text-[#deb56c] tracking-tight">
                        {apartment.price}
                      </span>
                      <span className="text-[11.5px] sm:text-xs text-[#faebe7] font-normal">
                        {apartment.priceSub}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Key-Value Specifications */}
                  <div className="my-auto py-3 space-y-2.5 text-[13.5px] sm:text-[14.5px] leading-snug">
                    <div className="grid grid-cols-[76px_1fr] gap-2 items-baseline">
                      <span className="font-bold text-[#f7ece8]">Size:</span>
                      <span className="text-white font-medium">
                        {apartment.size}
                      </span>
                    </div>

                    <div className="grid grid-cols-[76px_1fr] gap-2 items-baseline">
                      <span className="font-bold text-[#f7ece8]">2 BHK:</span>
                      <span className="text-white font-medium">
                        {apartment.bhk}
                      </span>
                    </div>

                    <div className="grid grid-cols-[76px_1fr] gap-2 items-baseline">
                      <span className="font-bold text-[#f7ece8]">Furnished:</span>
                      <span className="text-white font-medium">
                        {apartment.furnished}
                      </span>
                    </div>

                    <div className="grid grid-cols-[76px_1fr] gap-2 items-baseline">
                      <span className="font-bold text-[#f7ece8]">Facilities:</span>
                      <span className="text-white font-medium">
                        {apartment.facilities}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: MORE DETAILS link */}
                  <div className="pt-2">
                    <Link
                      href={apartment.link}
                      className="group/link inline-block"
                      onClick={(e) => {
                        // On touch devices, first tap reveals the card, second tap opens link
                        if (!isToggled && typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <span className="inline-block border-b-2 border-white pb-0.5 text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-white uppercase transition-colors duration-300 group-hover/link:text-[#deb56c] group-hover/link:border-[#deb56c]">
                        MORE DETAILS
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
