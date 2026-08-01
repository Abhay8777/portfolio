"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import {
  GraduationCap,
  Code2,
  Trophy,
  Laptop,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "8.26",
    subtitle: "Current CGPA",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Trophy,
    title: "500+",
    subtitle: "DSA Problems",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Laptop,
    title: "2",
    subtitle: "Projects Built",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "2",
    subtitle: "Tech Stack",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Know Me"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            whileHover={{ y: -8 }}
            className="
            rounded-[35px]
            border border-white/10
            bg-gradient-to-br
            from-white/10
            to-white/5
            backdrop-blur-2xl
            p-10
            shadow-[0_0_70px_rgba(168,85,247,.12)]
            "
          >
            <span className="text-violet-400 font-semibold uppercase tracking-[4px]">
              ABOUT ME
            </span>

            <h2 className="text-5xl font-black mt-3 mb-8">
              Passionate Developer
            </h2>

            <p className="text-gray-300 leading-9 text-lg">
              Hello! I'm
              <span className="text-violet-400 font-bold">
                {" "}Abhay Mishra
              </span>,
              a Computer Science undergraduate passionate about
              building modern web applications and solving real-world
              algorithmic problems.

              <br /><br />

              I specialize in
              <span className="text-cyan-400 font-semibold">
                {" "}React, Next.js, TypeScript
              </span>
              , and love creating premium user interfaces with smooth
              animations and excellent user experiences.

              <br /><br />

              Currently I'm improving my
              <span className="text-orange-400 font-semibold">
                {" "}DSA
              </span>
              ,
              <span className="text-emerald-400 font-semibold">
                {" "}System Design
              </span>
              ,
              and
              <span className="text-pink-400 font-semibold">
                {" "}Full Stack Development
              </span>
              to become a Software Development Engineer.
            </p>

          </motion.div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-7">

            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: .8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  "
                >
                  <div
                    className={`
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-20
                    transition
                    duration-500
                    bg-gradient-to-br
                    ${item.color}
                    `}
                  />

                  <div
                    className={`
                    h-16
                    w-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    ${item.color}
                    mb-6
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-5xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {item.subtitle}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}