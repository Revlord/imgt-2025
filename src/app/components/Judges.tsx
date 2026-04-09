"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Judges() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-24 bg-[var(--bg-surface)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Decorative concentric circles */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.02] pointer-events-none"
      >
        {[100, 160, 230, 290].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            stroke="currentColor"
            strokeWidth="1"
            className="text-violet-400"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center font-mono text-[10px] tracking-[0.25em] uppercase text-violet-400 mb-3">
            Keynote Speaker
          </p>
          <h2 className="text-center font-display text-4xl sm:text-5xl font-bold mb-16 text-[var(--text-primary)]">
            Meet the Speaker
          </h2>
        </motion.div>

        {/* Speaker card — hero layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-violet-500/10 bg-[var(--bg-card)] grain"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="relative w-full lg:w-[420px] shrink-0 aspect-[4/5] lg:aspect-auto">
              <Image
                src="/omari.webp"
                alt="Omari Hitson"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--bg-card)]" />
            </div>

            {/* Bio */}
            <div className="relative flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {/* Subtle accent line */}
              <div className="w-12 h-px bg-violet-500/40 mb-6 hidden lg:block" />

              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-violet-400 mb-2">
                JPMorgan Chase &middot; XR Product Design
              </p>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-1">
                Omari Hitson
              </h3>

              <p className="font-mono text-xs tracking-wider text-[var(--text-muted)] mb-6">
                Georgia Tech Industrial Design Alumnus
              </p>

              <div className="space-y-4 text-sm text-[var(--text-body)] leading-relaxed">
                <p>
                  Omari Hitson has a knack for taking an unproven idea and making
                  it something people can actually trust. As the XR product design
                  lead for emerging technologies at JPMorgan Chase, he&apos;s had to
                  earn that trust the hard way &mdash; in an institution where every
                  decision needs to be airtight, he&apos;s built a practical approach
                  to early-stage prototyping that moves quickly from &ldquo;what
                  if&rdquo; to &ldquo;here&apos;s why this works.&rdquo;
                </p>
                <p>
                  His background in industrial design shaped how he thinks: a
                  product either works in someone&apos;s hands or it doesn&apos;t. He
                  brings that same honesty to spatial computing.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "VR/AR Association Ohio — Chapter President",
                  "Founder, OhioXR",
                  "MIT Reality Hack Judge",
                  "Unity Certified VR Developer",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1.5 rounded-full border border-violet-500/15 bg-violet-500/5 font-mono text-[10px] tracking-wider text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="https://www.linkedin.com/in/omari-hitson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/25 text-violet-200 font-mono text-[11px] uppercase tracking-wider hover:bg-violet-500/10 transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <blockquote className="font-display text-lg sm:text-xl italic text-[var(--text-body)]/80 leading-relaxed">
            &ldquo;For any organization betting on emerging technology, the hardest
            moment isn&apos;t the vision. It&apos;s the part between the vision and
            the <span className="text-violet-300 not-italic font-semibold">yes</span>.
            That&apos;s where Omari excels.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
}
