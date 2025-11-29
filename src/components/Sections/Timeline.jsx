import React, { forwardRef, useMemo } from "react";
import ExperienceItem from "../Timeline/ExperienceItem";
import { Panel, PanelHeader, PanelTitle } from "../ui/Panel";

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
