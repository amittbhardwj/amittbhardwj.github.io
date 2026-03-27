"use client";

import { useEffect, useRef } from "react";

export default function Projects() {
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
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              What I&apos;ve Built
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* OpenClaw - Featured */}
            <div className="lg:col-span-2 glass rounded-2xl p-8 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_60px_rgba(124,58,237,0.15)] hover:border-purple-500/30 border border-white/8">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-lg">
                        🦞
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-2xl">OpenClaw</h3>
                        <p className="text-slate-500 text-sm">
                          Personal AI Agent Platform
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="badge badge-green text-xs self-start">
                    Personal Project
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                  A self-hosted personal AI agent ecosystem built for research
                  automation and intelligent task execution. OpenClaw configures
                  multiple specialized agents that work in coordination — handling
                  web research, data collection, document synthesis, and
                  autonomous workflow execution without constant supervision.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Research Agent", desc: "Autonomous web research & synthesis" },
                    { label: "Automation Agent", desc: "Task execution & workflow management" },
                    { label: "Data Agent", desc: "Collection, parsing & intelligence" },
                  ].map((feature) => (
                    <div
                      key={feature.label}
                      className="rounded-lg bg-white/3 border border-white/5 p-4"
                    >
                      <p className="text-white text-sm font-medium mb-1">
                        {feature.label}
                      </p>
                      <p className="text-slate-500 text-xs">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "AI Agents", "LLM Integration", "Automation", "Research", "Self-Hosted"].map(
                    (tag) => (
                      <span key={tag} className="badge badge-purple text-xs">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Placeholder card */}
            <div className="lg:col-span-2 glass rounded-2xl p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-4">
                🚧
              </div>
              <h3 className="text-white font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-slate-500 text-sm max-w-sm">
                Currently building more AI-powered tools and open-source projects.
                Watch this space.
              </p>
              <div className="flex gap-2 mt-4">
                {["AI", "Python", "Agents"].map((t) => (
                  <span key={t} className="badge badge-blue text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
