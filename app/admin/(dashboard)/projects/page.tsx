import { getProjects } from "@/lib/data-store"
import ProjectsManager from "@/components/projects-manager"

export default async function AdminProjects() {
  const projects = await getProjects()

  return <ProjectsManager initialProjects={projects} />
}
