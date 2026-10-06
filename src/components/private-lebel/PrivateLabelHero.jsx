import React from "react";
import {
  ArrowUpRight,
  Package,
  Palette,
  Factory,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivateLabelHero = () => {
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate("/contact", {
      state: {
        requirement: "private-label",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F1EA]">
      <style>{`
        @keyframes productFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes accentPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes lineTravel {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(700%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .private-motion {
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
        {/* Right brand field */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-[42%] bg-[#E7EDE8] lg:block" />

        {/* Large circle */}
        <div className="absolute -right-[170px] top-[-190px] h-[570px] w-[570px] rounded-full border border-[#438D76]/10" />

        <div className="absolute -right-[60px] top-[-80px] h-[350px] w-[350px] rounded-full border border-[#438D76]/10" />

        {/* Orange marker */}
        <div className="absolute left-[7%] top-0 h-[72px] w-px bg-orange-500/40" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <div
        className="
          relative mx-auto grid min-h-[620px] max-w-[1480px]
          items-center gap-10
          px-5 py-14
          sm:px-7 sm:py-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-8 lg:px-10 lg:py-10
          xl:px-14
        "
      >
        {/* =================================================
            LEFT
        ================================================= */}
        <div className="relative z-20 lg:pr-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className="private-motion h-[7px] w-[7px] rounded-full bg-orange-500"
              style={{
                animation: "accentPulse 2.8s ease-in-out infinite",
              }}
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-orange-600">
              Private Label Solutions
            </span>

            <span className="h-px w-[42px] bg-[#B7BDB9]" />
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6 max-w-[680px]
              text-[42px] font-bold
              leading-[1.02] tracking-[-0.05em]
              text-[#1D2D27]
              sm:text-[50px]
              md:text-[56px]
              lg:text-[61px]
            "
          >
            Build Your Own
            <span className="block text-[#438D76]">
              Cosmetic Brand.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[610px] text-[15px] font-medium leading-[1.85] text-[#59645E] sm:text-[16px]">
            From product selection to packaging and manufacturing — we help
            bring your brand idea to life.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={handleEnquiry}
            className="
              group mt-8 inline-flex min-h-[55px]
              items-center justify-center gap-5
              bg-orange-500 px-8
              text-[11px] font-bold uppercase
              tracking-[0.15em] text-white
              transition-all duration-300
              hover:bg-[#438D76]
            "
          >
            Discuss Your Requirement

            <span
              className="
                flex h-[30px] w-[30px]
                items-center justify-center
                rounded-full bg-white/20
                transition-all duration-300
                group-hover:bg-white
                group-hover:text-[#438D76]
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>
          </button>

          {/* =================================================
              PROCESS STRIP
          ================================================= */}
          <div className="mt-10 flex max-w-[610px] flex-wrap border-t border-[#D0D5D1] pt-5">
            <div className="flex items-center gap-2.5 pr-5">
              <Package
                size={16}
                strokeWidth={1.7}
                className="text-orange-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#59665F]">
                Product
              </span>
            </div>

            <div className="flex items-center gap-2.5 border-l border-[#CBD1CD] px-5">
              <Palette
                size={16}
                strokeWidth={1.7}
                className="text-[#438D76]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#59665F]">
                Packaging
              </span>
            </div>

            <div className="flex items-center gap-2.5 border-l border-[#CBD1CD] pl-5">
              <Factory
                size={16}
                strokeWidth={1.7}
                className="text-orange-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#59665F]">
                Manufacturing
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT — BRAND STUDIO VISUAL
        ================================================= */}
        <div className="relative min-h-[450px] sm:min-h-[520px] lg:min-h-[580px]">
          
          {/* Vertical Label */}
          <div className="absolute left-[1%] top-[17%] z-20 hidden lg:block">
            <span
              className="block text-[9px] font-bold uppercase tracking-[0.24em] text-[#7A857F]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Your Product · Your Brand
            </span>
          </div>

          {/* Main Image */}
          <div
            className="
              absolute
              bottom-[4%] left-[7%] right-[3%] top-[4%]
              overflow-hidden
              rounded-tl-[110px]
              bg-[#DDE6E0]
              sm:left-[10%]
              lg:left-[12%]
            "
          >
            <img
              src="/private-label.webp"
              alt="Private label cosmetic products and packaging"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#16251E]/65 via-transparent to-transparent" />

            {/* Bottom image copy */}
            <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300">
                Mutation Dermacare
              </span>

              <p className="mt-2 max-w-[330px] text-[18px] font-bold leading-[1.35] text-white sm:text-[20px]">
                From an idea to a product ready for your brand.
              </p>
            </div>
          </div>

          {/* =================================================
              FLOATING BRAND LABEL
          ================================================= */}
          <div
            className="
              absolute right-0 top-[12%] z-30
              hidden min-w-[185px]
              bg-white px-6 py-5
              shadow-[0_18px_50px_rgba(31,52,43,0.10)]
              lg:block
            "
          >
            <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-orange-600">
              Private Label
            </span>

            <span className="mt-2 block text-[17px] font-bold leading-[1.3] text-[#26362E]">
              Your Brand.
            </span>

            <span className="block text-[17px] font-bold leading-[1.3] text-[#438D76]">
              Your Identity.
            </span>
          </div>

          {/* Orange Accent */}
          <div className="absolute bottom-[13%] left-[6%] z-30 hidden h-[100px] w-[5px] bg-orange-500 lg:block" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM BRAND LINE
      ====================================================== */}
      <div className="relative flex h-[4px]">
        <span className="w-[23%] bg-orange-500" />

        <span className="relative flex-1 overflow-hidden bg-[#438D76]">
          <span
            className="private-motion absolute inset-y-0 left-0 w-[80px] bg-[#79B9A3]"
            style={{
              animation: "lineTravel 7s linear infinite",
            }}
          />
        </span>
      </div>
    </section>
  );
};

export default PrivateLabelHero;