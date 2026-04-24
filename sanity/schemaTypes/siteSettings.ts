import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Portfolio Settings",
      readOnly: true,
    }),
    defineField({
      name: "hero",
      type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "headline", type: "string" },
        { name: "highlight", type: "string" },
        { name: "subheadline", type: "string", title: "Tagline (one line)" },
        { name: "titleLead", type: "string", title: "Title — blue lead (e.g. Full Stack)" },
        { name: "titleConnector", type: "string", title: "Title — after lead (e.g. &)" },
        { name: "titleLine2", type: "string", title: "Title — line 2" },
        { name: "titleLine3", type: "string", title: "Title — line 3" },
        { name: "description", type: "text" },
        { name: "availability", type: "string" },
        { name: "primaryCtaLabel", type: "string" },
        { name: "primaryCtaHref", type: "string" },
        { name: "secondaryCtaLabel", type: "string" },
        { name: "secondaryCtaHref", type: "string" },
        {
          name: "stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", type: "string" },
                { name: "label", type: "string" },
              ],
            },
          ],
        },
        {
          name: "technologies",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        { name: "location", type: "string" },
        { name: "timezone", type: "string" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
