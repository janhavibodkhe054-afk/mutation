import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  { no: "01", name: "Anti Hairfall Shampoo", category: "Hair Care" },
  { no: "02", name: "Dusting Powder", category: "Personal Care" },
  { no: "03", name: "Fairness Face Gel", category: "Skin Care" },
  { no: "04", name: "Moisturising Cream", category: "Skin Care" },
  { no: "05", name: "Moisturising Soap", category: "Bath Care" },
  { no: "06", name: "Neem Care Soap", category: "Bath Care" },
  {
    no: "07",
    name: "Saffron Radiance Face Wash",
    category: "Face Care",
  },
  {
    no: "08",
    name: "Baby Soft Skin Lotion",
    category: "Baby Care",
  },
];

const PersonalCareSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9]">
      {/* SOFT BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[150px] top-[160px] h-[360px] w-[360px] rounded-full bg-[#F8EDE2] blur-[90px]" />

        <div className="absolute -right-[140px] bottom-0 h-[400px] w-[400px] rounded-full bg-[#E7F1EC] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1420px] px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mx-auto max-w-[780px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#AEBBB4]" />

            <span className="h-[7px] w-[7px] rounded-full bg-[#F07832]" />

            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C75D21]">
              Personal Care Products
            </p>

            <span className="h-px w-8 bg-[#AEBBB4]" />
          </div>

          <h2 className="mt-4 text-[33px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#17251F] sm:text-[40px] lg:text-[46px]">
            Everyday Care, <span className="text-[#357A65]">Made Better.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[670px] text-[15px] font-medium leading-[1.75] text-[#4F5B55] sm:text-[16px]">
            A thoughtfully developed range of personal care essentials for
            everyday skincare, haircare and bath care needs.
          </p>
        </div>

        {/* =====================================================
            MAIN SECTION
        ====================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[28px]
            border
            border-[#DDE4E0]
            bg-white
            shadow-[0_20px_60px_rgba(37,58,48,0.08)]
            lg:mt-12
          "
        >
          <div className="grid lg:grid-cols-[1.07fr_0.93fr]">
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 xl:px-12">
              {/* TITLE */}

              <div className="flex items-end justify-between gap-5 border-b border-[#D5DDD9] pb-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#C75D21]">
                    Our Collection
                  </p>

                  <h3 className="mt-1.5 text-[22px] font-extrabold tracking-[-0.025em] text-[#17251F] sm:text-[25px]">
                    Personal Care Essentials
                  </h3>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#438D76]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#53615A]">
                    08 Products
                  </span>
                </div>
              </div>

              {/* =================================================
                  PRODUCT LIST
              ================================================= */}

              <div className="grid sm:grid-cols-2 sm:gap-x-9">
                {products.map((product, index) => (
                  <div
                    key={product.no}
                    className={`
                      group
                      relative
                      flex
                      min-h-[94px]
                      items-center
                      gap-4
                      border-b
                      border-[#DDE4E0]
                      py-4

                      ${
                        index % 2 === 1
                          ? "sm:border-l sm:border-[#DDE4E0] sm:pl-9"
                          : ""
                      }
                    `}
                  >
                    {/* NUMBER */}

                    <span
                      className="
                        flex
                        h-[35px]
                        w-[35px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FFF0E6]
                        text-[10px]
                        font-extrabold
                        text-[#C75D21]
                        transition-all
                        duration-300
                        group-hover:bg-[#F07832]
                        group-hover:text-white
                      "
                    >
                      {product.no}
                    </span>

                    {/* PRODUCT INFO */}

                    <div className="min-w-0">
                      <span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#357A65]">
                        {product.category}
                      </span>

                      <h4
                        className="
                          mt-1
                          text-[16px]
                          font-bold
                          leading-[1.35]
                          tracking-[-0.015em]
                          text-[#17251F]
                          transition-colors
                          duration-300
                          group-hover:text-[#C75D21]
                          sm:text-[16px]
                          lg:text-[17px]
                        "
                      >
                        {product.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  CTA AREA
              ================================================= */}

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[320px] text-[13px] font-medium leading-[1.65] text-[#4F5B55]">
                  Explore everyday solutions across hair, skin, face, bath and
                  baby care.
                </p>

                <Link
                  to="/products"
                  className="
                    group
                    inline-flex
                    min-h-[50px]
                    w-fit
                    shrink-0
                    items-center
                    justify-center
                    gap-4
                    rounded-full
                    bg-[#F07832]
                    px-7
                    text-[12px]
                    font-bold
                    text-white
                    shadow-[0_10px_24px_rgba(240,120,50,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:bg-[#357A65]
                  "
                >
                  View Product Details
                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE AREA
            ================================================= */}

            <div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                bg-[#EAF3EE]
                sm:min-h-[490px]
                lg:min-h-full
              "
            >
              {/* LIGHT BACKGROUND */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#EDF5F1] via-[#F4F4EC] to-[#FCEDE3]" />

              {/* SIMPLE ACCENTS */}

              <div
                aria-hidden="true"
                className="absolute -right-[100px] -top-[100px] h-[280px] w-[280px] rounded-full bg-[#F5DCCB]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-[130px] -left-[110px] h-[330px] w-[330px] rounded-full bg-[#D7E8DF]"
              />

              {/* IMAGE FRAME */}

              <div className="absolute inset-5 z-10 sm:inset-7 lg:inset-8">
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[22px]
                    bg-white
                    shadow-[0_18px_45px_rgba(35,57,46,0.11)]
                  "
                >
                  <img
                    src="/personal-care-product.png"
                    alt="Mutation Dermacare Personal Care Range"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[900ms]
                      ease-out
                      hover:scale-[1.025]
                    "
                  />

                  {/* IMAGE BOTTOM GRADIENT */}
                  <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-[#15251E]/70 to-transparent" />
                </div>
              </div>

              {/* =================================================
                  TOP LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  left-9
                  top-9
                  z-20
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D5DDD9]
                  bg-white
                  px-4
                  py-2.5
                  shadow-[0_6px_20px_rgba(30,48,39,0.10)]
                  sm:flex
                  lg:left-11
                  lg:top-11
                "
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#F07832]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#17251F]">
                  Mutation Dermacare
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mx-auto mt-7 flex max-w-[220px] items-center gap-3">
          <span className="h-px flex-1 bg-[#BCC8C1]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#438D76]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#F07832]" />
          <span className="h-px flex-1 bg-[#BCC8C1]" />
        </div>
      </div>
    </section>
  );
};

export default PersonalCareSection;
