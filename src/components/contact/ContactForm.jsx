import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fieldClass = `
    mt-2
    w-full
    border
    border-[#D9DFDC]
    bg-white
    px-4
    py-[14px]
    text-[15px]
    font-medium
    text-[#1F2B25]
    outline-none
    transition-all
    duration-300
    placeholder:font-normal
    placeholder:text-[#929B96]
    focus:border-[#438D76]
    focus:ring-[3px]
    focus:ring-[#438D76]/10
  `;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-7 sm:py-16 lg:py-20">

        {/* Header */}
        <div className="mb-9 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[34px] bg-orange-500" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
              Send An Enquiry
            </span>

            <span className="h-[2px] w-[34px] bg-orange-500" />
          </div>

          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1D2923] sm:text-[38px] lg:text-[42px]">
            Tell Us About Your{" "}
            <span className="text-[#438D76]">Requirement</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[570px] text-[15px] font-normal leading-[1.75] text-[#606B65]">
            Share your details and requirements with us. Our team will get in
            touch with you to discuss the right solution.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              First Name <span className="text-orange-500">*</span>
            </label>

            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              className={fieldClass}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              Last Name <span className="text-orange-500">*</span>
            </label>

            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
              className={fieldClass}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              Email Address <span className="text-orange-500">*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className={fieldClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              Phone Number <span className="text-orange-500">*</span>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className={fieldClass}
            />
          </div>

          {/* Requirement */}
          <div>
            <label
              htmlFor="requirement"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              Requirement Type <span className="text-orange-500">*</span>
            </label>

            <select
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              className={`${fieldClass} cursor-pointer`}
            >
              <option value="">Select your requirement</option>
              <option value="personal-care">
                Personal Care Products
              </option>
              <option value="hotel-amenities">
                Hotel Amenities
              </option>
              <option value="travel-care">
                Travel Care Kits
              </option>
              <option value="private-label">
                Private Label
              </option>
              <option value="bulk-order">
                Bulk Order
              </option>
              <option value="other">
                Other
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] font-semibold text-[#29352F]"
            >
              Message <span className="text-orange-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirement"
              rows={5}
              required
              className={`${fieldClass} resize-none leading-[1.7]`}
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="
                group
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                bg-orange-500
                px-7
                text-[12px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                transition-all
                duration-300
                hover:bg-[#438D76]
              "
            >
              Submit Enquiry

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;