"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("✓ Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("✗ Failed. Try again."));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest mb-6">
            Contact
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Got a product, or a feature in mind?
          </h3>
          <p className="mt-3 text-white/40 text-lg max-w-xl">
            I'm open to freelance projects, collaborations, and full-time full
            stack roles. Reach out and let's build something worth shipping.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5 max-w-xl">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition resize-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition"
            >
              Send message
            </button>
            {status && (
              <p className="text-sm text-white/40 mt-2">{status}</p>
            )}
          </form>

          <div className="mt-6">
            <a
              href="mailto:sommyubah12@gmail.com"
              className="text-white/40 hover:text-white transition font-mono text-sm"
            >
              sommyubah12@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
