'use client';
import Image from 'next/image';
import mylogo from '../assets/tech/mylogo.jpg';

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-border/50">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={mylogo}
              alt="Khurshid Logo"
              width={28}
              height={28}
              className="rounded-md object-cover"
            />
            <a href="/" className="text-sm font-semibold text-foreground hover:text-amber-500 transition-colors">
              Khurshid Shaikh
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
