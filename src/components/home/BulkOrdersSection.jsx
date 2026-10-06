import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Hotel,
  BriefcaseBusiness,
  UsersRound,
  Sparkles,
  Building2,
} from "lucide-react";

const audiences = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
  },
  {
    icon: BriefcaseBusiness,
    title: "Travel Companies",
  },
  {
    icon: UsersRound,
    title: "Distributors",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Brands",
  },
  {
    icon: Building2,
    title: "Corporate Businesses",
  },
];

const BulkOrdersSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        lg:bg-fixed
      "
      style={{
        backgroundImage: "url('/bg-image.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#07110D]/80" />

      {/* SOFT GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/35
        "
      />

      {/* ORANGE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-1/2
          h-[300px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/[0.08]
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1300px]
          px-5
          py-16
          sm:px-7
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        {/* ==============================
            TOP CONTENT
        ============================== */}

        <div className="mx-auto max-w-[900px] text-center">

          {/* EYEBROW */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-[38px] bg-orange-500" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-orange-500
                sm:text-[12px]
              "
            >
              Bulk Orders
            </span>

            <span className="h-px w-[38px] bg-orange-500" />
          </div>

          {/* HEADING */}

          <h2
            className="
              text-[34px]
              font-bold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
              sm:text-[40px]
              md:text-[46px]
              lg:text-[52px]
            "
          >
            Connect With Us
            <br />
            for Bulk Orders
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[820px]
              text-[14px]
              leading-[1.8]
              text-white/70
              sm:text-[15px]
              md:text-[16px]
            "
          >
            Looking for personal care products, hotel amenities or travel care
            solutions in bulk? Mutation Dermacare supports business requirements
            with dependable product options, custom solutions and bulk supply.
          </p>
        </div>

        {/* ==============================
            SUITABLE FOR
        ============================== */}

        <div className="mx-auto mt-9 max-w-[1120px] sm:mt-11">

          {/* LABEL */}

          <div className="mb-7 flex items-center justify-center gap-4">

            <span
              className="
                hidden
                h-px
                w-[100px]
                bg-gradient-to-r
                from-transparent
                to-white/25
                sm:block
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/65
                sm:text-[11px]
              "
            >
              Suitable For
            </span>

            <span
              className="
                hidden
                h-px
                w-[100px]
                bg-gradient-to-l
                from-transparent
                to-white/25
                sm:block
              "
            />

          </div>

          {/* AUDIENCES */}

          <div
            className="
              grid
              grid-cols-2
              gap-y-7
              sm:grid-cols-3
              lg:grid-cols-5
              lg:gap-0
            "
          >
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    px-3
                    text-center
                    ${
                      index !== audiences.length - 1
                        ? "lg:border-r lg:border-white/15"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-orange-500/35
                      bg-orange-500/10
                      text-orange-400
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      text-[13px]
                      font-semibold
                      leading-[1.4]
                      text-white
                      sm:text-[14px]
                      lg:text-[15px]
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==============================
            CTA
        ============================== */}

        <div className="mt-10 flex justify-center sm:mt-12">

          <Link
            to="/contact"
            className="
              group
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              gap-4
              rounded-full
              bg-orange-500
              px-8
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_12px_35px_rgba(249,115,22,0.25)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-orange-600
              hover:shadow-[0_16px_40px_rgba(249,115,22,0.32)]
              sm:min-h-[58px]
              sm:px-10
              sm:text-[12px]
            "
          >
            Get Bulk Quote

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BulkOrdersSection;