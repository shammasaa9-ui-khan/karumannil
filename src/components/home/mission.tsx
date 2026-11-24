"use client";

import React from "react";
import { missionData, ValueItem } from "@/data/home/missionData";

// Top Category Icons (Gold on Dark Navy)
function VisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#deb56c] fill-current">
      <path d="M7.5 7C5.01 7 3 9.01 3 11.5S5.01 16 7.5 16c2.05 0 3.79-1.37 4.35-3.25.13-.44.52-.75.98-.75h.34c.46 0 .85.31.98.75.56 1.88 2.3 3.25 4.35 3.25 2.49 0 4.5-2.01 4.5-4.5S20.49 7 18 7c-2.05 0-3.79 1.37-4.35 3.25-.13.44-.52.75-.98.75h-.34c-.46 0-.85-.31-.98-.75C10.79 8.37 9.05 7 7.5 7zm0 2c1.38 0 2.5 1.12 2.5 2.5S8.88 14 7.5 14 5 12.88 5 11.5 6.12 9 7.5 9zm10.5 0c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#deb56c] fill-current">
      {/* Mountain with flag on top */}
      <path d="M12 2.5v3.5l2-1-2-1V2.5zM11 5l-7 12h14L11 5zm0 3.5 4.08 7H6.92L11 8.5zm5.5 4.5 1.5 3h4l-4.5-7.5-1 1.7V13z" />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#deb56c] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
      {/* Diamond / Jewel */}
      <path d="M6 3h12l4 7-10 11L2 10l4-7z" fill="currentColor" fillOpacity="0.2" />
      <path d="M11 3 8 10l4 10 4-10-3-7" />
      <path d="M2 10h20" />
    </svg>
  );
}

// Value Item Glyphs (White on Gold Gradient Pill)
function ValueGlyph({ icon }: { icon: ValueItem["icon"] }) {
  switch (icon) {
    case "integrity":
      // Scales of Justice
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
          <path d="M12 3c-.55 0-1 .45-1 1v1.07C7.61 5.56 5 8.47 5 12c0 .55.45 1 1 1s1-.45 1-1c0-2.76 2.24-5 5-5v11H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-3V7c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.53-2.61-6.44-6-6.93V4c0-.55-.45-1-1-1zM4.07 14c-.04.32-.07.65-.07 1 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.35-.03-.68-.07-1H4.07zm11.93 0c-.04.32-.07.65-.07 1 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.35-.03-.68-.07-1h-7.86z" />
        </svg>
      );
    case "innovation":
      // Lightbulb
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
          <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm-2 18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5h-4v.5zm5-9.2V13h-6v-2.2C7.62 9.87 7 8.52 7 7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.52-.62 2.87-2 3.8z" />
          <path d="M11 6h2v4h-2zM4 9h2v2H4zm14 0h2v2h-2z" />
        </svg>
      );
    case "excellence":
      // Award Ribbon / Rosette
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
          <path d="M12 2a6 6 0 0 0-6 6c0 2.45 1.48 4.56 3.57 5.48L7.5 21.5a.5.5 0 0 0 .76.53L12 19.42l3.74 2.61a.5.5 0 0 0 .76-.53l-2.07-7.98A6.002 6.002 0 0 0 18 8a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2-1 2.2-2.4.2 1.8 1.6-.5 2.4 2.1-1.2 2.1 1.2-.5-2.4 1.8-1.6-2.4-.2-1-2.2z" />
        </svg>
      );
    case "collaboration":
      // Handshake
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
          <path d="M19.5 8c-.68 0-1.32.22-1.84.59L15 6.5l-2.5 2.5 1.5 1.5L12 12.5l-2.5-2.5L8 11.5l3.5 3.5 3-3 1.5 1.5 4.29-3.21c.21.13.45.21.71.21 1.1 0 2-.9 2-2s-.9-2-2-2zM4.5 8c-1.1 0-2 .9-2 2s.9 2 2 2c.26 0 .5-.08.71-.21L9.5 15l1.5-1.5 3 3 3.5-3.5-1.5-1.5-2.5 2.5L11 11.5l1.5-1.5L10 7.5 7.5 10 5.84 8.59C5.32 8.22 4.68 8 4.5 8z" />
        </svg>
      );
    case "responsibility":
      // Sprout / Plant Leaf
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
          <path d="M12 3a9 9 0 0 0-9 9c0 4.14 2.81 7.63 6.67 8.68.22.06.44-.1.44-.33v-4.52c-2.48-.37-4.11-2.12-4.11-4.83 0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.71-1.63 4.46-4.11 4.83v4.52c0 .23.22.39.44.33C18.19 19.63 21 16.14 21 12a9 9 0 0 0-9-9zm-1 9V7a4 4 0 0 1 4 4c0 1.84-1.24 3.39-3 3.86V12h-1z" />
        </svg>
      );
  }
}

