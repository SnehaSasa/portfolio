"use client";

import { motion } from "framer-motion";
import { expertiseCategories } from "@/data/content";
import { Cpu, Code, Database, Globe, Layers, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "AI & Generative AI": Cpu,
  "Python & ML Libraries": Code,
  "Programming Languages": Code,
  "Web & Frameworks": Globe,
  "Databases & Cloud": Database,
  "CS Fundamentals & Tools": Wrench,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function Expertise() {
  return (
    <section id="expertise" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Technical Expertise
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Technologies and tools I work with to build AI systems
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {expertiseCategories.map((cat) => {
          const Icon = categoryIcons[cat.title] || Cpu;
          const skills = cat.items.split(", ");
          return (
            <motion.div
              key={cat.title}
              variants={cardItem}
              className={cn(
                "p-5 rounded-2xl backdrop-blur-xl border border-white/10",
                "bg-gradient-to-br from-white/5 to-white/[0.02]",
                "hover:border-indigo-500/30 hover:shadow-glow-indigo/20 transition-all duration-300",
                "group"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs text-slate-300 bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
