import React from "react";
import { motion } from "framer-motion";

const WorkflowSection = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="w-full py-8 md:py-12 lg:py-20 border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">

          {/* Heading */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs md:text-sm lg:text-base font-semibold mb-2 md:mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Workflow
            </p>

            <h2
              className="text-[28px] md:text-4xl lg:text-6xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Work smarter,
              <br />
              collaborate faster
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            className="space-y-4 md:space-y-6 lg:space-y-8"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p
              className="text-[15px] md:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              From planning to execution, everything happens in one place. No
              more switching between tools. No more lost messages. Just pure
              productivity.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex gap-3"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 md:flex-none md:px-6 lg:px-10 py-2.5 lg:py-3 text-sm lg:text-lg font-medium"
                style={{
                  backgroundColor: "var(--accent-color)",
                  color: "var(--bg-primary)",
                }}
              >
                Start
              </motion.button>

              <motion.button
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFeatures}
                className="flex-1 md:flex-none md:px-6 lg:px-10 py-2.5 lg:py-3 border text-sm lg:text-lg font-medium"
                style={{
                  borderColor: "var(--accent-color)",
                  color: "var(--accent-color)",
                  backgroundColor: "transparent",
                }}
              >
                Explore
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default WorkflowSection;