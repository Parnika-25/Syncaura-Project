import React from "react";
import { motion } from "framer-motion";
import dashboardPreview from "../../assets/workspace-dashboard.png";

const FeatureShowcase = () => {
  return (
    <motion.section
      id="features"
      className="w-full py-8 md:py-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-20"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2
            className="text-[19px] md:text-xl font-bold mb-3 md:mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Work Smarter. Collaborate Faster. Grow Together.
          </h2>
          <p
            className="text-md md:text-base max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From planning and collaboration to deployment and performance tracking — everything in one platform.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ backgroundColor: "var(--card-bg)" }}
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 p-5 md:p-10 lg:p-14">

            {/* Text */}
            <motion.div
              className="flex flex-col justify-start space-y-4 md:space-y-6"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h3
                className="text-[26px] md:text-3xl lg:text-4xl font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                From Start to Success — All in One Workspace
              </h3>

              <p
                className="text-[14px] leading-[30px] tracking-normal"
                style={{ color: "var(--text-primary)" }}
              >
                Flowbit streamlines your workflow from planning to execution.
                Manage projects, tasks, chats, meetings, documents, attendance,
                and performance — all inside one seamless and modern platform
                built to scale with your team.
              </p>
            </motion.div>

            {/* Image */}
            <div className="flex items-center pt-5 justify-center">
              <motion.div
                className="w-full max-w-xl rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
                style={{ backgroundColor: "var(--bg-secondary)" }}
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={dashboardPreview}
                  alt="dashboardPreview"
                  className="w-full h-auto"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeatureShowcase;