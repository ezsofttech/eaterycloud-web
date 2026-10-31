import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/features/contact/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Eatery Cloud | Contact Information & Support",
  description:
    "Have questions or need assistance? Reach out to Eatery Cloud for restaurant management software inquiries, live demos, pricing, and 24/7 technical support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7EE] text-[#102B46] selection:bg-[#FF710D] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Contact Section */}
        <ContactSection />
      </main>

      {/* 3. Dark Navy Footer */}
      <Footer />
    </div>
  );
}

