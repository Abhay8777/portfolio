"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import ProfileCard from "./ProfileCard";
import { codingProfiles } from "@/data/codingProfiles";

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="relative py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Coding Journey"
          title="Coding Profiles"
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center text-lg text-gray-400"
        >
          I enjoy solving algorithmic problems, participating in coding
          contests, and building real-world projects. Explore my journey
          across different coding platforms.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProfileCard {...profile} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}