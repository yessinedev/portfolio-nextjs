// /lib/queries.ts

export const getSkillCategoriesWithSkills = `
*[_type == "skillCategory"]{
  _id,
  title,
  description,
  icon,
  color,
  gradient,
  // Inline the skills that reference this category
  "skills": *[_type == "skill" && references(^._id)]{
    _id,
    name,
    description,
    icon,
    years,
    "projects": *[_type == "project" && references(^._id)]{
    _id,
    title
    } ,
  }
}
`;


