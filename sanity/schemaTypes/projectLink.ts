import { defineType, defineField } from 'sanity'

export const projectLink = defineType({
  name: 'projectLink',
  title: 'Project Link',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'url', type: 'url', validation: (rule) => rule.required() }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Demo', value: 'demo' },
          { title: 'GitHub', value: 'github' },
          { title: 'Case Study', value: 'case_study' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
