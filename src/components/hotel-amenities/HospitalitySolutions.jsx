import React from "react";
import {
  BadgeCheck,
  Layers3,
  Package,
  Palette,
  Boxes,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Quality Products",
    description:
      "Reliable personal care solutions for hospitality requirements.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Multiple Product Options",
    description:
      "A comprehensive range covering skincare, haircare and bath essentials.",
  },
  {
    number: "03",
    icon: Package,
    title: "Custom Packaging",
    description:
      "Packaging formats designed around hospitality needs.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Custom Branding",
    description:
      "Integrate your hotel logo, branding and visual identity.",
  },
  {
    number: "05",
    icon: Boxes,
    title: "Bulk Supply Chain",
    description:
      "Reliable fulfilment for recurring wholesale requirements.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Business-Friendly Terms",
    description:
      "Flexible B2B partnership models focused on reliability and speed.",
  },
];

const HospitalitySolutions = () => {
  return (
    <section
      id="hotel-solutions"
      className="relative overflow-hidden bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 xl:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-24">

          {/* ================= LEFT ================= */}
          <div className="lg:pt-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[38px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600">
                Hospitality Solutions
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                max-w-[510px]
                text-[34px]
                font-bold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#1D2923]
                sm:text-[40px]
                lg:text-[44px]
              "
            >
              Thoughtful Amenities.
              <span className="mt-1 block text-[#438D76]">
                Better Guest Experiences.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[510px] text-[15px] font-medium leading-[1.8] text-[#5B6660] sm:text-[16px]">
              We deliver dependable personal care solutions engineered
              specifically for luxury hotels, resorts, homestays and boutique
              hospitality brands.
            </p>

            {/* Small visual accent */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-[3px] w-[58px] bg-orange-500" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#438D76]" />
              <span className="h-px w-[90px] bg-[#CBD4CF]" />
            </div>

            {/* Bottom note */}
            <div className="mt-10 hidden border-l-2 border-[#438D76] pl-5 lg:block">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#78827D]">
                Complete Hospitality Care
              </span>

              <p className="mt-2 max-w-[320px] text-[13px] font-medium leading-[1.65] text-[#66716B]">
                Products, packaging, branding and bulk supply — all under one
                dependable partnership.
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="border-t border-[#D9DFDC]">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    grid
                    gap-4
                    border-b
                    border-[#D9DFDC]
                    py-6
                    transition-all
                    duration-300
                    sm:grid-cols-[55px_52px_0.8fr_1.2fr_28px]
                    sm:items-center
                    sm:gap-5
                    lg:py-[25px]
                  "
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Number */}
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.15em] text-orange-500">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[44px]
                      w-[44px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#CBD5D0]
                      text-[#438D76]
                      transition-all
                      duration-300
                      group-hover:border-[#438D76]
                      group-hover:bg-[#438D76]
                      group-hover:text-white
                    "
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-[16px] font-bold leading-[1.4] text-[#26332D] sm:text-[17px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-[14px] font-medium leading-[1.7] text-[#65706A] sm:text-[15px]">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                    className="
                      relative
                      z-10
                      hidden
                      text-[#A3ADA8]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-orange-500
                      sm:block
                    "
                  />

                  {/* Orange hover line */}
                  <span
                    className="
                      absolute
                      bottom-[-1px]
                      left-0
                      z-20
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-500
                      group-hover:w-[90px]
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Detail */}
      <div className="mx-auto flex max-w-[1380px] px-5 sm:px-7 lg:px-10 xl:px-14">
        <span className="h-[4px] w-[90px] bg-orange-500" />
        <span className="h-[4px] w-[150px] bg-[#438D76]" />
      </div>
    </section>
  );
};

export default HospitalitySolutions;