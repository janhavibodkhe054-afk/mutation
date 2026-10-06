import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    no: "01",
    title: "Hotel Logo & Branding",
    description:
      "Enhance your hotel's identity with custom logo application and personalised packaging.",
    image: "/hotel-branding.jpg",
  },
  {
    no: "02",
    title: "Custom Bottle & Packaging",
    description:
      "Choose packaging formats suitable for your hotel's requirements.",
    image: "/custom-packaging.jpg",
  },
  {
    no: "03",
    title: "Bespoke Formulations",
    description:
      "Explore personal care formulations suitable for customised hospitality solutions.",
    image: "/bespoke-formulations.jpg",
  },
  {
    no: "04",
    title: "Scalable Bulk Production",
    description:
      "Reliable bulk production and consistent supply for hospitality requirements.",
    image: "/bulk-production.jpg",
  },
];

const CustomHospitalitySolutions = () => {
  const navigate = useNavigate();

  const handleEnquiry = (solution) => {
    navigate("/contact", {
      state: {
        requirement: "hotel-amenities",
        product: solution,
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F4EE]">
      <style>{`
        @keyframes imageBreath {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.045);
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(600%);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: .5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hospitality-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mx-auto max-w-[1380px] px-5 pb-9 pt-14 sm:px-7 sm:pt-16 lg:px-10 lg:pb-11 lg:pt-20 xl:px-14">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[38px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600">
                Hospitality Made Personal
              </span>
            </div>

            <h2 className="mt-5 max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#192720] sm:text-[40px] lg:text-[46px]">
              Custom Hospitality
              <span className="block text-[#438D76]">Solutions.</span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-[590px] text-[15px] font-medium leading-[1.8] text-[#5A655F] sm:text-[16px]">
              From personalised branding and packaging to customised
              formulations and scalable production, we support hospitality
              requirements with flexible solutions.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN SHOWCASE
      ====================================================== */}
      <div className="mx-auto max-w-[1380px] px-5 pb-14 sm:px-7 sm:pb-16 lg:px-10 lg:pb-20 xl:px-14">
        <div className="grid overflow-hidden border border-[#D7D4CD] bg-white lg:grid-cols-[0.72fr_1.28fr]">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <div className="relative min-h-[440px] overflow-hidden sm:min-h-[520px] lg:min-h-[700px]">
            <img
              src="/custom-hospitality.jpg"
              alt="Custom hotel personal care amenities"
              className="hospitality-motion absolute inset-0 h-full w-full object-cover"
              style={{
                animation: "imageBreath 12s ease-in-out infinite",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14231D]/90 via-[#14231D]/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">
                  Mutation Dermacare
                </span>
              </div>

              <h3 className="max-w-[390px] text-[27px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[31px]">
                Your Hospitality.
                <span className="block text-[#A8D1C3]">
                  Your Brand Identity.
                </span>
              </h3>

              <p className="mt-4 max-w-[390px] text-[14px] font-medium leading-[1.7] text-white/85">
                Create guest-care solutions that align with your hospitality
                brand and business requirements.
              </p>

              <button
                type="button"
                onClick={() =>
                  handleEnquiry("Custom Hospitality Solutions")
                }
                className="group mt-6 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.17em] text-white"
              >
                Discuss Your Requirement

                <span className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-[#438D76]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT SOLUTIONS
          ================================================= */}
          <div className="grid sm:grid-cols-2">
            {solutions.map((item, index) => (
              <article
                key={item.no}
                className={`
                  group
                  relative
                  flex
                  min-h-[350px]
                  flex-col
                  overflow-hidden
                  border-[#DDDCD7]
                  bg-[#FFFDFC]

                  ${index % 2 === 0 ? "sm:border-r" : ""}
                  ${index < 2 ? "border-b" : ""}
                `}
              >
                {/* IMAGE */}
                <div className="relative h-[145px] overflow-hidden sm:h-[155px] lg:h-[170px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute bottom-0 left-6 flex h-[48px] min-w-[58px] items-center justify-center bg-[#FFFDFC] px-4">
                    <span className="text-[17px] font-bold tracking-[-0.02em] text-orange-600">
                      {item.no}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative flex flex-1 flex-col p-6 lg:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-[26px] bg-orange-500 transition-all duration-500 group-hover:w-[45px]" />

                    <span
                      className="hospitality-motion h-[5px] w-[5px] rounded-full bg-[#438D76]"
                      style={{
                        animation: "dotPulse 3s ease-in-out infinite",
                      }}
                    />
                  </div>

                  <h3 className="text-[19px] font-bold leading-[1.25] tracking-[-0.025em] text-[#223129] transition-colors duration-300 group-hover:text-[#438D76] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-medium leading-[1.7] text-[#606B65]">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => handleEnquiry(item.title)}
                      className="group/button flex w-full items-center justify-between border-t border-[#DADDD9] pt-4"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#435149] transition-colors duration-300 group-hover/button:text-orange-600">
                        Enquire Now
                      </span>

                      <span
                        className="
                          flex h-[34px] w-[34px] items-center justify-center
                          rounded-full border border-[#B9C4BE]
                          text-[#438D76]
                          transition-all duration-300
                          group-hover/button:border-orange-500
                          group-hover/button:bg-orange-500
                          group-hover/button:text-white
                        "
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-hover/button:translate-x-[2px] group-hover/button:-translate-y-[2px]"
                        />
                      </span>
                    </button>
                  </div>

                  {/* Hover accent */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#438D76] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM DETAIL
        ================================================= */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#68746D]">
              Branding · Packaging · Formulations · Bulk Production
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              handleEnquiry("Custom Hospitality Solutions")
            }
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#438D76] transition-colors duration-300 hover:text-orange-600"
          >
            Start Your Enquiry

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        <div className="relative mt-5 h-px overflow-hidden bg-[#D6DAD7]">
          <span
            className="hospitality-motion absolute inset-y-0 left-0 w-[90px] bg-orange-500"
            style={{
              animation: "lineMove 7s linear infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomHospitalitySolutions;