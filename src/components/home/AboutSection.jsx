import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Luggage,
  PackageCheck,
} from "lucide-react";

const coreSolutions = [
  {
    icon: Sparkles,
    number: "01",
    title: "Personal Care",
    text: "Everyday care products",
  },
  {
    icon: Building2,
    number: "02",
    title: "Hotel Amenities",
    text: "Guest-care essentials",
  },
  {
    icon: Luggage,
    number: "03",
    title: "Travel Care Kits",
    text: "Compact care solutions",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Private Label",
    text: "Brand & manufacturing",
  },
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes aboutImageZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.035);
          }
        }

        @keyframes productFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: scale(1);
            opacity: .35;
          }
          50% {
            transform: scale(1.35);
            opacity: .7;
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(500%);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes smallDot {
          0%, 100% {
            transform: scale(1);
            opacity: .45;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .about-main-image {
          animation: aboutImageZoom 12s ease-in-out infinite;
        }

        .about-product-float {
          animation: productFloat 5s ease-in-out infinite;
        }

        .about-badge-float {
          animation: badgeFloat 4.5s ease-in-out infinite;
        }

        .about-badge-pulse {
          animation: badgePulse 4s ease-in-out infinite;
        }

        .about-line-move {
          animation: lineMove 5s linear infinite;
        }

        .about-dot {
          animation: smallDot 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-main-image,
          .about-product-float,
          .about-badge-float,
          .about-badge-pulse,
          .about-line-move,
          .about-dot,
          .about-icon {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* right soft panel */}
        <div className="absolute right-0 top-0 h-full w-[18%] bg-[#F5F8F6]" />

        {/* green circle */}
        <div className="absolute -right-[150px] top-[-140px] h-[360px] w-[360px] rounded-full border border-[#438D76]/10" />

        {/* orange circle */}
        <div className="absolute -left-[170px] bottom-[-180px] h-[360px] w-[360px] rounded-full border border-orange-500/10" />

        {/* top decorative line */}
        <div className="absolute left-[8%] top-0 h-[50px] w-px bg-orange-500/30" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* =====================================================
              LEFT — IMAGE COMPOSITION
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-[600px] pb-10 sm:pb-12 lg:mx-0">

            {/* Vertical Label */}
            <div className="absolute -left-[26px] top-[82px] z-20 hidden -rotate-90 lg:flex lg:items-center lg:gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-orange-500" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#438D76]">
                Mutation Dermacare
              </span>
            </div>

            {/* MAIN IMAGE */}
            <div className="relative ml-auto w-[91%] overflow-hidden rounded-[24px] bg-[#F1EEE9]">
              <img
                src="/about.jpg"
                alt="Mutation Dermacare personal care solutions"
                className="about-main-image h-[390px] w-full object-cover sm:h-[470px] lg:h-[505px]"
              />

              {/* subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14271F]/25 via-transparent to-transparent" />

              {/* Top Accent */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 backdrop-blur-md">
                <span className="about-dot h-[6px] w-[6px] rounded-full bg-[#438D76]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#34483F]">
                  Personal Care Solutions
                </span>
              </div>

              {/* IMAGE LABEL */}
              <div className="absolute bottom-5 right-5 max-w-[220px] rounded-[14px] border border-white/60 bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(25,45,36,0.08)] backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-[22px] bg-orange-500" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-orange-600">
                    Care • Quality • Solutions
                  </p>
                </div>

                <p className="mt-2 text-[13px] font-bold text-[#1D2D27]">
                  Built Around Your Needs
                </p>
              </div>
            </div>

            {/* =================================================
                SECOND IMAGE
            ================================================== */}
            <div
              className="
                about-product-float
                absolute
                bottom-0
                left-0
                z-20
                w-[40%]
                overflow-hidden
                rounded-[19px]
                border-[6px]
                border-white
                bg-[#F5EFEA]
                shadow-[0_20px_45px_rgba(32,50,43,0.16)]
              "
            >
              <img
                src="/anti-hairfall.webp"
                alt="Mutation Dermacare products"
                className="h-[165px] w-full object-cover sm:h-[205px]"
              />

              <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#172C25]/20 to-transparent" />
            </div>

            {/* =================================================
                04 BADGE
            ================================================== */}
            <div
              className="
                about-badge-float
                absolute
                right-[-5px]
                top-[52px]
                z-20
                flex
                h-[108px]
                w-[108px]
                flex-col
                items-center
                justify-center
                rounded-full
                border-[6px]
                border-white
                bg-[#438D76]
                text-center
                shadow-[0_14px_35px_rgba(40,85,70,0.22)]
                sm:h-[120px]
                sm:w-[120px]
              "
            >
              {/* pulse */}
              <span className="about-badge-pulse absolute -inset-[11px] rounded-full border border-[#438D76]/30" />

              <span className="relative text-[27px] font-bold leading-none text-white">
                04
              </span>

              <span className="relative mt-2 text-[8px] font-bold uppercase leading-[1.4] tracking-[0.14em] text-white/85">
                Core
                <br />
                Solutions
              </span>
            </div>

            {/* moving line */}
            <div className="absolute bottom-[15px] left-[45%] right-[5%] hidden h-px overflow-hidden bg-[#CBD5CF] sm:block">
              <span className="about-line-move absolute inset-y-0 left-0 w-[50px] bg-orange-500" />
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <div className="relative">

            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-[32px] bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-[11px]">
                Who We Are
              </span>

              <span className="about-dot h-[6px] w-[6px] rounded-full bg-[#438D76]" />
            </div>

            {/* HEADING */}
            <h2 className="max-w-[650px] text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D2D27] sm:text-[38px] md:text-[42px] lg:text-[44px] xl:text-[46px]">
              More Than Products.
              <span className="block text-[#438D76]">
                We Build Solutions.
              </span>
            </h2>

            {/* accent */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-[3px] w-[55px] bg-orange-500" />
              <span className="h-[3px] w-[17px] bg-[#438D76]" />
            </div>

            {/* DESCRIPTION */}
            <div className="mt-5 max-w-[680px] space-y-3">
              <p className="text-[15px] font-medium leading-[1.75] text-[#56635D] lg:text-[16px]">
                Mutation Dermacare is a personal care and B2B solutions
                company focused on delivering quality products for everyday
                consumers, hospitality businesses, brands and organisations.
              </p>

              <p className="text-[15px] font-medium leading-[1.75] text-[#56635D] lg:text-[16px]">
                From personal care essentials to hotel amenities, travel care
                kits and private label manufacturing, we help businesses find
                practical and reliable solutions under one roof.
              </p>
            </div>

            {/* =================================================
                CORE SOLUTIONS
            ================================================== */}
            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between border-b border-[#DEE5E1] pb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1D2D27]">
                  Our Core Solutions
                </p>

                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#849089]">
                  01 — 04
                </span>
              </div>

              <div className="grid sm:grid-cols-2">
                {coreSolutions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className={`
                        group
                        relative
                        flex
                        min-h-[92px]
                        items-center
                        gap-4
                        border-[#DEE5E1]
                        py-4
                        transition-colors
                        duration-300
                        hover:bg-[#F6F9F7]

                        ${
                          index < 2
                            ? "border-b"
                            : ""
                        }

                        ${
                          index % 2 === 0
                            ? "sm:border-r sm:pr-5"
                            : "sm:pl-5"
                        }

                        ${
                          index > 1
                            ? "max-sm:border-t"
                            : ""
                        }
                      `}
                    >
                      {/* ICON */}
                      <div
                        className="
                          flex h-[44px] w-[44px]
                          shrink-0 items-center
                          justify-center
                          rounded-full
                          bg-[#EAF3EF]
                          text-[#438D76]
                          transition-all duration-300
                          group-hover:bg-[#438D76]
                          group-hover:text-white
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="about-icon"
                        />
                      </div>

                      {/* TEXT */}
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-[0.12em] text-orange-600">
                            {item.number}
                          </span>

                          <span className="h-px w-[17px] bg-orange-500/60 transition-all duration-300 group-hover:w-[28px]" />
                        </div>

                        <h3 className="text-[14px] font-bold leading-[1.3] text-[#1D2D27] sm:text-[15px]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[12px] font-medium text-[#69766F]">
                          {item.text}
                        </p>
                      </div>

                      {/* hover accent */}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-[55px]" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-7 flex items-center gap-5">
              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  bg-orange-500
                  px-7
                  text-[15px]
                  font-bold
                  text-white
                  shadow-[0_9px_22px_rgba(249,115,22,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#438D76]
                  hover:shadow-[0_13px_30px_rgba(67,141,118,0.22)]
                "
              >
                About Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="about-dot h-[6px] w-[6px] rounded-full bg-[#438D76]" />
                <span className="h-px w-[45px] bg-[#CBD5CF]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BRAND ACCENT */}
      <div className="flex h-[4px]">
        <span className="w-[23%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default AboutSection;