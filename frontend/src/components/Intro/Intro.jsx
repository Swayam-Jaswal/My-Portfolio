import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Intro({ onFinish }) {
  const greeting = [
    "नमस्ते",
    "Hello",
    "Bonjour",
    "こんにちは",
    "this is",
    "Swayam Jaswal",
  ];

  const [index, setIndex] = useState(0);
  const [hideIntro, setHideIntro] = useState(false);

  const textRef = useRef(null);
  const containerRef = useRef(null);

  const isLast = index === greeting.length - 1;

  // Word sequencing
  useEffect(() => {
    if (isLast) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [index, isLast]);

  // Word animation
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: isLast ? 0.5 : 0.4,
        ease: "power3.out",
      }
    );
  }, [index, isLast]);

  // Exit intro
  useEffect(() => {
    if (!isLast) return;

    const exitTimer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setHideIntro(true);
          onFinish();
        },
      });
    }, 1200);

    return () => clearTimeout(exitTimer);
  }, [isLast, onFinish]);

  if (hideIntro) return null;

  return (
    <div
      ref={containerRef}
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
