import React from "react";
import Link from "next/link";

interface CorePillar {
  icon: string;
  title: string;
  description: string;
}

const CORE_PILLARS: CorePillar[] = [
  {
    icon: "bi-shield-check",
    title: "Operational Access",
    description:
      "Structured role management providing dedicated oversight for system administrators, franchise leads, and floor staff.",
  },
  {
    icon: "bi-cart-check",
    title: "Order Handling",
    description:
      "Unified order processing connecting counter billing, self-service ordering, and real-time kitchen preparation.",
  },
  {
    icon: "bi-cpu",
    title: "Device Connectivity",
    description:
      "Seamless communication between POS hardware, self-ordering kiosks, and kitchen order ticket (KOT) screens.",
  },
  {
    icon: "bi-diagram-3",
    title: "System Clarity",
    description:
      "Eliminating fragmentation by bringing restaurant workflows, multi-store coordination, and daily tasks into one connected system.",
  },
];

const QUICK_STATS = [
  { label: "Core Management Panels", value: "3 Panels", detail: "Admin, Franchise & POS" },
  { label: "Connected Device Types", value: "3 Devices", detail: "Terminal, Kiosk & KOT" },
];

export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#F0E4D8]/70">
      {/* Decorative Warm Ambient Glows (CSS only, no images) */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF710D]/10 to-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-amber-100/40 to-orange-100/20 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Path & Navigation Anchor Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Breadcrumb Path */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#FFF4EA] border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] font-medium transition-colors shadow-2xs group"
            >
              <i className="bi bi-house-door text-xs group-hover:text-[#FF710D]"></i>
              <span>Home</span>
            </Link>
            <i className="bi bi-chevron-right text-[10px] text-[#A0AEC0]"></i>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF4EA] border border-[#FDE3CF] text-xs font-bold text-[#FF710D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse" />
              <span>About Us</span>
            </div>
          </nav>

          {/* Quick jump navigation pills */}
          <nav aria-label="About page sections" className="hidden sm:flex items-center gap-2 text-xs font-semibold">
            <a
              href="#panels"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Core Panels
            </a>
            <a
              href="#devices"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Device Ecosystem
            </a>
            <a
              href="#growth"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Growth Architecture
            </a>
          </nav>
        </div>

        {/* Main Headline & Narrative */}
        <div className="max-w-4xl mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102B46] tracking-tight leading-[1.12] mb-6">
            One Platform. <br className="hidden sm:inline" />
            <span className="text-[#FF710D]">Every Part of Your Restaurant.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            <p>
              Eatery Cloud is designed to bring restaurant operations into one connected digital
              environment. From managing restaurant-level activities to coordinating franchise
              operations and handling day-to-day orders, the platform helps businesses organize their
              workflows through a structured and connected system.
            </p>
            <p>
              We believe restaurant technology should make everyday work easier to manage. That is
              why Eatery Cloud brings essential operational access, order handling, and device
              connectivity together in one platform, helping restaurant teams work with greater
              clarity and coordination.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md shadow-[#FF710D]/25 transition-all duration-200 active:scale-95"
            >
              <span>Explore The System</span>
              <i className="bi bi-arrow-right text-xs"></i>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-[#102B46] border border-[#F0E4D8] text-sm font-semibold shadow-xs transition-all duration-200 active:scale-95"
            >
              <i className="bi bi-chat-dots-fill text-[#FF710D]"></i>
              <span>Speak with Our Team</span>
            </Link>
          </div>
        </div>

        {/* Point-wise Quick Stats Strip (No images, crisp cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 max-w-xl">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#F0E4D8] shadow-2xs"
            >
              <div className="text-xl sm:text-2xl font-black text-[#102B46] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#FF710D] mt-0.5">
                {stat.detail}
              </div>
              <div className="text-[11px] text-[#64748B] mt-1 truncate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Point-wise Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white border border-[#F0E4D8] hover:border-[#FF710D]/60 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] text-[#FF710D] flex items-center justify-center text-lg mb-4">
                <i className={`bi ${pillar.icon}`}></i>
              </div>
              <h3 className="text-base font-bold text-[#102B46] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
