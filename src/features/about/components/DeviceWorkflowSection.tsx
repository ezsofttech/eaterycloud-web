import React from "react";

interface DeviceFeature {
  title: string;
  badge: string;
  targetRole: string;
  icon: string;
  summary: string;
  points: string[];
}

const DEVICES: DeviceFeature[] = [
  {
    title: "POS Terminal",
    badge: "Counter Operations",
    targetRole: "Staff-Assisted Ordering & Billing",
    icon: "bi-display",
    summary:
      "The POS terminal supports staff-assisted order processing and billing, providing a central point for handling customer orders and everyday counter operations.",
    points: [
      "Staff-assisted order entry and rapid table or takeaway billing.",
      "Central command point for customer orders and payment settlements.",
      "Supports cashier management, bill splits, and discount applications.",
      "Coordinates frontline staff with back-office restaurant systems.",
    ],
  },
  {
    title: "Self-Service Kiosk",
    badge: "Customer-Led",
    targetRole: "Independent Guest Ordering",
    icon: "bi-phone-landscape",
    summary:
      "The Kiosk is designed for customer-led ordering. It gives customers a dedicated interface to explore available menu items and place orders with less dependence on counter staff.",
    points: [
      "Intuitive customer-led touch interface for effortless menu discovery.",
      "Clear visual categorization with modifier and add-on selections.",
      "Dramatically reduces counter queue times and front-desk friction.",
      "Enables smooth ordering with lower dependence on counter staff.",
    ],
  },
  {
    title: "Kitchen Order Ticket (KOT)",
    badge: "Kitchen Display",
    targetRole: "Kitchen-Side Visibility & Prep",
    icon: "bi-receipt-cutoff",
    summary:
      "The KOT device supports kitchen-side order visibility, helping kitchen teams receive and review order information so they can coordinate preparation with the front-of-house team.",
    points: [
      "Real-time kitchen order ticket visibility on screens or physical slips.",
      "Kitchen teams immediately receive, review, and sequence preparation orders.",
      "Tracks preparation stages in real time to prevent order delays.",
      "Coordinates prep timing seamlessly with the front-of-house team.",
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Order Placement",
    desc: "Placed swiftly at the staff POS Terminal or directly by guests at the Self-Service Kiosk.",
  },
  {
    step: "02",
    title: "Instant Routing",
    desc: "The cloud POS engine validates order details, taxes, and inventory allocations instantly.",
  },
  {
    step: "03",
    title: "Kitchen Preparation",
    desc: "The KOT device renders order items in the kitchen with preparation priorities and special notes.",
  },
  {
    step: "04",
    title: "Unified Completion",
    desc: "Food is served, customer bills are settled, and real-time sales register automatically across all panels.",
  },
];

export function DeviceWorkflowSection() {
  return (
    <section id="devices" className="py-16 lg:py-20 bg-[#FFF7EE] border-b border-[#F0E4D8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Clean Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E2] border border-[#FFDEC0] text-[#FF710D] text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <i className="bi bi-cpu-fill text-xs"></i>
            <span>Connected Hardware Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight">
            Three Device Types. One Connected Workflow.
          </h2>
        </div>

        {/* 3 Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {DEVICES.map((device) => (
            <div
              key={device.title}
              className="flex flex-col justify-between rounded-2xl bg-white border border-[#F0E4D8] p-6 sm:p-7 hover:border-[#FF710D]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF4EA] border border-[#FDE3CF] flex items-center justify-center text-[#FF710D] text-lg shadow-2xs">
                    <i className={`bi ${device.icon}`}></i>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF4EA] text-[#FF710D] border border-orange-200">
                    {device.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#102B46] tracking-tight">
                  {device.title}
                </h3>
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-0.5 mb-3">
                  {device.targetRole}
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 pb-4 border-b border-[#F0E4D8]/80">
                  {device.summary}
                </p>

                <div className="space-y-2.5 mb-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#102B46]">
                    Key Device Capabilities:
                  </p>
                  {device.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="shrink-0 w-4 h-4 rounded-full bg-[#FFF4EA] text-[#FF710D] flex items-center justify-center text-[10px] mt-0.5 font-bold">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <span className="text-xs text-[#475569] leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting Workflow Banner */}
        <div className="rounded-2xl bg-white border border-[#FDE3CF] p-6 sm:p-8 shadow-xs text-left">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4EA] border border-orange-200 text-xs font-bold text-[#FF710D] mb-2.5">
              <i className="bi bi-arrow-repeat text-xs"></i>
              <span>Unified System Integration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#102B46] tracking-tight mb-1.5">
              Connecting Placement, Operations &amp; Kitchen Coordination
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Order placement, counter billing, and kitchen fulfillment work in real-time synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {WORKFLOW_STEPS.map((ws, idx) => (
              <div
                key={ws.step}
                className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F0E4D8] hover:border-[#FF710D]/50 hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF710D]">
                      STEP {ws.step}
                    </span>
                    {idx < WORKFLOW_STEPS.length - 1 && (
                      <i className="bi bi-arrow-right text-xs text-[#FF710D]/50 hidden lg:inline-block"></i>
                    )}
                  </div>
                  <div className="text-sm font-bold text-[#102B46] mb-1">
                    {ws.title}
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

