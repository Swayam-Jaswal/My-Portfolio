import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IMAGES } from "../../constants/Images";
import ScrollButton from "../UI/ScrollButton";

export default function Hero({ show }) {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, [show]);

  if (!show) return null;

  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-20 pt-28">
      {/* CENTERED WRAPPER */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT : TEXT */}
        <div
          ref={contentRef}
          className="
            flex flex-col
            items-center lg:items-start
            text-center lg:text-left
            space-y-8
            max-w-xl lg:max-w-2xl
            mx-auto lg:mx-0
            lg:-translate-x-8
          "
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
            Swayam Jaswal
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            I am a <br />
            <span className="text-[var(--text-secondary)]">
              Full Stack Developer
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed">
            I build scalable, high-performance web applications using the MERN
            stack, focusing on clean architecture, modern UI, and smooth user
            experiences.
          </p>

          {/* Mobile Image */}
          <div className="lg:hidden pt-6">
            <img
              ref={imageRef}
              src={IMAGES.profile.hero}
              alt="Swayam Jaswal"
              className="w-64 sm:w-72 mx-auto"
            />
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <ScrollButton
              targetId="projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
            >
              View Projects
            </ScrollButton>

            <ScrollButton
              targetId="contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition"
            >
              Contact Me
            </ScrollButton>
          </div>
        </div>

        {/* RIGHT : IMAGE (DESKTOP ONLY) */}
        <div className="hidden lg:flex justify-center">
          <img
            ref={imageRef}
            src={IMAGES.profile.hero}
            alt="Swayam Jaswal"
            className="w-[560px] xl:w-[620px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
