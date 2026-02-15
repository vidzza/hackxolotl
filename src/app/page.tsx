import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Blog />
      <Contact />
      <Footer />
      <TerminalEasterEgg />
    </main>
  );
}
