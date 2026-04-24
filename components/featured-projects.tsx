import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Project } from "@/lib/types";

export async function getFeaturedProjects(): Promise<Project[]> {
  const res = await client.fetch(
    `*[_type == "project" && featured == true]{
      _id,
      title,
      "image": heroImage.asset->url,
      featured,
      slug,
      role,
      overview,
      "skills": skills[]->{
        _id,
        name,
        icon,
        slug,
      },
      "links": links[]{
        name,
        url,
        type
      },
      datePublished,
      dateModified
    }`
  );
  return res;
}

export default async function FeaturedProjects() {
  const featuredProjects: Project[] = await getFeaturedProjects();
  return (
    <section
      id="projects"
      className="space-y-8 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#3d98f4] rounded-full animate-pulse"></div>
          <span className="text-[#9cabba] text-sm font-medium">
            Featured Work
          </span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Featured Projects
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-3xl mx-auto">
          Selected builds across full-stack applications, backend systems, and
          automation-heavy products.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project._id}
              className="group relative bg-gradient-to-br from-[#1b2127] to-[#151a1f] rounded-3xl overflow-hidden border border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3d98f4]/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image ?? "/placeholder.svg"}
                  alt={`${project.title} - ${project.overview}`}
                  priority={true}
                  width={500}
                  height={300}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-[#3d98f4] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#9cabba] text-sm leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map((tech) => (
                    <Link key={tech._id} href={`/skills/${tech.slug.current}`}>
                    <Badge
                        variant="outline"
                      className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs hover:border-[#3d98f4] transition-colors rounded-full"
                      >
                        {tech.name}
                      </Badge>
                    </Link>
                  ))}
                  {project.skills.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs rounded-full"
                    >
                      +{project.skills.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    asChild
                    className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Link
                      href={`/projects/${project.slug?.current}`}
                      className="flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.links?.map((l) => {
                      return l.type === "demo" ? (
                        <Button key={l.url} asChild>
                          <Link
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      ) : l.type === "github" ? (
                        <Button key={l.url} asChild>
                          <Link
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3d98f4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </article>
          ))}
        </div>
      </div>

      {/* View More Section */}
      <div className="text-center pt-6 sm:pt-8">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-[#9cabba] text-sm">
            Explore my complete portfolio of projects and case studies
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#3d98f4] to-[#10b981] hover:from-[#2d7bd4] hover:to-[#059669] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
