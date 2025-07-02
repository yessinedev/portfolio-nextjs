"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import { ArrowRight, ExternalLink, Github, Calendar, Search, Filter, ArrowLeft } from "lucide-react"

const allProjects = [
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced features including real-time inventory management, multi-vendor support, and AI-powered recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    category: "Full-Stack",
    year: "2024",
    featured: true,
    status: "Live",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative workspace application with real-time updates, advanced project analytics, team collaboration tools, and intuitive drag-and-drop interface.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "task-management-app",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    category: "Frontend",
    year: "2023",
    featured: true,
    status: "Live",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Business intelligence dashboard with machine learning insights, predictive analytics, and customizable reporting for enterprise clients.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "analytics-dashboard",
    technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL", "Docker"],
    category: "Full-Stack",
    year: "2024",
    featured: false,
    status: "Live",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "mobile-banking-app",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    category: "Mobile",
    year: "2023",
    featured: false,
    status: "Live",
  },
  {
    title: "Social Media Platform",
    description:
      "Modern social networking platform with real-time messaging, content sharing, advanced privacy controls, and community features.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "social-media-platform",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
    category: "Full-Stack",
    year: "2023",
    featured: false,
    status: "Development",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with detailed forecasts, interactive maps, weather alerts, and location-based recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "weather-app",
    technologies: ["React", "OpenWeather API", "Chart.js", "PWA"],
    category: "Frontend",
    year: "2022",
    featured: false,
    status: "Live",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Mobile"]
const years = ["All", "2024", "2023", "2022"]

export default function ProjectsGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesYear = selectedYear === "All" || project.year === selectedYear

      return matchesSearch && matchesCategory && matchesYear
    })
  }, [searchTerm, selectedCategory, selectedYear])

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-8 mb-12">
          {/* Back Navigation */}
          <Link href="/#projects">
            <Button variant="ghost" className="text-white hover:bg-[#1b2127] p-2 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          {/* Page Title */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="text-[#9cabba] text-sm font-medium">Complete Portfolio</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">All Projects</h1>
            <p className="text-[#9cabba] text-lg max-w-3xl mx-auto">
              A comprehensive collection of my work spanning web applications, mobile apps, and innovative software
              solutions
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-[#1b2127] rounded-2xl p-6 border border-[#3b4754]">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9cabba] w-4 h-4" />
                <Input
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#9cabba]" />
                  <span className="text-[#9cabba] text-sm font-medium">Filter:</span>
                </div>

                {/* Category Filter */}
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      size="sm"
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-[#3d98f4] text-white rounded-lg"
                          : "rounded-lg bg-transparent border-[#3b4754] text-[#9cabba] hover:border-[#3d98f4] hover:text-white"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* Year Filter */}
                <div className="flex gap-2">
                  {years.map((year) => (
                    <Button
                      key={year}
                      size="sm"
                      variant={selectedYear === year ? "default" : "outline"}
                      onClick={() => setSelectedYear(year)}
                      className={
                        selectedYear === year
                          ? "bg-[#10b981] text-white rounded-lg"
                          : "rounded-lg bg-transparent border-[#3b4754] text-[#9cabba] hover:border-[#10b981] hover:text-white"
                      }
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-[#9cabba] text-sm">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="group relative bg-gradient-to-br from-[#1b2127] to-[#151a1f] rounded-2xl overflow-hidden border border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3d98f4]/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${
                        project.status === "Live" ? "bg-[#10b981]/90 text-white" : "bg-[#f59e0b]/90 text-white"
                      } border-none backdrop-blur-sm`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-[#3d98f4]/90 text-white border-none backdrop-blur-sm">Featured</Badge>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-lg font-bold group-hover:text-[#3d98f4] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[#9cabba] text-xs">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-[#9cabba] text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs hover:border-[#3d98f4] transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>

                    <div className="flex items-center gap-1">
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

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#1b2127] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-[#9cabba]" />
                </div>
                <h3 className="text-white text-xl font-semibold">No projects found</h3>
                <p className="text-[#9cabba] max-w-md mx-auto">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedYear("All")
                  }}
                  className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
