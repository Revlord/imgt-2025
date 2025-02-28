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
        "relative w-full overflow-hidden py-24", // Increased vertical padding
        // Purple-to-dark gradient background
        "bg-gradient-to-b from-[#1C121E] via-[#200630] to-[#09080C]"
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8"> {/* More horizontal padding */}
        {/* Main Title */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-16 p-4 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 text-transparent bg-clip-text">
          Meet our 2025 Sponsors
        </h2>

        {/* <div className="border-2 border-white py-6"> */}
        {/* Unicorn Sponsor */}
        <div className="mb-20"> {/* Increased section spacing */}
          <div className="grid grid-cols-1 gap-10 place-items-center"> {/* Increased grid gap */}
            {/* Snap AR + Ghost Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-4 duration-300" /* Added padding */
            >
              <img
                src="/SnapAR-2.png"
                alt="Unicorn Sponsor Logo"
                className="max-h-20 object-contain" /* Larger logo */
              />
              <img
                src="/Ghost Logo (for light backgrounds).png"
                alt="Unicorn Sponsor Logo"
                className="max-h-20 object-contain mt-6" /* Increased spacing and larger logo */
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-4 duration-200" /* Added padding */
            >
              <img
                src="/niantic.png"
                alt="Unicorn Sponsor Logo"
                className="max-h-14 object-contain" /* Larger logo */
              />
            </motion.div>
            
          </div>
        </div>

        {/* Community Sponsors */}
        <div className="mb-20"> {/* Increased section spacing */}
          <h3 className="text-xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-300">
            Community Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"> {/* Increased grid gap */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 duration-200"> {/* Added padding */}
              <img
                src="/red-bull.png"
                alt="Community Sponsor 1"
                className="max-h-40 object-contain" /* Larger logo */
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 duration-200"> {/* Added padding */}
              <img
                src="/celcius.png"
                alt="Community Sponsor 2"
                className="max-h-16 object-contain" /* Larger logo */
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
      {/* </div> */}
    </motion.section>
  );
}
