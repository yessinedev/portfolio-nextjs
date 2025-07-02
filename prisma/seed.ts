import prisma from "@/lib/prisma";


async function main() {
  const frontendCategory = await prisma.skillCategory.create({
    data: {
      title: "Frontend",
      description: "Technologies for building UI",
      icon: "Code2",
      color: "#F97316",
      gradient: "from-orange-500 to-yellow-400",
    },
  });

  const backendCategory = await prisma.skillCategory.create({
    data: {
      title: "Backend",
      description: "Technologies for server-side development",
      icon: "Server",
      color: "#2563EB",
      gradient: "from-blue-500 to-indigo-400",
    },
  });

  const databaseCategory = await prisma.skillCategory.create({
    data: {
      title: "Database & Cloud",
      description: "Technologies for data management and cloud infrastructure",
      icon: "Database",
      color: "#16A34A",
      gradient: "from-green-500 to-emerald-400",
    },
  });

  // Create skills separately so we can link them to projects later
  const [react, tailwind, nextjs, reactQuery] = await Promise.all([
    prisma.skill.create({
      data: {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        icon: "Code2",
        years: 3,
        categoryId: frontendCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework",
        icon: "Code2",
        years: 2,
        categoryId: frontendCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "Next.js",
        description: "A React framework for production",
        icon: "Code2",
        years: 2,
        categoryId: frontendCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "React Query",
        description:
          "A library for fetching, caching, and updating data in React applications",
        icon: "Code2",
        years: 1,
        categoryId: frontendCategory.id,
      },
    }),
  ]);

  const [express, nestjs, spring] = await Promise.all([
    prisma.skill.create({
      data: {
        name: "Express.js",
        description: "Fast, unopinionated, minimalist web framework for Node.js",
        icon: "Server",
        years: 3,
        categoryId: backendCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "NestJS",
        description: "A progressive Node.js framework for building efficient server-side applications",
        icon: "Server",
        years: 2,
        categoryId: backendCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "Spring Boot",
        description: "A framework for building Java applications",
        icon: "Server",
        years: 4,
        categoryId: backendCategory.id,
      },
    }),
  ]);

  const [mongodb, postgresql, mysql, prismadb, docker] = await Promise.all([
    prisma.skill.create({
      data: {
        name: "MongoDB",
        description: "A NoSQL database for modern applications",
        icon: "Database",
        years: 3,
        categoryId: databaseCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "PostgreSQL",
        description: "A powerful, open source object-relational database system",
        icon: "Database",
        years: 4,
        categoryId: databaseCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "MySQL",
        description: "The world's most popular open source database",
        icon: "Database",
        years: 3,
        categoryId: databaseCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "Prisma",
        description: "A modern ORM for Node.js and TypeScript",
        icon: "Database",
        years: 2,
        categoryId: databaseCategory.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: "Docker",
        description: "A platform for developing, shipping, and running applications in containers",
        icon: "Database",
        years: 2,
        categoryId: databaseCategory.id,
      },
    }),
  ]);

  // Create a project and link it to the skills
  await prisma.project.create({
    data: {
      title: "My Portfolio Website",
      subtitle: "A personal website built with Next.js",
      heroImage: "/images/portfolio.png",
      overview:
        "This project showcases my skills and projects with a clean and modern design.",
      technologies: "Next.js, Tailwind CSS, TypeScript",
      role: "Full-stack Developer",
      skills: {
        connect: [
          { id: react.id },
          { id: tailwind.id },
          { id: nextjs.id },
          { id: reactQuery.id },
        ],
      },
      links: {
        create: [
          {
            name: "Live Demo",
            url: "https://example.com",
            type: "demo",
          },
          {
            name: "GitHub",
            url: "https://github.com/yourname/portfolio",
            type: "github",
          },
        ],
      },
    },
  });

  await prisma.project.create({
    data: {
      title: "Training Center Management Platform",
      subtitle: "Manage trainings, students, and schedules",
      heroImage: "/training.png?height=300&width=500",
      overview: "Comprehensive solution for managing training centers, including course scheduling, student enrollment, and performance tracking.",
      technologies: "Next.js, NestJS, Prisma, PostgreSQL",
      role: "Full-stack Developer",
      skills: {
        connect: [
          { id: nextjs.id },
          { id: nestjs.id },
          { id: prismadb.id },
          { id: postgresql.id },
        ],
      },
      links: {
        create: [
          {
            name: "Case Study",
            url: "https://example.com/training-case",
            type: "case_study",
          },
        ],
      },
    },
  });

  // Project: Social Media App
  await prisma.project.create({
    data: {
      title: "Social Media App",
      subtitle: "Engaging social platform",
      heroImage: "/social.png?height=300&width=500",
      overview: "A modern social media platform with real-time messaging, user profiles, and group features, built with a focus on user engagement and performance.",
      technologies: "React, Spring Boot, PostgreSQL",
      role: "Full-stack Developer",
      skills: {
        connect: [
          { id: react.id },
          { id: spring.id },
          { id: postgresql.id },
        ],
      },
      links: {
        create: [
          {
            name: "Case Study",
            url: "https://example.com/social-case",
            type: "case_study",
          },
        ],
      },
    },
  });

  
}

main()
  .then(() => {
    console.log("Seed data created.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
