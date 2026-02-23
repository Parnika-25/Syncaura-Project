import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "pricing", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // highlight section (hover)
  const highlightSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.classList.remove("section-focus");
    void element.offsetWidth; // restart animation
    element.classList.add("section-focus");
  };

  // scroll + highlight (click)
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      highlightSection(sectionId);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Desktop */}
      <div
        className="hidden md:flex max-w-7xl mx-auto px-6 h-20 items-center justify-between border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        {/* Left */}
        <div className="gap-20 flex items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
            style={{ color: "var(--accent-color)" }}
          >
            FLOWBIT
          </motion.div>

          {/* Menu */}
          <nav className="flex items-center gap-8">
            {["home", "features", "pricing", "contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                onMouseEnter={() => highlightSection(item)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-sm font-medium border-b-2 pb-1 transition-all"
                style={{
                  color:
                    activeSection === item
                      ? "var(--accent-color)"
                      : "var(--text-secondary)",
                  borderColor:
                    activeSection === item
                      ? "var(--accent-color)"
                      : "transparent",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ rotate: 180, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-md"
          >
            {theme === "light" ? (
              <Sun className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
            )}
          </motion.button>

          <motion.a
            whileHover={{ y: -2 }}
            href="#login"
            className="text-sm font-medium"
            style={{ color: "var(--accent-color)" }}
          >
            Login
          </motion.a>

          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm font-medium rounded-md"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-primary)",
            }}
          >
            Start Free
          </motion.button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-5">
          <div
            className="text-[23px] font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            FLOWBIT
          </div>

          <button
            className="px-4 py-1 text-sm font-medium rounded-[10px]"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-primary)",
            }}
          >
            Start Free
          </button>
        </div>

        <div className="flex justify-center px-4 py-5 pb-3">
          <nav
            className="inline-flex items-center gap-5 px-6 py-2.5 rounded-[15px] border overflow-x-auto"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-primary)",
            }}
          >
            {["home", "features", "pricing", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                onMouseEnter={() => highlightSection(item)}
                className="text-sm font-medium whitespace-nowrap"
                style={{
                  color:
                    activeSection === item
                      ? "var(--accent-color)"
                      : "var(--text-secondary)",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;