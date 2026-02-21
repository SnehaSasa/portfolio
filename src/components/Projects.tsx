"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/data/projects";
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

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          AI/ML and data science projects with measurable impact
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={cardItem}
            className={cn(
              "group rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10",
              "bg-gradient-to-br from-white/5 to-white/[0.02]",
              "hover:border-indigo-500/30 hover:shadow-glow-indigo/20 hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <div className="p-5 flex flex-col h-full">
              <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              {project.metrics && (
                <p className="text-xs text-indigo-400 mb-3">{project.metrics}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-slate-400"
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
    </section>
  );
}
