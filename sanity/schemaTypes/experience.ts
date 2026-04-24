import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "companyLogo", type: "image" }),
    defineField({ name: "companyUrl", type: "url" }),
    defineField({
      name: "startDate",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "endDate", type: "date" }),
    defineField({
      name: "displayDate",
      type: "string",
      description: "Optional text override, for example: Nov 2025 - Present",
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "current",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "achievements",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "company",
      media: "companyLogo",
    },
  },
});
