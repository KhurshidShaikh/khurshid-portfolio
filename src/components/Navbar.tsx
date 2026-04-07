'use client';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '@/app/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import mylogo from '../assets/tech/mylogo.jpg';

const navItems = [
  { label: "About", href: "#about-me" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <a href="#hero-intro" onClick={(e) => handleNavClick(e, '#hero-intro')} className="flex items-center gap-2 group">
            <Image
              src={mylogo}
              alt="Khurshid Logo"
              width={36}
              height={36}
              className="rounded-lg object-cover"
            />
            <span className="text-sm font-semibold text-foreground group-hover:text-amber-500 transition-colors">
              Khurshid Shaikh
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-1">
              <a
                href="https://github.com/KhurshidShaikh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/khurshidshaikh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com/__khurshid__7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                <FaXTwitter size={18} />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-border/50 mx-1" />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all focus:outline-none"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass-card rounded-2xl px-4 py-3 overflow-hidden pointer-events-auto"
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-all"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 px-3 pt-2 mt-1 border-t border-border/50">
                <a href="https://github.com/KhurshidShaikh" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/khurshidshaikh" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://x.com/__khurshid__7" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <FaXTwitter size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
