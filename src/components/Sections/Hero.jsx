import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-secondary-800 dark:to-secondary-900 z-0"></div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-800 dark:text-primary-500 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-500 dark:to-primary-700 text-transparent bg-clip-text animate-gradient bg-size-200">
              Sai Jami
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium mb-8 text-secondary-700 dark:text-secondary-300">
              Frontend Developer
            </h3>
            <p className="text-secondary-600 dark:text-primary-800 text-lg mb-10 max-w-2xl">
              I design and build exceptional digital experiences that are fast,
              accessible, visually appealing, and responsive. Let's create
              something amazing together.
            </p>

            {/* <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-primary-800 text-white rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border-2 border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/10 text-primary-800 dark:text-primary-500 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div> */}

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
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a
            href="#about"
            className="text-secondary-600 dark:text-secondary-400 flex flex-col items-center"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};
