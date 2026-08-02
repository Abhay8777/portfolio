"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ContributionGraph from "./ContributionGraph";

type Day = {
  contributionCount: number;
  date: string;
  weekday: number;
  color: string;
};

type Week = {
  contributionDays: Day[];
};

type GithubData = {
  repos: number;
  followers: number;
  following: number;
  totalContributions: number;
  calendar: Week[];
};

export default function GithubStats() {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGithub() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setGithubData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGithub();
  }, []);

  return (
    <section
      id="github"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          GitHub Contributions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-5"
        >
          MY CODING ACTIVITY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-[#0d1117] p-8"
        >
          {loading ? (
            <div className="text-center text-gray-400 py-16">
              Loading contributions...
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-semibold mb-8">
                {githubData?.totalContributions ?? 0} contributions in the last year
              </h3>

              <ContributionGraph
                calendar={githubData?.calendar}
              />

              <div className="flex justify-center mt-10">
                <a
                  href="https://github.com/Abhay8777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-white text-black px-8 py-4 font-semibold transition hover:scale-105"
                >
                  <FaGithub size={22} />
                  View GitHub Profile
                </a>
              </div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
}