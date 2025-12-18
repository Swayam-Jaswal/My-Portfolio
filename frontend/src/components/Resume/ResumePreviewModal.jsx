export default function ResumePreviewModal({ open, onClose, preview, file }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-4xl bg-[var(--background-color)] rounded-2xl border border-white/10 overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Preview
          </h3>

          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            ✕
          </button>
        </div>

        {/* ✅ PREVIEW (uses preview URL, NOT download URL) */}
        <div className="h-[70vh] bg-black">
          <iframe
            src={preview}
            title="Document Preview"
            className="w-full h-full"
            allow="autoplay"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 px-6 py-4 border-t border-white/10">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-[var(--text-primary)] text-black font-medium hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
