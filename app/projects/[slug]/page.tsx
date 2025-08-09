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

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)]{ "slug": slug }`
  );

  return slugs.map(({ slug }) => ({
    slug: slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
  const project: Project | null = await client.fetch(query, {
    id: slug,
  });

  if (!project) return {};

  return {
    title: `${project.title} | My Portfolio`,
    description: `${project.overview} Built with ${project.skills
      .map((s) => s.name)
      .join(", ")}.`,
    keywords: `${project.skills.map((s) => s.name)}`,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [{ url: project.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview,
      images: [project.image],
    },
  };
}
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.overview,
    author: {
      "@type": "Person",
      name: "Yessine Agrebi",
    },
    image: project.image,
    url: `https://yourdomain.com/projects/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative flex size-full min-h-screen flex-col bg-[#111418]">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-1 justify-center py-3">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <ProjectDetails project={project} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
