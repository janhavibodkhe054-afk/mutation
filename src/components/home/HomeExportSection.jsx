
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Globe2,
  PackageCheck,
  Building2,
  Boxes,
  MapPin,
  MessageCircleMore,
} from "lucide-react";

/* =========================================================
   EXPORT HIGHLIGHTS
========================================================= */

const exportHighlights = [
  {
    icon: PackageCheck,
    title: "Export-Oriented Products",
    description:
      "Skincare, haircare and hospitality essentials.",
  },
  {
    icon: Building2,
    title: "Hospitality & Personal Care Solutions",
    description:
      "Product solutions for hotels, resorts and businesses.",
  },
  {
    icon: Boxes,
    title: "Bulk Business Supply",
    description:
      "Solutions for importers and distributors.",
  },
];

/* =========================================================
   HOME EXPORT SECTION
========================================================= */

const HomeExportSection = () => {
  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#F1F7F4]
        py-12 sm:py-16 lg:py-20
      "
    >
      {/* SOFT GREEN BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none absolute
          -left-40 -top-40
          h-[420px] w-[420px]
          rounded-full bg-[#438D76]/[0.07]
          blur-[100px]
        "
      />

      {/* RIGHT BACKGROUND ACCENT */}
      <div
        className="
          pointer-events-none absolute right-0 top-0
          h-full w-[35%]
          bg-gradient-to-l
          from-[#DCEDE6]/50
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">

        {/* TOP LABEL */}
        <div className="mb-8 flex items-center justify-between border-b border-[#D4E2DC] pb-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#F07832]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#438D76] sm:text-[12px]">
              Global Business Opportunities
            </span>
          </div>

          <span className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#438D76] sm:flex">
            <Globe2 size={15} />
            Beyond Borders
          </span>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1"
          >

            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-2 text-[#438D76]">
              <Globe2 size={19} strokeWidth={1.8} />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
                Mutation Dermacare Exports
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                text-[29px] font-bold
                leading-[1.25] tracking-[-0.035em]
                text-[#181818]
                sm:text-[34px]
                lg:text-[36px]
                xl:text-[40px]
              "
            >
              Made in India.{" "}
              <span className="text-[#438D76]">
                Crafted for
              </span>{" "}
              <span className="text-[#F07832]">
                Global Markets.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[580px] text-[13px] leading-[1.9] text-[#58675F] sm:text-[15px]">
              Mutation Dermacare is expanding its vision beyond
              borders with skincare, haircare, personal care and
              hospitality product solutions. We welcome international
              importers, distributors and business partners seeking
              reliable product sourcing, bulk supply and packaging
              solutions.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-7 border-t border-[#D4E2DC]">
              {exportHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group flex items-start gap-4
                      border-b border-[#D4E2DC]
                      py-3.5
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#438D76]/10
                        text-[#438D76]
                        transition-all duration-300
                        group-hover:bg-[#438D76]
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <h3 className="text-[14px] font-bold text-[#252525] sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[12px] leading-[1.6] text-[#66776E] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>

                    <span className="pt-1 text-[11px] font-semibold text-[#8FA79B]">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA BUTTON */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="
                  group inline-flex min-h-[54px]
                  items-center gap-4
                  rounded-full
                  bg-[#F07832]
                  py-2 pl-2 pr-3
                  text-white
                  shadow-[0_10px_28px_rgba(240,120,50,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#E96822]
                  hover:shadow-[0_14px_35px_rgba(240,120,50,0.3)]
                  sm:gap-5 sm:pr-4
                "
              >
                {/* LEFT CHAT ICON */}
                <span
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#FFF0E7]
                    text-[#F07832]
                    sm:h-11 sm:w-11
                  "
                >
                  <MessageCircleMore
                    size={21}
                    strokeWidth={2}
                  />
                </span>

                {/* DIVIDER */}
                <span className="h-7 w-px bg-white/50" />

                {/* BUTTON TEXT */}
                <span
                  className="
                    whitespace-nowrap
                    text-[12px] font-bold
                    sm:text-[14px]
                  "
                >
                  Connect for Bulk Order
                </span>

                {/* RIGHT ARROW */}
                <span
                  className="
                    ml-1 flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#D95E1D]
                    transition-all duration-300
                    group-hover:bg-[#C85216]
                    sm:h-10 sm:w-10
                  "
                >
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.2}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative order-1 lg:order-2"
          >
            {/* OFFSET DECORATIVE BORDER */}
            <div
              className="
                pointer-events-none absolute
                -bottom-4 -right-4
                hidden h-full w-full
                rounded-[18px]
                border border-[#438D76]/30
                lg:block
              "
            />

            {/* MAIN IMAGE */}
            <div
              className="
                relative h-[300px] overflow-hidden
                rounded-[16px] bg-[#DCEDE6]
                sm:h-[420px] lg:h-[570px]
              "
            >
              <img
                src="/Globa.png"
                alt="Mutation Dermacare export product solutions"
                loading="lazy"
                className="
                  h-full w-full object-cover object-center
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* IMAGE BOTTOM LABEL */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">

                <div className="mb-3 flex items-center gap-2 text-white/85">
                  <MapPin size={15} />

                  <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                    Origin: India
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="text-[25px] font-extrabold leading-[1.2] tracking-[-0.035em] text-white sm:text-[34px]">
                    INDIA
                    <span className="mx-2 text-[#F07832]">
                      →
                    </span>
                    GLOBAL
                    <br />
                    MARKETS
                  </p>

                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-white/40
                      bg-[#438D76]/65
                      text-white backdrop-blur-sm
                    "
                  >
                    <Globe2
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING LABEL */}
            <div
              className="
                absolute -left-3 top-6
                flex items-center gap-2
                rounded-r-[8px]
                bg-white px-4 py-3
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                sm:-left-5 sm:top-9
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-[#438D76]/10
                  text-[#438D76]
                "
              >
                <Globe2 size={18} />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#438D76]">
                  Global Vision
                </p>

                <p className="text-[12px] font-bold text-[#252525]">
                  Indian Personal Care
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeExportSection;
