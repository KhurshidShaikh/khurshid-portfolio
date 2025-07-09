'use client';
import { Inter } from 'next/font/google';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import {technologies,projects,contact} from "../constants/index.js"
import { github } from "../assets/tech";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const aboutMeText = "About Me";
  const [isVisible, setIsVisible] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className={`${inter.className} min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-200`}>
      <div className="flex-grow">
        <section id="hero-intro" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight dark:text-white">
                Greetings, I&apos;m{" "}
                <span className="text-blue-500">Khurshid</span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-200">
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Web Developer",
                      "Mobile App Developer",
                      "Problem Solver",
                      "Active Learner"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
              >
                I craft reliable, scalable, and user-centric digital solutions that bring ideas to life. 
                With a strong focus on clean architecture and impactful user experience, 
                I&apos;m driven by the passion to build meaningful products that solve real-world problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pt-6 flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3"
              >
                <a
                  href="#contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm sm:text-sm md:text-base px-5 sm:px-6 md:px-8 py-3 sm:py-3 rounded-full transition-colors duration-300 whitespace-nowrap"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="https://drive.google.com/file/d/1VXv_HCxaZNW9Q-IV867PN6roybBzs1Wv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-500 border border-blue-500 font-semibold text-sm sm:text-sm md:text-base px-5 sm:px-6 md:px-8 py-3 sm:py-3 rounded-full transition-colors duration-300 whitespace-nowrap"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about-me" className="container mx-auto px-4 py-16">
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
                  {aboutMeText.split('').map((char, index) => (
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300"
            >
              <p>
                I&apos;m a passionate Full-Stack Web and Mobile App Developer who enjoys turning ideas into digital experiences. With a solid foundation in both frontend and backend development, I love building apps that are fast, functional, and user-friendly.
              </p>
              <p>
                Over the last year, I&apos;ve worked on several real-world projects ranging from AI-powered mobile apps to ML-integrated platforms. Whether it&apos;s designing responsive interfaces or implementing complex backend logic, I thrive on solving problems through clean, scalable code.
              </p>
              <p>
                Currently exploring new technologies, collaborating on impactful products, and open to exciting opportunities in the tech space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold text-center mb-8 dark:text-white">Tech Stack</h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 * (index % 6),
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden flex items-center justify-center p-2 hover:shadow-md transition-shadow">
                      <Image 
                        src={tech.icon} 
                        alt={`Technology icon`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
              onViewportEnter={() => setProjectsVisible(true)}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold inline-block overflow-hidden dark:text-white">
                <div className="overflow-hidden">
                  {"My Projects".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isProjectsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                      <motion.a 
                        href={project.source_code} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Image 
                          src={github} 
                          alt="GitHub" 
                          width={24} 
                          height={24} 
                          className="object-contain" 
                        />
                      </motion.a>
                    </div>
                    
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
              onViewportEnter={() => setContactVisible(true)}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold inline-block overflow-hidden dark:text-white">
                <div className="overflow-hidden">
                  {"Contact".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
                Get in touch, let&apos;s talk. Shoot a message and I&apos;ll get back to you as soon as I can.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center gap-8 mt-8"
            >
              {contact.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 relative flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all p-4 border-2 border-gray-100 dark:border-gray-700">
                    <Image 
                      src={item.icon} 
                      alt="Contact icon"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-50"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    
    </main>
  );
}
