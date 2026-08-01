"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
      px-8
      py-3
      rounded-xl
      bg-white
      text-black
      font-semibold
      shadow-xl
      hover:bg-gray-200
      transition
      "
    >
      {text}
    </motion.button>
  );
}