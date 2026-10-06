import React from "react";
import {
  Building2,
  Plane,
  MapPinned,
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const audiences = [
  {
    no: "01",
    icon: Building2,
    title: "Hotels & Resorts",
    description: "Guest rooms, stays and hospitality requirements.",
  },
  {
    no: "02",
    icon: Plane,
    title: "Travel Companies",
    description: "Travellers, tour packages and journeys.",
  },
  {
    no: "03",
    icon: MapPinned,
    title: "Tour Operators",
    description: "Group tours and organised trips.",
  },
  {
    no: "04",
    icon: BriefcaseBusiness,
    title: "Corporate Companies",
    description: "Employees, business travel and corporate gifting.",
  },
  {
    no: "05",
    icon: CalendarDays,
    title: "Events & Conferences",
    description: "Conferences, events and special occasions.",
  },
  {
    no: "06",
    icon: Megaphone,
    title: "Promotional Campaigns",
    description: "Personal care kits for promotional requirements.",
  },
];

const TravelCareAudience = () => {
  const navigate = useNavigate();

  const handleEnquiry = (audience) => {
    navigate("/contact", {
      state: {
        requirement: "travel-care",
        audience,
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#EEF2EF]">
      <style>{`
        @keyframes imageMove {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.045);
          }
        }

        @keyframes floatPlane {
          0%, 100% {
            transform: translateY(0px) rotate(8deg);
          }
          50% {
            transform: translateY(-7px) rotate(8deg);
          }
        }

        @keyframes pulseDot {
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
          .audience-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-0 top-0 h-[5px] w-[22%] bg-[#438D76]" />
        <div className="absolute right-[22%] top-0 h-[5px] w-[9%] bg-orange-500" />

        <div className="absolute -right-[130px] -top-[130px] h-[330px] w-[330px] rounded-full border border-[#438D76]/10" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-[72px] xl:px-14">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-6 border-b border-[#C8D1CC] pb-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="audience-motion h-[7px] w-[7px] rounded-full bg-orange-500"
                style={{
                  animation: "pulseDot 2.8s ease-in-out infinite",
                }}
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600">
                Who They're For
              </span>

              <span className="h-px w-[40px] bg-[#AAB8B0]" />
            </div>

            <h2 className="mt-4 max-w-[680px] text-[33px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1D2D27] sm:text-[39px] lg:text-[44px]">
              Travel Care Solutions
              <span className="text-[#438D76]"> for Every Business.</span>
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] font-medium leading-[1.75] text-[#5D6962] lg:justify-self-end">
            Flexible travel care solutions for hospitality, organised travel,
            corporate requirements, events and promotional use.
          </p>
        </div>

        {/* =====================================================
            MAIN COMPOSITION
        ====================================================== */}
        <div className="mt-8 grid overflow-hidden bg-white lg:grid-cols-[0.78fr_1.22fr]">

          {/* =================================================
              IMAGE
          ================================================= */}
          <div className="relative min-h-[410px] overflow-hidden sm:min-h-[500px] lg:min-h-[590px]">
            <img
              src="/travel-img.jpg"
              alt="Travel care solutions for businesses"
              className="audience-motion absolute inset-0 h-full w-full object-cover"
              style={{
                animation: "imageMove 12s ease-in-out infinite",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#14231D]/90 via-[#14231D]/10 to-transparent" />

            {/* Travel marker */}
            <div className="absolute left-6 top-6 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/95 text-[#438D76] shadow-lg sm:left-8 sm:top-8">
              <Plane
                size={20}
                strokeWidth={1.7}
                className="audience-motion"
                style={{
                  animation: "floatPlane 4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Image Bottom Copy */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">
                Business Applications
              </span>

              <h3 className="mt-3 max-w-[370px] text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[29px]">
                One Kit.
                <span className="block text-[#9BCAB9]">
                  Multiple Possibilities.
                </span>
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-[2px] w-[42px] bg-orange-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                  Hospitality · Travel · Corporate
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              AUDIENCE AREA
          ================================================= */}
          <div className="grid sm:grid-cols-2">
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.no}
                  className={`
                    group relative flex min-h-[190px] flex-col
                    border-[#DDE1DE] p-6
                    transition-colors duration-300
                    hover:bg-[#F7F4EF]
                    lg:min-h-[196px] lg:p-7

                    ${index % 2 === 0 ? "sm:border-r" : ""}
                    ${index < 4 ? "border-b" : ""}
                  `}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        flex h-[42px] w-[42px] items-center justify-center
                        rounded-full bg-[#E6EFEA] text-[#438D76]
                        transition-all duration-300
                        group-hover:bg-[#438D76]
                        group-hover:text-white
                      "
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-orange-600">
                      {item.no}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <h3 className="text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-[#23332B] lg:text-[19px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[280px] text-[14px] font-medium leading-[1.65] text-[#65716A]">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <button
                    type="button"
                    onClick={() => handleEnquiry(item.title)}
                    className="
                      mt-auto flex items-center justify-between
                      border-t border-[#D7DDD9] pt-4
                    "
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#68756E] transition-colors duration-300 group-hover:text-orange-600">
                      Explore Requirement
                    </span>

                    <span
                      className="
                        flex h-[31px] w-[31px] items-center justify-center
                        rounded-full border border-[#BAC5BF]
                        text-[#438D76]
                        transition-all duration-300
                        group-hover:border-orange-500
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight
                        size={13}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      />
                    </span>
                  </button>

                  {/* Bottom hover line */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="flex flex-col gap-5 bg-[#1C2B24] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-orange-400">
              06 Business Applications
            </span>

            <span className="hidden h-[16px] w-px bg-white/20 sm:block" />

            <span className="text-[12px] font-semibold text-white/80">
              Explore a travel care solution suited to your requirement.
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleEnquiry("Travel Care Solutions")}
            className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-orange-400"
          >
            Discuss Requirement

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelCareAudience;