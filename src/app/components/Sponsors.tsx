"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const titleSponsors = [
  { src: "/im26-logos/spectacles_logo_white.png", alt: "Spectacles by Snap", href: "https://www.spectacles.com/" },
  { src: "/im26-logos/Pico_logo_white.png", alt: "PICO", href: "https://www.picoxr.com/" },
];

const sponsors = [
  { src: "/im26-logos/Astec-Digital-Logo-HORZ-White.png", alt: "Astec Digital", href: "https://www.astecdigital.com/" },
  { src: "/im26-logos/gt-create-x_logo_white.png", alt: "Create-X", href: "https://create-x.gatech.edu/" },
  { src: "/im26-logos/RavenResonance_logo_white.png", alt: "Raven Resonance", href: "https://raven.computer/" },
];

const communityPartners = [
  { src: "/im26-logos/XRB_logo_white.png", alt: "XR Bootcamp", href: "https://xrbootcamp.com/" },
  { src: "/im26-logos/SensAI_logo_white.png", alt: "SensAI Hackathon", href: "https://sensaihack.com/" },
  { src: "/im26-logos/AWE_logo_white.png", alt: "AWE", href: "https://www.awexr.com/" },
  { src: "/im26-logos/mlh_logo_white.png", alt: "Major League Hacking", href: "https://mlh.io" },
  { src: "/im26-logos/Pure-Buttons-logo.png", alt: "Pure Buttons", href: "https://www.purebuttons.com/" },
];

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
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-16 p-4 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 text-transparent bg-clip-text">
          Our 2026 Sponsors
        </h2>

        {/* Title Sponsors — large, each in a fixed-size box */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-300">
            Title Sponsors
          </h3>
          <div className="flex flex-col items-center gap-10">
            {titleSponsors.map((s) => (
              <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-16 sm:h-24 w-60 sm:w-80"
                >
                  <img src={s.src} alt={s.alt} className="h-full w-full object-contain" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sponsors — grid gives each logo an equal-width cell */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-300">
            Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsors.map((s) => (
              <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-16 w-full max-w-[14rem] px-4"
                >
                  <img src={s.src} alt={s.alt} className="max-h-full max-w-full object-contain" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Community Partners — grid for uniform spacing */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-10 text-center uppercase tracking-wider text-violet-300">
            Community Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {communityPartners.map((s) => (
              <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-12 w-full max-w-[11rem] px-3"
                >
                  <img src={s.src} alt={s.alt} className="max-h-full max-w-full object-contain" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
