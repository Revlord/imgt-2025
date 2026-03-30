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
  activeBg: string;
  cardBorder: string;
  events: ScheduleEvent[];
};

const schedule: DaySchedule[] = [
  {
    day: "Friday",
    label: "Friday",
    color: "text-purple-300",
    activeBg: "bg-purple-600/30 border-purple-500",
    cardBorder: "border-purple-500/30",
    events: [
      { title: "Initial Check-In", time: "12pm – 4pm", location: "Klaus Atrium" },
      { title: "Workshop #1", time: "1pm – 2pm", location: "Klaus 1116 Seminar Room" },
      { title: "Workshop #2", time: "2pm – 3pm", location: "Klaus 1116 Seminar Room" },
      { title: "Dinner", time: "5:00pm – 6:30pm", location: "Klaus Atrium" },
      { title: "Opening Ceremony", time: "6:30pm – 8:30pm", location: "Klaus Atrium" },
      { title: "Glowstick Social + Team Formation", time: "8:30pm – 10pm", location: "Klaus Atrium" },
      { title: "HACKING BEGINS", time: "10pm", highlight: true },
      { title: "Midnight Snack", time: "12am – 12:30am", location: "ISyE Atrium 2nd Floor" },
    ],
  },
  {
    day: "Saturday",
    label: "Saturday",
    color: "text-green-300",
    activeBg: "bg-green-600/30 border-green-500",
    cardBorder: "border-green-500/30",
    events: [
      { title: "Breakfast", time: "8am – 9am", location: "Klaus Atrium" },
      { title: "Office Hours", time: "9:00am – 10:00am", location: "Klaus Atrium" },
      { title: "Lunch", time: "12:30pm – 1:30pm", location: "Klaus Atrium" },
      { title: "Workshop #3", time: "3pm – 4pm", location: "Klaus 1116 Seminar Room" },
      { title: "Dinner", time: "7:30pm – 8:30pm", location: "Klaus Atrium" },
      { title: "Get your T-Shirt!", time: "9:30pm – 10:30pm", location: "Klaus Atrium" },
    ],
  },
  {
    day: "Sunday",
    label: "Sunday",
    color: "text-rose-300",
    activeBg: "bg-rose-600/30 border-rose-500",
    cardBorder: "border-rose-500/30",
    events: [
      { title: "Midnight Snack", time: "12am – 12:30am", location: "Klaus Atrium" },
      { title: "Hacking Ends", time: "8am", highlight: true },
      { title: "Breakfast", time: "8am – 9am", location: "Klaus Atrium" },
      { title: "Judging Expo", time: "11am – 1pm", location: "Klaus Atrium" },
      { title: "Closing Ceremony", time: "3pm – 4pm", location: "Klaus Atrium" },
    ],
  },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={twMerge(
        "relative w-full overflow-hidden py-16",
        "bg-gradient-to-b from-[#1C121E] via-[#200630] to-[#0F0721]"
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-white">
          ImmerseGT 2026 Schedule
        </h2>
        <p className="text-center text-sm text-violet-300/70 mb-10">
          Tentative — subject to change
        </p>

        {/* Day Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i)}
              className={twMerge(
                "px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200",
                i === activeDay
                  ? day.activeBg + " text-white"
                  : "border-white/10 text-white/60 hover:text-white hover:border-white/30"
              )}
            >
              {day.label}
              <span className="ml-1.5 text-xs opacity-70">{day.events.length}</span>
            </button>
          ))}
        </div>

        {/* Schedule Cards */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {schedule[activeDay].events.map((event, i) => (
                <motion.div
                  key={`${event.title}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className={twMerge(
                    "rounded-lg p-4 border backdrop-blur-sm",
                    event.highlight
                      ? "bg-violet-500/20 border-violet-400/40"
                      : "bg-white/5 " + schedule[activeDay].cardBorder
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4
                      className={twMerge(
                        "font-semibold text-base",
                        event.highlight ? "text-violet-200" : "text-white"
                      )}
                    >
                      {event.title}
                    </h4>
                    <span className={twMerge("text-sm font-medium shrink-0", schedule[activeDay].color)}>
                      {event.time}
                    </span>
                  </div>
                  {event.location && (
                    <p className="text-sm text-gray-400 mt-1">{event.location}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Location Card */}
        <div className="max-w-5xl mx-auto mt-10">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-violet-200 text-center">
              Location
            </h3>
            <p className="mt-3 mb-5 text-base sm:text-lg text-gray-200 text-center">
              755 Ferst Dr NW, Atlanta, GA 30332
            </p>
            <div className="w-full h-[320px] sm:h-[380px] overflow-hidden rounded-md border border-violet-300/20">
              <iframe
                title="Klaus Atrium Map"
                src="https://www.google.com/maps?q=755+Ferst+Dr+NW,+Atlanta,+GA+30332&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/jr95Q4q2BvZYafWG9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
