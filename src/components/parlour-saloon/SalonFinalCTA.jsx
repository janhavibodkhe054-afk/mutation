
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Package,
  UsersRound,
  Tags,
} from "lucide-react";
import { Link } from "react-router-dom";

const SalonFinalCTA = () => {
  const features = [
    {
      icon: Package,
      title: "Professional Care",
    },
    {
      icon: UsersRound,
      title: "Bulk Supply",
    },
    {
      icon: Tags,
      title: "Private Label",
    },
  ];

  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#FFF9F4]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* SOFT PEACH BACKGROUND */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_0%_65%,rgba(255,188,139,0.25),transparent_45%),radial-gradient(ellipse_at_100%_70%,rgba(240,120,50,0.13),transparent_45%)]
        "
      />

      {/* LEFT DECORATIVE CIRCLE */}
      <div
        className="
          pointer-events-none absolute
          -left-[220px] top-[18%]
          h-[450px] w-[450px]
          rounded-full
          bg-[#FFD6B9]/40
          sm:-left-[250px]
          lg:-left-[210px]
          lg:h-[550px] lg:w-[550px]
        "
      />

      {/* RIGHT DECORATIVE CIRCLE */}
      <div
        className="
          pointer-events-none absolute
          -right-[220px] bottom-[-240px]
          h-[450px] w-[450px]
          rounded-full
          border border-[#F07832]/15
          bg-[#FFE4D2]/35
          lg:-right-[180px]
          lg:h-[550px] lg:w-[550px]
        "
      />

      {/* DECORATIVE CURVE */}
      <div
        className="
          pointer-events-none absolute
          -right-[170px] top-[10%]
          hidden h-[450px] w-[450px]
          rounded-full border border-[#F07832]/25
          lg:block
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10 mx-auto
          max-w-[1150px]
          px-5 text-center
          sm:px-7 lg:px-10
        "
      >
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-[1px] w-7 bg-[#F07832] sm:w-10" />

          <span
            className="
              text-[10px] font-bold uppercase
              tracking-[0.18em] text-[#E96B2B]
              sm:text-[12px]
            "
          >
            Let's Grow Your Beauty Business
          </span>

          <span className="h-[1px] w-7 bg-[#F07832] sm:w-10" />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mx-auto max-w-[1000px]
            text-[31px] font-bold
            leading-[1.18] tracking-[-0.045em]
            text-[#171717]
            sm:text-[44px]
            lg:text-[54px]
          "
        >
          Ready to Upgrade Your
          <br className="hidden sm:block" />

          <span className="text-[#F07832]">
            {" "}Salon's Product Range?
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto mt-5 max-w-[670px]
            text-[13px] leading-[1.9]
            text-[#6B6B6B]
            sm:text-[16px]
          "
        >
          Partner with Mutation Dermacare for your professional
          beauty care requirements. Explore skincare, haircare
          and personal care product solutions for your business.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/contact"
            className="
              group inline-flex min-h-[52px]
              items-center justify-center gap-3
              rounded-[10px]
              bg-[#F07832]
              px-7
              text-[14px] font-bold text-white
              shadow-[0_12px_28px_rgba(240,120,50,0.18)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#DB6828]
              hover:shadow-[0_15px_35px_rgba(240,120,50,0.25)]
              sm:min-h-[56px]
              sm:px-9 sm:text-[15px]
            "
          >
            Connect for Bulk Order

            <ArrowUpRight
              size={19}
              className="
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        
      </div>
    </section>
  );
};

export default SalonFinalCTA;
