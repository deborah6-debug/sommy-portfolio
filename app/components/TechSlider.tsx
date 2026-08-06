"use client";

import { motion } from "framer-motion";

const techs = [
  "JavaScript",
  "CSS",
  "Tailwind CSS",
  "Typescript",
  "React",
  "JavaScript",
  "Python",
  "SQL",
  "Rest APIs"
];

export default function TechSlider() {
  return (
    <div className="py-4 overflow-hidden border-y border-[#f59e0b]/10 bg-[#f59e0b]/[0.02]">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techs.map((tech, index) => (
            <span
              key={`first-${index}`}
              className="text-[#f59e0b]/60 text-sm font-light tracking-wider mx-1"
            >
              {tech}
              {index < techs.length - 1 && (
                <span className="mx-3 text-white/20">/</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techs.map((tech, index) => (
            <span
              key={`second-${index}`}
              className="text-[#f59e0b]/60 text-sm font-light tracking-wider mx-1"
            >
              {tech}
              {index < techs.length - 1 && (
                <span className="mx-3 text-white/20">/</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}