"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setShow(true);
      } else if (current > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -120 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav className="mx-auto mt-4 max-w-7xl rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,.45)] px-8 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-4xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Abhay
          </span>

          <span className="ml-3 text-white">
            Mishra
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-cyan-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/images/resume/Abhay_Mishra_Resume.pdf"
            download="Abhay_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,.5)]"
          >
            Resume
          </a>

        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-3 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-5 text-gray-300 hover:bg-white/10"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/images/resume/Abhay_Mishra_Resume.pdf"
            download="Abhay_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block m-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-500 px-6 py-4 text-center font-semibold text-white"
          >
            Download Resume
          </a>

        </div>
      )}
    </motion.header>
  );
}