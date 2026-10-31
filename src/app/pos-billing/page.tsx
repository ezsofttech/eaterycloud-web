import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductSynergySection } from "@/components/products/ProductSynergySection";
import { PosHero } from "@/features/pos/components/PosHero";
import { PosShowcase } from "@/features/pos/components/PosShowcase";

export const metadata: Metadata = {
  title: "Restaurant POS & Billing Software — Eatery Cloud",
  description:
    "Lightning-fast touchscreen POS, real-time table management, flexible split payments (UPI, Cash, Cards, Store Credit), and automated GST thermal printing.",
};

export default function PosBillingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7EE] text-[#102B46] selection:bg-[#FF710D] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Front-of-House Hero Section with Breadcrumb Path & Live Settlement Console */}
        <PosHero />

        {/* 3. Core POS & Billing Modules Showcase with Real Screenshots */}
        <PosShowcase />

        {/* 4. FOH vs BOH Synergy & Comparison */}
        <ProductSynergySection currentModule="pos" />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
