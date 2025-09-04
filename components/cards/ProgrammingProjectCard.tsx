import { FeaturedProject } from "@/libs/helpers/types";
import useImageUrl from "@/libs/hooks/useImageUrl";
import Link from "next/link";

const ProgrammingProjectCard = ({ project }: { project: FeaturedProject }) => {
  const imageUrl = useImageUrl();

  return (
    <Link href={`/projects/${project?.slug}`}>
      <div className="group relative  backdrop-blur-sm  overflow-hidden transition-all duration-500 hover:bg-[#f3801e] hover:shadow-2xl cursor-pointer">
        {/* Project Cover Image */}
        <div className="relative overflow-hidden">
          <img
            className="w-full h-[clamp(200px,20vw,400px)] object-cover transition-transform duration-700 group-hover:scale-105"
            src={imageUrl(project?.cover || "")}
            alt="Project thumbnail"
          />

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Title */}
        <div className="p-[clamp(16px,2vw,24px)]">
          <h3 className="text-[#f3801e] font-semibold text-[clamp(16px,1.8vw,20px)] text-center group-hover:text-white transition-colors duration-300">
            {project?.title}
          </h3>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0  opacity-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 " />
        </div>
      </div>
    </Link>
  );
};

export default ProgrammingProjectCard;
