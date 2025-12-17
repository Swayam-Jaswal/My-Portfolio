import ScrollButton from "../UI/ScrollButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 sm:px-20 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md">
      <div className="text-xl font-bold">
        Swayam
      </div>

      <div className="flex gap-6">
        <ScrollButton targetId="home">Home</ScrollButton>
        <ScrollButton targetId="projects">Projects</ScrollButton>
        <ScrollButton targetId="about">About</ScrollButton>
        <ScrollButton targetId="contact">Contact</ScrollButton>
      </div>
    </nav>
  );
}
