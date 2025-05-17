import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'JavaScript (ES6+)',
        'React.js',
        'Redux',
        'Next.js',
        'Vite',
        'HTML5',
      ]
    },
    {
      title: 'Styling & Design',
      skills: [
        'CSS3',
        'Tailwind CSS',
        'Ant Design',
        'Responsive Design',
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Mongodb',
        'GraphQL',
        'REST APIs',
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        'Git',
        'Bitbucket',
        'GitHub',
        'Postman',
      ]
    },
  ];

  return (
    <section ref={ref} id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-500 text-primary-700 dark:text-primary-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
Skills.displayName = "Skills";