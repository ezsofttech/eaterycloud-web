"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-[#102B46] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF710D] flex items-center justify-center text-white">
              <i className="bi bi-play-fill text-sm ml-0.5"></i>
            </div>
            <div>
              <h3 id="modal-title" className="font-bold text-lg text-white">
                Eatery Cloud — Interactive Platform Overview
              </h3>
              <p className="text-xs text-gray-400">
                Full Walkthrough: POS, Kitchen Display & Multi-outlet Management
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D] flex items-center justify-center"
            aria-label="Close modal"
          >
            <i className="bi bi-x-lg text-base"></i>
          </button>
        </div>

        <div className="relative aspect-video w-full bg-[#0B1E32] flex items-center justify-center">
          <div className="text-center px-6 max-w-md">
            <div className="w-20 h-20 rounded-full bg-[#FF710D]/20 border-2 border-[#FF710D] flex items-center justify-center mx-auto mb-4 text-[#FF710D] shadow-lg shadow-[#FF710D]/30 animate-pulse">
              <i className="bi bi-play-fill text-4xl ml-1"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Live Demo Tour</h4>
            <p className="text-sm text-gray-300 mb-6">
              See how orders flow seamlessly from the customer touchscreen POS to the back-of-house kitchen display in real time.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md transition-colors"
              >
                <span>Explore Portal Logins</span>
                <i className="bi bi-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-[#0C2034] flex flex-wrap items-center justify-between text-xs text-gray-400">
          <span>Enterprise Cloud Architecture</span>
          <span>Zero Hardware Lock-in • 99.99% Uptime</span>
        </div>
      </div>
    </div>
  );
}

