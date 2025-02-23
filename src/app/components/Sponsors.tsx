"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function Sponsors() {
  return (
    <motion.section
      // Simple fade-in + slide-up animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={twMerge(
        "relative w-full overflow-hidden py-16",
        // Purple-to-dark gradient background
        "bg-gradient-to-b from-violet-950/50 to-[#000000]"
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-white">
          Meet our 2025 sponsors
        </h2>
        {/* Unicorn Sponsor */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center uppercase tracking-wider text-violet-300">
            Unicorn Sponsor
          </h3>
          <div className="grid grid-cols-1 gap-8 place-items-center p-4">
            {/* Single unicorn sponsor logo */}
            <div className="hover:scale-105 duration-300 relative backdrop-blur-sm p-8 rounded-lg flex items-center justify-center border border-white shadow-lg overflow-hidden">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-violet-900/5 to-transparent pointer-events-none" />
              <img
            src="/SnapAR-2.png"
            alt="Unicorn Sponsor Logo"
            className="h-auto w-auto max-h-16 object-contain relative z-10"
              />
              <img
            src="/Ghost Logo (for light backgrounds).png "
            alt="Unicorn Sponsor Logo"
            className="h-auto w-auto max-h-16 object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Community Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center uppercase tracking-wider text-violet-300">
            Community Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center p-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {/* Two community sponsors */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center w-48 h-24 border border-white">
              <img
            src="/redbull.png"
            alt="Community Sponsor 1"
            className="h-16 w-auto object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center w-48 h-24 border border-white">
              <img
            src="/celcius.png"
            alt="Community Sponsor 2"
            className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Future Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center uppercase tracking-wider text-violet-300">
            More Sponsors Coming Soon
          </h3>
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center text-white font-semibold border">
              Coming Soon
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center text-white font-semibold border">
              Coming Soon
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center text-white font-semibold border">
              Coming Soon
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center text-white font-semibold border">
              Coming Soon
            </div>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
