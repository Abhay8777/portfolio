"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfileCardProps {
  title: string;
  username: string;
  description: string;
  icon: React.ElementType;
  color: string;
  url: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export default function ProfileCard({
  title,
  username,
  description,
  icon: Icon,
  color,
  url,
  stats,
}: ProfileCardProps) {
  const [liveStats, setLiveStats] = useState(stats);

  useEffect(() => {
    async function loadStats() {
      try {
        // =====================
        // GitHub
        // =====================
        if (title === "GitHub") {
          const res = await fetch("/api/github", {
            cache: "no-store",
          });

          if (!res.ok) return;

          const data = await res.json();

          setLiveStats([
            {
              label: "Repositories",
              value: String(data.repos),
            },
            {
              label: "Followers",
              value: String(data.followers),
            },
            {
              label: "Following",
              value: String(data.following),
            },
          ]);

          return;
        }

        // =====================
        // LeetCode
        // =====================
        if (title === "LeetCode") {
          const res = await fetch("/api/leetcode", {
            cache: "no-store",
          });

          if (!res.ok) return;

          const data = await res.json();

          setLiveStats([
            {
              label: "Solved",
              value: String(data.solved),
            },
            {
              label: "Easy",
              value: String(data.easy),
            },
            {
              label: "Medium",
              value: String(data.medium),
            },
          ]);

          return;
        }
        // =====================
// GeeksforGeeks
// =====================
if (title === "GeeksforGeeks") {
  const res = await fetch("/api/geeksforgeeks", {
    cache: "no-store",
  });

  if (!res.ok) return;

  const data = await res.json();

  setLiveStats([
    {
      label: "Solved",
      value: String(data.solved),
    },
    {
      label: "Easy",
      value: String(data.easy),
    },
    {
      label: "Medium",
      value: String(data.medium),
    },
  ]);

  return;
}

        // =====================
        // Codeforces
        // =====================
        if (title === "Codeforces") {
          const res = await fetch("/api/codeforces", {
            cache: "no-store",
          });

          if (!res.ok) return;

          const data = await res.json();

          setLiveStats([
            {
              label: "Solved",
              value: String(data.solved),
            },
            {
              label: "Status",
              value: "Live",
            },
            {
              label: "Source",
              value: "API",
            },
          ]);

          return;
        }

        // =====================
        // HackerRank
        // =====================
        if (title === "HackerRank") {
          setLiveStats([]);
          return;
        }

        // =====================
        // Coding Ninjas
        // =====================
        if (title === "Coding Ninjas") {
          setLiveStats([]);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, [title]);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-8"
    >
      {/* Glow */}
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl opacity-20 transition group-hover:opacity-50"
        style={{
          backgroundColor: color,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-5">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: `${color}20`,
            color,
          }}
        >
          <Icon size={34} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p
            className="font-medium"
            style={{
              color,
            }}
          >
            @{username}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-400 leading-7">
        {description}
      </p>

      {/* Stats */}
      {liveStats.length > 0 && (
        <div className="mt-8 grid grid-cols-3 gap-3">
          {liveStats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
            >
              <p className="text-lg font-bold text-white">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition group-hover:gap-4">
        View Profile
        <ArrowUpRight size={18} />
      </div>
    </motion.a>
  );
}