"use client";

import { useEffect, useRef, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMsg("Please fill in all fields.");
      setFormState("error");
      return;
    }
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              Let&apos;s Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-base">
              Whether you want to integrate AI into your business or just want
              to talk tech — I&apos;m always open to interesting projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {formState === "success" ? (
                <div className="glass rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Thanks for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm mb-2 font-medium">
                        Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm mb-2 font-medium">
                        Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-2 font-medium">
                      Subject <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-2 font-medium">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  {formState === "error" && errorMsg && (
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-5">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:amitt.bhardwj@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-lg flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">Email</p>
                      <p className="text-slate-200 text-sm group-hover:text-purple-400 transition-colors">
                        amitt.bhardwj@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/amitt-bhardwj-7b9303290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg flex-shrink-0">
                      💼
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">LinkedIn</p>
                      <p className="text-slate-200 text-sm group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/amitt-bhardwj
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">Location</p>
                      <p className="text-slate-200 text-sm">
                        Montreal, QC, Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">Availability</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-medium">
                    Open to opportunities
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Available for freelance contracts, full-time roles, and AI
                  consulting. Typically respond within 24 hours.
                </p>
              </div>

              <div className="glass rounded-xl p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                <p className="text-slate-400 text-sm italic">
                  &ldquo;The best way to predict the future is to build it —
                  preferably with an AI agent doing half the work.&rdquo;
                </p>
                <p className="text-slate-600 text-xs mt-2">— Amitt Bhardwj</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
