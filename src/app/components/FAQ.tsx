"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What is ImmerseGT?", answer: "ImmerseGT is a 36 hour long hackathon at Georgia Tech focusing mainly on working and developing XR (Extended Reality) applications and hardware." },
  { question: "Who is eligible to participate in ImmerseGT?", answer: "Any college student over the age of 18 is eligible to participate and demo their application to this hackathon" },
  { question: "What are the competition categories at ImmerseGT?", answer: "TBD" },
  { question: "Where will ImmerseGT take place?", answer: "ADC XR Makerspace @ 12pm on April 10th, 2026." },
  { question: "How do I participate in ImmerseGT?", answer: "Finish your application on Luma by clicking 'Apply Now'. Acceptances will be decided on a rolling basis. We only have limited seats so apply fast!" },
  { question: "What resources will be provided during ImmerseGT?", answer: "You will have access to industry-leading mentors and software devs in the XR space. Moreover we will hold sponsor workshops throughout the event for you to engage in learning. Moreover, the best part, we will be providing a XR Headset through a need-only basis for a full team (5 people)" },
  { question: "How will judging and prizes work at ImmerseGT?", answer: "We will have industry leading individuals as well as senior developers in the XR industry judging the event! Prizes will be handed directly to the winners during the closing ceremony." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] py-24 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            FAQs
          </h2>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">
            Still have questions? Reach out on Discord.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="rounded-xl border border-violet-500/10 overflow-hidden bg-[var(--bg-card)]"
                layout
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-violet-500/[0.04] transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-display text-sm font-medium text-[var(--text-primary)] pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    className="flex-shrink-0 text-[var(--text-muted)]"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-[var(--text-body)] leading-relaxed border-t border-violet-500/[0.06] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
