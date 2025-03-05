"use client"
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0c061c] text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-8 pb-10 md:pb-12 border-b border-gray-800">
          {/* Logo and Info Section */}
          <div className="col-span-2 mb-4 md:mb-0">
          <Link href="/" className="inline-block mb-4 md:mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2 }}
              >
                <Image
                  src="/ImmerseLogo.svg"
                  alt="ImmerseGT"
                  width={200}
                  height={100}
                  className="h-auto w-[160px] sm:w-[180px] md:w-[200px]"
                />
              </motion.div>
            </Link>
            <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
              ImmerseGT 2025 - XR hackathon. 36 hours. Endless possibilities
            </p>
            <p className="text-sm md:text-base text-gray-400">
              April 4th-6th | Klaus Atrium | Georgia Tech
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#schedule" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#photos" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="https://www.instagram.com/immerse.gt" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/immersegt" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <div className="border-b border-gray-600 max-w-16 md:max-w-24"></div>
              </li>
              <li>
                <Link href="mailto:contact@immersegt.org" className="text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:space-x-4 mb-6 md:mb-0">
            <p className="text-sm text-gray-400">Co-Hosted By</p>
            <div className="flex items-center space-x-3 md:space-x-4">
              <Image
                src="/gtxr.png"
                alt="GTXR"
                width={120}
                height={30}
                className="h-7 md:h-9 w-auto"
              />
              <div className="border-l border-gray-600 h-6 md:h-8"></div>
              <Image
                src="/sx.png"
                alt="Startup Exchange"
                width={120}
                height={30}
                className="h-5 md:h-6 w-auto"
              />
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; 2025 ImmerseGT. All rights reserved
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Designed and Developed by <span className='hover:cursor-pointer hover:text-purple-400 transition-colors' onClick={() => (window.location.href = "https://revlord.vercel.app")}>Revanth Reddy Burramukku</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;