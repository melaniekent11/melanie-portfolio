function ProjectCard({ title, description, tech, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <p className="tech"><strong>Tech:</strong> {tech}</p>

        {link && (
          <a href={link} target="_blank">
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;