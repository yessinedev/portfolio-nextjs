"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Save, Loader2 } from "lucide-react"
import { createSkill, updateSkill } from "@/lib/data-store"

interface Skill {
  id: string
  name: string
  level: number
  description: string
  category: string
  years: number
  projects: number
  icon: string
}

interface SkillFormProps {
  skill?: Skill | null
  onClose: () => void
}

const categories = ["Frontend", "Backend", "Database", "Tools", "DevOps"]
const icons = ["Code2", "Database", "Server", "Palette", "GitBranch", "Cloud", "Shield"]

export default function SkillForm({ skill, onClose }: SkillFormProps) {
  const [formData, setFormData] = useState({
    name: skill?.name || "",
    level: skill?.level || 50,
    description: skill?.description || "",
    category: skill?.category || "",
    years: skill?.years || 1,
    projects: skill?.projects || 0,
    icon: skill?.icon || "Code2",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (skill) {
        await updateSkill(skill.id, formData)
      } else {
        await createSkill(formData)
      }
      onClose()
    } catch (error) {
      console.error("Failed to save skill:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-[#1b2127] border-[#3b4754] max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">{skill ? "Edit Skill" : "Add New Skill"}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-[#9cabba] hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Skill Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                  placeholder="e.g., React, Node.js"
                  required
                />
              </div>

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
                placeholder="Brief description of your expertise with this skill"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level" className="text-white">
                  Proficiency Level (%)
                </Label>
                <Input
                  id="level"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: Number.parseInt(e.target.value) || 0 })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="years" className="text-white">
                  Years of Experience
                </Label>
                <Input
                  id="years"
                  type="number"
                  min="0"
                  value={formData.years}
                  onChange={(e) => setFormData({ ...formData, years: Number.parseInt(e.target.value) || 0 })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projects" className="text-white">
                  Projects Count
                </Label>
                <Input
                  id="projects"
                  type="number"
                  min="0"
                  value={formData.projects}
                  onChange={(e) => setFormData({ ...formData, projects: Number.parseInt(e.target.value) || 0 })}
                  className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon" className="text-white">
                Icon
              </Label>
              <Select value={formData.icon} onValueChange={(value) => setFormData({ ...formData, icon: value })}>
                <SelectTrigger className="bg-[#283039] border-[#3b4754] text-white focus:border-[#3d98f4]">
                  <SelectValue placeholder="Select icon" />
                </SelectTrigger>
                <SelectContent className="bg-[#283039] border-[#3b4754]">
                  {icons.map((icon) => (
                    <SelectItem key={icon} value={icon} className="text-white hover:bg-[#3b4754]">
                      {icon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                    {skill ? "Update Skill" : "Create Skill"}
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
