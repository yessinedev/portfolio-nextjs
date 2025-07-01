import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-[#9cabba] hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#9cabba] hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#9cabba] hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[#9cabba] text-base font-normal leading-normal">© 2025 Yessine Agrebi. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  )
}
