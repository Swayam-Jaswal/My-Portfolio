import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Name({ position = "center", show }) {
  const nameRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    // Initial position (center of screen)
    gsap.set(nameRef.current, {
      position: "fixed",
      top: "55%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    // Animate to top-left when position changes
    if (position === "top-left") {
      gsap.to(nameRef.current, {
        top: "18rem",
        left: "5rem",
        xPercent: 0,
        yPercent: 0,
        duration: 1.2,
        ease: "power4.inOut",
      });
    }
  }, [position, show]);

  if (!show) return null;

  return (
    <div
      ref={nameRef}
      className="text-5xl font-bold tracking-wide z-40"
      style={{ color: "var(--intro-text)" }}
    >
      Swayam Jaswal
    </div>
  );
}
