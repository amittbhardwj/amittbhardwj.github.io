"use client";

import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "⚡",
    label: "5+ Years Experience",
    desc: "Backend engineering across fintech, logistics, and telecom",
  },
  {
    icon: "🤖",
    label: "AI-First Mindset",
    desc: "Building agent-powered systems that automate real business workflows",
  },
  {
    icon: "✅",
    label: "Available Now",
    desc: "Open Work Permit · Ready for in-office or remote roles in Montreal",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="section-animate grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Bio */}
          <div>
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Backend engineer turned{" "}
              <span className="gradient-text">AI builder</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m a Python developer with 5+ years of hands-on experience
                building scalable backend systems across financial services,
                logistics, and telecom — at companies like{" "}
                <span className="text-slate-200">Morgan Stanley</span>,{" "}
                <span className="text-slate-200">CN Rail</span>, and{" "}
                <span className="text-slate-200">Ericsson</span>.
              </p>
              <p>
                Today, I&apos;m focused on what&apos;s next: building{" "}
                <span className="text-slate-200">AI-first systems</span> that
                don&apos;t just assist — they act. I design and deploy custom AI
                agents that integrate into your existing stack and automate
                complex, multi-step workflows autonomously.
              </p>
              <p>
                Based in Montreal with an Open Work Permit, I&apos;m available
                for freelance contracts, full-time roles, and AI consulting
                engagements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="mailto:amitt.bhardwj@gmail.com"
                className="btn-primary text-sm"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/amitt-bhardwj-7b9303290/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="glass glass-hover rounded-xl p-6 flex gap-4 items-start"
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{h.label}</h3>
                  <p className="text-slate-400 text-sm">{h.desc}</p>
                </div>
              </div>
            ))}

            {/* Education quick-card */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Education
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="text-slate-200 text-sm font-medium">
                    M.Eng Software Engineering
                  </p>
                  <p className="text-slate-500 text-xs">
                    Concordia University · 2017 – 2019
                  </p>
                </div>
                <div>
                  <p className="text-slate-200 text-sm font-medium">
                    B.Tech Computer Science
                  </p>
                  <p className="text-slate-500 text-xs">
                    Guru Nanak Dev Engineering College · 2012 – 2016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
