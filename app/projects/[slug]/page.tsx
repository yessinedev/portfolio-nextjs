import ProjectDetails from "@/components/project-details";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project } from "@/lib/types";


const query = groq`
  *[_type == "project" && _id == $id][0]{
    _id,
    title,
    overview,
    featured,
    "image": heroImage.asset->url,
    "skills": skills[]->{
      _id,
      name,
      icon
    },
    role,
    "links": links[]{
      name,
      url,
      type
    }
  }
`;
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | null = await client.fetch(query, { id: slug });

  if (!project) {
    return notFound();
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-1 justify-center py-3 sm:py-4 md:py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <ProjectDetails project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
