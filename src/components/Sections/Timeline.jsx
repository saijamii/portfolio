import React, { forwardRef, useMemo } from "react";
import ExperienceItem from "../Timeline/ExperienceItem";
import { Panel, PanelHeader, PanelTitle } from "../ui/Panel";

const experiencesData = [
  {
    companyName: "Aerosimple",
    companyLogo: 'https://res.cloudinary.com/dkf7zjdju/image/upload/v1777193100/1630636582675_wnxy2f.jpg',
    isCurrentEmployer: true,
    positions: [
      {
        id: "aerosimple-frontend-dev",
        title: "Frontend Developer",
        employmentPeriod: "Sep 2022 - ♾️",
        employmentType: "Full-time",
        icon: "code",
        skills: ["React", "JavaScript", "Redux", "GitLab"],
        isExpanded: true,
      },
    ],
  },
  {
    companyName: "Unosimple Technologies",
    companyLogo: 'https://res.cloudinary.com/dkf7zjdju/image/upload/v1777193100/unosimple_logo_v9he8z.jpg',
    isCurrentEmployer: false,
    positions: [
      {
        id: "unosimple-frontend-dev",
        title: "Frontend Developer",
        employmentPeriod: "Aug 2022 - Aug 2025",
        employmentType: "Full-time",
        icon: "code",
        description: [
          "Engineered a scalable B2B/B2C SaaS platform managing 700K+ SKUs with server-side pagination across Inventory, Warehouse, POS, and Supplier modules.",
          "Reduced page load time by bundle size 72% (2.27 MB → 615 KB) via Webpack‑driven lazy loading and code splitting",
          "Adopted React Query for efficient API caching, background data synchronization, and stale data handling—cutting redundant API calls by 35%.",
          "Implemented role‑based access control to dynamically render features by permission, enhancing security and streamlining maintenance.",
          "Deployed a partial cancellation feature, enabling users to cancel specific item quantities (e.g., 3 out of 10), increasing order flexibility and customer control.",
        ],
        skills: ["JavaScript", "React", "RTK" , "React Query","Bitbucket"],
        isExpanded: true,
      },
    ],
  },
  {
    companyName: "Gayatri Vidya Parishad",
    companyLogo: "https://www.gvpce.ac.in/gvp/images/logo.jpg",
    isCurrentEmployer: false,
    positions: [
      {
        id: "gvp-btech",
        title: "Bachelor of Technology Mechanical Engineering",
        employmentPeriod: "2019 - 2022",
        employmentType: null,
        icon: "education",
        description: null,
        skills: [],
        isExpanded: false,
      },
    ],
  },
];

export const Timeline = forwardRef((props, ref) => {
  // Memoize experiences to prevent unnecessary re-renders
  const experiences = useMemo(() => experiencesData, []);

  return (
    <Panel ref={ref} id="timeline" aria-labelledby="timeline-heading">
      <PanelHeader>
        <PanelTitle
          id="timeline-heading"
          className="dark:text-white text-gray-900"
        >
          Timeline
        </PanelTitle>
      </PanelHeader>

      <div className="px-4 py-4">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.companyName} experience={experience} />
        ))}
      </div>
    </Panel>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;
