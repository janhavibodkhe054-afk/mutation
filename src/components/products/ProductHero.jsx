import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductsHero = () => {
  const scrollToProducts = () => {
    document
      .getElementById("products-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = [
    "Hair Care",
    "Skin Care",
    "Face Care",
    "Bath Care",
    "Baby Care",
  ];

  return (
    <section className="relative overflow-hidden bg-[#14231D]">
      <style>{`
        @keyframes productFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.8;
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(750%);
          }
        }

        .products-hero-float {
          animation: productFloat 5.5s ease-in-out infinite;
        }

        .products-hero-glow {
          animation: glowPulse 5s ease-in-out infinite;
        }

        .products-hero-line {
          animation: lineMove 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .products-hero-float,
          .products-hero-glow,
          .products-hero-line {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* RIGHT DARK GREEN PANEL */}
        <div
          className="
            absolute
            bottom-0
            right-0
            top-0
            hidden
            w-[45%]
            bg-[#1C342A]
            lg:block
          "
        />

        {/* CENTER DIVIDER */}
        <div
          className="
            absolute
            bottom-0
            right-[45%]
            top-0
            hidden
            w-px
            bg-white/[0.06]
            lg:block
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            products-hero-glow
            absolute
            right-[7%]
            top-1/2
            h-[300px]
            w-[300px]
            -translate-y-1/2
            rounded-full
            bg-[#438D76]/20
            blur-[2px]
            sm:h-[340px]
            sm:w-[340px]
          "
        />

        {/* RIGHT OUTER CIRCLE */}
        <div
          className="
            absolute
            -right-[100px]
            -top-[170px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-white/[0.08]
          "
        />

        {/* LEFT CIRCLE */}
        <div
          className="
            absolute
            -bottom-[230px]
            -left-[160px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-orange-400/[0.10]
          "
        />

        {/* TOP ORANGE LINE */}
        <div className="absolute left-[7%] top-0 h-[52px] w-px bg-orange-400/70" />
      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10 xl:px-12">
        <div
          className="
            grid
            min-h-[400px]
            items-center
            gap-7
            py-9
            sm:min-h-[420px]
            sm:py-10
            lg:min-h-[440px]
            lg:grid-cols-[0.96fr_1.04fr]
            lg:gap-10
            lg:py-0
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="relative z-20 max-w-[650px]">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[34px] shrink-0 bg-orange-400" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-300
                  sm:text-[12px]
                "
              >
                Our Personal Care Products
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                mt-4
                max-w-[620px]
                text-[37px]
                font-bold
                leading-[1.04]
                tracking-[-0.04em]
                text-white
                sm:text-[43px]
                md:text-[47px]
                lg:text-[51px]
                xl:text-[54px]
              "
            >
              Everyday Care,
              <span className="block text-[#8BC8B3]">
                Made Better.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-[570px]
                text-[15px]
                font-medium
                leading-[1.75]
                text-[#E2EAE6]
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              Explore personal care products developed for everyday skincare,
              haircare, bath and hygiene requirements.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToProducts}
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-orange-500
                  px-7
                  text-[13px]
                  font-bold
                  text-white
                  shadow-[0_10px_28px_rgba(249,115,22,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-orange-600
                  hover:shadow-[0_14px_30px_rgba(249,115,22,0.26)]
                "
              >
                Explore Products

                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/40
                  bg-white/[0.04]
                  px-7
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-[#17251F]
                "
              >
                Get Bulk Quote

                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            
          </div>

          {/* =================================================
              RIGHT PRODUCT VISUAL
          ================================================= */}
          <div
            className="
              relative
              flex
              min-h-[300px]
              items-end
              justify-center
              sm:min-h-[330px]
              lg:min-h-[440px]
            "
          >
            {/* BACK CIRCLE */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                sm:h-[290px]
                sm:w-[290px]
                lg:h-[330px]
                lg:w-[330px]
              "
            />

            {/* SECOND CIRCLE */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#8BC8B3]/30
                sm:h-[325px]
                sm:w-[325px]
                lg:h-[365px]
                lg:w-[365px]
              "
            />

            {/* SMALL ORANGE DOT */}
            <span
              className="
                absolute
                right-[13%]
                top-[18%]
                h-[9px]
                w-[9px]
                rounded-full
                bg-orange-400
                shadow-[0_0_0_7px_rgba(251,146,60,0.10)]
              "
            />

            {/* SMALL GREEN DOT */}
            <span
              className="
                absolute
                bottom-[20%]
                right-[10%]
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#8BC8B3]
              "
            />

            {/* PRODUCT IMAGE */}
            <div
              className="
                products-hero-float
                relative
                z-10
                flex
                h-[295px]
                w-full
                max-w-[640px]
                items-end
                justify-center
                sm:h-[325px]
                lg:h-[415px]
              "
            >
              <img
                src="/product-hero.jpg"
                alt="Mutation Dermacare personal care product range"
                className="
                  h-full
                  w-full
                  object-contain
                  object-bottom
                  drop-shadow-[0_24px_22px_rgba(0,0,0,0.32)]
                "
              />
            </div>

            {/* PRODUCT INFO */}
            <div
              className="
                absolute
                bottom-[11%]
                left-[2%]
                z-20
                hidden
                border-l-[3px]
                border-orange-400
                bg-[#20382E]
                px-4
                py-3
                shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                md:block
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-orange-300
                "
              >
                Personal Care
              </span>

              <p
                className="
                  mt-1
                  text-[14px]
                  font-bold
                  text-white
                "
              >
                Everyday Essentials
              </p>
            </div>

            {/* RIGHT SMALL LABEL */}
            <div
              className="
                absolute
                right-[2%]
                top-[25%]
                z-20
                hidden
                items-center
                gap-2
                lg:flex
              "
            >
              <span className="h-[6px] w-[6px] rounded-full bg-orange-400" />

              
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ====================================================== */}
        <div className="flex items-center gap-4 pb-4">
          <span
            className="
              whitespace-nowrap
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#C9D7D0]
            "
          >
            Personal Care
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-white/15">
            <span
              className="
                products-hero-line
                absolute
                inset-y-0
                left-0
                w-[65px]
                bg-orange-400
              "
            />
          </div>

          <span
            className="
              hidden
              whitespace-nowrap
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#C9D7D0]
              sm:block
            "
          >
            Product Collection
          </span>
        </div>
      </div>

      {/* =====================================================
          BRAND ACCENT
      ====================================================== */}
      <div className="flex h-[4px]">
        <span className="w-[24%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default ProductsHero;