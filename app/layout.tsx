import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yessine Agrebi's Portfolio",
  description:
    "A passionate fullstack developer with a focus on creating innovative and user-friendly applications. Specializing in full-stack development with Nextjs, Nestjs, and PostgreSQL.",
  keywords: [
    "fullstack developer",
    "software developer",
    "web developer",
    "software enginner",
    "full stack developer",
    "React develoer",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "developpeur web",
    "developpeur web fullstack",
    "Freelancer web developer",
    "freelancer fullstack developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
