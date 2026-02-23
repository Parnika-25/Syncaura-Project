import React from "react";
import { motion } from "framer-motion";
import ctaTeamMeeting from "../../assets/cta-team-meeting.png";

const CTABanner = () => {
  return (
    <motion.section
      className="w-full py-8 md:py-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-24">
        <div className="relative h-[300px] md:h-80 lg:h-87 overflow-hidden rounded-xl md:rounded-lg">

          {/* Background Image with zoom + float */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <motion.img
              src={ctaTeamMeeting}
              alt="Team meeting"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-6 py-12 md:py-20 space-y-5 md:space-y-6">

            <motion.h2
              className="text-[28px] md:text-3xl lg:text-5xl font-bold text-white max-w-2xl leading-tight"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Work smarter, faster, together
            </motion.h2>

            <motion.p
              className="text-[15px] md:text-base lg:text-lg text-white/90 max-w-xl"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Manage tasks, chat, meet, and track performance all in one place.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-3 md:gap-4 w-full max-w-md"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-white text-gray-900 text-sm font-medium"
              >
                Get started
              </motion.button>

              <motion.button
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 border-2 border-white bg-transparent text-white text-sm font-medium"
              >
                Learn more
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTABanner;