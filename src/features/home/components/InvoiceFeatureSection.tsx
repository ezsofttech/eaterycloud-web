import React from "react";
import Link from "next/link";

interface InvoiceFeatureItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const INVOICE_FEATURES: InvoiceFeatureItem[] = [
  {
    icon: "bi-receipt-cutoff",
    title: "GST-Compliant Smart Invoicing",
    description:
      "Automated CGST & SGST calculations with customized tax slabs, HSN/SAC code mapping, and single-click GSTR reports.",
    tag: "100% Tax Compliant",
  },
  {
    icon: "bi-printer-fill",
    title: "Thermal Print & WhatsApp E-Bills",
    description:
      "Lightning-fast ESC/POS thermal printing (58mm / 80mm) plus paperless digital receipts sent directly via WhatsApp and SMS.",
    tag: "Zero Paper Waste",
  },
  {
    icon: "bi-pie-chart-fill",
    title: "Split Billing & Custom Discounts",
    description:
      "Split checks equally, by table seat, or per individual item in seconds. Apply coupon codes, happy hour pricing, and manager discounts.",
    tag: "Fast Table Turnover",
  },
  {
    icon: "bi-qr-code-scan",
    title: "Dynamic UPI QR on Receipts",
    description:
      "Print order-specific dynamic UPI QR codes right on the bill. Customers scan and pay instantly with automated POS reconciliation.",
    tag: "Instant Settlement",
  },
];

export function InvoiceFeatureSection() {
  return (
    <section id="invoicing" className="py-20 lg:py-24 bg-[#FFF7EE] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF710D]/5 pointer-events-none blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FF710D]/5 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FCD8BE] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF710D]">
              SMART BILLING & INVOICING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B46] tracking-tight leading-[1.18] mb-4">
            Faster Checkouts.{" "}
            <span className="text-[#FF710D]">Flawless Invoicing.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Say goodbye to counter bottlenecks. Eatery Cloud handles automated GST compliance, dynamic UPI QR payments, split checks, and instant thermal printing in milliseconds.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INVOICE_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E4D8] hover:border-[#FF710D]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D]">
                        <i className={`bi ${item.icon} text-lg`} />
                      </div>
                      <span className="text-[10px] font-bold text-[#FF710D] bg-[#FFF0E2] px-2.5 py-0.5 rounded-full border border-[#FCD8BE]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#102B46] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar below features */}
            <div className="p-4 rounded-2xl bg-white/80 border border-[#F0E4D8] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#102B46]">
              <div className="flex items-center gap-2">
                <i className="bi bi-shield-check text-[#FF710D] text-base" />
                <span>GST & E-Invoicing Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-stopwatch-fill text-[#FF710D] text-base" />
                <span>&lt; 3 Sec Fast Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-wallet2 text-[#FF710D] text-base" />
                <span>Multi-Payment Reconciled</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Realistic Invoice Preview Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-[#F0E4D8] p-6 relative">
              {/* Receipt Top Header */}
              <div className="text-center pb-4 border-b border-dashed border-neutral-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFF4EA] text-[#FF710D] font-black text-sm mb-2">
                  EC
                </div>
                <h4 className="text-base font-black text-[#102B46] tracking-tight">
                  EATERY CLOUD BISTRO
                </h4>
                <p className="text-[11px] text-neutral-500 font-mono">
                  GSTIN: 07AAECE8492F1Z5
                </p>
                <p className="text-[10px] text-neutral-400 mt-0.5">
                  Connaught Place, New Delhi • Ph: +91 98765 43210
                </p>
              </div>

              {/* Order Metadata */}
              <div className="py-3 border-b border-dashed border-neutral-300 flex justify-between text-[11px] font-mono text-neutral-600">
                <div>
                  <p><span className="text-neutral-400">Bill No:</span> #EC-8492</p>
                  <p><span className="text-neutral-400">Table:</span> T-04 (Dine-in)</p>
                </div>
                <div className="text-right">
                  <p><span className="text-neutral-400">Date:</span> Today, 08:45 PM</p>
                  <p><span className="text-neutral-400">Server:</span> Alex M.</p>
                </div>
              </div>

              {/* Itemized Table */}
              <div className="py-3 border-b border-dashed border-neutral-300 space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-neutral-800">Margherita Thin Crust</p>
                    <p className="text-[10px] text-neutral-400">1 × ₹349.00</p>
                  </div>
                  <span className="font-bold text-neutral-900 font-mono">₹349.00</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-neutral-800">Creamy Alfredo Pasta</p>
                    <p className="text-[10px] text-neutral-400">1 × ₹289.00</p>
                  </div>
                  <span className="font-bold text-neutral-900 font-mono">₹289.00</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-neutral-800">Fresh Mint Mojito</p>
                    <p className="text-[10px] text-neutral-400">2 × ₹99.00</p>
                  </div>
                  <span className="font-bold text-neutral-900 font-mono">₹198.00</span>
                </div>
              </div>

              {/* Tax & Total Calculation */}
              <div className="py-3 border-b border-dashed border-neutral-300 space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-mono">₹836.00</span>
                </div>
                <div className="flex justify-between text-neutral-500 text-[11px]">
                  <span>CGST (2.5%)</span>
                  <span className="font-mono">₹20.90</span>
                </div>
                <div className="flex justify-between text-neutral-500 text-[11px]">
                  <span>SGST (2.5%)</span>
                  <span className="font-mono">₹20.90</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-neutral-200 text-sm font-black text-[#102B46]">
                  <span>Grand Total</span>
                  <span className="text-base text-[#FF710D] font-mono">₹877.80</span>
                </div>
              </div>

              {/* Payment & Status Pill */}
              <div className="pt-3 pb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <i className="bi bi-check-circle-fill text-[11px]" />
                  <span>PAID via UPI</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Txn: 9382103847</span>
              </div>

              {/* Receipt Actions */}
              <div className="pt-3 mt-2 border-t border-neutral-100 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#FFF4EA] hover:bg-[#FFE8D5] text-[#FF710D] text-xs font-bold transition-colors cursor-pointer"
                >
                  <i className="bi bi-printer text-xs" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <i className="bi bi-whatsapp text-xs" />
                  <span>WhatsApp Bill</span>
                </button>
              </div>

              {/* Decorative Receipt Bottom Jagged Edge */}
              <div className="absolute -bottom-2 left-4 right-4 h-2 bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

