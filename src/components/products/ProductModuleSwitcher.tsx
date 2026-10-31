"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ProductModuleSwitcher() {
  const pathname = usePathname();
  const isPos = pathname === "/pos-billing" || pathname.startsWith("/pos-billing");
  const isInventory = pathname === "/inventory" || pathname.startsWith("/inventory");

  return (
    <div className="w-full bg-[#FFF3E6] border-b border-[#F0E4D8]/80 py-2.5 sm:py-3 mt-[68px] sm:mt-[74px] sticky top-[68px] sm:top-[74px] z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Label explaining the two operational wings */}
          <div className="flex items-center gap-2 text-xs text-[#102B46]">
            <span className="w-2 h-2 rounded-full bg-[#FF710D] animate-ping" />
            <span className="font-extrabold uppercase tracking-wider text-[11px] text-[#FF710D]">
              Restaurant Operating System
            </span>
            <span className="hidden md:inline text-[#8899A6]">•</span>
            <span className="hidden md:inline text-xs text-[#64748B]">
              Switch between Front-of-House and Back-of-House suites
            </span>
          </div>

          {/* Interactive Toggle Pill Switcher */}
          <div className="inline-flex p-1 rounded-full bg-white border border-[#F0E4D8] shadow-2xs">
            {/* POS & Billing Button */}
            <Link
              href="/pos-billing"
              className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                isPos
                  ? "bg-[#102B46] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#102B46] hover:bg-[#FFF7EE]"
              }`}
            >
              <i className={`bi bi-receipt-cutoff ${isPos ? "text-[#FF710D]" : "text-[#8899A6]"}`} />
              <span>POS & Billing</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold uppercase ${
                  isPos ? "bg-[#FF710D] text-white" : "bg-neutral-100 text-[#8899A6]"
                }`}
              >
                FOH
              </span>
            </Link>

            {/* Inventory Button */}
            <Link
              href="/inventory"
              className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                isInventory
                  ? "bg-[#102B46] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#102B46] hover:bg-[#FFF7EE]"
              }`}
            >
              <i className={`bi bi-box-seam ${isInventory ? "text-[#FF710D]" : "text-[#8899A6]"}`} />
              <span>Inventory & Stock</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold uppercase ${
                  isInventory ? "bg-[#FF710D] text-white" : "bg-neutral-100 text-[#8899A6]"
                }`}
              >
                BOH
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
