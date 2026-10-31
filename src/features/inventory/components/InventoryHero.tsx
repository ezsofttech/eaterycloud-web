"use client";

import React from "react";
import Link from "next/link";

export function InventoryHero() {
  return (
    <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 bg-[#FFF7EE] overflow-hidden border-b border-[#F0E4D8]/70">
      {/* Decorative Warm Ambient Glows (Orange & White Palette) */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF710D]/10 to-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-orange-100/40 to-white rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Path (Consistent with About Us) */}
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
              <span>Inventory</span>
            </div>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Value Props & Single CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Top Operational Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FCD8BE] text-[#FF710D] text-[11px] font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <i className="bi bi-box-seam text-[#FF710D]" />
              <span>Back-of-House (BOH) • Kitchen & Central Warehouse Suite</span>
            </div>

            {/* Main Title (Relating directly to Menu List) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102B46] tracking-tight leading-[1.15] mb-5">
              Keep Menu Items In Stock. <br />
              <span className="text-[#FF710D] relative inline-block">
                Auto-Deduct Ingredients per Menu Order.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#FF710D]/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Concise Value Proposition (Relating to Menu List) */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-7 max-w-xl">
              Prevent popular menu dishes from going out of stock. Every sandwich, fries portion, and beverage ordered from your menu automatically deducts raw food supplies and packaging materials across Central & Franchise kitchens.
            </p>

            {/* Single Focused CTA Button (No duplicate buttons) */}
            <div className="flex items-center gap-3.5 mb-8">
              <a
                href="#inventory-showcase"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#FF710D]/25 hover:shadow-lg cursor-pointer"
              >
                <span>View Inventory Dashboards</span>
                <i className="bi bi-arrow-down-short text-base" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[#F0E4D8]/80 text-xs font-semibold text-[#102B46]">
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>Zero Manual Consumption Logs</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>Grams, ML & Piece Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#FF710D] text-sm" />
                <span>Central & Franchise Segregation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated Stock Event Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-[#F0E4D8] p-5 sm:p-6 shadow-xl shadow-orange-950/5">
              {/* Top Accent Strip */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF710D] to-orange-300 rounded-t-2xl" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0E4D8]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D]">
                    <i className="bi bi-cpu-fill text-sm" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[#102B46]">Live Auto-Deduction Engine</h2>
                    <p className="text-[10px] text-[#8899A6]">Triggered by Chef Special CC 5 (₹540.00)</p>
                  </div>
                </div>
                {/* Real-time Badge */}
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF4EA] text-[#FF710D] border border-[#FDE3CF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse" />
                  <span>Real-time</span>
                </span>
              </div>

              {/* Real-time Ingredient Deduction Breakdown */}
              <div className="space-y-2 mb-4">
                {[
                  {
                    item: "Raw French Fries",
                    category: "Raw Material",
                    deducted: "-300 g",
                    balance: "1,500 g",
                    warehouse: "Ashim Kumar Central Kitchen",
                  },
                  {
                    item: "Salt & Peri Seasoning",
                    category: "Seasoning",
                    deducted: "-6 g",
                    balance: "82 g",
                    warehouse: "Ashim Kumar Central Kitchen",
                  },
                  {
                    item: "Sandwich Bread & Veg Filling",
                    category: "Raw Food Supplies",
                    deducted: "-2 portions",
                    balance: "48 portions",
                    warehouse: "Ashim Kumar Central Kitchen",
                  },
                  {
                    item: "JF Sipper Glass 300ml",
                    category: "Packaging Disposable",
                    deducted: "-1 piece",
                    balance: "20,351 pcs",
                    warehouse: "Navnidhi Foods Franchise",
                  },
                  {
                    item: "Packaging Fries Pouch & Napkins",
                    category: "Packaging Disposable",
                    deducted: "-2 pieces",
                    balance: "24 pcs",
                    warehouse: "Ashim Kumar Central Kitchen",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-[#F0E4D8] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D] text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-bold text-[#102B46] leading-tight text-[11px]">{row.item}</p>
                        <p className="text-[10px] text-[#8899A6]">{row.warehouse}</p>
                      </div>
                    </div>
                    {/* Deducted Badge */}
                    <div className="text-right shrink-0">
                      <span className="font-mono font-bold text-[#FF710D] bg-[#FFF4EA] px-2 py-0.5 rounded border border-[#FDE3CF] text-[11px]">
                        {row.deducted}
                      </span>
                      <p className="text-[10px] text-[#8899A6] mt-0.5">Bal: {row.balance}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Summary Pill */}
              <div className="p-3 rounded-xl bg-[#FF710D] text-white flex items-center justify-between text-xs shadow-sm">
                <div className="flex items-center gap-2">
                  <i className="bi bi-shield-check text-white" />
                  <span className="font-semibold text-[11px]">Auto Ledger Updated Across Warehouses</span>
                </div>
                <span className="font-mono text-[10px] text-white/90 font-bold">Sync: 0.18s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
