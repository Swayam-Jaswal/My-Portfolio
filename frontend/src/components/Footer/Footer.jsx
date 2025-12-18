import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ScrollButton from "../UI/ScrollButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 sm:px-20 py-14">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* LEFT – BRAND */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Swayam<span className="text-cyan-400">.</span>
          </h3>

          <p className="max-w-sm mx-auto md:mx-0 text-[var(--text-secondary)] leading-relaxed">
            Building digital experiences that are scalable, performant,
            and thoughtfully designed.
          </p>
        </div>

        {/* CENTER – QUICK LINKS */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest font-semibold text-[var(--text-primary)]">
            QUICK LINKS
          </h4>

          <div className="flex flex-col items-center md:items-start gap-2 text-[var(--text-secondary)]">
            <ScrollButton targetId="about" className="hover:text-cyan-400 transition">
              About
            </ScrollButton>
            <ScrollButton targetId="projects" className="hover:text-cyan-400 transition">
              Work
            </ScrollButton>
            <ScrollButton targetId="about" className="hover:text-cyan-400 transition">
              Skills
            </ScrollButton>
            <ScrollButton targetId="contact" className="hover:text-cyan-400 transition">
              Contact
            </ScrollButton>
          </div>
        </div>

        {/* RIGHT – CONNECT */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest font-semibold text-[var(--text-primary)]">
            CONNECT
          </h4>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Swayam-Jaswal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-white/10
                text-[var(--text-secondary)]
                hover:text-cyan-400
                hover:border-cyan-400/40
                hover:scale-105
                transition
              "
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/swayam-jaswal/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-white/10
                text-[var(--text-secondary)]
                hover:text-cyan-400
                hover:border-cyan-400/40
                hover:scale-105
                transition
              "
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="mailto:swayamjaswalyt@gmail.com"
              aria-label="Email"
              className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-white/10
                text-[var(--text-secondary)]
                hover:text-cyan-400
                hover:border-cyan-400/40
                hover:scale-105
                transition
              "
            >
              <HiOutlineMail className="text-lg" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="my-10 border-t border-white/10" />

      {/* Bottom section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)] text-center sm:text-left">
        <span>
          © {new Date().getFullYear()} Swayam Jaswal. All rights reserved.
        </span>

      </div>
    </footer>
  );
}
