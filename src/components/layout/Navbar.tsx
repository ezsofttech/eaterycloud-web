"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { NAV_ITEMS, NavItem } from "@/constants/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Products: true,
  });
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll position & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = [
          "home",
          "about",
          "products",
          "inventory",
          "invoicing",
          "pos-billing",
          "contact",
        ];
        const scrollPosition = window.scrollY + 220;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle hash scrolling on page load/navigation
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [pathname]);

  // Click outside and escape key handling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    if (pathname === "/") {
      if (href === "/" || href === "/#home" || href === "#home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (href.startsWith("/#") || href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace(/^\/?#/, "");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === "/about-us") {
      return pathname === "/about-us" || pathname.startsWith("/about-us");
    }
    if (item.href === "/contact") {
      return pathname === "/contact" || pathname.startsWith("/contact");
    }
    if (
      pathname === "/inventory" ||
      pathname.startsWith("/inventory") ||
      pathname === "/pos-billing" ||
      pathname.startsWith("/pos-billing")
    ) {
      return item.label === "Products";
    }
    if (pathname === "/") {
      if (item.href === "/" && (activeSection === "home" || !activeSection)) {
        return true;
      }
      if (item.label === "Products") {
        return (
          activeSection === "products" ||
          activeSection === "pos-billing" ||
          activeSection === "invoicing" ||
          activeSection === "inventory"
        );
      }
      if (item.href === "/#contact" && activeSection === "contact") {
        return true;
      }
    }
    return false;
  };

  const isSubItemActive = (subHref: string) => {
    if (
      subHref === "/pos-billing" &&
      (pathname === "/pos-billing" || pathname.startsWith("/pos-billing"))
    ) {
      return true;
    }
    if (subHref === "/inventory" && (pathname === "/inventory" || pathname.startsWith("/inventory"))) {
      return true;
    }
    if (pathname === "/") {
      if (
        (subHref === "/#pos-billing" || subHref === "/pos-billing") &&
        (activeSection === "pos-billing" || activeSection === "invoicing")
      ) {
        return true;
      }
      if (
        (subHref === "/#inventory" || subHref === "/inventory") &&
        activeSection === "inventory"
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "shadow-sm border-b border-[#F0E4D8]/80 py-3"
          : "border-b border-[#F0E4D8]/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" href="/" />

        {/* Center Navigation Menu Strip */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isOpen = openDropdown === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                      }
                      className={`relative text-sm font-medium transition-colors py-1 flex items-center gap-1.5 hover:text-[#FF710D] cursor-pointer focus-visible:outline-none ${
                        active ? "text-[#FF710D] font-semibold" : "text-[#102B46]"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <i
                        className={`bi bi-chevron-down text-[10px] transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-[#FF710D]"
                            : "text-[#8899A6] group-hover:text-[#FF710D]"
                        }`}
                      />
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF710D] rounded-full animate-fade-in" />
                      )}
                    </button>
                  </div>

                  {/* Clean, Sharp & Properly Opaque Dropdown Menu (Aligned to left, opening to the right) */}
                  <div
                    className={`absolute top-full left-0 pt-2.5 z-50 min-w-[210px] transition-all duration-200 ${
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto visible"
                        : "opacity-0 -translate-y-2 pointer-events-none invisible"
                    }`}
                  >
                    <div className="relative rounded-xl bg-white/95 backdrop-blur-md border border-[#F0E4D8] shadow-xl shadow-[#102B46]/10 p-1.5 overflow-hidden">
                      {/* Top Razor-Sharp Accent Line */}
                      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF710D]/50 to-transparent" />

                      {/* Menu Items */}
                      <div className="flex flex-col gap-0.5">
                        {item.children!.map((sub) => {
                          const isSubActive = isSubItemActive(sub.href);

                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleNavClick(e, sub.href)}
                              className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-150 ${
                                isSubActive
                                  ? "bg-[#FFF4EA] text-[#FF710D] font-semibold"
                                  : "text-[#102B46] hover:bg-[#FFF7EE] hover:text-[#FF710D]"
                              }`}
                            >
                              {/* Icon Container */}
                              <div
                                className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-150 ${
                                  isSubActive
                                    ? "bg-[#FF710D] text-white border-[#FF710D]"
                                    : "bg-[#FFF4EA] border-[#FDE3CF] text-[#FF710D] group-hover:bg-[#FF710D] group-hover:text-white group-hover:border-[#FF710D]"
                                }`}
                              >
                                <i className={`bi ${sub.icon || "bi-app"} text-sm`} />
                              </div>

                              {/* Label */}
                              <span className="text-sm font-semibold whitespace-nowrap">
                                {sub.label}
                              </span>

                              {/* Subtle arrow on hover */}
                              <i className="bi bi-chevron-right text-xs text-[#FF710D] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium transition-colors py-1 hover:text-[#FF710D] ${
                  active ? "text-[#FF710D] font-semibold" : "text-[#102B46]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF710D] rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Pill Login Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md shadow-[#FF710D]/20 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
          >
            <span>Login</span>
            <i className="bi bi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF710D] text-white text-xs font-semibold shadow-xs"
          >
            <span>Login</span>
            <i className="bi bi-arrow-right text-xs"></i>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#102B46] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <i className="bi bi-x-lg text-lg"></i>
            ) : (
              <i className="bi bi-list text-2xl leading-none"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F0E4D8] px-4 pt-3 pb-6 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = mobileExpanded[item.label] ?? true;

              if (hasChildren) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        active
                          ? "bg-[#FFF4EA] text-[#FF710D] font-semibold"
                          : "text-[#102B46] hover:bg-[#FFF7EE] hover:text-[#FF710D]"
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex-1"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((prev) => ({
                            ...prev,
                            [item.label]: !isExpanded,
                          }))
                        }
                        className="p-1 rounded text-gray-500 hover:text-[#FF710D] transition-colors"
                        aria-label={`Toggle ${item.label} sub-items`}
                      >
                        <i
                          className={`bi bi-chevron-down text-xs transition-transform duration-200 block ${
                            isExpanded ? "rotate-180 text-[#FF710D]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Sub-items (Tree View) */}
                    {isExpanded && (
                      <div className="ml-3 pl-3 border-l-2 border-[#F0E4D8]/80 flex flex-col gap-1 py-1 my-1">
                        {item.children!.map((sub, idx) => {
                          const isLast = idx === item.children!.length - 1;
                          const isSubActive = isSubItemActive(sub.href);

                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleNavClick(e, sub.href)}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                                isSubActive
                                  ? "bg-white/90 text-[#FF710D] font-semibold shadow-xs border border-[#FF710D]/20"
                                  : "text-[#102B46] hover:bg-white/70 hover:text-[#FF710D]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-[#FF710D]/80 font-mono text-xs select-none">
                                  {isLast ? "└─" : "├─"}
                                </span>
                                <i className={`bi ${sub.icon || "bi-dot"} text-sm text-[#FF710D]`} />
                                <span>{sub.label}</span>
                              </div>

                              {sub.badge && (
                                <span className="text-[9px] font-semibold text-[#FF710D] bg-[#FFF0E2]/90 px-1.5 py-0.5 rounded-full border border-[#FCD8BE]/80">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "bg-[#FFF4EA] text-[#FF710D] font-semibold"
                      : "text-[#102B46] hover:bg-[#FFF7EE] hover:text-[#FF710D]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-[#F0E4D8] mt-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md"
              >
                <span>Access Portal Logins</span>
                <i className="bi bi-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
