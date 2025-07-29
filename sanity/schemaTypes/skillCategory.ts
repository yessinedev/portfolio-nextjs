import { defineType, defineField } from 'sanity'

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({ name: 'color', type: 'string' }),
    defineField({ name: 'gradient', type: 'string' }),
  ],
})
