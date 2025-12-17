import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--grad-carbon)", color: "var(--intro-text)" }}
    >
      <Hero show={true} />
      <Navbar />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
