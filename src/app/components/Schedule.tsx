"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function Schedule() {
  // Replace this with your actual schedule data
  const scheduleData = [
    {
      day: "Friday",
      date: "April 4th, 2025",
      events: [
        { time: "12:00 PM", title: "Check-In" },
        { time: "1:00 PM", title: "Building With Coda" },
        { time: "2:00 PM", title: "Intro Workshop" },
        { time: "3:00 PM", title: "Sponsor Fair" },
        { time: "5:00 PM", title: "Opening Ceremony" },
        { time: "6:00 PM", title: "Team Formation" },
        { time: "7:00 PM", title: "Hacking Begins" },
        { time: "10:00 PM", title: "Midnight Snack" },
      ],
    },
    {
      day: "Saturday",
      date: "April 5th, 2025",
      events: [
        { time: "12:00 AM", title: "Midnight Snack" },
        { time: "8:00 AM", title: "Breakfast" },
        { time: "9:00 AM", title: "Office Hours + Mentor Time" },
        { time: "12:00 PM", title: "Lunch" },
        { time: "2:00 PM", title: "Workshop 1" },
        { time: "5:00 PM", title: "Workshop 2" },
        { time: "7:00 PM", title: "Dinner" },
        { time: "9:00 PM", title: "Fun Activity" },
      ],
    },
    {
      day: "Sunday",
      date: "April 6th, 2025",
      events: [
        { time: "12:00 AM", title: "Midnight Snack" },
        { time: "8:00 AM", title: "Hacking Ends" },
        { time: "9:00 AM", title: "Breakfast" },
        { time: "10:00 AM", title: "Project Expo + Judging" },
        { time: "12:00 PM", title: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <motion.section
      // Simple fade-in + slide-up animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={twMerge(
        "relative w-full overflow-hidden py-16",
        // Purple-to-dark gradient background
        "bg-gradient-to-b from-[#1C121E] via-[#200630] to-[#0F0721]"
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-white">
          ImmerseGT 2025 Schedule (Tentative)
        </h2>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleData.map((daySchedule, idx) => (
            <motion.div
              key={idx}
              // Hover effect (optional)
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              {/* Day + Date */}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {daySchedule.day}
                </h3>
                <p className="text-sm text-violet-200">
                  {daySchedule.date}
                </p>
              </div>

              {/* Events List */}
              <ul className="space-y-3">
                {daySchedule.events.map((event, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-sm text-gray-300">
                      {event.time}
                    </span>
                    <span className="text-white font-medium">
                      {event.title}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