export default function Mission() {
  const { vision, mission, values, quickCall } = missionData;

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-8 sm:py-12 lg:py-14 text-[#121212] select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#f5e4d5]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#eee0ce]/35 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Vision & Mission (2 Cards / Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Vision Card */}
          <div className="group rounded-[22px] sm:rounded-[28px] bg-white border border-[#deb56c]/70 p-6 sm:p-8 shadow-[0_4px_16px_rgba(222,181,108,0.12)] hover:shadow-[0_8px_24px_rgba(222,181,108,0.22)] hover:border-[#deb56c] transition-all duration-300 flex flex-col justify-start">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#091b34] flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                <VisionIcon />
              </div>
              <div className="w-[2.5px] h-9 sm:h-10 bg-[#deb56c] rounded-full shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#091b34] tracking-tight">
                {vision.title}
              </h3>
            </div>
            <p className="text-[16px] sm:text-[17px] lg:text-[17.5px] leading-[1.75] text-[#334155] text-left">
              {vision.description}
            </p>
          </div>

          {/* Mission Card */}
          <div className="group rounded-[22px] sm:rounded-[28px] bg-white border border-[#deb56c]/70 p-6 sm:p-8 shadow-[0_4px_16px_rgba(222,181,108,0.12)] hover:shadow-[0_8px_24px_rgba(222,181,108,0.22)] hover:border-[#deb56c] transition-all duration-300 flex flex-col justify-start">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#091b34] flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                <MissionIcon />
              </div>
              <div className="w-[2.5px] h-9 sm:h-10 bg-[#deb56c] rounded-full shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#091b34] tracking-tight">
                {mission.title}
              </h3>
            </div>
            <p className="text-[16px] sm:text-[17px] lg:text-[17.5px] leading-[1.75] text-[#334155] text-left">
              {mission.description}
            </p>
          </div>
        </div>

        {/* Bottom Section: Values */}
        <div className="mt-6 sm:mt-8 flex flex-col">
            {/* Values Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#091b34] flex items-center justify-center shrink-0 shadow-md">
                <ValuesIcon />
              </div>
              <div className="w-[2.5px] h-9 sm:h-10 bg-[#deb56c] rounded-full shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#091b34] tracking-tight">
                {values.title}
              </h3>
            </div>

            {/* 5 Values Capsules */}
            <div className="space-y-3 sm:space-y-3.5">
              {values.items.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-full border border-[#deb56c]/70 bg-white p-1 sm:p-1.5 pr-5 sm:pr-8 flex items-center gap-3 sm:gap-4 shadow-[0_2px_8px_rgba(222,181,108,0.12)] hover:shadow-[0_4px_16px_rgba(222,181,108,0.25)] hover:border-[#deb56c] transition-all duration-300"
                >
                  {/* Left Gold Gradient Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#b38734] via-[#deb56c] to-[#e6ca8a] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <ValueGlyph icon={item.icon} />
                  </div>

                  {/* Text Content */}
                  <div className="text-[14.5px] sm:text-[16px] text-[#334155] leading-snug">
                    <strong className="text-[#091b34] font-bold">
                      {item.label}:{" "}
                    </strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Quick Call Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <a
              href={quickCall.href}
              className="group inline-flex items-center gap-3.5 sm:gap-4 rounded-full bg-gradient-to-r from-[#071326] via-[#0b1c38] to-[#071326] border-[1.5px] border-[#deb56c] px-6 sm:px-8 py-2.5 sm:py-3 shadow-[0_10px_25px_rgba(7,19,38,0.35)] hover:shadow-[0_12px_30px_rgba(222,181,108,0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              {/* Circular Gold Icon Badge */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-[#e6ca8a] via-[#deb56c] to-[#b38734] flex items-center justify-center shrink-0 shadow-inner">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#071326] fill-current"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>

              {/* Vertical Gold Divider */}
              <div className="w-[1.5px] h-6 bg-[#deb56c]/70" />

              {/* Text */}
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-white">
                {quickCall.label}
              </span>
            </a>
          </div>
      </div>
    </section>
  );
}
