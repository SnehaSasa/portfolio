"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { resumes } from "@/data/content";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <span className="section-label block text-center mb-4">Resume</span>
        <div className="glass-card p-8 md:p-10 rounded-2xl text-center">
          <div className="inline-flex p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 mb-6">
            <FileDown className="w-12 h-12" />
          </div>
          <h2 className="section-title text-2xl gradient-text mb-2">
            Resume
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Download my resume or open in a new tab
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resumes.aiml}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href={resumes.aiml}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-200"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
