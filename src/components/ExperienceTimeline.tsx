'use client';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';

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
  },
  {
    role: "Python Developer Intern",
    company: "Ignitech.in",
    location: "On-site",
    period: "Jun 2022 – Aug 2022",
    responsibilities: [
      "Built a Python-based desktop application integrated with SQL for data storage and management.",
      "Assisted in debugging, testing, and optimizing Python scripts to improve code quality and performance.",
      "Gained hands-on experience with database design, CRUD operations, and application logic in a real-world environment.",
      "Collaborated with the development team to identify and resolve software defects, contributing to a more stable codebase."
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3 font-medium">
            Career path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Experience<span className="gradient-text">.</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-violet-500/80 via-indigo-500/40 to-transparent md:-translate-x-px"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + 0.2 * index }}
                viewport={{ once: true }}
                className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-violet-500 md:-translate-x-1.5 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
              </motion.div>

              {/* Content card */}
              <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <SpotlightCard className="!p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-violet-400">
                        {exp.company}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + 0.1 * idx }}
                        viewport={{ once: true }}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-violet-500/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
