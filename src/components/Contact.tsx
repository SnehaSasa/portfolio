"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "snehachennai2003@gmail.com", href: "mailto:snehachennai2003@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6381512426", href: "tel:+916381512426" },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title mb-3 section-title-glow gradient-text">
          Let&apos;s Connect
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Open to AI roles and collaborations
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10"
      >
        {contactItems.map((item) => {
          const Icon = item.icon;
          const Wrapper = item.href ? "a" : "div";
          return (
            <Wrapper
              key={item.label}
              {...(item.href ? { href: item.href } : {})}
              className="glass-card group p-6 rounded-2xl text-center hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-violet-500/20 text-violet-400 mb-3 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-slate-500 text-sm">{item.label}</p>
              <p className="text-slate-100 font-medium mt-1">{item.value}</p>
            </Wrapper>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="mailto:snehachennai2003@gmail.com"
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl"
        >
          <Mail className="w-5 h-5" />
          Send Me an Email
        </a>
      </motion.div>
    </section>
  );
}
