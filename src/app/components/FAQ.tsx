"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    { question: "What is ImmerseGT?", answer: "ImmerseGT is a 36 hour long hackathon at Georgia Tech focusing mainly on working and developing XR (Extended Reality) applications and hardware." },
    { question: "Who is eligible to participate in ImmerseGT?", answer: "Any college student over the age of 18 is eligible to participate and demo their application to this hackathon" },
    { question: "What are the competition categories at ImmerseGT?", answer: "Overall Best Winner, Intelligent Immersion, Gaming Health and Fitness, Lifestyle, Best use of Snap spectacles from Snap AR, Niantic Sponsor prize, Meshy GenAI 3D Excellence Award" },
    { question: "Where will ImmerseGT take place?", answer: "Klaus Advanced Research Building @ 12pm on April 3rd, 2026." },
    { question: "How do I participate in ImmerseGT?", answer: "Finish your application on Luma by clicking 'Apply Now'. Acceptances will be decided on a rolling basis. We only have limited seats so apply fast!" },
    { question: "What resources will be provided during ImmerseGT?", answer: "You will have access to industry-leading mentors and software devs in the XR space. Moreover we will hold sponsor workshops throughout the event for you to engage in learning. Moreover, the best part, we will be providing a XR Headset through a need-only basis for a full team (5 people)" },
    { question: "How will judging and prizes work at ImmerseGT?", answer: "We will have industry leading individuals as well as senior developers in the XR industry judging the event! Prizes will be handed directly to the winners during the closing ceremony." },
  ];

  return (
    <div className="min-h-screen bg-[#0F0721] text-white p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
            <div className="mb-12">
                <h1 className="text-5xl font-bold mb-6">FAQs</h1>
                <div className="text-gray-300">
                    <p>Still have some questions?</p>
                    <p>Feel free to reach out to us on discord.</p>
                </div>
            </div>

            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg"
                        style={{
                            backgroundColor: openIndex === index ? '#4C1D95' : '#6D28D9',
                            height: openIndex === index ? '200px' : '64px', // Fixed heights for both states
                            transition: 'height 0.2s ease-in-out'
                        }}
                    >
                        <motion.button
                            className={`w-full h-16 px-4 flex justify-between items-center text-left
                                ${openIndex === index 
                                    ? 'bg-[#4C1D95]' 
                                    : 'bg-[#6D28D9] hover:bg-[#5B21B6] transition-colors duration-200'
                                }`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="text-white">{faq.question}</span>
                            <motion.span
                                className="ml-4 flex-shrink-0 text-white"
                                animate={{ rotate: openIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </motion.span>
                        </motion.button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    className="p-4 text-gray-100"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="overflow-y-auto h-[120px]">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);
};

export default FAQPage;