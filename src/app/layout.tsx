import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.scss";
import { ThemeRegistry } from "@/lib/theme/theme-registry";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kamal-pandey-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kamal Pandey | Senior Scrum Master & Lead UI/UX Designer",
    template: "%s | Kamal Pandey"
  },
  description:
    "Portfolio for Kamal Pandey, Senior Scrum Master and Lead UI/UX Designer specializing in Agile delivery, Scrum, Kanban, UX research, design systems, Figma, WCAG accessibility, React, SCSS, and stakeholder management.",
  keywords: [
    "Kamal Pandey",
    "Senior Scrum Master",
    "Lead UI/UX Designer",
    "Agile",
    "Scrum",
    "Kanban",
    "Sprint Planning",
    "Backlog Refinement",
    "User-Centered Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Figma",
    "UX Research",
    "Stakeholder Management",
    "WCAG",
    "Web Accessibility Specialist",
    "React.js",
    "SCSS",
    "Core Web Vitals",
    "CI/CD"
  ],
  authors: [{ name: "Kamal Pandey" }],
  creator: "Kamal Pandey",
  publisher: "Kamal Pandey",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Kamal Pandey | Senior Scrum Master & Lead UI/UX Designer",
    description:
      "Agile delivery, accessible product design, Figma design systems, UX research, WCAG remediation, and frontend collaboration for B2B and B2C product teams.",
    url: siteUrl,
    siteName: "Kamal Pandey Portfolio",
    images: [
      {
        url: "/assets/kplogo3.jpg",
        width: 1200,
        height: 630,
        alt: "Kamal Pandey portfolio"
      }
    ],
    locale: "en_US",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Pandey | Senior Scrum Master & Lead UI/UX Designer",
    description:
      "Scrum Master, Lead UI/UX Designer, Web Accessibility Specialist, and frontend collaborator.",
    images: ["/assets/kplogo3.jpg"]
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/assets/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
