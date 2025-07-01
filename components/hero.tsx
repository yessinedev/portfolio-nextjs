"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { ChevronRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

const techStack = ["React", "Next.js", "Javascript", "TypeScript", "Nestjs.js", "Spring Boot",  "MongoDB", "PostgreSQL", "Git"]

const codeSnippets = [
  {
    language: "JavaScript",
    code: `const developer = {
  name: "Yessine Agrebi",
  passion: "Building amazing apps",
  skills: ["React", "Nextjs", "Tailwind Css"]
};`,
  },
  {
    language: "Java",
    code: `public function createInnovation(){
    ideas = generateSolutions()
    return buildWithPassion(ideas)
  }`,
  },
  {
    language: "TypeScript",
    code: `interface Developer {
  creativity: number;
  problemSolving: "expert";
  collaboration: boolean;
}`,
  },
]

export default function Hero() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Typewriter effect for the main headline
  const headline = "Hi, I'm Yessine Agrebi"

  useEffect(() => {
    if (isTyping && displayedText.length < headline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(headline.slice(0, displayedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (displayedText.length === headline.length) {
      setIsTyping(false)
    }
  }, [displayedText, isTyping, headline])

  // Cycle through code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-2 h-2 bg-[#3d98f4] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-[#10b981] rounded-full animate-ping"></div>
        <div className="absolute bottom-24 left-1/4 w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#ef4444] rounded-full animate-ping delay-500"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-12 right-12 w-6 h-6 sm:w-8 sm:h-8 border border-[#3d98f4]/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-16 left-12 w-5 h-5 sm:w-6 sm:h-6 border border-[#10b981]/30 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[550px]">
          {/* Left Column - Main Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-7 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Animated Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                  {displayedText}
                  <span className="animate-pulse text-[#3d98f4]">|</span>
                </h1>
                <div className="flex items-center gap-2 text-[#3d98f4] font-semibold text-sm sm:text-base">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Full-Stack Developer</span>
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                Passionate about creating innovative and user-friendly applications. I specialize in building scalable
                solutions that make a difference.
              </p>

              {/* Tech Stack Badges */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400 font-medium">Technologies I work with:</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-[#1b2127] border-[#3b4754] text-gray-300 hover:border-[#3d98f4] transition-colors duration-300 text-xs sm:text-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#3d98f4]/25"
              >
                <Link href="/#projects">
                  View My Work
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3b4754] text-white hover:bg-[#1b2127] font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Code Display */}
          <div className="relative order-1 lg:order-2">
            {/* Fixed container to prevent layout shifts */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-gray-400 font-mono">{codeSnippets[currentSnippet].language}</span>
                  </div>
                </div>

                {/* Code Content - Fixed height to prevent layout shifts */}
                <div className="p-4 sm:p-6 h-32 sm:h-40 lg:h-48 flex items-center">
                  <div className="w-full overflow-hidden">
                    <pre className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
                      <code className="language-javascript">{codeSnippets[currentSnippet].code}</code>
                    </pre>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-1 px-4 pb-4">
                  {codeSnippets.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        index === currentSnippet ? "bg-[#3d98f4]" : "bg-[#30363d]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Stats - Responsive positioning */}
              <div className="absolute -bottom-3 -left-1 sm:-bottom-4 sm:-left-4 bg-[#1b2127] border border-[#3b4754] rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#3d98f4]">50+</div>
                  <div className="text-xs text-gray-400">Projects Built</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-1 sm:-top-4 sm:-right-4 bg-[#1b2127] border border-[#3b4754] rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#10b981]">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
