"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const titleSponsors = [
  { src: "/im26-logos/spectacles_logo_white.png", alt: "Spectacles by Snap", href: "https://www.spectacles.com/" },
  { src: "/im26-logos/Pico_logo_white.png", alt: "PICO", href: "https://www.picoxr.com/" },
];

const sponsors = [
  { src: "/im26-logos/Astec-Digital-Logo-HORZ-White.png", alt: "Astec Digital", href: "https://www.astecdigital.com/" },
  { src: "/im26-logos/RavenResonance_logo_white.png", alt: "Raven Resonance", href: "#" },
  { src: "/im26-logos/gt-create-x_logo_white.png", alt: "Create-X", href: "https://create-x.gatech.edu/" },
];

const communityPartners = [
  { src: "/im26-logos/XRB_logo_white.png", alt: "XR Bootcamp", href: "#" },
  { src: "/im26-logos/SensAI_logo_white.png", alt: "SensAI Hackathon", href: "#" },
  { src: "/im26-logos/AWE_logo_white.png", alt: "AWE", href: "https://www.awexr.com/" },
  { src: "/im26-logos/mlh_logo_white.png", alt: "Major League Hacking", href: "https://mlh.io" },
  { src: "/im26-logos/Pure-Buttons-logo.png", alt: "Pure Buttons", href: "https://www.purebuttons.com/" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="h-px w-12 bg-violet-500/20" />
      <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">
        {children}
      </h3>
      <div className="h-px w-12 bg-violet-500/20" />
    </div>
  );
}

export function Sponsors() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-24 bg-[var(--bg-dark)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Decorative concentric circles — top right */}
      <svg viewBox="0 0 400 400" fill="none" className="absolute -top-20 -right-20 w-[300px] h-[300px] opacity-[0.03] pointer-events-none">
        {[60, 100, 145, 195].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1.5" className="text-violet-400" />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-violet-300 via-white to-violet-300 text-transparent bg-clip-text"
        >
          Our 2026 Sponsors
        </motion.h2>

        {/* Title Sponsors */}
        <SectionLabel>Title Sponsors</SectionLabel>
        <div className="flex flex-col items-center gap-10 mb-24">
          {titleSponsors.map((s) => (
            <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-16 sm:h-24 w-60 sm:w-80 rounded-xl p-4 border border-transparent hover:border-violet-500/10 transition-colors duration-300"
              >
                <img src={s.src} alt={s.alt} className="h-full w-full object-contain" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Sponsors */}
        <SectionLabel>Sponsors</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
          {sponsors.map((s) => (
            <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-16 w-full max-w-[14rem] px-4 rounded-xl border border-transparent hover:border-violet-500/10 transition-colors duration-300"
              >
                <img src={s.src} alt={s.alt} className="max-h-full max-w-full object-contain" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Community Partners */}
        <SectionLabel>Community Partners</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {communityPartners.map((s) => (
            <Link key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-12 w-full max-w-[11rem] px-3 rounded-lg border border-transparent hover:border-violet-500/10 transition-colors duration-300"
              >
                <img src={s.src} alt={s.alt} className="max-h-full max-w-full object-contain" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
