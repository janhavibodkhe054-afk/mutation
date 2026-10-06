import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivateLabelCTA = () => {
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate("/contact", {
      state: {
        requirement: "private-label",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F3EC]">
      <style>{`
        @keyframes ctaDot {
          0%, 100% {
            transform: scale(1);
            opacity: .6;
          }
          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        @keyframes ctaArrow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(3px, -3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-0 top-0 h-full w-[28%] bg-[#E8EFEA]" />

        <div className="absolute -right-[80px] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-[#438D76]/10" />

        <div className="absolute left-[5%] top-0 h-[45px] w-px bg-orange-500/30" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16 xl:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="cta-motion h-[7px] w-[7px] rounded-full bg-orange-500"
                style={{
                  animation: "ctaDot 2.5s ease-in-out infinite",
                }}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#438D76]">
                Your Brand Starts Here
              </span>

              <span className="h-px w-[45px] bg-[#B7C2BC]" />
            </div>

            <h2 className="mt-4 max-w-[800px] text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D2D27] sm:text-[39px] lg:text-[44px]">
              Ready to Build Your Own{" "}
              <span className="text-[#438D76]">
                Personal Care Brand?
              </span>
            </h2>
          </div>

          {/* CTA BUTTON */}
          <div className="lg:min-w-[330px]">
            <button
              type="button"
              onClick={handleEnquiry}
              className="
                group flex min-h-[62px] w-full
                items-center justify-between
                gap-6 bg-orange-500
                pl-7 pr-2 text-white
                transition-all duration-300
                hover:bg-[#438D76]
                lg:min-w-[330px]
              "
            >
              <span className="text-left text-[10px] font-bold uppercase tracking-[0.14em] sm:text-[11px]">
                Start Your Private
                <span className="block">Label Enquiry</span>
              </span>

              <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-white text-[#1D2D27]">
                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                  className="cta-motion transition-colors group-hover:text-[#438D76]"
                  style={{
                    animation: "ctaArrow 1.8s ease-in-out infinite",
                  }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Compact Bottom Detail */}
        <div className="mt-9 flex items-center gap-3">
          <span className="h-[3px] w-[55px] bg-orange-500" />
          <span className="h-[3px] w-[18px] bg-[#438D76]" />
          <span className="h-px flex-1 bg-[#CED6D1]" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="flex h-[4px]">
        <span className="w-[22%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default PrivateLabelCTA;