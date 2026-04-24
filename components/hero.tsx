"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSettings, Metric } from "@/lib/types";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const fallbackTechStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Spring Boot",
  "Docker",
  "Supabase",
];

const defaultStats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function Hero({ settings }: { settings?: HeroSettings }) {
  const techStack = settings?.technologies?.length
    ? settings.technologies
    : fallbackTechStack;

  const statsFromCms: Metric[] = (settings?.stats?.filter(Boolean) ??
    []) as Metric[];
  const stats: Metric[] =
    statsFromCms.length >= 4
      ? statsFromCms.slice(0, 4)
      : statsFromCms.length > 0
        ? [
            ...statsFromCms,
            ...defaultStats.filter(
              (d) =>
                !statsFromCms.some(
                  (s) => s.label === d.label && s.value === d.value
                )
            ),
          ].slice(0, 4)
        : defaultStats;

  const availability =
    settings?.availability || "Available for new projects";

  const titleLead = settings?.titleLead ?? "Full Stack";
  const titleLine2 = settings?.titleLine2 ?? "Software";
  const titleLine3 = settings?.titleLine3 ?? "Engineer";

  const taglineEmphasis =
    settings?.highlight ?? "scalable apps & APIs";

  const primaryLabel = settings?.primaryCtaLabel ?? "Book a Free Call";
  const primaryHref = settings?.primaryCtaHref ?? "/#contact";
  const secondaryLabel = settings?.secondaryCtaLabel ?? "See My Work";
  const secondaryHref = settings?.secondaryCtaHref ?? "/#projects";

  const description =
    settings?.description ??
    "I build production-ready web applications, APIs, and automation — from discovery to deploy — with clear scope, steady communication, and code your team can extend.";

  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      {/* Subtle grid + soft blue glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 71, 84, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 71, 84, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-[#3d98f4]/12 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-[#2563eb]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        {/* Status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#3d98f4]/40 bg-[#111418]/90 px-4 py-2 backdrop-blur-sm">
          <span className="size-2 shrink-0 rounded-full bg-[#3d98f4] shadow-[0_0_12px_rgba(61,152,244,0.85)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3d98f4] sm:text-xs">
            {availability}
          </span>
        </div>

        {/* Headline */}
        {settings?.headline ? (
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {settings.headline}
          </h1>
        ) : (
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-[#3d98f4]">{titleLead}</span>
            <br />
            <span className="text-white">{titleLine2}</span>
            <br />
            <span className="text-white">{titleLine3}</span>
          </h1>
        )}

        {/* Tagline */}
        <p className="mt-6 max-w-2xl text-balance text-lg text-[#9cabba] sm:text-xl">
          {settings?.subheadline ? (
            settings.subheadline
          ) : (
            <>
              I build{" "}
              <span className="bg-gradient-to-r from-[#3d98f4] to-[#22d3ee] bg-clip-text font-semibold text-transparent">
                {taglineEmphasis}
              </span>{" "}
              that actually work.
            </>
          )}
        </p>

        {/* Body */}
        <p className="mt-5 max-w-2xl text-balance text-sm leading-relaxed text-[#c7d0da] sm:text-base">
          {description}
        </p>

        {/* Tech row */}
        <div className="mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={`${tech}-${index}`}
              variant="outline"
              className="border-[#3b4754] bg-[#111418]/80 px-3 py-1 text-xs font-medium text-white/90 hover:border-[#3d98f4]/50 sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTAs — primary = book (blue), secondary = outline */}
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-[#3d98f4] px-8 text-base font-semibold text-white shadow-lg shadow-[#3d98f4]/20 hover:bg-[#2d7bd4]"
          >
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2"
            >
              <Calendar className="size-4 shrink-0" />
              {primaryLabel}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-[#3b4754] bg-[#111418]/80 px-8 text-base font-semibold text-white hover:border-[#3d98f4]/50 hover:bg-[#1b2127]"
          >
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2"
            >
              {secondaryLabel}
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-14 sm:mt-16 w-full max-w-4xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#283039] bg-[#283039] lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat._id || stat._key || `${stat.value}-${stat.label}-${i}`}
                className="flex flex-col items-center justify-center bg-[#1b2127]/95 px-3 py-5 backdrop-blur-sm sm:py-6"
              >
                <span className="text-2xl font-black tabular-nums text-white sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 max-w-[9rem] text-center text-[11px] font-medium leading-snug text-[#9cabba] sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
