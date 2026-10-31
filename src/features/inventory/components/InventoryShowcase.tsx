"use client";

import React, { useState } from "react";
import { INVENTORY_MODULES, InventoryModule } from "@/constants/inventory";

export function InventoryShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>(INVENTORY_MODULES[0].id);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const activeModule: InventoryModule =
    INVENTORY_MODULES.find((m) => m.id === activeTabId) || INVENTORY_MODULES[0];

  return (
    <section id="inventory-showcase" className="py-14 lg:py-18 bg-white scroll-mt-20 relative">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F0E4D8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-2">
            Three Core Views. <span className="text-[#FF710D]">Zero Guesswork.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Real-time dashboards for warehouse managers and kitchen teams.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {INVENTORY_MODULES.map((module, idx) => {
            const isActive = module.id === activeTabId;
            const tabIcons = ["bi-boxes", "bi-receipt-cutoff", "bi-sliders2"];

            return (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveTabId(module.id)}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#FF710D] text-white shadow-md shadow-[#FF710D]/20"
                    : "bg-white text-[#102B46] hover:bg-[#FFF4EA] hover:text-[#FF710D] border border-[#F0E4D8]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] ${
                    isActive ? "bg-white text-[#FF710D]" : "bg-[#FFF4EA] text-[#FF710D] border border-[#FDE3CF]"
                  }`}
                >
                  <i className={`bi ${tabIcons[idx]}`} />
                </div>
                <span>{module.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Balanced Showcase: Details on Left, Crisp Sharp Mockup on Right */}
        <div className="rounded-3xl bg-[#FFFDFB] border border-[#F0E4D8] p-5 sm:p-7 lg:p-8 shadow-xl shadow-[#102B46]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Details & Key Points (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#FF710D] uppercase tracking-wider bg-[#FFF0E2] px-2.5 py-0.5 rounded-full border border-[#FCD8BE]">
                    {activeModule.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#8899A6] flex items-center gap-1">
                    <i className="bi bi-shield-check text-[#FF710D]" />
                    <span>Live Production Screen</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B46] mb-1.5">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-5">
                  {activeModule.tagline}
                </p>

                {/* 4 Crisp Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeModule.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-[#F0E4D8] shadow-2xs"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D] mb-2">
                        <i className={`bi ${item.icon} text-xs`} />
                      </div>
                      <h4 className="text-xs font-bold text-[#102B46] mb-0.5">{item.title}</h4>
                      <p className="text-[11px] text-[#64748B] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Metric Chips */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-[#F0E4D8]">
                {activeModule.quickStats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 px-3 py-2 rounded-xl bg-white border border-[#F0E4D8] text-center shadow-2xs"
                  >
                    <p className="text-[10px] font-semibold text-[#8899A6] uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-[#102B46]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Crisp, Compact Mockup (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[550px] rounded-2xl overflow-hidden border border-[#F0E4D8] bg-white shadow-xl shadow-orange-950/8 group">
                {/* Window Header (Pretty White & Orange) */}
                <div className="px-3.5 py-2.5 bg-[#FFF8F2] border-b border-[#F0E4D8] flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF710D]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF710D]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF710D]" />
                    <span className="text-[10px] font-mono text-[#FF710D] ml-2 truncate max-w-[200px] sm:max-w-xs bg-white px-2 py-0.5 rounded-full border border-[#FDE3CF]">
                      app.eaterycloud.com/inventory/{activeModule.id}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setModalImage({ src: activeModule.image, title: activeModule.title })
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-[#FFF4EA] border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] text-[10px] font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    <i className="bi bi-arrows-fullscreen text-[9px] text-[#FF710D]" />
                    <span>Expand</span>
                  </button>
                </div>

                {/* Compact, High-Density Image Frame */}
                <div
                  className="relative cursor-pointer bg-[#FFFDFB] p-2 flex items-center justify-center overflow-hidden"
                  onClick={() =>
                    setModalImage({ src: activeModule.image, title: activeModule.title })
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeModule.image}
                    alt={activeModule.alt}
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                    className="w-full h-auto object-contain rounded-lg border border-[#F0E4D8]/60 transition-transform duration-200 group-hover:scale-[1.01] shadow-2xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Overview Cards at Bottom */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {INVENTORY_MODULES.map((mod, idx) => (
            <div
              key={mod.id}
              onClick={() => {
                setActiveTabId(mod.id);
                const el = document.getElementById("inventory-showcase");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-3.5 rounded-2xl bg-white border transition-all cursor-pointer flex items-center gap-3 ${
                activeTabId === mod.id
                  ? "border-[#FF710D] shadow-md shadow-[#FF710D]/10 ring-1 ring-[#FF710D]/30"
                  : "border-[#F0E4D8] hover:border-[#FF710D]/40"
              }`}
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden border border-[#F0E4D8] bg-[#FFF8F2] shrink-0 p-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mod.image}
                  alt={mod.alt}
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-[#FF710D]">0{idx + 1} • {mod.badge}</p>
                <h4 className="text-xs font-bold text-[#102B46] truncate">{mod.tabLabel}</h4>
              </div>
              <i className="bi bi-chevron-right text-xs text-[#8899A6] shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Compact Sharp Modal */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-2 text-white text-xs font-bold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF710D]" />
                <span>{modalImage.title}</span>
              </span>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <i className="bi bi-x-lg text-xs" />
              </button>
            </div>

            {/* Modal Image Box kept within crisp natural dimensions (max-w-4xl) */}
            <div className="w-full rounded-xl border border-neutral-700 bg-neutral-950 p-2 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalImage.src}
                alt={modalImage.title}
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
