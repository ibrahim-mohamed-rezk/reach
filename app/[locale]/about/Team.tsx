import { getApi } from "@/libs/axios/backend";
import { TeamMember } from "@/libs/helpers/types";
import { getTranslations } from "next-intl/server";

const Team = async () => {
  const mainUrl = process.env.NEXT_PUBLIC_Backend_URL;
  const feachData = async () => {
    try {
      const response = await getApi("/api/team");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const teamMembers: TeamMember[] = await feachData();
  const t = await getTranslations("about");

  const TeamMemberCard = ({ member }: { member: TeamMember | null }) => (
    <div className="flex flex-col justify-start items-center gap-[clamp(2px,1.25vw,100px)]">
      <div className="w-[clamp(20px,6.667vw,528px)] h-[clamp(20px,6.667vw,528px)] relative rounded-[64px] overflow-hidden">
        <img
          className="w-[clamp(20px,6.667vw,528px)] h-[clamp(20px,6.667vw,528px)] object-cover rounded-full"
          src={`${mainUrl}${member?.image}`}
          alt="Team member"
        />
      </div>
      <div className="text-center">
        <div className="text-white text-[clamp(5px,0.938vw,50px)] font-bold font-['Inter'] leading-loose">
          {member?.name}
        </div>
        <div className="text-stone-500 text-[clamp(4px,0.833vw,40px)] font-normal font-['Arial'] leading-normal">
          {member?.position}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mb-[5px] max-w-[1920px] relative mx-auto px-4 py-12 md:py-16 lg:py-24">
      {/* Background Text */}
      <div className="absolute left-0 top-[106.65px] opacity-10 text-white/10 text-[clamp(20px,31.198vw,1599px)] font-semibold font-['Inter'] leading-[0.85em] z-0">
        Our
        <br />
        Team
      </div>

      {/* Section Title */}
      <div className="relative w-full text-center mb-16 md:mb-24  text-white text-[clamp(10px,5.0vw,196px)] font-bold font-['Satoshi_Variable'] capitalize z-10">
        {t("meet team")}
      </div>

      {/* CEO Section */}
      <div className="relative flex flex-col justify-center items-center gap-6 mb-16 md:mb-24 z-10">
        <TeamMemberCard
          member={
            teamMembers.find((member) => member.position === "Founder & CEO") ||
            null
          }
        />
      </div>

      {/* Team Members Grid */}
      <div className="relative w-full max-w-[1511.38px] mx-auto z-10">
        {/* Team Grid */}
        <div className="w-full items-center justify-center flex flwrap gap-[clamp(5px,2.083vw,100px)]">
          {teamMembers.map((member) => {
            if (member.position === "Founder & CEO") return null;
            return <TeamMemberCard key={member.id} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
