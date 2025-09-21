"use client";

import { useAppDispatch, useAppSelector } from "@/libs/hooks/reduxHooks";
import { fetchProjects } from "@/libs/store/slices/projectsSlice";
import { RootState } from "@/libs/store/store";
import { useEffect, useState } from "react";
import ProjecCard from "../cards/ProjecCard";
import { useLocale, useTranslations } from "next-intl";
import Pagination from "../pagination/Pagination";
import { useSearchParams } from "next/navigation";

const ProjectsPagination = () => {
  const t = useTranslations("projects");
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    (searchParams.get("page") as string) || "1"
  );

  useEffect(() => {
    dispatch(fetchProjects({ locale, currentPage }));
  }, [dispatch, locale, currentPage]);

  // Sync currentPage with URL search params
  useEffect(() => {
    const page = searchParams.get("page") || "1";
    setCurrentPage(page);
  }, [searchParams]);

  const { projects, loading, error, meta } = useAppSelector(
    (state: RootState) => state.projects
  );

  console.log(currentPage)

  return (
    <div className="w-full mt-[clamp(10px,1.5625vw,300px)] px-[clamp(10px,2.08333vw,40px)] md:px-[clamp(10px,7.08333vw,400px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      {loading ? (
        <div>{t("loading")}</div>
      ) : error ? (
        <div>{t("error")}</div>
      ) : (
        <div className="w-full flex flex-col gap-[clamp(10px,0.866vw,150px)]">
          {projects?.map((project) => (
            <ProjecCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <Pagination meta={meta} baseUrl="/projects" />
    </div>
  );
};

export default ProjectsPagination;
