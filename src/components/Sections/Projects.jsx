import React, { forwardRef, useMemo } from "react";
import ProjectItem from "../Projects/ProjectItem";

const projectsData = [
  {
    id: "easymeet",
    title: "EasyMeet",
    logo: null,
    period: {
      start: "2024",
      end: "Present",
    },
    description:
      "EasyMeet is a scheduling automation tool that lets users share personalized booking links and manage availability with ease. Built with Next.js and Prisma, it streamlines meeting coordination by eliminating back-and-forth emails.",
    technologies: ["React", "Next.js", "Prisma", "Google Cloud API", "Vercel"],
    githubUrl: "https://github.com/saijamii/scheduler",
    liveUrl: "https://easymeet-nu-sandy.vercel.app/saijami",
    isExpanded: true,
  },
  {
    id: "two-factor-auth",
    title: "Two-Factor Authentication",
    logo: null,
    period: {
      start: "2023",
      end: "2024",
    },
    description:
      "A secure two-factor authentication system that supports both password and OTP-based login to protect user accounts. Features include protected routes and session handling for enhanced access control.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/saijamii/2FASystem",
    liveUrl: "https://2-fa-system-eta.vercel.app/login",
    isExpanded: false,
  },
  {
    id: "video-platform",
    title: "Video-Sharing-Platform",
    logo: null,
    period: {
      start: "2023",
      end: "2023",
    },
    description:
      "A responsive video-sharing platform clone built with React and YouTube Data API, replicating features like home feed, search, and video playback. Integrated Redux Toolkit for efficient state management with debounced search and result caching to minimize API usage.",
    technologies: ["React.js", "Redux", "Google Cloud API", "Tailwind CSS"],
    githubUrl: "https://github.com/saijamii/my-youtube",
    liveUrl: "https://my-youtube-two-swart.vercel.app/",
    isExpanded: false,
  },
];

export const Projects = forwardRef((props, ref) => {
  const projects = useMemo(() => projectsData, []);

  return (
    <section
      ref={ref}
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge dark:border-white/10"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <header data-slot="panel-header" className="screen-line-after px-4 py-4 border-b border-edge dark:border-white/10">
        <h2
          id="projects-heading"
          data-slot="panel-title"
          className="text-3xl font-semibold dark:text-white text-gray-900"
        >
          Projects
          <sup className="ml-1 font-mono text-sm text-secondary-600 dark:text-secondary-400 select-none">
            ({projects.length})
          </sup>
        </h2>
      </header>

      <div className="py-2">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;