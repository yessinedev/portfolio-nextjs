import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Skill } from "@/lib/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "skill"]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: SkillPageProps): Promise<Metadata> {
  const {slug} = params;
  const skill = await client.fetch(
    groq`*[_type == "skill" && slug.current == $slug][0]`,
    { slug: slug }
  );

  if (!skill) {
    return {};
  }

  return {
    title: skill.name,
    description: skill.description,
  };
}

export default async function SkillPage({ params }: SkillPageProps) {
  const {slug} = params;
  const skill: Skill = await client.fetch(
    groq`*[_type == "skill" && slug.current == $slug]{
      _id,
      name,
      icon,
      description,
      years,
      "projects": projects[]->{
        _id,
        title,
        slug,
        overview,
        "image": heroImage.asset->url,
        datePublished,
        dateModified
      }
    }[0]`,
    { slug: slug }
  );

  console.log("skill: ", skill.projects)

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8 bg-[#111418]">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/#skills">
          <Button
            variant="ghost"
            className="text-white hover:bg-[#1b2127] p-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Skills
          </Button>
        </Link>
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">{skill.name}</h1>
          {skill.description && <p className="text-[#9cabba] text-lg max-w-3xl mx-auto">{skill.description}</p>}
          {skill.years && <p className="text-[#9cabba] text-md max-w-3xl mx-auto">Years of experience: {skill.years}</p>}
        </div>

        {skill.projects && skill.projects.length > 0 && (
          <section className="mt-8">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Projects using {skill.name}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {skill.projects.map((project) => (
                <div
                  key={project._id}
                  className="group relative bg-gradient-to-br from-[#1b2127] to-[#151a1f] rounded-2xl overflow-hidden border border-[#3b4754]
                  hover:bg-gradient-to-b hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2]"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image ?? "/placeholder.svg"}
                      alt={`${project.title}`}
                      priority={true}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white text-lg font-bold group-hover:text-[#71b4f794] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-[#9cabba] text-sm leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={`/projects/${project.slug.current}`}
                        className="flex items-center gap-2 bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3d98f4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}