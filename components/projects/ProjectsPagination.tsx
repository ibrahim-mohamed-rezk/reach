"use client";

import { useAppDispatch, useAppSelector } from "@/libs/hooks/reduxHooks";
import { fetchProjects } from "@/libs/store/slices/projectsSlice";
import { RootState } from "@/libs/store/store";
import { useEffect } from "react";
import ProjecCard from "../cards/ProjecCard";
import { useLocale, useTranslations } from "next-intl";

const ProjectsPagination = () => {
  const t = useTranslations("projects");
  const dispatch = useAppDispatch();
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchProjects(locale));
  }, [dispatch]);

  const { projects, loading, error } = useAppSelector(
    (state: RootState) => state.projects
  );

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
    </div>
  );
};

export default ProjectsPagination;
