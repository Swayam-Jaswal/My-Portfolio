export default function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  liveLink,
  githubLink,
  status = "completed", // "completed" | "in-progress"
}) {
  const isInProgress = status === "in-progress";

  return (
    <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition duration-300 hover:scale-[1.02]">

      {/* Status Badge */}
      {isInProgress && (
        <span className="absolute top-4 right-4 z-10 text-xs px-3 py-1 rounded-full bg-yellow-500 text-black font-semibold">
          In Development
        </span>
      )}

      {/* Project Image */}
      <div className="relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-48 object-cover ${
              isInProgress ? "opacity-60 blur-[1px]" : ""
            }`}
          />
        ) : (
          <div className="w-full h-48 bg-zinc-800 flex items-center justify-center text-gray-400 text-sm">
            Image Coming Soon
          </div>
        )}

        {/* Overlay for in-progress */}
        {isInProgress && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/70 px-4 py-2 rounded-md text-sm">
              Live Soon 🚀
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 text-sm">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-zinc-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          {!isInProgress && liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              Live
            </a>
          )}

          {!isInProgress && githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              GitHub
            </a>
          )}

          {isInProgress && (
            <span className="text-sm text-gray-500 italic">
              Live Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
