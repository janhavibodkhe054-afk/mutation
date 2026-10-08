import React, { useEffect, useState } from "react";
import {
  X,
  ArrowLeft,
  MessageCircle,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  /* =======================================================
     1. ANTI HAIRFALL SHAMPOO
  ======================================================= */
  {
    id: 1,
    name: "Anti Hairfall Shampoo",
    category: "Hair Care",
    badge: "New",

    image: "/anti-hairfall.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Anti Hair Fall Shampoo"],
      ["Pack Size", "100 g"],
      ["Skin Type", "Dry, Normal, Oily"],
      ["Age Group", "Above 15 Years"],
      ["Fragrance", "No"],
      [
        "Key Ingredients",
        "Aamalaki, Kusath, Kumari, Kuwath, Bhringraj Kuwath",
      ],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Herbal ingredient-based hair care formulation",
      "Contains Aamalaki, Kumari and Bhringraj-based ingredients",
      "Suitable for dry, normal and oily types",
      "Designed for regular hair care",
    ],

    benefits: [
      "Supports everyday hair care",
      "Helps maintain healthy-looking hair",
      "Suitable for regular cleansing routines",
      "Convenient everyday hair care solution",
    ],
  },

  /* =======================================================
     2. NEEM SKIN CARE DUSTING POWDER
  ======================================================= */
  {
    id: 2,
    name: "Neem Skin Care Dusting Powder",
    category: "Personal Care",
    badge: "New",

    image: "/dusting-powder.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Neem Skin Care Dusting Powder"],
      ["Pack Size", "100 g"],
      ["Skin Type", "Oily & Normal Skin"],
      ["Age Group", "Above 20 Years"],
      ["Fragrance", "No"],
      [
        "Key Ingredients",
        "Neem Churna, Tankan Bhasma, Gandhak Bhasma, Kapoor",
      ],
      ["Form", "Powder"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Neem-based skin care powder",
      "Powder formulation for convenient application",
      "Suitable for oily and normal skin",
      "Fragrance-free formulation",
    ],

    benefits: [
      "Supports everyday personal care",
      "Helps maintain a fresh skin feel",
      "Easy to include in a regular hygiene routine",
      "Convenient powder format for everyday use",
    ],
  },

  /* =======================================================
     3. FAIRNESS FACE GEL
  ======================================================= */
  {
    id: 3,
    name: "Fairness Face Gel",
    category: "Face Care",
    badge: "New",

    image: "/fairness-gel.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Fairness Face Gel"],
      ["Pack Size", "50 g"],
      ["Skin Type", "All Types"],
      ["Age Group", "30–60 Years"],
      ["Fragrance", "No"],
      [
        "Key Ingredients",
        "Saffron Hydrosol, Niacinamide, Hyaluronic Acid, Kojic Acid, Glycerine, EDTA, Carbopol 940, DMDM, DW, TEA",
      ],
      ["Form", "Gel"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Lightweight gel-based formulation",
      "Contains Saffron Hydrosol and Niacinamide",
      "Formulated with Hyaluronic Acid and Kojic Acid",
      "Suitable for all skin types",
      "Fragrance-free formulation",
    ],

    benefits: [
      "Supports everyday facial skincare",
      "Helps maintain a hydrated skin feel",
      "Easy to include in a regular skincare routine",
      "Lightweight gel format for convenient application",
    ],
  },

  /* =======================================================
     4. MOISTURISING CREAM
  ======================================================= */
  {
    id: 4,
    name: "Moisturising Cream",
    category: "Skin Care",
    badge: "New",

    image: "/moisturising.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Moisturising Cream"],
      ["Pack Size", "50 g"],
      ["Skin Type", "All"],
      ["Age Group", "Above 6 Months"],
      ["Fragrance", "Mogra"],
      [
        "Key Ingredients",
        "Calendula Flower Extract, Calendula Hydrosol, Shea Butter",
      ],
      ["Form", "Cream"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Cream-based moisturising formulation",
      "Contains Calendula Flower Extract",
      "Formulated with Calendula Hydrosol and Shea Butter",
      "Suitable for all skin types",
      "Mogra fragrance",
    ],

    benefits: [
      "Supports everyday skin moisturisation",
      "Helps maintain soft and comfortable-feeling skin",
      "Suitable for regular skincare routines",
      "Convenient cream format for everyday application",
    ],
  },

  /* =======================================================
     5. MOISTURISING BATHING BAR
  ======================================================= */
  {
    id: 5,
    name: "Moisturising Bathing Bar",
    category: "Bath Care",
    badge: "New",

    image: "/moisturising-soap.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Moisturising Bathing Bar"],
      ["Pack Size", "100 g"],
      ["Skin Type", "All"],
      ["Age Group", "Above 30 Years"],
      ["Fragrance", "No"],
      ["Key Ingredients", "Vitamin E, Glycerine, Hyaluronic Acid"],
      ["Shelf Life", "36 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Moisturising bathing bar formulation",
      "Contains Vitamin E and Glycerine",
      "Formulated with Hyaluronic Acid",
      "Suitable for all skin types",
      "Fragrance-free",
    ],

    benefits: [
      "Supports everyday skin cleansing",
      "Helps maintain a moisturised skin feel",
      "Convenient for regular bath care",
      "Suitable for everyday personal care routines",
    ],
  },

  /* =======================================================
     6. NEEM BATHING BAR
  ======================================================= */
  {
    id: 6,
    name: "Neem Bathing Bar",
    category: "Bath Care",
    badge: "New",

    image: "/neem-soap.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Neem Bathing Bar"],
      ["Pack Size", "100 g"],
      ["Skin Type", "All"],
      ["Age Group", "Above 20 Years"],
      ["Fragrance", "No"],
      ["Key Ingredients", "Neem, Camphor, Rosemary"],
      ["Shelf Life", "36 Months"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Neem-based bathing bar",
      "Contains Neem, Camphor and Rosemary",
      "Suitable for all skin types",
      "Designed for everyday cleansing",
      "Fragrance-free",
    ],

    benefits: [
      "Supports regular skin cleansing",
      "Suitable for everyday bath care",
      "Convenient for regular personal care",
      "Neem-based option for daily cleansing routines",
    ],
  },

  /* =======================================================
     7. SAFFRON RADIANCE FACE WASH
  ======================================================= */
  {
    id: 7,
    name: "Saffron Radiance Face Wash",
    category: "Face Care",
    badge: "New",

    image: "/radiance-face-wash.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Saffron Radiance Face Wash"],
      ["Pack Size", "100 g"],
      ["Skin Type", "All"],
      ["Age Group", "30–60 Years"],
      ["Fragrance", "Rose"],
      ["Key Ingredients", "Saffron Hydrosol"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Saffron Hydrosol-based face care formulation",
      "Designed for everyday facial cleansing",
      "Suitable for all skin types",
      "Rose fragrance",
      "Convenient face wash format",
    ],

    benefits: [
      "Supports everyday facial cleansing",
      "Helps maintain a fresh and clean skin feel",
      "Easy to include in daily skincare routines",
      "Suitable for regular face care",
    ],
  },

  /* =======================================================
     8. BABY SOFT SKIN LOTION
  ======================================================= */
  {
    id: 8,
    name: "Baby Soft Skin Lotion",
    category: "Baby Care",
    badge: "New",

    image: "/baby-lotion.jpeg",

    specs: [
      ["Brand Name", "Mutation Dermacare"],
      ["Product Name", "Baby Soft Skin Lotion"],
      ["Pack Size", "100 g"],
      ["Skin Type", "All"],
      ["Age Group", "0–6 Months, 6 Months–10 Years"],
      ["Fragrance", "Baby Fragrance"],
      [
        "Key Ingredients",
        "Calendula Hydrosol, Glycerine, Almond Oil, Vitamin E",
      ],
      ["Form", "Lotion"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Store in Cool & Dry Place"],
      ["Country of Origin", "India"],
    ],

    features: [
      "Lotion formulation developed for baby care",
      "Contains Calendula Hydrosol and Glycerine",
      "Formulated with Almond Oil and Vitamin E",
      "Suitable for all skin types",
      "Baby fragrance",
    ],

    benefits: [
      "Supports everyday baby skin moisturisation",
      "Helps maintain soft and comfortable-feeling skin",
      "Easy-to-apply lotion format",
      "Convenient for regular baby care routines",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const ProductsSection = () => {
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
     WHATSAPP
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
          PRODUCTS SECTION
      ====================================================== */}

      <section
        id="products-grid"
        className="relative bg-[#F7F7F5] py-14 sm:py-16 lg:py-[68px]"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10 xl:px-12">
          {/* HEADING */}

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

          {/* PRODUCTS GRID */}

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
                  <span className="absolute right-3 top-3 z-10 rounded-[6px] bg-orange-500 px-3 py-[6px] text-[11px] font-bold text-white">
                    {product.badge}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
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

                  <h3 className="mt-1.5 min-h-[48px] text-[17px] font-bold leading-[1.4] text-[#182720] sm:text-[18px]">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-end border-t border-[#E8EBE9] pt-3">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProduct(product);
                      }}
                      className="group/button inline-flex items-center gap-1.5 text-[12px] font-bold text-[#367762]"
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
            bg-black/65
            p-2
            backdrop-blur-[2px]
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
              max-w-[800px]
              overflow-y-auto
              rounded-[12px]
              bg-white
              shadow-[0_25px_80px_rgba(0,0,0,0.30)]
            "
          >
            {/* MODAL HEADER */}

            <div
              className="
                sticky
                top-0
                z-30
                flex
                min-h-[58px]
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
                  className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[#252B28] transition-colors hover:bg-[#F1F2F1]"
                >
                  <ArrowLeft size={21} strokeWidth={2.2} />
                </button>

                <h2
                  id="product-modal-title"
                  className="truncate text-[17px] font-bold text-[#202622] sm:text-[19px]"
                >
                  {selectedProduct.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[#252B28] transition-colors hover:bg-[#F1F2F1]"
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="px-4 pb-5 pt-4 sm:px-6">
              {/* LARGE PRODUCT IMAGE */}

              <div
                className="
                  group/image
                  relative
                  flex
                  h-[290px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-[#E1E5E2]
                  bg-[#F7F7F5]
                  sm:h-[360px]
                "
              >
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    rounded-full
                    border
                    border-[#DCE5E0]
                    bg-white
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-[#367762]
                  "
                >
                  {selectedProduct.category}
                </span>

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="
                    h-[94%]
                    w-[94%]
                    object-contain
                    p-2
                    drop-shadow-[0_14px_20px_rgba(25,42,34,0.12)]
                    transition-transform
                    duration-500
                    group-hover/image:scale-[1.05]
                  "
                />
              </div>

              {/* PRODUCT TITLE */}

              <div className="mt-4 border-b border-[#E3E6E4] pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-orange-600">
                  Mutation Dermacare
                </span>

                <h3 className="mt-1 text-[21px] font-bold leading-[1.3] text-[#17251F] sm:text-[24px]">
                  {selectedProduct.name}
                </h3>
              </div>

              {/* =================================================
                  PRODUCT INFORMATION
              ================================================= */}

              <div className="mt-5">
                <SectionHeading>Product Information</SectionHeading>

                <div className="mt-3 overflow-hidden rounded-[9px] border border-[#E1E5E2] bg-white">
                  {selectedProduct.specs.map(([label, value], index) => (
                    <div
                      key={`${label}-${index}`}
                      className={`
                        grid
                        grid-cols-[38%_62%]
                        gap-3
                        px-3
                        py-[8px]
                        sm:grid-cols-[32%_68%]
                        sm:px-4
                        ${
                          index !== selectedProduct.specs.length - 1
                            ? "border-b border-[#EAEBEA]"
                            : ""
                        }
                      `}
                    >
                      <span className="text-[13px] font-semibold leading-[1.55] text-[#59635E] sm:text-[14px]">
                        {label}
                      </span>

                      <span className="pr-2 text-[13px] font-semibold leading-[1.55] text-[#252C28] sm:text-[14px]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  KEY FEATURES
              ================================================= */}

              <div className="mt-5 border-t border-[#E4E7E5] pt-4">
                <SectionHeading>Key Features</SectionHeading>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedProduct.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-2.5
                        rounded-[7px]
                        border
                        border-[#E4E8E5]
                        bg-[#FAFBFA]
                        px-3
                        py-2.5
                      "
                    >
                      <span className="mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#E4F0EB] text-[#438D76]">
                        <Check size={11} strokeWidth={3} />
                      </span>

                      <span className="text-[13px] font-medium leading-[1.55] text-[#3F4944] sm:text-[14px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="mt-5 border-t border-[#E4E7E5] pt-4">
                <SectionHeading>Benefits</SectionHeading>

                <div className="mt-3 space-y-2">
                  {selectedProduct.benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="
                          flex
                          h-[23px]
                          w-[23px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[5px]
                          bg-[#FFF1E7]
                          text-[10px]
                          font-bold
                          text-orange-600
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-[1px] text-[13px] font-medium leading-[1.6] text-[#414B46] sm:text-[14px]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  PRODUCT ENQUIRY
              ================================================= */}

              <div
                className="
                  mt-5
                  rounded-[10px]
                  border
                  border-[#E1E5E2]
                  bg-[#F7F8F6]
                  p-3
                  sm:p-4
                "
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-orange-600">
                  Product Enquiry
                </span>

                <p className="mt-1 text-[13px] font-medium leading-[1.55] text-[#4F5A54] sm:text-[14px]">
                  Contact our team for more information about{" "}
                  <span className="font-bold text-[#202622]">
                    {selectedProduct.name}
                  </span>
                  .
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2.5">
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
        </div>
      )}
    </>
  );
};

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({ children }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-[18px] w-[3px] rounded-full bg-orange-500" />

      <h3 className="text-[15px] font-bold leading-[1.4] text-[#17251F] sm:text-[16px]">
        {children}
      </h3>
    </div>
  );
};

export default ProductsSection;