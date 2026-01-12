import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Skills } from '../components/Sections/Skills';
import { Timeline } from '../components/Sections/Timeline';
import { Projects } from '../components/Sections/Projects';
import { Blog } from '../components/Sections/Blog';
import { Separator } from '../components/ui/Separator';
import { Footer } from '../components/Layout/Footer';

export const Home = forwardRef(({ separatorRefs }) => {
    const { aboutSeparatorRef, skillsSeparatorRef, timelineSeparatorRef, projectsSeparatorRef } = separatorRefs || {};

    return (
        <>
            <div className="mx-auto md:max-w-4xl">
                <Hero />
                <Separator ref={aboutSeparatorRef} />
                <About />
                <Separator ref={skillsSeparatorRef} />
                <Skills />
                <Separator ref={timelineSeparatorRef} />
                <Timeline />
                <Separator ref={projectsSeparatorRef} />
                <Projects />
                <Separator />
                <Blog />
                <Separator />
                <Footer />
            </div>
        </>
    );
});

Home.displayName = 'Home';

Home.propTypes = {
    sectionRefs: PropTypes.shape({
        aboutRef: PropTypes.object,
        skillsRef: PropTypes.object,
        timelineRef: PropTypes.object,
        projectsRef: PropTypes.object,
    }),
    separatorRefs: PropTypes.shape({
        aboutSeparatorRef: PropTypes.object,
        skillsSeparatorRef: PropTypes.object,
        timelineSeparatorRef: PropTypes.object,
        projectsSeparatorRef: PropTypes.object,
    }),
};
