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
    { question: "What is ImmerseGT?", answer: "Answer text here" },
    { question: "Who is eligible to participate in ImmerseGT?", answer: "Answer text here" },
    { question: "What are the competition categories at ImmerseGT?", answer: "Answer text here" },
    { question: "Where will ImmerseGT take place?", answer: "Answer text here" },
    { question: "How do I participate in ImmerseGT?", answer: "Answer text here" },
    { question: "What resources will be provided during ImmerseGT?", answer: "Answer text here" },
    { question: "How will judging and prizes work at ImmerseGT?", answer: "Answer text here" },
    { question: "What is the schedule for the ImmerseGT hackathon?", answer: "Answer text here" },
    { question: "What should participants bring to the hackathon?", answer: "Answer text here" },
    { question: "Who is running the ImmerseGT event?", answer: "Answer text here" },
    { question: "Who can I contact for more information about ImmerseGT?", answer: "Answer text here" },
    { question: "Want to sponsor ImmerseGT?", answer: "Answer text here" }
  ];

  return (
    <div className="min-h-screen bg-[#0F0721] text-white p-8 flex items-center justify-center">
        <div className="max-w-4xl text-center">
            <div className="mb-12">
                <h1 className="text-5xl font-bold mb-6">FAQ</h1>
                <div className="text-gray-300">
                    <p>Still have some questions?</p>
                    <p>
                        Feel free to reach out to us on discord.
                    </p>
                </div>
            </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-lg ${openIndex === index ? 'bg-[#4C1D95]' : 'bg-[#6D28D9]'}`}
              initial={false}
            >
              <motion.button
                className={`w-full p-4 flex justify-between items-center text-left
                  ${openIndex === index 
                    ? 'bg-[#4C1D95] rounded-t-lg' 
                    : 'bg-[#6D28D9] rounded-lg hover:bg-[#5B21B6] transition-colors duration-200'
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
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 text-gray-100 bg-[#4C1D95]">
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