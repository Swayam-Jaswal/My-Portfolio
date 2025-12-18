import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      statsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: el.dataset.value,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pill =
    "px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm transition-all";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen px-6 sm:px-20 py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div ref={leftRef} className="space-y-6 max-w-xl">
          <span className="text-cyan-400 font-medium">About Me</span>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Passionate about <br />
            <span className="text-cyan-400">crafting solutions</span>
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            I'm a full-stack developer passionate about building scalable,
            high-performance web applications with clean architecture and modern UI.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            I focus on writing maintainable code, learning continuously, and
            delivering polished digital experiences.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all"
          >
            Let’s work together →
          </a>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="space-y-10">

          {/* FRONTEND */}
          <div>
            <h3 className="text-sm mb-3 tracking-widest text-[var(--text-secondary)]">
              FRONTEND
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "HTML5", "CSS3", "Tailwind CSS"].map((skill) => (
                <span key={skill} className={pill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND & APIs */}
          <div>
            <h3 className="text-sm mb-3 tracking-widest text-[var(--text-secondary)]">
              BACKEND & APIs
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express.js"].map((skill) => (
                <span key={skill} className={pill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DATABASES */}
          <div>
            <h3 className="text-sm mb-3 tracking-widest text-[var(--text-secondary)]">
              DATABASES
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "PostgreSQL", "Redis"].map((skill) => (
                <span key={skill} className={pill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CLOUD & DEVOPS */}
          <div>
            <h3 className="text-sm mb-3 tracking-widest text-[var(--text-secondary)]">
              CLOUD & DEVOPS
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Docker", "AWS", "GitHub Actions", "CI/CD Pipelines"].map(
                (skill) => (
                  <span key={skill} className={pill}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-sm mb-3 tracking-widest text-[var(--text-secondary)]">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "VS Code", "Blender"].map((skill) => (
                <span key={skill} className={pill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="flex gap-12 pt-6">
            {[
              { label: "Years Exp.", value: 2 },
              { label: "Projects", value: 10 },
              { label: "Clients", value: 1 },
            ].map((stat, i) => (
              <div key={stat.label}>
                <p
                  ref={(el) => (statsRef.current[i] = el)}
                  data-value={stat.value}
                  className="text-4xl font-bold text-cyan-400"
                >
                  0
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
