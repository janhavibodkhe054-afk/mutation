import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HotelAmenitiesCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact", {
      state: {
        requirement: "hotel-amenities",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#17251F]">
      {/* Background Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[140px] -top-[190px] h-[380px] w-[380px] rounded-full border border-white/[0.06]" />
        <div className="absolute -right-[60px] -top-[110px] h-[220px] w-[220px] rounded-full border border-white/[0.05]" />

        <div className="absolute bottom-0 left-[8%] h-[70px] w-px bg-orange-500/30" />

        <div className="absolute right-[18%] top-0 h-[55px] w-px bg-[#70B69F]/25" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-[72px] xl:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-[38px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400">
                Bulk Hospitality Solutions
              </span>
            </div>

            <h2 className="max-w-[760px] text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[46px]">
              Looking for Hotel Amenities{" "}
              <span className="text-[#7DB9A5]">in Bulk?</span>
            </h2>

            <p className="mt-5 text-[15px] font-medium leading-[1.75] text-[#D2DDD7] sm:text-[16px]">
              Tell us about your hospitality requirements.
            </p>
          </div>

          {/* CTA */}
          <div className="lg:border-l lg:border-white/15 lg:pl-12">
            <button
              type="button"
              onClick={handleClick}
              className="
                group
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                gap-5
                bg-orange-500
                px-7
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                transition-all
                duration-300
                hover:bg-[#5DAA93]
                sm:px-8
              "
            >
              Discuss Your Hotel Requirement

              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-300
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
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-10 flex items-center">
          <span className="h-[3px] w-[75px] bg-orange-500" />
          <span className="h-[3px] w-[120px] bg-[#5DAA93]" />
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default HotelAmenitiesCTA;