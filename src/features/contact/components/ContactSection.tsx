import React from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";

export function ContactSection() {
  const formattedAddress = [
    CONTACT_INFO.address.city,
    CONTACT_INFO.address.state,
  ]
    .filter(Boolean)
    .join(", ") +
    (CONTACT_INFO.address.pinCode ? ` - ${CONTACT_INFO.address.pinCode}` : "") +
    (CONTACT_INFO.address.country ? `, ${CONTACT_INFO.address.country}` : "");

  return (
    <div className="pt-28 pb-20 lg:pt-32 lg:pb-24">
      {/* Decorative Warm Ambient Glows */}
      <div
        className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF710D]/10 to-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-60 left-10 w-80 h-80 bg-gradient-to-tr from-amber-100/40 to-orange-100/20 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#FFF4EA] border border-[#F0E4D8] text-[#102B46] hover:text-[#FF710D] font-medium transition-colors shadow-2xs group"
          >
            <i className="bi bi-house-door text-xs group-hover:text-[#FF710D]"></i>
            <span>Home</span>
          </Link>
          <i className="bi bi-chevron-right text-[10px] text-[#A0AEC0]"></i>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF4EA] border border-[#FDE3CF] text-xs font-bold text-[#FF710D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF710D] animate-pulse" />
            <span>Contact</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FFDEC0] text-[#FF710D] text-xs font-bold tracking-wide uppercase mb-4">
            <i className="bi bi-telephone-inbound text-xs"></i>
            <span>Contact Information</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B46] tracking-tight leading-tight mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out directly through phone, WhatsApp, email, or visit our office.
          </p>
        </div>

        {/* 3 Core Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {/* 1. Phone & WhatsApp */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F0E4D8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF4EA] text-[#FF710D] flex items-center justify-center text-xl mb-5 border border-[#FDE3CF]">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Phone &amp; WhatsApp
              </h2>
              <a
                href={CONTACT_INFO.phoneTel}
                className="text-lg sm:text-xl font-bold text-[#102B46] hover:text-[#FF710D] transition-colors block mb-2"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                {CONTACT_INFO.businessHours || "Monday – Saturday: 9:30 AM – 7:30 PM IST"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#F0E4D8]/70">
              <a
                href={CONTACT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF710D] hover:bg-[#E65E00] text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                <i className="bi bi-telephone text-xs"></i>
                <span>Call Now</span>
              </a>
              {CONTACT_INFO.whatsappUrl && (
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors shadow-2xs"
                >
                  <i className="bi bi-whatsapp text-xs"></i>
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {/* 2. Email Support */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F0E4D8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF4EA] text-[#FF710D] flex items-center justify-center text-xl mb-5 border border-[#FDE3CF]">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Email Support
              </h2>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-base sm:text-lg font-bold text-[#102B46] hover:text-[#FF710D] transition-colors block truncate mb-2"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send us an email anytime. We usually respond within a few business hours.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0E4D8]/70">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#102B46] hover:bg-[#1C3B5E] text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                <i className="bi bi-send text-xs"></i>
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* 3. Office Address */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F0E4D8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF4EA] text-[#FF710D] flex items-center justify-center text-xl mb-5 border border-[#FDE3CF]">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Office Address
              </h2>
              <div className="text-sm font-semibold text-[#102B46] leading-snug space-y-1">
                {CONTACT_INFO.address.addressLine1 && (
                  <p>{CONTACT_INFO.address.addressLine1}</p>
                )}
                {CONTACT_INFO.address.addressLine2 && (
                  <p>{CONTACT_INFO.address.addressLine2}</p>
                )}
                <p className="text-xs text-slate-500 font-normal">
                  {formattedAddress}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0E4D8]/70">
              {CONTACT_INFO.mapUrl && (
                <a
                  href={CONTACT_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#F0E4D8] bg-white text-[#102B46] hover:text-[#FF710D] hover:border-[#FF710D] text-xs font-semibold transition-colors shadow-2xs"
                >
                  <i className="bi bi-box-arrow-up-right text-[11px] text-[#FF710D]"></i>
                  <span>Directions on Google Maps</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Social Media Channels Row */}
        <div className="bg-white rounded-2xl p-6 border border-[#F0E4D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-[#102B46]">Connect with Eatery Cloud</h3>
            <p className="text-xs text-slate-500">Follow us on our social platforms for updates and product news.</p>
          </div>
          <div className="flex items-center gap-3">
            {CONTACT_INFO.social.facebook && (
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#FFF7EE] border border-[#F0E4D8] text-[#102B46] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] flex items-center justify-center text-lg transition-all"
              >
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {CONTACT_INFO.social.instagram && (
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#FFF7EE] border border-[#F0E4D8] text-[#102B46] hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] flex items-center justify-center text-lg transition-all"
              >
                <i className="bi bi-instagram"></i>
              </a>
            )}
            {CONTACT_INFO.social.linkedin && (
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#FFF7EE] border border-[#F0E4D8] text-[#102B46] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center text-lg transition-all"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            )}
            {CONTACT_INFO.social.youtube && (
              <a
                href={CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#FFF7EE] border border-[#F0E4D8] text-[#102B46] hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] flex items-center justify-center text-lg transition-all"
              >
                <i className="bi bi-youtube"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
