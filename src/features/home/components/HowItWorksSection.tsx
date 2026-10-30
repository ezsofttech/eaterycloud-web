import React from "react";
import Image from "next/image";
import { HOW_IT_WORKS_STEPS } from "@/constants/features";

export function HowItWorksSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FFF7EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF710D] mb-3">
              HOW IT WORKS
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-[1.2] mb-5">
              Go Live in 3 Simple Steps
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10">
              Get started with Eatery Cloud in just a few clicks. Our onboarding
              is quick, easy and hassle-free.
            </p>

            {/* Vertically Stacked Steps with Solid Orange Numbers matching reference */}
            <div className="space-y-6 sm:space-y-7">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.stepNumber} className="flex items-start gap-4">
                  {/* Number Circle Badge */}
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#FF710D] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {step.stepNumber}
                  </div>

                  {/* Step Text */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#102B46] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Ambient Background Warm Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF710D]/10 via-[#FFA85C]/15 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="relative w-full max-w-2xl drop-shadow-xl hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/images/dashboard-site.jpeg"
                alt="Eatery Cloud Central Management Dashboard on Desktop"
                width={1509}
                height={893}
                priority
                className="w-full h-auto object-contain select-none rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

