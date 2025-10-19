'use client';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import mylogo from "../assets/tech/mylogo.jpg"
import Image from 'next/image';
import { useTheme } from '@/app/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="#hero-intro" className="flex items-center space-x-2">
               <div className="text-gray-900 dark:text-gray-100">
                <Image
                 src={mylogo}
                 alt="k"
                 className='rounded-md w-14 object-contain'
                />
               </div>
              <span className="md:text-2xl text-xl font-bold text-gray-900 dark:text-gray-100">Khurshid Shaikh</span>
            </Link>
          </div>


          <div className="hidden md:flex justify-center items-center h-full">
          <div className="flex gap-3 items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link href="#about-me" className="text-gray-900 dark:text-gray-100 text-xl">
              About
            </Link>
          
            <Link href="#experience" className="text-gray-900 dark:text-gray-100 text-xl">
              Experience
            </Link>

            <Link href="#projects" className="text-gray-900 dark:text-gray-100 text-xl">
              Projects
            </Link>

            <Link href="#contact" className="text-gray-900 dark:text-gray-100 text-xl">
              Contact
            </Link>
          </div>
        </div>

        
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/KhurshidShaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100"
            >
              <FaGithub size={30}/>
            </Link>
            <Link
              href="https://www.instagram.com/khurshid__7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/khurshid-shaikh-41b348281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100"
            >
              <FaLinkedin size={30} />
            </Link>
           
            <button 
              onClick={toggleTheme}
              className="text-gray-900 dark:text-gray-100 focus:outline-none relative w-[30px] h-[30px]"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  {theme === 'light' ? <FaMoon size={30} /> : <FaSun size={30} />}
                </motion.div>
              </AnimatePresence>
            </button>
            
          </div>
        </div>

        <div className="flex md:hidden justify-center items-center pb-4">
          <div className="flex gap-4 items-center">
            <Link href="#about-me" className="text-gray-900 dark:text-gray-100 text-[20px]">
              About
            </Link>
           
            <Link href="#experience" className="text-gray-900 dark:text-gray-100 text-[20px]">
              Experience
            </Link>

            <Link href="#projects" className="text-gray-900 dark:text-gray-100 text-[20px]">
              Projects
            </Link>

            <Link href="#contact" className="text-gray-900 dark:text-gray-100 text-[20px]">
              Contact
            </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
