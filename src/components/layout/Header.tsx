import { useState } from "react";
import { sections } from "../../data/sections";

const links = [
    {href: `#${sections.about}`, label: "Om mig"},
    {href: `#${sections.projects}`, label: "Projekt"},
    {href: `#${sections.playground}`, label: "Terminal"},
];

export function Header() {
    const [open, setOpen] = useState(false);

    return ( 
        <header className="mx-auto max-w-6xl px-5 py-5 md:px-8">
            <div className="flex items-center justify-between">
                <a href={`#${sections.top}`} className="font-display text-xl font-bold text-ink">
                    Olivia Mach 
                </a>

            {/* ========== Desktop-nav ========== */}
                <nav 
                    aria-label="Huvudmeny"
                    className="hidden items-center gap-2 md:flex">
                        {links.map((l) => (
                            <a 
                                key={l.href} 
                                href={l.href} 
                                className="px-3.5 py-3 font-medium text-ink hover:text-rose-deep">
                                {l.label}
                            </a>
                        ))}
                    <a href={`#${sections.contact}`} className="rounded-full bg-ink px-5 py-3 font-semibold text-white">
                        Säg hej
                    </a>
                    </nav>

            {/* ========== Mobile-button ========== */}
                <button 
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Meny"
                    aria-expanded={open}
                    className="flex size-12 items-center justify-center 
                                rounded-btn border-2 border-ink bg-paper md:hidden">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <path d="M4 7h16M4 12h16M4 17h10" />
                    </svg>
                </button>
            </div>  

            {/* ========== Mobile-button ========== */}
            {open && (
                <nav aria-label="Mobilmeny" className="mt-3 flex flex-col rounded-[20px] bg-ink p-3 md:hidden">
                    {[...links, { href: `#${sections.contact}`, label: "Kontakt →" }].map((l) => (
                        <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="p-3.5 font-display text-2xl font-bold text-white last:text-sage"
                        >
                        {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    )
}