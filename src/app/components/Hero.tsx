"use client";

import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { ArrowRight } from "lucide-react";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative h-[55-rem] w-full flex flex-col items-center justify-start bg-[#0F0013] overflow-hidden">
      {/* Gradient overlay covering the entire section */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/50 via-transparent to-transparent" />

      {/* Animated backgrounds (stars) */}
      <ShootingStars />
      <StarsBackground />

      {/* Main content, placed above background via z-index */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-8">
        {/* Logo */}
        <img
          src="/ImmerseGTlogo.svg"
          alt="ImmerseGT Logo"
          className="h-36 md:h-40"
        />

        {/* Heading */}
        <h2 className="text-3xl md:text-7xl md:leading-tight max-w-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-300 via-white to-violet-300 bg-clip-text text-transparent">
            One of the biggest XR hackathons is back
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-3 text-lg md:text-xl text-violet-200/80 max-w-2xl">
            ImmerseGT 2025 - XR hackathon. 36 hours. Endless possibilities
        </p>
        <br></br>
        <div className="hover:scale-105 duration-300">
            <p className="text-white text-lg font-bold md:text-xl tracking-wider">
            April 4th-6th  |  Klaus Atrium  |  Georgia Tech
            </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
          <button className="px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-800 transition-colors duration-300 flex items-center gap-2">
            Apply Now <ArrowRight className="inline-block" />
          </button>
          <button className="px-8 py-3 rounded-full border border-violet-500/30 text-violet-300 font-medium hover:bg-violet-950/30 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Co-hosted by section */}
        <div className="text-violet-200/80 rounded-md py-8 px-36 mt-10">
            <p className="font-bold text-xl">Co-Hosted By</p>
            <div className="mt-4 flex items-center justify-center gap-8">

            <img
              src="/gtxr.png"
              alt="Club 1 Logo"
              className="h-16 md:h-16 hover:scale-105 duration-300"
            />
            <img
              src="/sx.png"
              alt="Club 2 Logo"
              className="h-10 md:h-10 hover:scale-105 duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
