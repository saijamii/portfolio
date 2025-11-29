import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-200 dark:border-secondary-700 mt-12 pt-4 text-center text-secondary-600 dark:text-secondary-400">
      <div className="mx-auto border-x border-secondary-200 dark:border-secondary-700 pt-4 md:max-w-4xl bg-white dark:bg-secondary-900">
        <div className="flex flex-col items-center gap-6 px-4">
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

const FooterSocials = () => {
  return (
    <div className="flex w-full relative z-10">
      <div className="mx-auto flex items-center justify-center gap-3 bg-white dark:bg-secondary-900 px-4 py-2">
        <SocialLink href="https://github.com/saijamii" icon={Github} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/saijamii/" icon={Linkedin} label="LinkedIn" />
        <SocialLink href="mailto:saijami38@gmail.com" icon={Mail} label="Email" />
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex items-center text-secondary-600 dark:text-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);