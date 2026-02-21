"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { career } from "@/data/content";
import { cn } from "@/lib/utils";

export function Career() {
  const [expandedId, setExpandedId] = useState<string | null>("fulltime");

  return (
    <section id="career" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Career Journey
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Work experience and internships
        </p>
      </motion.div>

      {/* Full-time vs Internship labels */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          Full-time
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          Internships
        </span>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/30 to-transparent" />

        {/* Full-time role */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-12 md:pl-16 pb-10"
        >
          <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-navy-900" />
          <div
            className={cn(
              "rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300",
              "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10",
              "hover:border-indigo-500/30"
            )}
          >
            <button
              type="button"
              className="w-full p-5 text-left flex items-start justify-between gap-4"
              onClick={() => setExpandedId(expandedId === "fulltime" ? null : "fulltime")}
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                  Full-time
                </span>
                <h3 className="font-semibold text-white text-lg">
                  {career.fullTime.title}
                </h3>
                <p className="text-indigo-400 text-sm mt-0.5">{career.fullTime.company}</p>
                <p className="text-slate-500 text-sm">{career.fullTime.location} · {career.fullTime.period}</p>
              </div>
              <ChevronDown
                className={cn("w-5 h-5 text-slate-400 shrink-0 transition-transform", expandedId === "fulltime" && "rotate-180")}
              />
            </button>
            <AnimatePresence>
              {expandedId === "fulltime" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5"
                >
                  <ul className="space-y-2 text-slate-300 text-sm mb-4">
                    {career.fullTime.description.map((d) => (
                      <li key={d.slice(0, 30)} className="flex gap-2">
                        <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {career.fullTime.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Internships */}
        {career.internships.map((intern, i) => {
          const id = `intern-${i}`;
          const isOpen = expandedId === id;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
              className="relative pl-12 md:pl-16 pb-10"
            >
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-violet-500/80 ring-4 ring-navy-900" />
              <div
                className={cn(
                  "rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300",
                  "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10",
                  "hover:border-violet-500/30"
                )}
              >
                <button
                  type="button"
                  className="w-full p-5 text-left flex items-start justify-between gap-4"
                  onClick={() => setExpandedId(isOpen ? null : id)}
                >
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-2">
                      Internship
                    </span>
                    <h3 className="font-semibold text-white">{intern.role}</h3>
                    <p className="text-violet-400 text-sm mt-0.5">{intern.company}</p>
                    <p className="text-slate-500 text-sm">{intern.location} · {intern.period}</p>
                  </div>
                  <ChevronDown
                    className={cn("w-5 h-5 text-slate-400 shrink-0 transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <ul className="space-y-2 text-slate-300 text-sm mb-4">
                        {Array.isArray(intern.description)
                          ? intern.description.map((d) => (
                              <li key={d.slice(0, 30)} className="flex gap-2">
                                <span className="text-violet-400 mt-1.5 shrink-0">▸</span>
                                {d}
                              </li>
                            ))
                          : (
                              <li className="flex gap-2">
                                <span className="text-violet-400 mt-1.5 shrink-0">▸</span>
                                {intern.description}
                              </li>
                            )}
                      </ul>
                      {Array.isArray(intern.tags) && intern.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {intern.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
