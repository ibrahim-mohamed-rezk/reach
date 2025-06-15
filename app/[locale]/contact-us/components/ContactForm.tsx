"use client";

import { postApi } from "@/libs/axios/backend";
import { useLocale } from "next-intl";
import { toast } from "react-toastify";
import { useState } from "react";

const ContactForm = () => {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      await postApi("api/contact", formDataToSend, {
        "Content-Type": "multipart/form-data",
        lang: locale,
      });
      toast.success("Application submitted successfully!");

      setFormData({
        first_name: "",
        email: "",
        last_name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
      console.error("Application submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 max-w-[580px] mx-auto lg:mx-0 bg-white rounded-3xl shadow-md outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-black text-2xl md:text-4xl font-bold font-['Satoshi_Variable']">
          Get in Touch
        </h2>
        <p className="text-black text-sm md:text-base font-normal font-['Satoshi_Variable']">
          You can reach us anytime
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First name"
            className="w-full h-16 md:h-20 px-4 md:px-5 py-4 md:py-6 bg-white rounded-3xl shadow-sm outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 text-zinc-800 text-sm md:text-base font-medium font-['Satoshi_Variable']"
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last name"
            className="w-full h-16 md:h-20 px-4 md:px-5 py-4 md:py-6 bg-white rounded-3xl shadow-sm outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 text-zinc-800 text-sm md:text-base font-medium font-['Satoshi_Variable']"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full h-16 md:h-20 px-4 md:px-5 py-4 md:py-6 bg-white rounded-3xl shadow-sm outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 text-zinc-800 text-sm md:text-base font-medium font-['Satoshi_Variable']"
        />
        <div className="w-full h-16 md:h-20 bg-white rounded-3xl shadow-sm border-[0.82px] border-zinc-100 flex items-center px-4 md:px-5">
          <div className="flex items-center gap-3 w-full">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="flex-1 bg-transparent outline-none text-zinc-800 text-base md:text-lg font-medium font-['Satoshi_Variable']"
            />
          </div>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How Can Help You?"
          maxLength={240}
          className="w-full h-48 md:h-64 px-4 md:px-5 py-4 md:py-6 bg-white rounded-3xl shadow-sm outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 text-zinc-800 text-sm md:text-base font-medium font-['Satoshi_Variable'] resize-none"
        ></textarea>
        <div className="text-right text-zinc-300 text-sm md:text-base font-medium font-['Satoshi_Variable']">
          {formData.message.length}/240
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 md:h-20 bg-orange-500 rounded-3xl shadow-sm outline outline-[0.82px] outline-offset-[-0.82px] outline-zinc-100 flex justify-center items-center hover:bg-orange-600 transition-colors disabled:bg-orange-300"
        >
          <div className="text-white text-base md:text-xl font-medium font-['Satoshi_Variable']">
            {isSubmitting ? "Submitting..." : "Submit"}
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
