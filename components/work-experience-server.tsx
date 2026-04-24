import WorkExperienceSection from "@/components/work-experience-section";
import { Experience } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getExperiences } from "@/sanity/lib/queries";

export default async function WorkExperienceServer() {
  const experiences: Experience[] = await client.fetch(getExperiences);

  return <WorkExperienceSection experiences={experiences} />;
}
