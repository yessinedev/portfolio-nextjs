import { defineField, defineType } from "sanity";

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    defineField({
      name: "stepNumber",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "label", type: "string" }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "timeline", type: "string" }),
    defineField({ name: "icon", type: "string", initialValue: "Workflow" }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "timeline",
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
