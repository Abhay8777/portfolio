"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaJava,FaGitAlt,FaGithub } from "react-icons/fa";
import { SiCplusplus,SiPython,SiNextdotjs,SiTailwindcss,SiMysql } from "react-icons/si";

const skills=[
{name:"C++",icon:<SiCplusplus/>,level:90,badge:"Expert",gradient:"from-blue-500 to-cyan-500"},
{name:"Java",icon:<FaJava/>,level:75,badge:"Advanced",gradient:"from-orange-500 to-red-500"},
{name:"Python",icon:<SiPython/>,level:80,badge:"Advanced",gradient:"from-yellow-400 to-green-500"},
{name:"HTML",icon:<FaHtml5/>,level:95,badge:"Expert",gradient:"from-orange-500 to-pink-500"},
{name:"CSS",icon:<FaCss3Alt/>,level:90,badge:"Expert",gradient:"from-sky-500 to-blue-600"},
{name:"JavaScript",icon:<FaJs/>,level:88,badge:"Advanced",gradient:"from-yellow-400 to-orange-500"},
{name:"React",icon:<FaReact/>,level:85,badge:"Advanced",gradient:"from-cyan-400 to-blue-500"},
{name:"Next.js",icon:<SiNextdotjs/>,level:60,badge:"Advanced",gradient:"from-gray-400 to-white"},
{name:"Tailwind CSS",icon:<SiTailwindcss/>,level:88,badge:"Advanced",gradient:"from-cyan-500 to-sky-500"},
{name:"MySQL",icon:<SiMysql/>,level:50,badge:"Intermediate",gradient:"from-indigo-500 to-cyan-500"},
{name:"Git",icon:<FaGitAlt/>,level:20,badge:"Advanced",gradient:"from-orange-500 to-red-500"},
{name:"GitHub",icon:<FaGithub/>,level:20,badge:"Advanced",gradient:"from-violet-500 to-fuchsia-500"},
];

export default function Skills(){
return(
<section id="skills" className="relative py-28 px-6 bg-[#050505] text-white overflow-hidden">
<div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]"/>
<div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"/>
<div className="relative max-w-7xl mx-auto">
<SectionTitle subtitle="WHAT I USE" title="Tech Stack & Expertise"/>
<div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
{skills.map((skill,index)=>(
<motion.div key={skill.name} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:index*.05}} whileHover={{y:-10,scale:1.03}} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(139,92,246,.2)]">
<div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${skill.gradient}`}/>
<div className="relative flex items-center justify-between">
<div className="flex items-center gap-4">
<div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl bg-gradient-to-br ${skill.gradient}`}>{skill.icon}</div>
<div><h3 className="text-xl font-bold">{skill.name}</h3><p className="text-sm text-gray-400">{skill.badge}</p></div>
</div>
<span className="text-2xl font-bold">{skill.level}%</span>
</div>
<div className="relative mt-8 h-3 overflow-hidden rounded-full bg-white/10">
<motion.div initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}} transition={{duration:1.2}} className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}/>
</div>
</motion.div>
))}
</div>
</div>
</section>
)}