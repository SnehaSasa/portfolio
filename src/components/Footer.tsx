"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { hero } from "@/data/content";

export function Footer() {
  const social = hero.social;
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Github,
    Linkedin,
    Mail,
    Phone,
  };

  return (
    <footer className="border-t border-white/10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          Sneha A © 2026 · Built with Fervor, Code & Curiosity
        </p>
        <div className="flex items-center gap-4">
          {social.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="icon-glass p-2 rounded-lg text-slate-400"
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
