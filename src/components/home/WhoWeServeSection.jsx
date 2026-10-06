import React from "react";
import {
  Hotel,
  Plane,
  Sparkles,
  Rocket,
  Network,
  Building2,
} from "lucide-react";

const businesses = [
  {
    no: "01",
    icon: Hotel,
    title: "Hotels & Resorts",
    description:
      "Premium guest-care amenities and hospitality solutions.",
    tone: "green",
  },
  {
    no: "02",
    icon: Plane,
    title: "Travel Companies",
    description:
      "Travel-friendly personal care kits designed for tours and journeys.",
    tone: "orange",
  },
  {
    no: "03",
    icon: Sparkles,
    title: "Cosmetic Brands",
    description:
      "Private label and custom product solutions for skincare and personal care brands.",
    tone: "orange",
  },
  {
    no: "04",
    icon: Rocket,
    title: "Startups",
    description:
      "Product, branding and manufacturing support for emerging businesses.",
    tone: "green",
  },
  {
    no: "05",
    icon: Network,
    title: "Distributors",
    description:
      "Bulk supply solutions for distribution requirements.",
    tone: "green",
  },
  {
    no: "06",
    icon: Building2,
    title: "Corporate Businesses",
    description:
      "Customised personal care solutions for organisational requirements.",
    tone: "orange",
  },
];

const WhoWeServeSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0]">
      <style>{`
        @keyframes servePulse {
          0%, 100% {
            transform: scale(1);
            opacity: .45;
          }
          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        @keyframes hubFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes lineTravel {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(700%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .serve-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-[22%] bg-[#EDF2EE]" />

        <div className="absolute right-0 top-0 h-full w-[8%] bg-[#FFF4EA]" />

        <div className="absolute -left-[160px] bottom-[-170px] h-[390px] w-[390px] rounded-full border border-[#438D76]/10" />

        <div className="absolute -right-[150px] top-[-160px] h-[350px] w-[350px] rounded-full border border-orange-500/10" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 xl:px-14">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-5 border-b border-[#CED7D2] pb-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[32px] bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-[11px]">
                Who We Serve
              </span>
            </div>
          </div>

          <h2 className="max-w-[700px] text-[31px] font-bold leading-[1.08] tracking-[-0.04em] text-[#17251F] sm:text-[38px] lg:text-[43px]">
            Care Solutions for{" "}
            <span className="text-[#438D76]">
              Growing Businesses.
            </span>
          </h2>
        </div>

        {/* =====================================================
            DESKTOP ECOSYSTEM
        ====================================================== */}
        <div className="relative mt-9 hidden lg:block">

          {/* horizontal guides */}
          <div className="absolute left-[9%] right-[9%] top-[50%] h-px bg-[#C9D2CD]" />

          <div className="grid grid-cols-[1fr_250px_1fr] gap-x-8 xl:grid-cols-[1fr_270px_1fr] xl:gap-x-12">

            {/* LEFT 3 */}
            <div className="space-y-3">
              {businesses.slice(0, 3).map((item, index) => (
                <BusinessRow
                  key={item.no}
                  item={item}
                  side="left"
                  index={index}
                />
              ))}
            </div>

            {/* CENTER HUB */}
            <div className="relative flex items-center justify-center">

              {/* Vertical connector */}
              <div className="absolute bottom-[8%] top-[8%] left-1/2 w-px -translate-x-1/2 bg-[#CBD4CF]" />

              <div
                className="serve-motion relative z-10 flex h-[225px] w-[225px] flex-col items-center justify-center rounded-full border-[8px] border-[#F8F5F0] bg-[#1C2D25] text-center shadow-[0_20px_50px_rgba(30,50,41,0.14)] xl:h-[245px] xl:w-[245px]"
                style={{
                  animation: "hubFloat 5s ease-in-out infinite",
                }}
              >
                {/* outer fine ring */}
                <span className="absolute -inset-[15px] rounded-full border border-dashed border-[#438D76]/30" />

                <span className="absolute -left-[18px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border-[3px] border-[#F8F5F0] bg-orange-500" />

                <span className="absolute -right-[18px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border-[3px] border-[#F8F5F0] bg-[#438D76]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-orange-400">
                  Mutation
                </span>

                <span className="mt-1 text-[27px] font-bold tracking-[-0.04em] text-white">
                  Dermacare
                </span>

                <div className="my-4 flex items-center gap-2">
                  <span className="h-[3px] w-[34px] bg-[#6CAF95]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-orange-400" />
                  <span className="h-[3px] w-[34px] bg-[#6CAF95]" />
                </div>

                <span className="max-w-[145px] text-[10px] font-bold uppercase leading-[1.6] tracking-[0.13em] text-[#BFD0C7]">
                  Business Care Solutions
                </span>
              </div>
            </div>

            {/* RIGHT 3 */}
            <div className="space-y-3">
              {businesses.slice(3, 6).map((item, index) => (
                <BusinessRow
                  key={item.no}
                  item={item}
                  side="right"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE + TABLET
        ====================================================== */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden">
          {businesses.map((item) => {
            const Icon = item.icon;
            const isOrange = item.tone === "orange";

            return (
              <div
                key={item.no}
                className="group relative overflow-hidden border border-[#D4DDD8] bg-white p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-[10px] font-bold tracking-[0.17em] ${
                      isOrange
                        ? "text-orange-600"
                        : "text-[#438D76]"
                    }`}
                  >
                    {item.no}
                  </span>

                  <div
                    className={`flex h-[42px] w-[42px] items-center justify-center rounded-full ${
                      isOrange
                        ? "bg-orange-50 text-orange-600"
                        : "bg-[#EDF4F0] text-[#438D76]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-5 text-[19px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2D27]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.7] text-[#59665F]">
                  {item.description}
                </p>

                <span
                  className={`absolute bottom-0 left-0 h-[3px] w-[45px] ${
                    isOrange ? "bg-orange-500" : "bg-[#438D76]"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-[#CED7D2] pt-6">
          {[
            "Hospitality",
            "Travel",
            "Cosmetic Brands",
            "Startups",
            "Distribution",
            "Corporate",
          ].map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#66736C]">
                {item}
              </span>

              {index !== 5 && (
                <span
                  className={`h-[5px] w-[5px] rounded-full ${
                    index % 2 === 0
                      ? "bg-orange-500"
                      : "bg-[#438D76]"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* moving line */}
        <div className="relative mx-auto mt-5 h-px max-w-[460px] overflow-hidden bg-[#D4DAD7]">
          <span
            className="serve-motion absolute inset-y-0 left-0 w-[65px] bg-orange-500"
            style={{
              animation: "lineTravel 7s linear infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   DESKTOP BUSINESS ROW
========================================================= */

const BusinessRow = ({ item, side, index }) => {
  const Icon = item.icon;
  const isOrange = item.tone === "orange";

  return (
    <div
      className={`
        group relative
        min-h-[145px]
        overflow-hidden
        border border-[#D4DCD7]
        bg-white
        transition-all duration-300
        hover:border-[#BAC9C0]
        hover:shadow-[0_12px_30px_rgba(31,52,42,0.07)]

        ${
          side === "left"
            ? index === 1
              ? "mr-0"
              : "mr-7 xl:mr-10"
            : index === 1
            ? "ml-0"
            : "ml-7 xl:ml-10"
        }
      `}
    >
      <div
        className={`
          flex h-full items-center gap-5 p-5 xl:p-6
          ${side === "left" ? "flex-row-reverse text-right" : ""}
        `}
      >
        {/* ICON */}
        <div
          className={`
            flex h-[50px] w-[50px]
            shrink-0 items-center justify-center
            rounded-full
            transition-all duration-300
            ${
              isOrange
                ? "bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white"
                : "bg-[#EDF4F0] text-[#438D76] group-hover:bg-[#438D76] group-hover:text-white"
            }
          `}
        >
          <Icon size={19} strokeWidth={1.7} />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <div
            className={`flex items-center gap-3 ${
              side === "left" ? "justify-end" : ""
            }`}
          >
            <span
              className={`text-[9px] font-bold tracking-[0.18em] ${
                isOrange
                  ? "text-orange-600"
                  : "text-[#438D76]"
              }`}
            >
              {item.no}
            </span>

            <span
              className={`h-[2px] w-[24px] transition-all duration-500 group-hover:w-[42px] ${
                isOrange
                  ? "bg-orange-500"
                  : "bg-[#438D76]"
              }`}
            />
          </div>

          <h3 className="mt-2 text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1D2D27] xl:text-[19px]">
            {item.title}
          </h3>

          <p
            className={`mt-2 max-w-[350px] text-[14px] font-medium leading-[1.6] text-[#59665F] ${
              side === "left" ? "ml-auto" : ""
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* connector edge */}
      <span
        className={`
          absolute top-1/2 h-px w-[20px]
          -translate-y-1/2
          bg-[#AFC0B7]
          ${
            side === "left"
              ? "-right-[20px]"
              : "-left-[20px]"
          }
        `}
      />

      {/* bottom accent */}
      <span
        className={`
          absolute bottom-0 h-[3px] w-0
          transition-all duration-500
          group-hover:w-[80px]
          ${
            side === "left"
              ? "right-0"
              : "left-0"
          }
          ${
            isOrange
              ? "bg-orange-500"
              : "bg-[#438D76]"
          }
        `}
      />
    </div>
  );
};

export default WhoWeServeSection;