import "./ProjectCard.css"
import type { Project } from "../../types"

type ProjectCardProps = Project & {
  className?: string
}

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  liveUrl,
  githubUrl,
  imageClassName = "",
  className = "",
}: ProjectCardProps) {
  const cardClassName = ["project-card", className].filter(Boolean).join(" ")
  const projectImageClassName = ["projectImage", imageClassName]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={cardClassName}>
      <img src={image} className={projectImageClassName} alt={title} />

      <h3 className="title">{title}</h3>

      <p>{description}</p>

      <div className="tech">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  )
}
