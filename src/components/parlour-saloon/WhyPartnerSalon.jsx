
import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Boxes,
  Palette,
  Tags,
  Truck,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Package,
    title: "Wide Product Range",
    description:
      "From shampoos and conditioners to skincare and body care, source essential products for your salon business.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Bulk Order Support",
    description:
      "Simplify salon product procurement with bulk order solutions based on your business requirements.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Custom Packaging",
    description:
      "Explore packaging formats and presentation options that align with your salon's product needs.",
  },
  {
    number: "04",
    icon: Tags,
    title: "Private Label Options",
    description:
      "Build your own branded beauty product range with private label and custom branding support.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Business-Focused Supply",
    description:
      "Product sourcing solutions designed around professional salon operations and repeat requirements.",
  },
  {
    number: "06",
    icon: Layers3,
    title: "One-Stop Solutions",
    description:
      "Bring your skincare, haircare, packaging and branding requirements together with one business partner.",
  },
];

const WhyPartnerSalon = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-14 text-white sm:py-16 lg:py-20">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute -right-40 -top-48 h-[430px] w-[430px] rounded-full bg-[#F07832]/[0.07] blur-[110px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        {/* HEADER */}
        <div className="mb-9 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F07832]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F07832]">
                Built For Beauty Businesses
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.18] tracking-[-0.035em] sm:text-[40px] lg:text-[47px]">
              Why Partner with
              <br className="hidden sm:block" />
              <span className="text-[#F07832]">
                {" "}Mutation Dermacare?
              </span>
            </h2>
          </motion.div>

          <p className="max-w-[380px] text-[13px] leading-[1.85] text-white/55 sm:text-[15px]">
            More than product sourcing. We help beauty
            businesses explore practical solutions for
            professional care, packaging and branding.
          </p>
        </div>

        {/* EDITORIAL BENEFITS GRID */}
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.06,
                }}
                className={`
                  group relative border-b border-white/15
                  py-7 sm:px-5 sm:py-8 lg:px-7 lg:py-9
                  ${index % 2 === 1 ? "sm:border-l lg:border-l-0" : ""}
                  ${index % 3 !== 0 ? "lg:border-l" : ""}
                `}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F07832]/35 text-[#F07832] transition-all duration-300 group-hover:border-[#F07832] group-hover:bg-[#F07832] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-[12px] font-semibold tracking-[0.1em] text-white/30">
                    / {item.number}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-white sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-2.5 max-w-[360px] text-[13px] leading-[1.8] text-white/55 sm:text-[14px]">
                  {item.description}
                </p>

                <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#F07832] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] font-medium text-white/65 sm:text-[14px]">
            Your salon deserves a product partner that understands business needs.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#F07832]"
          >
            Discuss Your Requirements
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSalon;
