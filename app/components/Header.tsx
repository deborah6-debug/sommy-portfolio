"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close menu on link click
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    const name = href.replace("#", "");
    setActive(name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#f59e0b]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo - Changed to Sommy Ubah */}
        <Link href="/" className="text-xl font-bold tracking-tight text-[#f59e0b]">
          Sommy Ubah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`relative transition-colors hover:text-[#f59e0b] cursor-pointer ${
                active === item.name.toLowerCase()
                  ? "text-[#f59e0b]"
                  : "text-white/40"
              }`}
            >
              {item.name}
              {active === item.name.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#f59e0b]" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            {/* Top line */}
            <span
              className={`absolute left-0 top-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2 bg-[#f59e0b]" : ""
              }`}
            />
            {/* Middle line */}
            <span
              className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            {/* Bottom line */}
            <span
              className={`absolute left-0 bottom-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 bottom-2 bg-[#f59e0b]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-[#f59e0b]/10">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-lg transition-colors hover:text-[#f59e0b] ${
                  active === item.name.toLowerCase()
                    ? "text-[#f59e0b] font-medium"
                    : "text-white/60"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
