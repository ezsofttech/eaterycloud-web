"use client";

import React, { useState } from "react";
import { printInvoice } from "@/utils/print";
import { WhatsAppBillModal } from "./WhatsAppBillModal";

/**
 * =========================================================================
 * FUTURE CONFIGURATION:
 * Simply change this URL or file path to update the invoice across the page.
 * The layout automatically adapts to any new dimensions or aspect ratio.
 * =========================================================================
 */
export const INVOICE_IMAGE_URL = "/images/thermal_invoice.png";

interface InvoiceFeatureItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const INVOICE_FEATURES: InvoiceFeatureItem[] = [
  {
    icon: "bi-receipt-cutoff",
    title: "Itemized GST Breakdown",
    description:
      "Automated split into CGST (2.5%) & SGST (2.5%) with taxable values and single-click GSTR reports.",
    tag: "100% Tax Compliant",
  },
  {
    icon: "bi-qr-code-scan",
    title: "Dynamic Scan-to-Pay QR",
    description:
      "Order-specific UPI QR printed on the bill for lightning-fast table payment and instant feedback.",
    tag: "Instant UPI Settlement",
  },
  {
    icon: "bi-printer-fill",
    title: "High-Speed ESC/POS Printing",
    description:
      "Lightning-fast output for standard 80mm & 58mm thermal rolls with zero driver delay and clean cuts.",
    tag: "< 2s Print Speed",
  },
  {
    icon: "bi-person-badge-fill",
    title: "Staff & Counter Attribution",
    description:
      "Tracks Order Code (POS-001552), Waiter ID, Cashier ID, and customer name for seamless shifts.",
    tag: "Auditable Shifts",
  },
];

