"use client";

import { useState } from "react";
import { servicesSectionData, ServiceItem } from "@/data/home/ServicesSectionData";

// Custom SVG Icons matching the reference design
function ServiceIcon({
  icon,
  isActive,
}: {
  icon: ServiceItem["icon"];
  isActive: boolean;
}) {
  const strokeColor = isActive ? "#5a1b16" : "#68201a";

  switch (icon) {
    case "trademark":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Map pin / marker shape */}
          <path d="M16 28s9-8.5 9-15.5a9 9 0 0 0-18 0C7 19.5 16 28 16 28z" />
          {/* Registered trademark (R) inside */}
          <circle cx="16" cy="12.5" r="4.2" strokeWidth={1.4} />
          <path d="M14.6 14.2v-3.4h1.7a1 1 0 0 1 0 2h-1.7m1.2 0l1.2 1.4" strokeWidth={1.3} />
        </svg>
      );

    case "investment":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Stack of coins on the left */}
          <ellipse cx="11" cy="22" rx="4.5" ry="2" />
          <path d="M6.5 22v2.5c0 1.1 2 2 4.5 2s4.5-.9 4.5-2V22" />
          <path d="M6.5 18.5v2.5c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-2.5" />
          {/* Ascending bar chart on the right */}
          <rect x="18" y="19" width="3.5" height="7.5" rx="0.8" />
          <rect x="23" y="14" width="3.5" height="12.5" rx="0.8" />
          {/* Upward trend arrow */}
          <path d="M11 15l5.5-5 4 3 6-7" />
          <path d="M22 6h4.5v4.5" />
        </svg>
      );

    case "find-investor":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Team / people silhouette */}
          <circle cx="12" cy="10" r="3" />
          <path d="M6.5 20c0-2.8 2.5-4.8 5.5-4.8 1.4 0 2.7.4 3.7 1.2" />
          <circle cx="18" cy="12" r="2.5" />
          <path d="M19 17.5c1.2.3 2.2.9 2.5 1.8" />
          {/* Magnifying glass finding investor */}
          <circle cx="19" cy="19" r="4.8" strokeWidth={2} />
          <path d="M22.5 22.5L27 27" strokeWidth={2.4} />
        </svg>
      );

    case "business-solution":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Executive briefcase */}
          <rect x="5" y="11" width="22" height="15" rx="3" />
          {/* Handle */}
          <path d="M12 11V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
          {/* Horizontal divider & center lock */}
          <line x1="5" y1="17" x2="27" y2="17" />
          <rect x="14.5" y="15.5" width="3" height="3" rx="0.6" fill={strokeColor} />
        </svg>
      );

    case "hire-staff":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Center Leader Avatar */}
          <circle cx="16" cy="9" r="3.2" />
          <path d="M10.8 19c.4-3 2.7-4.8 5.2-4.8s4.8 1.8 5.2 4.8" />
          {/* Left Avatar */}
          <circle cx="9.5" cy="13.5" r="2.4" />
          <path d="M5.5 21.5c.3-2 1.8-3.4 3.6-3.4.6 0 1.2.1 1.7.4" />
          {/* Right Avatar */}
          <circle cx="22.5" cy="13.5" r="2.4" />
          <path d="M21.2 18.5c.5-.3 1.1-.4 1.7-.4 1.8 0 3.3 1.4 3.6 3.4" />
        </svg>
      );

    case "business-plan":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7"
        >
          {/* Clipboard / document */}
          <rect x="7" y="7" width="16" height="20" rx="2.5" />
          {/* Clip top */}
          <path d="M12 7V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7" />
          {/* Check lines */}
          <path d="M10.5 12.5l1.5 1.5 3-3" strokeWidth={1.5} />
          <line x1="16.5" y1="12" x2="20" y2="12" strokeWidth={1.5} />
          <path d="M10.5 17.5l1.5 1.5 3-3" strokeWidth={1.5} />
          <line x1="16.5" y1="17" x2="20" y2="17" strokeWidth={1.5} />
          {/* Pencil on the right */}
          <path d="M21 23l4.5-4.5 1.8 1.8-4.5 4.5-2.3.5.5-2.3z" strokeWidth={1.4} />
        </svg>
      );

    default:
      return null;
  }
}

