"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Python Developer",
    company: "Morgan Stanley",
    type: "Contract",
    period: "Jun 2022 – May 2023",
    location: "Montreal, QC",
    bullets: [
      "Migrated legacy codebase from Python 2 to 3, enhancing security and maintainability",
      "Led Angular frontend upgrade initiatives across the trading platform",
      "Optimized lifecycle data workflows impacting high-volume trading operations",
      "Collaborated in Agile/Scrum team handling risk-related data operations",
    ],
    tags: ["Python", "Angular", "Agile", "Financial Systems"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Software Developer",
    company: "CN Rail",
    type: "Full-time",
    period: "Feb 2021 – Sep 2021",
    location: "Montreal, QC",
    bullets: [
      "Designed and deployed REST APIs for real-time freight logistics using Python/Flask",
      "Deployed containerized microservices with Docker and Kubernetes via Azure DevOps",
      "Improved query efficiency by 30% through PostgreSQL optimizations on large datasets",
    ],
    tags: ["Python", "Flask", "Docker", "Kubernetes", "PostgreSQL"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Developer",
    company: "Ericsson",
    type: "Full-time",
    period: "Dec 2019 – May 2020",
    location: "Montreal, QC",
    bullets: [
      "Resolved critical system bugs and optimized backend processes using Python",
      "Worked on thread-safe code and Linux system performance improvements",
      "Implemented scalable Docker-based deployments for telecom infrastructure",
    ],
    tags: ["Python", "Linux", "Docker", "Threading"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Software Developer Intern",
    company: "Cerence",
    type: "Internship",
    period: "Sep 2019 – Nov 2019",
    location: "Montreal, QC",
    bullets: [
      "Maintained Java-based QA tools and implemented CI/CD pipelines using GitLab",
      "Automated deployment processes and enhanced testing coverage",
    ],
    tags: ["Java", "GitLab", "CI/CD"],
    color: "from-violet-500 to-purple-500",
  },
  {
    role: "Full Stack App Developer",
    company: "Rolls Royce",
    type: "Freelance",
    period: "Jan 2019 – Aug 2019",
    location: "Montreal, QC",
    bullets: [
      "Developed Django-based modules and reusable applications for automation",
      "Designed and optimized MySQL databases for production workloads",
      "Wrote Python automation scripts and enforced PEP 8 standards",
    ],
    tags: ["Django", "Python", "MySQL", "Full Stack"],
    color: "from-rose-500 to-pink-500",
  },
  {
    role: "Full Stack Developer",
    company: "BMAD",
    type: "Full-time",
    period: "Jun 2018 – Dec 2018",
    location: "Montreal, QC",
    bullets: [
      "Developed React components and optimized Flask backend APIs",
      "Conducted R&D with React 360 for immersive UI experiences",
    ],
    tags: ["React", "Flask", "Python"],
    color: "from-orange-500 to-amber-500",
  },
  {
    role: "Python Developer",
    company: "CONCURED",
    type: "Full-time",
    period: "Jan 2018 – May 2018",
    location: "Montreal, QC",
    bullets: [
      "Built automated testing framework for backend and frontend React applications",
      "Performed web scraping and deployed apps using GCP, Docker, and Kubernetes",
    ],
    tags: ["Python", "React", "GCP", "Docker"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    role: "Web Developer",
    company: "Preseed Televentures",
    type: "Full-time",
    period: "Jul 2015 – Jan 2016",
    location: "India",
    bullets: [
      "Built Django-based enterprise applications and user authentication systems",
      "Worked on HTML, CSS, and JavaScript frontends for client-facing applications",
    ],
    tags: ["Django", "JavaScript", "HTML/CSS"],
    color: "from-teal-500 to-green-500",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-4 block">
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work{" "}
              <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="timeline-line" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative glass glass-hover rounded-xl p-6">
                  <div className="timeline-dot" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                        >
                          {exp.company}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500 text-sm">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="text-slate-400 text-sm font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="badge badge-purple text-xs">{exp.type}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge badge-blue text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
