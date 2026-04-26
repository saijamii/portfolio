import React, { useRef, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Layout/Header';
import { Home } from './pages/Home';
import { useTheme } from './context/ThemeContext';


function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const aboutSeparatorRef = useRef(null);
  const skillsSeparatorRef = useRef(null);
  const timelineSeparatorRef = useRef(null);
  const projectsSeparatorRef = useRef(null);

  const scrollToSection = (sectionName, separatorRef) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionName } });
    } else {
      if (separatorRef?.current) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = separatorRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const separatorRefs = {
    aboutSeparatorRef,
    skillsSeparatorRef,
    timelineSeparatorRef,
    projectsSeparatorRef,
  };

  return (
    <div className={`${theme} min-h-screen overflow-x-hidden`}>
      <div className="bg-white dark:bg-secondary-900 text-secondary-400 dark:text-white min-h-screen transition-colors duration-300 flex flex-col overflow-x-hidden">
        <Header
          onNavigate={{
            about: () => scrollToSection('about', aboutSeparatorRef),
            skills: () => scrollToSection('skills', skillsSeparatorRef),
            timeline: () => scrollToSection('timeline', timelineSeparatorRef),
            projects: () => scrollToSection('projects', projectsSeparatorRef),
          }}
        />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home separatorRefs={separatorRefs} />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;