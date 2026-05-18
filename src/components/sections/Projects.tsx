import "./Projects.css"
import { projects } from "../../data/projects"
import Section from "../layout/Section"
import ProjectCard from "../ui/ProjectCard"

type ProjectsProps = {
  variant?: "primary-bg" | "secondary-bg"
}

export default function Projects({ variant = "primary-bg" }: ProjectsProps) {
  return (
    <Section className="projects" id="projects" variant={variant}>
      <div className="projects-container">
        <h2>Selected Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
