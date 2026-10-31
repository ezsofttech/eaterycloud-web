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
    <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden border-b border-[#F0E4D8]/70">
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
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
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
              className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Core Panels
            </a>
            <a
              href="#devices"
              className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Device Ecosystem
            </a>
            <a
              href="#growth"
              className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D]/50 transition-colors shadow-2xs"
            >
              Growth Architecture
            </a>
          </nav>
        </div>

        {/* Left-Aligned Hero Section with Right-Side Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-6 lg:mb-8">
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FFDEC0] text-[#FF710D] text-xs font-bold tracking-wide uppercase mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF710D] animate-pulse" />
              <span>About Eatery Cloud</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102B46] tracking-tight leading-[1.12] mb-3.5">
              One Platform. <br className="hidden sm:inline" />
              <span className="text-[#FF710D]">Every Part of Your Restaurant.</span>
            </h1>

            <div className="space-y-2 text-base sm:text-lg text-[#64748B] leading-relaxed mb-5 max-w-2xl">
              <p>
                Eatery Cloud is designed to bring restaurant operations into one connected digital
                environment. From managing restaurant-level activities to coordinating franchise
                operations and handling day-to-day orders, the platform helps businesses organize their
                workflows through a structured and connected system.
              </p>
              <p>
                We believe restaurant technology should make everyday work easier to manage. That is
                why Eatery Cloud brings operational access, order handling, and device
                connectivity together in one platform.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md shadow-[#FF710D]/25 transition-all duration-200 active:scale-95"
              >
                <span>Explore The System</span>
                <i className="bi bi-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#102B46] border border-[#F0E4D8] text-sm font-semibold shadow-xs transition-all duration-200 active:scale-95"
              >
                <i className="bi bi-chat-dots-fill text-[#FF710D]"></i>
                <span>Speak with Our Team</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Platform Overview & Live Stats Card (Compact & Balanced) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="p-5 rounded-2xl bg-white border border-[#F0E4D8] shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#F0E4D8]/80">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FFDEC0] text-[#FF710D] text-xs font-bold tracking-wide uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse" />
                  <span>Platform Highlights</span>
                </div>
                <span className="text-[11px] font-semibold text-[#64748B] bg-[#FFF7EE] px-2.5 py-0.5 rounded-full border border-[#F0E4D8]">
                  Cloud-First
                </span>
              </div>

              {/* Stats Cards */}
              <div className="flex flex-col gap-2.5">
                {QUICK_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#F0E4D8] hover:border-[#FF710D]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-black text-[#102B46] tracking-tight">
                        {stat.value}
                      </div>
                      <span className="text-xs font-bold text-[#FF710D] px-2.5 py-0.5 rounded-full bg-[#FFF4EA] border border-orange-200">
                        {stat.detail}
                      </span>
                    </div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Point-wise Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E4D8] hover:border-[#FF710D]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] text-[#FF710D] flex items-center justify-center text-lg mb-3.5 shadow-2xs">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>
                <h3 className="text-base font-bold text-[#102B46] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
