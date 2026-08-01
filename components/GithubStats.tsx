"use client";

import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          GitHub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-5"
        >
          Visit my GitHub profile to explore projects and repositories.
        </motion.p>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Abhay8777"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition"
          >
            Visit GitHub
          </a>
        </div>

      </div>
    </section>
  );
}