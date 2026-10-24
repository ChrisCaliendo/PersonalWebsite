const ProjectCard = ({ title, desc, photoUrl, elements, depoLink, gitLink }) => {
  const technologies = elements
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  return (
    <article className="project-card">
      {photoUrl ? (
        <div className="project-card-media">
          <img src={photoUrl} alt={`${title} project preview`} />
          <span className="project-media-label">Selected work</span>
        </div>
      ) : (
        <div className="project-card-media project-card-media-placeholder" aria-hidden="true">
          <span className="project-placeholder-mark">&lt;/&gt;</span>
          <span className="project-media-label">Built with purpose</span>
        </div>
      )}
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <div className="project-tech-list" aria-label="Technologies">
          {technologies.map((technology) => (
            <span className="project-tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-card-description">{desc}</div>
        {(depoLink || gitLink) && (
          <div className="project-card-actions">
            {depoLink && (
              <a
                className="project-action project-action-primary"
                href={depoLink}
                target="_blank"
                rel="noreferrer"
              >
                Live project <span aria-hidden="true">↗</span>
              </a>
            )}
            {gitLink && (
              <a
                className="project-action project-action-secondary"
                href={gitLink}
                target="_blank"
                rel="noreferrer"
              >
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
