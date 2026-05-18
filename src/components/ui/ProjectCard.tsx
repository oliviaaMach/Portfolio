import "./ProjectCard.css"

type ProjectCardProps = {
    title: string
    image: string
    description: string
    tech: string[]
    liveUrl: string
    githubUrl: string
    className?: string
}

export default function ProjectCard({ 
    title, 
    image,
    description, 
    tech, liveUrl, 
    githubUrl, 
    className = "" 
}: ProjectCardProps) {
    return (
        <div className={`project-card ${className}`}>
            <img src={image} className={`projectImage 
                ${title === "Dicee" ? "diceeImage" : "" }
                ${title === "The Drumkit" ? "drumkitImage" : "" }
                ${title === "Ping Pong" ? "pingPongImage" : "" }
                ${title === "The ToDo List" ? "toDoImage" : "" }
                
                `} />
            <h3 className="title">
                {title}
                </h3>
            <p>
                {description}
            </p> 
            <div className="tech">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={liveUrl}>Live</a>
        <a href={githubUrl}>GitHub</a>
      </div>
        </div>
    )}