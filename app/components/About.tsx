"use client";

import { motion } from "framer-motion";

const stats = [
  { 
    label: "Projects shipped", 
    value: "05"  
  },
  { 
    label: "APIs built & deployed", 
    value: "03"  
  },
  { 
    label: "Years of experience", 
    value: "2.5"  
  },
  { 
    label: "Uptime on live projects", 
    value: "02"  
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-[#f59e0b]/50 uppercase tracking-widest mb-10">
            About
          </h2>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE - Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                One developer, the whole stack.
              </h3>

              <div className="space-y-4 text-base md:text-lg text-white/60 leading-relaxed">
                <p>
                  I'm a full stack developer who cares about the small stuff: the
                  transition that feels right, the layout that breathes, and the API
                  underneath that just works. I build end to end, from database
                  schema to the last pixel.
                </p>
                <p>
                  Comfortable across the stack — React on the front end, Node and
                  SQL on the back — and I like owning a feature from idea to deploy.
                </p>
                <p className="text-white/40">
                  Currently based in Lagos, Nigeria. Open to freelance, collabs, and
                  full-time roles.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 hover:border-[#f59e0b]/30 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
