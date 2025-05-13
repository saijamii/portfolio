import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Building amazing digital experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-4 text-secondary-900 dark:text-white">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-secondary-900 dark:text-white">Connect</h4>
              <div className="flex space-x-4">
                <motion.a 
                href="https://github.com/saijamii"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a 
                href="https://www.linkedin.com/in/saijamii/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
             
                <motion.a 
                  href="mailto:saijami38@gmail.com" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 dark:border-secondary-700 mt-12 pt-8 text-center text-secondary-600 dark:text-secondary-400">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};