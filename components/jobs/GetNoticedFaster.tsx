"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const GetNoticedFaster = () => {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      await axios.post("/upload-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Success message or state update
      setUploading(false);
      toast.success("Resume uploaded successfully!");
    } catch (error) {
      console.error("Error uploading resume:", error);
      setUploading(false);
      toast.error("Failed to upload resume. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="self-stretch p-4 md:p-6 lg:p-8 bg-neutral-800 rounded-[10.12px] shadow-[0px_1.2652438879013062px_2.5304877758026123px_0px_rgba(0,0,0,0.03)] outline outline-[1.27px] outline-offset-[-1.27px] outline-white/5 inline-flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5">
          <div className="justify-start text-white text-xl md:text-2xl font-bold font-['DM_Sans'] leading-7 md:leading-9">
            🚀 Get noticed faster
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5">
          <div className="self-stretch justify-start text-white/80 text-sm md:text-lg font-normal font-['DM_Sans'] leading-relaxed">
            Quis eiusmod deserunt cillum laboris magna cupidatat esse labore
            irure quis cupidatat in.
          </div>
        </div>
        {fileName && (
          <div className="self-stretch text-white/80 text-sm font-normal font-['DM_Sans']">
            Selected file: {fileName}
          </div>
        )}
        <input
          className="hidden"
          type="file"
          name="resume"
          id="ResumeInput"
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx"
        />
        <button
          onClick={() => document.getElementById("ResumeInput")?.click()}
          className="self-stretch pl-4 md:pl-5 pr-5 md:pr-6 py-2 md:py-2.5 bg-orange-500 rounded-[5.06px] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-orange-600 transition-colors disabled:bg-orange-400 disabled:cursor-not-allowed"
          disabled={uploading}
        >
          <div className="justify-start text-white text-base md:text-xl font-medium font-['DM_Sans'] leading-loose">
            {uploading ? "Uploading..." : "Upload your resume"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default GetNoticedFaster;
