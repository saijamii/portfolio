import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { Timeline } from './components/Sections/Timeline';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  
  // References for scrolling
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <div className="bg-white dark:bg-secondary-400 text-secondary-400 dark:text-white min-h-screen transition-colors duration-300">
        <Header 
          onNavigate={{ 
            about: () => scrollToSection(aboutRef),
            skills: () => scrollToSection(skillsRef),
            timeline: () => scrollToSection(timelineRef),
            projects: () => scrollToSection(projectsRef),
            contact: () => scrollToSection(contactRef)
          }} 
        />
        
        <main>
          <AnimatePresence mode="wait">
            <Hero />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Timeline ref={timelineRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;