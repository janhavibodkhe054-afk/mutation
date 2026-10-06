import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const solutionLinks = [
  { label: "Personal Care Products", path: "/products" },
  { label: "Hotel Amenities", path: "/hotel-amenities" },
  { label: "Travel Care Kits", path: "/travel-care-kits" },
  { label: "Private Label", path: "/private-label" },
  { label: "Bulk Orders", path: "/bulk-orders" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-conditions" },
  { label: "Return & Refund Policy", path: "/return-refund-policy" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#17251F] text-white">
      {/* =====================================================
          TOP BRAND LINE
      ====================================================== */}

      <div className="flex h-[4px] w-full">
        <div className="w-[38%] bg-[#F07832]" />
        <div className="flex-1 bg-[#438D76]" />
      </div>

      {/* =====================================================
          SUBTLE BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-[160px]
            top-[40px]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-white/[0.05]
          "
        />

        <div
          className="
            absolute
            -right-[75px]
            top-[125px]
            h-[190px]
            w-[190px]
            rounded-full
            border
            border-white/[0.05]
          "
        />

        <div className="absolute left-[37%] top-0 h-full w-px bg-white/[0.025]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          pb-8
          pt-10
          sm:px-7
          sm:pt-11
          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-9
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.7fr_1fr_1.25fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Mutation Dermacare Home"
              className="
                inline-flex
                items-center
                rounded-[14px]
                bg-white
                px-4
                py-3
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              "
            >
              <img
                src="/logo.webp"
                alt="Mutation Dermacare"
                className="h-[48px] w-auto object-contain sm:h-[52px]"
              />
            </Link>

            <p
              className="
                mt-5
                max-w-[355px]
                text-[14px]
                font-medium
                leading-[1.75]
                text-[#D5E0DB]
                sm:text-[15px]
              "
            >
              Quality personal care products and complete B2B solutions for
              hotels, travel businesses, cosmetic brands and growing
              businesses.
            </p>

            {/* BRAND SIGNATURE */}

            <div className="mt-6 flex items-center gap-3">
              <span className="h-[3px] w-[36px] rounded-full bg-[#F07832]" />

              <span className="h-[6px] w-[6px] rounded-full bg-[#8BC8B3]" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#B8CBC2]
                "
              >
                Personal Care · B2B Solutions
              </span>
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <FooterColumn title="Company">
            {companyLinks.map((item) => (
              <FooterLink key={item.label} to={item.path}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* =================================================
              SOLUTIONS
          ================================================= */}

          <FooterColumn title="Solutions">
            {solutionLinks.map((item) => (
              <FooterLink key={item.label} to={item.path}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <FooterTitle>Get in Touch</FooterTitle>

            <div className="mt-5 space-y-3">
              {/* PHONE */}

              <a
                href="tel:+919921269023"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-[12px]
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  p-3
                  transition-all
                  duration-300
                  hover:border-white/[0.14]
                  hover:bg-white/[0.06]
                "
              >
                <ContactIcon>
                  <Phone size={15} strokeWidth={1.9} />
                </ContactIcon>

                <div className="min-w-0 flex-1">
                  <span
                    className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[#AFC1B8]
                    "
                  >
                    Call Us
                  </span>

                  <span className="mt-[2px] block text-[14px] font-bold text-white sm:text-[15px]">
                    +91 99212 69023
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  className="
                    text-[#82978D]
                    transition-all
                    duration-300
                    group-hover:-translate-y-[2px]
                    group-hover:translate-x-[2px]
                    group-hover:text-orange-400
                  "
                />
              </a>

              {/* EMAIL */}

              <a
                href="mailto:dr.prit23@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-[12px]
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  p-3
                  transition-all
                  duration-300
                  hover:border-white/[0.14]
                  hover:bg-white/[0.06]
                "
              >
                <ContactIcon>
                  <Mail size={15} strokeWidth={1.9} />
                </ContactIcon>

                <div className="min-w-0 flex-1">
                  <span
                    className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[#AFC1B8]
                    "
                  >
                    Email Us
                  </span>

                  <span
                    className="
                      mt-[2px]
                      block
                      break-all
                      text-[14px]
                      font-bold
                      text-white
                      sm:text-[15px]
                    "
                  >
                    dr.prit23@gmail.com
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  className="
                    shrink-0
                    text-[#82978D]
                    transition-all
                    duration-300
                    group-hover:-translate-y-[2px]
                    group-hover:translate-x-[2px]
                    group-hover:text-orange-400
                  "
                />
              </a>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-[12px]
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  p-3
                "
              >
                <ContactIcon>
                  <MapPin size={15} strokeWidth={1.9} />
                </ContactIcon>

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[#AFC1B8]
                    "
                  >
                    Location
                  </span>

                  <p className="mt-[2px] text-[14px] font-semibold leading-[1.45] text-[#EDF3F0]">
                    Ale Phata, Junnar, Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="mt-9 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/[0.09]" />

          <span className="h-[6px] w-[6px] rounded-full bg-[#438D76]" />

          <span className="h-[6px] w-[6px] rounded-full bg-[#F07832]" />

          <div className="h-px flex-1 bg-white/[0.09]" />
        </div>

        {/* =====================================================
            COPYRIGHT + LEGAL
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            pt-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p className="text-[12px] font-medium text-[#B5C6BE] sm:text-[13px]">
            © 2026 Mutation Dermacare. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link
                  to={item.path}
                  className="
                    text-[12px]
                    font-medium
                    text-[#B5C6BE]
                    transition-colors
                    duration-300
                    hover:text-white
                    sm:text-[13px]
                  "
                >
                  {item.label}
                </Link>

                {index !== legalLinks.length - 1 && (
                  <span className="h-[4px] w-[4px] rounded-full bg-[#6D8278]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          DESIGNED & DEVELOPED BY
      ====================================================== */}

      <div className="relative border-t border-white/[0.07] bg-[#111D18]">
        <div
          className="
            mx-auto
            flex
            max-w-[1380px]
            flex-col
            items-center
            justify-center
            gap-1
            px-5
            py-3.5
            text-center
            sm:flex-row
            sm:gap-2
            lg:px-10
          "
        >
          <span className="text-[11px] font-medium tracking-[0.02em] text-[#93A69D] sm:text-[12px]">
            Designed &amp; Developed by
          </span>

          <a
            href="https://www.hashgridtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              text-[11px]
              font-bold
              text-[#E7EEEA]
              transition-colors
              duration-300
              hover:text-[#F59A60]
              sm:text-[12px]
            "
          >
            HashGrid Technologies Pvt. Ltd.

            <ArrowUpRight
              size={12}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-[1px]
                group-hover:translate-x-[1px]
              "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   FOOTER COLUMN
========================================================= */

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>

      <div className="mt-5 flex flex-col items-start gap-3">
        {children}
      </div>
    </div>
  );
};

/* =========================================================
   FOOTER TITLE
========================================================= */

const FooterTitle = ({ children }) => {
  return (
    <div>
      <h3
        className="
          text-[13px]
          font-extrabold
          uppercase
          tracking-[0.11em]
          text-white
          sm:text-[14px]
        "
      >
        {children}
      </h3>

      <div className="mt-2.5 flex items-center gap-1.5">
        <span className="h-[3px] w-[24px] rounded-full bg-[#F07832]" />
        <span className="h-[3px] w-[8px] rounded-full bg-[#438D76]" />
      </div>
    </div>
  );
};

/* =========================================================
   FOOTER LINK
========================================================= */

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="
        group
        flex
        items-center
        gap-3
        text-[14px]
        font-medium
        leading-[1.5]
        text-[#C7D3CD]
        transition-all
        duration-300
        hover:translate-x-[3px]
        hover:text-white
        sm:text-[15px]
      "
    >
      <span
        className="
          h-[5px]
          w-[5px]
          shrink-0
          rounded-full
          bg-[#688076]
          transition-all
          duration-300
          group-hover:bg-[#F07832]
        "
      />

      {children}
    </Link>
  );
};

/* =========================================================
   CONTACT ICON
========================================================= */

const ContactIcon = ({ children }) => {
  return (
    <span
      className="
        flex
        h-[34px]
        w-[34px]
        shrink-0
        items-center
        justify-center
        rounded-[9px]
        bg-[#294238]
        text-[#F5A06C]
      "
    >
      {children}
    </span>
  );
};

export default Footer;