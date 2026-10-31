import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductSynergySection } from "@/components/products/ProductSynergySection";
import { InventoryHero } from "@/features/inventory/components/InventoryHero";
import { InventoryShowcase } from "@/features/inventory/components/InventoryShowcase";

export const metadata: Metadata = {
  title: "Restaurant Inventory Management — Eatery Cloud",
  description:
    "Real-time restaurant and warehouse inventory software. Automated POS recipe consumption, live stock levels, and audit reconciliation across central and franchise locations.",
};

export default function InventoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7EE] text-[#102B46] selection:bg-[#FF710D] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Back-of-House Hero Section with Breadcrumb Path & Live Auto-Deduction Engine */}
        <InventoryHero />

        {/* 3. Core Modules Showcase with Real Screenshots */}
        <InventoryShowcase />

        {/* 4. FOH vs BOH Synergy & Comparison */}
        <ProductSynergySection currentModule="inventory" />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
