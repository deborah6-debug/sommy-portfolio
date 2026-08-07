  "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Birthday Surprise Website",
    description: "A custom birthday surprise website built for a loved one with interactive animations and personalized content.",
    longDescription: "Created an immersive birthday experience with a nostalgic 90s aesthetic. Features include a personalized greeting, interactive animations, and a curated gallery of memories. The site was designed to be a digital love letter that surprises and delights.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/birthday-project.jpeg",  // ← Make sure this is .jpg
    link: "https://guess-rosy-one.vercel.app/",
    github: "https://github.com/deborah6-debug/birthday-",
    features: [
      "Personalized greeting with animation",
      "Interactive navigation (Home, How We Met, Memories, Favourites)",
      "90s-inspired nostalgic design",
      "Responsive and mobile-friendly",
      "Custom cursor and hover effects"
    ]
  },
  {
    id: 2,
    title: "Wedding RSVP System",
    description: "A wedding invitation and RSVP management system with Google Sheets backend for guest data collection.",
    longDescription: "Built a complete wedding RSVP system for Chizoba & Onome's wedding. Guests can view event details, confirm attendance, and submit dietary preferences. Data is automatically collected in Google Sheets/Excel for easy guest list management and tracking.",
    stack: ["HTML", "CSS", "JavaScript", "Google Sheets API"],
    image: "/wedding-project.jpeg",  // ← Changed to .jpeg
    link: "https://chizobaonome-omega.vercel.app/",
    github: "https://github.com/deborah6-debug/chizobaonome",
    features: [
      "Elegant wedding invitation design",
      "RSVP form with guest name, email, and attendance confirmation",
      "Plus-one management",
      "Automatic data collection to Google Sheets/Excel",
      "Event details (Ceremony & Reception times and locations)",
      "Countdown timer to the wedding day",
      "Mobile-responsive and accessible",
      "Colour theme: Creamy White & Lilac"
    ]
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "More projects are currently in development. Stay tuned!",
    longDescription: "I'm constantly building and learning. New projects will be added here as they're completed.",
    stack: ["Coming Soon"],
    image: "/coming-soon.jpg",
    link: "#",
    github: "#",
    features: [
      "New project in development",
      "Exciting features coming",
      "Stay tuned for updates"
    ]
  },
];

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-[#f59e0b]/50 uppercase tracking-widest mb-10">
            Selected projects
          </h2>

          <div className="space-y-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-[#f59e0b]/20 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-[#1a0e0a] to-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                  {project.title === "Coming Soon" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-3 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white/20 text-sm">Coming Soon</span>
                      </div>
                    </div>
                  ) : imageErrors[project.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2a1a0a] to-[#1a0e0a]">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white/20 text-sm">📸 Screenshot coming soon</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(project.id)}
                    />
                  )}
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="mt-3 text-white/50 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-white/40">
                        <span className="text-[#f59e0b]">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-4">
                    {project.link !== "#" ? (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#f59e0b] transition border border-white/10 hover:border-[#f59e0b]/30 px-4 py-2 rounded-lg"
                        >
                          View Live
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Code
                        </a>
                      </>
                    ) : (
                      <span className="text-sm text-white/20">Coming soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