export function InvoiceFeatureSection() {
  const [invoiceUrl] = useState<string>(INVOICE_IMAGE_URL);
  const [notification, setNotification] = useState<string | null>(null);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);

  const triggerToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  const handlePrint = async () => {
    if (isPrinting) return;
    setIsPrinting(true);
    triggerToast("Opening ESC/POS print preview for 80mm roll...");

    try {
      await printInvoice(invoiceUrl, {
        title: "POS-001552 - Tax Invoice (ESC/POS 80mm)",
        rollWidth: "80mm",
      });
      triggerToast("Sent print job to 80mm Thermal Printer (POS-001552)");
    } catch (err) {
      console.error("Print error:", err);
      triggerToast("Unable to open print preview. Please check printer settings.");
    } finally {
      setIsPrinting(false);
    }
  };

  const handleWhatsApp = () => {
    setIsWhatsAppOpen(true);
  };

  const handleWhatsAppSuccess = (phone: string) => {
    triggerToast(`E-Invoice sample dispatched via WhatsApp to +${phone}`);
  };

  return (
    <section
      id="invoicing"
      className="py-8 lg:py-12 bg-[#FFF7EE] relative overflow-hidden flex items-center min-h-[calc(100vh-80px)]"
    >
      {/* Background Subtle Gradient Rings */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#FF710D]/5 pointer-events-none blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FF710D]/5 pointer-events-none blur-3xl" />

      {/* Floating Action Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102B46] text-white text-xs font-semibold shadow-2xl border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{notification}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Compact Section Heading (Optimized for One-Screen Fit) */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FFF0E2] border border-[#FCD8BE] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF710D]">
              THERMAL POS BILLING
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-1.5">
            Actual POS Thermal Invoice.{" "}
            <span className="text-[#FF710D]">100% GST Compliant.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Our actual production POS invoice output: automated 5% GST breakdown, dynamic UPI scan-to-pay QR, and complete audit tracking on standard thermal rolls.
          </p>
        </div>

        {/* 2-Column Showcase: Features on Left, Exact Thermal Roll Picture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: 4 Feature Highlights & Quick Action */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INVOICE_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#F0E4D8] hover:border-[#FF710D]/40 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D]">
                      <i className={`bi ${item.icon} text-sm`} />
                    </div>
                    <span className="text-[9px] font-bold text-[#FF710D] bg-[#FFF0E2] px-2 py-0.5 rounded-full border border-[#FCD8BE]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-[#102B46] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Specifications Bar */}
            <div className="p-3.5 rounded-xl bg-white/90 border border-[#F0E4D8] flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold text-[#102B46]">
              <div className="flex items-center gap-1.5">
                <i className="bi bi-shield-check text-[#FF710D] text-sm" />
                <span>GST Section 9(5) Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="bi bi-printer text-[#FF710D] text-sm" />
                <span>80mm & 58mm Roll</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="bi bi-lightning-charge text-[#FF710D] text-sm" />
                <span>&lt; 1.8s Fast Print</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={handlePrint}
                disabled={isPrinting}
                aria-label="Print sample ESC/POS thermal invoice receipt"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#FF710D] hover:bg-[#E65E00] disabled:opacity-75 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <i className={`bi ${isPrinting ? "bi-arrow-repeat animate-spin" : "bi-printer"} text-xs`} />
                <span>{isPrinting ? "Preparing..." : "Print Sample (ESC/POS)"}</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-all cursor-pointer"
              >
                <i className="bi bi-whatsapp text-xs" />
                <span>WhatsApp Bill</span>
              </button>
            </div>
          </div>

          {/* Right Column: Physical Thermal Printer & Exact Picture Roll */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Live Indicator Bar */}
            <div className="w-full max-w-[310px] flex items-center justify-between mb-1.5 px-1">
              <span className="text-[11px] font-bold text-[#102B46] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D]" />
                <span>Actual Invoice:</span>
                <span className="font-mono text-[#FF710D]">INV-002208</span>
              </span>

              <span className="text-[10px] font-mono text-neutral-400">
                POS-001552
              </span>
            </div>

            {/* =========================================================================
                THERMAL PRINTER DISPENSER CASING (AUTOMATICALLY ADJUSTS TO ANY IMAGE)
                ========================================================================= */}
            <div className="w-full max-w-[310px] relative">
              {/* Printer Hardware Ejection Bezel (Orange-Grey Minimalist Bar) */}
              <div className="h-2.5 bg-gradient-to-r from-neutral-300 via-orange-100 to-neutral-300 rounded-t-lg mx-auto w-[88%] border-t-2 border-[#FF710D] shadow-xs flex items-center justify-center">
                <div className="w-10 h-0.5 rounded-full bg-neutral-400/80" />
              </div>

              {/* Thermal Paper Container (Fluid & Self-Adapting to any image dimensions) */}
              <div className="relative bg-[#FFFDFB] border-x border-t border-neutral-300 shadow-[0_16px_36px_rgba(16,43,70,0.14)] p-2.5 transition-all duration-300">
                {/* Responsive Image that Auto-Adjusts on Any Size/Aspect-Ratio Change */}
                <div className="relative w-full flex items-center justify-center overflow-hidden bg-white rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={invoiceUrl}
                    alt="Eatery Cloud Actual POS Invoice Receipt"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                    className="w-full max-h-[440px] sm:max-h-[470px] h-auto object-contain select-none"
                  />
                </div>

                {/* Realistic Zigzag Paper Tear Bottom Edge */}
                <div className="w-full h-3 overflow-hidden bg-transparent leading-none -mb-2.5 mt-1">
                  <svg
                    className="w-full h-3 text-[#FFF7EE] fill-current"
                    viewBox="0 0 310 12"
                    preserveAspectRatio="none"
                  >
                    <polygon points="0,0 10,12 20,0 30,12 40,0 50,12 60,0 70,12 80,0 90,12 100,0 110,12 120,0 130,12 140,0 150,12 160,0 170,12 180,0 190,12 200,0 210,12 220,0 230,12 240,0 250,12 260,0 270,12 280,0 290,12 300,0 310,12 310,12 0,12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Bill Dispatch Modal */}
      {isWhatsAppOpen && (
        <WhatsAppBillModal
          isOpen={isWhatsAppOpen}
          onClose={() => setIsWhatsAppOpen(false)}
          onSuccess={handleWhatsAppSuccess}
          invoiceNumber="INV-002208"
          orderCode="POS-001552"
          totalAmount="Rs. 1,248.00"
          invoiceImageUrl={invoiceUrl}
        />
      )}
    </section>
  );
}
