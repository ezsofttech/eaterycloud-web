"use client";

import React from "react";
import Link from "next/link";

interface ProductSynergySectionProps {
  currentModule: "pos" | "inventory";
}

export function ProductSynergySection({ currentModule }: ProductSynergySectionProps) {
  const isPos = currentModule === "pos";

  return (
    <section id="synergy" className="py-16 lg:py-20 bg-[#FFFDFB] border-t border-[#F0E4D8]/80 relative overflow-hidden scroll-mt-20">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF710D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E2] text-[#FF710D] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#FCD8BE]">
            <i className="bi bi-arrow-left-right" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-3">
            Front-of-House vs. Back-of-House: <br />
            <span className="text-[#FF710D]">How POS & Inventory Work Together</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto">
            A modern restaurant runs on two synchronized engines. Understand the distinct roles of your front-of-house billing and back-kitchen stock control.
          </p>
        </div>

        {/* 2-Column Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Card 1: POS & Billing (Front-of-House) */}
          <div
            className={`rounded-3xl p-6 sm:p-8 transition-all duration-200 border ${
              isPos
                ? "bg-white border-[#FF710D] shadow-xl shadow-[#FF710D]/10 ring-2 ring-[#FF710D]/20"
                : "bg-white/70 border-[#F0E4D8] hover:border-[#102B46]/30"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    isPos ? "bg-[#FF710D] text-white" : "bg-[#FFF4EA] text-[#FF710D]"
                  }`}
                >
                  <i className="bi bi-receipt-cutoff" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#102B46]">POS & Billing</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF710D]">
                    Front-of-House (FOH)
                  </p>
                </div>
              </div>
              {isPos ? (
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#FFEFE2] text-[#FF710D] border border-[#FCD8BE]">
                  Current Page
                </span>
              ) : (
                <Link
                  href="/pos-billing"
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#FF710D] hover:bg-[#E65E00] text-white transition-colors shadow-2xs"
                >
                  View POS Module →
                </Link>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed">
              Customer-facing operations built for extreme speed. Ensures zero ordering queues, fast table turnover, and error-free multi-mode payments.
            </p>

            {/* Core Characteristics */}
            <div className="space-y-3 mb-6">
              {[
                { label: "Primary Users", val: "Cashiers, Waiters, Captains, Floor Managers" },
                { label: "Operating Zones", val: "Dine-in tables, Takeaway stations, Bar areas" },
                { label: "Key Responsibilities", val: "Order punch, table map, split billing, dynamic UPI QR & KOTs" },
                { label: "Hardware Supported", val: "Touch terminals, tablets, 58mm/80mm thermal receipt printers" },
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between text-xs py-1.5 border-b border-[#F0E4D8]/60">
                  <span className="font-bold text-[#102B46] w-36 shrink-0">{row.label}:</span>
                  <span className="text-[#64748B] text-right">{row.val}</span>
                </div>
              ))}
            </div>

            {/* Bottom Signal Badge */}
            <div className="p-3 rounded-2xl bg-[#FFF8F2] border border-[#FDE3CF] flex items-center gap-2.5 text-xs">
              <i className="bi bi-broadcast text-[#FF710D] text-base shrink-0" />
              <p className="text-[11px] text-[#102B46] font-medium leading-tight">
                <strong>Outward Signal:</strong> Settling any bill immediately pushes recipe item counts to the Back-of-House inventory ledger.
              </p>
            </div>
          </div>

          {/* Card 2: Inventory & Stock Control (Back-of-House) */}
          <div
            className={`rounded-3xl p-6 sm:p-8 transition-all duration-200 border ${
              !isPos
                ? "bg-white border-[#FF710D] shadow-xl shadow-[#FF710D]/10 ring-2 ring-[#FF710D]/20"
                : "bg-white/70 border-[#F0E4D8] hover:border-[#102B46]/30"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    !isPos ? "bg-[#FF710D] text-white" : "bg-[#FFF4EA] text-[#FF710D]"
                  }`}
                >
                  <i className="bi bi-box-seam" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#102B46]">Inventory & Recipes</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF710D]">
                    Back-of-House (BOH)
                  </p>
                </div>
              </div>
              {!isPos ? (
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#FFEFE2] text-[#FF710D] border border-[#FCD8BE]">
                  Current Page
                </span>
              ) : (
                <Link
                  href="/inventory"
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#FF710D] hover:bg-[#E65E00] text-white transition-colors shadow-2xs"
                >
                  View Inventory Module →
                </Link>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed">
              Backbone kitchen operations built for accurate food costing. Eliminates pilferage, prevents stock-outs, and automates recipe consumption.
            </p>

            {/* Core Characteristics */}
            <div className="space-y-3 mb-6">
              {[
                { label: "Primary Users", val: "Kitchen Chefs, Store Keepers, Purchase Heads, Admins" },
                { label: "Operating Zones", val: "Kitchen storage, Cold room, Central depot, Franchise stores" },
                { label: "Key Responsibilities", val: "Gram-precision deductions, inward POs, physical audits, wastage logs" },
                { label: "Precision Units", val: "Grams (g), Kilograms (kg), Milliliters (ml), Pieces (pcs)" },
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between text-xs py-1.5 border-b border-[#F0E4D8]/60">
                  <span className="font-bold text-[#102B46] w-36 shrink-0">{row.label}:</span>
                  <span className="text-[#64748B] text-right">{row.val}</span>
                </div>
              ))}
            </div>

            {/* Bottom Signal Badge */}
            <div className="p-3 rounded-2xl bg-[#FFF8F2] border border-[#FDE3CF] flex items-center gap-2.5 text-xs">
              <i className="bi bi-cpu text-[#FF710D] text-base shrink-0" />
              <p className="text-[11px] text-[#102B46] font-medium leading-tight">
                <strong>Inward Signal:</strong> Decrements raw materials automatically without chefs having to write manual consumption sheets.
              </p>
            </div>
          </div>
        </div>

        {/* Real-time Order-to-Stock Lifecycle Flow (Inverted: Clean White Card with Orange Accents) */}
        <div className="rounded-3xl bg-white border border-[#F0E4D8] text-[#102B46] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl shadow-orange-950/5">
          {/* Subtle Warm Accent Bar at Top */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF710D] via-[#FFA654] to-[#FF710D]" />

          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FF710D] bg-[#FFF4EA] border border-[#FDE3CF] px-3 py-1 rounded-full shadow-2xs">
              Real-Time End-to-End Synergy
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-3 text-[#102B46] tracking-tight">
              From Customer Order to <span className="text-[#FF710D]">Warehouse Gram Deduction</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 leading-relaxed">
              Watch how a single customer transaction bridges both Front-of-House and Back-of-House modules automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                module: "POS (FOH)",
                title: "Punch Order",
                desc: "Captain punches 3x Chef Special CC 5 combo directly from the visual menu list.",
                icon: "bi-tablet",
              },
              {
                step: "02",
                module: "KOT ROUTING",
                title: "Instant Ticket",
                desc: "Order splits and prints to kitchen station within 0.8 seconds.",
                icon: "bi-printer",
              },
              {
                step: "03",
                module: "BILLING (FOH)",
                title: "Collect Bill",
                desc: "Cashier settles ₹540.00 via Online UPI / Cash / Split / Customer Credit.",
                icon: "bi-wallet2",
              },
              {
                step: "04",
                module: "INVENTORY (BOH)",
                title: "Auto Stock Cut",
                desc: "Pantry auto-deducts fries (300g), seasoning (6g), buns (3 pcs) & sipper glasses (3 pcs).",
                icon: "bi-box-arrow-down",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#FFFDFB] hover:bg-white border border-[#F0E4D8] hover:border-[#FF710D]/50 transition-all hover:shadow-sm relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black font-mono text-[#FF710D]">
                    STEP {st.step}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-[#FF710D] bg-[#FFF4EA] border border-[#FDE3CF] px-2 py-0.5 rounded-full">
                    {st.module}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF4EA] border border-[#FDE3CF] text-[#FF710D] flex items-center justify-center text-xs group-hover:bg-[#FF710D] group-hover:text-white transition-colors">
                    <i className={`bi ${st.icon}`} />
                  </div>
                  <h4 className="text-xs font-bold text-[#102B46]">{st.title}</h4>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Navigation Link to the other module */}
          <div className="mt-8 pt-6 border-t border-[#F0E4D8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64748B]">
              {isPos ? (
                <span>Looking to manage raw food ingredients, warehouses, and audits?</span>
              ) : (
                <span>Looking for the floor touchscreen terminal that rings up guest orders?</span>
              )}
            </div>
            {isPos ? (
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs font-bold transition-all shadow-md shadow-[#FF710D]/25 hover:shadow-lg"
              >
                <span>Explore Inventory Management Suite</span>
                <i className="bi bi-arrow-right text-xs" />
              </Link>
            ) : (
              <Link
                href="/pos-billing"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs font-bold transition-all shadow-md shadow-[#FF710D]/25 hover:shadow-lg"
              >
                <span>Explore POS & Billing Suite</span>
                <i className="bi bi-arrow-right text-xs" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

