import { defineType, defineField } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({ name: 'years', type: 'number' }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'skillCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],
})
