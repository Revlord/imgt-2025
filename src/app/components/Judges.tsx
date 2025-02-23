"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const judgesData = [
    {
        name: "Irfan Essa",
        role: "Principal Research Scientist / Director, DeepMind",
        label: "HEADLINE JUDGE",
        image: "/headshot.jpg",
    },
    {
        name: "Paige Bailey",
        role: "AI Developer Relations Lead, Google",
        label: "WORKSHOP JUDGE",
        image: "/headshot.jpg",
    },
    {
        name: "John Doe",
        role: "Director of AI, Big Tech",
        label: "HEADLINE JUDGE",
        image: "/headshot.jpg",
    },
    {
        name: "Jane Smith",
        role: "Research Engineer, Robotics Lab",
        label: "WORKSHOP JUDGE",
        image: "/headshot.jpg",
    },
];

export function Judges() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={twMerge(
                "relative w-full overflow-hidden py-16",
                "bg-[#0F0721] text-white"
            )}
        >
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-12 text-white">
                    Meet our 2024 Speakers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {judgesData.map((judge, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center text-center p-8 py-8 rounded-xl bg-[#371B69]/60 backdrop-blur-lg border border-gray-700 shadow-lg transition-transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#4c2fab] shadow-md">
                                <img
                                    src={judge.image}
                                    alt={judge.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <span className="mt-4 text-[#932ee6] uppercase text-sm font-semibold tracking-wider">
                                {judge.label}
                            </span>

                            <h3 className="text-white text-2xl font-semibold mt-2">
                                {judge.name}
                            </h3>

                            <p className="text-gray-300 text-md mt-1">{judge.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
