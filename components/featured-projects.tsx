import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react"

const featuredProjects = [
  {
    title: "Training Center Management Platform",
    description:
      "Comprehensive solution for managing training centers, including course scheduling, student enrollment, and performance tracking.",
    image: "/training.png?height=300&width=500",
    slug: "training-center-management-platform",
    technologies: ["Nextjs", "Nestjs", "Prisma", "PostgreSQL"],
    category: "Full-Stack",
    year: "2025",
    featured: true,
  },
  {
    title: "Social Media App",
    description:
      "A modern social media platform with real-time messaging, user profiles, and group features, built with a focus on user engagement and performance.",
    image: "/social.png?height=300&width=500",
    slug: "social-media-app",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    category: "Full-Stack",
    year: "2025",
    featured: true,
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="space-y-6 sm:space-y-8 py-12 sm:py-14 lg:py-16">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#3d98f4] rounded-full animate-pulse"></div>
          <span className="text-[#9cabba] text-sm font-medium">Featured Work</span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Projects That Make an Impact
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-2xl mx-auto">
          Showcasing innovative solutions built with cutting-edge technologies and thoughtful design
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="group relative bg-gradient-to-br from-[#1b2127] to-[#151a1f] rounded-2xl overflow-hidden border border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3d98f4]/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#3d98f4]/90 text-white border-none backdrop-blur-sm">{project.category}</Badge>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar className="w-3 h-3 text-white" />
                    <span className="text-white text-xs font-medium">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-[#3d98f4] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#9cabba] text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs hover:border-[#3d98f4] transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    asChild
                    className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#9cabba] hover:text-white hover:bg-[#283039] p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#9cabba] hover:text-white hover:bg-[#283039] p-2"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3d98f4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Section */}
      <div className="text-center pt-6 sm:pt-8">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-[#9cabba] text-sm">Explore my complete portfolio of projects and case studies</p>
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
  )
}
