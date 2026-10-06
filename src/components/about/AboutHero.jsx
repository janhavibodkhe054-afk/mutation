import React from "react";

const AboutHero = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[300px]
        items-center
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        sm:min-h-[340px]
        lg:min-h-[390px]
      "
      style={{
        backgroundImage: "url('/about-hero.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-7 lg:px-10 xl:px-14">
        <div className="max-w-[650px]">
          {/* Small Accent */}
          <div className="mb-4 h-[3px] w-[45px] bg-orange-500" />

          {/* Heading */}
          <h1
            className="
              text-[40px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-[48px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            About Us
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[570px]
              text-[15px]
              font-medium
              leading-[1.75]
              text-white/90
              sm:text-[16px]
              lg:text-[17px]
            "
          >
            Delivering quality personal care products and dependable solutions
            for consumers, brands and businesses.
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 flex h-[4px]">
        <div className="w-[110px] bg-orange-500 sm:w-[160px]" />
        <div className="flex-1 bg-white/20" />
      </div>
    </section>
  );
};

export default AboutHero;