"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/lib/types";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function formatYear(date: string) {
  return new Date(date).getFullYear();
}

export default function WorkExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!experiences?.length) {
    return null;
  }

  const activeExperience = experiences[activeIndex] ?? experiences[0];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 space-y-8 overflow-x-hidden"
    >
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#3d98f4] rounded-full animate-pulse" />
          <span className="text-[#9cabba] text-sm font-medium">Career</span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Work Experience
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-3xl mx-auto">
          The companies, products, and client systems I have helped build.
        </p>
      </div>

      <div className="grid min-w-0 lg:grid-cols-[minmax(0,11rem)_1fr] gap-4 lg:gap-8">
        <div className="min-w-0 flex flex-col gap-2">
          {experiences.map((experience, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={experience._id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full max-w-full text-left rounded-xl border px-3 py-2.5 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#1b2127] border-[#3d98f4]/55 text-white shadow-md shadow-[#3d98f4]/10"
                    : "bg-[#111418] border-[#283039] text-[#9cabba] hover:border-[#3b4754] hover:text-white"
                }`}
              >
                <div className="font-semibold leading-snug truncate">
                  {experience.company}
                </div>
                <div
                  className={
                    isActive ? "text-[#3d98f4] text-xs mt-0.5" : "text-[#6f7d8a] text-xs mt-0.5"
                  }
                >
                  {formatYear(experience.startDate)}
                </div>
              </button>
            );
          })}
        </div>

        <Card className="min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#111418] via-[#151a1f] to-[#0d1117] border-[#283039]">
          <CardContent className="p-6 sm:p-8 lg:p-10 space-y-7">
            <div className="flex flex-col md:flex-row md:items-start gap-5 md:justify-between">
              <div className="flex gap-4">
                <div className="size-14 rounded-2xl bg-[#1b2127] border border-[#3b4754] flex items-center justify-center overflow-hidden">
                  {activeExperience.companyLogo ? (
                    <Image
                      src={activeExperience.companyLogo}
                      alt={`${activeExperience.company} logo`}
                      width={56}
                      height={56}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="text-[#3d98f4] font-black">
                      {activeExperience.company.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-white text-2xl sm:text-3xl font-black">
                    {activeExperience.role}
                  </h3>
                  <p className="text-[#3d98f4] font-semibold">
                    {activeExperience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#6f7d8a]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {activeExperience.displayDate ||
                        `${formatYear(activeExperience.startDate)} - ${
                          activeExperience.endDate
                            ? formatYear(activeExperience.endDate)
                            : "Present"
                        }`}
                    </span>
                    {activeExperience.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {activeExperience.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {activeExperience.current && (
                <Badge className="w-fit rounded-full bg-[#3d98f4]/15 text-[#3d98f4] border border-[#3d98f4]/35">
                  Current
                </Badge>
              )}
            </div>

            <p className="text-[#c7d0da] text-base sm:text-lg leading-relaxed">
              {activeExperience.summary}
            </p>

            {!!activeExperience.achievements?.length && (
              <ul className="space-y-4">
                {activeExperience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-4 text-[#9cabba] leading-relaxed">
                    <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-[#3d98f4]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}

            {!!activeExperience.technologies?.length && (
              <div className="flex flex-wrap gap-2 pt-2">
                {activeExperience.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="border-[#3b4754] bg-[#1b2127] text-[#9cabba]"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
