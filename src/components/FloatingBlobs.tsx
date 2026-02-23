import { motion } from "framer-motion";

"use client";

export function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Aurora radial light blobs — soft color diffusion, AI nebula feel */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-40 blur-[140px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(49, 46, 129, 0.35) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full opacity-35 blur-[120px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(30, 27, 75, 0.4) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full opacity-25 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-30 blur-[110px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-[500px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(11, 15, 42, 0.8) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
