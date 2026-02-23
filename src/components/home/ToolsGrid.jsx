import React from "react";
import { motion } from "framer-motion";

const ToolsGrid = () => {
  const tools = [
    {
      title: "Task & Project Management",
      description:
        "Create tasks, set priorities, add deadlines, and track progress with Kanban or Gantt views — everything stays organized.",
    },
    {
      title: "Real-time Chat",
      description:
        "Chat instantly, share files, and collaborate in private or group channels with real-time updates.",
    },
    {
      title: "Meetings & Video Calls",
      description:
        "Schedule meetings with auto Google Meet/Zoom links, calendar sync, and notes — all in one place.",
    },
    {
      title: "Attendance & Leave Tracker",
      description:
        "Mark attendance, request or approve leave, and monitor team availability easily.",
    },
  ];

  return (
    <motion.section
      id="pricing"
      className="w-full pt-10 md:pt-12 pb-8 md:pb-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p
            className="text-xs md:text-sm font-medium mb-2 md:mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Tools
          </p>

          <h2
            className="text-[34px] md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Everything you need to work
          </h2>

          <p
            className="text-xl md:text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Each feature built to save time and eliminate friction from your daily
            workflow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="p-5 md:p-6 rounded-2xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <h3
                className="text-[17px] md:text-lg font-semibold mb-3 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {tool.title}
              </h3>

              <p
                className="text-[14px] md:text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default ToolsGrid;