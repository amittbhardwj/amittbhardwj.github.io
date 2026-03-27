export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-slate-600 text-sm">
            © 2026{" "}
            <span className="gradient-text font-medium">Amitt Bhardwj</span>
            {" "}· Built with Next.js · AI-First Developer
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:amitt.bhardwj@gmail.com"
            className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/amitt-bhardwj-7b9303290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
