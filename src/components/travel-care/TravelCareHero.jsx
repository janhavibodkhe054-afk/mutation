import React from "react";
import {
  ArrowUpRight,
  Plane,
  PackageCheck,
  MoveRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TravelCareHero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    document
      .getElementById("travel-kits")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuote = () => {
    navigate("/contact", {
      state: {
        requirement: "travel-care",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F3ED]">
      <style>{`
        @keyframes kitFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes planeMove {
          0% {
            transform: translateX(0px) translateY(0px) rotate(8deg);
          }
          50% {
            transform: translateX(12px) translateY(-7px) rotate(8deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) rotate(8deg);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(750%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .travel-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large soft circle */}
        <div
          className="
            absolute
            -right-[130px]
            top-[-120px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#E4ECE7]
            sm:right-[-70px]
            lg:right-[2%]
            lg:top-[-170px]
            lg:h-[760px]
            lg:w-[760px]
          "
        />

        {/* Circle outline */}
        <div
          className="
            absolute
            right-[4%]
            top-[10%]
            hidden
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-[#438D76]/15
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[10%]
            top-[19%]
            hidden
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#438D76]/10
            lg:block
          "
        />

        {/* Left line */}
        <div className="absolute left-[7%] top-0 h-[75px] w-px bg-orange-500/30" />

        {/* bottom line */}
        <div className="absolute bottom-[12%] left-0 hidden h-px w-[22%] bg-[#D8D6CF] lg:block" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          grid
          min-h-[600px]
          max-w-[1480px]
          items-center
          gap-8
          px-5
          py-14
          sm:px-7
          sm:py-16
          lg:grid-cols-[0.82fr_1.18fr]
          lg:gap-4
          lg:px-10
          lg:py-10
          xl:px-14
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}
        <div className="relative z-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

            <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-orange-600">
              Travel Care Solutions
            </span>

            <span className="h-px w-[42px] bg-[#B9C3BD]" />
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              max-w-[620px]
              text-[43px]
              font-bold
              leading-[1]
              tracking-[-0.05em]
              text-[#1B2922]
              sm:text-[51px]
              md:text-[57px]
              lg:text-[62px]
            "
          >
            Travel Care
            <span className="block text-[#438D76]">
              Kits.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[560px]
              text-[15px]
              font-medium
              leading-[1.85]
              text-[#59645E]
              sm:text-[16px]
            "
          >
            Essential personal care products packed together for comfortable,
            convenient and hassle-free travel.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleExplore}
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-4
                bg-orange-500
                px-7
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                transition-all
                duration-300
                hover:bg-[#438D76]
              "
            >
              Explore Travel Kits

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>

            <button
              type="button"
              onClick={handleQuote}
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-4
                border
                border-[#AEBAB3]
                bg-transparent
                px-7
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#26342D]
                transition-all
                duration-300
                hover:border-[#438D76]
                hover:bg-[#438D76]
                hover:text-white
              "
            >
              Get Bulk Quote

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>

          {/* Feature Strip */}
          <div
            className="
              mt-10
              flex
              max-w-[570px]
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              border-t
              border-[#D5DAD7]
              pt-5
            "
          >
            <div className="flex items-center gap-2">
              <Plane
                size={15}
                strokeWidth={1.8}
                className="text-orange-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#59665F]">
                Travel Friendly
              </span>
            </div>

            <span className="hidden h-[4px] w-[4px] rounded-full bg-[#438D76] sm:block" />

            <div className="flex items-center gap-2">
              <PackageCheck
                size={15}
                strokeWidth={1.8}
                className="text-[#438D76]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#59665F]">
                Compact Care
              </span>
            </div>

            <span className="hidden h-[4px] w-[4px] rounded-full bg-orange-500 sm:block" />

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#59665F]">
              Bulk Supply
            </span>
          </div>
        </div>

        {/* =================================================
            RIGHT PRODUCT SHOWCASE
        ================================================= */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[400px]
            items-center
            justify-center
            sm:min-h-[480px]
            lg:min-h-[560px]
          "
        >
          {/* Travel route */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block"
          >
            {/* Route Line */}
            <svg
              viewBox="0 0 700 500"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M80 365 C160 250, 230 390, 320 260 C405 140, 500 180, 610 80"
                stroke="#8FA89D"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                opacity="0.55"
              />
            </svg>

            {/* start dot */}
            <span className="absolute bottom-[28%] left-[11%] h-[9px] w-[9px] rounded-full border-2 border-orange-500 bg-[#F7F3ED]" />

            {/* end dot */}
            <span className="absolute right-[10%] top-[12%] h-[9px] w-[9px] rounded-full border-2 border-[#438D76] bg-[#F7F3ED]" />

            {/* Plane */}
            <Plane
              size={25}
              strokeWidth={1.6}
              className="
                travel-motion
                absolute
                right-[18%]
                top-[20%]
                text-[#438D76]
              "
              style={{
                animation: "planeMove 5s ease-in-out infinite",
              }}
            />
          </div>

          {/* PRODUCT IMAGE */}
          <div
            className="
              travel-motion
              relative
              z-10
              flex
              h-[350px]
              w-full
              max-w-[610px]
              items-center
              justify-center
              sm:h-[440px]
              lg:h-[510px]
            "
            style={{
              animation: "kitFloat 6s ease-in-out infinite",
            }}
          >
            <img
              src="/travel-hero.jpg"
              alt="Mutation Dermacare Travel Care Kit"
              className="
                h-full
                w-full
                object-contain
                drop-shadow-[0_25px_30px_rgba(25,45,36,0.18)]
              "
            />
          </div>

          {/* ===============================================
              TOP LABEL
          ================================================ */}
          <div
            className="
              absolute
              right-[2%]
              top-[8%]
              z-20
              hidden
              items-center
              gap-3
              bg-white
              px-5
              py-4
              shadow-[0_15px_45px_rgba(32,52,43,0.08)]
              lg:flex
            "
          >
            <span
              className="travel-motion h-[7px] w-[7px] rounded-full bg-orange-500"
              style={{
                animation: "dotPulse 2.7s ease-in-out infinite",
              }}
            />

            <div>
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A857F]">
                Designed For
              </span>

              <span className="mt-1 block text-[13px] font-bold text-[#26342D]">
                Convenient Travel
              </span>
            </div>
          </div>

          {/* ===============================================
              BOTTOM TRAVEL LABEL
          ================================================ */}
          <div
            className="
              absolute
              bottom-[7%]
              left-[2%]
              z-20
              hidden
              min-w-[230px]
              bg-[#1C2B24]
              px-6
              py-5
              lg:block
            "
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-orange-400">
              Mutation Dermacare
            </span>

            <div className="mt-2 flex items-center justify-between gap-6">
              <span className="text-[15px] font-bold text-white">
                Care On The Go
              </span>

              <MoveRight
                size={19}
                strokeWidth={1.7}
                className="text-[#84BDA9]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ====================================================== */}
      <div className="relative h-[4px] overflow-hidden bg-[#438D76]">
        <span className="absolute inset-y-0 left-0 w-[24%] bg-orange-500" />

        <span
          className="travel-motion absolute inset-y-0 left-[24%] w-[75px] bg-[#7AB9A4]"
          style={{
            animation: "lineMove 7s linear infinite",
          }}
        />
      </div>
    </section>
  );
};

export default TravelCareHero;