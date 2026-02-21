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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Open to product-driven AI roles and collaborations
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
              className="p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-indigo-500/20 text-indigo-400 mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-slate-500 text-sm">{item.label}</p>
              <p className="text-white font-medium mt-1">{item.value}</p>
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
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white font-medium shadow-glow-violet hover:shadow-glow-indigo transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Send Me an Email
        </a>
      </motion.div>
    </section>
  );
}
