"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#200630]/70 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/ImmerseGTlogo.svg"
                alt="Logo" 
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#sponsors"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                Sponsors
              </Link>
              <Link
                href="#speakers"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                Speakers
              </Link>
              <Link
                href="https://immersegt25.notion.site/Tracks-Prizes-1cbed0c37d3d80689e6bfcc20b3d4264"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                Tracks
              </Link>
              <Link 
                href="#schedule"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                Schedule
              </Link>
              <Link
                href="#photos"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                Photos
              </Link>
              <Link
                href="#faq"
                className="text-violet-200/80 hover:text-violet-700 transition-colors"
              >
                FAQs
              </Link>
              <button
                className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white font-medium hover:from-violet-700 hover:to-violet-900 transition-colors duration-300"
                onClick={() => (window.location.href = "https://lu.ma/fscb1e9s?tk=rLagDy")}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-violet-200/80 hover:text-violet-700 focus:outline-none focus:text-violet-700"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#200630]/90 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#sponsors"
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-200/80 hover:text-violet-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="#judges"
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-200/80 hover:text-violet-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Speakers
              </Link>
              <Link 
                href="#schedule"
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-200/80 hover:text-violet-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="#photos"
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-200/80 hover:text-violet-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Photos
              </Link>
              <Link
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-200/80 hover:text-violet-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-violet-600 to-violet-800 text-white hover:from-violet-700 hover:to-violet-900 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "https://lu.ma/fscb1e9s?tk=rLagDy";
                }}
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
