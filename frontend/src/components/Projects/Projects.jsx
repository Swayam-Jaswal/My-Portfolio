import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ProjectCard from "../UI/ProjectCard";
import { IMAGES } from "../../constants/Images";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-animate", {
        autoAlpha: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [showAll]);

  const projects = [
    {
      id: 1,
      title: "Quiz-Mania",
      description:
        "A basic MERN stack quiz application that allows users to attempt quizzes and track scores. Built to strengthen full-stack fundamentals including REST APIs, authentication flow, and MongoDB data handling. Currently not deployed.",
      image: IMAGES.projects.defaultThumbPrimary,
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/Swayam-Jaswal/Quiz-Mania",
      status: "COMPLETED",
    },
    {
      id: 2,
      title: "UniHub",
      description:
        "A centralized digital platform designed to modernize university life by integrating clubs, events, academics, sports management, and student engagement into a single ecosystem.",
      image: IMAGES.projects.defaultThumbSecondary,
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      githubLink: "",
      status: "IN_DEVELOPMENT",
    },
    {
      id: 3,
      title: "Handmade & Cultural E-Commerce Platform",
      description:
        "An upcoming e-commerce platform focused on handmade, cultural, and vintage Indian products with artisan storytelling and cultural authenticity.",
      image: IMAGES.projects.defaultThumbSecondary,
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Firebase",
        "Razorpay",
      ],
      githubLink: "",
      status: "IN_DEVELOPMENT",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen px-6 sm:px-20 py-32"
    >
      <h2 className="projects-animate text-4xl font-bold mb-4 text-[var(--text-primary)]">
        Projects
      </h2>

      <p className="projects-animate mb-12 max-w-xl text-[var(--text-secondary)]">
        Some projects I’ve built and a few I’m currently working on.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <div key={project.id} className="projects-animate">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              status={
                project.status === "IN_DEVELOPMENT"
                  ? "in-progress"
                  : "completed"
              }
            />
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {projects.length > 3 && (
        <div className="projects-animate mt-14 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              flex items-center gap-2
              px-8 py-3
              rounded-full
              border border-white/10
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              hover:border-cyan-400/40
              transition
            "
          >
            {showAll ? "Show Less" : "Show More Projects"}
            <span
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
