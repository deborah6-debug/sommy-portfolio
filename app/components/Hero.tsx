"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              I build the
              <br />
              <span className="text-[#f59e0b]">interface and the</span>
              <br />
              <span className="text-[#fb923c]">engine behind it.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/50 max-w-lg leading-relaxed">
              Sommy Ubah — full stack developer. I design pixel-perfect, accessible
              interfaces and build the APIs, databases, and infrastructure that
              power them.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white rounded-lg font-medium hover:from-[#d97706] hover:to-[#f59e0b] transition shadow-lg shadow-orange-500/25 text-sm cursor-pointer"
              >
                View my work
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="px-6 py-3 border border-[#f59e0b]/30 text-white rounded-lg font-medium hover:bg-[#f59e0b]/10 transition text-sm cursor-pointer"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Code Showcase Overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[380px]"
          >
            {/* Code Editor Window - Top Left */}
            <div className="absolute top-0 left-0 z-10 w-[85%] border border-[#f59e0b]/20 rounded-xl bg-[#1a0e0a] shadow-2xl shadow-orange-500/10 overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-[#241807] border-b border-[#f59e0b]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] text-[#D9B78C] font-mono">developer.ts</span>
              </div>

              {/* Code Body */}
              <div className="p-4 font-mono text-xs leading-relaxed text-[#F3E5CE]">
                <div className="text-[#8C7154]">// currently building</div>
                <div>
                  <span className="text-[#FFC24B]">const</span> creator = {"{"}
                </div>
                <div className="pl-4">
                  name: <span className="text-[#FFD98A]">"Sommy Ubah"</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-[#FFD98A]">"Front-End Dev"</span>,
                </div>
                <div className="pl-4">
                  stack: [<span className="text-[#FFD98A]">"React"</span>, <span className="text-[#FFD98A]">"CSS"</span>],
                </div>
                <div className="pl-4">
                  alsoFilms: <span className="text-[#FFD98A]">true</span>
                </div>
                <div>{"}"};</div>
                <div>
                  <span className="text-[#FFC24B]">export default</span> creator;
                </div>
              </div>
            </div>

            {/* Terminal Window - Bottom Right Overlapping */}
            <div className="absolute bottom-0 right-0 z-20 w-[70%] border border-[#f59e0b]/20 rounded-xl bg-[#1a0e0a] shadow-2xl shadow-orange-500/10 overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#241807] border-b border-[#f59e0b]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] text-[#D9B78C] font-mono">server.log</span>
              </div>

              {/* Terminal Body */}
              <div className="p-3 font-mono text-xs leading-relaxed text-[#F3E5CE]">
                <div>
                  <span className="text-[#8C7154]">$</span> npm run start
                </div>
                <div>
                  <span className="text-[#FFD98A]">✔</span> API listening on :4000
                </div>
                <div>
                  <span className="text-[#FFD98A]">✔</span> DB connected
                </div>
                <div>
                  <span className="text-[#FF8A3D]">GET</span> /api/projects <span className="text-[#FFD98A]">200</span>
                </div>
                <div>
                  <span className="text-[#FF8A3D]">POST</span> /api/auth <span className="text-[#FFD98A]">200</span>
                </div>
                <div className="animate-pulse text-[#8C7154]">_</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}