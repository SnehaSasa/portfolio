"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";
import { about } from "@/data/content";
import { cn } from "@/lib/utils";

const iconMap = {
  Education: GraduationCap,
  Location: MapPin,
  Employment: Briefcase,
  Specialization: Sparkles,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title mb-3 section-title-glow gradient-text">
          Who I Am
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">{about.bio}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
      >
        {about.infoCards.map((card) => {
          const Icon = iconMap[card.title as keyof typeof iconMap];
          return (
            <motion.div
              key={card.title}
              variants={item}
              className="glass-card group p-5 rounded-2xl hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                {Icon && (
                  <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400 shrink-0 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold card-title mb-1">{card.title}</h3>
                  <p className="text-slate-400 text-sm">{card.value}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {about.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="glass-card p-5 rounded-2xl text-center hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300"
          >
            <p className="text-2xl md:text-3xl font-bold stat-number">{stat.value}</p>
            <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-2xl hover:border-violet-400/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300"
      >
        <h3 className="font-semibold card-title mb-3">Currently Working On</h3>
        <ul className="space-y-2">
          {about.workingOn.map((work) => (
            <li key={work} className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
              {work}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
