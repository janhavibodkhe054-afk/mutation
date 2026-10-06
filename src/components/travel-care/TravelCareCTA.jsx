import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TravelCareCTA = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/contact", {
      state: {
        requirement: "travel-care",
        enquiry: "Travel Care Bulk Requirement",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-[170px] top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-[#438D76]/10" />

        <div className="absolute -right-[100px] top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full border border-orange-500/10" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="relative border-y border-[#DCE2DE] py-11 sm:py-14 lg:py-16">
          
          {/* Top Accent */}
          <div className="absolute left-0 top-[-2px] flex h-[3px]">
            <span className="w-[70px] bg-orange-500" />
            <span className="w-[42px] bg-[#438D76]" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
            
            {/* CONTENT */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#438D76]">
                  Travel Care Solutions
                </span>
              </div>

              <h2 className="max-w-[760px] text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D2D27] sm:text-[39px] lg:text-[44px]">
                Need Travel Care Kits
                <span className="text-[#438D76]"> in Bulk?</span>
              </h2>

              <p className="mt-4 max-w-[650px] text-[15px] font-medium leading-[1.75] text-[#5C6861] sm:text-[16px]">
                Tell us your product, packaging and branding requirements and
                let our team help you with the right travel care solution.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:border-l lg:border-[#DCE2DE] lg:pl-12">
              <button
                type="button"
                onClick={handleQuote}
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
                  hover:bg-[#438D76]
                  sm:px-9
                "
              >
                Get Bulk Quote

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
            </div>
          </div>

          {/* Bottom Detail */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-[35px] bg-orange-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#758179]">
              Product Selection
            </span>

            <span className="h-[4px] w-[4px] rounded-full bg-[#438D76]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#758179]">
              Custom Branding
            </span>

            <span className="hidden h-[4px] w-[4px] rounded-full bg-[#438D76] sm:block" />

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[#758179] sm:block">
              Bulk Supply
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCareCTA;