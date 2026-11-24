"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/home/footerData";

export default function Footer() {
  const [chatMessage, setChatMessage] = useState("");

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = chatMessage.trim() || footerData.chat.defaultMessage;
    const url = `https://wa.me/${footerData.chat.whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderSocialLinks = (isMobile: boolean = false) => (
    <div className={`flex items-center gap-2.5 ${isMobile ? "justify-center" : "pt-1"}`}>
      {footerData.socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#deb56c] text-[#141414] hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
        >
          {social.icon === "facebook" && (
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          )}
          {social.icon === "twitter" && (
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          )}
          {social.icon === "tripadvisor" && (
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 576 512">
              <path d="M528.91 178.82L576 127.58H471.66a326.11 326.11 0 0 0-367 0H0l47.09 51.24a143.911 143.911 0 0 0 194.77 211.91l46.14 50.2l46.11-50.17a143.94 143.94 0 0 0 241.77-105.58h-.03a143.56 143.56 0 0 0-46.94-106.36M144.06 382.57a97.39 97.39 0 1 1 97.39-97.39a97.39 97.39 0 0 1-97.39 97.39M288 282.37c0-64.09-46.62-119.08-108.09-142.59a281 281 0 0 1 216.17 0C334.61 163.3 288 218.29 288 282.37m143.88 100.2h-.01a97.405 97.405 0 1 1 .01 0M144.06 234.12h-.01a51.06 51.06 0 1 0 51.06 51.06v-.11a51 51 0 0 0-51.05-50.95m287.82 0a51.06 51.06 0 1 0 51.06 51.06a51.06 51.06 0 0 0-51.06-51.06" />
            </svg>
          )}
          {social.icon === "instagram" && (
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          )}
          {social.icon === "youtube" && (
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="relative bg-[#740101] text-white select-none overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Brand Logo & Desktop Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
                <Image
                  src={footerData.logo}
                  alt={footerData.logoAlt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Circular Social Media Buttons (Desktop Only - hidden on mobile) */}
            <div className="hidden md:flex">
              {renderSocialLinks(false)}
            </div>
          </div>

          {/* Columns 2 & 3: CONTACT US & CHAT US (Side by Side) */}
          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:gap-10 md:col-span-8 lg:col-span-8 items-start">
            {/* Column 2: CONTACT US */}
            <div className="flex flex-col items-start text-left">
              <h3 className="font-serif text-[13px] sm:text-sm font-extrabold tracking-[0.22em] text-[#deb56c] uppercase">
                {footerData.contact.title}
              </h3>

              <div className="mt-3.5 space-y-2 text-[12px] sm:text-sm text-[#faedea] leading-relaxed">
                <p>
                  <a
                    href={footerData.contact.phoneHref}
                    className="hover:text-white transition-colors duration-200 font-medium"
                  >
                    {footerData.contact.phone}
                  </a>
                </p>
                <p className="break-all">
                  <a
                    href={`mailto:${footerData.contact.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {footerData.contact.email}
                  </a>
                </p>
                <p className="pt-0.5 text-white/80">
                  {footerData.contact.addressLine1}
                  <br />
                  {footerData.contact.addressLine2}
                </p>
              </div>
            </div>

            {/* Column 3: CHAT US */}
            <div className="flex flex-col items-start text-left">
              <h3 className="font-serif text-[13px] sm:text-sm font-extrabold tracking-[0.22em] text-[#deb56c] uppercase">
                {footerData.chat.title}
              </h3>

              <p className="mt-3.5 text-[12px] sm:text-sm text-[#faedea] leading-snug">
                {footerData.chat.subtitle}
              </p>

              {/* Chat Input + WhatsApp Button */}
              <form
                onSubmit={handleWhatsAppSend}
                className="mt-3.5 w-full max-w-sm flex items-stretch rounded-[6px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.2)] bg-white"
              >
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={footerData.chat.defaultMessage}
                  className="flex-1 min-w-0 bg-white px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#181818] placeholder-neutral-400 focus:outline-none border-none"
                />
                <button
                  type="submit"
                  aria-label="Send WhatsApp message"
                  className="self-stretch bg-[#deb56c] hover:bg-[#c99f57] text-[#141414] px-2.5 sm:px-4 flex items-center justify-center transition-colors duration-200 cursor-pointer shrink-0"
                >
                  {/* WhatsApp Icon */}
                  <svg
                    className="w-4 h-4 fill-currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.489.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Social Media Icons (Placed right above Copyright bar on mobile) */}
      <div className="relative z-10 md:hidden flex justify-center pb-8 pt-3 px-4">
        {renderSocialLinks(true)}
      </div>

      {/* Bottom Bar: Centered Copyright */}
      <div className="relative z-10 border-t border-white/15 bg-black/15 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center text-xs sm:text-[13px] text-[#faedea]/90">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 leading-relaxed">
            <span>{footerData.copyright.text}</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="inline-flex items-center gap-1">
              <span>Developed by</span>
              <a
                href={footerData.copyright.developerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#deb56c] hover:text-[#f8d794] font-bold hover:underline whitespace-nowrap uppercase transition-colors duration-200"
              >
                {footerData.copyright.developerName}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
