import React, { forwardRef } from 'react';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Skills } from '../components/Sections/Skills';
import { Timeline } from '../components/Sections/Timeline';
import { Projects } from '../components/Sections/Projects';
import { Blog } from '../components/Sections/Blog';

export const Home = forwardRef(({ sectionRefs }, ref) => {
    const { aboutRef, skillsRef, timelineRef, projectsRef } = sectionRefs;

    return (
        <>
            <Hero />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Timeline ref={timelineRef} />
            <Projects ref={projectsRef} />
            <Blog />
        </>
    );
});

Home.displayName = 'Home';
