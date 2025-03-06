"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function Sponsors() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={twMerge(
        "relative w-full overflow-hidden py-24",
        "bg-gradient-to-b from-[#1C121E] via-[#200630] to-[#09080C]"
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-16 p-4 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 text-transparent bg-clip-text">
          Meet our 2025 Sponsors
        </h2>

        {/* Primary Sponsors */}
        <div className="mb-20">
          <div className="flex flex-col items-center gap-12">
            {/* Snap AR + Ghost Logo Container - Larger and positioned first */}
            <Link href={'https://ar.snap.com/'}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-lg p-6 flex flex-col items-center justify-center w-full max-w-sm"
              >
                <img
                  src="/SnapAR-2.png"
                  alt="Snap AR Logo"
                  className="max-h-20 object-contain mb-4"
                />
                <img
                  src="/Ghost Logo (for light backgrounds).png"
                  alt="Ghost Logo"
                  className="max-h-16 object-contain"
                />
              </motion.div>
            </Link>
            {/* Niantic Logo Container - Positioned below */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-6 flex items-center justify-center w-full max-w-xs"
            >
              <img
                src="/niantic.png"
                alt="Niantic Logo"
                className="max-h-14 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Community Sponsors */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-300">
            Community Partners
          </h3>
          
          {/* Single-line flex container with fixed dimensions for each sponsor */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            {/* All logos with identical container dimensions */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-4 flex items-center justify-center h-24 w-48"
            >
              <img
                src="/celcius.png"
                alt="Celsius Logo"
                className="max-h-12 object-contain"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-4 flex items-center justify-center h-24 w-48"
            >
              <img
                src="/mlh.png"
                alt="MLH Logo"
                className="max-h-12 object-contain"
              />
            </motion.div>

            {/* Grokit logo - bigger */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-4 flex items-center justify-center h-24 w-48"
            >
              <img
                src="/grokit.png"
                alt="Grokit Logo"
                className="max-h-24 object-contain" /* Increased from max-h-12 */
              />
            </motion.div>
            
            {/* Standout logo - bigger */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-4 flex items-center justify-center h-24 w-48"
            >
              <img
                src="/standout.png"
                alt="Standout Logo"
                className="max-h-20 object-contain" /* Increased from max-h-12 */
              />
            </motion.div>
                        {/* Red Bull logo - bigger */}
                        <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-4 flex items-center justify-center h-24 w-48"
            >
              <img
                src="/red-bull.png"
                alt="Red Bull Logo"
                className="max-h-36 object-contain" /* Increased from max-h-12 */
              />
            </motion.div>
          </div>
        </div>
        {/* Future Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-400">
            More Sponsors Coming Soon
          </h3>
        </div>
      </div>
    </motion.section>
  );
}