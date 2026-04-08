"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function MLHBadge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => setShow(window.innerWidth >= 1270);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!show) return null;

  return (
    <a
      id="mlh-trust-badge"
      className="fixed right-[20px] top-0 z-[10000] w-[5%] min-w-[40px] max-w-[60px] md:max-w-[100px]"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-black.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        className="w-full h-auto"
      />
    </a>
  );
}

function ConcentricRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {[80, 130, 190, 255, 290].map((r) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          stroke="rgba(139,92,246,0.08)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function GreekColumn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="30" width="4" height="340" fill="rgba(139,92,246,0.06)" />
      <rect x="4" y="20" width="12" height="6" rx="1" fill="rgba(139,92,246,0.08)" />
      <rect x="4" y="374" width="12" height="6" rx="1" fill="rgba(139,92,246,0.08)" />
      <rect x="2" y="14" width="16" height="4" rx="1" fill="rgba(139,92,246,0.06)" />
      <rect x="2" y="382" width="16" height="4" rx="1" fill="rgba(139,92,246,0.06)" />
    </svg>
  );
}

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-deep)]">
      <MLHBadge />

      {/* ── Full-bleed background ── */}
      <div className="absolute inset-0 vignette-wide">
        <Image
          src="/brand_kit/ImmerseGT Hands.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-[var(--bg-deep)]/50" />

      {/* Radial purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(139,92,246,0.08)_0%,transparent_55%)] pointer-events-none" />

      {/* ── Decorative SVG concentric rings ── */}
      <ConcentricRings className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] animate-spin-slow pointer-events-none" />

      {/* ── Greek column accents on sides ── */}
      <GreekColumn className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 h-[50vh] opacity-40 hidden md:block" />
      <GreekColumn className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 h-[50vh] opacity-40 hidden md:block" />

      {/* ── Small floating geometric elements ── */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 border border-violet-500/20 rotate-45 animate-float pointer-events-none hidden md:block" />
      <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-violet-500/10 rounded-full animate-float pointer-events-none hidden md:block" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[30%] left-[20%] w-4 h-4 border border-violet-500/10 rounded-full animate-float pointer-events-none hidden md:block" style={{ animationDelay: "4s" }} />

      {/* ── Main content ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 py-12"
      >
        <Image
          src="/brand_kit/ImmerseGT Logo - White.webp"
          alt="ImmerseGT Logo"
          width={800}
          height={202}
          priority
          className="h-16 md:h-24 w-auto mb-6 object-contain"
        />

        <h1 className="font-display text-4xl md:text-7xl md:leading-tight max-w-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-300 via-white to-violet-300 bg-clip-text text-transparent">
            One of the biggest XR hackathons is back
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[var(--text-body)] max-w-2xl">
          VR/AR Hackathon &middot; 36 hours &middot; Endless possibilities
        </p>

        <Link
          href="https://maps.app.goo.gl/5vq8PS9r7BEFuR5v8"
          className="mt-4 hover:scale-105 transition-transform duration-300"
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-violet-300/60">
            April 10–12 &nbsp;·&nbsp; ADC XR Makerspace &nbsp;·&nbsp; Georgia
            Tech
          </p>
        </Link>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <button
            className="px-8 py-3.5 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-all duration-300 flex items-center gap-2 glow-purple"
            onClick={() =>
              (window.location.href = "https://luma.com/2a9atblo")
            }
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => (window.location.href = "#faq")}
            className="px-8 py-3.5 rounded-full border border-violet-500/20 text-violet-300 font-medium hover:bg-violet-950/30 hover:border-violet-500/40 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="mt-14">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] mb-4">
            Co-Hosted By
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link href="https://www.gtxr.club/">
              <img
                src="/gtxr.png"
                alt="GTXR Logo"
                className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <div className="h-8 w-px bg-violet-500/20" />
            <Link href="https://www.startup.exchange/">
              <img
                src="/sx.png"
                alt="Startup Exchange Logo"
                className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
