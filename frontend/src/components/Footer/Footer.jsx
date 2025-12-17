export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 sm:px-20 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">

        {/* LEFT */}
        <div className="font-semibold text-cyan-400">
          Swayam Jaswal
        </div>

        {/* CENTER – SOCIAL ICONS */}
        <div className="flex gap-6 text-gray-400">
          <span className="hover:text-cyan-400 cursor-pointer transition">
            🐙
          </span>
          <span className="hover:text-cyan-400 cursor-pointer transition">
            in
          </span>
          <span className="hover:text-cyan-400 cursor-pointer transition">
            ✉️
          </span>
        </div>

        {/* RIGHT */}
        <div className="text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} Swayam Jaswal. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
