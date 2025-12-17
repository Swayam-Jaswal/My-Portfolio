export default function ScrollButton({ targetId, children, className = "" }) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-md font-medium transition ${className}`}
    >
      {children}
    </button>
  );
}
