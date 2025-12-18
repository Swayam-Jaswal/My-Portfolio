import { FaGithub } from "react-icons/fa";
import defaultThumbnail from "../../assets/default-project-thumbnail 1.png";

export default function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  liveLink,
  githubLink,
  status = "completed",
}) {
  const isInProgress = status === "in-progress";

  const thumbnail =
    image && image.trim() !== "" ? image : defaultThumbnail;

  return (
    <div className="relative border border-white/10 rounded-xl overflow-hidden transition duration-300 hover:scale-[1.02]">

      {isInProgress && (
        <span className="absolute top-4 right-4 z-10 text-xs px-3 py-1 rounded-full bg-yellow-500 text-black font-semibold">
          In Development
        </span>
      )}

      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-48 object-cover ${
            isInProgress ? "opacity-60 blur-[1px]" : ""
          }`}
        />

        {isInProgress && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/70 px-4 py-2 rounded-md text-sm text-white">
              Live Soon 🚀
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)]">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-4">
          {!isInProgress && liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
            >
              Live
            </a>
          )}

          {!isInProgress && githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-center
                w-9 h-9
                rounded-full
                border border-white/10
                text-[var(--text-secondary)]
                hover:text-[var(--text-primary)]
                hover:border-[var(--text-primary)]
                hover:scale-105
                transition
              "
              aria-label="GitHub Repository"
            >
              <FaGithub className="text-lg" />
            </a>
          )}

          {isInProgress && (
            <span className="text-sm italic text-[var(--text-secondary)]">
              Live Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
