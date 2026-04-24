/**
 * Seeds Service, PricingPlan, ProcessStep, and Testimonial documents into your Sanity dataset.
 *
 * Prerequisites:
 * 1. `.env` at repo root with:
 *    - SANITY_STUDIO_SANITY_PROJECT_ID
 *    - SANITY_STUDIO_SANITY_DATASET
 *    - SANITY_API_WRITE_TOKEN (Editor or Admin token from https://www.sanity.io/manage → Project → API → Tokens)
 * 2. Deploy Studio at least once so these types exist in the hosted project (schemas are in code; dataset accepts any _type the API allows).
 *
 * Run: npm run seed:cms
 *
 * Uses stable _id values so re-running updates the same documents (idempotent).
 */

import "./load-env";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN ||
  process.env.SANITY_STUDIO_API_TOKEN;

if (!token) {
  console.error(
    "Missing write token. Add SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN) to .env — create one in Sanity Manage → API → Tokens (Editor)."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

function metricKey(i: number) {
  return `metric-${i}`;
}

const services = [
  {
    _id: "seed-service-fullstack",
    _type: "service" as const,
    title: "Full-Stack Product Development",
    eyebrow: "Core offering",
    description:
      "End-to-end web applications with Next.js or React on the front, NestJS or Node on the API layer, and PostgreSQL or Prisma for durable data — structured for clarity, testing, and long-term maintenance.",
    icon: "Layers",
    accentColor: "#3d98f4",
    featured: true,
    order: 0,
    metrics: [
      { _key: metricKey(0), value: "25+", label: "Shipped features & iterations" },
      { _key: metricKey(1), value: "4+", label: "Years shipping production code" },
      { _key: metricKey(2), value: "100%", label: "Focus on maintainable delivery" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "REST",
      "Tailwind CSS",
    ],
  },
  {
    _id: "seed-service-apis",
    _type: "service" as const,
    title: "APIs, Auth & Data Modeling",
    eyebrow: "02",
    description:
      "Secure REST or GraphQL-style APIs, JWT or OAuth flows, role-based access, migrations, and schemas that stay understandable as the product grows.",
    icon: "Database",
    order: 1,
    technologies: ["NestJS", "PostgreSQL", "Prisma", "JWT", "Zod", "OpenAPI"],
  },
  {
    _id: "seed-service-ui",
    _type: "service" as const,
    title: "UI Systems & Performance",
    eyebrow: "03",
    description:
      "Responsive layouts, accessible components, and performance-minded patterns so pages feel fast on real devices and networks.",
    icon: "Palette",
    order: 2,
    technologies: ["Next.js", "Tailwind CSS", "Radix UI", "React Server Components"],
  },
  {
    _id: "seed-service-automation",
    _type: "service" as const,
    title: "Workflow Automation",
    eyebrow: "04",
    description:
      "Connecting tools and APIs to remove repetitive work — webhooks, queues, scheduled jobs, and integrations that fail loudly when something breaks.",
    icon: "Workflow",
    order: 3,
    technologies: ["Node.js", "Webhooks", "Cron", "REST", "Email & notifications"],
  },
  {
    _id: "seed-service-devops",
    _type: "service" as const,
    title: "Deploy & Handoff",
    eyebrow: "05",
    description:
      "Vercel or Docker-based deploys, environment separation, and documentation so your team can own the system after launch.",
    icon: "Rocket",
    order: 4,
    technologies: ["Vercel", "Docker", "GitHub Actions", "CI basics"],
  },
];

const pricingPlans = [
  {
    _id: "seed-pricing-starter",
    _type: "pricingPlan" as const,
    title: "Starter build",
    priceRange: "$400 – $1,200",
    subtitle: "Depending on scope",
    deliveryTime: "3–7 days",
    highlighted: false,
    order: 0,
    features: [
      "Landing page or small internal tool",
      "Responsive layout + one revision round",
      "Deployed to Vercel or your host",
      "Short Loom walkthrough on delivery",
    ],
    ctaLabel: "Book a free call",
    ctaHref: "/#contact",
  },
  {
    _id: "seed-pricing-product",
    _type: "pricingPlan" as const,
    title: "Product slice",
    priceRange: "$1,500 – $4,000",
    subtitle: "Typical MVP slice",
    deliveryTime: "2–4 weeks",
    highlighted: true,
    badge: "Most popular",
    order: 1,
    features: [
      "Next.js app with auth-ready structure",
      "API + PostgreSQL / Prisma",
      "Core user flows and admin basics",
      "Staging + production deploy",
      "30 days email support for bugs",
    ],
    ctaLabel: "Book a free call",
    ctaHref: "/#contact",
  },
  {
    _id: "seed-pricing-platform",
    _type: "pricingPlan" as const,
    title: "Platform / SaaS core",
    priceRange: "$4,000 – $12,000+",
    subtitle: "Scoped after discovery",
    deliveryTime: "4–10 weeks",
    highlighted: false,
    order: 2,
    features: [
      "Multi-role app, billing hooks, or complex domains",
      "Iterative milestones with visible demos",
      "Documentation for handoff",
      "Optional automation or integrations",
    ],
    ctaLabel: "Let's scope it",
    ctaHref: "/#contact",
  },
  {
    _id: "seed-pricing-retainer",
    _type: "pricingPlan" as const,
    title: "Ongoing support",
    priceRange: "Custom retainer",
    subtitle: "After launch",
    deliveryTime: "Monthly",
    highlighted: false,
    order: 3,
    features: [
      "Small features, fixes, and dependency updates",
      "Priority response window agreed in writing",
      "Quarterly health check on performance & security basics",
    ],
    ctaLabel: "Discuss retainer",
    ctaHref: "/#contact",
  },
];

const processSteps = [
  {
    _id: "seed-process-discovery",
    _type: "processStep" as const,
    stepNumber: "01",
    label: "Day 1",
    title: "Discovery call",
    timeline: "30–45 min",
    description:
      "We align on goals, constraints, and success criteria. You leave with a clear picture of what a first milestone could look like.",
    icon: "MessageCircle",
    order: 0,
  },
  {
    _id: "seed-process-proposal",
    _type: "processStep" as const,
    stepNumber: "02",
    label: "Days 2–4",
    title: "Proposal & scope",
    timeline: "Written scope",
    description:
      "You get a concise scope: deliverables, stack choices, timeline, and a fixed or range-based estimate — no surprise scope creep baked in.",
    icon: "FileText",
    order: 1,
  },
  {
    _id: "seed-process-build",
    _type: "processStep" as const,
    stepNumber: "03",
    label: "Build phase",
    title: "Iterative delivery",
    timeline: "Weekly demos",
    description:
      "I ship in small vertical slices so you can try real flows early. Feedback is folded in continuously instead of at the very end.",
    icon: "Hammer",
    order: 2,
  },
  {
    _id: "seed-process-launch",
    _type: "processStep" as const,
    stepNumber: "04",
    label: "Launch",
    title: "Release & handoff",
    timeline: "Docs + deploy",
    description:
      "Production deploy, environment notes, and a short handoff so your team can operate and extend the codebase confidently.",
    icon: "PartyPopper",
    order: 3,
  },
];

const testimonials = [
  {
    _id: "seed-testimonial-1",
    _type: "testimonial" as const,
    clientName: "Sofien M.",
    clientRole: "Product lead",
    company: "Regional SaaS team",
    projectLabel: "Internal dashboard · Direct",
    rating: 5,
    order: 0,
    quote:
      "We needed a clean internal tool without babysitting the build. Yessine shipped on the milestones we agreed on and the codebase was easy for us to take over.",
  },
  {
    _id: "seed-testimonial-2",
    _type: "testimonial" as const,
    clientName: "Amira K.",
    clientRole: "Founder",
    company: "Early-stage startup",
    projectLabel: "MVP web app · Contract",
    rating: 5,
    order: 1,
    quote:
      "Clear communication and pragmatic tradeoffs. We focused on what mattered for launch first, and left room to grow without rewriting everything.",
  },
  {
    _id: "seed-testimonial-3",
    _type: "testimonial" as const,
    clientName: "Karim B.",
    clientRole: "Engineering manager",
    company: "B2B services",
    projectLabel: "API hardening · Direct",
    rating: 5,
    order: 2,
    quote:
      "Solid API design and database work. Reviews were straightforward because structure and naming were consistent from day one.",
  },
];

async function main() {
  const docs = [...services, ...pricingPlans, ...processSteps, ...testimonials];
  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc);
  }
  await tx.commit();
  console.log(
    `Seeded ${services.length} services, ${pricingPlans.length} pricing plans, ${processSteps.length} process steps, ${testimonials.length} testimonials.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
