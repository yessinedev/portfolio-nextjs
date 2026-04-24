import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "priceRange",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "deliveryTime", type: "string" }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "highlighted",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "badge", type: "string" }),
    defineField({
      name: "ctaLabel",
      type: "string",
      initialValue: "Book a free call",
    }),
    defineField({ name: "ctaHref", type: "string", initialValue: "/#contact" }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "priceRange",
    },
  },
});
