"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            Abhay<span className="text-cyan-400"> Mishra</span>
          </h2>

        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Abhay8777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-mishra-42aaa2349/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/abhay877/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>

        </div>

      </div>
    </footer>
  );
}