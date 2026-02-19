"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function Schedule() {
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
        "bg-gradient-to-b from-[#1C121E] via-[#200630] to-[#0F0721]"
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-white">
          ImmerseGT 2026 Schedule (Tentative)
        </h2>

        {/* Combined Schedule Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-16 shadow-lg min-h-[280px] flex items-center justify-center"
          >
            <h3 className="text-4xl sm:text-5xl font-semibold text-violet-200 text-center">
              Coming Soon
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-violet-200 text-center">
              Location
            </h3>
            <p className="mt-3 mb-5 text-base sm:text-lg text-gray-200 text-center">
              755 Ferst Dr NW, Atlanta, GA 30332
            </p>
            <div className="w-full h-[320px] sm:h-[380px] overflow-hidden rounded-md border border-violet-300/20">
              <iframe
                title="ADC XR Makerspace Map"
                src="https://www.google.com/maps?q=755+Ferst+Dr+NW,+Atlanta,+GA+30332&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/jr95Q4q2BvZYafWG9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
