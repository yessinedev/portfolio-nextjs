"use server"

import { revalidatePath } from "next/cache"

// In-memory data store - in production, use a database
const skillsData = [
  {
    id: "1",
    name: "React",
    level: 95,
    description: "Advanced component architecture and state management",
    category: "Frontend",
    years: 4,
    projects: 25,
    icon: "Code2",
  },
  {
    id: "2",
    name: "TypeScript",
    level: 90,
    description: "Type-safe development and advanced patterns",
    category: "Frontend",
    years: 3,
    projects: 20,
    icon: "Code2",
  },
  {
    id: "3",
    name: "Node.js",
    level: 90,
    description: "Server-side JavaScript runtime and ecosystem",
    category: "Backend",
    years: 4,
    projects: 22,
    icon: "Server",
  },
  {
    id: "4",
    name: "MongoDB",
    level: 85,
    description: "NoSQL database for modern applications",
    category: "Database",
    years: 3,
    projects: 15,
    icon: "Database",
  },
]

const projectsData = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with modern UI/UX, real-time inventory management, and seamless payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full-Stack",
    year: "2024",
    featured: true,
    status: "Live",
    links: [
      { name: "Live Demo", url: "https://demo.example.com", type: "demo" },
      { name: "GitHub Repository", url: "https://github.com/example/ecommerce", type: "github" },
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative workspace with real-time updates, advanced project analytics, and intuitive drag-and-drop interface.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "task-management-app",
    technologies: ["React", "Firebase", "Material-UI"],
    category: "Frontend",
    year: "2023",
    featured: true,
    status: "Live",
    links: [
      { name: "Live Application", url: "https://taskapp.example.com", type: "demo" },
      { name: "Source Code", url: "https://github.com/example/taskapp", type: "github" },
    ],
  },
]

// Skills CRUD operations
export async function getSkills() {
  return skillsData
}

export async function createSkill(skill: Omit<(typeof skillsData)[0], "id">) {
  const newSkill = {
    ...skill,
    id: Date.now().toString(),
  }
  skillsData.push(newSkill)
  revalidatePath("/admin/skills")
  revalidatePath("/")
  return newSkill
}

export async function updateSkill(id: string, updates: Partial<(typeof skillsData)[0]>) {
  const index = skillsData.findIndex((skill) => skill.id === id)
  if (index !== -1) {
    skillsData[index] = { ...skillsData[index], ...updates }
    revalidatePath("/admin/skills")
    revalidatePath("/")
    return skillsData[index]
  }
  throw new Error("Skill not found")
}

export async function deleteSkill(id: string) {
  const index = skillsData.findIndex((skill) => skill.id === id)
  if (index !== -1) {
    skillsData.splice(index, 1)
    revalidatePath("/admin/skills")
    revalidatePath("/")
    return true
  }
  throw new Error("Skill not found")
}

// Projects CRUD operations
export async function getProjects() {
  return projectsData
}

export async function createProject(project: Omit<(typeof projectsData)[0], "id">) {
  const newProject = {
    ...project,
    id: Date.now().toString(),
  }
  projectsData.push(newProject)
  revalidatePath("/admin/projects")
  revalidatePath("/")
  return newProject
}

export async function updateProject(id: string, updates: Partial<(typeof projectsData)[0]>) {
  const index = projectsData.findIndex((project) => project.id === id)
  if (index !== -1) {
    projectsData[index] = { ...projectsData[index], ...updates }
    revalidatePath("/admin/projects")
    revalidatePath("/")
    return projectsData[index]
  }
  throw new Error("Project not found")
}

export async function deleteProject(id: string) {
  const index = projectsData.findIndex((project) => project.id === id)
  if (index !== -1) {
    projectsData.splice(index, 1)
    revalidatePath("/admin/projects")
    revalidatePath("/")
    return true
  }
  throw new Error("Project not found")
}
