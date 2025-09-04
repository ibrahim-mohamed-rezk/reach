"use client";

import { useAppDispatch, useAppSelector } from "@/libs/hooks/reduxHooks";
import { fetchProgrammingProjects } from "@/libs/store/slices/projectsSlice";
import { RootState } from "@/libs/store/store";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import ProgrammingProjectCard from "../cards/ProgrammingProjectCard";

const ProgrammingPagination = () => {
  const t = useTranslations("projects");
  const dispatch = useAppDispatch();
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchProgrammingProjects(locale));
  }, [dispatch, locale]);

  const { projects, loading, error } = useAppSelector(
    (state: RootState) => state.projects
  );

  return (
    <div className="w-full  mt-[clamp(10px,1.5625vw,300px)] px-[clamp(10px,2.08333vw,40px)] md:px-[clamp(10px,7.08333vw,400px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
            <p className="text-gray-400 text-[clamp(14px,1.2vw,18px)]">
              {t("loading")}
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-red-400 text-[clamp(14px,1.2vw,18px)]">
              {t("error")}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,3vw,40px)]">
          {projects?.map((project) => (
            <ProgrammingProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgrammingPagination;
