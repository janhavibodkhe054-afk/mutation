import React from "react";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    no: "01",
    name: "Shampoo",
    description: "Gentle hair cleansing solutions for everyday care.",
    type: "Hair Care",
  },
  {
    no: "02",
    name: "Conditioner",
    description: "Nourishing formulas designed for soft, smooth hair.",
    type: "Hair Care",
  },
  {
    no: "03",
    name: "Shower Gel",
    description: "Refreshing body cleansing formulas.",
    type: "Bath Care",
  },
  {
    no: "04",
    name: "Face Wash",
    description: "Facial cleansing solutions for healthy-looking skin.",
    type: "Face Care",
  },
  {
    no: "05",
    name: "Moisturiser",
    description: "Hydrating skincare formulas for soft and nourished skin.",
    type: "Skin Care",
  },
  {
    no: "06",
    name: "Lotion",
    description:
      "Lightweight body care formulas for lasting moisturisation.",
    type: "Body Care",
  },
  {
    no: "07",
    name: "Hair Oil",
    description: "Nourishing hair oils crafted for complete hair care.",
    type: "Hair Care",
  },
  {
    no: "08",
    name: "Soap",
    description: "Cleansing bars developed for everyday personal care.",
    type: "Bath Care",
  },
  {
    no: "09",
    name: "Face Gel",
    description: "Lightweight gel-based skincare formulas.",
    type: "Face Care",
  },
  {
    no: "10",
    name: "Baby Care",
    description:
      "Mild and gentle formulations specially made for baby care.",
    type: "Baby Care",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const PrivateLabelManufacturing = () => {
  /*
   * Products duplicated only for seamless infinite movement.
   * No backend / click / enquiry functionality.
   */
  const sliderProducts = [...products, ...products];

  return (
    <section
      id="manufacturing-range"
      className="relative overflow-hidden bg-[#F5F1EB]"
    >
      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`
        @keyframes manufacturingMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes manufacturingPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.45);
          }
        }

        @keyframes manufacturingLine {
          0%, 100% {
            transform: scaleX(0.55);
            opacity: 0.45;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .manufacturing-track {
          width: max-content;
          animation: manufacturingMarquee 52s linear infinite;
          will-change: transform;
        }

        .manufacturing-slider:hover .manufacturing-track {
          animation-play-state: paused;
        }

        .manufacturing-pulse {
          animation: manufacturingPulse 2.8s ease-in-out infinite;
        }

        .manufacturing-line {
          transform-origin: left center;
          animation: manufacturingLine 4s ease-in-out infinite;
        }

        @media (max-width: 767px) {
          .manufacturing-track {
            animation-duration: 38s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .manufacturing-track,
          .manufacturing-pulse,
          .manufacturing-line {
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
        {/* LEFT CIRCLE */}
        <div
          className="
            absolute
            -left-[170px]
            -top-[190px]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-[#438D76]/10
            sm:h-[430px]
            sm:w-[430px]
          "
        />

        {/* RIGHT CIRCLE */}
        <div
          className="
            absolute
            -right-[180px]
            bottom-[-210px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-orange-500/10
            sm:h-[460px]
            sm:w-[460px]
          "
        />

        {/* TOP VERTICAL LINE */}
        <div className="absolute left-[8%] top-0 h-[55px] w-px bg-orange-500/20" />

        {/* RIGHT VERTICAL LINE */}
        <div className="absolute right-[11%] top-0 hidden h-[90px] w-px bg-[#438D76]/15 lg:block" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          pt-14
          sm:px-7
          sm:pt-16
          lg:px-10
          lg:pt-[76px]
          xl:px-14
        "
      >
        <div
          className="
            grid
            items-end
            gap-7
            border-b
            border-[#D6DCD8]
            pb-8
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-14
            lg:pb-10
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            {/* EYEBROW */}

            <div className="flex items-center gap-3">
              <span className="h-px w-[30px] bg-[#AAB6B0] sm:w-[38px]" />

              <span className="manufacturing-pulse h-[7px] w-[7px] rounded-full bg-orange-500" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-orange-600
                  sm:text-[11px]
                "
              >
                Manufacturing Range
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-4
                max-w-[720px]
                text-[32px]
                font-bold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#1D2D27]
                sm:text-[39px]
                lg:text-[45px]
                xl:text-[48px]
              "
            >
              What We Can{" "}
              <span className="text-[#438D76]">
                Manufacture
              </span>
            </h2>
          </div>

          {/* =================================================
              RIGHT DESCRIPTION
          ================================================= */}

          <div className="lg:pb-1">
            <div className="manufacturing-line mb-4 h-[2px] w-[48px] bg-orange-500" />

            <p
              className="
                max-w-[570px]
                text-[15px]
                font-medium
                leading-[1.75]
                text-[#59665F]
                sm:text-[16px]
              "
            >
              Choose from a wide range of personal care products or discuss a
              custom product requirement for your brand.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT RANGE LABEL
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1380px]
          items-center
          justify-between
          gap-5
          px-5
          pb-5
          pt-7
          sm:px-7
          lg:px-10
          lg:pb-6
          lg:pt-8
          xl:px-14
        "
      >
        <div>
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#76817B]
            "
          >
            Product Portfolio
          </span>

          <p className="mt-1 text-[14px] font-semibold text-[#293A31] sm:text-[15px]">
            Personal Care Manufacturing
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <span className="h-[5px] w-[5px] rounded-full bg-orange-500" />

          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7B857F]">
            Explore Range
          </span>

          <span className="h-px w-[35px] bg-[#B5BEB9]" />
        </div>
      </div>

      {/* =====================================================
          AUTO MOVING PRODUCT SLIDER
      ====================================================== */}

      <div
        className="
          manufacturing-slider
          relative
          overflow-hidden
          pb-14
          sm:pb-16
          lg:pb-[76px]
        "
      >
        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-20
            w-[24px]
            bg-gradient-to-r
            from-[#F5F1EB]
            via-[#F5F1EB]/80
            to-transparent
            sm:w-[60px]
            lg:w-[90px]
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-20
            w-[24px]
            bg-gradient-to-l
            from-[#F5F1EB]
            via-[#F5F1EB]/80
            to-transparent
            sm:w-[60px]
            lg:w-[90px]
          "
        />

        {/* =================================================
            MOVING TRACK
        ================================================= */}

        <div
          className="
            manufacturing-track
            flex
            gap-3
            px-2
            sm:gap-4
            lg:gap-5
          "
        >
          {sliderProducts.map((product, index) => (
            <article
              key={`${product.no}-${index}`}
              className="
                group
                relative
                flex
                min-h-[245px]
                w-[270px]
                shrink-0
                flex-col
                overflow-hidden
                border
                border-[#D9DEDB]
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-[3px]
                hover:border-[#AFC0B7]
                hover:shadow-[0_15px_35px_rgba(29,45,39,0.08)]
                sm:min-h-[260px]
                sm:w-[300px]
                sm:p-6
                lg:w-[315px]
              "
            >
              {/* =============================================
                  TOP ROW
              ============================================== */}

              <div className="flex items-start justify-between gap-4">
                {/* NUMBER */}

                <span
                  className="
                    text-[12px]
                    font-bold
                    tracking-[0.14em]
                    text-orange-600
                  "
                >
                  {product.no}
                </span>

                {/* CATEGORY */}

                <span
                  className="
                    rounded-full
                    border
                    border-[#DCE2DE]
                    bg-[#F8F9F7]
                    px-3
                    py-[6px]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#5D6A63]
                  "
                >
                  {product.type}
                </span>
              </div>

              {/* =============================================
                  CENTER GRAPHIC
              ============================================== */}

              <div className="mt-7 flex items-center gap-3">
                <span
                  className="
                    h-[9px]
                    w-[9px]
                    shrink-0
                    rounded-full
                    bg-[#438D76]
                    transition-transform
                    duration-300
                    group-hover:scale-[1.35]
                  "
                />

                <span
                  className="
                    h-px
                    w-[44px]
                    bg-[#B8C3BD]
                    transition-all
                    duration-500
                    group-hover:w-[68px]
                    group-hover:bg-orange-500
                  "
                />

                <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />
              </div>

              {/* =============================================
                  PRODUCT NAME
              ============================================== */}

              <h3
                className="
                  mt-6
                  text-[23px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#21342A]
                  sm:text-[25px]
                "
              >
                {product.name}
              </h3>

              {/* =============================================
                  DESCRIPTION
              ============================================== */}

              <p
                className="
                  mt-3
                  text-[14px]
                  font-medium
                  leading-[1.7]
                  text-[#606D66]
                  sm:text-[15px]
                "
              >
                {product.description}
              </p>

              {/* =============================================
                  BOTTOM
              ============================================== */}

              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between border-t border-[#E1E5E2] pt-4">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#7A857F]
                    "
                  >
                    Private Label
                  </span>

                  <div className="flex items-center gap-[5px]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#438D76]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-orange-500" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#D7DDD9]" />
                  </div>
                </div>
              </div>

              {/* =============================================
                  HOVER BOTTOM LINE
              ============================================== */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-orange-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelManufacturing;