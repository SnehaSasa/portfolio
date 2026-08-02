"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Bot, 
  Cpu, 
  Layers, 
  Zap, 
  GitBranch, 
  Lock, 
  Search, 
  Users, 
  CheckCircle, 
  Server, 
  AlertTriangle, 
  Workflow, 
  FileText, 
  Database, 
  Code, 
  ArrowRight, 
  Clock, 
  Shield, 
  Activity, 
  Terminal, 
  ArrowUpRight,
  ExternalLink
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { SectionDivider } from "@/components/SectionDivider";

export default function CaseStudyPage() {
  const [activeDiagTab, setActiveDiagTab] = useState("overall");

  const techChips = [
    "Agentic AI", "Multi-Agent Systems", "LangGraph", "LangChain", 
    "FastAPI", "Python", "MCP", "Docker", "Redis", "OAuth 2.0", 
    "Microsoft Entra ID", "Vector Embeddings", "LLMs", "Prompt Engineering", 
    "Git", "GitHub", "REST APIs"
  ];

  return (
    <>
      <FloatingBlobs />
      <Header />
      
      <main className="pt-24 min-h-screen text-slate-350 font-sans selection:bg-indigo-500/30 selection:text-white">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Subtle decorative glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Flagship Engineering Case Study
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Building CAWi: <span className="gradient-text">An Enterprise Multi-Agent AI Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 font-medium mb-8 max-w-2xl mx-auto"
            >
              From QA to production AI engineering — a year of building enterprise agentic AI systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl border-white/5 bg-white/5 backdrop-blur-lg mb-10 text-left text-sm sm:text-base leading-relaxed text-slate-300"
            >
              Over the past year at Aziro Technologies, I've contributed to CAWi, an enterprise conversational AI platform, across its evolution from an internal project to a production system used by a paying enterprise client. My work spans the platform's core reasoning layer — the Planner–Executor architecture that decomposes user queries and coordinates execution across enterprise systems — as well as authentication, tool integration infrastructure, governance workflows, and production deployment. 
            </motion.div>

            {/* Scrolling Tech Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
            >
              {techChips.map((tech) => (
                <span key={tech} className="glass-pill text-xs font-semibold px-3 py-1.5 border-white/5">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* ================= OVERVIEW SECTION ================= */}
        <section id="overview" className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Context Columns */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="section-label">Context</span>
                <h2 className="section-title text-white mb-4">Project Overview</h2>
                <p className="text-slate-350 leading-relaxed text-base">
                  CAWi is an enterprise conversational AI platform that lets employees interact with internal business systems — HR platforms, GitHub, Outlook, and other enterprise tools — through natural language, instead of navigating each system's own interface separately.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-indigo-400">
                    <AlertTriangle className="w-5 h-5 text-indigo-400" />
                    <h3 className="font-semibold text-white text-sm tracking-wide uppercase">The Business Problem</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Enterprise employees typically need to context-switch across many disconnected tools to complete routine tasks — checking HR policies, searching internal documents, or triggering actions across systems like Keka or Outlook. CAWi addresses this by acting as a single conversational layer that understands a request, figures out which internal systems it touches, and coordinates the work across them.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-violet-400">
                    <Users className="w-5 h-5 text-violet-400" />
                    <h3 className="font-semibold text-white text-sm tracking-wide uppercase">Target Users</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Enterprise employees within client organizations who need natural-language access to HR information, internal knowledge, and cross-system actions, without needing to know which backend system holds the answer.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Workflow className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-white text-sm tracking-wide uppercase">High-Level Architecture</h3>
                </div>
                <p className="text-sm text-slate-450 leading-relaxed">
                  A user query enters through the frontend and is handled by a planning layer that breaks it into subtasks, matches each subtask to the right internal tool using semantic (embedding-based) retrieval, and executes those subtasks — in parallel where possible — against enterprise systems connected through the Model Context Protocol (MCP). Sensitive actions pause for human approval before executing. Results are aggregated and synthesized into a single response.
                </p>
              </div>
            </div>

            {/* Right Ownership Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="glass-card p-6 sm:p-8 rounded-2xl border-white/10 bg-slate-950/40 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="font-bold text-white text-lg border-b border-white/5 pb-4 mb-5 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-400" />
                  Role & Specific Ownership
                </h3>
                <p className="text-xs text-slate-450 mb-6 leading-relaxed italic">
                  I joined CAWi early and worked across most of the platform's lifecycle. Here is the strict breakdown of my contributions:
                </p>
                
                <ul className="space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 h-fit shrink-0">
                      DESIGN & IMPL
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">OAuth / SSO Authentication Layer</p>
                      <p className="text-xs text-slate-400">Built end-to-end integration against Microsoft Entra ID with token validation and refresh lifecycle.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 h-fit shrink-0">
                      DESIGN & IMPL
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">MCP Integration Gateway</p>
                      <p className="text-xs text-slate-400">Created dynamic infrastructure to register and coordinate enterprise tools without altering core logic.</p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 h-fit shrink-0">
                      DESIGN & IMPL
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Planner–Executor Core & Semantic Retrieval</p>
                      <p className="text-xs text-slate-400">Designed task dependency graph resolution and shifted prompt tool selection to Sentence Transformer embeddings.</p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 h-fit shrink-0">
                      DESIGN & IMPL
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Human-in-the-Loop Workflow</p>
                      <p className="text-xs text-slate-400">Created approval state preservation checkpoints using LangGraph memory and Redis caching.</p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400/80 border border-indigo-500/20 h-fit shrink-0">
                      IMPLEMENTED
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Circuit Breakers & Resilience</p>
                      <p className="text-xs text-slate-400">Built error isolation wrappers around distributed MCP calls to prevent cascading plan failures.</p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400/80 border border-indigo-500/20 h-fit shrink-0">
                      DESIGNED & IMPL
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Orchestrator Agent</p>
                      <p className="text-xs text-slate-400">Designed modular routing protocols enabling dynamic agent onboarding without changes to the core orchestration framework.</p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400/80 border border-indigo-500/20 h-fit shrink-0">
                      COLLABORATED
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Deployment & Early QA/Eval</p>
                      <p className="text-xs text-slate-400">Coordinated docker container runs and structured evaluations of model grounding against policy documentation.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <SectionDivider />

        {/* ================= ARCHITECTURE SECTION ================= */}
        <section id="architecture" className="section-padding">
          <div className="text-center mb-12">
            <span className="section-label">Visual Design</span>
            <h2 className="section-title text-white mb-3">System Architecture</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Deep dive into the modular components governing routing, planning, approvals, and dynamic tool matching.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Visualizer Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
              {[
                { id: "overall", label: "Overall Architecture", icon: Server },
                { id: "planner", label: "Planner-Executor", icon: Workflow },
                { id: "mcp", label: "MCP Routing Gateway", icon: Cpu },
                { id: "hitl", label: "Human-in-the-Loop", icon: Shield },
                { id: "semantic", label: "Semantic Retrieval", icon: Search },
                { id: "deployment", label: "Deployment Topology", icon: Layers }
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiagTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                      activeDiagTab === tab.id
                        ? "bg-indigo-500/20 text-indigo-350 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                        : "text-slate-400 hover:text-white border border-transparent"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Diagram Card Container */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-white/10 bg-slate-950/20 min-h-[400px] flex flex-col justify-between">
              
              {/* Overall Architecture Diagram */}
              {activeDiagTab === "overall" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Overall System Architecture</h3>
                      <p className="text-xs text-slate-400 mt-0.5">End-to-end data flow path from client query to third-party secure systems execution.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Standardized Gateway Flow
                    </span>
                  </div>
                  
                  {/* SVG Canvas */}
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 340" width="100%" className="min-w-[760px] select-none text-slate-350 font-medium">
                      <defs>
                        <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
                        </linearGradient>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8" />
                        </marker>
                      </defs>
                      
                      {/* Grid / Background elements */}
                      <g className="opacity-20">
                        <line x1="140" y1="170" x2="680" y2="170" stroke="url(#grad-line)" strokeWidth="2" strokeDasharray="4 4" />
                      </g>
                      
                      {/* Nodes */}
                      {/* Node: User */}
                      <rect x="20" y="140" width="90" height="60" rx="8" className="fill-slate-900/80 stroke-slate-700/80" strokeWidth="1.5" />
                      <text x="65" y="165" textAnchor="middle" className="fill-white text-[11px] font-bold">Employee</text>
                      <text x="65" y="182" textAnchor="middle" className="fill-slate-400 text-[9px] font-normal">Natural Query</text>
                      
                      {/* Connectors */}
                      <line x1="110" y1="170" x2="160" y2="170" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

                      {/* Node: Frontend */}
                      <rect x="160" y="140" width="100" height="60" rx="8" className="fill-slate-900/80 stroke-slate-700/80" strokeWidth="1.5" />
                      <text x="210" y="165" textAnchor="middle" className="fill-white text-[11px] font-bold">Conversational UI</text>
                      <text x="210" y="182" textAnchor="middle" className="fill-slate-400 text-[9px]">Web Interface</text>

                      <line x1="260" y1="170" x2="310" y2="170" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

                      {/* Node: Auth & API Gateway */}
                      <rect x="310" y="115" width="120" height="110" rx="10" className="fill-slate-900/90 stroke-indigo-500/30" strokeWidth="1.5" />
                      <text x="370" y="140" textAnchor="middle" className="fill-white text-[11px] font-bold">API Gateway</text>
                      <line x1="330" y1="155" x2="410" y2="155" stroke="rgba(255,255,255,0.05)" />
                      <rect x="325" y="165" width="90" height="45" rx="6" className="fill-indigo-500/10 stroke-indigo-550/20" strokeWidth="1" />
                      <text x="370" y="182" textAnchor="middle" className="fill-indigo-300 text-[10px] font-bold">OAuth / SSO</text>
                      <text x="370" y="195" textAnchor="middle" className="fill-indigo-455 text-[8px]">Entra ID Token</text>

                      <line x1="430" y1="170" x2="480" y2="170" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

                      {/* Node: Planner-Executor Core */}
                      <rect x="480" y="105" width="150" height="130" rx="10" className="fill-slate-900/90 stroke-cyan-500/30" strokeWidth="1.5" />
                      <text x="555" y="130" textAnchor="middle" className="fill-white text-[12px] font-extrabold tracking-wide">Planner-Executor</text>
                      <text x="555" y="145" textAnchor="middle" className="fill-cyan-400 text-[9px] font-bold uppercase tracking-wider">LangGraph Core</text>
                      <line x1="500" y1="155" x2="610" y2="155" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                      
                      {/* Database connections */}
                      {/* Redis Node */}
                      <rect x="495" y="170" width="55" height="50" rx="6" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1" />
                      <text x="522" y="192" textAnchor="middle" className="fill-slate-300 text-[9px] font-bold">Redis</text>
                      <text x="522" y="205" textAnchor="middle" className="fill-slate-500 text-[8px]">State cache</text>

                      {/* PostgreSQL Node */}
                      <rect x="565" y="170" width="55" height="50" rx="6" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1" />
                      <text x="592" y="192" textAnchor="middle" className="fill-slate-300 text-[9px] font-bold">Postgres</text>
                      <text x="592" y="205" textAnchor="middle" className="fill-slate-500 text-[8px]">Metadata</text>

                      <line x1="630" y1="170" x2="680" y2="170" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

                      {/* Node: MCP Gateway */}
                      <rect x="680" y="130" width="120" height="80" rx="8" className="fill-slate-900/80 stroke-slate-700/80" strokeWidth="1.5" />
                      <text x="740" y="155" textAnchor="middle" className="fill-white text-[11px] font-bold">MCP Gateway</text>
                      <text x="740" y="170" textAnchor="middle" className="fill-slate-400 text-[9px] font-normal">Connector Registry</text>
                      <text x="740" y="185" textAnchor="middle" className="fill-slate-500 text-[8px] font-normal">Keka / Outlook / GitHub</text>
                      
                      {/* Vertical Arrows pointing down from MCP Gateway to External Connectors */}
                      <line x1="740" y1="210" x2="740" y2="250" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />
                      
                      <rect x="690" y="250" width="100" height="50" rx="6" className="fill-cyan-500/5 stroke-cyan-500/20" strokeWidth="1" />
                      <text x="740" y="272" textAnchor="middle" className="fill-cyan-300 text-[10px] font-bold">Enterprise Tools</text>
                      <text x="740" y="286" textAnchor="middle" className="fill-slate-400 text-[8px]">HTTP REST / Webhooks</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* Planner-Executor Flow Diagram */}
              {activeDiagTab === "planner" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Planner-Executor Execution Flow</h3>
                      <p className="text-xs text-slate-400 mt-0.5">How user queries are decomposed, cross-checked for semantic tools, and securely executed.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Acyclic Task Orchestration
                    </span>
                  </div>
                  
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 300" width="100%" className="min-w-[760px] select-none text-slate-350 font-medium">
                      <defs>
                        <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#22d3ee" />
                        </marker>
                      </defs>

                      {/* Main Flow Lines */}
                      <line x1="90" y1="150" x2="140" y2="150" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                      <line x1="240" y1="150" x2="290" y2="150" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                      <line x1="390" y1="150" x2="440" y2="150" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                      <line x1="540" y1="150" x2="590" y2="150" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                      
                      {/* Branch for HITL */}
                      <line x1="640" y1="150" x2="690" y2="150" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                      <path d="M 640 150 L 640 90 L 690 90" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow2)" />

                      {/* Node: Query */}
                      <rect x="10" y="120" width="80" height="60" rx="8" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="50" y="148" textAnchor="middle" className="fill-white text-[10px] font-bold">Input Query</text>
                      <text x="50" y="162" textAnchor="middle" className="fill-slate-400 text-[8px]">Natural Language</text>

                      {/* Node: Decompose */}
                      <rect x="140" y="120" width="100" height="60" rx="8" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="190" y="145" textAnchor="middle" className="fill-white text-[10px] font-bold">Decomposition</text>
                      <text x="190" y="158" textAnchor="middle" className="fill-slate-400 text-[8px]">Subtask Extraction</text>
                      <text x="190" y="170" textAnchor="middle" className="fill-indigo-300 text-[8px] font-bold">(LangGraph Plan)</text>

                      {/* Node: Dependency Graph */}
                      <rect x="290" y="120" width="100" height="60" rx="8" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="340" y="145" textAnchor="middle" className="fill-white text-[10px] font-bold">Dependency DAG</text>
                      <text x="340" y="158" textAnchor="middle" className="fill-slate-400 text-[8px]">Ordering & Prerequisites</text>
                      <text x="340" y="170" textAnchor="middle" className="fill-slate-500 text-[7px] font-mono">Parallel Executor</text>

                      {/* Node: Semantic Retrieval */}
                      <rect x="440" y="120" width="100" height="60" rx="8" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="490" y="145" textAnchor="middle" className="fill-white text-[10px] font-bold">Semantic Routing</text>
                      <text x="490" y="158" textAnchor="middle" className="fill-slate-400 text-[8px]">Retrieve matching tools</text>
                      <text x="490" y="170" textAnchor="middle" className="fill-cyan-400 text-[8px] font-bold">Vector Similarity</text>

                      {/* Node: Execution */}
                      <rect x="540" y="120" width="100" height="60" rx="8" className="fill-slate-900 stroke-indigo-500/30" strokeWidth="1.5" />
                      <text x="590" y="145" textAnchor="middle" className="fill-white text-[10px] font-bold">Parallel Execution</text>
                      <text x="590" y="158" textAnchor="middle" className="fill-slate-400 text-[8px]">Run indep. actions</text>
                      <text x="590" y="170" textAnchor="middle" className="fill-slate-500 text-[7px] font-mono">MCP Gateway API</text>

                      {/* Node: HITL Approvals */}
                      <rect x="690" y="60" width="120" height="60" rx="8" className="fill-slate-900 stroke-rose-500/30" strokeWidth="1.5" />
                      <text x="750" y="85" textAnchor="middle" className="fill-rose-300 text-[10px] font-bold">Approval Gate</text>
                      <text x="750" y="98" textAnchor="middle" className="fill-slate-400 text-[8px]">Flag Write Actions</text>
                      <text x="750" y="110" textAnchor="middle" className="fill-rose-400/70 text-[7px]">LangGraph Interruption</text>

                      {/* Node: Synthesis */}
                      <rect x="690" y="130" width="120" height="80" rx="8" className="fill-slate-900 stroke-cyan-500/30" strokeWidth="1.5" />
                      <text x="750" y="158" textAnchor="middle" className="fill-white text-[11px] font-bold">Response Synthesis</text>
                      <text x="750" y="172" textAnchor="middle" className="fill-slate-400 text-[8px]">Aggregate Results</text>
                      <text x="750" y="186" textAnchor="middle" className="fill-cyan-400 text-[8px] font-bold">Single Answer</text>
                      
                      {/* Return loop line from approval back to execution */}
                      <path d="M 750 60 L 750 30 L 590 30 L 590 120" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow2)" />
                      <text x="670" y="24" textAnchor="middle" className="fill-rose-300 text-[8px] font-bold">User Approved &rarr; Resume State</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* MCP Routing Diagram */}
              {activeDiagTab === "mcp" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Model Context Protocol Routing</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Unified integration layer routing structured tool requests across config-driven external tools.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      Connector Pattern
                    </span>
                  </div>
                  
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 280" width="100%" className="min-w-[760px] select-none text-slate-350 font-medium">
                      <defs>
                        <marker id="arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8b5cf6" />
                        </marker>
                      </defs>

                      {/* Main lines */}
                      <line x1="120" y1="140" x2="190" y2="140" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrow3)" />
                      
                      {/* Branching from Gateway to servers */}
                      <path d="M 310 140 L 370 140 L 440 60" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrow3)" />
                      <path d="M 370 140 L 440 140" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrow3)" />
                      <path d="M 370 140 L 370 220 L 440 220" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrow3)" />

                      {/* Node: Executor request */}
                      <rect x="10" y="105" width="110" height="70" rx="8" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="65" y="130" textAnchor="middle" className="fill-white text-[10px] font-bold">Planner Executor</text>
                      <text x="65" y="145" textAnchor="middle" className="fill-slate-400 text-[8px]">Standardized Call</text>
                      <text x="65" y="158" textAnchor="middle" className="fill-slate-500 text-[7px] font-mono">"execute_tool"</text>

                      {/* Node: MCP Gateway */}
                      <rect x="190" y="90" width="120" height="100" rx="8" className="fill-slate-900 stroke-violet-500/20" strokeWidth="1.5" />
                      <text x="250" y="118" textAnchor="middle" className="fill-white text-[11px] font-bold">MCP Gateway</text>
                      <text x="250" y="132" textAnchor="middle" className="fill-slate-400 text-[8px]">Config Registry</text>
                      <line x1="205" y1="145" x2="295" y2="145" stroke="rgba(255,255,255,0.05)" />
                      <text x="250" y="162" textAnchor="middle" className="fill-violet-300 text-[8px] font-bold">Dynamic Routing</text>
                      <text x="250" y="175" textAnchor="middle" className="fill-slate-500 text-[7px]">Lookup Server URI</text>

                      {/* Server Nodes */}
                      {/* Server: Keka HR */}
                      <rect x="440" y="30" width="120" height="60" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="500" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">Keka HR Server</text>
                      <text x="500" y="68" textAnchor="middle" className="fill-slate-400 text-[8px]">Leave/Payroll API</text>
                      <text x="500" y="78" textAnchor="middle" className="fill-violet-400/70 text-[7px] font-mono">Port: 8081 (MCP)</text>
                      
                      {/* Server: GitHub */}
                      <rect x="440" y="110" width="120" height="60" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="500" y="135" textAnchor="middle" className="fill-white text-[10px] font-bold">GitHub Server</text>
                      <text x="500" y="148" textAnchor="middle" className="fill-slate-400 text-[8px]">Issue & PR Actions</text>
                      <text x="500" y="158" textAnchor="middle" className="fill-violet-400/70 text-[7px] font-mono">Port: 8082 (MCP)</text>

                      {/* Server: Outlook */}
                      <rect x="440" y="190" width="120" height="60" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="500" y="215" textAnchor="middle" className="fill-white text-[10px] font-bold">Outlook Server</text>
                      <text x="500" y="228" textAnchor="middle" className="fill-slate-400 text-[8px]">Calendar & Mail API</text>
                      <text x="500" y="238" textAnchor="middle" className="fill-violet-400/70 text-[7px] font-mono">Port: 8083 (MCP)</text>
                      
                      {/* Connecting to external APIs */}
                      <line x1="560" y1="60" x2="630" y2="60" stroke="#a78bfa" strokeDasharray="3 3" strokeWidth="1.2" />
                      <line x1="560" y1="140" x2="630" y2="140" stroke="#a78bfa" strokeDasharray="3 3" strokeWidth="1.2" />
                      <line x1="560" y1="220" x2="630" y2="220" stroke="#a78bfa" strokeDasharray="3 3" strokeWidth="1.2" />

                      {/* External systems */}
                      <rect x="630" y="45" width="140" height="30" rx="4" className="fill-violet-550/10 stroke-violet-500/20" strokeWidth="1" />
                      <text x="700" y="64" textAnchor="middle" className="fill-violet-300 text-[9px] font-semibold">Keka External endpoint</text>
                      
                      <rect x="630" y="125" width="140" height="30" rx="4" className="fill-violet-550/10 stroke-violet-500/20" strokeWidth="1" />
                      <text x="700" y="144" textAnchor="middle" className="fill-violet-300 text-[9px] font-semibold">GitHub REST API</text>

                      <rect x="630" y="205" width="140" height="30" rx="4" className="fill-violet-550/10 stroke-violet-500/20" strokeWidth="1" />
                      <text x="700" y="224" textAnchor="middle" className="fill-violet-300 text-[9px] font-semibold">Microsoft Graph API</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* Human-in-the-Loop Approval Sequence */}
              {activeDiagTab === "hitl" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Human-in-the-Loop Gate Sequence</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Security checkpoint that halts the LangGraph workflow, persists the state, and waits for user validation.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      Zero-Trust Approval Pattern
                    </span>
                  </div>
                  
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 300" width="100%" className="min-w-[760px] select-none text-slate-355 font-medium">
                      {/* Columns Headers */}
                      <text x="100" y="30" textAnchor="middle" className="fill-indigo-300 text-[11px] font-bold uppercase tracking-wider">Planner (LangGraph)</text>
                      <text x="380" y="30" textAnchor="middle" className="fill-cyan-300 text-[11px] font-bold uppercase tracking-wider">Audit Log & State Store</text>
                      <text x="680" y="30" textAnchor="middle" className="fill-rose-300 text-[11px] font-bold uppercase tracking-wider">Employee / Approver</text>

                      {/* Lifelines */}
                      <line x1="100" y1="45" x2="100" y2="280" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                      <line x1="380" y1="45" x2="380" y2="280" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                      <line x1="680" y1="45" x2="680" y2="280" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />

                      {/* Sequence Steps */}
                      {/* Step 1: Detect action */}
                      <rect x="20" y="60" width="160" height="35" rx="4" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
                      <text x="100" y="81" textAnchor="middle" className="fill-white text-[9px] font-medium">1. Detect Sensitive Action (e.g. Write)</text>
                      <path d="M 100 95 L 380 95" stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="3 3" />
                      <polygon points="380,95 374,92 374,98" fill="#f43f5e" />

                      {/* Step 2: Save state */}
                      <rect x="300" y="105" width="160" height="35" rx="4" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1" />
                      <text x="380" y="126" textAnchor="middle" className="fill-white text-[9px] font-medium">2. Persist graph state in Redis Cache</text>
                      <path d="M 380 140 L 680 140" stroke="#f43f5e" strokeWidth="1.2" />
                      <polygon points="680,140 674,137 674,143" fill="#f43f5e" />

                      {/* Step 3: Request Approval */}
                      <rect x="600" y="150" width="160" height="35" rx="4" className="fill-slate-900 stroke-rose-500/20" strokeWidth="1" />
                      <text x="680" y="171" textAnchor="middle" className="fill-rose-300 text-[9px] font-semibold">3. User reviews Action Plan</text>
                      <path d="M 680 185 L 380 185" stroke="#22d3ee" strokeWidth="1.2" />
                      <polygon points="380,185 386,182 386,188" fill="#22d3ee" />

                      {/* Step 4: Approved/Audit */}
                      <rect x="300" y="195" width="160" height="35" rx="4" className="fill-slate-900 stroke-cyan-500/20" strokeWidth="1" />
                      <text x="380" y="216" textAnchor="middle" className="fill-cyan-300 text-[9px] font-semibold">4. Audit Log entry created</text>
                      <path d="M 380 230 L 100 230" stroke="#22d3ee" strokeWidth="1.2" />
                      <polygon points="100,230 106,227 106,233" fill="#22d3ee" />

                      {/* Step 5: Resume graph */}
                      <rect x="20" y="240" width="160" height="35" rx="4" className="fill-slate-900 stroke-slate-800" strokeWidth="1" />
                      <text x="100" y="261" textAnchor="middle" className="fill-white text-[9px] font-medium">5. Resume execution with state</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* Semantic Tool Retrieval Diagram */}
              {activeDiagTab === "semantic" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Semantic Embedding Retrieval</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Matching target subtasks to the correct tool definitions by meaning rather than string-matching.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Sentence Transformers (Similarity)
                    </span>
                  </div>
                  
                  {/* SVG Canvas */}
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 280" width="100%" className="min-w-[760px] select-none text-slate-350 font-medium">
                      <defs>
                        <marker id="arrow4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8" />
                        </marker>
                      </defs>

                      {/* Lines */}
                      <line x1="120" y1="80" x2="180" y2="80" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                      <line x1="280" y1="80" x2="350" y2="120" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                      
                      <line x1="120" y1="200" x2="180" y2="200" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                      <line x1="280" y1="200" x2="350" y2="150" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arrow4)" />

                      <line x1="470" y1="135" x2="520" y2="135" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                      <line x1="640" y1="135" x2="690" y2="135" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow4)" />

                      {/* Top flow: Subtask */}
                      <rect x="10" y="50" width="110" height="60" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="65" y="75" textAnchor="middle" className="fill-white text-[10px] font-bold">Target Subtask</text>
                      <text x="65" y="88" textAnchor="middle" className="fill-slate-450 text-[7px] font-mono">"fetch leave balance"</text>

                      <rect x="180" y="50" width="100" height="60" rx="6" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="230" y="75" textAnchor="middle" className="fill-white text-[10px] font-bold">Query Vector</text>
                      <text x="230" y="88" textAnchor="middle" className="fill-indigo-300 text-[8px] font-mono">Dims: 384 (Real)</text>

                      {/* Bottom flow: Tool Registry */}
                      <rect x="10" y="170" width="110" height="60" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="65" y="195" textAnchor="middle" className="fill-white text-[10px] font-bold">Registered Tools</text>
                      <text x="65" y="208" textAnchor="middle" className="fill-slate-450 text-[7px]">Names & Descriptions</text>

                      <rect x="180" y="170" width="100" height="60" rx="6" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="230" y="195" textAnchor="middle" className="fill-white text-[10px] font-bold">Tool Embeddings</text>
                      <text x="230" y="208" textAnchor="middle" className="fill-indigo-300 text-[8px] font-mono">Pre-Calculated Vectors</text>

                      {/* Intersection: Similarity Matcher */}
                      <rect x="350" y="105" width="120" height="60" rx="8" className="fill-slate-900 stroke-cyan-500/30" strokeWidth="1.5" />
                      <text x="410" y="130" textAnchor="middle" className="fill-white text-[10px] font-bold">Similarity Engine</text>
                      <text x="410" y="145" textAnchor="middle" className="fill-cyan-300 text-[9px] font-bold">Cosine Distance</text>

                      {/* Rankings */}
                      <rect x="520" y="90" width="120" height="90" rx="8" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="580" y="110" textAnchor="middle" className="fill-white text-[9px] font-bold">Ranked Candidates</text>
                      <line x1="535" y1="120" x2="625" y2="120" stroke="rgba(255,255,255,0.05)" />
                      <text x="535" y="135" className="fill-emerald-400 text-[8px] font-mono">1. keka_get_leave (0.91)</text>
                      <text x="535" y="152" className="fill-slate-400 text-[8px] font-mono">2. outlook_calendar (0.42)</text>
                      <text x="535" y="169" className="fill-slate-505 text-[8px] font-mono">3. github_fetch_pr (0.15)</text>

                      {/* Output selection */}
                      <rect x="690" y="105" width="120" height="60" rx="6" className="fill-emerald-500/5 stroke-emerald-500/20" strokeWidth="1.5" />
                      <text x="750" y="130" textAnchor="middle" className="fill-emerald-300 text-[10px] font-bold">keka_get_leave</text>
                      <text x="750" y="145" textAnchor="middle" className="fill-slate-400 text-[8px]">Best Tool Selected</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* Deployment Topology Diagram */}
              {activeDiagTab === "deployment" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">Production Deployment Topology</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Isolated Dev/Staging environments feeding a containerized microservice array on production systems.</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      Isolated Docker Overlay
                    </span>
                  </div>
                  
                  <div className="w-full overflow-x-auto py-4">
                    <svg viewBox="0 0 820 300" width="100%" className="min-w-[760px] select-none text-slate-355 font-medium">
                      <defs>
                        <marker id="arrow5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#22d3ee" />
                        </marker>
                      </defs>

                      {/* Staging to production arrow */}
                      <line x1="140" y1="150" x2="190" y2="150" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow5)" />

                      {/* Environment Node: Dev & Staging */}
                      <rect x="20" y="60" width="120" height="70" rx="8" className="fill-slate-900/50 stroke-slate-800" strokeWidth="1.5" />
                      <text x="80" y="85" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">Dev Environment</text>
                      <text x="80" y="100" textAnchor="middle" className="fill-slate-600 text-[8px]">Local builds & Evals</text>

                      <rect x="20" y="160" width="120" height="70" rx="8" className="fill-slate-900/50 stroke-slate-800" strokeWidth="1.5" />
                      <text x="80" y="185" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">Staging Env</text>
                      <text x="80" y="200" textAnchor="middle" className="fill-slate-600 text-[8px]">Integration Testing</text>

                      {/* Production Border boundary */}
                      <rect x="190" y="30" width="610" height="240" rx="12" fill="rgba(99, 102, 241, 0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="2" />
                      <text x="210" y="50" className="fill-indigo-300 text-[9px] font-bold uppercase tracking-wider">Production Boundary</text>

                      {/* Components inside Production */}
                      {/* Node: Nginx Proxy */}
                      <rect x="220" y="110" width="90" height="80" rx="8" className="fill-slate-900 stroke-indigo-500/20" strokeWidth="1.5" />
                      <text x="265" y="145" textAnchor="middle" className="fill-white text-[10px] font-bold">Nginx Proxy</text>
                      <text x="265" y="158" textAnchor="middle" className="fill-slate-450 text-[8px]">SSL / Gateway</text>
                      
                      {/* Nginx to services */}
                      <line x1="310" y1="150" x2="360" y2="90" stroke="#22d3ee" strokeWidth="1.2" markerEnd="url(#arrow5)" />
                      <line x1="310" y1="150" x2="360" y2="190" stroke="#22d3ee" strokeWidth="1.2" markerEnd="url(#arrow5)" />

                      {/* Service A: Planner-Executor */}
                      <rect x="360" y="55" width="140" height="65" rx="8" className="fill-slate-900 stroke-cyan-500/20" strokeWidth="1.5" />
                      <text x="430" y="80" textAnchor="middle" className="fill-white text-[10px] font-bold">Planner-Executor SVC</text>
                      <text x="430" y="93" textAnchor="middle" className="fill-slate-400 text-[8px]">Python/LangGraph Docker</text>
                      <text x="430" y="103" textAnchor="middle" className="fill-cyan-400 text-[7px] font-bold">Replica x3</text>

                      {/* Service B: MCP Gateway */}
                      <rect x="360" y="160" width="140" height="65" rx="8" className="fill-slate-900 stroke-violet-500/20" strokeWidth="1.5" />
                      <text x="430" y="185" textAnchor="middle" className="fill-white text-[10px] font-bold">MCP Gateway SVC</text>
                      <text x="430" y="198" textAnchor="middle" className="fill-slate-400 text-[8px]">Routing Proxy Docker</text>
                      <text x="430" y="208" textAnchor="middle" className="fill-violet-400 text-[7px] font-bold">Replica x2</text>

                      {/* Connector lines inside prod */}
                      <line x1="500" y1="85" x2="560" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
                      <line x1="500" y1="190" x2="560" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />

                      {/* Databases */}
                      {/* Database 1: Redis */}
                      <rect x="560" y="60" width="90" height="50" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="605" y="85" textAnchor="middle" className="fill-slate-200 text-[9px] font-bold">Redis Cache</text>
                      <text x="605" y="96" textAnchor="middle" className="fill-slate-500 text-[8px]">State & Queue</text>

                      {/* Database 2: PostgreSQL */}
                      <rect x="560" y="165" width="90" height="50" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
                      <text x="605" y="190" textAnchor="middle" className="fill-slate-200 text-[9px] font-bold">PostgreSQL</text>
                      <text x="605" y="201" textAnchor="middle" className="fill-slate-500 text-[8px]">Metadata DB</text>

                      {/* Docker nodes Stack */}
                      <rect x="680" y="110" width="100" height="80" rx="8" className="fill-slate-955 stroke-slate-800" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="730" y="140" textAnchor="middle" className="fill-indigo-300 text-[10px] font-bold">Docker Registry</text>
                      <text x="730" y="155" textAnchor="middle" className="fill-slate-400 text-[8px]">Internal Repository</text>
                      <text x="730" y="168" textAnchor="middle" className="fill-slate-500 text-[8px]">Container Storage</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* Technical description for active diagram */}
              <div className="mt-6 pt-4 border-t border-white/5 text-slate-400 text-xs sm:text-sm leading-relaxed">
                {activeDiagTab === "overall" && (
                  <p>
                    <strong className="text-white">Note on Overall system:</strong> Secure sessions are validated against Microsoft Entra ID. The API Gateway forwards validated calls to the Planner-Executor engine. The Planner leverages LangGraph's cyclic state mechanisms to resolve dependencies before executing HTTP tool calls via the MCP Gateway.
                  </p>
                )}
                {activeDiagTab === "planner" && (
                  <p>
                    <strong className="text-white">Note on Planner-Executor:</strong> Input queries are dynamically parsed into a Directed Acyclic Graph (DAG). Subtasks with completed prerequisites execute in parallel. Sensitive operations (like modifications) trigger an automatic LangGraph interrupt, keeping the session state frozen in Redis until the user approves or rejects.
                  </p>
                )}
                {activeDiagTab === "mcp" && (
                  <p>
                    <strong className="text-white">Note on MCP Routing:</strong> The Model Context Protocol gateway matches standard JSON-RPC tool schemas. Adding a new external utility requires adding a config block containing the server metadata, eliminating the need to modify base compilation code.
                  </p>
                )}
                {activeDiagTab === "hitl" && (
                  <p>
                    <strong className="text-white">Note on Human-in-the-Loop:</strong> Interrupted state variables are committed securely with cryptographic signatures. The UI reads this temporary state, presents a breakdown of the planned changes, and resumes execution once the state is updated upon approval.
                  </p>
                )}
                {activeDiagTab === "semantic" && (
                  <p>
                    <strong className="text-white">Note on Semantic Retrieval:</strong> A similarity search filters the local tool registry based on the subtask's vector embedding, preventing the planner's context window from overflowing with irrelevant schemas.
                  </p>
                )}
                {activeDiagTab === "deployment" && (
                  <p>
                    <strong className="text-white">Note on Deployment Topology:</strong> Containers run in isolated environments with health checks and log-forwarding. The database uses horizontal staging setups to test migration pipelines before deploying production changes.
                  </p>
                )}
              </div>

            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ================= TIMELINE SECTION ================= */}
        <section id="timeline" className="section-padding">
          <div className="text-center mb-16">
            <span className="section-label">Milestones</span>
            <h2 className="section-title text-white mb-3">Project Evolution Timeline</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              The journey of building, validating, scaling, and deploying CAWi over the past year.
            </p>
          </div>

          {/* Timeline Node Chain */}
          <div className="max-w-4xl mx-auto relative px-4">
            
            {/* Horizontal Timeline bar on large, vertical on mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent -translate-x-1/2" />

            {/* Timeline node builder loop */}
            {[
              {
                title: "1. Joined CAWi",
                desc: "Joined the CAWi team as it was validating early conversational AI workflows for enterprise use cases.",
                tech: ["LLM QA", "Grounding", "System Validation"],
                lesson: "Understanding how LLM systems actually fail in practice — hallucination, weak grounding, inconsistent retrieval — before writing a line of the core architecture gave me a much sharper intuition for what to design defensively against later."
              },
              {
                title: "2. LLM QA & Evaluation",
                desc: "Validated LLM responses across HR, employee-assistance, and enterprise document-search domains, checking grounding accuracy and identifying hallucinations.",
                tech: ["Prompt Testing", "Conversation Testing", "Enterprise Search"],
                lesson: "Most LLM failures in an enterprise setting aren't dramatic hallucinations — they're subtle grounding errors that look plausible. That shaped how carefully I'd later design approval checkpoints for anything the system does autonomously."
              },
              {
                title: "3. Prompt Testing",
                desc: "Worked with developers to identify prompt-level causes of inconsistent or low-quality responses and iterated on prompt behavior.",
                tech: ["Prompt Engineering"],
                lesson: "Prompt behavior is not a \"set once\" concern — small wording changes have outsized effects on retrieval and tool selection downstream, which became directly relevant once I started building the planner's prompts."
              },
              {
                title: "4. Microsoft SSO",
                desc: "Designed and implemented Microsoft OAuth 2.0 / OpenID Connect authentication end-to-end, including Entra ID integration, token validation, refresh handling, and deployment across environments.",
                tech: ["OAuth 2.0", "JWT", "Microsoft Entra ID", "FastAPI"],
                lesson: "Authentication is easy to underestimate until you're debugging token refresh edge cases in production — building it end-to-end (not just the happy path) taught me to treat session and token lifecycle as first-class design concerns, not an afterthought."
              },
              {
                title: "5. MCP Integration Platform",
                desc: "Designed and implemented the infrastructure to dynamically register, configure, and route to MCP servers without modifying core application logic.",
                tech: ["MCP", "FastAPI", "REST APIs", "Docker"],
                lesson: "Building for dynamic onboarding (rather than hardcoding each integration) took longer upfront but meant every new enterprise system after that point was a configuration change, not a code change — a tradeoff that paid off almost immediately."
              },
              {
                title: "6. Planner–Executor",
                desc: "Designed and implemented the core architecture that decomposes natural-language queries into dependency-aware subtasks and executes them across enterprise systems.",
                tech: ["LangGraph", "LangChain", "FastAPI", "Redis"],
                lesson: "Dependency-aware execution planning is straightforward in theory and genuinely hard in practice once queries touch multiple systems with different latencies and failure modes — this is where most of my systems-design thinking on the project has gone."
              },
              {
                title: "7. Semantic Tool Retrieval",
                desc: "Replaced keyword-based tool matching with embedding-based semantic retrieval so the planner selects tools by meaning rather than string overlap.",
                tech: ["Sentence Transformers", "Embedding Models", "Similarity Search"],
                lesson: "Keyword matching breaks the moment tool names or descriptions drift from a user's phrasing. Semantic retrieval fixed that, but introduced a new problem — near-duplicate tools with overlapping embeddings — which pushed me to think harder about how tool metadata should be written and ranked."
              },
              {
                title: "8. Human-in-the-Loop",
                desc: "Designed and implemented approval checkpoints for sensitive and write-level actions, with audit logging and conversation-state continuity across approval cycles.",
                tech: ["LangGraph", "Conversation State", "Agent Memory"],
                lesson: "Governance features are as much a product design problem as an engineering one — the checkpoint has to be clear enough that a non-technical employee understands exactly what they're approving before they approve it."
              },
              {
                title: "9. Circuit Breakers",
                desc: "Implemented circuit breaker patterns around external MCP server calls to prevent cascading failures across the multi-agent workflow.",
                tech: ["Distributed Systems", "Retry Logic", "Timeout Handling"],
                lesson: "In a multi-agent system, one slow or failing dependency can silently degrade everything downstream of it if you don't isolate failure early — resilience patterns aren't optional once you're coordinating multiple external systems."
              },
              {
                title: "10. Orchestrator Agent",
                desc: "Designed and implemented the next-generation orchestrator responsible for dynamic agent selection, execution routing, fallback handling, and state management across the system.",
                tech: ["LangGraph", "State Machines", "Agent Orchestration"],
                lesson: "Making an orchestration layer genuinely modular — so new agent types can be added without touching existing routing logic — is a much harder design constraint than making it merely functional."
              },
              {
                title: "11. Production Enterprise Deployment",
                desc: "Collaborated on deploying CAWi across development, staging, and production environments as it moved from internal project to a platform with a paying enterprise client.",
                tech: ["Docker", "Linux", "Deployment", "Monitoring"],
                lesson: "Production support surfaces failure modes no amount of local testing does — log analysis and live debugging under real usage taught me more about the system's actual behavior than the design phase did."
              }
            ].map((node, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={node.title} 
                  className={`flex flex-col md:flex-row items-stretch gap-8 mb-12 relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-4 w-4 h-4 rounded-full bg-indigo-500 border-4 border-navy-955 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                  {/* Empty Spacer Column for layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="glass-card p-6 rounded-2xl border-white/5 bg-slate-950/20 hover:border-indigo-500/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">Stage {index + 1}</span>
                      <h3 className="font-bold text-white text-lg mt-1 mb-2">{node.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">{node.desc}</p>
                      
                      {/* Technologies row */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {node.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-white/5 text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Lesson Learned box */}
                      <div className="p-3.5 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs">
                        <strong className="text-indigo-350 block mb-1">💡 Lesson Learned:</strong>
                        <p className="text-slate-400 leading-relaxed">{node.lesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        <SectionDivider />

        <SectionDivider />

        {/* ================= ENGINEERING CHALLENGES ================= */}
        <section id="challenges" className="section-padding">
          <div className="text-center mb-16">
            <span className="section-label">Obstacles</span>
            <h2 className="section-title text-white mb-3">Engineering Challenges</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              How we solved core blockers surrounding dynamic routing, plan hallucinations, state storage, and external outages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Semantic Tool Routing Collision",
                problem: "Near-duplicate tools with similar embeddings could be misranked by the retrieval step.",
                cause: "Tool metadata descriptions were sometimes too similar across related tools, giving the embedding model insufficient signal to differentiate them.",
                solution: "Refined tool metadata to be more distinct and specific, improving embedding separation between similar tools.",
                tradeoff: "Better metadata takes more upfront effort per tool onboarded, but pays off in retrieval accuracy."
              },
              {
                title: "Planner Failures & Hallucinated Tools",
                problem: "A planner can occasionally reference a tool or capability that doesn't actually exist or isn't correctly registered.",
                cause: "Planning is generated by an LLM reasoning over available context; if tool context isn't tightly scoped, the model can generalize incorrectly.",
                solution: "Constrained planner prompts to reason only over the actual registered/retrieved tool set rather than open-ended tool naming.",
                tradeoff: "Tighter constraints reduce planner flexibility but meaningfully reduce hallucinated tool calls — a worthwhile tradeoff in an enterprise action-taking system."
              },
              {
                title: "Dynamic State Management Continuity",
                problem: "Preserving execution and conversation context across multi-step plans and approval cycles is easy to get wrong.",
                cause: "Multi-agent, multi-step workflows with an approval pause in the middle require state to persist correctly across an indeterminate wait period.",
                solution: "Used LangGraph's state management alongside Redis to persist conversation and execution state reliably across the approval cycle.",
                tradeoff: "Adds infrastructure dependency (Redis) and complexity, but is necessary for HITL to work without losing context."
              },
              {
                title: "Approval Workflows & Verification Fatigue",
                problem: "Gating every action would create approval fatigue; gating nothing removes oversight entirely.",
                cause: "Enterprise write-actions vary widely in risk — not all actions warrant the same level of scrutiny.",
                solution: "Scoped approval gates specifically to sensitive/write-level operations rather than all actions.",
                tradeoff: "Requires an explicit, maintained definition of what counts as \"sensitive,\" which adds ongoing design work as new tools are added."
              },
              {
                title: "External Integration Outages",
                problem: "A failing MCP server (e.g., Outlook integration down) could cascade into full workflow failures.",
                cause: "Without isolation, a single dependency failure blocks the entire execution pipeline.",
                solution: "Implemented circuit breaker patterns to isolate failing services and allow healthy services to continue.",
                tradeoff: "A circuit breaker in the \"open\" state will reject calls even briefly after recovery — a deliberate stability tradeoff."
              },
              {
                title: "Multi-Service Scale Complexity",
                problem: "Coordinating multiple backend services (API Gateway, MCP Gateway, planner/executor services) across dev, staging, and production adds operational complexity.",
                cause: "A multi-service architecture inherently has more moving parts to deploy, monitor, and debug than a monolith.",
                solution: "Containerized services with Docker and relied on structured logging/monitoring to debug issues across environments.",
                tradeoff: "More operational overhead than a single deployable unit, in exchange for the modularity the platform's architecture needs."
              }
            ].map((challenge) => (
              <div 
                key={challenge.title}
                className="p-6 rounded-2xl border border-white/5 bg-slate-950/20 hover:border-rose-500/20 hover:shadow-[0_0_20px_rgba(244,63,94,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">{challenge.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 text-sm leading-relaxed mb-6">
                    <li>
                      <strong className="text-white text-xs block font-bold tracking-wide uppercase mb-0.5">Problem:</strong>
                      <span className="text-slate-350">{challenge.problem}</span>
                    </li>
                    <li>
                      <strong className="text-white text-xs block font-bold tracking-wide uppercase mb-0.5">Root Cause:</strong>
                      <span className="text-slate-400">{challenge.cause}</span>
                    </li>
                    <li>
                      <strong className="text-white text-xs block font-bold tracking-wide uppercase mb-0.5">Solution:</strong>
                      <span className="text-emerald-300 font-semibold">{challenge.solution}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-400">
                  <strong className="text-slate-300 block mb-0.5">Tradeoff:</strong>
                  {challenge.tradeoff}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        <SectionDivider />

        {/* ================= BACK TO HOME / CONNECT CTA ================= */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <div className="glass-card p-8 rounded-3xl border-white/10 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-transparent relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Interested in system engineering or AI platforms?</h2>
            <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-xl mx-auto">
              I love discussing distributed architectures, LLM validation strategies, agentic workflows, and web scaling solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/" className="btn-ghost-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl">
                Back to Portfolio Home
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}