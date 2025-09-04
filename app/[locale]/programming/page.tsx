import ProjectsHero from "@/components/projects/ProjectsHero";
import ProgrammingPagination from "@/components/projects/ProgrammingPagination";

const page = async () => {
  return (
    <div className="w-full">
      <ProjectsHero />
      <ProgrammingPagination />
    </div>
  );
};

export default page;


