"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import ProjectForm from "./project-form"
import { deleteProject } from "@/lib/data-store"
import { useRouter } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  image: string
  slug: string
  technologies: string[]
  category: string
  year: string
  featured: boolean
  status: string
  links: Array<{
    name: string
    url: string
    type: string
  }>
}

interface ProjectsManagerProps {
  initialProjects: Project[]
}

export default function ProjectsManager({ initialProjects }: ProjectsManagerProps) {
  const [projects, setProjects] = useState(initialProjects)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id)
        setProjects(projects.filter((project) => project.id !== id))
      } catch (error) {
        console.error("Failed to delete project:", error)
      }
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingProject(null)
    router.refresh()
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Full-Stack": "from-[#3d98f4] to-[#2563eb]",
      Frontend: "from-[#10b981] to-[#059669]",
      Backend: "from-[#f59e0b] to-[#d97706]",
      Mobile: "from-[#8b5cf6] to-[#7c3aed]",
    }
    return colors[category] || "from-[#6b7280] to-[#4b5563]"
  }

  const getStatusColor = (status: string) => {
    return status === "Live"
      ? "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20"
      : "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Projects Management</h2>
          <p className="text-[#9cabba]">Manage your portfolio projects and showcase</p>
        </div>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-[#1b2127] border-[#3b4754] hover:border-[#3d98f4]/50 transition-colors overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image src={project.image} alt={project.title} priority={true} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white border-none`}>
                  {project.category}
                </Badge>
                {project.featured && <Badge className="bg-[#f59e0b]/90 text-white border-none">Featured</Badge>}
              </div>

              <div className="absolute top-4 right-4">
                <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleEdit(project)}
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500/10 backdrop-blur-sm text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <p className="text-[#9cabba] text-sm line-clamp-2">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {/* Project Links */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                  {project.links.map((link, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="ghost"
                      asChild
                      className="text-[#9cabba] hover:text-white hover:bg-[#283039] p-2"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.type === "demo" && <ExternalLink className="w-4 h-4" />}
                        {link.type === "github" && <Github className="w-4 h-4" />}
                        {link.type === "case-study" && <Eye className="w-4 h-4" />}
                      </a>
                    </Button>
                  ))}
                </div>
                <span className="text-[#9cabba] text-sm">{project.year}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Form Modal */}
      {isFormOpen && <ProjectForm project={editingProject} onClose={handleFormClose} />}
    </div>
  )
}
