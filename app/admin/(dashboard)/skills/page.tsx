import { getSkills } from "@/lib/data-store"
import SkillsManager from "@/components/skills-manager"

export default async function AdminSkills() {
  const skills = await getSkills()

  return <SkillsManager initialSkills={skills} />
}
