import { useState } from "react";
import type { Filter } from "../../types";
import { filters, projects } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { Chip } from "../ui/Chip";
import { ProjectCard } from "../ui/ProjectCard";
import { sections } from "../../data/sections";

export function Projects() {
    const [active, setActive] = useState<Filter>("Alla");
    const shown = 
        active === "Alla" ? projects : projects.filter((p) => p.category === active); 

    return (
        <section 
            id={sections.projects}
            className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-20
                        md:px-8 md:pb-28">
        
    {/* ========== Rubrik + filter ========== */}
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-3">
                    <SectionLabel 
                        number="02" 
                        label="Projekt" />
                    <h2 className="font-sans font-semibold text-4xl md:text-hero 
                                    leading-none tracking-[-0.02em]">
                        Utvalda projekt
                    </h2>
                </div>
                <div role="group"
                    aria-label="Filtrera projekt"
                    className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <Chip 
                                key={f} 
                                label={f} 
                                active={active === f}
                                onClick={() => setActive(f)} />
                        ))}
                </div>
            </div>
    {/* ========== Mobileview========== */}
            {shown.length > 0 ? (
                <ul className="-mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-3 
                                md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
                    {shown.map((project) => (
                        <li key={project.name} 
                            className="w-[209px] shrink-0 snap-start md:w-auto">
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-large text-ink-muted">Inga projekt i denna kategorin än - Men det byggs på!</p>
            )}
                        
                            
        </section>

    )
}