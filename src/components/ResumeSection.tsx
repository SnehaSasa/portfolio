"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="p-8 md:p-10 rounded-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] text-center">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-6">
            <FileDown className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Resume
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Download my resume or open in a new tab
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1moSchdgthZYu5o9gtKDwskHyhGtqmRpG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white font-medium shadow-glow-violet hover:shadow-glow-indigo transition-all duration-300 hover:scale-105"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1moSchdgthZYu5o9gtKDwskHyhGtqmRpG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-200 font-medium hover:bg-white/10 transition-all duration-300"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
