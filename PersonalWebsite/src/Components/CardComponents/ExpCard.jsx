const ExpCard = ({ title, desc, photoUrl, employer }) => (
  <article className="experience-work-card">
    <div className="experience-work-card-top">
      {photoUrl && (
        <span className="experience-logo-frame experience-work-logo">
          <img
            className="experience-logo-image"
            src={photoUrl}
            alt={`${employer} logo`}
          />
        </span>
      )}
    </div>
    <h3 className="experience-role">{title}</h3>
    <p className="experience-employer">{employer}</p>
    <div className="experience-card-divider" />
    {desc}
  </article>
);

export default ExpCard;
