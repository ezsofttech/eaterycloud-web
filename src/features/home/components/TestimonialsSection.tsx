"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#F0E4D8]/60 relative overflow-hidden">
      {/* Botanical wheat line art accents matching reference */}
      <div
        className="hidden xl:block absolute left-4 bottom-8 opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="80" height="120" viewBox="0 0 100 150" fill="none" stroke="#FF710D" strokeWidth="1.5">
          <path d="M50 140 C 45 100, 30 60, 20 20" />
          <path d="M20 20 C 35 25, 45 40, 48 55" />
          <path d="M30 60 C 45 65, 55 80, 50 100" />
          <path d="M50 140 C 55 100, 70 60, 80 20" />
          <path d="M80 20 C 65 25, 55 40, 52 55" />
        </svg>
      </div>

      <div
        className="hidden xl:block absolute right-4 bottom-8 opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="80" height="120" viewBox="0 0 100 150" fill="none" stroke="#FF710D" strokeWidth="1.5">
          <path d="M50 140 C 55 100, 70 60, 80 20" />
          <path d="M80 20 C 65 25, 55 40, 52 55" />
          <path d="M50 140 C 45 100, 30 60, 20 20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
            WHAT OUR CLIENTS SAY
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-3">
            Trusted by Restaurants Across the World
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Hear from our partners who are growing with Eatery Cloud.
          </p>
        </div>

        {/* Testimonial Row: Left Arrow + Card Content + Right Arrow matching reference */}
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 sm:gap-8">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="shrink-0 w-9 h-9 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white flex items-center justify-center shadow-xs transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
            aria-label="Previous testimonial"
          >
            <i className="bi bi-chevron-left text-xs -ml-0.5"></i>
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 text-center py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Circular Avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#F0E4D8]">
                <Image
                  src={current.avatarSrc}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote & Author Details */}
              <div className="text-center sm:text-left max-w-xl">
                <p className="text-xs sm:text-sm font-medium text-[#102B46] leading-relaxed mb-3">
                  <span className="text-[#FF710D] font-serif text-lg mr-1">&ldquo;</span>
                  {current.quote}
                  <span className="text-[#FF710D] font-serif text-lg ml-1">&rdquo;</span>
                </p>

                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#102B46]">
                    {current.author}
                  </h4>
                  <p className="text-[11px] text-[#64748B]">
                    {current.role}, {current.business}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="shrink-0 w-9 h-9 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white flex items-center justify-center shadow-xs transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
            aria-label="Next testimonial"
          >
            <i className="bi bi-chevron-right text-xs -mr-0.5"></i>
          </button>
        </div>

        {/* 4 Pagination Dots below matching reference */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-200 ${
                idx === currentIndex
                  ? "w-6 bg-[#FF710D]"
                  : "w-2 bg-[#F0E4D8] hover:bg-[#FF710D]/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
