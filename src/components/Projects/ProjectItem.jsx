import React, { useState, memo } from "react";
import { ChevronUp, ChevronDown, ExternalLink, Github, FolderGit2 } from "lucide-react";
import PropTypes from "prop-types";

const ProjectItem = memo(({ project }) => {
    const [isOpen, setIsOpen] = useState(project.isExpanded ?? false);

    const toggleOpen = () => setIsOpen(prev => !prev);

    return (
        <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
            <div className="flex items-center hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
                {project.logo ? (
                    <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={32}
                        height={32}
                        className="mx-4 flex size-6 shrink-0 select-none rounded"
                        loading="lazy"
                        aria-hidden="true"
                    />
                ) : (
                    <div
                        className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-secondary-200 dark:border-secondary-600 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300"
                        aria-hidden="true"
                    >
                        <FolderGit2 className="size-4" />
                    </div>
                )}

                <div className="flex-1 border-l border-dashed border-secondary-200 dark:border-secondary-700">
                    <button
                        onClick={toggleOpen}
                        className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none"
                        aria-expanded={isOpen}
                        aria-controls={`project-${project.id}`}
                    >
                        <div className="flex-1">
                            <h3 className="mb-1 leading-snug font-medium text-balance text-secondary-900 dark:text-white">
                                {project.title}
                            </h3>

                            <dl className="text-sm text-secondary-600 dark:text-secondary-400">
                                <dt className="sr-only">Period</dt>
                                <dd className="flex items-center gap-0.5">
                                    <span>{project.period?.start || 'N/A'}</span>
                                    <span className="font-mono">—</span>
                                    <span>{project.period?.end || 'Present'}</span>
                                </dd>
                            </dl>
                        </div>

                        {project.liveUrl && (
                            <a
                                className="relative flex size-6 shrink-0 items-center justify-center text-secondary-600 dark:text-secondary-400 after:absolute after:-inset-2 hover:text-secondary-900 dark:hover:text-white transition-colors"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Open ${project.title} live demo`}
                            >
                                <ExternalLink className="pointer-events-none size-4" />
                            </a>
                        )}

                        <div
                            className="shrink-0 text-secondary-600 dark:text-secondary-400"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <ChevronUp className="size-4" />
                            ) : (
                                <ChevronDown className="size-4" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            <div
                id={`project-${project.id}`}
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="border-t border-secondary-200 dark:border-secondary-700">
                    <div className="space-y-4 p-4">
                        {project.description && (
                            <p className="text-sm text-secondary-700 dark:text-secondary-300 font-mono">
                                {project.description}
                            </p>
                        )}

                        {project.technologies && project.technologies.length > 0 && (
                            <ul className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech, index) => (
                                    <li key={`${project.id}-tech-${index}`} className="flex">
                                        <span className="inline-flex items-center rounded-lg border border-secondary-200 dark:border-secondary-700 bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 font-mono text-xs text-secondary-700 dark:text-secondary-300">
                                            {tech}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white transition-colors"
                            >
                                <Github className="size-4" />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

ProjectItem.displayName = "ProjectItem";

ProjectItem.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        logo: PropTypes.string,
        period: PropTypes.shape({
            start: PropTypes.string,
            end: PropTypes.string,
        }),
        description: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
        githubUrl: PropTypes.string,
        liveUrl: PropTypes.string,
        isExpanded: PropTypes.bool,
    }).isRequired,
};

export default ProjectItem;
