import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3E9E1]">
      <style>{`
        @keyframes contactLine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(450%);
          }
        }

        @keyframes contactPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .55;
          }
          50% {
            transform: scale(1.6);
            opacity: 1;
          }
        }

        @keyframes contactFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-motion {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[120px] -top-[160px] h-[360px] w-[360px] rounded-full border border-[#438D76]/10" />

        <div className="absolute right-[8%] top-0 h-[85px] w-px bg-orange-500/35" />

        <div className="absolute bottom-0 left-[44%] h-[80px] w-px bg-gradient-to-t from-[#438D76]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-[72px] xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="relative h-[2px] w-[42px] overflow-hidden bg-orange-500/25">
                <span
                  className="contact-motion absolute inset-y-0 left-0 w-[16px] bg-orange-500"
                  style={{
                    animation: "contactLine 3.2s linear infinite",
                  }}
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-orange-600 sm:text-[12px]">
                Contact Mutation Dermacare
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-5
                max-w-[680px]
                text-[40px]
                font-bold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#1C2822]
                sm:text-[48px]
                md:text-[54px]
                lg:text-[58px]
              "
            >
              Get In
              <span className="text-[#438D76]"> Touch.</span>
            </h1>

            {/* Accent */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-[54px] bg-orange-500" />

              <span
                className="contact-motion h-[7px] w-[7px] rounded-full bg-[#438D76]"
                style={{
                  animation: "contactPulse 2.5s ease-in-out infinite",
                }}
              />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[16px] font-medium leading-[1.8] text-[#4E5B55] sm:text-[17px]">
              Tell us about your requirements and let our team help you create
              the right products, packaging and manufacturing solution for
              your brand.
            </p>

            {/* Bottom small label */}
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#D8C8BD] pt-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#53645C]">
                Personal Care
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#53645C]">
                Hotel Amenities
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#53645C]">
                Private Label
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#53645C]">
                Bulk Orders
              </span>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative lg:pl-8">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-[#CDBDB2] lg:block" />

            {/* Header */}
            <div className="mb-2 flex items-center justify-between border-b border-[#CDBDB2] pb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#66736D]">
                Connect With Us
              </span>

              <div className="flex items-center gap-2">
                <span
                  className="contact-motion h-[6px] w-[6px] rounded-full bg-orange-500"
                  style={{
                    animation: "contactPulse 2.5s ease-in-out infinite",
                  }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#438D76]">
                  We're Here To Help
                </span>
              </div>
            </div>

            {/* PHONE */}
            <a
              href="tel:+919921269023"
              className="
                group
                flex
                items-center
                gap-5
                border-b
                border-[#CDBDB2]
                py-5
              "
            >
              <div
                className="
                  flex
                  h-[45px]
                  w-[45px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#438D76]
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-orange-500
                "
              >
                <Phone size={18} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                  Call Us
                </span>

                <span className="mt-1 block text-[16px] font-bold text-[#26332D] sm:text-[17px]">
                  +91 99212 69023
                </span>
              </div>

              <span className="h-px w-5 bg-[#9EAAA4] transition-all duration-300 group-hover:w-10 group-hover:bg-orange-500" />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:dr.prit23@gmail.com"
              className="
                group
                flex
                items-center
                gap-5
                border-b
                border-[#CDBDB2]
                py-5
              "
            >
              <div
                className="
                  flex
                  h-[45px]
                  w-[45px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/70
                  text-[#438D76]
                  transition-all
                  duration-300
                  group-hover:bg-orange-500
                  group-hover:text-white
                "
              >
                <Mail size={18} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                  Email Us
                </span>

                <span className="mt-1 block text-[16px] font-bold text-[#26332D] sm:text-[17px]">
                  dr.prit23@gmail.com
                </span>
              </div>

              <span className="h-px w-5 bg-[#9EAAA4] transition-all duration-300 group-hover:w-10 group-hover:bg-orange-500" />
            </a>

            {/* LOCATION */}
            <div className="group flex items-start gap-5 py-5">
              <div
                className="
                  flex
                  h-[45px]
                  w-[45px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/70
                  text-[#438D76]
                "
              >
                <MapPin size={18} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                  Visit Us
                </span>

                <p className="mt-1 max-w-[500px] text-[14px] font-semibold leading-[1.65] text-[#35413B] sm:text-[15px]">
                  Mutation Dermacare, Vighnaharta Hospital, Gat No.
                  2940/1/A, Plot No. 19, At Post Ale Phata, Tal. Junnar,
                  Dist. Pune, Maharashtra – 412411
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="relative mt-1 h-[3px] overflow-hidden bg-[#CDBDB2]">
              <span
                className="contact-motion absolute inset-y-0 left-0 w-[18%] bg-orange-500"
                style={{
                  animation: "contactLine 6s linear infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand bottom strip */}
      <div className="flex h-[4px]">
        <span className="w-[18%] bg-orange-500" />
        <span className="flex-1 bg-[#438D76]" />
      </div>
    </section>
  );
};

export default ContactHero;