"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Save, Loader2, Plus, Trash2 } from "lucide-react"
import { createProject, updateProject } from "@/lib/data-store"

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

interface ProjectFormProps {
  project?: Project | null
  onClose: () => void
}

const categories = ["Full-Stack", "Frontend", "Backend", "Mobile"]
const statuses = ["Live", "Development", "Completed"]
const linkTypes = ["demo", "github", "case-study"]

export default function ProjectForm({ project, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "/placeholder.svg?height=300&width=500",
    slug: project?.slug || "",
    technologies: project?.technologies || [],
    category: project?.category || "",
    year: project?.year || new Date().getFullYear().toString(),
    featured: project?.featured || false,
    status: project?.status || "Development",
    links: project?.links || [{ name: "", url: "", type: "demo" }],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [newTech, setNewTech] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Generate slug from title if not provided
      const slug =
        formData.slug ||
        formData.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")

      const projectData = {
        ...formData,
        slug,
        links: formData.links.filter((link) => link.name && link.url),
      }

      if (project) {
        await updateProject(project.id, projectData)
      } else {
        await createProject(projectData)
      }
      onClose()
    } catch (error) {
      console.error("Failed to save project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, newTech.trim()],
      })
      setNewTech("")
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech),
    })
  }

  const addLink = () => {
    setFormData({
      ...formData,
      links: [...formData.links, { name: "", url: "", type: "demo" }],
    })
  }

  const removeLink = (index: number) => {
    setFormData({
      ...formData,
      links: formData.links.filter((_, i) => i !== index),
    })
  }

  const updateLink = (index: number, field: string, value: string) => {
    const updatedLinks = [...formData.links]
    updatedLinks[index] = { ...updatedLinks[index], [field]: value }
    setFormData({ ...formData, links: updatedLinks })
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-[#1b2127] border-[#3b4754] max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">{project ? "Edit Project" : "Add New Project"}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-[#9cabba] hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Project Title *
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                  placeholder="e.g., E-commerce Platform"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug" className="text-white">
                  URL Slug
                </Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                  placeholder="e.g., ecommerce-platform"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Description *
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] resize-none"
                placeholder="Brief description of the project"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-white">
                Image URL
              </Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-white">
                  Category *
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="bg-[#283039] border-[#3b4754] text-white focus:border-[#3d98f4]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#283039] border-[#3b4754]">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="text-white hover:bg-[#3b4754]">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-white">
                  Year
                </Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                  placeholder="2024"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status" className="text-white">
                  Status
                </Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger className="bg-[#283039] border-[#3b4754] text-white focus:border-[#3d98f4]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#283039] border-[#3b4754]">
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status} className="text-white hover:bg-[#3b4754]">
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <Label className="text-white">Technologies</Label>
              <div className="flex gap-2">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                  placeholder="Add technology"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                />
                <Button type="button" onClick={addTechnology} className="bg-[#3d98f4] hover:bg-[#2d7bd4]">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-1 bg-[#283039] px-3 py-1 rounded-full">
                    <span className="text-white text-sm">{tech}</span>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => removeTechnology(tech)}
                      className="h-auto p-0 text-[#9cabba] hover:text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">Project Links</Label>
                <Button type="button" onClick={addLink} size="sm" className="bg-[#3d98f4] hover:bg-[#2d7bd4]">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </div>
              {formData.links.map((link, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 bg-[#283039] rounded-lg">
                  <Input
                    value={link.name}
                    onChange={(e) => updateLink(index, "name", e.target.value)}
                    className="bg-[#1b2127] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                    placeholder="Link name"
                  />
                  <Input
                    value={link.url}
                    onChange={(e) => updateLink(index, "url", e.target.value)}
                    className="bg-[#1b2127] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                    placeholder="URL"
                  />
                  <Select value={link.type} onValueChange={(value) => updateLink(index, "type", value)}>
                    <SelectTrigger className="bg-[#1b2127] border-[#3b4754] text-white focus:border-[#3d98f4]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#283039] border-[#3b4754]">
                      {linkTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-[#3b4754]">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => removeLink(index)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: !!checked })}
                className="border-[#3b4754] data-[state=checked]:bg-[#3d98f4] data-[state=checked]:border-[#3d98f4]"
              />
              <Label htmlFor="featured" className="text-white">
                Featured Project
              </Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {project ? "Update Project" : "Create Project"}
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-[#3b4754] text-[#9cabba] hover:text-white hover:bg-[#283039] bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
