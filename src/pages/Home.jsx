import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import WorkflowSection from "../components/home/WorkflowSection";
import FeatureShowcase from "../components/home/FeatureShowcase";
import ToolsGrid from "../components/home/ToolsGrid";
import Testimonials from "../components/home/Testimonials";
import CTABanner from "../components/home/CTABanner";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/home/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      key={isDark ? "dark" : "light"}
      className="min-h-screen"
      initial={false}
      animate={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
        color: isDark ? "#f8f8f8" : "#000000",
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      <Navbar />
      <Hero />
      <StatsSection />
      <WorkflowSection />
      <FeatureShowcase />
      <ToolsGrid />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </motion.div>
  );
}