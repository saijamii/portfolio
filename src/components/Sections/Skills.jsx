import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Next.js',
        'Vue.js',
        'Webpack',
        'Vite',
        'Jest',
        'React Testing Library'
      ]
    },
    {
      title: 'Styling & Design',
      skills: [
        'CSS3',
        'Sass/SCSS',
        'Tailwind CSS',
        'Styled Components',
        'CSS Modules',
        'CSS-in-JS',
        'Responsive Design',
        'UI/UX Principles'
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Chrome DevTools',
        'npm/yarn',
        'ESLint',
        'Prettier',
        'Figma'
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        'Web Performance',
        'Accessibility (a11y)',
        'SEO Principles',
        'REST APIs',
        'GraphQL',
        'CI/CD',
        'Agile/Scrum',
        'Cross-browser Compatibility'
      ]
    }
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
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
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