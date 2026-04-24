import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "clientName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "clientRole", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "projectLabel", type: "string" }),
    defineField({ name: "avatar", type: "image" }),
    defineField({ name: "initials", type: "string" }),
    defineField({
      name: "rating",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "quote",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "projectLabel",
      media: "avatar",
    },
  },
});
