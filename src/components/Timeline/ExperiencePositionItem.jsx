import React, { useState, memo } from "react";
import { ChevronUp, ChevronDown, Code, Briefcase, GraduationCap } from "lucide-react";
import PropTypes from "prop-types";

const iconMap = {
    code: Code,
    business: Briefcase,
    education: GraduationCap,
};

const ExperiencePositionItem = memo(({ position, isLast }) => {
    const [isOpen, setIsOpen] = useState(position.isExpanded ?? false);

    const Icon = iconMap[position.icon] || Briefcase;

    const toggleOpen = () => setIsOpen(prev => !prev);

    return (
        <div className={`relative ${isLast ? 'before:absolute before:h-full before:w-4 before:bg-white dark:before:bg-secondary-400' : ''}`}>
            <button
                onClick={toggleOpen}
                className="group/experience block w-full text-left select-none relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-secondary-100 dark:hover:before:bg-secondary-700 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`position-${position.id}`}
            >
                <div className="relative z-1 mb-1 flex items-center gap-3">
                    <div
                        className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-600"
                        aria-hidden="true"
                    >
                        <Icon className="size-4" />
                    </div>

                    <h4 className="flex-1 font-medium text-balance text-secondary-900 dark:text-white">
                        {position.title}
                    </h4>

                    <div className="shrink-0 text-secondary-600 dark:text-primary-800" aria-hidden="true">
                        {isOpen ? (
                            <ChevronUp className="size-4" />
                        ) : (
                            <ChevronDown className="size-4" />
                        )}
                    </div>
                </div>

                <div className="relative z-1 flex items-center gap-2 pl-9 text-sm text-secondary-600 dark:text-primary-800">
                    {position.employmentType && (
                        <>
                            <dl>
                                <dt className="sr-only">Employment Type</dt>
                                <dd>{position.employmentType}</dd>
                            </dl>
                            <span className="h-4 w-px bg-secondary-300 dark:bg-secondary-600" aria-hidden="true" />
                        </>
                    )}

                    <dl>
                        <dt className="sr-only">Employment Period</dt>
                        <dd>{position.employmentPeriod}</dd>
                    </dl>
                </div>
            </button>

            <div
                id={`position-${position.id}`}
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                {position.description && (
                    <div className="pt-2 pl-9 text-sm text-secondary-700 dark:text-secondary-300 font-mono">
                        {Array.isArray(position.description) ? (
                            <ul className="list-disc list-inside space-y-1">
                                {position.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{position.description}</p>
                        )}
                    </div>
                )}

                {Array.isArray(position.skills) && position.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
                        {position.skills.map((skill, index) => (
                            <li key={`${position.id}-skill-${index}`} className="flex">
                                <span className="inline-flex items-center rounded-lg border border-secondary-200 dark:border-secondary-700 bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 font-mono text-xs text-secondary-700 dark:text-secondary-300">
                                    {skill}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
});

ExperiencePositionItem.displayName = "ExperiencePositionItem";

ExperiencePositionItem.propTypes = {
    position: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        employmentPeriod: PropTypes.string.isRequired,
        employmentType: PropTypes.string,
        icon: PropTypes.oneOf(['code', 'business', 'education']),
        description: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        isExpanded: PropTypes.bool,
    }).isRequired,
    isLast: PropTypes.bool.isRequired,
};

export default ExperiencePositionItem;
