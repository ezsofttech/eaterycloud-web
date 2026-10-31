"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/constants/contact";

type RoleId = "pos" | "franchise" | "admin";

interface RoleConfig {
  id: RoleId;
  name: string;
  tagline: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  description: string;
  imageSrc: string;
  roleTitle: string;
  roleDescription: string;
  destinationUrl?: string;
  buttonText: string;
  badgeIcon: string;
  badgeTitle: string;
  badgeSubtitle: string;
}

const ROLES: RoleConfig[] = [
  {
    id: "pos",
    name: "POS",
    tagline: "ONE TEAM. ONE PLATFORM.",
    headlinePrefix: "Good service starts with ",
    headlineHighlight: "the right tools.",
    headlineSuffix: "",
    description:
      "From the front counter to the kitchen, your workspace is just one click away.",
    imageSrc: "/images/POS_Slider.jpg",
    roleTitle: "Front of house",
    roleDescription:
      "Your counter, tables, and checkout. Everything for a smoother service.",
    destinationUrl: process.env.NEXT_PUBLIC_POS,
    buttonText: "Continue to POS",
    badgeIcon: "bi-lightning-charge-fill",
    badgeTitle: "Fast Checkout POS",
    badgeSubtitle: "Real-time Order Sync",
  },
  {
    id: "franchise",
    name: "Franchise",
    tagline: "SCALE & EXPAND OUTLETS",
    headlinePrefix: "Scale your outlets with ",
    headlineHighlight: "complete clarity.",
    headlineSuffix: "",
    description:
      "Empower branch managers, analyze store performance, and drive collective growth.",
    imageSrc: "/images/Franchise_Slider.jpg",
    roleTitle: "Franchise & Branch Management",
    roleDescription:
      "Oversee multi-branch sales, outlet inventory, staff shifts, and franchise reporting.",
    destinationUrl: process.env.NEXT_PUBLIC_FRANCHISE,
    buttonText: "Continue to Franchise",
    badgeIcon: "bi-diagram-3-fill",
    badgeTitle: "Multi-Outlet Cloud",
    badgeSubtitle: "Live Inventory & Sales",
  },
  {
    id: "admin",
    name: "Admin",
    tagline: "UNIFIED RESTAURANT CONTROL",
    headlinePrefix: "Empower your operations with ",
    headlineHighlight: "enterprise insights.",
    headlineSuffix: "",
    description:
      "Unified control across all menus, users, business revenue, and system settings.",
    imageSrc: "/images/Admin_Slider.jpg",
    roleTitle: "Super Admin Workspace",
    roleDescription:
      "Enterprise dashboard for owners and administrators. Manage users, menus, and reports.",
    destinationUrl: process.env.NEXT_PUBLIC_ADMIN,
    buttonText: "Continue to Admin",
    badgeIcon: "bi-shield-check",
    badgeTitle: "Enterprise Super Admin",
    badgeSubtitle: "Full Menu & RBAC Control",
  },
];

