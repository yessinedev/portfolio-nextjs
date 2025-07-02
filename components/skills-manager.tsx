"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Code2, Database, Server, Palette, GitBranch, Cloud, Shield } from "lucide-react"
import SkillForm from "./skill-form"
import { deleteSkill } from "@/lib/data-store"
import { useRouter } from "next/navigation"

const iconMap = {
  Code2,
  Database,
  Server,
  Palette,
  GitBranch,
  Cloud,
  Shield,
}

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

interface SkillsManagerProps {
  initialSkills: Skill[]
}

export default function SkillsManager({ initialSkills }: SkillsManagerProps) {
  const [skills, setSkills] = useState(initialSkills)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      try {
        await deleteSkill(id)
        setSkills(skills.filter((skill) => skill.id !== id))
      } catch (error) {
        console.error("Failed to delete skill:", error)
      }
    }
  }

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingSkill(null)
    router.refresh()
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Frontend: "from-[#3d98f4] to-[#2563eb]",
      Backend: "from-[#10b981] to-[#059669]",
      Database: "from-[#f59e0b] to-[#d97706]",
      Tools: "from-[#8b5cf6] to-[#7c3aed]",
      DevOps: "from-[#ef4444] to-[#dc2626]",
    }
    return colors[category] || "from-[#6b7280] to-[#4b5563]"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Skills Management</h2>
          <p className="text-[#9cabba]">Manage your technical skills and expertise</p>
        </div>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code2

          return (
            <Card key={skill.id} className="bg-[#1b2127] border-[#3b4754] hover:border-[#3d98f4]/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(skill.category)}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(skill)}
                      className="text-[#9cabba] hover:text-white hover:bg-[#283039]"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(skill.id)}
                      className="text-[#9cabba] hover:text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#9cabba] text-sm">{skill.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#9cabba]">Proficiency</span>
                    <span className="text-white font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#283039] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#3d98f4] to-[#2563eb] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#3d98f4]">{skill.years}</p>
                    <p className="text-[#9cabba] text-xs">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#10b981]">{skill.projects}</p>
                    <p className="text-[#9cabba] text-xs">Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Skill Form Modal */}
      {isFormOpen && <SkillForm skill={editingSkill} onClose={handleFormClose} />}
    </div>
  )
}
