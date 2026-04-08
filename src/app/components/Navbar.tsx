"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sponsors", href: "#sponsors" },
  { label: "Speakers", href: "#speakers" },
  { label: "Tracks", href: "https://immersegt26.notion.site/tracks-prizes-2026", external: true },
  { label: "Schedule", href: "#schedule" },
  { label: "Photos", href: "#photos" },
  { label: "FAQs", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-deep)]/80 backdrop-blur-xl border-b border-violet-500/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/brand_kit/ImmerseGT Logo - White.png"
              alt="ImmerseGT"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="ml-2 px-5 py-2 rounded-full bg-violet-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-violet-700 transition-colors duration-300 glow-purple-sm"
              onClick={() =>
                (window.location.href = "https://luma.com/2a9atblo")
              }
            >
              Apply Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[var(--text-muted)] hover:text-violet-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--bg-deep)]/95 backdrop-blur-xl border-t border-violet-500/[0.06]"
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block px-3 py-2.5 rounded-md font-mono text-xs tracking-wider uppercase text-[var(--text-muted)] hover:text-violet-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="w-full mt-2 px-3 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "https://luma.com/2a9atblo";
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
