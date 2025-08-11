import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import Contact from "@/components/contact";
import SkillsServer from "@/components/SkillsServer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Yessine Agrebi | Portfolio",
    description:
      "A passionate fullstack developer with a focus on creating innovative and user-friendly applications. Specializing in full-stack development with Nextjs, Nestjs, and PostgreSQL.",
    openGraph: {
      title: "Yessine Agrebi | Portfolio",
      description:
        "A passionate fullstack developer with a focus on creating innovative and user-friendly applications. Specializing in full-stack development with Nextjs, Nestjs, and PostgreSQL.", 
      url: process.env.DOMAIN,
      siteName: "Yessine Agrebi | Portfolio",
      images: [
        {
          url: `${process.env.DOMAIN}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Yessine Agrebi | Portfolio",
      description:
        "A passionate fullstack developer with a focus on creating innovative and user-friendly applications. Specializing in full-stack development with Nextjs, Nestjs, and PostgreSQL.",
      images: [`${process.env.DOMAIN}/og-image.png`],
    },
  };
}

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-1 justify-center py-3 sm:py-4 md:py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <Hero />
            <FeaturedProjects />
            <SkillsServer />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
