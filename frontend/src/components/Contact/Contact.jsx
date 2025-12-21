import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        autoAlpha: 0,
        y: 40,
        stagger: 0.2,
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
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("SUCCESS");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("ERROR");
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen px-6 sm:px-20 py-32"
    >
      {/* HEADER */}
      <div className="contact-animate text-center max-w-2xl mx-auto mb-20">
        <span className="text-cyan-400 font-medium">
          Get in Touch
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-[var(--text-primary)]">
          Let&apos;s <span className="text-cyan-400">collaborate</span>
        </h2>

        <p className="mt-6 text-[var(--text-secondary)]">
          Have a project in mind or want to discuss opportunities?
          I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-animate space-y-6"
        >
          {["Name", "Email"].map((label, i) => (
            <div key={i}>
              <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                {label}
              </label>
              <input
                type={label === "Email" ? "email" : "text"}
                name={label.toLowerCase()}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm mb-2 text-[var(--text-secondary)]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-medium"
          >
            {loading ? "Sending..." : "Send Message ✈️"}
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-400 text-sm">
              Message sent successfully!
            </p>
          )}

          {status === "ERROR" && (
            <p className="text-red-400 text-sm">
              Failed to send message.
            </p>
          )}
        </form>

        {/* INFO */}
        <div className="contact-animate space-y-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Open for opportunities
            </h3>

            <p className="mt-4 text-[var(--text-secondary)]">
              I'm currently available for freelance projects and collaborations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Quick response
            </h3>

            <p className="mt-4 text-[var(--text-secondary)]">
              I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
