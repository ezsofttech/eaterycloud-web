"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { NAV_ITEMS } from "@/constants/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["home", "about", "products", "invoicing", "contact"];
        const scrollPosition = window.scrollY + 200;

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);

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

  const isItemActive = (href: string) => {
    if (href === "/about-us") {
      return pathname.startsWith("/about");
    }
    if (pathname === "/") {
      if (href === "/" && (activeSection === "home" || !activeSection)) {
        return true;
      }
      if (href === "/#products" && activeSection === "products") {
        return true;
      }
      if (href === "/#contact" && activeSection === "contact") {
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

        {/* Center Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.href);

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
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href);
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
