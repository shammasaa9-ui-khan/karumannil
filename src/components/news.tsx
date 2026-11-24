"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/newsData";

export default function News() {
  const { hero, content } = newsData;

  // Track likes on comments for interactive feel
  const [likes, setLikes] = useState<{ [id: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#ffffff] text-[#121212] select-none">
      {/* 1. Hero Banner with news.png */}
      <section className="relative w-full aspect-[2172/724] min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden flex items-center justify-center text-center">
        {/* Background Image: news.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-[#071326]/40 mix-blend-multiply" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
          {/* Badge: GREATEST ACHIEVEMENT 2025 BEGINNING */}
          <div className="inline-block rounded-[3px] bg-[#cf854e] px-4 py-1.5 shadow-md">
            <span className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Luxury Serif Title: India Most Recognized Business Group Globally */}
          <h1 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {hero.title}
          </h1>

          {/* Underline Decorative Accent */}
          <div className="mt-4 w-16 sm:w-20 h-1 bg-[#deb56c] rounded-full shadow-sm" />

          {/* Subtitle */}
          {hero.subtitle && (
            <p className="mt-4 text-[13.5px] sm:text-[15.5px] text-white/85 max-w-2xl leading-relaxed font-light">
              {hero.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* 2. Article, Event Showcase & Comments (Matching user screenshot exactly) */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* Top Paragraph 1 */}
          <p className="text-[17px] sm:text-[18.5px] lg:text-[20px] leading-[1.8] sm:leading-[1.85] text-[#4a4a4a] font-normal text-justify sm:text-left">
            {content.topParagraph1}
          </p>

          {/* Top Paragraph 2 */}
          <p className="mt-6 sm:mt-7 text-[17px] sm:text-[18.5px] lg:text-[20px] leading-[1.8] sm:leading-[1.85] text-[#4a4a4a] font-normal text-justify sm:text-left">
            {content.topParagraph2}
          </p>

          {/* Middle: 3 Photos Side by Side (Enlarged) */}
          <div className="my-10 sm:my-14 lg:my-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {content.gallery.map((item) => (
              <div
                key={item.id}
                className="group relative w-full h-[280px] sm:h-[340px] lg:h-[380px] xl:h-[420px] overflow-hidden rounded-[14px] sm:rounded-[18px] bg-[#0c182c] border border-[#deb56c]/50 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(222,181,108,0.25)] hover:border-[#deb56c] transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                    item.objectPosition || "object-center"
                  }`}
                  priority
                />
              </div>
            ))}
          </div>

          {/* Subheading: Lorem ipsum dolor sit amet. */}
          <h2 className="font-serif text-2xl sm:text-[32px] lg:text-[36px] font-normal text-[#5a5a5a] tracking-tight">
            {content.subheading}
          </h2>

          {/* Bottom Paragraph 3 */}
          <p className="mt-5 sm:mt-6 text-[17px] sm:text-[18.5px] lg:text-[20px] leading-[1.8] sm:leading-[1.85] text-[#4a4a4a] font-normal text-justify sm:text-left">
            {content.bottomParagraph}
          </p>
        </div>
      </section>

      {/* 3. Tags, Social Connect & Comments Section (Background Pink #740101) */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-[#740101] text-white overflow-hidden select-none">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-black/15 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* Tags & Social Connect Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/20">
            {/* Tags Pills with clean white badge look */}
            <div className="flex flex-nowrap items-center gap-2 sm:gap-3.5 overflow-x-auto">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block shrink-0 whitespace-nowrap rounded-[4px] bg-white text-[#1f2937] px-2.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.08em] sm:tracking-[0.16em] uppercase shadow-sm transition-transform hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Share / Connect */}
            <div className="flex items-center gap-4 sm:gap-5 text-white">
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-white/90">
                Connect:
              </span>
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  <svg className="w-3 h-4 sm:w-3.5 sm:h-4.5 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white/85 hover:text-white transition-colors"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 4. Comments Section (Matching user screenshot) */}
          <div className="mt-10 sm:mt-14">
            {/* Heading: 2 Comments */}
            <h3 className="font-serif text-2xl sm:text-[28px] font-bold text-white tracking-tight mb-8 sm:mb-10">
              {content.commentsCountText}
            </h3>

            {/* Comments List */}
            <div className="space-y-8 sm:space-y-10">
              {content.comments.map((comment) => {
                const isLiked = likes[comment.id];

                return (
                  <div
                    key={comment.id}
                    className="flex items-start gap-4 sm:gap-6"
                  >
                    {/* Commenter Avatar */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-white/40">
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        fill
                        sizes="56px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Comment Details */}
                    <div className="flex-1">
                      {/* Date */}
                      <span className="text-[11px] sm:text-[12px] font-bold tracking-wider text-[#deb56c] uppercase block mb-1">
                        {comment.date}
                      </span>

                      {/* Author Name */}
                      <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white leading-tight mb-2">
                        {comment.author}
                      </h4>

                      {/* Comment Text */}
                      <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/90 mb-3.5 max-w-3xl">
                        {comment.text}
                      </p>

                      {/* Action Buttons: LIKE / REPLY (First white box, on hover turns to logo color) */}
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => toggleLike(comment.id)}
                          className={`rounded-full border border-white px-5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm ${
                            isLiked
                              ? "bg-[#740101] text-white border-white font-bold"
                              : "bg-white text-[#740101] hover:bg-transparent hover:text-white"
                          }`}
                        >
                          {isLiked ? "LIKED" : "LIKE"}
                        </button>

                        <button
                          type="button"
                          className="rounded-full border border-white bg-white px-5 py-1 text-[11px] sm:text-xs font-bold text-[#740101] uppercase tracking-wider transition-all duration-200 hover:bg-transparent hover:text-white cursor-pointer shadow-sm"
                        >
                          REPLY
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recommended Section (Background White) */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-white text-[#111111] select-none">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* Heading: Recommended */}
          <h3 className="font-serif text-3xl sm:text-[34px] lg:text-[38px] font-normal text-[#1a1a1a] text-center tracking-normal mb-8 sm:mb-12">
            {content.recommendedHeadline}
          </h3>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {content.recommended.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition-all duration-300 cursor-pointer bg-[#0d172e] aspect-[4/5] min-h-[360px]"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${
                    item.objectPosition || "object-top"
                  } transition-transform duration-500 ease-out group-hover:scale-105`}
                />

                {/* Bottom Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-35% to-transparent pointer-events-none z-[8]" />

                {/* Card Content Overlay (Bottom-Left) */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-6 lg:p-7 pointer-events-none">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-block bg-[#dfbe9f]/95 text-white backdrop-blur-sm px-3.5 py-1 rounded-[5px] text-[11px] sm:text-[12px] font-bold tracking-wider uppercase shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-2.5 font-serif text-[20px] sm:text-[22px] font-semibold text-white tracking-tight leading-snug">
                    {item.title}
                  </h4>

                  {/* Date Row with Clock Icon */}
                  <div className="mt-2 flex items-center gap-2 text-[12.5px] sm:text-[13.5px] text-white/95 font-medium">
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
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Clickable Overlay Link */}
                {item.link && (
                  <Link
                    href={item.link}
                    aria-label={item.title}
                    className="absolute inset-0 z-20"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
