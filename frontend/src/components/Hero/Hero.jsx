import { useEffect, useRef } from "react";
import gsap from "gsap";
import profileImg from "../../assets/swayam 6.png";
import ScrollButton from "../UI/ScrollButton";

export default function Hero({ show }) {
  const leftRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }
    );
  }, [show]);

  if (!show) return null;

  return (
    <section className="min-h-screen px-6 sm:px-20 pt-24 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div
          ref={leftRef}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 ml-10"
        >
          <h1 className="text-5xl font-bold">Swayam Jaswal</h1>

          <h2 className="text-4xl font-semibold leading-tight">
            I am a <br />
            <span className="text-gray-400">Full Stack Developer</span>
          </h2>

          <p className="text-gray-400 max-w-md">
            I am a Full Stack Developer passionate about creating scalable,
            high-performance web applications using the MERN stack, combining
            clean backend architecture with modern, responsive front-end design.
          </p>

          {/* Mobile Image */}
          <div className="lg:hidden">
            <img
              ref={imageRef}
              src={profileImg}
              alt="Swayam Jaswal"
              className="w-72 mx-auto"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 justify-center lg:justify-start">
            <ScrollButton
              targetId="projects"
              className="bg-white text-black hover:bg-gray-200"
            >
              View Projects
            </ScrollButton>

            <ScrollButton
              targetId="contact"
              className="border border-white hover:bg-white hover:text-black"
            >
              Contact Me
            </ScrollButton>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:flex justify-center">
          <img
            ref={imageRef}
            src={profileImg}
            alt="Swayam Jaswal"
            className="w-[400px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
