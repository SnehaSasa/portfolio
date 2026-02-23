import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha Anguswamy | AI/ML & Generative AI Practitioner · Data Scientist",
  description:
    "AI/ML Engineer & Generative AI Practitioner. Building intelligent systems with LLMs, RAG pipelines, and deep learning. Chennai, India.",
  keywords: [
    "AI",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "RAG",
    "Data Science",
    "NLP",
    "Sneha Anguswamy",
  ],
  openGraph: {
    title: "Sneha A | AI/ML & Generative AI Practitioner",
    description: "Building intelligent systems with LLMs, RAG pipelines, and deep learning.",
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
      </body>
    </html>
  );
}
