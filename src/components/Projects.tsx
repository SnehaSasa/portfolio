"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Cpu, Code2 } from "lucide-react";
import { aiMlProjects, sweProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={cardItem}
          className="glass-card group rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:-translate-y-1 transition-all duration-300"
        >
            <div className="p-5 flex flex-col h-full">
              <h3 className="font-semibold card-title text-lg mb-2 group-hover:text-cyan-300">
                {project.title}
              </h3>
              {project.metrics && (
                <p className="text-xs text-indigo-400 mb-3">{project.metrics}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="glass-pill text-xs text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5 text-slate-400 text-sm flex-1 mb-4">
                {project.description.slice(0, 3).map((d) => (
                  <li key={d.slice(0, 40)} className="flex gap-2">
                    <span className="text-indigo-400 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<"aiml" | "swe">("aiml");

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        {/* <span className="section-label">Featured Projects</span> */}
        <h2 className="section-title mb-3 section-title-glow gradient-text">
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          AI/ML and software engineering projects with measurable impact
        </p>

        <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-0 p-1 rounded-2xl glass-card border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
          <button
            type="button"
            onClick={() => setActiveTab("aiml")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              activeTab === "aiml"
                ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.25)] shadow-glow-indigo/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
          >
            <Cpu className="w-4 h-4" />
            AI / ML Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("swe")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              activeTab === "swe"
                ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-glow-indigo/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
          >
            <Code2 className="w-4 h-4" />
            Software Engineering Projects
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === "aiml" ? (
          <motion.div
            key="aiml"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectGrid projects={aiMlProjects} />
          </motion.div>
        ) : (
          <motion.div
            key="swe"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectGrid projects={sweProjects} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
