import React, { memo } from "react";
import PropTypes from "prop-types";
import StatusPing from "../Sections/StatusPing";
import ExperiencePositionItem from "./ExperiencePositionItem";

const ExperienceItem = memo(({ experience }) => {
    return (
        <div className="space-y-4 py-4 border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
            <div className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                    {experience.companyLogo ? (
                        <img
                            src={experience.companyLogo}
                            alt={`${experience.companyName} logo`}
                            width={24}
                            height={24}
                            className="rounded-full"
                            loading="lazy"
                        />
                    ) : (
                        <span className="flex size-2 rounded-full bg-secondary-300 dark:bg-secondary-600" aria-hidden="true" />
                    )}
                </div>

                <h3 className="text-lg leading-snug font-medium text-secondary-900 dark:text-white">
                    {experience.companyName}
                </h3>

                {experience.isCurrentEmployer && <StatusPing />}
            </div>

            <div className="relative space-y-4 before:absolute before:left-3 before:w-px before:bg-secondary-200 dark:before:bg-secondary-700">
                {experience.positions.map((position, index) => (
                    <ExperiencePositionItem
                        key={position.id}
                        position={position}
                        isLast={index === experience.positions.length - 1}
                    />
                ))}
            </div>
        </div>
    );
});

ExperienceItem.displayName = "ExperienceItem";

ExperienceItem.propTypes = {
    experience: PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        companyLogo: PropTypes.string,
        isCurrentEmployer: PropTypes.bool,
        description :  PropTypes.array ||  PropTypes.string,
        positions: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                employmentPeriod: PropTypes.string.isRequired,
                employmentType: PropTypes.string,
                icon: PropTypes.string,
                description: PropTypes.string || PropTypes.array,
                skills: PropTypes.arrayOf(PropTypes.string),
                isExpanded: PropTypes.bool,
            })
        ).isRequired,
    }).isRequired,
};

export default ExperienceItem;
