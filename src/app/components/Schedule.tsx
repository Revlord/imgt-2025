"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

type ScheduleEvent = {
  title: string;
  time: string;
  location?: string;
  highlight?: boolean;
};

type DaySchedule = {
  day: string;
  label: string;
  color: string;
  dotColor: string;
  activeBg: string;
  cardBorder: string;
  events: ScheduleEvent[];
};

const latestScheduleUrl = "https://immersegt26.notion.site/schedule";

const schedule: DaySchedule[] = [
  {
    day: "Friday",
    label: "Friday",
    color: "text-violet-300",
    dotColor: "bg-violet-400",
    activeBg: "bg-violet-600/20 border-violet-500/50",
    cardBorder: "border-violet-500/10",
    events: [
      { title: "Initial Check-In", time: "12pm – 4pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Intro to XR Workshop - Led by PIXL", time: "1pm – 2pm", location: "ISyE Main 228" },
      { title: "PICO Workshop", time: "2pm – 3pm", location: "ISyE Main 228" },
      { title: "Spectacles Workshop", time: "4pm – 5pm", location: "ISyE Main 228" },
      { title: "Dinner", time: "5:00pm – 6:30pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Opening Ceremony", time: "6:30pm – 8:30pm", location: "Instructional Center 103" },
      { title: "Glowstick Social + Team Formation", time: "8:30pm – 10pm", location: "ISyE Courtyard" },
      { title: "HACKING BEGINS", time: "9pm", highlight: true },
      { title: "Midnight Snack", time: "12am – 12:30am", location: "ISyE Main Atrium 2nd Floor" },
    ],
  },
  {
    day: "Saturday",
    label: "Saturday",
    color: "text-emerald-300",
    dotColor: "bg-emerald-400",
    activeBg: "bg-emerald-600/20 border-emerald-500/50",
    cardBorder: "border-emerald-500/10",
    events: [
      { title: "Breakfast", time: "8am – 9am", location: "ISyE Main Atrium 2nd Floor" },
      { title: "BEATSABER Tournament by Clemson VR", time: "10:30am – 2pm", location: "ADC XR Makerspace" },
      { title: "Github Copilot Workshop by MLH", time: "11am – 12pm", location: "ISyE Main 228" },
      { title: "Lunch", time: "12:30pm – 1:30pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Tanit XR Workshop", time: "2pm – 3pm", location: "ISyE Main 228" },
      { title: "TechTogether Meetup with MLH", time: "5:30pm – 6:30pm", location: "ISyE Main 228" },
      { title: "Fun Event with MLH", time: "6:30pm – 7:30pm", location: "ISyE Main 228" },
      { title: "Dinner", time: "7:30pm – 8:30pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Get your T-Shirt!", time: "9:30pm – 10:30pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Midnight Snack", time: "12am – 12:30am", location: "ISyE Main Atrium 2nd Floor" },
    ],
  },
  {
    day: "Sunday",
    label: "Sunday",
    color: "text-rose-300",
    dotColor: "bg-rose-400",
    activeBg: "bg-rose-600/20 border-rose-500/50",
    cardBorder: "border-rose-500/10",
    events: [
      { title: "Hacking Ends", time: "8am", highlight: true },
      { title: "Breakfast", time: "8am – 9am", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Judging Expo", time: "11am – 1pm", location: "ISyE Main Atrium 2nd Floor" },
      { title: "Lunch (On your own)", time: "1pm – 2pm" },
      { title: "Closing Ceremony", time: "3pm – 4pm", location: "Instructional Center 103" },
    ],
  },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const active = schedule[activeDay];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden py-20 bg-[var(--bg-dark)] grain"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Decorative circles — top right */}
      <svg viewBox="0 0 400 400" fill="none" className="absolute -top-16 -right-16 w-[280px] h-[280px] opacity-[0.025] pointer-events-none">
        {[55, 95, 140, 190].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1.5" className="text-violet-400" />
        ))}
      </svg>

      {/* Decorative circles — bottom left */}
      <svg viewBox="0 0 400 400" fill="none" className="absolute -bottom-24 -left-20 w-[320px] h-[320px] opacity-[0.02] pointer-events-none">
        {[65, 110, 160].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1" className="text-violet-400" />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-2 text-[var(--text-primary)]">
          Schedule
        </h2>
        <p className="text-center font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-12">
          Tentative — subject to change
        </p>
        <div className="flex justify-center mb-10">
          <a
            href={latestScheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 py-2 rounded-full border border-violet-500/30 text-violet-200 font-mono text-[11px] uppercase tracking-wider hover:bg-violet-500/10 transition-colors duration-300"
          >
            View Latest Schedule on Notion
          </a>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i)}
              className={twMerge(
                "px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase border transition-all duration-200",
                i === activeDay
                  ? day.activeBg + " text-white"
                  : "border-violet-500/10 text-[var(--text-muted)] hover:text-[var(--text-body)] hover:border-violet-500/20"
              )}
            >
              {day.label}
              <span className="ml-1.5 text-[10px] opacity-50">{day.events.length}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/20 via-violet-500/10 to-transparent hidden sm:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {active.events.map((event, i) => (
                <motion.div
                  key={`${event.title}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex gap-4 items-start group"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center pt-4 shrink-0">
                    <div
                      className={twMerge(
                        "w-2.5 h-2.5 rounded-full ring-2 ring-[var(--bg-dark)] transition-all duration-300",
                        event.highlight
                          ? "bg-violet-400 ring-violet-400/20 shadow-[0_0_8px_rgba(139,92,246,0.4)]"
                          : active.dotColor + " opacity-60 group-hover:opacity-100"
                      )}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={twMerge(
                      "flex-1 rounded-xl p-4 border transition-all duration-300",
                      event.highlight
                        ? "bg-violet-500/10 border-violet-400/25 grain"
                        : "bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] " + active.cardBorder
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4
                        className={twMerge(
                          "font-display font-semibold text-sm flex items-center gap-2",
                          event.highlight ? "text-violet-200" : "text-[var(--text-primary)]"
                        )}
                      >
                        {event.title}
                      </h4>
                      <span
                        className={twMerge(
                          "font-mono text-xs shrink-0 tabular-nums",
                          active.color
                        )}
                      >
                        {event.time}
                      </span>
                    </div>
                    {event.location && (
                      <p className="font-mono text-[11px] text-[var(--text-muted)] mt-1.5 flex items-center gap-1.5">
                        <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Location Card */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="relative rounded-2xl overflow-hidden border border-violet-500/10 grain">
            {/* Decorative bg image */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
              <img
                src="/brand_kit/ImmerseGT Circles.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-[3] bg-[var(--bg-card)]/80 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] text-center">
                Location
              </h3>
              <p className="mt-2 mb-5 font-mono text-xs tracking-wider text-[var(--text-muted)] text-center uppercase">
                755 Ferst Dr NW, Atlanta, GA 30332
              </p>
              <div className="mb-4 text-center">
                <a
                  href={latestScheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 rounded-full border border-violet-500/25 text-violet-200 font-mono text-[10px] uppercase tracking-wider hover:bg-violet-500/10 transition-colors duration-300"
                >
                  Latest updates on Notion
                </a>
              </div>
              <div className="w-full h-[300px] sm:h-[360px] overflow-hidden rounded-lg border border-violet-500/10">
                <iframe
                  title="Klaus Atrium Map"
                  src="https://www.google.com/maps?q=755+Ferst+Dr+NW,+Atlanta,+GA+30332&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 text-center">
                <a
                  href="https://maps.app.goo.gl/jr95Q4q2BvZYafWG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-2 rounded-full bg-violet-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-violet-700 transition-colors duration-300 glow-purple-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
