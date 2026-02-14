"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const judgesData = [
    {
        name: "Mitchell Kuppersmith",
        role: "Mitchell is a Design Engineer at Snap designing and prototyping experiences at the intersection of AI and AR for Spectacles. He graduated from the University of Michigan with a degree in Computer and Cognitive Sciences with a focus on XR while obsessively competing in hackathons and game jams. ",
        label: "SNAP AR",
        image: "/steven.png",
        website: "https://www.linkedin.com/in/mitchell-kuppersmith",
    },
    {
        name: "Adam T. Kornuth",
        role: "Adam is a technology leader at Booz Allen Hamilton, the advanced technology company driving speed to outcomes for the nation. He’s also Atlanta Chapter President and Global Gen AI Committee Co-Chair for the VR/AR Association",
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={twMerge(
                "relative w-full overflow-hidden py-16",
                "bg-gradient-to-b from-[#09080C] via-[#1C121E] to-[#200630]"
            )}
        >
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <h2 className="text-center text-6xl xs:text-4xl font-bold mb-12 text-white">
                    Meet our previous speakers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {judgesData.map((judge, index) => (
                        <Link href={judge.website}>
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center text-center p-8 py-8 rounded-xl bg-black/10 backdrop-blur-md border border-white/10 shadow-lg transition-transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >                               

                            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
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
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
