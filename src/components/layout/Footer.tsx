import { sections } from "../../data/sections";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-7 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 font-mono text-medium text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Olivia Mach</span>
        <span>Byggd med kärlek för React, TypeScript &amp; lite för mycket kaffe</span>
        <a href={`#${sections.top}`} className="font-semibold text-rose-deep hover:text-rose-hover">
          Till toppen ↑
        </a>
      </div>
    </footer>
  );
}