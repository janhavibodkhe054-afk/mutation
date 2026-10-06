import React, { useEffect, useState } from "react";

import {
  X,
  ArrowLeft,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    id: 1,
    name: "Anti Hairfall Shampoo",
    category: "Hair Care",
    badge: "New",

    image: "/anti-hairfall.jpeg",

    gallery: ["/anti-hairfall.jpeg"],

    specs: [
      ["Key Ingredient", "Herbal"],
      ["Pack Size", "100ml"],
      ["Hair Concern", "Hair Fall Control, Hair Growth"],
      ["Formulation Claim", "Paraben-Free, Sulphate-Free"],
      ["Hair Type", "All Hair Types"],
      ["Ideal For", "Unisex"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Shelf Life", "24 Months"],
      ["Scent", "Herbal"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Strengthen and smooth your hair with our Anti Hairfall Shampoo.",

    features: [
      "Helps reduce hair breakage",
      "Natural ingredients: Argan, Beetroot, Aloe Vera, Coconut",
      "Paraben-free and sulphate-free",
      "Suitable for all hair types",
      "Pleasant fragrance",
    ],

    benefits: [
      "Strengthens hair",
      "Smoothens hair",
      "Improves hair texture",
      "Targets damaged hair",
    ],

    ingredients:
      "Argan Oil, Beetroot Extract, Aloe Vera Gel, Coconut Oil",

    certifications: "MSDS, GMP, ISO 9001",
  },

  {
    id: 2,
    name: "Dusting Powder",
    category: "Personal Care",
    badge: "New",

    image: "/dusting-powder.jpeg",

    gallery: ["/dusting-powder.jpeg"],

    specs: [
      ["Product Type", "Dusting Powder"],
      ["Category", "Personal Care"],
      ["Usage", "Everyday Personal Care"],
      ["Ideal For", "Regular Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Container"],
      ["Supply Type", "Retail & Bulk"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Dusting Powder developed for everyday personal care and hygiene requirements.",

    features: [
      "Easy everyday application",
      "Convenient packaging",
      "Suitable for regular personal care",
      "Available for bulk requirements",
    ],

    benefits: [
      "Supports everyday freshness",
      "Convenient to use",
      "Suitable for daily personal care",
    ],

    ingredients: "Product formulation details available on enquiry.",

    certifications: "Details available on enquiry",
  },

  {
    id: 3,
    name: "Fairness Face Gel",
    category: "Face Care",
    badge: "New",

    image: "/fairness-gel.jpeg",

    gallery: ["/fairness-gel.jpeg"],

    specs: [
      ["Product Type", "Face Gel"],
      ["Category", "Face Care"],
      ["Texture", "Gel"],
      ["Usage", "Everyday Face Care"],
      ["Ideal For", "Regular Use"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Jar"],
      ["Supply Type", "Retail & Bulk"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "A lightweight face gel developed for convenient everyday face care.",

    features: [
      "Lightweight gel texture",
      "Easy everyday application",
      "Designed for regular face care",
      "Convenient packaging",
    ],

    benefits: [
      "Supports everyday skincare",
      "Easy to include in daily routine",
      "Convenient face care solution",
    ],

    ingredients: "Product formulation details available on enquiry.",

    certifications: "Details available on enquiry",
  },

  {
    id: 4,
    name: "Moisturising Cream",
    category: "Skin Care",
    badge: "New",

    image: "/moisturising.jpeg",

    gallery: ["/moisturising.jpeg"],

    specs: [
      ["Product Type", "Moisturising Cream"],
      ["Category", "Skin Care"],
      ["Usage", "Everyday Moisturisation"],
      ["Ideal For", "Daily Skin Care"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Jar"],
      ["Supply Type", "Retail & Bulk"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "An everyday moisturising cream developed for convenient daily skincare.",

    features: [
      "Cream-based formulation",
      "Suitable for everyday skincare",
      "Convenient jar packaging",
      "Designed for regular use",
    ],

    benefits: [
      "Supports everyday moisturisation",
      "Helps maintain comfortable-feeling skin",
      "Easy to include in daily skincare",
    ],

    ingredients: "Product formulation details available on enquiry.",

    certifications: "Details available on enquiry",
  },

  {
    id: 5,
    name: "Moisturising Soap",
    category: "Bath Care",
    badge: "New",

    image: "/moisturising-soap.jpeg",

    gallery: ["/moisturising-soap.jpeg"],

    specs: [
      ["Product Type", "Moisturising Soap"],
      ["Category", "Bath Care"],
      ["Usage", "Daily Cleansing"],
      ["Ideal For", "Everyday Bath Care"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Soap Pack"],
      ["Supply Type", "Retail & Bulk"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "A daily cleansing soap developed for convenient everyday bath care.",

    features: [
      "Designed for daily cleansing",
      "Convenient bath care format",
      "Suitable for everyday use",
      "Available for bulk requirements",
    ],

    benefits: [
      "Supports everyday cleansing",
      "Convenient for daily bath care",
      "Suitable for regular personal care",
    ],

    ingredients: "Product formulation details available on enquiry.",

    certifications: "Details available on enquiry",
  },

  {
    id: 6,
    name: "Neem Care Soap",
    category: "Bath Care",
    badge: "New",

    image: "/neem-soap.jpeg",

    gallery: ["/neem-soap.jpeg"],

    specs: [
      ["Key Ingredient", "Neem"],
      ["Product Type", "Care Soap"],
      ["Category", "Bath Care"],
      ["Usage", "Daily Cleansing"],
      ["Ideal For", "Everyday Bath Care"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Soap Pack"],
      ["Supply Type", "Retail & Bulk"],
    ],

    description:
      "Neem Care Soap developed for convenient everyday cleansing and bath care.",

    features: [
      "Neem-based care",
      "Designed for everyday cleansing",
      "Convenient soap format",
      "Suitable for regular use",
    ],

    benefits: [
      "Supports daily cleansing",
      "Convenient for regular bath routines",
      "Practical everyday personal care",
    ],

    ingredients: "Neem and supporting soap formulation ingredients.",

    certifications: "Details available on enquiry",
  },

  {
    id: 7,
    name: "Saffron Radiance Face Wash",
    category: "Face Care",
    badge: "New",

    image: "/radiance-face-wash.jpeg",

    gallery: ["/radiance-face-wash.jpeg"],

    specs: [
      ["Key Ingredient", "Saffron"],
      ["Product Type", "Face Wash"],
      ["Category", "Face Care"],
      ["Usage", "Everyday Face Cleansing"],
      ["Ideal For", "Daily Face Care"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Retail & Bulk"],
    ],

    description:
      "Saffron Radiance Face Wash developed for everyday cleansing and face care.",

    features: [
      "Saffron-based face care",
      "Designed for everyday cleansing",
      "Convenient bottle format",
      "Suitable for regular face care",
    ],

    benefits: [
      "Supports everyday face cleansing",
      "Easy to include in skincare routines",
      "Convenient daily face care",
    ],

    ingredients:
      "Saffron and supporting face wash formulation ingredients.",

    certifications: "Details available on enquiry",
  },

  {
    id: 8,
    name: "Baby Soft Skin Lotion",
    category: "Baby Care",
    badge: "New",

    image: "/baby-lotion.jpeg",

    gallery: ["/baby-lotion.jpeg"],

    specs: [
      ["Product Type", "Baby Lotion"],
      ["Category", "Baby Care"],
      ["Usage", "Skin Moisturisation"],
      ["Ideal For", "Baby Care"],
      ["Brand", "Mutation Dermacare"],
      ["Packaging Type", "Bottle"],
      ["Supply Type", "Retail & Bulk"],
      ["Customisation", "Customize as per customer"],
    ],

    description:
      "Baby Soft Skin Lotion developed for convenient everyday baby care.",

    features: [
      "Designed for baby care routines",
      "Convenient lotion format",
      "Easy everyday application",
      "Practical bottle packaging",
    ],

    benefits: [
      "Supports everyday moisturising",
      "Easy to apply",
      "Convenient for regular baby care",
    ],

    ingredients: "Product formulation details available on enquiry.",

    certifications: "Details available on enquiry",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setActiveImage(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setActiveImage(0);
  };

  /* BODY SCROLL LOCK */

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

  /* ESC CLOSE */

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

  /* WHATSAPP */

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
          PRODUCTS SECTION
      ====================================================== */}

      <section
        id="products-grid"
        className="relative bg-[#F7F7F5] py-14 sm:py-16 lg:py-[68px]"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10 xl:px-12">
          {/* =================================================
              HEADING
          ================================================= */}

          <div className="mb-9 max-w-[700px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[32px] bg-orange-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-[12px]">
                Our Products
              </span>
            </div>

            <h2 className="mt-3 text-[31px] font-bold leading-[1.1] tracking-[-0.035em] text-[#17251F] sm:text-[38px] lg:text-[42px]">
              Personal Care
              <span className="text-[#438D76]"> Products</span>
            </h2>

            <p className="mt-3 max-w-[650px] text-[15px] font-medium leading-[1.7] text-[#505C56] sm:text-[16px]">
              Explore our personal care range for everyday skincare, haircare,
              bath and hygiene requirements.
            </p>
          </div>

          {/* =================================================
              PRODUCTS GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  hover:shadow-[0_14px_30px_rgba(25,42,34,0.09)]
                "
              >
                {/* IMAGE */}

                <div className="relative flex h-[245px] items-center justify-center overflow-hidden bg-[#F4F3EF] sm:h-[255px]">
                  {/* NEW */}

                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      rounded-[6px]
                      bg-orange-500
                      px-3
                      py-[6px]
                      text-[11px]
                      font-bold
                      text-white
                    "
                  >
                    {product.badge}
                  </span>

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
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-orange-600">
                    {product.category}
                  </span>

                  <h3
                    className="
                      mt-1.5
                      min-h-[48px]
                      text-[17px]
                      font-bold
                      leading-[1.4]
                      text-[#182720]
                      sm:text-[18px]
                    "
                  >
                    {product.name}
                  </h3>

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-end
                      gap-3
                      border-t
                      border-[#E8EBE9]
                      pt-3
                    "
                  >
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProduct(product);
                      }}
                      className="
                        group/button
                        inline-flex
                        items-center
                        gap-1.5
                        text-[12px]
                        font-bold
                        text-[#367762]
                      "
                    >
                      View Details

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT MODAL
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
            aria-labelledby="product-modal-title"
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
                MODAL HEADER
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
                {/* BACK */}

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
                    duration-200
                    hover:bg-[#F1F2F1]
                  "
                >
                  <ArrowLeft size={21} strokeWidth={2.2} />
                </button>

                {/* TITLE */}

                <h2
                  id="product-modal-title"
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

              {/* CLOSE */}

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
                  duration-200
                  hover:bg-[#F1F2F1]
                "
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-5">
              {/* =================================================
                  IMAGES
              ================================================= */}

              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {selectedProduct.gallery.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`
                      flex
                      h-[100px]
                      w-[100px]
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[5px]
                      border
                      bg-white
                      p-2
                      transition-colors
                      duration-200
                      sm:h-[115px]
                      sm:w-[115px]

                      ${
                        activeImage === index
                          ? "border-[#438D76]"
                          : "border-[#D5D9D7]"
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
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
                      grid-cols-[40%_60%]
                      gap-2
                      py-[3px]
                      sm:grid-cols-[38%_62%]
                    "
                  >
                    <span
                      className="
                        text-[13px]
                        font-medium
                        leading-[1.5]
                        text-[#525B56]
                        sm:text-[14px]
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        text-[13px]
                        font-medium
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
                    leading-[1.55]
                    text-[#3D4541]
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

              <div className="mt-3">
                <h3
                  className="
                    text-[14px]
                    font-bold
                    leading-[1.5]
                    text-[#202622]
                    sm:text-[15px]
                  "
                >
                  Key Features:
                </h3>

                <div className="mt-[2px]">
                  {selectedProduct.features.map((item) => (
                    <p
                      key={item}
                      className="
                        text-[14px]
                        font-medium
                        leading-[1.5]
                        text-[#3D4541]
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

              <div className="mt-3">
                <h3
                  className="
                    text-[14px]
                    font-bold
                    leading-[1.5]
                    text-[#202622]
                    sm:text-[15px]
                  "
                >
                  Benefits:
                </h3>

                <div className="mt-[2px]">
                  {selectedProduct.benefits.map((item) => (
                    <p
                      key={item}
                      className="
                        text-[14px]
                        font-medium
                        leading-[1.5]
                        text-[#3D4541]
                        sm:text-[15px]
                      "
                    >
                      - {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* =================================================
                  INGREDIENTS
              ================================================= */}

              <p
                className="
                  mt-3
                  text-[14px]
                  font-medium
                  leading-[1.55]
                  text-[#3D4541]
                  sm:text-[15px]
                "
              >
                <span className="font-bold text-[#202622]">
                  Ingredients:
                </span>{" "}
                {selectedProduct.ingredients}
              </p>

              {/* =================================================
                  CERTIFICATIONS
              ================================================= */}

              <p
                className="
                  mt-1
                  text-[14px]
                  font-medium
                  leading-[1.55]
                  text-[#3D4541]
                  sm:text-[15px]
                "
              >
                <span className="font-bold text-[#202622]">
                  Certifications:
                </span>{" "}
                {selectedProduct.certifications}
              </p>

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
                  <MessageCircle
                    size={18}
                    strokeWidth={2.3}
                    className="shrink-0"
                  />

                  <span>WhatsApp</span>
                </a>

                {/* CALL */}

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
                  <Phone
                    size={17}
                    strokeWidth={2.4}
                    className="shrink-0"
                  />

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

export default ProductsSection;