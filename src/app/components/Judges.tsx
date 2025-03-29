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
        role: "Adam is a seasoned executive with 15+ years of experience in strategy, product leadership, and behavioral analytics, driving growth and innovation across retail, media, and tech. Proven track record of leading cross-functional teams and delivering results for clients like Coca-Cola, AT&T, Toyota, and IHG",
        label: "VR AR Association",
        image: "/adam.png",
        website: "https://www.linkedin.com/in/adam-t-kornuth",
    },
    {
        name: "JP Minetos",
        role: "JP Minetos is an investor and VR data analyst at Hartmann Capital, focused on VR. He shares valuable insights on VR store trends and industry developments, with 1k+ followers on Twitter and 4.4k+ on LinkedIn. A huge VR nerd, he's deeply immersed in the future of immersive technologies.",
        label: "Hartmann Capital",
        image: "/jp.png",
        website: "https://www.linkedin.com/in/jpminetos/",
    },
    {
        name: "Coming Soon",
        role: "Coming Soon",
        label: "TBD",
        image: "/ImmerseLogo.svg",
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
                    Meet our 2025 speakers
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
