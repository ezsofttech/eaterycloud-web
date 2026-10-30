import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/features/about/components/AboutHeroSection";
import { PanelsArchitectureSection } from "@/features/about/components/PanelsArchitectureSection";
import { DeviceWorkflowSection } from "@/features/about/components/DeviceWorkflowSection";
import { GrowthArchitectureSection } from "@/features/about/components/GrowthArchitectureSection";

export const metadata: Metadata = {
  title: "About Us — Eatery Cloud | One Platform. Every Part of Your Restaurant.",
  description:
    "Eatery Cloud brings restaurant management, franchise coordination, POS terminals, kiosks, and kitchen order ticket (KOT) workflows into one connected digital environment.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7EE] text-[#102B46] selection:bg-[#FF710D] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section: Overview, Core Narrative & Key Pillars */}
        <AboutHeroSection />

        {/* 3. System Architecture: Admin, Franchise & POS Panels */}
        <PanelsArchitectureSection />

        {/* 4. Connected Hardware Workflow: POS Terminal, Kiosk & KOT */}
        <DeviceWorkflowSection />

        {/* 5. Scalability: Growing Businesses */}
        <GrowthArchitectureSection />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

