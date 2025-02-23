"use client";

import { Carousel } from "./ui/carousel";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function PhotoCarousel() {
  const slideData = [
    {
      title: "",
      src: "/club1.png"
    },
    {
      title: "",
      src: "/club2.png"
    },
    {
      title: "",
      src: "/club3.png"
    },
    {
      title: "",
      src: "/club4.png"
    },
    {
      title: "",
      src: "/club5.png"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={twMerge(
        "relative w-full overflow-hidden py-16",
        "bg-gradient-to-b from-[#200630] via-[#09080C] to-[#1C121E]"
      )}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl xs:text-4xl font-bold mb-24 text-white">
          Highlights from previous ImmerseGT
        </h2>
        <div className="w-full h-full">
          <Carousel slides={slideData} />
        </div>
      </div>
    </motion.section>
  );
}
