import React from "react";
import {
  PackageSearch,
  Palette,
  Factory,
  Check,
  ArrowUpRight,
} from "lucide-react";

const PrivateLabelIntro = () => {
  const steps = [
    {
      no: "01",
      icon: PackageSearch,
      title: "Select",
      sub: "Product",
      text: "Choose the personal care products you want to launch.",
    },
    {
      no: "02",
      icon: Palette,
      title: "Shape",
      sub: "Your Brand",
      text: "Define packaging, presentation and brand identity.",
    },
    {
      no: "03",
      icon: Factory,
      title: "Produce",
      sub: "& Supply",
      text: "Move from approved requirements to bulk manufacturing.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#EEEAE3]">
      {/* =====================================================
          UNIQUE ANIMATIONS
      ====================================================== */}
      <style>{`
        @keyframes blueprintTravel {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }

        @keyframes blueprintPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .35;
          }
          50% {
            transform: scale(1.8);
            opacity: 1;
          }
        }

        @keyframes blueprintSweep {
          0% {
            transform: translateX(-140%);
          }
          100% {
            transform: translateX(440%);
          }
        }

        @keyframes blueprintRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blueprintFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .bp-travel {
          offset-path: path(
            "M 4 55 C 80 5, 130 105, 205 55 S 330 5, 405 55"
          );
          animation: blueprintTravel 6s linear infinite;
        }

        .bp-pulse {
          animation: blueprintPulse 2.6s ease-in-out infinite;
        }

        .bp-sweep {
          animation: blueprintSweep 6s linear infinite;
        }

        .bp-rotate {
          animation: blueprintRotate 18s linear infinite;
        }

        .bp-float {
          animation: blueprintFloat 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-travel,
          .bp-pulse,
          .bp-sweep,
          .bp-rotate,
          .bp-float {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          LARGE BACKGROUND TYPOGRAPHY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          whitespace-nowrap
          text-[105px]
          font-black
          tracking-[-0.08em]
          text-[#1D2D27]/[0.025]
          sm:text-[170px]
          lg:text-[230px]
        "
      >
        PRIVATE LABEL
      </div>

      {/* =====================================================
          CORNER DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-0 top-0 h-[3px] w-[105px] bg-orange-500" />
        <div className="absolute left-[105px] top-0 h-[3px] w-[55px] bg-[#438D76]" />

        <div className="absolute right-[7%] top-0 hidden h-[45px] w-px bg-[#438D76]/30 lg:block" />

        <div className="absolute bottom-[20%] left-0 hidden h-px w-[45px] bg-orange-500/40 lg:block" />
      </div>

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1380px] px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-[62px] xl:px-14">
        {/* ===================================================
            TOP — ASYMMETRIC INTRO
        ==================================================== */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[0.68fr_1.32fr]
            lg:items-end
            lg:gap-14
          "
        >
          {/* LEFT MICRO INTRO */}

          <div>
            <div className="flex items-center gap-3">
              <span className="bp-pulse h-[7px] w-[7px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.21em] text-orange-600">
                Private Label
              </span>

              <span className="h-px w-[32px] bg-[#AEB9B3]" />
            </div>

            <p className="mt-4 max-w-[310px] text-[14px] font-semibold leading-[1.7] text-[#56635C]">
              A simpler route from product concept to your own personal care
              brand.
            </p>
          </div>

          {/* MAIN TITLE */}

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#718078]">
              Your identity. Our manufacturing support.
            </span>

            <h2
              className="
                mt-2
                max-w-[820px]
                text-[34px]
                font-bold
                leading-[1.03]
                tracking-[-0.045em]
                text-[#1D2D27]
                sm:text-[42px]
                lg:text-[49px]
              "
            >
              Not just a product.
              <span className="text-[#438D76]"> A brand </span>
              built around you.
            </h2>
          </div>
        </div>

        {/* ===================================================
            BLUEPRINT CANVAS
        ==================================================== */}

        <div
          className="
            relative
            mt-9
            overflow-hidden
            bg-[#1B2C25]
            lg:mt-10
          "
        >
          {/* ===============================================
              TECHNICAL GRID
          ================================================ */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />

          {/* ORANGE SCAN */}

          <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full overflow-hidden">
            <span className="bp-sweep absolute h-full w-[28%] bg-orange-500" />
          </div>

          {/* =================================================
              DESKTOP CANVAS
          ================================================= */}

          <div
            className="
              relative
              grid
              min-h-[370px]
              lg:grid-cols-[0.78fr_1.22fr]
            "
          >
            {/* =============================================
                IMAGE CUTOUT
            ============================================== */}

            <div
              className="
                relative
                min-h-[265px]
                overflow-hidden
                sm:min-h-[300px]
                lg:min-h-0
              "
            >
              <img
                src="/what-privatellabel.webp"
                alt="Private label personal care products"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.04]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#15251E]/15
                  via-[#15251E]/15
                  to-[#1B2C25]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#15251E]/65 via-transparent to-transparent" />

              {/* IMAGE NUMBER */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  border
                  border-white/30
                  text-[9px]
                  font-bold
                  tracking-[0.14em]
                  text-white
                  sm:left-6
                  sm:top-6
                "
              >
                PL
              </div>

              {/* IMAGE CAPTION */}

              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8BC8B3]">
                  Mutation Dermacare
                </span>

                <p className="mt-1 max-w-[280px] text-[16px] font-bold leading-[1.4] text-white sm:text-[18px]">
                  Personal care products under your brand identity.
                </p>
              </div>
            </div>

            {/* =============================================
                RIGHT BLUEPRINT
            ============================================== */}

            <div className="relative px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-8 xl:px-11">
              {/* ===========================================
                  TOP DEFINITION
              ============================================ */}

              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                    What is Private Label?
                  </span>

                  <p className="mt-3 max-w-[650px] text-[15px] font-medium leading-[1.7] text-[#E3ECE7] sm:text-[16px]">
                    Launch personal care products under{" "}
                    <strong className="font-bold text-white">
                      your own brand name
                    </strong>{" "}
                    without managing the complete manufacturing process
                    yourself.
                  </p>
                </div>

                {/* ROTATING TECH MARK */}

                <div
                  className="
                    relative
                    hidden
                    h-[68px]
                    w-[68px]
                    items-center
                    justify-center
                    sm:flex
                  "
                >
                  <div className="bp-rotate absolute inset-0 rounded-full border border-dashed border-[#6AA78F]/45" />

                  <div className="absolute inset-[9px] rounded-full border border-white/10" />

                  <Factory
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#8BC8B3]"
                  />
                </div>
              </div>

              {/* ===========================================
                  ROUTE VISUAL
              ============================================ */}

              <div className="relative mt-6 hidden h-[55px] overflow-hidden sm:block">
                <svg
                  viewBox="0 0 410 110"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    d="M4 55 C80 5 130 105 205 55 S330 5 405 55"
                    fill="none"
                    stroke="rgba(139,200,179,.22)"
                    strokeWidth="1.5"
                    strokeDasharray="5 6"
                  />
                </svg>

                <span
                  className="
                    bp-travel
                    absolute
                    left-0
                    top-0
                    h-[8px]
                    w-[8px]
                    rounded-full
                    bg-orange-500
                    shadow-[0_0_15px_rgba(249,115,22,.75)]
                  "
                />

                <span className="absolute left-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#8BC8B3]" />

                <span className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8BC8B3]" />

                <span className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#8BC8B3]" />
              </div>

              {/* ===========================================
                  PROCESS — NOT REGULAR CARDS
              ============================================ */}

              <div
                className="
                  mt-6
                  grid
                  border-t
                  border-white/10
                  sm:mt-2
                  sm:grid-cols-3
                "
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.no}
                      className={`
                        group
                        relative
                        py-5
                        sm:px-5
                        sm:py-4
                        ${index === 0 ? "sm:pl-0" : ""}
                        ${
                          index < steps.length - 1
                            ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                            : ""
                        }
                      `}
                    >
                      {/* NUMBER */}

                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold tracking-[0.18em] text-orange-400">
                          {step.no}
                        </span>

                        <Icon
                          size={17}
                          strokeWidth={1.6}
                          className="text-[#8BC8B3] transition-transform duration-300 group-hover:-translate-y-[2px]"
                        />
                      </div>

                      {/* NAME */}

                      <h3 className="mt-3 text-[18px] font-bold leading-[1.15] text-white">
                        {step.title}
                        <span className="block text-[#8BC8B3]">
                          {step.sub}
                        </span>
                      </h3>

                      <p className="mt-2 max-w-[190px] text-[12px] font-medium leading-[1.6] text-[#C9D7D0]">
                        {step.text}
                      </p>

                      {/* BOTTOM ACTIVE LINE */}

                      <span
                        className="
                          absolute
                          bottom-0
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
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM BLUEPRINT STRIP
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              border-t
              border-white/10
              px-5
              py-3
              sm:px-7
              lg:px-9
            "
          >
            {[
              "Product Selection",
              "Formulation",
              "Packaging",
              "Branding",
              "Bulk Manufacturing",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-2">
                  <Check
                    size={11}
                    strokeWidth={2.4}
                    className="text-[#8BC8B3]"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#DCE6E1]">
                    {item}
                  </span>
                </div>

                {index < 4 && (
                  <span className="hidden h-[3px] w-[3px] rounded-full bg-orange-500 sm:block" />
                )}
              </React.Fragment>
            ))}

            <ArrowUpRight
              size={14}
              className="ml-auto hidden text-orange-400 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelIntro;