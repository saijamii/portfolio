import React, { forwardRef } from 'react';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Skills } from '../components/Sections/Skills';
import { Timeline } from '../components/Sections/Timeline';
import { Projects } from '../components/Sections/Projects';
import { Blog } from '../components/Sections/Blog';
import { Separator } from '../components/ui/Separator';
import { Footer } from '../components/Layout/Footer';

export const Home = forwardRef(({ sectionRefs }, ref) => {
    const { aboutRef, skillsRef, timelineRef, projectsRef } = sectionRefs;

    return (
        <>
            <div className="mx-auto md:max-w-4xl">
                <Hero />
                <Separator />
                <About ref={aboutRef} />
                <Separator />
                <Skills ref={skillsRef} />
                <Separator />
                <Timeline ref={timelineRef} />
                <Separator />
                <Projects ref={projectsRef} />
                <Separator />
                <Blog />
                <Separator />
                <Footer />
            </div>
        </>
    );
});

Home.displayName = 'Home';
