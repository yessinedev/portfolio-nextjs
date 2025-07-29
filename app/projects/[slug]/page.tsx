import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectDetails from "@/components/project-details";
import { notFound } from "next/navigation";

// Enhanced project data with more comprehensive information
const projects = {
  "training-center-management-platform": {
    title: "Training Center Management Platform",
    subtitle:
      "Comprehensive solution for managing training centers, including course scheduling, student enrollment, and performance tracking.",
    heroImage: "/training.png?height=300&width=500",
    overview:
      "The Training Center Management Platform was developed to streamline operations for training centers, enabling them to efficiently manage courses, students, and instructors. The platform provides features such as course scheduling, student enrollment, performance tracking, and reporting. Key objectives included creating a user-friendly interface for both administrators and students, implementing robust data management capabilities, and ensuring scalability to handle multiple training centers.",
    technologies:
      "The platform was built using Next.js for the frontend, providing a fast and responsive user interface. The backend was developed with Nest.js, leveraging its modular architecture for maintainability. Prisma was used as the ORM for database interactions, with PostgreSQL as the relational database. ",
    role: "As the lead full-stack developer, I was responsible for the complete development lifecycle of the Training Management platform. This included architecting the system design, implementing both frontend and backend components, and integrating third-party services. A significant challenge was implementing real-time sessions management across multiple trainers to prevent scheduling conflicts. I successfully developed a robust Training Center Management System tracking system that ensures smooth operations and improved user experience.",
    links: [
      // { name: "Live Demo", url: "#", type: "demo" as "demo" },
      {
        name: "GitHub Repository",
        url: "https://github.com/example/ecommerce",
        type: "github" as "github",
      },
      // {
      //   name: "Case Study",
      //   url: "/case-studies/ecommerce",
      //   type: "case-study" as "case-study",
      // },
    ],
  },
  "task-management-app": {
    title: "Task Management App",
    subtitle:
      "Collaborative workspace application with real-time updates, advanced project analytics, team collaboration tools, and intuitive drag-and-drop interface.",
    heroImage: "/placeholder.svg?height=400&width=800",
    overview:
      "The Task Management App was created to address the growing need for efficient team collaboration and project tracking in remote work environments. The application provides teams with comprehensive tools to organize tasks, set priorities, track progress, and collaborate in real-time. Key objectives included creating an intuitive user interface that reduces learning curve, implementing real-time synchronization across all devices, providing comprehensive project analytics and reporting features, and ensuring seamless integration with popular productivity tools and services.",
    technologies:
      "The application was built using React with TypeScript for type safety and better developer experience. State management was handled using Redux Toolkit for predictable state updates. Firebase was chosen as the backend-as-a-service solution, providing real-time database capabilities, user authentication, and cloud hosting. The real-time features were implemented using Firebase Firestore's real-time listeners, enabling instant updates across all connected devices. For the user interface, Material-UI components were extensively customized to create a cohesive design system. The application also integrates with third-party services including Slack for team notifications, Google Calendar for deadline tracking, and GitHub for development workflow integration.",
    role: "As the lead frontend developer, I architected and implemented the entire user interface and user experience of the task management application. I was responsible for designing the component architecture, implementing real-time data synchronization, and creating an intuitive drag-and-drop interface for task management. A major technical challenge was handling offline functionality and data synchronization conflicts when users work without internet connectivity. I successfully implemented a robust offline-first architecture with conflict resolution strategies, ensuring users could work seamlessly even with poor internet connectivity. The solution included local data persistence, automatic sync when connection is restored, and intelligent conflict resolution that preserves user work.",
    links: [
      {
        name: "Live Application",
        url: "https://taskapp.example.com",
        type: "demo" as "demo",
      },
      {
        name: "Source Code",
        url: "https://github.com/example/taskapp",
        type: "github" as "github",
      },
      {
        name: "Technical Blog Post",
        url: "/blog/building-realtime-apps",
        type: "case-study" as "case-study",
      },
    ],
  },
  "analytics-dashboard": {
    title: "AI-Powered Analytics Dashboard",
    subtitle:
      "Business intelligence dashboard with machine learning insights, predictive analytics, and customizable reporting for enterprise clients.",
    heroImage: "/placeholder.svg?height=400&width=800",
    overview:
      "The AI-Powered Analytics Dashboard was developed for enterprise clients who needed advanced business intelligence capabilities with machine learning insights. The platform provides comprehensive data visualization, predictive analytics, and automated reporting features that help businesses make data-driven decisions.",
    technologies:
      "Built with Vue.js for the frontend, Python with Django for the backend, TensorFlow for machine learning models, PostgreSQL for data storage, and Docker for containerization and deployment.",
    role: "Led the development of the machine learning pipeline and data visualization components. Implemented predictive models that improved forecasting accuracy by 40% and created an intuitive dashboard interface that reduced report generation time by 75%.",
    links: [
      {
        name: "Live Demo",
        url: "https://analytics.example.com",
        type: "demo" as "demo",
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/example/analytics",
        type: "github" as "github",
      },
      {
        name: "Technical Documentation",
        url: "/docs/analytics",
        type: "case-study" as "case-study",
      },
    ],
  },
};

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-1 justify-center py-3 sm:py-4 md:py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <ProjectDetails project={project} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
