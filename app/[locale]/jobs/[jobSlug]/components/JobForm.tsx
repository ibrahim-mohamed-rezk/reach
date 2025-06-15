"use client";

import { postApi } from "@/libs/axios/backend";
import { useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormData {
  full_name: string;
  email: string;
  resume: File | null;
  phone: string;
  cover_letter: string;
  job_id: string;
}

const JobForm = ({ job_id }: { job_id: string }) => {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    resume: null,
    phone: "",
    cover_letter: "",
    job_id: job_id,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
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

      await postApi("api/jobs/apply", formDataToSend, {
        "Content-Type": "multipart/form-data",
        lang: locale,
      });
        toast.success("Application submitted successfully!");

      setFormData({
        full_name: "",
        email: "",
        resume: null,
        phone: "",
        cover_letter: "",
        job_id: job_id,
      });
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
      console.error("Application submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="block text-slate-500 font-semibold">
          Full name *
        </label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleInputChange}
          required
          className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5 text-black"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-slate-500 font-semibold">
          Contact email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5 text-black"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-slate-500 font-semibold">Resume *</label>
        <div className="relative">
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            required
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            accept=".pdf,.doc,.docx"
          />
          <div className="flex items-center gap-3 h-14 bg-white rounded-lg border border-slate-300 px-5">
            <div className="flex-1 text-slate-500">
              {formData.resume ? formData.resume.name : "Choose a file"}
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-medium transition-colors"
            >
              Upload
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-1">
          Accepted formats: PDF, DOC, DOCX
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-slate-500 font-semibold">
          Phone number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full h-14 bg-white rounded-lg border border-slate-300 px-5 text-black"
          placeholder="+20 01018260856"
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-slate-500 font-semibold">
          Tell us a bit about you *
        </label>
        <textarea
          name="cover_letter"
          value={formData.cover_letter}
          onChange={handleInputChange}
          required
          className="w-full h-36 bg-white rounded-lg border text-black border-slate-300 p-5"
          placeholder="Let us know"
        ></textarea>
      </div>

      <div className="md:col-span-2 text-slate-500 text-sm">
        By submitting this form you agree to our terms and conditions and our
        Privacy Policy which explains how we may collect, use and disclose your
        personal information including to third parties.
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-colors ${
            isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-orange-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Apply Now"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
