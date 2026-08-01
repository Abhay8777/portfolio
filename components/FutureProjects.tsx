"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { Cpu, Database } from "lucide-react";

const projects = [
  {
    title: "Java Compiler",
    icon: <Cpu size={34} />,
    status: "Planning",
    description:
      "Designing a compiler in Java capable of lexical analysis, parsing, semantic analysis, optimization, intermediate code generation, and final machine code generation.",
    technologies: [
      "Java",
      "Compiler Design",
      "Algorithms",
      "Data Structures",
      "AST",
      "Parser",
    ],
  },
  {
    title: "Distributed File Storage System",
    icon: <Database size={34} />,
    status: "Planning",
    description:
      "Building a scalable distributed file storage system with replication, metadata management, chunk servers, networking, and fault tolerance.",
    technologies: [
      "Java",
      "Networking",
      "Sockets",
      "Multithreading",
      "Distributed Systems",
      "File System",
    ],
  },
];

export default function FutureProjects() {
  return (
    <section
      id="future-projects"
      className="py-28 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Future"
          title="Upcoming System Projects"
        />

        <p className="text-center text-gray-400 max-w-3xl mx-auto mt-4 mb-16 leading-8">
          Building advanced system-level software to strengthen backend,
          distributed systems, compiler design, and problem-solving skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-orange-500/20 bg-white/[0.04] backdrop-blur-xl p-8 transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
            >
              {/* Top */}
              <div className="flex justify-between items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-400 group-hover:scale-110 transition">
                  {project.icon}
                </div>

                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-300">
                  🚀 {project.status}
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-bold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-gray-400 leading-8">
                {project.description}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-orange-500/40 via-white/10 to-transparent" />

              {/* Technologies */}
              <h4 className="mb-4 text-lg font-semibold text-white">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 transition hover:bg-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}