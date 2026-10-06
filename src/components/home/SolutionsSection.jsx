import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Personal Care",
    subtitle: "Skincare, Haircare & Bath Care",
    description:
      "Everyday cleansing, hydration and personal care solutions.",
    image: "/personal-care.png",
    cta: "Explore Products",
    link: "/products",
  },
  {
    number: "02",
    title: "Hotel Amenities",
    subtitle: "Premium Guest-Care Essentials",
    description:
      "In-room cosmetic amenities and guest toiletries for hospitality businesses.",
    image: "/hotel-amenities.png",
    cta: "Explore Hotel Amenities",
    link: "/hotel-amenities",
  },
  {
    number: "03",
    title: "Travel Care Kits",
    subtitle: "Compact & Travel-Friendly Kits",
    description:
      "Convenient personal care essentials packed for travel and hospitality requirements.",
    image: "/travel-care.png",
    cta: "Explore Travel Kits",
    link: "/travel-care-kits",
  },
  {
    number: "04",
    title: "Private Label",
    subtitle: "Build Your Own Cosmetic Brand",
    description:
      "End-to-end B2B support for product selection, branding, packaging and manufacturing.",
    image: "/private-label.png",
    cta: "Explore Private Label",
    link: "/private-label",
  },
];

const SolutionsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF8] py-16 sm:py-20 lg:py-24">

      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[420px] w-[420px] rounded-full bg-orange-500/[0.04]" />

      <div className="pointer-events-none absolute -bottom-[200px] -left-[170px] h-[400px] w-[400px] rounded-full bg-[#438D76]/[0.04]" />


      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10 xl:px-12">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-12 lg:mb-14">

          {/* EYEBROW */}

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-[2px] w-[35px] bg-orange-500" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-orange-500
                sm:text-[11px]
              "
            >
              Curated Solutions
            </span>

            <span className="h-[2px] w-[35px] bg-orange-500" />

          </div>


          {/* TITLE */}

          <h2
            className="
              text-[32px]
              font-bold
              leading-[1.10]
              tracking-[-0.03em]
              text-[#1D2D27]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[44px]
              xl:text-[46px]
            "
          >
            Explore Our{" "}
            
              Solutions
            
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[670px]
              text-[14px]
              leading-[1.75]
              text-[#68736E]
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Everyday personal care, hospitality amenities, travel essentials,
            and custom private label manufacturing.
          </p>

        </div>


        {/* =========================
            SOLUTION CARDS
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >

          {solutions.map((item) => (

            <article
              key={item.number}
              className="
                group
                overflow-hidden
                rounded-[10px]
                border
                border-[#E9E6E2]
                bg-white
                shadow-[0_10px_35px_rgba(32,50,43,0.06)]
                transition-all
                duration-500
                hover:-translate-y-[7px]
                hover:shadow-[0_22px_55px_rgba(32,50,43,0.12)]
              "
            >

              {/* =====================
                  IMAGE
              ====================== */}

              <div className="relative h-[240px] overflow-hidden bg-[#F4F1EC] sm:h-[255px] lg:h-[270px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.06]
                  "
                />


                {/* IMAGE GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/[0.08]
                    via-transparent
                    to-transparent
                  "
                />


                {/* NUMBER ON IMAGE */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-[45px]
                    w-[45px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70
                    bg-white/90
                    text-[11px]
                    font-bold
                    tracking-[0.08em]
                    text-[#438D76]
                    shadow-sm
                    backdrop-blur-md
                  "
                >
                  {item.number}
                </div>

              </div>


              {/* =====================
                  CARD CONTENT
              ====================== */}

              <div className="flex min-h-[290px] flex-col p-6 sm:p-7">

                {/* SMALL ORANGE LINE */}

                <div className="mb-5 h-[2px] w-[34px] bg-orange-500 transition-all duration-500 group-hover:w-[55px]" />


                {/* TITLE */}

                <h3
                  className="
                    text-[22px]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-[#1D2D27]
                    sm:text-[23px]
                    lg:text-[24px]
                  "
                >
                  {item.title}
                </h3>


                {/* SUB TITLE */}

                <p
                  className="
                    mt-2
                    text-[14px]
                    font-semibold
                    leading-[1.4]
                    text-[#438D76]
                  "
                >
                  {item.subtitle}
                </p>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-[13px]
                    leading-[1.7]
                    text-[#68736E]
                    sm:text-[14px]
                  "
                >
                  {item.description}
                </p>


                {/* =====================
                    CTA
                ====================== */}

                <div className="mt-auto">

                  <Link
                    to={item.link}
                    className="
                      group/btn
                      inline-flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-between
                      gap-4
                      rounded-full
                      bg-orange-500
                      px-6
                      text-[12px]
                      font-bold
                      text-white
                      shadow-[0_8px_20px_rgba(249,115,22,0.18)]
                      transition-all
                      duration-300
                      hover:bg-orange-600
                      hover:shadow-[0_12px_28px_rgba(249,115,22,0.28)]
                    "
                  >

                    <span>
                      {item.cta}
                    </span>

                    <ArrowRight
                      size={17}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-300
                        group-hover/btn:translate-x-1
                      "
                    />

                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;