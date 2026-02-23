import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <motion.section
      className="w-full py-8 md:py-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p
            className="text-sm md:text-sm font-medium mb-2 md:mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Growth
          </p>

          <h2
            className="text-[30px] md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Millions trust Flowbit daily
          </h2>

          <p
            className="text-[14px] md:text-base max-w-10xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Over two million users worldwide depend on Flowbit to manage their
            work. Students, teams, and organizations choose us because we
            deliver results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-16 mb-6 pt-1 md:mb-8">

          {/* Stat 1 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p
              className="text-[40px] md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              2M+
            </p>
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Active users across the globe
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p
              className="text-[40px] md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              98%
            </p>
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              User satisfaction rating from our community
            </p>
          </motion.div>

        </div>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-4 mb-12 pt-2 md:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border text-md font-medium"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-secondary)",
            }}
          >
            Learn
          </motion.button>

          <motion.button
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-md font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            <span>Arrow</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p
            className="text-center text-xs md:text-sm mb-6 pt-5 md:mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Trusted by top students all the world
          </p>

          <div className="overflow-hidden relative w-full flex justify-center">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-40px * 6 - 1.5rem * 6)); }
                }
                .animate-scroll {
                  animation: scroll 15s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `,
              }}
            />

            <div className="relative max-w-[700px] overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-[10px] flex-shrink-0"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default StatsSection;