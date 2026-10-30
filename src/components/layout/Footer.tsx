import React from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../ui/Icons";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_FEATURE_LINKS,
  CONTACT_INFO,
} from "@/constants/navigation";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#102B46] text-white pt-16 pb-8 border-t border-[#1C3B5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" href="/" className="mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mb-6">
              Smarter Restaurant Management for a Better Tomorrow.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#FF710D]" />
              <span>Cloud Restaurant SaaS Platform</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF710D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_FEATURE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF710D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
              <li className="flex items-center gap-2.5">
                <i className="bi bi-telephone-fill text-[#FF710D] text-sm shrink-0"></i>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="bi bi-envelope-fill text-[#FF710D] text-sm shrink-0"></i>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="bi bi-geo-alt-fill text-[#FF710D] text-sm shrink-0"></i>
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Follow Us
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Connect with our hospitality technology community.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF710D] flex items-center justify-center text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-sm"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF710D] flex items-center justify-center text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-sm"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF710D] flex items-center justify-center text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-sm"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF710D] flex items-center justify-center text-white transition-all duration-200"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Eatery Cloud. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

