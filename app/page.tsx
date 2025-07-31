import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Contact from "@/components/contact"
import SkillsServer from "@/components/SkillsServer"

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-1 justify-center py-3 sm:py-4 md:py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <Hero />
            <FeaturedProjects />
            <SkillsServer />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}
