import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', type: 'string' }),
    defineField({ name: 'heroImage', type: 'image' }),
    defineField({ name: 'overview', type: 'text' }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'projectLink' }],
    }),
  ],
})
