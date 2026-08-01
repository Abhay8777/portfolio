"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { Briefcase, Award, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    icon: <Briefcase size={30} />,
    color: "cyan",
    title: "Web Development Intern",
    company: "Prodigy InfoTech",
    duration: "2025",
    achievements: [
      "Built responsive websites with modern UI.",
      "Developed projects using React & Tailwind CSS.",
      "Improved frontend performance and UX.",
      "Worked with Git & GitHub workflow.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: <Award size={30} />,
    color: "purple",
    title: "Deloitte Technology Job Simulation",
    company: "Forage",
    duration: "2025",
    achievements: [
      "Solved real-world business scenarios.",
      "Applied Software Development Life Cycle.",
      "Improved debugging & analytical thinking.",
      "Strengthened teamwork and communication.",
    ],
    skills: [
      "Java",
      "SDLC",
      "Debugging",
      "Problem Solving",
      "Teamwork",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          subtitle="Career"
          title="My Journey"
        />

        <div className="relative mt-20">

          {/* Timeline */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

          <div className="space-y-14">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:flex absolute left-0 top-8 h-12 w-12 rounded-full items-center justify-center border-4
                  ${
                    item.color === "cyan"
                      ? "border-cyan-500 bg-cyan-500/20 text-cyan-400"
                      : "border-purple-500 bg-purple-500/20 text-purple-400"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`rounded-3xl border backdrop-blur-xl p-8 transition-all duration-300
                  ${
                    item.color === "cyan"
                      ? "border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,.25)]"
                      : "border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
                  }
                  bg-white/[0.04]`}
                >
                  <div className="flex justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="text-3xl font-bold">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 font-medium ${
                          item.color === "cyan"
                            ? "text-cyan-400"
                            : "text-purple-400"
                        }`}
                      >
                        {item.company}
                      </p>
                    </div>

                    <span className="text-gray-400 font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <div className="mt-8 grid md:grid-cols-2 gap-10">

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">
                        Key Achievements
                      </h4>

                      <div className="space-y-3">
                        {item.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={18}
                              className={`mt-1 ${
                                item.color === "cyan"
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                              }`}
                            />

                            <p className="text-gray-300 leading-7">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}