import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsGrid from "@/components/projects-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Sarah Chen | Full-Stack Developer",
  description:
    "Explore my complete portfolio of web applications, mobile apps, and software solutions. Built with modern technologies and best practices.",
}

export default function ProjectsPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <ProjectsGrid />
        </main>
        <Footer />
      </div>
    </div>
  )
}
