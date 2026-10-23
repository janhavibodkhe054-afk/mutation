
import React from "react";

const ParlourSalonHero = () => {
  return (
    <section
      className="
        relative flex w-full items-center overflow-hidden
        min-h-[320px] sm:min-h-[350px] lg:min-h-[390px]
        bg-[#171717]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[position:75%_center]
          lg:bg-[position:center_40%]
        "
        style={{
          backgroundImage: "url('/salon.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/80
          via-black/55
          to-black/20
          lg:from-black/75
          lg:via-black/55
          lg:to-black/25
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1480px]
          px-5 py-16
          sm:px-7
          lg:px-10
          xl:px-12
        "
      >
        <div className="max-w-[720px]">

          {/* ORANGE LINE */}
          <div className="mb-5 h-[3px] w-[45px] bg-[#F07832]" />

          {/* HEADING */}
          <h1
            className="
              text-[34px] font-bold
              leading-[1.15] tracking-[-0.035em]
              text-white
              sm:text-[46px]
              lg:text-[56px]
            "
          >
            Parlour & Salon
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5 max-w-[620px]
              text-[14px] font-medium
              leading-[1.9] text-white
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Professional care products for parlours and salons.
            Quality-focused skincare, haircare and beauty essentials
            for your professional business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParlourSalonHero;
