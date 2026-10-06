import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

const ContactMap = () => {
  const address =
    "Mutation Dermacare, Vighnaharta Hospital, Gat No. 2940/1/A, Plot No. 19, At Post Ale Phata, Tal. Junnar, Dist. Pune, Maharashtra 412411";

  const mapQuery = encodeURIComponent(address);

  return (
    <section className="bg-white">
      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-[1380px] px-5 pb-7 pt-5 sm:px-7 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-5 border-t border-[#E2E7E4] pt-8 md:flex-row md:items-end md:justify-between">
          
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] rounded-full bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
                Find Us
              </span>
            </div>

            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#1D2923] sm:text-[32px]">
              Visit Mutation{" "}
              <span className="text-[#438D76]">Dermacare</span>
            </h2>

            <div className="mt-3 flex max-w-[720px] items-start gap-3">
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="mt-[3px] shrink-0 text-orange-500"
              />

              <p className="text-[14px] font-medium leading-[1.7] text-[#5B6761] sm:text-[15px]">
                Mutation Dermacare, Vighnaharta Hospital, Gat No. 2940/1/A,
                Plot No. 19, At Post Ale Phata, Tal. Junnar, Dist. Pune,
                Maharashtra – 412411
              </p>
            </div>
          </div>

          {/* Google Maps Button */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-[46px]
              shrink-0
              items-center
              justify-center
              gap-3
              bg-[#438D76]
              px-6
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white
              transition-all
              duration-300
              hover:bg-orange-500
            "
          >
            Get Directions

            <ExternalLink
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="relative w-full">
        <iframe
          title="Mutation Dermacare Location"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          width="100%"
          height="430"
          style={{
            border: 0,
            display: "block",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Brand Accent */}
        <div className="absolute left-0 top-0 z-10 flex h-[4px] w-full">
          <span className="w-[18%] bg-orange-500" />
          <span className="flex-1 bg-[#438D76]" />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;