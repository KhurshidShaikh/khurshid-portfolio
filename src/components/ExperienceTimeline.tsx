'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Virelity",
    location: "Hybrid",
    period: "Jun 2025 - Aug 2025",
    responsibilities: [
      "Developed and maintained real-world, production-grade web and mobile applications for diverse client projects, ensuring robust performance, scalability, and user experience.",
      "Engineered dynamic, responsive UI components and integrated RESTful APIs to enable smooth interaction and efficient data flow between frontend and backend systems.",
      "Collaborated with design and QA teams to optimize application performance, accessibility, and maintainability before deployment."
    ]
  }
];

export default function ExperienceTimeline() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          onViewportEnter={() => setIsVisible(true)}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold inline-block overflow-hidden dark:text-white">
            <div className="overflow-hidden">
              {"Experience".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.05 * index,
                    ease: "easeOut" 
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-2 bg-blue-500 mt-2"
              style={{ borderRadius: "4px" }}
            ></motion.div>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600 transform md:-translate-x-1/2"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + 0.3 * index }}
                viewport={{ once: true }}
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"
              />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-blue-500 dark:text-blue-400">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + 0.1 * idx }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout on desktop */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
