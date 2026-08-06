"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("about");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Update active state
    const name = href.replace("#", "");
    setActive(name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#f59e0b]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#f59e0b]">
          sommy.dev
        </Link>

        <nav className="flex items-center gap-8 text-sm">
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
      </div>
    </header>
  );
}