
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
    slug,
    icon,
    years,
    "projects": *[_type == "project" && references(^._id)]{
    _id,
    title
    } ,
  }
}
`;

export const getSiteSettings = `
*[_type == "siteSettings"][0]{
  _id,
  hero,
  contact
}
`;

export const getServices = `
*[_type == "service"] | order(order asc, title asc){
  _id,
  title,
  eyebrow,
  description,
  icon,
  accentColor,
  metrics,
  technologies,
  featured,
  order
}
`;

export const getExperiences = `
*[_type == "experience"] | order(order asc, startDate desc){
  _id,
  company,
  role,
  "companyLogo": companyLogo.asset->url,
  companyUrl,
  startDate,
  endDate,
  displayDate,
  location,
  current,
  summary,
  achievements,
  technologies,
  order
}
`;

export const getProcessSteps = `
*[_type == "processStep"] | order(order asc, stepNumber asc){
  _id,
  stepNumber,
  label,
  title,
  description,
  timeline,
  icon,
  order
}
`;

export const getTestimonials = `
*[_type == "testimonial"] | order(order asc, clientName asc){
  _id,
  clientName,
  clientRole,
  company,
  projectLabel,
  "avatar": avatar.asset->url,
  initials,
  rating,
  quote,
  order
}
`;

export const getPricingPlans = `
*[_type == "pricingPlan"] | order(order asc, title asc){
  _id,
  title,
  priceRange,
  subtitle,
  deliveryTime,
  features,
  highlighted,
  badge,
  ctaLabel,
  ctaHref,
  order
}
`;



