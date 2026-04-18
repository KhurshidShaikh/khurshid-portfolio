'use client';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { technologies, projects, contact } from "../constants/index.js";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { GlowingStarsCard } from '../components/ui/GlowingStars';
import { MovingBorderButton } from '../components/ui/MovingBorder';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">

        {/* ───────── HERO ───────── */}
        <section id="hero-intro" className="relative pt-32 pb-16 md:min-h-screen md:pt-0 md:pb-0 flex items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >


              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="gradient-text">Khurshid</span>
              </h1>

              <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-10">
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
                    deleteSpeed: 40,
                    delay: 60,
                  }}
                />
              </div>

              <TextGenerateEffect
                words="I build production-grade web and mobile apps  from AI-powered platforms to real-time systems  that actually ship and solve real problems."
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto !font-normal mb-10"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <MovingBorderButton
                  as="a"
                  href="#contact"
                  containerClassName="h-12"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  Let&apos;s Connect
                </MovingBorderButton>

                <a
                  href="https://drive.google.com/file/d/1RNwXNy1L6_mZUcbtHZlq0M-2Ql3QYeln/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-amber-500/60 text-sm font-medium text-foreground hover:border-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(212,168,83,0.2)] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>
              </motion.div>
            </motion.div>


          </div>
        </section>

        {/* ───────── ABOUT ME ───────── */}
        <section id="about-me" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="About Me" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="mt-10">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m a <span className="text-foreground font-medium">Full-Stack Web and Mobile App Developer</span> with hands-on experience building and shipping real products. I&apos;ve developed production-grade web and mobile applications, integrating RESTful APIs, optimizing performance, and collaborating across design and QA teams.
                  </p>
                  <p>
                    I&apos;ve built <span className="text-amber-500">QueueCare</span> — a WhatsApp-based queue management system for clinics, <span className="text-amber-500">PropTech</span> — an AI-powered real estate platform with ML price prediction and real-time chat, and <span className="text-amber-500">SimplifAI</span> — a mobile app using OCR and Gemini AI to translate complex documents into regional languages.
                  </p>
                  <p>
                    My stack spans <span className="text-foreground font-medium">React, Next.js, Node.js, React Native, Python, MySQL ,MongoDB, and Firebase</span> — and I&apos;m always picking up whatever a project demands. I care about writing clean, maintainable code that actually ships and solves real problems.
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* ───────── TECH STACK ───────── */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Tech Stack" subtitle="Technologies I work with" />

            <div className="mt-12 space-y-6">
              <InfiniteMovingCards
                items={technologies.slice(0, 11)}
                direction="left"
                speed="normal"
              />
              <InfiniteMovingCards
                items={technologies.slice(11)}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </section>

        {/* ───────── EXPERIENCE ───────── */}
        <ExperienceTimeline />

        {/* ───────── PROJECTS ───────── */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Projects" subtitle="Things I've built" />

            <div className="mt-12">
              <BentoGrid>
                {projects.map((project, index) => (
                  <BentoGridItem
                    key={index}
                    title={project.name}
                    description={project.description}
                    image={typeof project.image === "string" ? project.image : (project.image as { src?: string })?.src || ""}
                    liveLink={project.live_link}
                    sourceCode={project.source_code}
                    tags={project.tags}
                    className={index === 0 ? "md:col-span-2" : ""}
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        </section>

        {/* ───────── CONTACT ───────── */}
        <section id="contact" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Get in Touch" subtitle="Let's talk" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 max-w-lg mx-auto"
            >
              <GlowingStarsCard className="text-center">
                {/* Email icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                  Email me at
                </p>
                <a
                  href="mailto:khurshidsk7304@gmail.com"
                  className="text-lg md:text-xl font-semibold text-foreground hover:text-amber-500 transition-colors break-all"
                >
                  khurshidsk7304@gmail.com
                </a>

                <div className="mt-6">
                  <MovingBorderButton as="a" href="mailto:khurshidsk7304@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    Send a Message
                  </MovingBorderButton>
                </div>

                {/* Social links */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                    Or find me on
                  </p>
                  <div className="flex justify-center gap-4">
                    {contact.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <div className="relative w-14 h-14 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(212,168,83,0.2)] group-hover:bg-amber-500/5 transition-all duration-300">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={46}
                            height={46}
                            className="object-contain"
                          />
                          {/* External link indicator */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1.5 right-1.5 text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-amber-500 transition-colors">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlowingStarsCard>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ───────── Scroll to top ───────── */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-amber-500/50 transition-all z-50"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}

/* ───────── Reusable Section Heading ───────── */
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      {subtitle && (
        <p className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-3 font-medium">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mt-4 rounded-full"
      />
    </motion.div>
  );
}