export default function ServicesSection() {
  // Card 1 active by default as shown in the mockup; clickable to switch
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section
      id="services"
      className="relative bg-[#740101] py-8 sm:py-12 lg:py-14 text-white overflow-hidden select-none"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-9">
          {/* Tagline with elegant horizontal accent dashes */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#f5e3df]/70" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.26em] text-[#faedea] uppercase">
              {servicesSectionData.tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#f5e3df]/70" />
          </div>

          {/* Luxury Serif Title */}
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white leading-tight">
            {servicesSectionData.headline}
          </h2>

          {/* Warm Golden Underline Pill */}
          <div className="mt-3 w-14 sm:w-16 h-1 rounded-full bg-[#deb56c] shadow-sm" />
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesSectionData.services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`group relative cursor-pointer rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#68191b] via-[#521314] to-[#3a090b] text-white border-2 border-[#deb56c] shadow-[0_16px_36px_rgba(40,10,12,0.45),0_0_18px_rgba(222,181,108,0.22)] scale-[1.01]"
                    : "bg-gradient-to-b from-[#fffefe] to-[#f7f2ea] text-[#1c1b1a] shadow-[0_10px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.13)] hover:-translate-y-0.5"
                }`}
              >
                {/* Gold sparkle / shimmer glint on active card top-left corner */}
                {isActive && (
                  <div className="absolute top-2.5 left-3 pointer-events-none">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fdeecb] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_7px_#deb56c]" />
                    </span>
                  </div>
                )}

                {/* Squircle Icon Container with luxury gold sheen */}
                <div
                  className={`relative w-[54px] h-[54px] rounded-[16px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm ${
                    isActive
                      ? "bg-gradient-to-br from-[#f8ebd0] via-[#e5c58f] to-[#cf9e54] border border-[#f5dfb8]"
                      : "bg-gradient-to-br from-[#faeed8] via-[#e8cb9b] to-[#d6aa6d] border border-[#fbeed4]"
                  }`}
                >
                  <ServiceIcon icon={service.icon} isActive={isActive} />
                </div>

                {/* Service Title */}
                <h3
                  className={`mt-4 text-[19px] sm:text-[21px] lg:text-[22px] font-bold tracking-tight transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#181816]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className={`mt-2.5 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] max-w-[290px] transition-colors duration-200 ${
                    isActive ? "text-[#ebd8d4]" : "text-[#585450]"
                  }`}
                >
                  {service.description}
                </p>

                {/* Bottom-right Corner Decorative Swoosh Wave */}
                <div className="absolute bottom-0 right-0 w-24 h-13 pointer-events-none overflow-hidden rounded-br-[20px] sm:rounded-br-[22px]">
                  <svg
                    viewBox="0 0 120 70"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    fill="none"
                  >
                    {isActive ? (
                      // Gold swooshes for active/featured card
                      <>
                        <path
                          d="M 25 70 Q 65 30 120 18 L 120 70 Z"
                          fill="url(#goldGrad1)"
                          opacity="0.85"
                        />
                        <path
                          d="M 55 70 Q 88 44 120 36 L 120 70 Z"
                          fill="url(#goldGrad2)"
                        />
                      </>
                    ) : (
                      // Dusty rose swooshes for standard cards
                      <>
                        <path
                          d="M 25 70 Q 65 30 120 18 L 120 70 Z"
                          fill="#dfb8b3"
                          opacity="0.45"
                        />
                        <path
                          d="M 55 70 Q 88 44 120 36 L 120 70 Z"
                          fill="#cb8b84"
                          opacity="0.75"
                        />
                      </>
                    )}
                    <defs>
                      <linearGradient id="goldGrad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#deb56c" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#d69f4e" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fae2af" />
                        <stop offset="100%" stopColor="#c59146" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
