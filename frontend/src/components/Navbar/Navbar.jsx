import { useState } from "react";
import ScrollButton from "../UI/ScrollButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Work", id: "projects" },
    { label: "Resume", id: "resume" },
    { label: "About", id: "about" },
    // { label: "Skills", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      {/* done */}
      {/* Capsule container */}
      <div
        className="
          w-full max-w-6xl
          px-6 sm:px-10 py-4
          flex items-center justify-between
          rounded-full
          backdrop-blur-lg
          border border-white/10
          shadow-lg
        "
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--text-primary)]">
          Portfolio<span className="text-cyan-400">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <ScrollButton
            targetId="contact"
            className="
              px-6 py-2 rounded-full
              bg-[var(--text-primary)]
              text-black font-medium
              hover:opacity-90 transition
            "
          >
            Let&apos;s Talk
          </ScrollButton>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-2xl text-[var(--text-primary)]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`
          absolute top-[76px]
          w-full max-w-6xl
          rounded-2xl
          backdrop-blur-lg
          border border-white/10
          shadow-lg
          flex flex-col items-center gap-6
          py-8
          md:hidden
          transition-all duration-300 ease-out
          origin-top
          ${
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            onClick={() => setOpen(false)}
          />
        ))}

        <ScrollButton
          targetId="contact"
          onClick={() => setOpen(false)}
          className="
            px-10 py-3 rounded-full
            bg-[var(--text-primary)]
            text-black font-medium
          "
        >
          Let&apos;s Talk
        </ScrollButton>
      </div>
    </nav>
  );
}

/* ------------------------------
   Nav Item with hover underline
------------------------------- */
function NavItem({ label, id, onClick }) {
  return (
    <div className="relative group">
      <ScrollButton
        targetId={id}
        onClick={onClick}
        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
      >
        {label}
      </ScrollButton>

      {/* Underline */}
      <span
        className="
          absolute left-0 -bottom-1
          h-[2px] w-0
          bg-cyan-400
          transition-all duration-300
          group-hover:w-full
        "
      />
    </div>
  );
}
