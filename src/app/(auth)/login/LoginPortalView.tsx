"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
  destinationUrl: string;
  buttonText: string;
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
    destinationUrl: "https://kiosk.eaterycloud.com/login",
    buttonText: "Continue to POS",
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
    destinationUrl: "http://admin.eaterycloud.com/auth/login",
    buttonText: "Continue to Franchise",
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
    destinationUrl: "https://superadmin.eaterycloud.com/auth/login",
    buttonText: "Continue to Admin",
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRoleSelect = (roleId: RoleId) => {
    setSelectedRole(roleId);
    setDropdownOpen(false);
    setIsPaused(true);
  };

  const handleContinue = () => {
    window.location.href = activeRole.destinationUrl;
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#FAF8F5] text-[#111827] selection:bg-[#FF710D]/20 selection:text-[#FF710D] overflow-hidden">
      {/* ============================================================== */}
      {/* LEFT: SLIDER HERO SIDE                                         */}
      {/* ============================================================== */}
      <div
        className="relative w-full lg:w-[48%] xl:w-[50%] h-[380px] lg:h-full shrink-0 overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images with Crossfade */}
        {ROLES.map((role, idx) => (
          <div
            key={role.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105"
            } transform transition-transform duration-[7000ms] ease-out`}
          >
            <Image
              src={role.imageSrc}
              alt={role.headlineHighlight}
              fill
              priority={idx === 0}
              quality={95}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient Dark Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
          </div>
        ))}

        {/* Top Floating Logo Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <Link
            href="/"
            title="Eatery Cloud Home"
            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/95 hover:bg-white rounded-2xl shadow-xl border border-white/40 backdrop-blur-md transition-all duration-200 hover:scale-105"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="/images/logo_orange.png"
                alt="Eatery Cloud"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center / Lower Content */}
        <div className="relative z-10 max-w-lg mb-4 lg:mb-8">
          {/* Overline Tagline */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#FF9242] uppercase">
              {activeRole.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.12] tracking-tight mb-3 drop-shadow-sm">
            <span>{activeRole.headlinePrefix}</span>
            <span className="text-[#FF710D]">{activeRole.headlineHighlight}</span>
            {activeRole.headlineSuffix && <span>{activeRole.headlineSuffix}</span>}
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-200/90 leading-relaxed max-w-md drop-shadow">
            {activeRole.description}
          </p>
        </div>

        {/* Bottom Slide Indicators with Role Icons and Dotted Connectors */}
        <div className="relative z-10 w-full flex items-center justify-center gap-3 pt-1 pb-1">
          {ROLES.map((role, idx) => {
            const isActive = idx === activeIndex;
            return (
              <React.Fragment key={role.id}>
                {/* Role Icon Button */}
                <button
                  type="button"
                  onClick={() => handleRoleSelect(role.id)}
                  aria-label={`Switch to ${role.name} slider`}
                  className={`group relative p-2 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? "text-[#FF710D] bg-white/15 ring-2 ring-[#FF710D]/80 shadow-md scale-105"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <RoleIcon id={role.id} className="w-5 h-5 transition-transform group-hover:scale-110" />
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF710D] rounded-full" />
                  )}
                </button>

                {/* Dotted Line Connector between items */}
                {idx < ROLES.length - 1 && (
                  <div className="w-10 sm:w-14 border-t-2 border-dotted border-white/30" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* RIGHT: LOGIN SELECTION FORM (NO SCROLL ON SCREEN)              */}
      {/* ============================================================== */}
      <div className="flex-1 h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-8 bg-[#FAF8F5] overflow-y-auto lg:overflow-hidden">
        {/* Top Navigation: pretty bootstrap back icon */}
        <div className="shrink-0">
          <Link
            href="/"
            title="Back to home"
            aria-label="Back to home"
            className="group inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 hover:bg-white border border-[#E7DFD5] hover:border-[#FF710D]/40 text-neutral-600 hover:text-[#FF710D] shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <i className="bi bi-arrow-left text-lg transition-transform group-hover:-translate-x-0.5" />
          </Link>
        </div>

        {/* Main Content Form Card */}
        <div className="max-w-md w-full mx-auto my-auto py-2 shrink-0">
          {/* Welcome Tag */}
          <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#FF710D] rounded-xs" />
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
          <p className="text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-5 leading-relaxed">
            Choose your role and we&apos;ll take you to the right login page.
          </p>

          {/* Role Dropdown Selector */}
          <div className="space-y-3 sm:space-y-3.5">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-neutral-700 tracking-wide mb-1.5">
                I&apos;m logging in to
              </label>

              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#E7DFD5] hover:border-[#FF710D]/60 rounded-xl shadow-xs transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#FF710D]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-neutral-700">
                      <RoleIcon id={activeRole.id} className="w-5 h-5 text-neutral-600" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-900">
                      {activeRole.name}
                    </span>
                  </div>
                  <i
                    className={`bi bi-chevron-down text-xs text-neutral-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-[#FF710D]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Options */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#E7DFD5] py-1.5 z-30 animate-fade-in">
                    {ROLES.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => handleRoleSelect(role.id)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 sm:py-3 text-left transition-colors ${
                          role.id === selectedRole
                            ? "bg-orange-50/70 text-[#FF710D]"
                            : "hover:bg-neutral-50 text-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <RoleIcon
                            id={role.id}
                            className={`w-5 h-5 ${
                              role.id === selectedRole ? "text-[#FF710D]" : "text-neutral-500"
                            }`}
                          />
                          <div>
                            <div className="text-sm font-semibold">{role.name}</div>
                            <div className="text-xs text-neutral-500">{role.roleTitle}</div>
                          </div>
                        </div>
                        {role.id === selectedRole && (
                          <i className="bi bi-check2 text-lg text-[#FF710D]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Role Detailed Card */}
            <div className="flex items-center gap-3.5 p-3 sm:p-3.5 bg-white/80 border border-[#ECE2D8] rounded-xl shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50/90 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#FF710D]">
                <RoleIcon id={activeRole.id} className="w-5 h-5 text-[#FF710D]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-neutral-900 mb-0.5 truncate">
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
              className="w-full flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 bg-[#FF710D] hover:bg-[#EA6200] active:scale-[0.99] text-white rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-150 group cursor-pointer"
            >
              <span className="font-semibold">{activeRole.buttonText}</span>
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
            </button>

            {/* Security Notice */}
            <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-neutral-500 text-center">
              <i className="bi bi-lock-fill text-neutral-400 text-xs" />
              <span>
                Sign in securely on your destination page. No passwords collected here.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Help Link */}
        <div className="shrink-0 pt-2 sm:pt-4 text-center text-xs text-neutral-500">
          <span>Need a hand? </span>
          <a
            href="mailto:support@eaterycloud.com"
            className="font-semibold text-neutral-700 hover:text-[#FF710D] underline decoration-neutral-300 hover:decoration-[#FF710D] inline-flex items-center gap-1"
          >
            <span>Talk to us</span>
            <i className="bi bi-box-arrow-up-right text-[10px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
