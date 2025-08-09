"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Search,
  ArrowLeft,
} from "lucide-react";
import { Project } from "@/lib/types";


export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.overview?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.skills?.some((tech) =>
          tech.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesSearch;
    });
  }, [searchTerm, projects]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-8 mb-12">
          {/* Back Navigation */}
          <Link href="/#projects">
            <Button
              variant="ghost"
              className="text-white hover:bg-[#1b2127] p-2 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          {/* Page Title */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="text-[#9cabba] text-sm font-medium">
                Complete Portfolio
              </span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
              All Projects
            </h1>
            <p className="text-[#9cabba] text-lg max-w-3xl mx-auto">
              A comprehensive collection of my work spanning web applications,
              mobile apps, and innovative software solutions
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-[#1b2127] rounded-2xl p-6 border border-[#3b4754]">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9cabba] w-4 h-4" />
                <Input
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-lg bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-[#9cabba] text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project._id}
                className="group relative bg-gradient-to-br from-[#1b2127] to-[#151a1f] rounded-2xl overflow-hidden border border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3d98f4]/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image?? "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-[#3d98f4]/90 text-white border-none backdrop-blur-sm">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2127] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-lg font-bold group-hover:text-[#71b4f794] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[#9cabba] text-sm leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.skills.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech._id}
                        variant="outline"
                        className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs hover:border-[#3d98f4] transition-colors"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                    {project.skills.length > 4 && (
                      <Badge
                        variant="outline"
                        className="bg-[#283039] border-[#3b4754] text-[#9cabba] text-xs"
                      >
                        +{project.skills.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <Link
                        href={`/projects/${project._id}`}
                        className="flex items-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>

                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#9cabba] hover:text-white hover:bg-[#283039] p-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#9cabba] hover:text-white hover:bg-[#283039] p-2"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3d98f4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#1b2127] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-[#9cabba]" />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  No projects found
                </h3>
                <p className="text-[#9cabba] max-w-md mx-auto">
                  Try adjusting your search terms or filters to find what you&apos;re
                  looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                  }}
                  className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
