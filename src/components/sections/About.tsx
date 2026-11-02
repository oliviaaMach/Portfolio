import { SectionLabel } from "../ui/SectionLabel"
import { aboutText, facts } from "../../data/about"
import { sections } from "../../data/sections"

export function About() {
    return (
        <section 
            id={sections.about}
            className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 
                        md:flex-row md:gap-12 md:px-8 md:py-28">

        {/* ========== Vänster rubrik ========== */}
            <div className="flex flex-col gap-3 md:w-1/3">
                <SectionLabel 
                    number="01"
                    label="Om mig "/>
                <h2 className="flex flex-col font-sans font-semibold text-4xl md:text-hero 
                                leading-none tracking-[-0.02em]">
                    <span>Kod </span>
                    <span>Kreativitet</span>  
                    <span>Utveckling </span>
                </h2>
            </div>

        {/* ========== Höger rubrik ========== */}
            <div className="flex flex-1 flex-col gap-7">
                <p className="text-large leading-relaxed text-ink-soft">
                    {aboutText}
                </p>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {facts.map((fact) => (
                        <div 
                            key={fact.label}
                            className={`flex flex-col gap-1.5 rounded-[20px] p-5 ${fact.highlight ? "bg-sage" : "bg-blush"}`}>
                                <dt className="font-mono text-[13px] text-ink-muted">{fact.label}</dt>
                                <dd className="font-display text-[22px] font-bold">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}