export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 sm:px-20 py-32"
    >
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-cyan-400 font-medium">
          Get in Touch
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
          Let&apos;s <span className="text-cyan-400">collaborate</span>
        </h2>

        <p className="text-gray-400 mt-6">
          Have a project in mind or want to discuss opportunities?
          I&apos;d love to hear from you.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT – FORM */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/50"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/50"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/50 resize-none"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition">
            Send Message ✈️
          </button>
        </div>

        {/* RIGHT – INFO CARDS */}
        <div className="space-y-8">

          {/* OPEN FOR OPPORTUNITIES */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">
              Open for opportunities
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m currently available for freelance projects,
              full-time roles, and interesting collaborations.
              If you have an idea that needs creative coding,
              let&apos;s talk!
            </p>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 cursor-pointer">
                🐙
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 cursor-pointer">
                in
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 cursor-pointer">
                ✉️
              </div>
            </div>
          </div>

          {/* QUICK RESPONSE */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">
              Quick response
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I typically respond within 24 hours.
              For urgent inquiries, feel free to reach out
              via LinkedIn.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
