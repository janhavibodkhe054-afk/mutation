import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF9] -mt-10">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10 xl:px-12">
        <div
          className="
            grid
            min-h-[650px]
            grid-cols-1
            items-center
            gap-12
            py-14
            lg:min-h-[690px]
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            lg:py-16
            xl:min-h-[720px]
            xl:gap-20
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="max-w-[680px]">
            {/* SMALL HEADING */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-[25px] bg-[#F07832]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#438D76]
                  sm:text-[11px]
                "
              >
                Personal Care • Hospitality • Private Label
              </p>
            </div>

            {/* MAIN HEADING */}

            <h1
  className="
    max-w-[650px]
    text-[36px]
    font-bold
    leading-[1.10]
    tracking-[-0.03em]
    text-[#1D2D27]
    sm:text-[42px]
    md:text-[48px]
    lg:text-[46px]
    xl:text-[52px]
    2xl:text-[56px]
  "
>
  Quality Care Products
 
    Trusted Business Solutions
 
  Built for Your Brand
</h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[625px]
                text-[15px]
                leading-[1.75]
                text-[#4F5955]
                sm:text-[16px]
                xl:text-[17px]
              "
            >
              From everyday personal care to hotel amenities, travel kits and
              private label manufacturing, Mutation Dermacare delivers
              dependable solutions for consumers, brands and businesses.
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  min-h-[55px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#55A58D]
                  px-8
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#438D76]
                  hover:shadow-[0_10px_25px_rgba(67,141,118,0.22)]
                "
              >
                Explore Our Products
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[55px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#438D76]
                  bg-transparent
                  px-8
                  text-[13px]
                  font-semibold
                  text-[#315F51]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#438D76]
                  hover:text-white
                "
              >
                Get a B2B Quote
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}

          <div className="relative flex w-full items-center justify-center lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[700px]
                overflow-hidden
                rounded-[22px]
                bg-[#EDF4F0]
                shadow-[0_20px_55px_rgba(31,64,53,0.12)]
              "
            >
              {/* PRODUCT IMAGE */}

              <img
                src="/hero1.webp"
                alt="Mutation Dermacare Products"
                className="
                  h-[350px]
                  w-full
                  object-cover
                  object-center
                  sm:h-[430px]
                  lg:h-[440px]
                  xl:h-[480px]
                "
              />

              {/* =====================
                  SUBTLE GRADIENT
              ====================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#438D76]/10
                  via-transparent
                  to-transparent
                "
              />

              {/* =====================
                  SMALL BRAND LABEL
              ====================== */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-[12px]
                  border
                  border-white/70
                  bg-white/90
                  px-4
                  py-3
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  backdrop-blur-md
                  sm:bottom-6
                  sm:left-6
                "
              >
                <span
                  className="
                    block
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#F07832]
                  "
                >
                  Mutation Dermacare
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[12px]
                    font-semibold
                    text-[#263A33]
                  "
                >
                  Care • Quality • Trust
                </span>
              </div>
            </div>

            {/* ORANGE DECORATION */}

            <div
              className="
                absolute
                -right-[9px]
                top-[50px]
                hidden
                h-[85px]
                w-[5px]
                rounded-full
                bg-[#F07832]
                lg:block
              "
            />

            {/* GREEN DECORATION */}

            <div
              className="
                absolute
                -bottom-[14px]
                left-[8%]
                hidden
                h-[55px]
                w-[55px]
                rounded-full
                border
                border-[#438D76]/30
                lg:block
              "
            />
          </div>
        </div>
      </div>

      {/* ===================================
          BOTTOM ACCENT LINE
      ==================================== */}

      <div className="flex h-[4px] w-full">
        <div className="w-[70%] bg-[#438D76]" />
        <div className="w-[30%] bg-[#F07832]" />
      </div>
    </section>
  );
};

export default HeroSection;
