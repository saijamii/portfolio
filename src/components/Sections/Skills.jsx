import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills.json';
import { useTheme } from '../../context/ThemeContext';

export const Skills = forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge dark:border-white/10"
      id="skills"
    >
      <header data-slot="panel-header" className="screen-line-after px-4 py-4 border-b border-edge dark:border-white/10">
        <h2 data-slot="panel-title" className="text-3xl font-semibold dark:text-white text-gray-900">
          Stack
        </h2>
      </header>

      <div className="px-4 py-8">
        <div
          className="p-4 rounded-xl border border-secondary-200 dark:border-secondary-700 bg-[#fdfdfd] dark:bg-[#161618]"
        >
          <ul className="flex flex-wrap gap-1 select-none justify-center">
            {skills.map((tech, index) => (
              <motion.li
                key={index}
                className="flex"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
              >
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.name}
                  className="relative group p-2 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-900 transition-colors"
                >
                  {tech.icon ? (
                    <img
                      alt={`${tech.name} icon`}
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      src={tech.icon}
                      className="w-8 h-8"
                    />
                  ) : (
                    <>
                      <img
                        alt={`${tech.name} light icon`}
                        loading="lazy"
                        width="32"
                        height="32"
                        decoding="async"
                        src={tech.iconLight}
                        className="w-8 h-8 block dark:hidden"
                      />
                      <img
                        alt={`${tech.name} dark icon`}
                        loading="lazy"
                        width="32"
                        height="32"
                        decoding="async"
                        src={tech.iconDark}
                        className="w-8 h-8 hidden dark:block"
                      />
                    </>
                  )}
                  <span className="sr-only">{tech.name}</span>

                  <span
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium ${theme === 'dark' ? 'text-white-300 bg-gray-900' : 'text-black bg-gray-200'
                      } px-2 py-1 rounded pointer-events-none whitespace-nowrap z-20 `}
                  >
                    {tech.name}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";