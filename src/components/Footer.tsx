'use client';
import Link from 'next/link';
import mylogo from "../assets/tech/mylogo.jpg"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-white">Khurshid Shaikh</span>
            </Link>
          </div>
          
          <div className="mb-4 md:mb-0 md:ml-36">
            <Image 
              src={mylogo} 
              alt="My Logo" 
              width={60} 
              height={60} 
              className="rounded-full border-2 border-white"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Khurshid Shaikh. All Rights Reserved.</p>
            <p className="text-sm text-gray-500 mt-1">Developed by Khurshid Shaikh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
