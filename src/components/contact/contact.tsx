"use client";

import React, { useState } from "react";
import { contactData } from "@/data/contactData";

export default function Contact() {
  const { tagline, headlineBlack, headlineRed, description, contactInfo, form, map } =
    contactData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-12 sm:py-16 lg:py-24 bg-white text-[#111111] select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-Column Layout: Contact Info (Left) | Location Map (Center) | Form Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-stretch">
          {/* Column 1: Contact Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-3">
            <div>
              {/* Tagline: — GET IN TOUCH — */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-[2px] bg-[#740101]" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#740101] uppercase">
                  {tagline}
                </span>
              </div>

              {/* Heading: Contact Info */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#111111] leading-tight">
                {headlineBlack} <span className="text-[#740101]">{headlineRed}</span>
              </h1>

              {/* Subtitle description */}
              <p className="mt-3 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555] max-w-sm whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* Contact Info Items List */}
            <div className="mt-8 space-y-4 sm:space-y-5">
              {contactInfo.map((item, index) => {
                const isLast = index === contactInfo.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3.5 ${
                      !isLast ? "border-b border-[#ededed] pb-4 sm:pb-5" : ""
                    }`}
                  >
                    {/* Icon Container with soft rose/peach background */}
                    <div className="w-10 h-10 rounded-full bg-[#fbf0ee] text-[#740101] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {item.icon === "address" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      )}

                      {item.icon === "phone" && (
                        <svg
                          className="w-4.5 h-4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      )}

                      {item.icon === "email" && (
                        <svg
                          className="w-4.5 h-4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Text Details */}
                    <div>
                      <span className="text-[11px] font-bold text-[#740101] tracking-wider uppercase block leading-tight">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[13px] sm:text-[14px] text-[#2d2d2d] hover:text-[#740101] font-medium transition-colors mt-0.5 block leading-snug"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[13px] sm:text-[14px] text-[#2d2d2d] font-medium mt-0.5 leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Contact Form Card (Center - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="w-full h-full rounded-[24px] border border-[#e5e7eb] p-6 sm:p-7 shadow-sm bg-white flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="w-full flex flex-col h-full justify-between space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Your Name */}
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={form.namePlaceholder}
                      className="w-full rounded-[14px] border border-[#d2d6dc] bg-white py-3 pl-10 pr-3 text-[13px] sm:text-[14px] text-[#1a1a1a] placeholder:text-[#6b7280] focus:outline-none focus:border-[#740101] focus:ring-1 focus:ring-[#740101] transition-all shadow-sm"
                    />
                  </div>

                  {/* Your Email */}
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={form.emailPlaceholder}
                      className="w-full rounded-[14px] border border-[#d2d6dc] bg-white py-3 pl-10 pr-3 text-[13px] sm:text-[14px] text-[#1a1a1a] placeholder:text-[#6b7280] focus:outline-none focus:border-[#740101] focus:ring-1 focus:ring-[#740101] transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Your Message */}
                <div className="relative flex-1 min-h-[140px]">
                  <div className="absolute left-3.5 top-3.5 pointer-events-none text-[#555555]">
                    <svg
                      className="w-4.5 h-4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.messagePlaceholder}
                    className="w-full h-full min-h-[130px] rounded-[14px] border border-[#d2d6dc] bg-white py-3 pl-10 pr-3 text-[13px] sm:text-[14px] text-[#1a1a1a] placeholder:text-[#6b7280] focus:outline-none focus:border-[#740101] focus:ring-1 focus:ring-[#740101] transition-all shadow-sm resize-y"
                  />
                </div>

                {/* Row 3: Action Buttons (SUBMIT NOW / QUICK CALL matching mockup) */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* SUBMIT NOW Button with Paper Plane icon */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#740101] hover:bg-[#5a0000] active:scale-[0.98] text-white py-3 px-3 text-[11.5px] sm:text-[12.5px] font-bold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <svg
                      className="w-3.5 h-3.5 -rotate-45 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    <span>{form.submitButtonText}</span>
                  </button>

                  {/* QUICK CALL Button with Phone icon */}
                  <a
                    href={`tel:${form.quickCallNumber}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#740101] bg-white text-[#740101] hover:bg-[#740101] hover:text-white active:scale-[0.98] py-3 px-3 text-[11.5px] sm:text-[12.5px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-none stroke-current"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span>{form.quickCallButtonText}</span>
                  </a>
                </div>

                {/* Success Notification */}
                {submitted && (
                  <div className="mt-2 p-2.5 rounded-lg bg-green-50 text-green-800 text-xs border border-green-200">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Column 3: Location Map (Right - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[24px] overflow-hidden border border-[#e5e7eb] shadow-sm relative bg-[#f0ede6]">
              <iframe
                title="Karumannil Holding Location Map - Kottakkal, Kerala"
                src={map.embedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
