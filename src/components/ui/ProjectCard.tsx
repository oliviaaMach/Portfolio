import type { Project } from "../../types"

const coverStyles: Record<Project["cover"], string> = {
  rose: "bg-rose text-ink",
  sage: "bg-sage text-ink",
  ink: "bg-ink text-white",
};

type Props = { project: Project };

export function ProjectCard({ project }: Props ) {
    const { name, category, description, stack, cover, live, github } = project;

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-card border-2 border-ink
                            bg-paper transition duration-200 ease-out
                            hover:shadow-pop motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.02]">
            <div className={`flex h-[150px] flex-col justify-between p-4 md:h-[180px] md:p-5 ${coverStyles[cover]}`}>
                <span className="self-start rounded-lg bg-paper px-2.5 py-1.5 
                                font-mono text-small font-semibold lowercase text-ink">
                    {category}
                </span>   
                <h3 className="font-display text-[28px] font-bold md:text-subtitle">
                    {name}
                </h3>             
            </div>
            <div className="flex flex-1 flex-col gap-3.5 p-4 md:p-5">
                <p className="text-large leading-relaxed text-ink-soft">{description}</p>
                <p className="mt-auto font-mono text-medium text-ink-muted">{stack.join(" . ")}</p>
                <div>
                    {live && (
                    <a href={live}
                        className="font-semibold text-rose-deep mr-5
                                    hover:text-rose-hover hover:underline">
                            Live
                        </a>
                    )}
                    {github && (
                        <a href={github}
                            className="font-semibold text-rose-deep hover:text-rose-hover hover:underline">
                                Github
                            </a>
                    )}
                </div>
            </div>     
        </article>                 
    )
}