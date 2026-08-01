import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Glow from "@/components/ui/Glow";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubStats from "@/components/GithubStats";
import FutureProjects from "@/components/FutureProjects";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Glow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <GithubStats />
      <Experience />
      <FutureProjects />
      <Contact />
      <Footer />
    </main>
  );
}