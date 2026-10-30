"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DemoModal } from "@/components/ui/DemoModal";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  icon: string;
  iconBg: string;
}

export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Live calculation state for Order POS-001552 with clean Bootstrap Icons (No emoji/sticker)
  const [items, setItems] = useState<OrderItem[]>([
    {
      id: "sandwich",
      name: "Bombay Masala Sandwich",
      price: 90,
      qty: 1,
      icon: "bi-layers-fill",
      iconBg: "bg-orange-50 text-[#FF710D] border-orange-200",
    },
    {
      id: "coffee",
      name: "Cold Coffee Shake",
      price: 60,
      qty: 1,
      icon: "bi-cup-straw",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "fries",
      name: "Peri Peri Fries",
      price: 70,
      qty: 1,
      icon: "bi-basket2-fill",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
  ]);

  const [priceFlash, setPriceFlash] = useState(false);

  // Auto-cycle workflow steps and trigger real-time recalculations in slow motion
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 4;

        if (next === 0) {
          setItems([
            { id: "sandwich", name: "Bombay Masala Sandwich", price: 90, qty: 1, icon: "bi-layers-fill", iconBg: "bg-orange-50 text-[#FF710D] border-orange-200" },
            { id: "coffee", name: "Cold Coffee Shake", price: 60, qty: 1, icon: "bi-cup-straw", iconBg: "bg-blue-50 text-blue-600 border-blue-200" },
            { id: "fries", name: "Peri Peri Fries", price: 70, qty: 1, icon: "bi-basket2-fill", iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
          ]);
        } else if (next === 1) {
          setItems((curr) =>
            curr.map((item) =>
              item.id === "sandwich" ? { ...item, qty: 2 } : item
            )
          );
        }

        setPriceFlash(true);
        setTimeout(() => setPriceFlash(false), 700);

        return next;
      });
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  // Authentic Indian Restaurant Billing Calculations (Subtotal, CGST 2.5%, SGST 2.5%, Total)
  const totalItemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cgst = Math.round(subtotal * 0.025 * 100) / 100;
  const sgst = Math.round(subtotal * 0.025 * 100) / 100;
  const totalTax = cgst + sgst;
  const grandTotal = subtotal + totalTax;

  const updateQty = (id: string, delta: number) => {
    setItems((curr) =>
      curr.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, Math.min(9, item.qty + delta));
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
    setPriceFlash(true);
    setTimeout(() => setPriceFlash(false), 700);
  };

  const workflowSteps = [
    {
      title: "New Order",
      desc: "Placed at POS",
      iconClass: "bi-receipt-cutoff",
      animClass: "animate-slide-down-1",
    },
    {
      title: "Kitchen",
      desc: "Receives Instantly",
      iconClass: "bi-fire",
      animClass: "animate-slide-down-2",
    },
    {
      title: "Preparing",
      desc: "Track in Real-time",
      iconClass: "bi-hourglass-split",
      animClass: "animate-slide-down-3",
    },
    {
      title: "Completed",
      desc: "Serve to Customer",
      iconClass: "bi-check2-circle",
      animClass: "animate-slide-down-4",
    },
  ];

  const getOrderStatus = () => {
    switch (activeStep) {
      case 0:
        return { label: "New Order", color: "bg-[#FFF4EA] text-[#FF710D] border-orange-200" };
      case 1:
        return { label: "KOT Printed", color: "bg-[#EBF3FF] text-[#1B66C9] border-blue-200" };
      case 2:
        return { label: "Preparing", color: "bg-[#E6F4EA] text-[#137333] border-green-200" };
      case 3:
        return { label: "Ready / Paid", color: "bg-[#EDF7ED] text-[#2E7D32] border-emerald-300" };
      default:
        return { label: "Preparing", color: "bg-[#E6F4EA] text-[#137333] border-green-200" };
    }
  };

  const currentStatus = getOrderStatus();

  const benefits = [
    {
      title: "Easy to Use Interface",
      icon: <i className="bi bi-ui-checks-grid text-[#FF710D] text-xs"></i>,
    },
    {
      title: "Real-time Operations",
      icon: <i className="bi bi-lightning-charge-fill text-[#FF710D] text-xs"></i>,
    },
    {
      title: "Secure & Reliable",
      icon: <i className="bi bi-shield-lock-fill text-[#FF710D] text-xs"></i>,
    },
    {
      title: "24/7 Support",
      icon: <i className="bi bi-headset text-[#FF710D] text-xs"></i>,
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full bg-[#FFF7EE] overflow-hidden min-h-[640px] lg:min-h-[680px] flex items-center"
    >
      {/* =========================================================================
          1. WIDE RESTAURANT VIDEO BANNER (NO STATIC POSTER: PLAYS DIRECTLY FROM START)
          ========================================================================= */}
      <div className="absolute top-0 right-0 w-full lg:w-[68%] xl:w-[70%] h-full z-0 overflow-hidden bg-black/5">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[35%_center] lg:object-left"
          aria-label="Restaurant POS Terminal Live Video"
        >
          <source
            src="/videos/Woman_using_touchscreen_terminal_903015fb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Minimal soft side transition: video and terminal shine with 100% natural warmth */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FFF7EE] to-transparent pointer-events-none" />

        {/* Mobile veil for readability */}
        <div className="lg:hidden absolute inset-0 bg-[#FFF7EE]/85 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* =========================================================================
          2. HERO CONTENT CONTAINER (COMPACT LEFT TEXT + UNOBSTRUCTED POS VIEW)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-4 xl:col-span-4 max-w-md z-20">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-2.5">
              RESTAURANT SOFTWARE SOLUTION
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#102B46] tracking-tight leading-[1.15] mb-4">
              Streamline Your <br />
              <span className="text-[#FF710D]">Restaurant Operations</span>
            </h1>

            <p className="text-sm text-[#64748B] leading-relaxed mb-7 max-w-sm">
              Powerful, easy-to-use software to manage your orders, kitchen,
              inventory, staff and more — all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href="/login"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-md shadow-[#FF710D]/25 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
              >
                <span>Get Started</span>
                <i className="bi bi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
              </Link>

              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#102B46] border border-[#F0E4D8] text-sm font-semibold shadow-xs transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF710D]"
              >
                <div className="w-5 h-5 rounded-full bg-[#FF710D] text-white flex items-center justify-center">
                  <i className="bi bi-play-fill text-xs ml-0.5"></i>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* 4 Compact Benefits in 2x2 grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-5 border-t border-[#F0E4D8]/80 max-w-sm">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-center gap-2">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#102B46] truncate">
                    {b.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Banner Zone (8 cols): Top Workflow + Unobstructed POS Terminal View + Futuristic Floating Card */}
          <div className="lg:col-span-8 xl:col-span-8 relative min-h-[460px] lg:min-h-[520px] flex flex-col justify-between">
            {/* =========================================================================
                3. TOP WORKFLOW CARDS (FLOATING WITH PRESENTATION SLOW-MOTION CASCADE)
                ========================================================================= */}
            <div className="w-full z-20 pt-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {workflowSteps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isCompleted = idx < activeStep;

                  return (
                    <div
                      key={step.title}
                      onClick={() => setActiveStep(idx)}
                      className={`relative cursor-pointer select-none rounded-xl p-2.5 border transition-all duration-700 flex items-center gap-2 ${step.animClass} ${
                        isActive
                          ? "bg-white/95 backdrop-blur-md border-[#FF710D] shadow-xl scale-105 z-30 animate-workflow-active"
                          : isCompleted
                          ? "bg-white/90 backdrop-blur-xs border-emerald-300 shadow-xs"
                          : "bg-white/85 backdrop-blur-xs border-[#F0E4D8] shadow-xs hover:bg-white"
                      }`}
                    >
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-700 ${
                          isActive
                            ? "bg-[#FF710D] text-white shadow-xs"
                            : isCompleted
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                            : "bg-[#FFF4EA] text-[#FF710D]"
                        }`}
                      >
                        <i className={`bi ${step.iconClass} text-sm`}></i>
                      </div>

                      <div className="min-w-0">
                        <div
                          className={`text-[11px] font-bold truncate transition-colors duration-700 ${
                            isActive ? "text-[#FF710D]" : "text-[#102B46]"
                          }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-[10px] text-[#64748B] truncate">
                          {step.desc}
                        </div>
                      </div>

                      {/* Directional Arrow between steps */}
                      {idx < workflowSteps.length - 1 && (
                        <div
                          className={`hidden sm:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-30 w-4 h-4 rounded-full items-center justify-center text-[10px] transition-colors duration-700 ${
                            idx === activeStep
                              ? "bg-[#FF710D] text-white shadow-xs animate-pulse"
                              : "bg-white text-[#FF710D] border border-[#F0E4D8]"
                          }`}
                        >
                          <i className="bi bi-chevron-right text-[10px]"></i>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =========================================================================
                4. POS TERMINAL CLEAR VIEW (CENTER IS OPEN!)
                   FUTURISTIC GLASSMORPHISM ORDER #1042 CARD WITH SLOW MOTION
                ========================================================================= */}
            <div className="relative w-full flex-1 flex items-start justify-end pt-4 pb-2 pointer-events-none">
              {/* Slow-Motion Presentation Entrance Container */}
              <div className="animate-order-entrance pointer-events-auto">
                {/* Futuristic Glassmorphic Acrylic Card */}
                <div className="w-[225px] sm:w-[235px] backdrop-blur-2xl bg-white/92 rounded-2xl p-3 border border-[#F0E4D8]/90 shadow-[0_16px_36px_rgba(16,43,70,0.12)] animate-card-float z-20">
                  {/* Cyberpunk / Modern SaaS Gradient Header */}
                  <div className="bg-gradient-to-r from-[#FF710D] via-[#FF8528] to-[#FF5500] text-white -mx-3 -mt-3 p-2.5 rounded-t-2xl flex items-center justify-between mb-2 shadow-sm">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_#6ee7b7] animate-pulse shrink-0" />
                      <span className="text-[11px] font-black tracking-wider uppercase truncate">
                        POS-001552
                      </span>
                      <span className="text-[9px] font-mono opacity-80 ml-0.5">
                        {"// TAKEOFF"}
                      </span>
                    </div>
                    <i className="bi bi-arrow-right text-xs"></i>
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-gray-100/80">
                    <span className="text-[10px] font-bold text-[#102B46] tracking-tight">
                      Table 04 Ticket
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold border transition-all duration-700 ${currentStatus.color}`}
                    >
                      {currentStatus.label}
                    </span>
                  </div>

                  {/* Items List with Professional Bootstrap Icons (No emoji/stickers) */}
                  <div className="space-y-1.5 mb-2">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-1.5 py-0.5 hover:bg-white/80 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border shadow-2xs ${item.iconBg}`}>
                            <i className={`bi ${item.icon} text-[11px]`}></i>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-semibold text-[#102B46] leading-tight truncate">
                              {item.name}
                            </div>
                            <div className="text-[8px] font-mono text-[#64748B]">
                              ₹{item.price} each
                            </div>
                          </div>
                        </div>

                        {/* Interactive Qty Controls */}
                        <div className="flex items-center gap-1 shrink-0">
                          <div className="flex items-center border border-gray-200/80 rounded bg-white/90 text-[9px] font-semibold shadow-2xs">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              className="px-1 py-0.5 text-gray-500 hover:text-[#FF710D] hover:bg-orange-50 transition-colors flex items-center justify-center"
                              aria-label={`Decrease ${item.name}`}
                            >
                              <i className="bi bi-dash text-[10px]"></i>
                            </button>
                            <span className="px-1 text-[#102B46] min-w-2 text-center font-mono">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              className="px-1 py-0.5 text-gray-500 hover:text-[#FF710D] hover:bg-orange-50 transition-colors flex items-center justify-center"
                              aria-label={`Increase ${item.name}`}
                            >
                              <i className="bi bi-plus text-[10px]"></i>
                            </button>
                          </div>

                          <span className="text-[10px] font-bold text-[#102B46] w-9 text-right font-mono">
                            ₹{(item.price * item.qty).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Futuristic Live Mathematical Calculation Breakdown */}
                  <div className="pt-1.5 border-t border-gray-100/80 space-y-0.5 text-[9px]">
                    <div className="flex justify-between text-[#64748B]">
                      <span>Item Total ({totalItemCount} items)</span>
                      <span className="font-semibold text-[#102B46] font-mono">
                        ₹{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#64748B]">
                      <span>CGST + SGST (5%)</span>
                      <span className="font-semibold text-[#102B46] font-mono">
                        ₹{totalTax.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-gray-200/80 text-xs font-bold">
                      <span className="text-[#102B46]">Grand Total</span>
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FF710D] to-[#E65E00] font-black text-sm font-mono tracking-tight transition-transform ${
                          priceFlash ? "animate-calc-pop" : ""
                        }`}
                      >
                        ₹{grandTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom area clean & unobstructed matching restaurant hero scene */}
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
