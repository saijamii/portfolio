import React, { forwardRef } from "react";

export const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge dark:border-white/10"
      id="about"
    >
      <header data-slot="panel-header" className="screen-line-after px-4 py-4 border-b border-edge dark:border-white/10">
        <h2 data-slot="panel-title" className="text-3xl font-semibold dark:text-white text-gray-900">
          About
        </h2>
      </header>

      <div data-slot="panel-body" className="p-4">
        <div
          data-slot="prose"
          className="prose max-w-none prose-zinc dark:prose-invert prose-headings:text-balance prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge prose-blockquote:border-s-border prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none prose-sm font-mono text-foreground dark:text-white"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Frontend Developer</strong> with <strong>3+ years of experience</strong>, passionate about creating responsive and accessible web applications.
            </li>
            <li>
              Skilled in <strong>React</strong>, <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, and modern frontend technologies; building high-quality, user-centric web applications.
            </li>
            <li>
              Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.
            </li>
            <li>
              Specialized in building B2B/B2C applications that serve real-world business needs, always with performance and accessibility in mind.
            </li>
            <li>
              Experience with state management (Redux, Zustand), API integration, and modern React patterns (Hooks, Context).
            </li>
            <li>
              Strong focus on performance optimization, cross-browser compatibility, and pixel-perfect UI implementation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";