import ProjectsGrid from "@/components/projects-grid";
import type { Metadata } from "next";
import { Project } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export async function fetchProjects(): Promise<Project[]> {
  const query = `
    *[_type == "project"]{
      _id,
      title,
      subtitle,
      "image": heroImage.asset->url,
      overview,
      role,
      featured,
      skills[]->{
        _id,
        name,
        icon
      },
      role,
      links
    }
  `;

  const projects: Project[] = await client.fetch(query);
  return projects;
}

export const metadata: Metadata = {
  title: "Projects - Yessine Agrebi | Full-Stack Developer",
  description:
    "Explore my complete portfolio of web applications, mobile apps, and software solutions. Built with modern technologies and best practices.",
};

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <ProjectsGrid projects={projects} />
        </main>
      </div>
    </div>
  );
}
