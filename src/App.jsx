import React, { useRef, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { useTheme } from './context/ThemeContext';

// Lazy load the BlogPage
const BlogPage = lazy(() => import('./pages/BlogPage'));

function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // References for scrolling
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);

  // Effect to handle scrolling when navigating with state
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const refMap = {
        about: aboutRef,
        skills: skillsRef,
        timeline: timelineRef,
        projects: projectsRef,
      };

      const targetRef = refMap[location.state.scrollTo];
      if (targetRef?.current) {
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToSection = (sectionName, ref) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionName } });
    } else {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionRefs = {
    aboutRef,
    skillsRef,
    timelineRef,
    projectsRef,
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <div className="bg-white dark:bg-secondary-400 text-secondary-400 dark:text-white min-h-screen transition-colors duration-300 flex flex-col">
        <Header
          onNavigate={{
            about: () => scrollToSection('about', aboutRef),
            skills: () => scrollToSection('skills', skillsRef),
            timeline: () => scrollToSection('timeline', timelineRef),
            projects: () => scrollToSection('projects', projectsRef),
          }}
        />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home sectionRefs={sectionRefs} />} />
              <Route
                path="/blog"
                element={
                  <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
                    <BlogPage />
                  </Suspense>
                }
              />
              <Route path="/blog/:slug" element={
                <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
                  <BlogPage />
                </Suspense>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;