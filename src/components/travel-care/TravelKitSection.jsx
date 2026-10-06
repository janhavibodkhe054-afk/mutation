import React from "react";
import {
  ArrowUpRight,
  Check,
  Building2,
  BriefcaseBusiness,
  Plane,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TravelKitSection = () => {
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate("/contact", {
      state: {
        requirement: "travel-care",
        product: "Travel Care Kit – 4-in-1",
      },
    });
  };

  const kitItems = [
    {
      no: "01",
      name: "Soap",
      text: "A practical bathing essential for everyday hygiene.",
    },
    {
      no: "02",
      name: "Shampoo",
      text: "Hair cleansing care packed as part of the travel kit.",
    },
    {
      no: "03",
      name: "Face Wash",
      text: "A convenient facial cleansing essential for travel use.",
    },
    {
      no: "04",
      name: "Body Wash",
      text: "An easy-to-carry body cleansing option for personal care.",
    },
  ];

  return (
    <section
      id="travel-kits"
      className="relative overflow-hidden bg-white"
    >
      <style>{`
        @keyframes travelKitFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes travelDotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .45;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .travel-kit-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-[34%] bg-[#F3F6F3]" />

        <div className="absolute -left-[180px] top-[100px] h-[420px] w-[420px] rounded-full border border-[#438D76]/10" />

        <div className="absolute right-[6%] top-0 h-[75px] w-px bg-orange-500/25" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[38px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600">
                Curated Travel Care Kits
              </span>
            </div>

            <h2 className="mt-5 max-w-[600px] text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D2D27] sm:text-[40px] lg:text-[45px]">
              Compact Essentials for
              <span className="block text-[#438D76]">
                Convenient Travel.
              </span>
            </h2>
          </div>

          <p className="max-w-[610px] text-[15px] font-medium leading-[1.8] text-[#59645E] sm:text-[16px] lg:justify-self-end">
            Compact personal care essentials packed for travel, hospitality
            and business requirements.
          </p>
        </div>

        {/* =====================================================
            MAIN PRODUCT AREA
        ====================================================== */}
        <div className="grid overflow-hidden border border-[#DDE1DE] bg-[#FCFBF8] lg:grid-cols-[0.9fr_1.1fr]">
          {/* =================================================
              IMAGE SIDE
          ================================================= */}
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#EAF0EC] px-6 py-10 sm:min-h-[520px] sm:px-10 lg:min-h-[620px]">
            {/* Large number */}
            <span
              aria-hidden="true"
              className="absolute left-5 top-2 text-[110px] font-bold leading-none tracking-[-0.08em] text-[#438D76]/[0.06] sm:text-[150px]"
            >
              4
            </span>

            {/* Image circle */}
            <div className="absolute h-[310px] w-[310px] rounded-full border border-[#438D76]/15 sm:h-[410px] sm:w-[410px]" />

            <div className="absolute h-[235px] w-[235px] rounded-full bg-white/55 sm:h-[320px] sm:w-[320px]" />

            {/* Product Image */}
            <img
              src="/travel-hero.webp"
              alt="Mutation Dermacare Travel Care Kit 4-in-1"
              className="travel-kit-motion relative z-10 max-h-[360px] w-full max-w-[480px] object-contain drop-shadow-[0_28px_28px_rgba(35,60,49,0.16)] sm:max-h-[450px]"
              style={{
                animation: "travelKitFloat 6s ease-in-out infinite",
              }}
            />

            {/* 4-in-1 label */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#1D2D27] px-5 py-4 sm:bottom-8 sm:left-8">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-orange-400">
                Travel Care Kit
              </span>

              <span className="mt-1 block text-[20px] font-bold text-white">
                4-in-1
              </span>
            </div>
          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}
          <div className="flex flex-col p-6 sm:p-9 lg:p-11 xl:p-12">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="travel-kit-motion h-[7px] w-[7px] rounded-full bg-orange-500"
                  style={{
                    animation: "travelDotPulse 2.6s ease-in-out infinite",
                  }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#718078]">
                  One Kit · Four Essentials
                </span>
              </div>

              <h3 className="mt-4 text-[27px] font-bold leading-[1.15] tracking-[-0.035em] text-[#1D2D27] sm:text-[31px]">
                Travel Care Kit –{" "}
                <span className="text-[#438D76]">4-in-1</span>
              </h3>

              {/* Kit Items */}
              <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {kitItems.map((item) => (
                  <div
                    key={item.no}
                    className="group border-t border-[#D7DDD9] py-5"
                  >
                    <div className="flex gap-4">
                      <span className="pt-[2px] text-[10px] font-bold tracking-[0.14em] text-orange-600">
                        {item.no}
                      </span>

                      <div>
                        <h4 className="text-[16px] font-bold text-[#24342C] transition-colors duration-300 group-hover:text-[#438D76]">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-[13px] font-medium leading-[1.65] text-[#69746E]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===============================================
                USE CASES
            ================================================ */}
            <div className="mt-5 border-y border-[#D7DDD9] py-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#78847D]">
                Suitable For
              </span>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
                <div className="flex items-center gap-2">
                  <Plane
                    size={15}
                    strokeWidth={1.8}
                    className="text-orange-500"
                  />

                  <span className="text-[12px] font-bold text-[#3D4C44]">
                    Travel Companies
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Building2
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#438D76]"
                  />

                  <span className="text-[12px] font-bold text-[#3D4C44]">
                    Hospitality
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <BriefcaseBusiness
                    size={15}
                    strokeWidth={1.8}
                    className="text-orange-500"
                  />

                  <span className="text-[12px] font-bold text-[#3D4C44]">
                    Business Requirements
                  </span>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-6 flex items-start gap-3">
              <span className="mt-[3px] flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#E5EFEA]">
                <Check
                  size={12}
                  strokeWidth={2.5}
                  className="text-[#438D76]"
                />
              </span>

              <p className="text-[14px] font-medium leading-[1.7] text-[#5C6962]">
                A single kit brings together four personal care essentials,
                making it suitable for organised distribution across travel
                and hospitality requirements.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={handleEnquiry}
                className="group inline-flex min-h-[54px] items-center justify-center gap-5 bg-orange-500 px-7 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#438D76] sm:px-8"
              >
                Enquire About This Kit

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
        </div>

        {/* =====================================================
            SIMPLE PRODUCT SUMMARY
        ====================================================== */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {["Soap", "Shampoo", "Face Wash", "Body Wash"].map(
            (item, index) => (
              <React.Fragment key={item}>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#647169]">
                  {item}
                </span>

                {index !== 3 && (
                  <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TravelKitSection;