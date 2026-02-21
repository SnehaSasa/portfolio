"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Presentation,
  FileText,
  Award,
  Trophy,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import {
  conferences,
  publications,
  certifications,
  achievements,
  courses,
} from "@/data/research";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "conferences", label: "Conference Presentations", icon: Presentation },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "courses", label: "Courses", icon: BookOpen },
];

export function Research() {
  const [activeTab, setActiveTab] = useState("conferences");

  return (
    <section id="research" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Research & Recognition
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Conferences, publications, certifications, and courses
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "bg-indigo-500/30 text-white border border-indigo-500/50"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {activeTab === "conferences" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {conferences.map((c) => (
                <a
                  key={c.title}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-indigo-400 text-sm">{c.event}</p>
                  <p className="text-slate-500 text-sm">{c.org} · {c.date}</p>
                  <span className="inline-flex items-center gap-1 text-indigo-400 text-sm mt-2">
                    View <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === "publications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {publications.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.authors}</p>
                  <p className="text-slate-500 text-sm">{p.venue} · {p.date}</p>
                  <span className="inline-flex items-center gap-1 text-indigo-400 text-sm mt-2">
                    IEEE Xplore <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {certifications.map((c) => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1">{c.name}</h3>
                  {c.number && <p className="text-slate-500 text-sm">#{c.number}</p>}
                  <p className="text-slate-400 text-sm">
                    Earned {c.earned}
                    {c.score && ` · ${c.score}`}
                  </p>
                  <span className="inline-flex items-center gap-1 text-indigo-400 text-sm mt-2">
                    View certificate <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {achievements.map((a) => (
                <div
                  key={a.name}
                  className="p-5 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5"
                >
                  <h3 className="font-semibold text-white mb-1">{a.name}</h3>
                  <p className="text-slate-400 text-sm">{a.detail}</p>
                  {a.earned && <p className="text-slate-500 text-sm mt-1">{a.earned}</p>}
                  {"link" in a && a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 text-sm mt-2"
                    >
                      View profile <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "courses" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {courses.map((c) => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl backdrop-blur-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all text-sm"
                >
                  <span className="text-white font-medium">{c.name}</span>
                  <span className="inline-flex items-center gap-1 text-indigo-400 ml-2">
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
