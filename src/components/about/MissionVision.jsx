import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2]">
      <style>{`
        @keyframes purposeDash {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(420%);
          }
        }

        @keyframes purposeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes purposePulse {
          0%, 100% {
            transform: scale(1);
            opacity: .35;
          }
          50% {
            transform: scale(1.15);
            opacity: .7;
          }
        }

        @keyframes purposeRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .purpose-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND DECOR
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="purpose-motion absolute -right-[170px] -top-[170px] h-[390px] w-[390px] rounded-full border border-[#438D76]/10"
          style={{ animation: "purposeRotate 35s linear infinite" }}
        >
          <span className="absolute bottom-[65px] left-[60px] h-[8px] w-[8px] rounded-full bg-orange-500" />
        </div>

        <span className="absolute -bottom-8 left-[2%] select-none text-[150px] font-black leading-none tracking-[-0.08em] text-[#1D2522]/[0.025] sm:text-[220px] lg:text-[290px]">
          PURPOSE
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">

          {/* =================================================
              LEFT INTRO
          ================================================= */}
          <div className="relative lg:pt-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="relative h-[2px] w-[38px] overflow-hidden bg-orange-500/25">
                <span
                  className="purpose-motion absolute inset-y-0 left-0 w-[15px] bg-orange-500"
                  style={{
                    animation: "purposeDash 3.2s linear infinite",
                  }}
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-[12px]">
                Our Purpose
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-[470px] text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D2522] sm:text-[40px] lg:text-[44px] xl:text-[47px]">
              Driven By
              <span className="block">Purpose.</span>

              <span className="mt-1 block text-[#438D76]">
                Focused On
                <br />
                The Future.
              </span>
            </h2>

            {/* Decorative Detail */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-[60px] bg-[#CBC7C0]" />

              <span
                className="purpose-motion h-[7px] w-[7px] rounded-full bg-orange-500"
                style={{
                  animation: "purposePulse 2.6s ease-in-out infinite",
                }}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B918D]">
                Mission / Vision
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT MISSION + VISION
          ================================================= */}
          <div className="relative">

            {/* ===============================================
                MISSION
            =============================================== */}
            <div
              className="
                relative
                overflow-hidden
                border
                border-[#DDD9D2]
                bg-white
                px-6
                py-7
                sm:px-8
                sm:py-8
                lg:mr-[70px]
                lg:px-10
              "
            >
              {/* Giant M */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-8
                  select-none
                  text-[145px]
                  font-black
                  leading-none
                  text-[#438D76]/[0.045]
                  sm:text-[180px]
                "
              >
                M
              </span>

              <div className="relative">
                {/* Top */}
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#438D76] text-white">
                      <Target size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A918D]">
                        01
                      </span>

                      <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#438D76] sm:text-[12px]">
                        Our Mission
                      </span>
                    </div>
                  </div>

                  <div className="hidden h-px flex-1 bg-[#E1DED8] sm:block" />
                </div>

                {/* Title */}
                <h3 className="mt-6 max-w-[580px] text-[23px] font-bold leading-[1.25] tracking-[-0.025em] text-[#1D2522] sm:text-[27px] lg:text-[29px]">
                  Making Quality Care
                  <span className="block text-[#438D76]">
                    Solutions Accessible
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[650px] text-[15px] leading-[1.8] text-[#56605B] sm:text-[16px]">
                  Our mission is to provide quality personal care products and
                  dependable business solutions that meet the evolving needs of
                  consumers, brands and businesses.
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-[90px] bg-[#438D76]" />
            </div>

            {/* ===============================================
                CONNECTION
            =============================================== */}
            <div className="relative z-20 mx-auto -my-[1px] hidden h-[45px] w-px bg-[#CAC6BF] lg:block">
              <span
                className="
                  purpose-motion
                  absolute
                  left-1/2
                  top-1/2
                  h-[8px]
                  w-[8px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-orange-500
                "
                style={{
                  animation: "purposeFloat 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* ===============================================
                VISION
            =============================================== */}
            <div
              className="
                relative
                mt-5
                overflow-hidden
                border
                border-[#DDD9D2]
                bg-[#222523]
                px-6
                py-7
                text-white
                sm:px-8
                sm:py-8
                lg:ml-[70px]
                lg:mt-0
                lg:px-10
              "
            >
              {/* Giant V */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-8
                  select-none
                  text-[145px]
                  font-black
                  leading-none
                  text-white/[0.035]
                  sm:text-[180px]
                "
              >
                V
              </span>

              <div className="relative">
                {/* Top */}
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-orange-500 text-white">
                      <Eye size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                        02
                      </span>

                      <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-[12px]">
                        Our Vision
                      </span>
                    </div>
                  </div>

                  <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                </div>

                {/* Title */}
                <h3 className="mt-6 max-w-[580px] text-[23px] font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-[27px] lg:text-[29px]">
                  A Trusted Partner for
                  <span className="block text-orange-400">
                    Growing Businesses
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[660px] text-[15px] leading-[1.8] text-white/75 sm:text-[16px]">
                  We aim to become a trusted cosmetic manufacturing and B2B
                  solutions partner, recognised for quality, flexibility,
                  dependable supply and long-term relationships.
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-[90px] bg-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;