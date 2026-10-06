import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ========================================================= */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  /*
    Products direct page active राहील.
    Individual product detail page open असला तरी
    Products nav active दिसेल.
  */
  const isProductActive = location.pathname.startsWith("/products");

  return (
    <>
      {/* =====================================================
          TOP ORANGE BAR
      ===================================================== */}
      <div className="w-full bg-orange-500 text-white">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10 xl:px-12">
          <div className="flex min-h-[48px] items-center justify-between gap-4">

            {/* CONTACT DETAILS */}
            <div className="flex items-center gap-5 md:gap-8">
              <a
                href="tel:+919921269023"
                className="flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-80 md:text-[14px]"
              >
                <Phone size={15} strokeWidth={2} />

                <span className="hidden min-[380px]:inline">
                  +91 99212 69023
                </span>

                <span className="min-[380px]:hidden">
                  Call
                </span>
              </a>

              <a
                href="mailto:dr.prit23@gmail.com"
                className="hidden items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-80 sm:flex md:text-[14px]"
              >
                <Mail size={15} strokeWidth={2} />

                <span>
                  dr.prit23@gmail.com
                </span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2">
              <SocialIcon href="#" label="Facebook">
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <FaInstagram />
              </SocialIcon>

              <SocialIcon href="#" label="YouTube">
                <FaYoutube />
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <header
        className={`
          sticky top-0 z-50 w-full
          border-b border-[#EDF1EF]
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-lg"
              : "bg-white"
          }
        `}
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10 xl:px-12">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${
                scrolled
                  ? "h-[72px] lg:h-[78px]"
                  : "h-[78px] lg:h-[88px]"
              }
            `}
          >

            {/* =================================================
                LOGO
            ================================================= */}
            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label="Mutation Dermacare Home"
            >
              <img
                src="/logo.webp"
                alt="Mutation Dermacare"
                className={`
                  w-auto object-contain
                  transition-all duration-300
                  ${
                    scrolled
                      ? "h-[50px]"
                      : "h-[48px] lg:h-[62px]"
                  }
                `}
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <nav className="hidden items-center gap-7 xl:flex 2xl:gap-9">
              <NavLink
                to="/"
                active={isActive("/")}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                active={isActive("/about")}
              >
                About Us
              </NavLink>

              {/* PRODUCTS — DIRECT LINK */}
              <NavLink
                to="/products"
                active={isProductActive}
              >
                Products
              </NavLink>

              <NavLink
                to="/hotel-amenities"
                active={isActive("/hotel-amenities")}
              >
                Hotel Amenities
              </NavLink>

              <NavLink
                to="/travel-care-kits"
                active={isActive("/travel-care-kits")}
              >
                Travel Care Kits
              </NavLink>

              <NavLink
                to="/private-label"
                active={isActive("/private-label")}
              >
                Private Label
              </NavLink>

              <NavLink
                to="/contact"
                active={isActive("/contact")}
              >
                Contact
              </NavLink>
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}
            <Link
              to="/contact"
              className="
                hidden
                min-h-[48px]
                shrink-0
                items-center
                justify-center
                rounded-[28px]
                bg-[#5DAA93]
                px-7
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#438D76]
                hover:shadow-[0_8px_20px_rgba(67,141,118,0.18)]
                xl:inline-flex
              "
            >
              Enquiry Now
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#438D76]
                text-white
                transition-colors
                hover:bg-[#F07832]
                xl:hidden
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-[60]
          bg-black/40
          transition-opacity duration-300
          xl:hidden
          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-[100dvh]
          w-[88%]
          max-w-[380px]
          flex-col
          bg-white
          shadow-[-15px_0_40px_rgba(0,0,0,0.12)]
          transition-transform
          duration-300
          xl:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* MOBILE HEADER */}
        <div className="flex min-h-[82px] items-center justify-between border-b border-[#E8ECEA] px-5">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/logo.webp"
              alt="Mutation Dermacare"
              className="h-[55px] w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#F3F7F5]
              text-[#26352F]
              transition-colors
              hover:bg-[#E9F0EC]
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* =====================================================
            MOBILE LINKS
        ===================================================== */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <MobileNavLink
            to="/"
            label="Home"
            active={isActive("/")}
          />

          <MobileNavLink
            to="/about"
            label="About Us"
            active={isActive("/about")}
          />

          {/* PRODUCTS — DIRECT LINK */}
          <MobileNavLink
            to="/products"
            label="Products"
            active={isProductActive}
          />

          <MobileNavLink
            to="/hotel-amenities"
            label="Hotel Amenities"
            active={isActive("/hotel-amenities")}
          />

          <MobileNavLink
            to="/travel-care-kits"
            label="Travel Care Kits"
            active={isActive("/travel-care-kits")}
          />

          <MobileNavLink
            to="/private-label"
            label="Private Label"
            active={isActive("/private-label")}
          />

          <MobileNavLink
            to="/contact"
            label="Contact"
            active={isActive("/contact")}
          />

          {/* MOBILE CTA */}
          <Link
            to="/contact"
            className="
              mt-6
              flex
              min-h-[50px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#5DAA93]
              px-6
              text-[13px]
              font-semibold
              text-white
              transition-colors
              hover:bg-[#438D76]
            "
          >
            Enquiry Now
          </Link>

          {/* MOBILE CONTACT DETAILS */}
          <div className="mt-7 border-t border-[#E9EEEB] pt-5">
            <a
              href="tel:+919921269023"
              className="flex items-center gap-3 text-[13px] font-medium text-[#45534D]"
            >
              <Phone
                size={15}
                className="text-[#F07832]"
              />

              +91 99212 69023
            </a>

            <a
              href="mailto:dr.prit23@gmail.com"
              className="mt-4 flex items-center gap-3 text-[13px] font-medium text-[#45534D]"
            >
              <Mail
                size={15}
                className="text-[#F07832]"
              />

              dr.prit23@gmail.com
            </a>
          </div>

          {/* MOBILE SOCIAL */}
          <div className="mt-6 flex items-center gap-2">
            <MobileSocial href="#">
              <FaFacebookF />
            </MobileSocial>

            <MobileSocial href="#">
              <FaInstagram />
            </MobileSocial>

            <MobileSocial href="#">
              <FaYoutube />
            </MobileSocial>

            <MobileSocial href="#">
              <FaLinkedinIn />
            </MobileSocial>
          </div>
        </div>
      </aside>
    </>
  );
};


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

const NavLink = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`
        relative
        whitespace-nowrap
        py-2
        text-[14px]
        font-medium
        transition-colors
        duration-200
        ${
          active
            ? "text-[#438D76]"
            : "text-[#202A26] hover:text-[#438D76]"
        }
      `}
    >
      {children}

      {active && <ActiveLine />}
    </Link>
  );
};


/* =========================================================
   ACTIVE LINE
========================================================= */

const ActiveLine = () => {
  return (
    <span
      className="
        absolute
        -bottom-[8px]
        left-0
        h-[2px]
        w-full
        bg-[#5DAA93]
      "
    />
  );
};


/* =========================================================
   TOP SOCIAL ICON
========================================================= */

const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        flex
        h-[31px]
        w-[31px]
        items-center
        justify-center
        rounded-full
        bg-white/15
        text-[13px]
        text-white
        transition-all
        duration-200
        hover:bg-white
        hover:text-[#F07832]
      "
    >
      {children}
    </a>
  );
};


/* =========================================================
   MOBILE NAV LINK
========================================================= */

const MobileNavLink = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`
        block
        border-b
        border-[#E9EEEB]
        py-4
        text-[14px]
        font-medium
        transition-colors
        ${
          active
            ? "text-[#438D76]"
            : "text-[#202A26]"
        }
      `}
    >
      {label}
    </Link>
  );
};


/* =========================================================
   MOBILE SOCIAL ICON
========================================================= */

const MobileSocial = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-[#F07832]
        text-[14px]
        text-white
        transition-colors
        hover:bg-[#438D76]
      "
    >
      {children}
    </a>
  );
};

export default Navbar;