import ProjectCard from "../UI/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My personal portfolio built using React, Tailwind CSS, and modern frontend practices.",
      image: "https://via.placeholder.com/400x250",
      techStack: ["React", "Tailwind", "Vite"],
      liveLink: "",
      githubLink: "https://github.com/yourusername/portfolio",
      status: "IN_DEVELOPMENT",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce application with authentication and payment integration.",
      image: "https://via.placeholder.com/400x250",
      techStack: ["React", "Node.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/ecommerce",
      status: "LIVE",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-20 py-32"
    >
      <h2 className="text-4xl font-bold mb-4">
        Projects
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl">
        Some projects I’ve built and a few I’m currently working on.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
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
        ))}
      </div>
    </section>
  );
}
