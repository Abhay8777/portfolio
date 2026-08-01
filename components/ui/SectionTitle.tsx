"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>
    </motion.div>
  );
}