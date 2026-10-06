import React from "react";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HotelAmenitiesHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#17231F]">
      <style>{`
        @keyframes hotelImageMove {
          0%, 100% {
            transform: scale(1.02);
          }
          50% {
            transform: scale(1.06);
          }
        }

        @keyframes hotelLineMove {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(600%);
          }
        }

        @keyframes hotelDotPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hotel-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-[180px] -top-[220px] h-[460px] w-[460px] rounded-full border border-white/[0.05]" />
        <div className="absolute -left-[110px] -top-[150px] h-[330px] w-[330px] rounded-full border border-white/[0.04]" />

        <div className="absolute left-[48%] top-0 hidden h-full w-px bg-white/[0.05] lg:block" />

        <div className="absolute bottom-[15%] left-[5%] h-[6px] w-[6px] rounded-full bg-orange-500/70" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10 xl:px-14">
        <div className="grid min-h-[570px] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-0">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 lg:py-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[38px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400 sm:text-[12px]">
                Hospitality Solutions
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-6
                max-w-[690px]
                text-[39px]
                font-bold
                leading-[1.06]
                tracking-[-0.04em]
                text-white
                sm:text-[47px]
                md:text-[52px]
                lg:text-[56px]
              "
            >
              Premium Hotel Amenities
              <span className="mt-1 block text-[#70B69F]">
                for Exceptional Guest Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[610px] text-[15px] font-medium leading-[1.8] text-[#D3DCD7] sm:text-[16px]">
              Complete personal care solutions for hotels, resorts, homestays
              and hospitality businesses.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  document
                    .getElementById("hotel-solutions")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  bg-orange-500
                  px-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-600
                "
              >
                Explore Solutions

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/30
                  px-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#70B69F]
                  hover:bg-[#70B69F]
                  hover:text-[#17231F]
                "
              >
                Get Bulk Quote

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Bottom Detail */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <Building2
                  size={15}
                  strokeWidth={1.8}
                  className="text-orange-400"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C5D0CA]">
                  Hotels & Resorts
                </span>
              </div>

              <span className="hidden h-[4px] w-[4px] rounded-full bg-[#70B69F] sm:block" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={15}
                  strokeWidth={1.8}
                  className="text-orange-400"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C5D0CA]">
                  Guest-Care Essentials
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative lg:h-[570px]">
            <div className="relative h-[390px] overflow-hidden sm:h-[470px] lg:h-full">
              <img
                src="/hotel-hero.webp"
                alt="Mutation Dermacare hotel amenities"
                className="hotel-motion h-full w-full object-cover"
                style={{
                  animation: "hotelImageMove 12s ease-in-out infinite",
                }}
              />

              {/* Dark blends */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#17231F]/55 via-transparent to-transparent lg:from-[#17231F]/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17231F]/45 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <div className="flex max-w-[390px] items-center gap-4 border-l-[3px] border-orange-500 bg-[#17231F]/80 px-5 py-4 backdrop-blur-md">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                      Mutation Dermacare
                    </span>

                    <span className="mt-1 block text-[14px] font-semibold leading-[1.5] text-white">
                      Thoughtful amenities for better guest experiences.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Green vertical accent */}
            <div className="absolute right-0 top-[14%] hidden h-[105px] w-[5px] bg-[#70B69F] lg:block" />
          </div>
        </div>
      </div>

      {/* Bottom brand line */}
      <div className="relative flex h-[4px]">
        <span className="w-[22%] bg-orange-500" />

        <span className="relative flex-1 overflow-hidden bg-[#438D76]">
          <span
            className="hotel-motion absolute inset-y-0 left-0 w-[80px] bg-[#70B69F]"
            style={{
              animation: "hotelLineMove 6s linear infinite",
            }}
          />
        </span>
      </div>
    </section>
  );
};

export default HotelAmenitiesHero;