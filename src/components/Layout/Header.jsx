import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Header = ({ onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
        }`}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Github className="w-8 h-8 text-primary-600 dark:text-primary-400" /> */}
            {/* <span className="text-xl font-bold">Portfolio</span> */}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onNavigate.about}
              className="nav-link text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={onNavigate.skills}
              className="nav-link text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={onNavigate.timeline}
              className="nav-link text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={onNavigate.projects}
              className="nav-link text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={onNavigate.contact}
              className="btn-primary"
            >
              Contact
            </button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-secondary-700" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-secondary-700" />
              )}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-secondary-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => {
                onNavigate.about();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate.skills();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => {
                onNavigate.timeline();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md"
            >
              Timeline
            </button>
            <button
              onClick={() => {
                onNavigate.projects();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => {
                onNavigate.contact();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};