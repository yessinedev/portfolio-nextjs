import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project } from "@/lib/types";

export default async function sitemap() {
  const projects = await client.fetch(
    groq`*[_type == "project"]{ "slug": slug.current }`
  );

  return [
    { url: `${process.env.DOMAIN}`, lastModified: new Date() },
    { url: `${process.env.DOMAIN}/#about`, lastModified: new Date() },
    ...projects.map((p: Project) => ({
      url: `${process.env.DOMAIN}/projects/${p._id}`,
      lastModified: new Date(),
    })),
  ];
}
