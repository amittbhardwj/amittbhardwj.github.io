"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🤖",
    title: "Custom AI Agent Development",
    description:
      "Design and build intelligent agents tailored to your business workflows. From single-task bots to multi-agent orchestration systems that reason, plan, and execute autonomously.",
    tags: ["LLM Integration", "Multi-Agent", "Python", "FastAPI"],
    gradient: "from-purple-500/10 to-blue-500/10",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Automate repetitive, multi-step business tasks using LLM-powered pipelines. Replace manual processes with AI workflows that run 24/7 without human intervention.",
    tags: ["Pipeline Design", "Airflow", "Automation", "Redis"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: "🔗",
    title: "AI System Integration",
    description:
      "Embed AI capabilities seamlessly into your existing Python or cloud-native stack. API design, microservices, and LLM integration without disrupting your current infrastructure.",
    tags: ["Docker", "Kubernetes", "REST APIs", "GCP"],
    gradient: "from-emerald-500/10 to-blue-500/10",
  },
  {
    icon: "🔬",
    title: "Research & Data Agents",
    description:
      "Deploy autonomous agents that gather, analyze, and synthesize data from across the web and internal systems — turning information overload into actionable intelligence.",
    tags: ["Web Research", "Data Analysis", "RAG", "Automation"],
    gradient: "from-orange-500/10 to-purple-500/10",
  },
];

export default function Services() {
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
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              What I Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Agent as a{" "}
              <span className="gradient-text">Service</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              I design, build, and deploy AI agent systems that work for your
              business — not just demos, but production-ready solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`service-card glass glass-hover rounded-2xl p-8 bg-gradient-to-br ${service.gradient}`}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="badge badge-purple text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA below services */}
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-4 text-sm">
              Ready to build your AI-powered workflow?
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Let&apos;s Build Together →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
