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
        {/* <span className="section-label">Technical Expertise</span> */}
        <h2 className="section-title mb-3 section-title-glow gradient-text">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {expertiseCategories.map((cat) => {
          const Icon = categoryIcons[cat.title] || Cpu;
          const skills = cat.items.split(", ");

          return (
            <motion.div
              key={cat.title}
              variants={cardItem}
              className="glass-card p-5 rounded-2xl group hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold card-title">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="glass-pill text-xs">
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