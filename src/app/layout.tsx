import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics} from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha Anguswamy | AI Engineer · Generative AI & Agentic AI",
  description:
    "AI Engineer specializing in Generative AI and Agentic AI. Building CAWi — an enterprise multi-agent platform — plus RAG pipelines and LLM tool-orchestration. Chennai, India.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "LLM",
    "RAG",
    "LangGraph",
    "MCP",
    "Multi-Agent",
    "Sneha Anguswamy",
  ],
  openGraph: {
    title: "Sneha A | AI Engineer · Generative AI & Agentic AI",
    description:
      "Production GenAI systems — multi-agent orchestration, RAG, and LLM tool-routing. Flagship: CAWi enterprise platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-200 bg-navy-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
