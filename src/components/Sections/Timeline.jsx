import React, { forwardRef, useMemo } from "react";
import ExperienceItem from "../Timeline/ExperienceItem";
import { Panel, PanelHeader, PanelTitle } from "../ui/Panel";

const experiencesData = [
  {
    companyName: "Aerosimple",
    companyLogo: 'https://play-lh.googleusercontent.com/JGft7r6E9F0QrqcW7G-VFiCfWaYkzNPp0osDU_8iKAbYyW2sKGr5r48oT9p5j3m8duM=w480-h960-rw',
    isCurrentEmployer: true,
    positions: [
      {
        id: "aerosimple-frontend-dev",
        title: "Frontend Developer",
        employmentPeriod: "Sep 2022 - ♾️",
        employmentType: "Full-time",
        icon: "code",
        description:
          "Implemented validation logic for custom date and date-time fields, handling edge cases such as timezone differences, min/max constraints, and dependent field rules.",
        skills: ["React", "JavaScript", "Redux", "GitLab"],
        isExpanded: true,
      },
    ],
  },
  {
    companyName: "Unosimple Technologies",
    companyLogo: 'https://media.licdn.com/dms/image/v2/C4E0BAQH7QsknRhFBKQ/company-logo_200_200/company-logo_200_200/0/1630608240233/unosimple_logo?e=1768435200&v=beta&t=gW9feUZDDQ9ATR0oF41iwOEOJQRtHpigJGwVRK7zxN0',
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
          My Journey
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
