"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonialData } from "@/data/testimonualData";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = testimonialData.testimonials;
  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Auto slide every 4.5 seconds (pauses on hover so user can read comfortably)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative bg-[#740101] py-8 sm:py-12 lg:py-14 text-white overflow-hidden select-none"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Compact Spacing) */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-9">
          {/* Tagline */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[1.5px] bg-[#f5e3df]/70" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#faedea] uppercase">
              {testimonialData.tagline}
            </span>
            <span className="w-5 h-[1.5px] bg-[#f5e3df]/70" />
          </div>

          {/* Luxury Serif Title */}
          <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.4rem] font-bold tracking-tight text-white leading-tight">
            {testimonialData.headline}
          </h2>

          {/* Warm Golden Underline Pill */}
          <div className="mt-2.5 w-12 sm:w-14 h-[3.5px] rounded-full bg-[#deb56c] shadow-sm" />
        </div>

        {/* Carousel Outer Container with Floating Side Arrow Buttons */}
        <div
          className="relative max-w-4xl sm:max-w-5xl lg:max-w-[980px] mx-auto px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#181816] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center transition-all duration-300 hover:bg-[#68191b] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-4.5 sm:h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#181816] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center transition-all duration-300 hover:bg-[#68191b] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-4.5 sm:h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Card (Enlarged Box & Content Size) */}
          <div className="relative rounded-[26px] sm:rounded-[32px] bg-gradient-to-b from-[#fffefe] to-[#f8f3ea] pt-10 sm:pt-11 pb-7 sm:pb-8 px-6 sm:px-14 lg:px-20 shadow-[0_20px_50px_rgba(40,10,12,0.35)] transition-all duration-500">
            {/* Top Floating Quote Badge */}
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#68191b] border-2 border-white shadow-md flex items-center justify-center">
              <svg
                className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Quote Text with Enlarged Size & Smooth Fade */}
            <p className="text-center text-[17px] sm:text-[18.5px] lg:text-[20px] text-[#2c2b29] leading-[1.8] max-w-3xl mx-auto font-normal min-h-[75px] sm:min-h-[70px] flex items-center justify-center">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Rating Stars & Author Name */}
            <div className="flex items-center justify-center gap-3.5 mt-5 sm:mt-6 flex-wrap">
              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-[#f5a623] text-base sm:text-lg">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Vertical Divider */}
              <span className="h-4 w-[1.5px] bg-[#d5cfc9]" />

              {/* Author Name */}
              <span className="font-serif font-bold text-[#141414] text-[16px] sm:text-[18px] tracking-tight">
                {current.author}
              </span>
            </div>

            {/* Author Avatar with Golden Rim */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-[2.5px] border-[#deb56c] shadow-lg mx-auto mt-4 bg-white">
              <Image
                src={current.avatar}
                alt={current.author}
                fill
                sizes="72px"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom-right Corner Decorative Swoosh Wave (Matching Reference) */}
            <div className="absolute bottom-0 right-0 w-32 sm:w-44 h-16 sm:h-22 pointer-events-none overflow-hidden rounded-br-[26px] sm:rounded-br-[32px]">
              <svg
                viewBox="0 0 160 80"
                preserveAspectRatio="none"
                className="w-full h-full"
                fill="none"
              >
                <path
                  d="M 30 80 Q 85 30 160 15 L 160 80 Z"
                  fill="#dfb8b3"
                  opacity="0.45"
                />
                <path
                  d="M 70 80 Q 115 45 160 38 L 160 80 Z"
                  fill="#7a181b"
                  opacity="0.9"
                />
              </svg>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 h-2 bg-[#68191b] shadow-sm"
                    : "w-2 h-2 bg-white/75 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
