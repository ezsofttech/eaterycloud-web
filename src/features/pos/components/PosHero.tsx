"use client";

import React from "react";
import Link from "next/link";

export function PosHero() {
  return (
    <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 bg-[#FFF7EE] overflow-hidden border-b border-[#F0E4D8]/70">
      {/* Decorative Warm Ambient Glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF710D]/10 to-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-orange-100/40 to-white rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-2 text-xs mb-8">
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FFF4EA] border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] font-medium transition-colors shadow-2xs group"
            >
              <i className="bi bi-house-door text-xs group-hover:text-[#FF710D]" />
              <span>Home</span>
            </Link>
            <i className="bi bi-chevron-right text-[10px] text-[#A0AEC0]" />
            <Link
              href="/#products"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FFF4EA] border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] font-medium transition-colors shadow-2xs group"
            >
              <span>Products</span>
            </Link>
            <i className="bi bi-chevron-right text-[10px] text-[#A0AEC0]" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF4EA] border border-[#FDE3CF] text-xs font-bold text-[#FF710D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse" />
              <span>POS & Billing</span>
            </div>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Value Props & Single CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEFE2] border border-[#FCD8BE] text-[#FF710D] text-[11px] font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <i className="bi bi-receipt-cutoff text-[#FF710D]" />
              <span>Front-of-House (FOH) • Restaurant POS & Billing Suite</span>
            </div>

            {/* Main Title (Relating directly to Menu List) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102B46] tracking-tight leading-[1.15] mb-5">
              Speed Through Peak Hours. <br />
              <span className="text-[#FF710D] relative inline-block">
                Punch Menu Items & Bill in 3 Seconds.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#FF710D]/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-7 max-w-xl">
              Tap directly from your visual menu list — combos, sandwiches, fries, and drinks. Attach customer details, route instant KOT tickets to kitchen stations, and settle orders with zero friction.
            </p>

            {/* Single Focused CTA Button */}
            <div className="flex items-center gap-3.5 mb-8">
              <a
                href="#pos-showcase"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#FF710D]/25 hover:shadow-lg cursor-pointer"
              >
                <span>View POS Menu Screens</span>
                <i className="bi bi-arrow-down-short text-base" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[#F0E4D8]/80 text-xs font-semibold text-[#102B46]">
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>0.8s Fast Menu Punching</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>Instant KOT Kitchen Routing</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>100% Offline Resilience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Pretty Frame displaying the actual User-Uploaded Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] rounded-3xl bg-white border border-[#F0E4D8] overflow-hidden shadow-2xl shadow-orange-950/10 group transition-all duration-300 hover:shadow-orange-950/15">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#FFF8F2] border-b border-[#F0E4D8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF710D] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#102B46] tracking-wide uppercase">
                    Live POS Order Panel
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#FF710D] bg-white px-2.5 py-0.5 rounded-full border border-[#FDE3CF] shadow-2xs">
                  Dine in • Active Order
                </span>
              </div>

              {/* Picture Frame */}
              <div className="p-3.5 sm:p-4 bg-white flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pos/current_order.png"
                  alt="Eatery Cloud POS Current Order Panel showing Chef Special CC 5 and Print KOT"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  className="w-full h-auto max-h-[500px] object-contain rounded-2xl border border-[#F0E4D8]/80 shadow-xs transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-3 bg-[#FFFDFB] border-t border-[#F0E4D8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#102B46]">
                  <i className="bi bi-shield-check text-[#FF710D]" />
                  <span>Direct Kitchen KOT Print • Instant Recipe Sync</span>
                </div>
                <span className="text-[10px] font-mono text-[#FF710D] font-bold bg-[#FFF4EA] px-2.5 py-0.5 rounded-full border border-[#FDE3CF]">
                  ₹540.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
