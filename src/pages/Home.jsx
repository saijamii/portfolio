import React, { forwardRef } from 'react';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Skills } from '../components/Sections/Skills';
import { Timeline } from '../components/Sections/Timeline';
import { Projects } from '../components/Sections/Projects';
import { Blog } from '../components/Sections/Blog';
import { Separator } from '../components/ui/Separator';

export const Home = forwardRef(({ sectionRefs }, ref) => {
    const { aboutRef, skillsRef, timelineRef, projectsRef } = sectionRefs;

    return (
        <>
            <Hero />
            <div className="mx-auto md:max-w-3xl px-2">
                <About ref={aboutRef} />
                <Separator />
                <Skills ref={skillsRef} />
                <Separator />
                <Timeline ref={timelineRef} />
                <Separator />
                <Projects ref={projectsRef} />
                <Separator />
                <Blog />
            </div>
        </>
    );
});

Home.displayName = 'Home';