function RoleIcon({ id, className = "w-5 h-5" }: { id: RoleId; className?: string }) {
  if (id === "pos") {
    // Desktop POS Monitor
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="2" y="3" width="20" height="14" rx="2.5" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  if (id === "franchise") {
    // Kitchen / Chef's Hat matching reference screenshot
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M6 13.8A4 4 0 0 1 7.4 6a5.1 5.1 0 0 1 1.1-1.5 5 5 0 0 1 7 0A5.1 5.1 0 0 1 16.6 6 4 4 0 0 1 18 13.8V20H6Z" />
        <line x1="6" y1="16.5" x2="18" y2="16.5" />
      </svg>
    );
  }

  // Admin / Tablet device matching reference screenshot
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2.5" />
      <circle cx="12" cy="18" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function LoginPortalView() {
  const [selectedRole, setSelectedRole] = useState<RoleId>("pos");
  const [isPaused, setIsPaused] = useState(false);

  const activeIndex = ROLES.findIndex((r) => r.id === selectedRole);
  const activeRole = ROLES[activeIndex] || ROLES[0];

  // Auto-slide every 7 seconds if not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelectedRole((prev) => {
        const currIdx = ROLES.findIndex((r) => r.id === prev);
        const nextIdx = (currIdx + 1) % ROLES.length;
        return ROLES[nextIdx].id;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleRoleSelect = (roleId: RoleId) => {
    setSelectedRole(roleId);
    setIsPaused(true);
  };

  const handleContinue = () => {
    const targetUrl =
      (activeRole.id === "pos"
        ? process.env.NEXT_PUBLIC_POS
        : activeRole.id === "franchise"
        ? process.env.NEXT_PUBLIC_FRANCHISE
        : process.env.NEXT_PUBLIC_ADMIN) || activeRole.destinationUrl;

    console.log("Redirect URL:", targetUrl);

    if (targetUrl) {
      window.location.href = targetUrl;
    } else {
      console.log(`Destination URL not set for role: ${activeRole.id}`);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#FAF8F5] text-[#111827] selection:bg-[#FF710D]/20 selection:text-[#FF710D] overflow-hidden select-none">
      {/* ============================================================== */}
      {/* LEFT: SLIDER HERO SIDE (FULL SCREEN COVER WITH CINEMATIC ZOOM) */}
      {/* ============================================================== */}
      <div
        className="relative w-full lg:w-[48%] xl:w-[50%] h-[320px] sm:h-[360px] lg:h-full shrink-0 overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-8 xl:p-10 select-none bg-[#0B1726]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Animated Background Images with Seamless Crossfade & No Flash */}
        {ROLES.map((role, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={role.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={role.imageSrc}
                alt={role.headlineHighlight}
                fill
                priority
                quality={90}
                className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          );
        })}

        {/* Gradient Dark Overlays for Readability & Seamless Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/95 via-black/45 to-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726]/60 via-transparent to-black/35 z-10 pointer-events-none" />

        {/* Top Header: Logo & Role Status Badge (Aligned horizontally with right panel) */}
        <div className="relative z-20 h-11 flex items-center justify-between gap-3">
          <Link
            href="/"
            title="Eatery Cloud Home"
            className="group h-11 flex items-center px-4 bg-white/95 hover:bg-white rounded-xl shadow-md border border-white/40 backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
          >
            <Image
              src="/images/eatery-logo.png"
              alt="Eatery Cloud"
              width={814}
              height={179}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Role Status Badge */}
          <div
            key={`badge-${activeRole.id}`}
            className="h-11 flex items-center gap-3 px-3.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-md text-white select-none transition-all duration-300"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FF710D]/25 border border-[#FF710D]/50 flex items-center justify-center text-[#FF710D] text-sm shadow-sm shrink-0">
              <i className={`bi ${activeRole.badgeIcon}`} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-300 tracking-wider uppercase leading-none">
                {activeRole.badgeTitle}
              </div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5 mt-1 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse shrink-0" />
                <span>{activeRole.badgeSubtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Dynamic Content with Staggered Entrance Animations & Shimmer */}
        <div key={activeRole.id} className="relative z-20 max-w-lg mb-4 lg:mb-8">
          {/* Overline Tagline with Entrance Reveal */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-3.5 shadow-md animate-text-reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#FF9242] uppercase">
              {activeRole.tagline}
            </span>
          </div>

          {/* Main Headline with Staggered Word Reveal & Shimmer Glow */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.14] tracking-tight drop-shadow-md">
            <span className="block animate-text-reveal-delay-1">{activeRole.headlinePrefix}</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF710D] via-[#FFA85C] to-[#FF710D] animate-shimmer-brand animate-text-reveal-delay-2 drop-shadow-sm">
              {activeRole.headlineHighlight}
            </span>
          </h2>
        </div>

        {/* Bottom Slide Indicators with Role Icons and Dotted Connectors */}
        <div className="relative z-20 w-full flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 sm:gap-3">
            {ROLES.map((role, idx) => {
              const isActive = idx === activeIndex;
              return (
                <React.Fragment key={role.id}>
                  <button
                    type="button"
                    onClick={() => handleRoleSelect(role.id)}
                    aria-label={`Switch to ${role.name} slider`}
                    className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white bg-white/20 ring-1 ring-[#FF710D] shadow-md backdrop-blur-md scale-105"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <RoleIcon id={role.id} className={`w-4 h-4 ${isActive ? "text-[#FF710D]" : "text-gray-400 group-hover:text-white"}`} />
                    <span className="text-xs font-semibold">{role.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF710D] rounded-full" />
                    )}
                  </button>

                  {idx < ROLES.length - 1 && (
                    <div className="relative w-7 sm:w-12 h-3.5 flex items-center justify-center select-none">
                      {/* Animated Dashed Connector Line */}
                      <svg className="w-full h-2 overflow-visible" viewBox="0 0 44 4">
                        {/* Background track */}
                        <line
                          x1="0"
                          y1="2"
                          x2="44"
                          y2="2"
                          stroke="rgba(255, 255, 255, 0.15)"
                          strokeWidth="2"
                          strokeDasharray="4 3"
                        />
                        {/* Glowing flowing line */}
                        <line
                          x1="0"
                          y1="2"
                          x2="44"
                          y2="2"
                          stroke={idx < activeIndex ? "#FF710D" : idx === activeIndex ? "#FFA35B" : "rgba(255, 255, 255, 0.35)"}
                          strokeWidth="2"
                          strokeDasharray="4 3"
                          strokeLinecap="round"
                          className={idx <= activeIndex ? "animate-dash-flow" : "animate-dash-flow-slow"}
                          style={{
                            filter: idx <= activeIndex ? "drop-shadow(0 0 3px rgba(255, 113, 13, 0.8))" : undefined,
                          }}
                        />
                      </svg>

                      {/* Moving Energy Photon Pulse on Active Connector */}
                      {idx === activeIndex && (
                        <span className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF710D] shadow-[0_0_8px_#FF710D,0_0_2px_#FFF] animate-travel-dot pointer-events-none" />
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Auto-Slide Progress Bar */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
            <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                key={`${selectedRole}-${isPaused}`}
                className={`h-full bg-[#FF710D] rounded-full ${
                  isPaused ? "w-0" : "w-full transition-all duration-[7000ms] ease-linear"
                }`}
                style={{ width: isPaused ? "100%" : undefined }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* RIGHT: LOGIN SELECTION FORM (ONE SCREEN FIT, NO SCROLL)        */}
      {/* ============================================================== */}
      <div className="flex-1 h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 p-6 sm:p-8 lg:p-8 xl:p-10 bg-[#FAF8F5] relative overflow-hidden">
        {/* Subtle decorative ambient glow at top right */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF710D]/10 via-transparent to-transparent pointer-events-none rounded-bl-full blur-2xl" />

        {/* Top Navigation: Breadcrumb path & Security badge (Aligned at same level as Logo) */}
        <div className="shrink-0 h-11 flex items-center justify-between relative z-10 gap-3">
          <nav aria-label="Breadcrumb">
            <ol className="h-11 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 rounded-xl bg-white/90 hover:bg-white border border-[#E7DFD5] hover:border-[#FF710D]/30 shadow-xs text-xs sm:text-sm font-medium transition-all duration-200">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  title="Back to Home"
                  className="text-neutral-600 hover:text-[#FF710D] transition-colors flex items-center gap-1.5"
                >
                  <i className="bi bi-house-door text-xs text-neutral-400" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-neutral-300 select-none flex items-center" aria-hidden="true">
                <i className="bi bi-chevron-right text-[10px]" />
              </li>
              <li className="inline-flex items-center text-[#FF710D] font-bold" aria-current="page">
                Login
              </li>
            </ol>
          </nav>

          <div className="h-11 inline-flex items-center gap-2 px-3.5 rounded-xl bg-white/90 border border-[#E7DFD5] text-xs font-semibold text-[#102B46] shadow-xs">
            <i className="bi bi-shield-check text-[#FF710D] text-sm" />
            <span className="hidden sm:inline">100% Safe & Secure</span>
          </div>
        </div>

        {/* Main Content Form Card */}
        <div className="max-w-md w-full mx-auto my-auto py-2 shrink-0 relative z-10">
          {/* Welcome Tag */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#FF710D] rounded-xs animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF710D]">
              WELCOME TO EATERY CLOUD
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-1.5">
            Your shift.
            <br />
            Your workspace.
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-500 mb-4 leading-relaxed">
            Choose your role and we&apos;ll take you to the right login page.
          </p>

          {/* Interactive Segmented Switcher */}
          <div className="p-1.5 bg-neutral-100/90 rounded-2xl border border-[#E7DFD5] flex items-center gap-1 mb-3.5 shadow-inner">
            {ROLES.map((role) => {
              const isSelected = role.id === selectedRole;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => handleRoleSelect(role.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white text-neutral-900 shadow-sm border border-[#E7DFD5]/80 ring-1 ring-[#FF710D]/30 scale-[1.02]"
                      : "text-neutral-500 hover:text-neutral-800 hover:bg-white/60"
                  }`}
                >
                  <RoleIcon
                    id={role.id}
                    className={`w-4 h-4 transition-colors ${isSelected ? "text-[#FF710D]" : "text-neutral-400"}`}
                  />
                  <span>{role.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Role Detailed Card with smooth keyframe dissolve */}
          <div
            key={activeRole.id}
            className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white/95 border border-[#ECE2D8] rounded-2xl shadow-xs mb-4 animate-slide-fade"
          >
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#FF710D] shadow-xs">
              <RoleIcon id={activeRole.id} className="w-5 h-5 text-[#FF710D]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 mb-0.5 truncate">
                {activeRole.roleTitle}
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug line-clamp-2">
                {activeRole.roleDescription}
              </p>
            </div>
          </div>

          {/* Main Action Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="w-full flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#FF710D] to-[#FF852E] hover:from-[#EA6200] hover:to-[#FF710D] active:scale-[0.99] text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-[#FF710D]/25 hover:shadow-xl hover:shadow-[#FF710D]/35 transition-all duration-200 group cursor-pointer"
          >
            <span className="font-semibold">{activeRole.buttonText}</span>
            <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1.5" />
          </button>

          {/* Security Notice */}
          <div className="flex items-center justify-center gap-1.5 pt-2.5 text-[11px] text-neutral-500 text-center">
            <i className="bi bi-lock-fill text-neutral-400 text-xs" />
            <span>
              Sign in securely on your destination page. No passwords collected here.
            </span>
          </div>
        </div>

        {/* Bottom Help Link */}
        <div className="shrink-0 pt-2 text-center text-xs text-neutral-500 relative z-10">
          <span>Need a hand? </span>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="font-semibold text-neutral-700 hover:text-[#FF710D] underline decoration-neutral-300 hover:decoration-[#FF710D] inline-flex items-center gap-1 transition-colors"
          >
            <span>Talk to us</span>
            <i className="bi bi-box-arrow-up-right text-[10px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
