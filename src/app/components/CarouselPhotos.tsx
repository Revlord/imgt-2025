"use client";

import { Carousel } from "./ui/carousel";
import { motion } from "framer-motion";

export function PhotoCarousel() {
  const slideData = [
    { title: "", src: "/club1.png" },
    { title: "", src: "/club2.png" },
    { title: "", src: "/club3.png" },
    { title: "", src: "/club4.png" },
    { title: "", src: "/club5.png" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-20 bg-[var(--bg-dark)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center font-display text-4xl sm:text-5xl font-bold mb-4 text-[var(--text-primary)]">
          Highlights
        </h2>
        <p className="text-center font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-20">
          From previous ImmerseGT events
        </p>
        <div className="w-full h-full">
          <Carousel slides={slideData} />
        </div>
      </div>
    </motion.section>
  );
}
