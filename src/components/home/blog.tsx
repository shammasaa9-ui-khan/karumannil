"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData, BlogPost } from "@/data/home/blogData";

export default function Blog() {
  const [scrollProgress, setScrollProgress] = useState<number[]>([1, 1, 1, 1, 1]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll animation: dynamically reveals and clarifies each card as user scrolls it into view
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const windowHeight = window.innerHeight;
      const nextProgress = cardRefs.current.map((el) => {
        if (!el) return 1;
        const rect = el.getBoundingClientRect();
        // Starts fading and zooming in when touching bottom of screen (rect.top = windowHeight)
        // Reaches 100% full scale, clarity and vivid color when reached 45% of viewport height
        const start = windowHeight;
        const end = windowHeight * 0.45;
        const progress = (start - rect.top) / (start - end);
        return Math.min(Math.max(progress, 0), 1);
      });

      setScrollProgress(nextProgress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="blog"
      className="relative bg-[#fcfbf9] py-8 sm:py-12 lg:py-14 text-[#121212] overflow-hidden select-none"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          {/* Tagline matching About Us style: — TRENDING NEWS — */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#9e3a32] uppercase">
              {blogData.tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
          </div>

          {/* Luxury Serif Headline: Our Blog & Event (Full Black) */}
          <h2 className="mt-3.5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-[#121212] leading-tight">
            {blogData.headline}
          </h2>
        </div>

        {/* 5-Card Bento Grid Layout with Interactive Scroll Reveal Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {blogData.posts.map((post: BlogPost, index: number) => {
            const isWide = index === 3; // Card 4 spans 2 columns
            const progress = scrollProgress[index] ?? 1;

            // Dynamic values based on scroll position: starts small (scale: 0.90) from top and zooms down into full size (scale: 1.0)
            const scale = 0.90 + progress * 0.10;
            const translateY = -(1 - progress) * 36; // descends 36px from top into place as you scroll
            const cardOpacity = 0.25 + progress * 0.75; // fades from 0.25 up to 1.0
            const washOpacity = (1 - progress) * 0.65; // milky translucent wash clears away

            return (
              <div
                key={post.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: "center top",
                  willChange: "transform, opacity",
                }}
                className={`group relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] transition-shadow duration-300 cursor-pointer bg-[#0d172e] h-[320px] sm:h-[390px] md:h-[440px] lg:h-[470px] ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Background Image anchored to top */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes={
                    isWide
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className={`object-cover ${
                    post.objectPosition || "object-top"
                  } transition-transform duration-500 ease-out group-hover:scale-105`}
                  priority={index <= 2}
                />

                {/* Milky White Wash Overlay that clears away as user scrolls into view */}
                <div
                  className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 z-[5]"
                  style={{ opacity: washOpacity }}
                />

                {/* Bottom Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-35% to-transparent pointer-events-none z-[8]" />

                {/* Card Content Overlay (Bottom-Left) */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-6 lg:p-7 pointer-events-none">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-block bg-[#dfbe9f]/95 text-white backdrop-blur-sm px-3 py-1 rounded-[5px] text-[11.5px] sm:text-[12.5px] font-bold tracking-wider uppercase shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 font-serif text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white tracking-tight leading-snug">
                    {post.title}
                  </h3>

                  {/* Date Row with Clock Icon */}
                  <div className="mt-2 flex items-center gap-2 text-[13px] sm:text-[14px] text-white/95 font-medium">
                    <svg
                      className="w-3.5 h-3.5 text-white/90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Clickable Overlay Link */}
                <Link
                  href={post.link}
                  aria-label={post.title}
                  className="absolute inset-0 z-20"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
