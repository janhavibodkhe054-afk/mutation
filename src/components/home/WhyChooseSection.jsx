import React from "react";
import {
  Layers3,
  Boxes,
  Hotel,
  FlaskConical,
  PackageCheck,
  RefreshCw,
} from "lucide-react";

const reasons = [
  {
    no: "01",
    icon: Layers3,
    title: "Wide Product Range",
    description:
      "A diverse range of personal care products for everyday and business requirements.",
  },
  {
    no: "02",
    icon: Boxes,
    title: "B2B & Bulk Order Support",
    description:
      "Business-friendly solutions for bulk purchasing and recurring requirements.",
  },
  {
    no: "03",
    icon: Hotel,
    title: "Hotel Amenities Solutions",
    description:
      "Complete guest-care essentials for hotels, resorts and hospitality businesses.",
  },
  {
    no: "04",
    icon: FlaskConical,
    title: "Private Label Manufacturing",
    description:
      "Product selection, packaging, branding and manufacturing support.",
  },
  {
    no: "05",
    icon: PackageCheck,
    title: "Custom Packaging & Branding",
    description:
      "Flexible packaging and customised product presentation.",
  },
  {
    no: "06",
    icon: RefreshCw,
    title: "Reliable Supply",
    description:
      "A dependable approach to sourcing, order management and business supply.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F1EB]">
      <style>{`
        @keyframes whyPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .5;
          }
          50% {
            transform: scale(1.55);
            opacity: 1;
          }
        }

        @keyframes whyFlow {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(340px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-[18%] bg-[#EBF0EC]" />

        <div className="absolute -left-[160px] top-[80px] h-[370px] w-[370px] rounded-full border border-[#438D76]/10" />

        <div className="absolute -right-[170px] bottom-[-150px] h-[380px] w-[380px] rounded-full border border-orange-500/10" />

        <div className="absolute right-[8%] top-0 h-[55px] w-px bg-orange-500/30" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 xl:px-14">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[36px] bg-[#B8C3BD]" />

            <span
              className="why-motion h-[7px] w-[7px] rounded-full bg-orange-500"
              style={{
                animation: "whyPulse 2.8s ease-in-out infinite",
              }}
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-[11px]">
              Why Mutation Dermacare
            </span>

            <span className="h-px w-[36px] bg-[#B8C3BD]" />
          </div>

          <h2 className="mt-4 text-[33px] font-bold leading-[1.08] tracking-[-0.04em] text-[#17251F] sm:text-[40px] lg:text-[45px]">
            One Partner.{" "}
            <span className="text-[#438D76]">
              Multiple Care Solutions.
            </span>
          </h2>
        </div>

        {/* =====================================================
            FEATURES
        ====================================================== */}
        <div className="relative mt-11 lg:mt-14">

          {/* Center Line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#C7D0CB] lg:block">
            <span
              className="why-motion absolute left-1/2 top-0 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-orange-500"
              style={{
                animation: "whyFlow 6s linear infinite",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const row = Math.floor(index / 2);

              return (
                <div
                  key={item.no}
                  className={`
                    group relative
                    border-[#CDD5D1]
                    py-7
                    sm:py-8
                    lg:min-h-[185px]
                    lg:py-9

                    ${
                      isLeft
                        ? "lg:pr-14 xl:pr-20"
                        : "lg:pl-14 xl:pl-20"
                    }

                    ${
                      row < 2
                        ? "border-b"
                        : ""
                    }

                    ${
                      index > 0
                        ? "max-lg:border-t"
                        : ""
                    }
                  `}
                >
                  <div
                    className={`
                      flex gap-5
                      ${
                        !isLeft
                          ? "lg:flex-row"
                          : "lg:flex-row-reverse lg:text-right"
                      }
                    `}
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex h-[52px] w-[52px]
                        shrink-0 items-center justify-center
                        rounded-full
                        border border-[#BFCAC4]
                        bg-white
                        text-[#438D76]
                        transition-all duration-300
                        group-hover:border-orange-500
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    {/* COPY */}
                    <div className="flex-1">
                      <div
                        className={`
                          flex items-center gap-3
                          ${
                            isLeft
                              ? "lg:justify-end"
                              : ""
                          }
                        `}
                      >
                        <span className="text-[9px] font-bold tracking-[0.18em] text-orange-600">
                          {item.no}
                        </span>

                        <span className="h-px w-[28px] bg-[#B9C4BE] transition-all duration-500 group-hover:w-[45px] group-hover:bg-orange-500" />
                      </div>

                      <h3 className="mt-3 text-[19px] font-bold leading-[1.25] tracking-[-0.025em] text-[#1D2D27] sm:text-[20px]">
                        {item.title}
                      </h3>

                      <p
                        className={`
                          mt-2 max-w-[420px]
                          text-[14px] font-medium
                          leading-[1.7] text-[#58655E]
                          sm:text-[15px]
                          ${
                            isLeft
                              ? "lg:ml-auto"
                              : ""
                          }
                        `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node - Desktop */}
                  <span
                    className={`
                      absolute top-1/2 z-10
                      hidden h-[11px] w-[11px]
                      -translate-y-1/2 rounded-full
                      border-[3px] border-[#F5F1EB]
                      transition-all duration-300
                      lg:block

                      ${
                        isLeft
                          ? "-right-[6px]"
                          : "-left-[5px]"
                      }

                      ${
                        index % 3 === 0
                          ? "bg-orange-500"
                          : "bg-[#438D76]"
                      }
                    `}
                  />

                  {/* Hover Line */}
                  <span
                    className={`
                      absolute bottom-[-1px]
                      h-[2px] w-0
                      bg-orange-500
                      transition-all duration-500
                      group-hover:w-[80px]

                      ${
                        isLeft
                          ? "right-0"
                          : "left-0"
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            COMPACT END STRIP
        ====================================================== */}
        <div className="mt-9 flex items-center justify-center gap-4 border-t border-[#CDD5D1] pt-6">
          <span className="h-px w-[55px] bg-[#BCC7C1]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#647069]">
            Personal Care
          </span>

          <span className="h-[5px] w-[5px] rounded-full bg-orange-500" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#647069]">
            B2B
          </span>

          <span className="h-[5px] w-[5px] rounded-full bg-[#438D76]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#647069]">
            Private Label
          </span>

          <span className="hidden h-px w-[55px] bg-[#BCC7C1] sm:block" />
        </div>
      </div>

      {/* Bottom Brand Accent */}
      <div className="flex h-[4px]">
        <span className="w-[28%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default WhyChooseSection;