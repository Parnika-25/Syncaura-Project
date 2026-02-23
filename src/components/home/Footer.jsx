import React, { useState } from "react";
import { Facebook, Instagram, X, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  const [footerStatus, setFooterStatus] = useState("");

  const handleFooterSubmit = (e) => {
    e.preventDefault();

    if (!footerEmail) {
      setFooterStatus("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(footerEmail)) {
      setFooterStatus("Please enter a valid email address");
      return;
    }

    setFooterStatus("Subscribed successfully!");
    setFooterEmail("");

    setTimeout(() => setFooterStatus(""), 3000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">

        {/* Desktop */}
        <div className="hidden min-[1020px]:grid min-[1020px]:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 lg:gap-20">

          {/* Flowbit */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: "var(--accent-color)" }}
            >
              FlowBit
            </h3>

            <p
              className="text-sm max-w-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Get updates on new features and product releases.
            </p>

            {/* Email */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="w-full md:w-[280px] lg:w-[344px] h-[44px] px-4 border rounded-lg text-sm focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              />
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFooterSubmit}
                className="w-full md:w-auto h-[44px] px-6 border text-sm font-medium rounded-lg"
                style={{
                  borderColor: "var(--accent-color)",
                  backgroundColor: "var(--accent-color)",
                  color: "var(--bg-primary)",
                }}
              >
                Subscribe
              </motion.button>
            </motion.div>

            {footerStatus && (
              <p
                className="text-xs"
                style={{
                  color: footerStatus.includes("success") ? "green" : "red",
                }}
              >
                {footerStatus}
              </p>
            )}
          </motion.div>

          {/* Columns */}
          {["Product", "About", "Social"].map((title, i) => (
            <motion.div
              key={title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h4
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h4>
              <ul
                className="space-y-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {["Item 1", "Item 2", "Item 3", "Item 4"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 border-t pt-6"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <div>© 2025 Flowbit</div>
            <div className="flex gap-4">
              {[Facebook, Instagram, X, Linkedin, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;