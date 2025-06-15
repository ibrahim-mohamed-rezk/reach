import { getApi } from "@/libs/axios/backend";

const page = async ({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}) => {
  const paramsData = await params;

  const getproject = async () => {
    try {
      const response = await getApi(
        `api/projects/${paramsData.projectSlug}`,
        {},
        {
          lang: paramsData.locale,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const project = await getproject();
  return (
    <div>
      {project.gallery.map((image: string) => {
        return (
          <img
            className="w-full !m-0 !p-0"
            key={image}
            alt="project image"
            loading="lazy"
            src={`https://dashboard.reachksa.com/${image}`}
          />
        );
      })}
    </div>
  );
};

export default page;
