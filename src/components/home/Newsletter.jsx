import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address");
      return;
    }

    setStatus("Subscribed successfully!");
    setEmail("");

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-12 md:py-20 border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">

        {/* Title */}
        <motion.h2
          className="text-[34px] md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
          style={{ color: "var(--text-primary)" }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Stay in the loop
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[15px] md:text-base mb-6 md:mb-8 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          Get updates on new features, tips, and stories from teams using Flowbit.
        </motion.p>

        {/* Form */}
        <motion.div
          className="flex gap-3 max-w-lg mx-auto mb-3 md:mb-4"
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border focus:outline-none focus:ring-2 text-sm"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          />

          <motion.button
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="px-6 py-3 text-sm font-medium whitespace-nowrap"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-primary)",
            }}
          >
            Subscribe
          </motion.button>
        </motion.div>

        {/* Status */}
        {status && (
          <motion.p
            className="text-sm mb-2"
            style={{
              color:
                status.includes("Subscribed successfully")
                  ? "#22c55e"
                  : "#ef4444",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {status}
          </motion.p>
        )}

        {/* Small text */}
        <motion.p
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          By subscribing, you agree to our Terms and Privacy Policy.
        </motion.p>

      </div>
    </motion.section>
  );
};

export default Newsletter;