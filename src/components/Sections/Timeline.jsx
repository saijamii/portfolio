import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export const Timeline = forwardRef((props, ref) => {
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Unosimple Technologies",
      date: "2022 - Present",
      description:
        "Lead the frontend development team in building responsive and accessible web applications. Implemented modern best practices and improved performance by 40%.",
      skills: ["React", "JavaScript", "Redux", "Bitbucket"],
    },
    {
      type: "education",
      title: "Bachelor of Technology Mechanical Engineering ",
      organization: "Gayatri Vidya Parishad",
      date: "2019 - 2022",
      skills: [],
    },
  ];

  return (
    <section
      ref={ref}
      id="timeline"
      className="py-20 bg-secondary-50 dark:bg-secondary-800"
    >
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="mx-auto max-w-3xl mt-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                {experience.type === "work" ? (
                  <Briefcase className="w-8 h-8 absolute -left-4 -top-2 text-white bg-accent-500 rounded-full p-1" />
                ) : (
                  <GraduationCap className="w-8 h-8 absolute -left-4 -top-2 text-white bg-accent-500 rounded-full p-1" />
                )}
              </div>

              <div className="card hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {experience.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium mb-4 text-secondary-700 dark:text-secondary-300">
                    {experience.organization}
                  </h4>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {experience.description}
                  </p>

                  {experience.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs font-medium text-secondary-700 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-800 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
