import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Intro() {
  const greeting = [
    "Hello",
    "this is",
    "Swayam Jaswal",
    "Welcome to My",
    "Portfolio"
  ];

  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const textRef = useRef(null);

  const isLast = index === greeting.length - 1;

  useEffect(() => {
    if (isLast) {
      const endTimer = setTimeout(() => setDone(true), 1800);
      return () => clearTimeout(endTimer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline();

    if (isLast) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    } else {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      ).to(
        textRef.current,
        { opacity: 0, y: -20, duration: 0.3, ease: "power3.in" },
        "+=0.3"
      );
    }
  }, [index]);

  if (done) return null;

  return (
    <div 
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: "var(--grad-carbon)" }}
    >
      <div
        ref={textRef}
        className="text-5xl font-semibold tracking-wide"
        style={{ color: "var(--intro-text)" }}
      >
        {greeting[index]}
      </div>
    </div>
  );
}
