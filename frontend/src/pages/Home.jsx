import { useState } from "react";

import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* INTRO (exclusive view) */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {/* MAIN APP (hidden until intro ends) */}
      {!showIntro && (
        <>
          <Navbar />
          <Hero show={true} />
          <Projects />
          <Resume />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
