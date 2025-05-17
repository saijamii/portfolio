import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Code, Zap, Globe, PenTool } from "lucide-react";

export const About = forwardRef((props, ref) => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "1000+", label: "Commits" },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications using React and related technologies.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, accessibility, and user experience.",
    },
    {
      icon: (
        <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "Cross-platform Development",
      description:
        "Creating consistent experiences across different browsers and devices.",
    },
    {
      icon: (
        <PenTool className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "UI Implementation",
      description:
        "Translating design mockups into pixel-perfect, responsive interfaces.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-secondary-50 dark:bg-secondary-800"
    >
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1  gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">
              A passionate Frontend Developer based in India
            </h3>

            <p className="text-secondary-700 dark:text-secondary-300 mb-6">
              I specialize in building exceptional digital experiences using
              modern frontend technologies. With ~3 years of experience in React
              and its ecosystem, I focus on creating performant, accessible, and
              user-friendly web applications.
            </p>

            <p className="text-secondary-700 dark:text-secondary-300 mb-10">
              My approach combines technical expertise with a keen eye for
              design implementation. I'm passionate about web standards, modern
              JavaScript, and creating smooth, interactive user experiences that
              work across all devices.
            </p>

            <motion.a
              href="#contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="bg-primary-100 p-8 h-full">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary-600 dark:text-secondary-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>

        <div className="mt-24">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-secondary-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-medium mb-2 text-secondary-900 dark:text-white">
                  {service.title}
                </h4>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
About.displayName="About"