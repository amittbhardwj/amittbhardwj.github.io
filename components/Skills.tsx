"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    color: "badge-purple",
    icon: "{ }",
    skills: ["Python (Advanced)", "JavaScript", "TypeScript", "Java", "Bash"],
  },
  {
    category: "Frameworks",
    color: "badge-blue",
    icon: "⚡",
    skills: ["FastAPI", "Flask", "Django", "React", "Next.js", "Angular"],
  },
  {
    category: "AI & Agents",
    color: "badge-green",
    icon: "🤖",
    skills: [
      "LLM Integration",
      "Agent Frameworks",
      "Automation Pipelines",
      "Groq API",
      "OpenAI API",
      "RAG Systems",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "badge-orange",
    icon: "☁️",
    skills: [
      "Docker",
      "Kubernetes",
      "GCP",
      "Azure DevOps",
      "CI/CD",
      "Jenkins",
      "Apache Airflow",
    ],
  },
  {
    category: "Databases",
    color: "badge-pink",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills &{" "}
              <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-base">
              A full-stack toolkit with deep Python expertise and a growing
              focus on AI-native development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="glass glass-hover rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg">{group.icon}</span>
                  <h3 className="text-white font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`badge ${group.color} text-xs`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications card */}
            <div className="glass rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">🏆</span>
                <h3 className="text-white font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="badge badge-orange text-xs">In Progress</span>
                  <span className="text-slate-300 text-sm">
                    AWS Solutions Architect – Associate
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Hindi", "Punjabi", "French (A1)"].map((l) => (
                      <span key={l} className="badge badge-blue text-xs">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
