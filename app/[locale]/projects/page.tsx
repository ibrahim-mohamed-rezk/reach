import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsPagination from "@/components/projects/ProjectsPagination";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("projects");
  return (
    <div className="w-full">
      <ProjectsHero />
      <ProjectsPagination />
    </div>
  );
};

export default page;
