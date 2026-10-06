import React from "react";

const FounderSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================
          ANIMATIONS
      ========================== */}
      <style>{`
        @keyframes founderImageZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.035);
          }
        }

        @keyframes accentMove {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(24px);
          }
        }

        @keyframes quoteFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes lineGrow {
          0%, 100% {
            width: 28px;
          }
          50% {
            width: 58px;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(67, 141, 118, 0.2);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 0 7px rgba(67, 141, 118, 0);
          }
        }

        @keyframes nameLineMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(420%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-animation {
            animation: none !important;
          }
        }
      `}</style>

      {/* Subtle Background Detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[120px]
          top-[60px]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#438D76]/[0.06]
          lg:h-[420px]
          lg:w-[420px]
        "
      />

      <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* =========================
              FOUNDER IMAGE
          ========================== */}
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">

            {/* Animated Orange Line */}
            <div className="absolute -left-4 top-8 z-10 h-[72%] w-[5px] overflow-hidden bg-orange-500/20 sm:-left-5">
              <div
                className="
                  founder-animation
                  absolute
                  left-0
                  top-0
                  h-[38%]
                  w-full
                  bg-orange-500
                "
                style={{
                  animation: "accentMove 4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Image */}
            <div className="group overflow-hidden rounded-[20px] bg-[#F4F1ED]">
              <img
                src="/founder-deepali.jpg"
                alt="Dr. Deepali Nagesh Hingmire"
                className="
                  founder-animation
                  h-[440px]
                  w-full
                  object-cover
                  object-top
                  sm:h-[520px]
                  lg:h-[590px]
                "
                style={{
                  animation: "founderImageZoom 9s ease-in-out infinite",
                }}
              />
            </div>

            {/* Founder Name Strip */}
            <div
              className="
                relative
                z-20
                -mt-[72px]
                ml-5
                mr-5
                overflow-hidden
                bg-white
                px-5
                py-4
                shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                sm:ml-7
                sm:mr-7
                sm:px-6
              "
            >
              {/* Animated top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden bg-[#E7E5E1]">
                <span
                  className="
                    founder-animation
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[28%]
                    bg-orange-500
                  "
                  style={{
                    animation: "nameLineMove 5s linear infinite",
                  }}
                />
              </div>

              <h3 className="text-[18px] font-bold leading-tight text-[#1D2522] sm:text-[20px]">
                Dr. Deepali Nagesh Hingmire
              </h3>

              <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#438D76]">
                Founder & Director
              </p>
            </div>
          </div>

          {/* =========================
              CONTENT
          ========================== */}
          <div className="relative lg:pl-2">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-[2px] w-[36px] overflow-hidden bg-orange-500/25">
                <span
                  className="
                    founder-animation
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[16px]
                    bg-orange-500
                  "
                  style={{
                    animation: "nameLineMove 3s linear infinite",
                  }}
                />
              </div>

              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-[13px]">
                Meet The Founder
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[650px]
                text-[32px]
                font-bold
                leading-[1.12]
                tracking-[-0.035em]
                text-[#1D2522]
                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
              "
            >
              Building Brands With
              <span className="block text-[#438D76]">
                Purpose & Passion.
              </span>
            </h2>

            {/* Quote */}
            <div className="relative mt-8 border-l-[3px] border-orange-500 pl-5 sm:pl-7">

              {/* Animated Quote Mark */}
              <span
                aria-hidden="true"
                className="
                  founder-animation
                  absolute
                  -top-4
                  left-4
                  text-[55px]
                  font-serif
                  leading-none
                  text-orange-500/20
                  sm:left-6
                "
                style={{
                  animation: "quoteFloat 4s ease-in-out infinite",
                }}
              >
                “
              </span>

              <p className="relative max-w-[690px] text-[17px] font-medium leading-[1.8] text-[#303A35] sm:text-[18px]">
                “We believe every brand deserves the right products, the right
                support and the freedom to create something truly meaningful.
                Our goal is to make private label manufacturing simple,
                reliable and accessible.”
              </p>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-[690px] text-[15px] leading-[1.9] text-[#59625D] sm:text-[16px]">
              With a strong focus on quality, innovation and long-term
              partnerships, we help businesses turn their personal care ideas
              into products that are ready to build a brand around.
            </p>

            {/* Animated Bottom Detail */}
            <div className="mt-9 flex h-[16px] items-center gap-4">
              <span className="h-px w-[70px] bg-[#CDD2CF]" />

              <span
                className="
                  founder-animation
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#438D76]
                "
                style={{
                  animation: "dotPulse 2.5s ease-in-out infinite",
                }}
              />

              <span
                className="founder-animation h-px bg-orange-500"
                style={{
                  animation: "lineGrow 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;