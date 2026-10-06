import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    id: 1,
    name: "Hair Shampoo",
    category: "Hair Care",
    reviews: "150 reviews",
    image: "/hair-shampoo.webp",

    specs: [
      ["Product Type", "Hair Shampoo"],
      ["Pack Size", "As per requirement"],
      ["Hair Concern", "Daily Hair Care"],
      ["Hair Type", "All Hair Types"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hair Shampoo developed for hotels, resorts and hospitality guest-care requirements.",

    features: [
      "Suitable for everyday guest hair care",
      "Convenient hotel amenity packaging",
      "Suitable for hospitality requirements",
      "Available for bulk requirements",
      "Custom branding and packaging options available",
    ],

    benefits: [
      "Supports everyday hair cleansing",
      "Completes hotel guest-care amenities",
      "Convenient for hotel and resort bathrooms",
      "Suitable for bulk hospitality requirements",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 2,
    name: "Hair Conditioner",
    category: "Hair Care",
    reviews: "150 reviews",
    image: "/hair-conditioner.webp",

    specs: [
      ["Product Type", "Hair Conditioner"],
      ["Pack Size", "As per requirement"],
      ["Hair Concern", "Everyday Hair Care"],
      ["Hair Type", "All Hair Types"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hair Conditioner developed as a convenient guest-care product for hotels, resorts and hospitality businesses.",

    features: [
      "Suitable for everyday guest hair care",
      "Convenient bottle packaging",
      "Suitable for hospitality amenity ranges",
      "Available for bulk requirements",
      "Custom branding options available",
    ],

    benefits: [
      "Complements hotel shampoo amenities",
      "Supports a complete hair-care range",
      "Convenient for guest bathrooms",
      "Suitable for bulk hospitality supply",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 3,
    name: "Shower Gel",
    category: "Bath Care",
    reviews: "150 reviews",
    image: "/shower-gell.webp",

    specs: [
      ["Product Type", "Shower Gel"],
      ["Pack Size", "As per requirement"],
      ["Usage", "Daily Bath Care"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Shower Gel developed for convenient everyday guest bath-care requirements.",

    features: [
      "Designed for hospitality guest use",
      "Convenient bathroom amenity",
      "Easy-to-use bottle packaging",
      "Available for bulk requirements",
      "Custom branding options available",
    ],

    benefits: [
      "Supports everyday guest bath care",
      "Completes hotel bathroom amenities",
      "Convenient for hotels and resorts",
      "Suitable for bulk supply",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 4,
    name: "Face Wash",
    category: "Face Care",
    reviews: "150 reviews",
    image: "/face-wash.webp",

    specs: [
      ["Product Type", "Face Wash"],
      ["Pack Size", "As per requirement"],
      ["Usage", "Everyday Face Cleansing"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Face Wash developed for convenient guest personal-care and hospitality requirements.",

    features: [
      "Suitable for everyday face cleansing",
      "Guest-friendly packaging",
      "Convenient hotel amenity format",
      "Available for bulk supply",
      "Custom branding options available",
    ],

    benefits: [
      "Adds value to hotel guest-care amenities",
      "Convenient for guest bathrooms",
      "Easy to include in hospitality ranges",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 5,
    name: "Moisturiser",
    category: "Skin Care",
    reviews: "150 reviews",
    image: "/moisturiser.webp",

    specs: [
      ["Product Type", "Moisturiser"],
      ["Pack Size", "As per requirement"],
      ["Usage", "Everyday Skin Care"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Moisturiser developed as a convenient personal-care amenity for hospitality requirements.",

    features: [
      "Convenient guest-care format",
      "Suitable for hospitality requirements",
      "Easy-to-use packaging",
      "Available for bulk supply",
      "Custom branding options available",
    ],

    benefits: [
      "Complements hotel personal-care amenities",
      "Convenient for guest rooms",
      "Suitable for hospitality amenity kits",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 6,
    name: "Hair Oil",
    category: "Hair Care",
    reviews: "150 reviews",
    image: "/hairoil.webp",

    specs: [
      ["Product Type", "Hair Oil"],
      ["Pack Size", "As per requirement"],
      ["Usage", "Hair Care"],
      ["Ideal For", "Hotel & Hospitality Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hair Oil available as part of the Mutation Dermacare hospitality and guest-care product range.",

    features: [
      "Convenient guest-size format",
      "Suitable for hotel amenity kits",
      "Available for hospitality requirements",
      "Bulk supply available",
      "Custom branding options available",
    ],

    benefits: [
      "Expands hotel hair-care amenities",
      "Convenient for guest use",
      "Suitable for hospitality kits",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 7,
    name: "Hotel Dental Kit",
    category: "Guest Essentials",
    reviews: "150 reviews",
    image: "/dental-kit.png",

    specs: [
      ["Product Type", "Hotel Dental Kit"],
      ["Category", "Guest Essentials"],
      ["Usage", "Guest Oral Care"],
      ["Ideal For", "Hotels, Resorts & Homestays"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Individual Kit"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hotel Dental Kit designed as a convenient oral-care essential for hospitality guests.",

    features: [
      "Compact guest amenity",
      "Convenient individual packaging",
      "Suitable for hotel guest rooms",
      "Available for bulk requirements",
      "Custom branding options available",
    ],

    benefits: [
      "Provides essential oral-care convenience",
      "Completes guest-room amenities",
      "Suitable for hotels, resorts and homestays",
    ],

    details: "Kit contents and specifications available on enquiry.",
  },

  {
    id: 8,
    name: "Hotel Disposable Slippers",
    category: "Guest Comfort",
    reviews: "150 reviews",
    image: "/slippers.png",

    specs: [
      ["Product Type", "Disposable Slippers"],
      ["Category", "Guest Comfort"],
      ["Usage", "Guest Room Use"],
      ["Ideal For", "Hotels & Resorts"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Individual Pack"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hotel Disposable Slippers designed to add everyday comfort and convenience to guest rooms.",

    features: [
      "Convenient guest-room essential",
      "Individual-use format",
      "Suitable for hospitality properties",
      "Available for bulk requirements",
      "Customisation options available",
    ],

    benefits: [
      "Adds comfort to the guest experience",
      "Convenient for hotel rooms",
      "Completes hospitality amenity requirements",
    ],

    details: "Product material and specifications available on enquiry.",
  },

  {
    id: 9,
    name: "Hotel Shower Cap",
    category: "Guest Essentials",
    reviews: "150 reviews",
    image: "/cap.png",

    specs: [
      ["Product Type", "Hotel Shower Cap"],
      ["Category", "Guest Essentials"],
      ["Usage", "Bathroom Amenity"],
      ["Ideal For", "Hotels & Resorts"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Individual Pack"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hotel Shower Cap designed as a compact and convenient guest bathroom amenity.",

    features: [
      "Compact hospitality essential",
      "Individual guest packaging",
      "Suitable for hotel bathrooms",
      "Available for bulk supply",
      "Custom packaging options available",
    ],

    benefits: [
      "Adds convenience for hotel guests",
      "Easy to include in bathroom amenity kits",
      "Suitable for hospitality requirements",
    ],

    details: "Product material and specifications available on enquiry.",
  },

  {
    id: 10,
    name: "Hotel Shaving Kit",
    category: "Guest Essentials",
    reviews: "150 reviews",
    image: "/shaving-kit.png",

    specs: [
      ["Product Type", "Hotel Shaving Kit"],
      ["Category", "Guest Essentials"],
      ["Usage", "Guest Personal Care"],
      ["Ideal For", "Hotels & Resorts"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Individual Kit"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Hotel Shaving Kit developed as a convenient personal-care essential for hospitality guests.",

    features: [
      "Compact guest-care kit",
      "Convenient individual packaging",
      "Suitable for hotel guest rooms",
      "Available for bulk supply",
      "Custom branding options available",
    ],

    benefits: [
      "Adds value to guest personal-care amenities",
      "Convenient for hospitality use",
      "Completes hotel guest-care kits",
    ],

    details: "Kit contents and specifications available on enquiry.",
  },

  {
    id: 11,
    name: "Baby Shampoo",
    category: "Baby Care",
    reviews: "150 reviews",
    image: "/baby-shampoo.png",

    specs: [
      ["Product Type", "Baby Shampoo"],
      ["Category", "Baby Care"],
      ["Pack Size", "As per requirement"],
      ["Ideal For", "Hospitality Requirements"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Baby Shampoo available for hospitality businesses looking to expand their family guest-care amenities.",

    features: [
      "Baby-care amenity option",
      "Convenient bottle packaging",
      "Suitable for hospitality requirements",
      "Available for bulk supply",
      "Custom branding options available",
    ],

    benefits: [
      "Expands hospitality guest-care options",
      "Suitable for family-oriented properties",
      "Convenient addition to amenity ranges",
    ],

    details: "Formulation details available on enquiry.",
  },

  {
    id: 12,
    name: "Baby Lotion",
    category: "Baby Care",
    reviews: "150 reviews",
    image: "/baby-lotion.jpeg",

    specs: [
      ["Product Type", "Baby Lotion"],
      ["Category", "Baby Care"],
      ["Pack Size", "As per requirement"],
      ["Ideal For", "Hospitality Requirements"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Bulk / B2B"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Baby Lotion available as part of the hospitality and family guest-care product range.",

    features: [
      "Baby-care amenity option",
      "Convenient bottle packaging",
      "Suitable for hospitality use",
      "Available for bulk supply",
      "Custom branding options available",
    ],

    benefits: [
      "Complements baby-care amenities",
      "Suitable for family-oriented properties",
      "Expands hotel guest-care options",
    ],

    details: "Formulation details available on enquiry.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const HotelAmenityRange = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  /* =========================================================
     ESC CLOSE
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     WHATSAPP LINK
  ========================================================= */

  const getWhatsAppLink = () => {
    if (!selectedProduct) return "#";

    const message = encodeURIComponent(
      `Hello Mutation Dermacare, I want to enquire about ${selectedProduct.name}.`
    );

    return `https://wa.me/919921269023?text=${message}`;
  };

  return (
    <>
      {/* =====================================================
          HOTEL AMENITY PRODUCTS
      ====================================================== */}

      <section
        id="hotel-amenities-range"
        className="relative overflow-hidden bg-[#F6F4F0] py-14 sm:py-16 lg:py-[70px]"
      >
        {/* BACKGROUND DETAILS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-[170px] top-[60px] h-[340px] w-[340px] rounded-full border border-[#438D76]/10" />

          <div className="absolute -left-[160px] bottom-[100px] h-[320px] w-[320px] rounded-full border border-orange-500/10" />

          <div className="absolute left-[8%] top-0 h-[55px] w-px bg-orange-500/25" />
        </div>

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 xl:px-14">
          {/* =================================================
              HEADING
          ================================================= */}

          <div className="mx-auto max-w-[760px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-[35px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
                Hotel Amenity Range
              </span>

              <span className="h-px w-[35px] bg-orange-500" />
            </div>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D2923] sm:text-[39px] lg:text-[45px]">
              Everything Your Guests
              <span className="block text-[#438D76]">
                Need For A Better Stay.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[15px] font-medium leading-[1.75] text-[#55615B] sm:text-[16px]">
              A complete range of personal care and guest essentials for
              hotels, resorts, homestays and hospitality businesses.
            </p>
          </div>

          {/* =================================================
              PRODUCTS GRID
          ================================================= */}

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                onClick={() => openProduct(product)}
                className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#DFE3E0]
                  bg-white
                  shadow-[0_5px_18px_rgba(25,42,34,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-[4px]
                  hover:border-[#438D76]/40
                  hover:shadow-[0_15px_35px_rgba(25,42,34,0.10)]
                "
              >
                {/* =============================================
                    IMAGE
                ============================================== */}

                <div
                  className="
                    relative
                    flex
                    h-[235px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#F2F1ED]
                    sm:h-[245px]
                  "
                >
                  {/* CATEGORY */}

                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      z-10
                      rounded-[5px]
                      bg-white
                      px-3
                      py-[6px]
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#438D76]
                      shadow-sm
                    "
                  >
                    {product.category}
                  </span>

                  {/* PRODUCT IMAGE */}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-contain
                      p-4
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />
                </div>

                {/* =============================================
                    CARD CONTENT
                ============================================== */}

                <div className="p-4">
                  {/* REVIEWS */}

                  <p className="text-[12px] font-medium text-[#77817C]">
                    {product.reviews}
                  </p>

                  {/* NAME */}

                  <h3
                    className="
                      mt-1
                      min-h-[48px]
                      text-[17px]
                      font-bold
                      leading-[1.4]
                      text-[#1D2923]
                      sm:text-[18px]
                    "
                  >
                    {product.name}
                  </h3>

                  {/* ENQUIRE */}

                  <div className="mt-3 border-t border-[#E5E8E6] pt-3">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProduct(product);
                      }}
                      className="
                        group/button
                        flex
                        w-full
                        items-center
                        justify-between
                        text-left
                      "
                    >
                      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#438D76]">
                        Enquire
                      </span>

                      <span
                        className="
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#B9C6C0]
                          text-[#438D76]
                          transition-all
                          duration-300
                          group-hover/button:border-orange-500
                          group-hover/button:bg-orange-500
                          group-hover/button:text-white
                        "
                      >
                        <ArrowRight size={15} />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DETAIL MODAL
      ====================================================== */}

      {selectedProduct && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/60
            p-2
            sm:p-4
          "
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="hotel-product-title"
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              my-auto
              max-h-[95vh]
              w-full
              max-w-[780px]
              overflow-y-auto
              rounded-[9px]
              bg-white
              shadow-[0_25px_80px_rgba(0,0,0,0.30)]
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                sticky
                top-0
                z-30
                flex
                min-h-[56px]
                items-center
                justify-between
                border-b
                border-[#DCDDDC]
                bg-white
                px-3
                sm:px-5
              "
            >
              <div className="flex min-w-0 items-center gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Back"
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[#252B28]
                    transition-colors
                    hover:bg-[#F1F2F1]
                  "
                >
                  <ArrowLeft size={21} strokeWidth={2.2} />
                </button>

                <h2
                  id="hotel-product-title"
                  className="
                    truncate
                    text-[17px]
                    font-bold
                    text-[#202622]
                    sm:text-[19px]
                  "
                >
                  {selectedProduct.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[#252B28]
                  transition-colors
                  hover:bg-[#F1F2F1]
                "
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="px-4 pb-5 pt-4 sm:px-6">
              {/* =================================================
                  ONE LARGE PRODUCT IMAGE
              ================================================= */}

              <div
                className="
                  group/image
                  relative
                  flex
                  h-[245px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[6px]
                  border
                  border-[#D9DEDB]
                  bg-[#F5F4F1]
                  sm:h-[300px]
                "
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="
                    h-[95%]
                    w-[95%]
                    object-contain
                    transition-transform
                    duration-500
                    ease-out
                    group-hover/image:scale-[1.10]
                  "
                />
              </div>

              {/* =================================================
                  SPECIFICATIONS
              ================================================= */}

              <div className="mt-4">
                {selectedProduct.specs.map(([label, value], index) => (
                  <div
                    key={`${label}-${index}`}
                    className="
                      grid
                      grid-cols-[42%_58%]
                      gap-3
                      py-[3px]
                      sm:grid-cols-[40%_60%]
                    "
                  >
                    <span
                      className="
                        text-[13px]
                        font-medium
                        leading-[1.5]
                        text-[#4E5652]
                        sm:text-[14px]
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.5]
                        text-[#252C28]
                        sm:text-[14px]
                      "
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div className="mt-4 border-t border-[#E0E2E1] pt-3">
                <p
                  className="
                    text-[14px]
                    font-medium
                    leading-[1.6]
                    text-[#333A36]
                    sm:text-[15px]
                  "
                >
                  <span className="font-bold text-[#202622]">
                    Description:
                  </span>{" "}
                  {selectedProduct.description}
                </p>
              </div>

              {/* =================================================
                  KEY FEATURES
              ================================================= */}

              <div className="mt-2.5">
                <p className="text-[14px] font-bold text-[#202622] sm:text-[15px]">
                  Key Features:
                </p>

                <div className="mt-[2px]">
                  {selectedProduct.features.map((item) => (
                    <p
                      key={item}
                      className="
                        text-[14px]
                        font-medium
                        leading-[1.55]
                        text-[#333A36]
                        sm:text-[15px]
                      "
                    >
                      - {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="mt-2.5">
                <p className="text-[14px] font-bold text-[#202622] sm:text-[15px]">
                  Benefits:
                </p>

                <div className="mt-[2px]">
                  {selectedProduct.benefits.map((item) => (
                    <p
                      key={item}
                      className="
                        text-[14px]
                        font-medium
                        leading-[1.55]
                        text-[#333A36]
                        sm:text-[15px]
                      "
                    >
                      - {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* =================================================
                  PRODUCT DETAILS
              ================================================= */}

              <p
                className="
                  mt-2.5
                  text-[14px]
                  font-medium
                  leading-[1.55]
                  text-[#333A36]
                  sm:text-[15px]
                "
              >
                <span className="font-bold text-[#202622]">
                  Product Details:
                </span>{" "}
                {selectedProduct.details}
              </p>

              {/* =================================================
                  COMPANY INFO
              ================================================= */}

              <div className="mt-4 border-t border-[#E0E2E1] pt-3">
                <p className="text-[16px] font-bold text-[#202622]">
                  Mutation Dermacare
                </p>

                <p className="mt-1 text-[13px] font-medium text-[#5A635E] sm:text-[14px]">
                  Personal Care & Hotel Amenity Solutions
                </p>
              </div>

              {/* =================================================
                  WHATSAPP + CALL NOW
              ================================================= */}

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {/* WHATSAPP */}

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    border
                    border-[#159A62]
                    bg-white
                    px-3
                    text-[13px]
                    font-bold
                    text-[#128A58]
                    transition-all
                    duration-300
                    hover:bg-[#F0FBF6]
                    sm:text-[14px]
                  "
                >
                  <MessageCircle size={18} strokeWidth={2.3} />

                  <span>WhatsApp</span>
                </a>

                {/* CALL NOW */}

                <a
                  href="tel:+919921269023"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    bg-[#438D76]
                    px-3
                    text-[13px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#34735F]
                    sm:text-[14px]
                  "
                >
                  <Phone size={17} strokeWidth={2.4} />

                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HotelAmenityRange;