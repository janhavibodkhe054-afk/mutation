
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const audiences = [
  {
    title: "Beauty Parlours",
    description:
      "Skincare, facial care and beauty essentials for everyday parlour services.",
  },
  {
    title: "Unisex Salons",
    description:
      "Haircare and skincare product solutions for modern unisex salons.",
  },
  {
    title: "Hair Studios",
    description:
      "Hair cleansing, conditioning and personal care essentials for professional hair studios.",
  },
  {
    title: "Spas & Wellness",
    description:
      "Bath, body and personal care essentials for spa and wellness businesses.",
  },
  {
    title: "Beauty Academies",
    description:
      "Personal care products for beauty education and practical training.",
  },
  {
    title: "Beauty Professionals",
    description:
      "Flexible skincare and haircare sourcing for independent beauty professionals.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[12px] bg-[#F3F0ED]"
          >
            <img
              src="/parlour.jpg"
              alt="Professional beauty salon and skincare services"
              loading="lazy"
              className="h-[270px] w-full object-contain sm:h-[400px] lg:h-[590px]"
            />

            {/* SUBTLE IMAGE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {/* SMALL IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 border-l-[3px] border-[#F07832] pl-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white sm:text-[12px]">
                Professional Beauty Solutions
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F07832]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#F07832]">
                Professional Beauty Businesses
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[31px] font-bold leading-[1.15] tracking-[-0.035em] text-[#171717] sm:text-[40px] lg:text-[46px]">
              Who We <span className="text-[#F07832]">Serve</span>
            </h2>

            {/* INTRO */}
            <p className="mt-4 text-[13px] leading-[1.8] text-[#666666] sm:text-[15px]">
              Mutation Dermacare supports beauty and wellness
              businesses with professional skincare, haircare
              and personal care product solutions.
            </p>

            {/* PARAGRAPH STYLE CATEGORIES */}
            <div className="mt-6 space-y-4">
              {audiences.map((item) => (
                <div key={item.title}>
                  <p className="text-[13px] leading-[1.8] text-[#686868] sm:text-[14px]">
                    <span className="font-bold text-[#222222]">
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-7 border-t border-[#E8E8E8] pt-6">
              <p className="mb-4 text-[14px] font-semibold text-[#222222] sm:text-[15px]">
                Your Beauty Business. Our Product Solutions.
              </p>

              <Link
                to="/contact"
                className="group inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-[#F07832] px-5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#D96523]"
              >
                Connect for Bulk Order

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
