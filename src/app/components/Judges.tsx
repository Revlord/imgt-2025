"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const judgesData = [
  {
    name: "Mitchell Kuppersmith",
    role: "Mitchell is a Design Engineer at Snap designing and prototyping experiences at the intersection of AI and AR for Spectacles. He graduated from the University of Michigan with a degree in Computer and Cognitive Sciences with a focus in XR while obsessively competing in hackathons and game jams.",
    label: "SNAP AR",
    image: "/steven.png",
    website: "https://www.linkedin.com/in/mitchell-kuppersmith",
  },
  {
    name: "Adam T. Kornuth",
    role: "Adam is a technology leader at Booz Allen Hamilton, the advanced technology company driving speed to outcomes for the nation. He\u2019s also Atlanta Chapter President and Global Gen AI Committee Co-Chair for the VR/AR Association",
    label: "VR AR Association",
    image: "/adam.png",
    website: "https://www.linkedin.com/in/adam-t-kornuth",
  },
  {
    name: "JP Minetos",
    role: "JP Minetos is a visionary investor and data analyst at Hartmann Capital specializing in virtual reality. His cutting-edge analysis of VR market trends has made him a sought-after voice in the industry.",
    label: "Hartmann Capital",
    image: "/jp.png",
    website: "https://www.linkedin.com/in/jpminetos/",
  },
  {
    name: "Ariel Zhang",
    role: "Ariel Zhang serves as the head of community at Meshy, where groundbreaking tools that transform text and images into high-quality 3D models are developed.",
    label: "Meshy AI",
    image: "/ariel.png",
    website: "",
  },
];

export function Judges() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-20 bg-[var(--bg-surface)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Decorative concentric circles — bottom left */}
      <svg viewBox="0 0 400 400" fill="none" className="absolute -bottom-24 -left-24 w-[350px] h-[350px] opacity-[0.025] pointer-events-none">
        {[70, 115, 165, 220].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1.5" className="text-violet-400" />
        ))}
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-center font-display text-4xl sm:text-5xl font-bold mb-4 text-[var(--text-primary)]">
          Previous Speakers
        </h2>
        <p className="text-center font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-14">
          Industry leaders &middot; Mentors &middot; Innovators
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {judgesData.map((judge, index) => (
            <Link key={index} href={judge.website || "#"}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative flex flex-col items-center text-center p-8 rounded-xl bg-[var(--bg-card)] border border-violet-500/10 hover:border-violet-500/20 transition-colors duration-300"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-violet-500/10">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="mt-5 font-mono text-[10px] tracking-[0.2em] uppercase text-violet-400">
                  {judge.label}
                </span>

                <h3 className="font-display text-xl font-semibold mt-2 text-[var(--text-primary)]">
                  {judge.name}
                </h3>

                <p className="text-sm text-[var(--text-body)] mt-2 leading-relaxed">
                  {judge.role}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
