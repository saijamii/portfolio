import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: 'EasyMeet',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'EasyMeet is a scheduling automation tool that lets users share personalized booking links and manage availability with ease. Built with Next.js and Prisma, it streamlines meeting coordination by eliminating back-and-forth emails.',
      technologies: ['React', 'Next.js', 'Prisma', 'Google Cloud API', 'Vercel'],
      githubUrl: 'https://github.com/saijamii/scheduler',
      liveUrl: 'https://easymeet-nu-sandy.vercel.app/saijami'
    },
    {
      title: 'Two-Factor Authentication',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A secure two-factor authentication system that supports both password and OTP-based login to protect user accounts. Features include protected routes and session handling for enhanced access control.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/saijamii/2FASystem',
      liveUrl: 'https://2-fa-system-eta.vercel.app/login'
    },
    {
      title: 'Video-Sharing-Platform',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A responsive video-sharing platform clone built with React and YouTube Data API, replicating features like home feed, search, and video playback. Integrated Redux Toolkit for efficient state management with debounced search and result caching to minimize API usage.',
      technologies: ['React.js', 'Redux', 'Google Cloud API', 'Tailwind CSS',],
      githubUrl: 'https://github.com/saijamii/my-youtube',
      liveUrl: 'https://my-youtube-two-swart.vercel.app/'
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-2 ml-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-500 text-primary-800 dark:text-primary-100 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-700 dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
Projects.displayName = "Projects"