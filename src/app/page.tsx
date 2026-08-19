import { PortfolioPage } from "@/features/portfolio/components/PortfolioPage";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamal Pandey",
  jobTitle: "Senior Scrum Master & Lead UI/UX Designer",
  email: "mailto:kamalpandey.dev@gmail.com",
  telephone: "+91 92663 06689",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN"
  },
  url: "https://kamal-pandey-portfolio.vercel.app",
  sameAs: ["https://www.linkedin.com/in/kamalpandey26/"],
  knowsAbout: [
    "Agile",
    "Scrum",
    "Kanban",
    "Sprint Planning",
    "User-Centered Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Figma",
    "WCAG",
    "ARIA",
    "React.js",
    "SCSS",
    "Stakeholder Management"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Scrum Master and Lead UI/UX Designer",
    skills:
      "Scrum Master, Agile Delivery, Jira, Confluence, UX Research, Figma Design Systems, WCAG Accessibility, React.js, SCSS, Stakeholder Management"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
