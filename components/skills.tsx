"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Zap, Brain, Users, Target } from "lucide-react";
import { SkillCategory } from "@/lib/types";
import IconRenderer from "./IconRenderer";

const softSkills = [
  { name: "Problem Solving", icon: Brain, level: 95 },
  { name: "Team Leadership", icon: Users, level: 88 },
  { name: "Project Management", icon: Target, level: 85 },
  { name: "Communication", icon: Users, level: 92 },
];

export default function Skills({
  skillCategories,
}: {
  skillCategories: SkillCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState(0);
  


  
  return (
    <section
      id="skills"
      className="py-12 sm:py-14 lg:py-16 space-y-8 sm:space-y-10"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <Zap className="w-4 h-4 text-[#f59e0b] animate-pulse" />
          <span className="text-[#9cabba] text-sm font-medium">
            Technical Expertise
          </span>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Skills & Technologies
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiencies
          across different domains
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {skillCategories?.map((category, index) => {
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
                <IconRenderer iconName={category.icon} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6 sm:space-y-8">
          {/* Category Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].gradient}`}
              >
                <IconRenderer iconName={skillCategories[activeCategory].icon} />
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                {skillCategories[activeCategory].title}
              </h3>
            </div>
            <p className="text-[#9cabba] max-w-md mx-auto text-sm sm:text-base">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => {
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
                        <IconRenderer iconName={skill.icon} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold truncate text-sm sm:text-base">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs text-[#9cabba]">
                          <span>{skill.years} years</span>
                          <span>•</span>
                          <span>{skill.projects && skill.projects.length} projects</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills Section */}
        

        {/* Skills Summary */}
        <div className="mt-12 sm:mt-16">
          <Card className="bg-gradient-to-r from-[#1b2127] to-[#151a1f] border-[#3b4754] overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#3d98f4]">
                    50+
                  </div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#10b981]">
                    15+
                  </div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">
                    Technologies Mastered
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[#f59e0b]">
                    3+
                  </div>
                  <div className="text-[#9cabba] text-xs sm:text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
