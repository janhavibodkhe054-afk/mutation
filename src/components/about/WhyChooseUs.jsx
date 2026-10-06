import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    "Wide Product Range",
    "B2B & Bulk Order Support",
    "Hotel Amenities Solutions",
    "Private Label Manufacturing",
    "Custom Packaging",
    "Custom Branding",
    "Reliable Supply",
    "One-Stop Solutions",
  ];

  return (
    <section className="relative overflow-hidden bg-[#EDF1F0]">
      <style>{`
        @keyframes accentMove {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(520%);
          }
        }

        @keyframes imageBreath {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.035);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .55;
          }
          50% {
            transform: scale(1.55);
            opacity: 1;
          }
        }

        @keyframes verticalMove {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(28px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= BACKGROUND DETAILS ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[7%] top-0 h-[95px] w-px bg-[#438D76]/20" />

        <div
          className="why-motion absolute right-[calc(7%-3px)] top-[28px] h-[7px] w-[7px] rounded-full bg-orange-500"
          style={{
            animation: "verticalMove 5s ease-in-out infinite",
          }}
        />

        <div className="absolute bottom-0 left-[46%] h-[80px] w-px bg-gradient-to-t from-orange-500/35 to-transparent" />
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative mx-auto max-w-[1380px] px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16 xl:px-14">
        <div className="grid items-center gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-[72px]">

          {/* ==================================================
              LEFT IMAGE COMPOSITION
          ================================================== */}
          <div className="relative">
            {/* Orange top detail */}
            <div className="absolute -top-[10px] left-[28px] z-20 h-[4px] w-[82px] bg-orange-500" />

            {/* Main Image */}
            <div
              className="
                relative
                h-[390px]
                overflow-hidden
                rounded-tr-[80px]
                sm:h-[460px]
                lg:h-[520px]
                lg:rounded-tr-[120px]
              "
            >
              <img
                src="/beauty.webp"
                alt="Mutation Dermacare personal care solutions"
                className="
                  why-motion
                  h-full
                  w-full
                  object-cover
                "
                style={{
                  animation: "imageBreath 12s ease-in-out infinite",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#162A23]/55 via-transparent to-transparent" />

              {/* Image Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 sm:p-7">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">
                    Mutation Dermacare
                  </span>

                  <p className="mt-2 max-w-[260px] text-[18px] font-semibold leading-[1.35] text-white sm:text-[20px]">
                    One Partner.
                    <br />
                    Multiple Care Solutions.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-[6px] w-[6px] rounded-full bg-orange-400" />
                  <span className="h-px w-[34px] bg-white/55" />
                </div>
              </div>
            </div>

            {/* Floating side marker */}
            <div
              className="
                absolute
                -bottom-5
                right-0
                z-20
                flex
                items-center
                gap-4
                bg-[#438D76]
                px-5
                py-4
                text-white
                sm:right-[-18px]
                sm:px-6
              "
            >
              <span className="text-[31px] font-bold leading-none">
                08
              </span>

              <span className="h-[30px] w-px bg-white/30" />

              <span className="text-[9px] font-bold uppercase leading-[1.5] tracking-[0.17em] text-white/80">
                Core
                <br />
                Strengths
              </span>
            </div>
          </div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}
          <div className="lg:py-2">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-orange-600 sm:text-[12px]">
                Why Choose Us
              </span>

              <div className="relative h-px w-[55px] overflow-hidden bg-[#AEBAB4]">
                <span
                  className="
                    why-motion
                    absolute
                    inset-y-0
                    left-0
                    w-[18px]
                    bg-[#438D76]
                  "
                  style={{
                    animation: "accentMove 3.5s linear infinite",
                  }}
                />
              </div>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                max-w-[650px]
                text-[35px]
                font-bold
                leading-[1.07]
                tracking-[-0.04em]
                text-[#19251F]
                sm:text-[41px]
                md:text-[45px]
                lg:text-[48px]
              "
            >
              Why Mutation{" "}
              <span className="text-[#438D76]">
                Dermacare?
              </span>
            </h2>

            {/* Small accent */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-[52px] bg-orange-500" />

              <span
                className="
                  why-motion
                  h-[6px]
                  w-[6px]
                  rounded-full
                  bg-[#438D76]
                "
                style={{
                  animation: "dotPulse 2.4s ease-in-out infinite",
                }}
              />
            </div>

            {/* ================================================
                REASONS
            ================================================= */}
            <div className="mt-7 grid sm:grid-cols-2 sm:gap-x-9">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="
                    group
                    relative
                    flex
                    min-h-[70px]
                    items-center
                    gap-4
                    border-b
                    border-[#C5CFCA]
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      w-[28px]
                      shrink-0
                      text-[10px]
                      font-bold
                      tracking-[0.14em]
                      text-orange-600
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Vertical Accent */}
                  <span
                    className="
                      h-[22px]
                      w-[2px]
                      shrink-0
                      bg-[#AABAB2]
                      transition-all
                      duration-300
                      group-hover:h-[36px]
                      group-hover:bg-orange-500
                    "
                  />

                  {/* Text */}
                  <h3
                    className="
                      flex-1
                      py-4
                      text-[15px]
                      font-bold
                      leading-[1.4]
                      text-[#293630]
                      transition-all
                      duration-300
                      group-hover:translate-x-[4px]
                      group-hover:text-[#438D76]
                      sm:text-[16px]
                      lg:text-[17px]
                    "
                  >
                    {reason}
                  </h3>

                  {/* End Detail */}
                  <div className="flex shrink-0 items-center">
                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#438D76]
                        transition-colors
                        duration-300
                        group-hover:bg-orange-500
                      "
                    />

                    <span
                      className="
                        ml-2
                        h-px
                        w-[12px]
                        bg-[#9DAAA4]
                        transition-all
                        duration-500
                        group-hover:w-[28px]
                        group-hover:bg-orange-500
                      "
                    />
                  </div>

                  {/* Hover Underline */}
                  <span
                    className="
                      absolute
                      bottom-[-1px]
                      left-0
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              ))}
            </div>

            {/* ================================================
                FOOT NOTE
            ================================================= */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5E6C65]">
                Personal Care
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5E6C65]">
                Hospitality
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5E6C65]">
                Private Label
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5E6C65]">
                B2B
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BRAND ACCENT ================= */}
      <div className="flex h-[4px]">
        <span className="w-[17%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default WhyChooseUs;