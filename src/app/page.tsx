import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/home/components/HeroSection";
import { FeaturesSection } from "@/features/home/components/FeaturesSection";
import { HowItWorksSection } from "@/features/home/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/features/home/components/WhyChooseUsSection";
import { InvoiceFeatureSection } from "@/features/home/components/InvoiceFeatureSection";
import { TestimonialsSection } from "@/features/home/components/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Eatery Cloud — Restaurant Management SaaS Platform",
  description:
    "Powerful, easy-to-use software to manage your orders, kitchen, inventory, staff and multi-location franchises — all in one place.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7EE] text-[#102B46] selection:bg-[#FF710D] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with Restaurant POS Workflow */}
        <HeroSection />

        {/* 3. Key Features Section */}
        <FeaturesSection />

        {/* 4. How It Works (3 Simple Steps) */}
        <HowItWorksSection />

        {/* 5. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 6. Smart Invoicing & GST Billing Feature Section */}
        <InvoiceFeatureSection />

        {/* 7. What Our Clients Say (Testimonials) */}
        <TestimonialsSection />
      </main>

      {/* 8. Full-width Dark Navy Footer */}
      <Footer />
    </div>
  );
}

