import {
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodingninjas,
} from "react-icons/si";

export const codingProfiles = [
  {
    title: "GitHub",
    username: "Abhay8777",
    color: "#ffffff",
    icon: FaGithub,
    url: "https://github.com/Abhay8777",
    description: "Open Source & Personal Projects",
    stats: [
      { label: "Repositories", value: "18+" },
      { label: "Followers", value: "10+" },
      { label: "Following", value: "15+" },
    ],
  },
  {
    title: "LeetCode",
    username: "abhay877",
    color: "#FFA116",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/abhay877/",
    description: "Data Structures & Algorithms",
    stats: [
      { label: "Solved", value: "600+" },
      { label: "Contest", value: "1600+" },
      { label: "Badges", value: "5+" },
    ],
  },
  {
    title: "GeeksforGeeks",
    username: "mishraabg3kx",
    color: "#2F8D46",
    icon: SiGeeksforgeeks,
    url: "https://www.geeksforgeeks.org/user/mishraabg3kx/",
    description: "Practice & Learning",
    stats: [
      { label: "Problems", value: "350+" },
      { label: "Score", value: "900+" },
      { label: "Rank", value: "Top" },
    ],
  },
  {
    title: "Codeforces",
    username: "abhay8777",
    color: "#3B82F6",
    icon: SiCodeforces,
    url: "https://codeforces.com/profile/abhay8777",
    description: "Competitive Programming",
    stats: [
      { label: "Current", value: "1100+" },
      { label: "Max", value: "1150+" },
      { label: "Contests", value: "20+" },
    ],
  },
  {
    title: "HackerRank",
    username: "mishraabhay8777",
    color: "#00EA64",
    icon: FaHackerrank,
    url: "https://www.hackerrank.com/profile/mishraabhay8777",
    description: "Programming Practice",
    stats: [
      { label: "Stars", value: "★★★★★" },
      { label: "Certificates", value: "3" },
      { label: "Skills", value: "Java" },
    ],
  },
  {
    title: "Coding Ninjas",
    username: "Code360",
    color: "#F97316",
    icon: SiCodingninjas,
    url: "https://www.naukri.com/code360/profile/8e4c0ef7-df3c-4ec4-bd95-0b79a6279770",
    description: "DSA Journey",
    stats: [
      { label: "Solved", value: "250+" },
      { label: "Streak", value: "40 Days" },
      { label: "Level", value: "Intermediate" },
    ],
  },
];