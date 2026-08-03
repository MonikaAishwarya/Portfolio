import React, { memo } from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

function ContactComponent() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >

        <h2 className="text-4xl sm:text-5xl font-bold flex items-center gap-3 text-foreground mb-5">
          <Mail className="w-10 h-10 text-primary" />
          Contact
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          I'm open to software development opportunities, collaborations,
          and interesting projects. Feel free to connect with me.
        </p>


        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:v.monika.aishwarya@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-white dark:bg-neutral-900 hover:scale-105 transition"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>


          <a
            href="https://www.linkedin.com/in/monika-aishwarya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-white dark:bg-neutral-900 hover:scale-105 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>


          <a
            href="http://github.com/MonikaAishwarya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-white dark:bg-neutral-900 hover:scale-105 transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>


          <a
            href="https://drive.google.com/file/d/1_9odWBpETlWGDSWGXWkMJAqSDGIUXL7a/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-white dark:bg-neutral-900 hover:scale-105 transition"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>

        </div>

      </motion.div>

    </div>
  );
}

export default memo(ContactComponent);