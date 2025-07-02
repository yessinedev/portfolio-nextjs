import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSkills, getProjects } from "@/lib/data-store"
import { Code2, FolderOpen, TrendingUp, Users } from "lucide-react"

export default async function AdminDashboard() {
  const skills = await getSkills()
  const projects = await getProjects()
  const featuredProjects = projects.filter((p) => p.featured)

  const stats = [
    {
      title: "Total Skills",
      value: skills.length,
      icon: Code2,
      color: "from-[#3d98f4] to-[#2563eb]",
    },
    {
      title: "Total Projects",
      value: projects.length,
      icon: FolderOpen,
      color: "from-[#10b981] to-[#059669]",
    },
    {
      title: "Featured Projects",
      value: featuredProjects.length,
      icon: TrendingUp,
      color: "from-[#f59e0b] to-[#d97706]",
    },
    {
      title: "Live Projects",
      value: projects.filter((p) => p.status === "Live").length,
      icon: Users,
      color: "from-[#8b5cf6] to-[#7c3aed]",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Admin!</h2>
        <p className="text-[#9cabba]">Here's an overview of your portfolio content.</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="bg-[#1b2127] border-[#3b4754] rounded-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#9cabba] text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white">Recent Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.slice(0, 5).map((skill) => (
              <div key={skill.id} className="flex items-center justify-between p-3 bg-[#283039] rounded-lg">
                <div>
                  <p className="text-white font-medium">{skill.name}</p>
                  <p className="text-[#9cabba] text-sm">{skill.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#3d98f4] font-bold">{skill.level}%</p>
                  <p className="text-[#9cabba] text-xs">{skill.years} years</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white">Recent Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-[#283039] rounded-lg">
                <div>
                  <p className="text-white font-medium">{project.title}</p>
                  <p className="text-[#9cabba] text-sm">{project.category}</p>
                </div>
                <div className="text-right">
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === "Live" ? "bg-[#10b981]/10 text-[#10b981]" : "bg-[#f59e0b]/10 text-[#f59e0b]"
                    }`}
                  >
                    {project.status}
                  </div>
                  <p className="text-[#9cabba] text-xs mt-1">{project.year}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
