import { useState } from "react";
import { DOCUMENTS } from "../../constants/Documents";
import ResumePreviewModal from "./ResumePreviewModal";

export default function Resume() {
  const [previewDoc, setPreviewDoc] = useState(null);

  return (
    <section id="resume" className="min-h-screen px-6 sm:px-20 py-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          My <span className="text-cyan-400">Resume</span>
        </h2>

        <p className="mt-6 text-[var(--text-secondary)]">
          A summary of my professional journey, education, and certifications.
        </p>

        <button
          onClick={() => setPreviewDoc(DOCUMENTS.resume)}
          className="mt-10 px-8 py-3 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          View / Download Resume
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* EXPERIENCE */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
            Experience
          </h3>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4">
            <span className="text-sm text-cyan-400">
              June 2025 – July 2025
            </span>

            <h4 className="font-semibold text-[var(--text-primary)]">
              Full Stack Development Intern
            </h4>

            <p className="text-sm text-[var(--text-secondary)]">
              Xebia IT Architects
            </p>

            <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)] list-disc list-inside">
              <li>
                Worked on full-stack development tasks using React, Node.js,
                and MongoDB.
              </li>
              <li>
                Collaborated using Git-based workflows and agile practices.
              </li>
              <li>
                Built a mini full-stack project with API & DB integration.
              </li>
              <li>
                Strengthened debugging, testing, and feature implementation.
              </li>
            </ul>
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
              Education
            </h3>

            <div className="space-y-4">
              {[
                {
                  year: "2023 – Present",
                  title: "B.Tech in Computer Science & Engineering",
                  org: "Sharda University",
                },
                {
                  year: "2022 – 2023",
                  title: "Intermediate",
                  org: "Kalka Public School",
                },
                {
                  year: "2020 – 2021",
                  title: "High School",
                  org: "New Green Field School",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-white/10 bg-white/5"
                >
                  <span className="text-sm text-cyan-400">{edu.year}</span>
                  <h4 className="mt-2 font-semibold text-[var(--text-primary)]">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {edu.org}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
              Certifications
            </h3>

            <div className="space-y-4">
              {DOCUMENTS.certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setPreviewDoc(cert)}
                  className="w-full flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
                >
                  <span className="text-[var(--text-secondary)]">
                    {cert.name}
                  </span>
                  <span className="text-cyan-400">View</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <ResumePreviewModal
        open={!!previewDoc}
        onClose={() => setPreviewDoc(null)}
        preview={previewDoc?.preview}
        file={previewDoc?.file}
      />
    </section>
  );
}
