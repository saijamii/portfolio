import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative screen-line-after border-x border-edge min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-500 dark:to-primary-700 text-transparent bg-clip-text animate-gradient bg-size-200">
              Sai Jami
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium mb-8 text-secondary-700 dark:text-secondary-300">
              Frontend Developer | Blending UI & Performance
            </h3>
            <p className="text-secondary-600 dark:text-primary-800 text-lg mb-10 max-w-2xl">
              My goal? Build interfaces that feel fast and stay fast — without sacrificing design or maintainability.
              <br />
            </p>
            Let’s build something users (and metrics) will love. ⚡
            <div className="flex justify-center items-center gap-6 mt-12">
              <motion.a
                href="https://github.com/saijamii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saijamii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
