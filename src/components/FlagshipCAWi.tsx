"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Shield, Workflow } from "lucide-react";

export function FlagshipCAWi() {
  return (
    <section id="flagship" className="section-padding pt-8 md:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-4xl mx-auto"
      >
        <span className="section-label text-center block">Flagship Project</span>
        <h2 className="section-title mb-3 section-title-glow gradient-text text-center">
          CAWi — Enterprise Multi-Agent AI Platform
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Production agentic system at Aziro Technologies: planner–executor orchestration,
          semantic tool-routing, MCP gateway, HITL approvals, and resilience for a paying
          enterprise client.
        </p>

        <div className="glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(99,102,241,0.12)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Workflow className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-100">Multi-agent reasoning</p>
                <p className="text-xs text-slate-500 mt-0.5">LangGraph planner–executor</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-100">MCP + tool routing</p>
                <p className="text-xs text-slate-500 mt-0.5">Semantic retrieval over tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-100">Production hardening</p>
                <p className="text-xs text-slate-500 mt-0.5">Auth, HITL, circuit breakers</p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            CAWi lets employees interact with internal systems through natural language.
            I contributed across the core reasoning layer, authentication, tool integration,
            governance workflows, and deployment — with documented failure modes and tradeoffs.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/enterprise-ai-platform"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-sm font-medium shadow-glow-violet hover:shadow-glow-indigo transition-all duration-300 hover:scale-[1.02]"
            >
              Read the full case study
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#career"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-slate-200 text-sm font-medium hover:bg-white/10 transition-all"
            >
              See role at Aziro
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
