import React from "react";
import {
  PackageSearch,
  ClipboardList,
  Package,
  Palette,
  Factory,
  Boxes,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    no: "01",
    icon: PackageSearch,
    title: "Product Selection",
    description:
      "Choose the personal care products suitable for your brand.",
  },
  {
    no: "02",
    icon: ClipboardList,
    title: "Product Requirement",
    description:
      "Discuss formulation, quantity and business requirements.",
  },
  {
    no: "03",
    icon: Package,
    title: "Packaging",
    description:
      "Select packaging suitable for the product and brand positioning.",
  },
  {
    no: "04",
    icon: Palette,
    title: "Branding",
    description:
      "Integrate your logo, label and brand identity.",
  },
  {
    no: "05",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Products are prepared according to finalised requirements.",
  },
  {
    no: "06",
    icon: Boxes,
    title: "Bulk Supply",
    description:
      "Finished products are prepared for your business requirements.",
  },
];

const PrivateLabelProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#192721]">
      <style>{`
        @keyframes processPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .55;
          }
          50% {
            transform: scale(1.55);
            opacity: 1;
          }
        }

        @keyframes processFlow {
          0% {
            left: 0%;
          }
          100% {
            left: calc(100% - 12px);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-[220px] -top-[220px] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

        <div className="absolute -left-[105px] -top-[105px] h-[270px] w-[270px] rounded-full border border-[#69A891]/10" />

        <div className="absolute -right-[180px] bottom-[-230px] h-[480px] w-[480px] rounded-full border border-orange-500/[0.07]" />

        <div className="absolute right-[9%] top-0 h-[70px] w-px bg-orange-500/35" />
      </div>

      <div className="relative mx-auto max-w-[1420px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-[850px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[38px] bg-white/20" />

            <span
              className="process-motion h-[7px] w-[7px] rounded-full bg-orange-500"
              style={{
                animation: "processPulse 2.8s ease-in-out infinite",
              }}
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400">
              Private Label Process
            </span>

            <span className="h-px w-[38px] bg-white/20" />
          </div>

          <h2 className="mt-5 text-[35px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[47px]">
            From Your Idea to a{" "}
            <span className="text-[#8BC2AE]">
              Finished Product.
            </span>
          </h2>
        </div>

        {/* =====================================================
            DESKTOP PROCESS
        ====================================================== */}
        <div className="relative mt-14 hidden lg:block">
          
          {/* Main connecting line */}
          <div className="absolute left-[7%] right-[7%] top-[55px] h-px bg-white/15">
            <span
              className="process-motion absolute top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full border-[3px] border-[#192721] bg-orange-500"
              style={{
                animation: "processFlow 9s linear infinite",
              }}
            />
          </div>

          <div className="relative grid grid-cols-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.no}
                  className={`
                    group relative px-4
                    ${index !== 5 ? "border-r border-white/[0.07]" : ""}
                  `}
                >
                  {/* Number + Icon */}
                  <div className="flex flex-col items-center">
                    <span className="mb-3 text-[9px] font-bold tracking-[0.18em] text-orange-400">
                      {step.no}
                    </span>

                    <div
                      className="
                        process-motion
                        relative z-10
                        flex h-[64px] w-[64px]
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-[#22352C]
                        text-[#8BC2AE]
                        transition-all duration-300
                        group-hover:border-orange-500
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                      style={{
                        animation: `iconFloat ${
                          4 + (index % 3)
                        }s ease-in-out infinite`,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="mt-7 text-center">
                    <h3 className="min-h-[48px] text-[17px] font-bold leading-[1.35] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[13px] font-medium leading-[1.7] text-[#B8C7BF]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-[12px] top-[45px] z-20 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#192721] text-orange-400">
                      <ArrowRight size={13} strokeWidth={1.8} />
                    </div>
                  )}

                  {/* Hover accent */}
                  <div className="mx-auto mt-6 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-[45px]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET PROCESS
        ====================================================== */}
        <div className="relative mt-11 lg:hidden">
          
          {/* Vertical Line */}
          <div className="absolute bottom-[35px] left-[28px] top-[35px] w-px bg-white/15" />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.no}
                  className="group relative grid grid-cols-[58px_1fr] gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    <div
                      className="
                        flex h-[56px] w-[56px]
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-[#22352C]
                        text-[#8BC2AE]
                        transition-all duration-300
                        group-hover:border-orange-500
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`
                      pb-8
                      ${
                        index !== processSteps.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }
                    `}
                  >
                    <span className="block text-[9px] font-bold tracking-[0.18em] text-orange-400">
                      {step.no}
                    </span>

                    <h3 className="mt-2 text-[18px] font-bold leading-[1.3] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[520px] text-[14px] font-medium leading-[1.7] text-[#B8C7BF]">
                      {step.description}
                    </p>
                  </div>

                  {/* Spacing */}
                  {index !== processSteps.length - 1 && (
                    <div className="col-span-2 h-6" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PROCESS SUMMARY
        ====================================================== */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {[
              "Product",
              "Requirement",
              "Packaging",
              "Branding",
              "Manufacturing",
              "Bulk Supply",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
                  {item}
                </span>

                {index !== 5 && (
                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                    className="text-orange-400"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Brand Accent */}
      <div className="flex h-[4px]">
        <span className="w-[25%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default PrivateLabelProcess;