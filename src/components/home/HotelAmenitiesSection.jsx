import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* =========================================================
   HOME PAGE — SELECTED HOTEL AMENITIES
========================================================= */

const amenities = [
  {
    name: "Hair Shampoo",
    image: "/hair-shampoo.webp",
  },
  {
    name: "Hair Conditioner",
    image: "/hair-conditioner.webp",
  },
  {
    name: "Shower Gel",
    image: "/shower-gell.webp",
  },
  {
    name: "Face Wash",
    image: "/face-wash.webp",
  },
  {
    name: "Hotel Dental Kit",
    image: "/dental-kit.png",
  },
  {
    name: "Hotel Disposable Slippers",
    image: "/slippers.png",
  },
];

const HotelAmenitiesSection = () => {
  // Duplicate items for seamless infinite slider
  const sliderItems = [...amenities, ...amenities];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-[72px]">
      <style>{`
        @keyframes hotelAmenitiesScroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .hotel-amenities-track {
          animation: hotelAmenitiesScroll 25s linear infinite;
          will-change: transform;
        }

        .hotel-amenities-slider:hover .hotel-amenities-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .hotel-amenities-track {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#BFC8C3]" />

            <span className="h-[7px] w-[7px] rounded-full bg-[#F07832]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C75D21] sm:text-[11px]">
              Hospitality Solutions
            </span>

            <span className="h-px w-8 bg-[#BFC8C3]" />
          </div>

          <h2
            className="
              mt-4
              text-[31px]
              font-extrabold
              leading-[1.12]
              tracking-[-0.035em]
              text-[#17251F]
              sm:text-[38px]
              lg:text-[44px]
            "
          >
            Complete Hotel Amenities for{" "}
            <span className="text-[#357A65]">
              Exceptional Guest Experiences
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[15px]
              font-medium
              leading-[1.7]
              text-[#4F5D56]
              sm:text-[16px]
            "
          >
            Explore essential hotel amenities designed to support a
            comfortable and complete guest experience.
          </p>
        </div>

        {/* =====================================================
            AUTO MOVING SLIDER
        ====================================================== */}

        <div className="hotel-amenities-slider relative mt-9 overflow-hidden sm:mt-11">

          {/* LEFT WHITE FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-[22px]
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-[50px]
            "
          />

          {/* RIGHT WHITE FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-[22px]
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-[50px]
            "
          />

          {/* =================================================
              SLIDER TRACK
          ================================================= */}

          <div className="hotel-amenities-track flex w-max">
            {sliderItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  w-[50vw]
                  shrink-0
                  px-[6px]
                  sm:w-[33.333vw]
                  sm:px-2
                  lg:w-[25vw]
                  lg:px-2.5
                  xl:w-[300px]
                "
              >
                <div className="group">

                  {/* =========================================
                      PRODUCT CARD
                  ========================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-[230px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-[#E3E8E5]
                      bg-white
                      transition-all
                      duration-500
                      group-hover:-translate-y-[4px]
                      group-hover:border-[#C9D6CF]
                      group-hover:shadow-[0_18px_40px_rgba(31,52,42,0.09)]
                      sm:h-[270px]
                      lg:h-[300px]
                    "
                  >
                    {/* SOFT INNER BACKGROUND */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[72%]
                        w-[72%]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#F6F7F5]
                        transition-all
                        duration-500
                        group-hover:scale-[1.06]
                        group-hover:bg-[#EFF4F1]
                      "
                    />

                    {/* TOP ACCENTS */}

                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="h-[7px] w-[7px] rounded-full bg-[#F07832]" />

                      <span className="h-[2px] w-[20px] rounded-full bg-[#438D76]" />
                    </div>

                    {/* PRODUCT IMAGE */}

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      draggable="false"
                      className="
                        relative
                        z-10
                        h-[84%]
                        w-[84%]
                        object-contain
                        p-3
                        drop-shadow-[0_12px_14px_rgba(28,45,37,0.10)]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:-translate-y-[4px]
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* HOVER LINE */}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        z-20
                        h-[3px]
                        w-0
                        -translate-x-1/2
                        bg-[#F07832]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </div>

                  {/* =========================================
                      PRODUCT INFORMATION
                  ========================================== */}

                  <div className="px-1 pt-4 text-center">
                    <span
                      className="
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[#357A65]
                      "
                    >
                      Hotel Amenities
                    </span>

                    <h3
                      className="
                        mt-1.5
                        text-[15px]
                        font-bold
                        leading-[1.35]
                        text-[#17251F]
                        transition-colors
                        duration-300
                        group-hover:text-[#C75D21]
                        sm:text-[16px]
                        lg:text-[17px]
                      "
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-9 flex flex-col items-center text-center sm:mt-10">

          {/* SMALL ACCENT */}

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#BEC9C3]" />

            <span className="h-[6px] w-[6px] rounded-full bg-[#438D76]" />

            <span className="h-[6px] w-[6px] rounded-full bg-[#F07832]" />

            <span className="h-px w-8 bg-[#BEC9C3]" />
          </div>

          <p
            className="
              text-[12px]
              font-semibold
              leading-[1.6]
              text-[#4F5D56]
              sm:text-[13px]
            "
          >
            Explore our complete range of hotel and hospitality essentials.
          </p>

          <Link
            to="/hotel-amenities"
            className="
              group
              mt-4
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#F07832]
              px-8
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.07em]
              text-white
              shadow-[0_10px_24px_rgba(240,120,50,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#357A65]
              hover:shadow-[0_14px_30px_rgba(53,122,101,0.18)]
            "
          >
            View All Hotel Amenities

            <ArrowRight
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotelAmenitiesSection;