import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project, Skill } from "@/lib/types";

export default async function sitemap() {
  const projects = await client.fetch(
    groq`*[_type == "project"]{ "slug": slug.current, dateModified }`
  );

  const skills = await client.fetch(
    groq`*[_type == "skill"]{ "slug": slug.current }`
  );

  return [
    { url: `${process.env.DOMAIN}`, lastModified: new Date() },
    { url: `${process.env.DOMAIN}/#about`, lastModified: new Date() },
    { url: `${process.env.DOMAIN}/skills`, lastModified: new Date() },
    ...projects.map((p: Project) => ({
      url: `${process.env.DOMAIN}/projects/${p.slug.current}`,
      lastModified: p.dateModified ? new Date(p.dateModified) : new Date(),
    })),
    ...skills.map((s: Skill) => ({
      url: `${process.env.DOMAIN}/skills/${s.slug.current}`,
      lastModified: new Date(),
    })),
  ];
}
