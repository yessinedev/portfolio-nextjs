import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "heroImage", type: "image" }),
    defineField({
      name: "overview",
      type: "text",
      description: "A brief overview of the project",
    }),
    defineField({
      name: "role",
      type: "string",
      description: "Your role and contributions to the project",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
      description: "Set to true if this project should be featured on the homepage",
    }),
    defineField({
      name: "datePublished",
      type: "datetime",
      title: "Date Published",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",

      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateModified",
      type: "datetime",
      title: "Date Modified",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",

      },
    }),
    defineField({
      name: "skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "projectLink" }],
    }),
  ],
});
