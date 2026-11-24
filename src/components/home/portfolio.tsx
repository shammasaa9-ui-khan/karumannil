"use client";

import React from "react";
import Image from "next/image";
import { portfolioData, PortfolioItem, PortfolioSpec } from "@/data/home/portfolioData";

function SpecIcon({ icon, isHouse }: { icon: PortfolioSpec["icon"]; isHouse?: boolean }) {
  switch (icon) {
    case "size":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#091b34] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case "capacity":
      if (isHouse) {
        return (
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#091b34] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      }
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#091b34] fill-current">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      );
    case "furnished":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#091b34] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
          <line x1="4" y1="20" x2="4" y2="22" />
          <line x1="20" y1="20" x2="20" y2="22" />
        </svg>
      );
    case "facilities":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#091b34] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
  }
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white border border-[#deb56c]/70 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(222,181,108,0.20)] hover:border-[#deb56c] transition-all duration-300 flex flex-col">
      {/* Property Photo */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#f4ece1]">
        <Image
          src={item.image}
          alt={item.price + " " + item.unit}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Ribbon Badge: New Project */}
        <div className="absolute bottom-0 left-0 z-10">
          <div className="relative flex items-center bg-[#071932] border-t border-b border-[#deb56c] text-[#f7e2bd] font-serif text-[12px] sm:text-[13px] font-semibold tracking-wide pl-3.5 pr-6 py-1 shadow-md">
            <span>{item.badge}</span>
            {/* Ribbon Chevron Tail */}
            <div
              className="absolute top-0 right-0 h-full w-3.5 bg-[#deb56c]"
              style={{
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Price & Unit Heading */}
        <div className="flex items-baseline mb-0.5">
          <span className="font-serif text-[24px] sm:text-[28px] font-bold text-[#b88534] tracking-tight">
            {item.price}
          </span>
          <span className="font-serif text-[15px] sm:text-[17px] font-semibold text-[#091b34] ml-1.5">
            {item.unit}
          </span>
        </div>

        {/* Thin Gold Divider */}
        <div className="w-full h-[1px] bg-[#deb56c]/40 my-2.5" />

        {/* Specs List */}
        <div className="space-y-2">
          {item.specs.map((spec, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-[13.5px] sm:text-[14.5px] pb-1.5 border-b border-[#f3eadc] last:border-none last:pb-0"
            >
              {/* Left Icon + Label */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-gradient-to-br from-[#ebd39d] via-[#deb56c] to-[#b88534] flex items-center justify-center text-[#091b34] shadow-sm shrink-0">
                  <SpecIcon
                    icon={spec.icon}
                    isHouse={spec.value.includes("BHK")}
                  />
                </div>
                <span className="font-bold text-[#091b34] tracking-tight">
                  {spec.label}
                </span>
              </div>

              {/* Right Value */}
              <span className="text-[#334155] font-normal text-right truncate pl-2 max-w-[150px] sm:max-w-[170px]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Corner Gold Accent */}
      <div className="absolute bottom-0 right-0 w-9 h-9 pointer-events-none">
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <path
            d="M0 50 C25 50, 50 25, 50 0 L50 50 Z"
            fill="url(#cardGoldAccent)"
          />
          <defs>
            <linearGradient id="cardGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#deb56c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b88534" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { tagline, title, items } = portfolioData;

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#faf8f5] py-8 sm:py-12 lg:py-14 text-[#121212] select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#f5e4d5]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#eee0ce]/35 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#9e3a32] uppercase">
              {tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#9e3a32]" />
          </div>

          <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#091b34] leading-tight">
            {title}
          </h2>

          <div className="mt-2.5 w-14 h-1 rounded-full bg-[#deb56c] shadow-sm" />
        </div>

        {/* 3 Portfolio Cards Grid (Slightly Broader) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
