import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectLink {
  name: string
  url: string
  type: "demo" | "github" | "case-study"
}

interface Project {
  title: string
  subtitle: string
  heroImage: string
  overview: string
  technologies: string
  role: string
  links: ProjectLink[]
}

interface ProjectDetailsProps {
  project: Project
}

const getLinkIcon = (type: string) => {
  switch (type) {
    case "demo":
      return <ExternalLink className="w-4 h-4" />
    case "github":
      return <Github className="w-4 h-4" />
    case "case-study":
      return <FileText className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

const getLinkColor = (type: string) => {
  switch (type) {
    case "demo":
      return "bg-[#3d98f4] hover:bg-[#2d7bd4]"
    case "github":
      return "bg-[#24292e] hover:bg-[#1a1e22]"
    case "case-study":
      return "bg-[#10b981] hover:bg-[#059669]"
    default:
      return "bg-[#2b3036] hover:bg-[#3a4651]"
  }
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Back Navigation */}
      <div className="px-4">
        <Link href="/#projects">
          <Button variant="ghost" className="text-white hover:bg-[#1b2127] p-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight">Project: {project.title}</h1>
          <p className="text-[#a1abb5] text-sm font-normal leading-normal max-w-2xl">{project.subtitle}</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#121417] @[480px]:rounded-xl min-h-80">
            <Image
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Project Overview
        </h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{project.overview}</p>
      </section>

      {/* Technologies Used */}
      <section className="space-y-4">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Technologies Used
        </h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{project.technologies}</p>
      </section>

      {/* My Role and Contributions */}
      <section className="space-y-4">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          My Role and Contributions
        </h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{project.role}</p>
      </section>

      {/* Project Links */}
      <section className="space-y-4">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Project Links
        </h2>
        <div className="space-y-2">
          {project.links.map((link, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#121417] px-4 min-h-14 justify-between">
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">{link.name}</p>
              <div className="shrink-0">
                <Button asChild size="sm" className={`${getLinkColor(link.type)} text-white transition-colors`}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {getLinkIcon(link.type)}
                    <span className="truncate">
                      {link.type === "demo" ? "View" : link.type === "github" ? "GitHub" : "Read More"}
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-8">
        <div className="bg-[#1b2127] rounded-xl p-6 text-center space-y-4">
          <h3 className="text-white text-xl font-bold">Interested in this project?</h3>
          <p className="text-[#a1abb5] text-sm">
            I'd love to discuss the technical details and challenges I overcame during development.
          </p>
          <Link href="/#contact">
            <Button className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
