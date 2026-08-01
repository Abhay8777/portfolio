"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MacWindow from "./MacWindow";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pt-40 md:pt-44 lg:pt-48 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]" />

      </div>

      <div className="flex justify-center">

        <MacWindow>

          <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="mb-3 text-lg text-gray-400">
                👋 Hello, I'm
              </p>

              <h1 className="text-6xl font-extrabold leading-tight lg:text-7xl">

                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

                  Abhay Mishra

                </span>

              </h1>

              <div className="mt-6 text-3xl font-bold text-violet-300">

                <TypeAnimation
                  sequence={[
                    "Software Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Problem Solver",
                    2000,
                    "React Developer",
                    2000,
                    "Open Source Learner",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />

              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                Passionate Computer Science student focused on building modern,
                scalable web applications and solving challenging algorithmic
                problems.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Button text="View Projects" />

                <Button text="Contact Me" />

              </div>

            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >

              <div className="relative">

                <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-3xl" />

                <Image
                  src="/images/profile.png"
                  alt="Abhay Mishra"
                  width={450}
                  height={450}
                  priority
                  className="
                    relative
                    rounded-[35px]
                    border
                    border-white/10
                    bg-white/5
                    object-cover
                    backdrop-blur-xl
                    shadow-[0_0_60px_rgba(168,85,247,.25)]
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:shadow-[0_0_90px_rgba(168,85,247,.5)]
                  "
                />

              </div>

            </motion.div>

          </div>

        </MacWindow>

      </div>

    </section>
  );
}