"use client"

import React from "react"

import type { ReactElement } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Code2, Database, Server, Palette, GitBranch, Cloud, Shield, Zap, Brain, Users, Target } from "lucide-react"

interface Skill {
  name: string
  level: number
  description: string
  icon: ReactElement
  category: string
  years: number
  projects: number
}

interface SkillCategory {
  title: string
  description: string
  icon: ReactElement
  skills: Skill[]
  color: string
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces",
    icon: Code2,
    color: "#3d98f4",
    gradient: "from-[#3d98f4] to-[#2563eb]",
    skills: [
      {
        name: "React",
        level: 95,
        description: "Advanced component architecture and state management",
        icon: Code2,
        category: "Frontend",
        years: 4,
        projects: 25,
      },
      {
        name: "TypeScript",
        level: 90,
        description: "Type-safe development and advanced patterns",
        icon: Code2,
        category: "Frontend",
        years: 3,
        projects: 20,
      },
      {
        name: "Next.js",
        level: 88,
        description: "Full-stack React framework with SSR/SSG",
        icon: Code2,
        category: "Frontend",
        years: 2,
        projects: 15,
      },
      {
        name: "Tailwind CSS",
        level: 92,
        description: "Utility-first CSS framework for rapid UI development",
        icon: Palette,
        category: "Frontend",
        years: 3,
        projects: 30,
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Building scalable server-side applications",
    icon: Server,
    color: "#10b981",
    gradient: "from-[#10b981] to-[#059669]",
    skills: [
      {
        name: "Node.js",
        level: 90,
        description: "Server-side JavaScript runtime and ecosystem",
        icon: Server,
        category: "Backend",
        years: 4,
        projects: 22,
      },
      {
        name: "Python",
        level: 85,
        description: "Web development, automation, and data processing",
        icon: Server,
        category: "Backend",
        years: 3,
        projects: 18,
      },
      {
        name: "Express.js",
        level: 88,
        description: "Fast, minimalist web framework for Node.js",
        icon: Server,
        category: "Backend",
        years: 4,
        projects: 20,
      },
      {
        name: "GraphQL",
        level: 75,
        description: "Query language and runtime for APIs",
        icon: Server,
        category: "Backend",
        years: 2,
        projects: 8,
      },
    ],
  },
  {
    title: "Database & Cloud",
    description: "Data management and cloud infrastructure",
    icon: Database,
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#d97706]",
    skills: [
      {
        name: "MongoDB",
        level: 85,
        description: "NoSQL database for modern applications",
        icon: Database,
        category: "Database",
        years: 3,
        projects: 15,
      },
      {
        name: "PostgreSQL",
        level: 80,
        description: "Advanced relational database management",
        icon: Database,
        category: "Database",
        years: 2,
        projects: 12,
      },
      {
        name: "AWS",
        level: 78,
        description: "Cloud computing services and deployment",
        icon: Cloud,
        category: "Cloud",
        years: 2,
        projects: 10,
      },
      {
        name: "Docker",
        level: 82,
        description: "Containerization and deployment automation",
        icon: Cloud,
        category: "DevOps",
        years: 2,
        projects: 14,
      },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools and collaboration",
    icon: GitBranch,
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    skills: [
      {
        name: "Git",
        level: 95,
        description: "Version control and collaborative development",
        icon: GitBranch,
        category: "Tools",
        years: 5,
        projects: 50,
      },
      {
        name: "VS Code",
        level: 98,
        description: "Advanced IDE configuration and extensions",
        icon: Code2,
        category: "Tools",
        years: 5,
        projects: 50,
      },
      {
        name: "Figma",
        level: 75,
        description: "UI/UX design and prototyping",
        icon: Palette,
        category: "Design",
        years: 2,
        projects: 15,
      },
      {
        name: "Jest",
        level: 80,
        description: "JavaScript testing framework",
        icon: Shield,
        category: "Testing",
        years: 3,
        projects: 18,
      },
    ],
  },
]

const softSkills = [
  { name: "Problem Solving", icon: Brain, level: 95 },
  { name: "Team Leadership", icon: Users, level: 88 },
  { name: "Project Management", icon: Target, level: 85 },
  { name: "Communication", icon: Users, level: 92 },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    // Animate skill levels on component mount for soft skills only
    const timer = setTimeout(() => {
      const levels: { [key: string]: number } = {}
      softSkills.forEach((skill) => {
        levels[skill.name] = skill.level
      })
      setAnimatedLevels(levels)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-12 sm:py-14 lg:py-16 space-y-8 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <Zap className="w-4 h-4 text-[#f59e0b] animate-pulse" />
          <span className="text-[#9cabba] text-sm font-medium">Technical Expertise</span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Skills & Technologies</h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiencies across different domains
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : "bg-[#1b2127] text-[#9cabba] hover:bg-[#283039] hover:text-white border border-[#3b4754]"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6 sm:space-y-8">
          {/* Category Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].gradient}`}>
                {React.createElement(skillCategories[activeCategory].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
            </div>
            <p className="text-[#9cabba] max-w-md mx-auto text-sm sm:text-base">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const SkillIcon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#3d98f4]/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-3 sm:p-4 space-y-3">
                    {/* Skill Header */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].gradient} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <SkillIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold truncate text-sm sm:text-base">{skill.name}</h4>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs text-[#9cabba]">
                          <span>{skill.years} years</span>
                          <span>•</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-white text-xl sm:text-2xl font-bold">Soft Skills</h3>
            <p className="text-[#9cabba] max-w-md mx-auto text-sm sm:text-base">
              Essential interpersonal and professional skills that drive successful collaboration
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => {
              const SoftSkillIcon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#10b981]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#10b981]/10 group text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] group-hover:scale-110 transition-transform duration-300">
                        <SoftSkillIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{skill.name}</h4>
                    </div>

                    {/* Circular Progress */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto">
                      <svg className="w-14 h-14 sm:w-16 sm:h-16 transform -rotate-90" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="28" stroke="#283039" strokeWidth="4" fill="none" />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#10b981"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          strokeDashoffset={`${2 * Math.PI * 28 * (1 - (animatedLevels[skill.name] || 0) / 100)}`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm font-bold">{skill.level}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 sm:mt-16">
          <Card className="bg-gradient-to-r from-[#1b2127] to-[#151a1f] border-[#3b4754] overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#3d98f4]">50+</div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#10b981]">15+</div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">Technologies Mastered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#f59e0b]">3+</div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
