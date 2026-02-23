import React from "react";
import { motion } from "framer-motion";
import heroTeam from "../../assets/hero-team.png";

const Hero = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full pt-6 md:pt-16 pb-6 md:pb-8"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[28px] md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="md:hidden">Welcome to Flowbit</span>
              <span className="hidden md:inline">
                Welcome to
                <br />
                Flowbit
              </span>
            </motion.h1>

            <motion.p
              className="text-[14px] md:text-lg lg:text-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <span className="md:hidden">
                Flowbit brings projects, tasks, chat, meetings, documents and
                performance insights into one seamless workspace. Create your
                first project and start organizing your workflow today.
              </span>
              <span className="hidden md:inline">
                Flowbit brings projects, tasks, chat,
                <br />
                meetings, documents and performance
                <br />
                insights into one seamless workspace.
                <br />
                Create your first project and start organizing
                <br />
                your workflow today.
              </span>
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start gap-3 pt-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <button
                className="px-8 md:px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "var(--accent-color)",
                  color: "var(--bg-primary)",
                }}
              >
                Get started
              </button>

              <button
                onClick={scrollToFeatures}
                className="px-8 md:px-5 py-2.5 border text-sm font-medium hover:opacity-70 transition-opacity"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                Features
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <div className="flex justify-center md:justify-start mt-6 md:mt-0">
            <div className="w-full max-w-sm md:max-w-xl">
              <motion.img
                src={heroTeam}
                alt="Team collaboration illustration"
                className="w-full h-auto"
                initial={{ x: 100, opacity: 0, scale: 0.9 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],   // floating
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;