import React from "react";
import {
  ArrowUpRight,
  PackageSearch,
  BadgeCheck,
  Boxes,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    no: "01",
    icon: PackageSearch,
    title: "Product Selection",
    text: "Select suitable personal care essentials for your travel kit requirement.",
  },
  {
    no: "02",
    icon: BadgeCheck,
    title: "Custom Branding",
    text: "Create travel kits aligned with your business and brand requirements.",
  },
  {
    no: "03",
    icon: Boxes,
    title: "Bulk Supply",
    text: "Travel care kits available for business and bulk order requirements.",
  },
];

const TravelCustomBulk = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/contact", {
      state: {
        requirement: "travel-care",
        enquiry: "Custom Travel Kits - Bulk Order",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#192721]">
      <style>{`
        @keyframes bulkImageZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.045);
          }
        }

        @keyframes bulkDotPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes bulkLineMove {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(700%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bulk-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[170px] -top-[190px] h-[430px] w-[430px] rounded-full border border-white/[0.05]" />

        <div className="absolute -right-[70px] -top-[90px] h-[230px] w-[230px] rounded-full border border-[#69A891]/10" />

        <div className="absolute left-[7%] top-0 h-[70px] w-px bg-orange-500/35" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.08fr_0.92fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="relative bg-[#203129] px-6 py-9 sm:px-9 sm:py-11 lg:px-11 lg:py-12 xl:px-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="bulk-motion h-[7px] w-[7px] rounded-full bg-orange-500"
                style={{
                  animation: "bulkDotPulse 2.7s ease-in-out infinite",
                }}
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400">
                Custom & Bulk
              </span>

              <span className="h-px w-[38px] bg-white/20" />
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-[650px] text-[33px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[44px]">
              Custom Travel Kits
              <span className="block text-[#86BCA9]">
                Available for Bulk Orders.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-[1.8] text-[#D0DAD5] sm:text-[16px]">
              Create travel care kits according to your product, packaging and
              branding requirements. Ideal for hotels, travel companies,
              corporates and promotional campaigns.
            </p>

            {/* =================================================
                FEATURES
            ================================================= */}
            <div className="mt-9 border-t border-white/15">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.no}
                    className="group relative grid gap-4 border-b border-white/15 py-5 sm:grid-cols-[42px_52px_1fr] sm:items-center sm:gap-5"
                  >
                    {/* Number */}
                    <span className="text-[10px] font-bold tracking-[0.16em] text-orange-400">
                      {item.no}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        flex h-[44px] w-[44px] items-center justify-center
                        rounded-full
                        border border-white/15
                        text-[#8BC2AE]
                        transition-all duration-300
                        group-hover:border-orange-500
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    {/* Copy */}
                    <div>
                      <h3 className="text-[17px] font-bold text-white sm:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 max-w-[500px] text-[13px] font-medium leading-[1.65] text-[#AEBDB5]">
                        {item.text}
                      </p>
                    </div>

                    {/* Hover line */}
                    <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-[90px]" />
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                type="button"
                onClick={handleQuote}
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-5
                  bg-orange-500
                  px-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#5DAA93]
                  sm:px-8
                "
              >
                Get Bulk Quote

                <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-[#438D76]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}
          <div className="relative min-h-[430px] overflow-hidden sm:min-h-[500px] lg:min-h-full">
            <img
              src="/travel-care-kit.png"
              alt="Custom travel care kits for bulk orders"
              className="bulk-motion absolute inset-0 h-full w-full object-cover"
              style={{
                animation: "bulkImageZoom 12s ease-in-out infinite",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#132019]/90 via-transparent to-transparent" />

            {/* Top Label */}
            <div className="absolute right-5 top-5 bg-[#F7F1E9] px-5 py-4 sm:right-7 sm:top-7">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-orange-600">
                B2B Solutions
              </span>

              <span className="mt-1 block text-[14px] font-bold text-[#24332C]">
                Custom Travel Kits
              </span>
            </div>

            {/* Image Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="border-l-[3px] border-orange-500 pl-5">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#9AC9B8]">
                  Built Around Your Requirement
                </span>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-[13px] font-bold text-white">
                    Product Selection
                  </span>

                  <span className="h-[4px] w-[4px] rounded-full bg-orange-400" />

                  <span className="text-[13px] font-bold text-white">
                    Custom Branding
                  </span>

                  <span className="h-[4px] w-[4px] rounded-full bg-orange-400" />

                  <span className="text-[13px] font-bold text-white">
                    Bulk Supply
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Moving Accent */}
        <div className="relative mt-5 h-px overflow-hidden bg-white/10">
          <span
            className="bulk-motion absolute inset-y-0 left-0 w-[90px] bg-orange-500"
            style={{
              animation: "bulkLineMove 7s linear infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TravelCustomBulk;