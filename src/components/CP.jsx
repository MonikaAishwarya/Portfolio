import React, { memo } from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = memo(function Achievements() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-4xl"
      >

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex items-center gap-4 text-foreground">
          <Trophy className="w-10 h-10 text-primary" />
          Achievements & Certifications
        </h2>


        <div className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-8 w-full">

          <ul className="space-y-4 text-lg text-muted-foreground">

            <li>
              🏆 LeetCode Rating: 
              <span className="text-foreground font-medium">
                {" "}1787
              </span>
              {" "}with 206+ problems solved.
            </li>


            <li>
              🏆 Selected for 
              <span className="text-foreground font-medium">
                {" "}Smart India Hackathon (College Level), 2024
              </span>.
            </li>


            <li>
              🏆 Served as 
              <span className="text-foreground font-medium">
                {" "}Senior Head Girl
              </span>,
              leading and coordinating student activities.
            </li>


            <li>
              📜 AWS Academy – Data Engineering Internship Certification
            </li>


            <li>
              📜 NPTEL – Programming Through Java Certification
            </li>

          </ul>

        </div>

      </motion.div>

    </div>
  );
});

export default Achievements;