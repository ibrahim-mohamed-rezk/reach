import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsPagination from "@/components/projects/ProjectsPagination";

const page = () => {
  return (
    <div className="w-full">
      <ProjectsHero />
      <ProjectsPagination />
    </div>
  );
};

export default page;
