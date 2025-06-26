import { FeaturedProject } from "@/libs/helpers/types";
import ProjecCard from "../cards/ProjecCard";
import { useTranslations } from "next-intl";

const Projects = ({ projects }: { projects: FeaturedProject[] }) => {
  const t = useTranslations("projects");
  return (
    <section className="w-full px-[clamp(10px,2.08333vw,40px)] pb-[clamp(100px,10.15625vw,200px)] mx-auto flex flex-col justify-start items-center gap-[clamp(40px,4.1666666vw,150px)]">
      <h2 className="self-stretch text-center italic text-white text-[clamp(35px,5vw,200px)] font-semibold font-['Inter']">
        {t("title")}
      </h2>

      <div className=" flex w-full flex-col gap-[clamp(20px,3.125vw,80px)]">
        {projects.map((project, index) => (
          <ProjecCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
