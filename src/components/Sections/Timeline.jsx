import React, { forwardRef, useMemo } from "react";
import ExperienceItem from "../Timeline/ExperienceItem";

const experiencesData = [
  {
    companyName: "Unosimple Technologies",
    companyLogo: null,
    isCurrentEmployer: true,
    positions: [
      {
        id: "unosimple-frontend-dev",
        title: "Frontend Developer",
        employmentPeriod: "2022 - Present",
        employmentType: "Full-time",
        icon: "code",
        description:
          "Lead the frontend development team in building responsive and accessible web applications. Implemented modern best practices and improved performance by 40%.",
        skills: ["React", "JavaScript", "Redux", "Bitbucket"],
        isExpanded: true,
      },
    ],
  },
  {
    companyName: "Gayatri Vidya Parishad",
    companyLogo: null,
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
    <section
      ref={ref}
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge dark:border-white/10"
      id="timeline"
      aria-labelledby="timeline-heading"
    >
      <header data-slot="panel-header" className="screen-line-after px-4 py-4 border-b border-edge dark:border-white/10">
        <h2
          id="timeline-heading"
          data-slot="panel-title"
          className="text-3xl font-semibold dark:text-white text-gray-900"
        >
          My Journey
        </h2>
      </header>

      <div className="px-4 py-4">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.companyName} experience={experience} />
        ))}
      </div>
    </section>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;
