import React from "react";

const WhoWeAre = () => {
  const solutions = [
    {
      no: "01",
      title: "Personal Care",
      text: "Everyday personal care essentials.",
    },
    {
      no: "02",
      title: "Hotel Amenities",
      text: "Guest-care solutions for hospitality.",
    },
    {
      no: "03",
      title: "Travel Care Kits",
      text: "Compact care solutions for travel.",
    },
    {
      no: "04",
      title: "Private Label",
      text: "Solutions to build your own brand.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2]">
      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes moveLine {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(430%);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.6);
            opacity: 1;
          }
        }

        @keyframes rotateRing {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .who-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Circle */}
        <div
          className="
            who-motion
            absolute
            -right-[105px]
            -top-[105px]
            h-[230px]
            w-[230px]
            rounded-full
            border
            border-[#438D76]/10
          "
          style={{
            animation: "rotateRing 28s linear infinite",
          }}
        >
          <span className="absolute bottom-[35px] left-[40px] h-[7px] w-[7px] rounded-full bg-orange-500" />
        </div>

        {/* Background Text */}
        <span
          className="
            absolute
            bottom-[-25px]
            left-[3%]
            select-none
            text-[110px]
            font-black
            leading-none
            tracking-[-0.07em]
            text-[#1D2522]/[0.025]
            sm:text-[150px]
            lg:text-[185px]
          "
        >
          CARE
        </span>
      </div>

      {/* ================= MAIN ================= */}
      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-12
          sm:px-7
          sm:py-14
          lg:px-10
          lg:py-16
          xl:px-14
        "
      >
        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <div className="relative h-[2px] w-[38px] overflow-hidden bg-orange-500/25">
            <span
              className="
                who-motion
                absolute
                inset-y-0
                left-0
                w-[15px]
                bg-orange-500
              "
              style={{
                animation: "moveLine 3s linear infinite",
              }}
            />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-[12px]">
            Who We Are
          </span>
        </div>

        {/* ================= TWO COLUMN ================= */}
        <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2
              className="
                max-w-[650px]
                text-[34px]
                font-bold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#1D2522]
                sm:text-[40px]
                md:text-[44px]
                lg:text-[47px]
              "
            >
              More Than Products.
              <span className="block text-[#438D76]">
                We Build Solutions.
              </span>
            </h2>

            {/* Accent */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-[48px] bg-orange-500" />

              <span
                className="
                  who-motion
                  h-[6px]
                  w-[6px]
                  rounded-full
                  bg-[#438D76]
                "
                style={{
                  animation: "pulseDot 2.5s ease-in-out infinite",
                }}
              />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[16px] font-medium leading-[1.75] text-[#37413C] sm:text-[17px]">
              Mutation Dermacare is a personal care and B2B solutions company
              focused on delivering quality products for everyday consumers,
              hospitality businesses, brands and organisations.
            </p>

            <p className="mt-4 max-w-[650px] text-[15px] leading-[1.8] text-[#59625D] sm:text-[16px]">
              From personal care essentials to hotel amenities, travel care
              kits and private label manufacturing, we help businesses find
              practical and reliable solutions under one roof.
            </p>

            {/* Small Signature */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#D9D5CE] pt-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#438D76]">
                Personal Care
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#438D76]">
                Hospitality
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#438D76]">
                B2B
              </span>
            </div>
          </div>

          {/* ================= RIGHT SOLUTIONS ================= */}
          <div className="border-t border-[#D6D2CB] lg:border-l lg:border-t-0 lg:pl-9 xl:pl-11">
            
            <div className="flex items-center justify-between border-b border-[#D6D2CB] py-3 lg:pt-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7C847F]">
                What We Do
              </span>

              <span className="text-[11px] font-semibold text-orange-500">
                04 Solutions
              </span>
            </div>

            {solutions.map((item) => (
              <div
                key={item.no}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  border-b
                  border-[#D6D2CB]
                  py-[17px]
                "
              >
                {/* Hover Background */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/70
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-0
                  "
                />

                {/* Number */}
                <span
                  className="
                    relative
                    z-10
                    w-[28px]
                    shrink-0
                    text-[11px]
                    font-bold
                    text-orange-500
                  "
                >
                  {item.no}
                </span>

                {/* Text */}
                <div className="relative z-10 min-w-0 flex-1">
                  <h3
                    className="
                      text-[16px]
                      font-bold
                      leading-tight
                      text-[#26312C]
                      transition-colors
                      duration-300
                      group-hover:text-[#438D76]
                      sm:text-[17px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.5] text-[#737B77] sm:text-[14px]">
                    {item.text}
                  </p>
                </div>

                {/* Right Detail */}
                <div className="relative z-10 flex shrink-0 items-center">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#438D76]" />

                  <span
                    className="
                      ml-2
                      h-px
                      w-5
                      bg-[#BFC4C0]
                      transition-all
                      duration-300
                      group-hover:w-9
                      group-hover:bg-orange-500
                    "
                  />
                </div>

                {/* Bottom orange hover line */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-20
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
        </div>
      </div>

      {/* ================= BOTTOM ACCENT ================= */}
      <div className="relative h-[3px] overflow-hidden bg-[#DFDCD6]">
        <span
          className="
            who-motion
            absolute
            inset-y-0
            left-0
            w-[16%]
            bg-orange-500
          "
          style={{
            animation: "moveLine 7s linear infinite",
          }}
        />
      </div>
    </section>
  );
};

export default WhoWeAre;