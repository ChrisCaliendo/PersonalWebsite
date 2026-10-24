const EducationCard = ({ degree, place, photoUrl, status }) => (
  <article className="experience-education-card">
    {photoUrl && (
      <span className="experience-logo-frame experience-education-logo">
        <img
          className="experience-logo-image"
          src={photoUrl}
          alt={`${place} logo`}
        />
      </span>
    )}
    {!photoUrl && (
      <span className="experience-logo-frame experience-education-logo experience-education-monogram" aria-label={`${place} mark`}>
        B
      </span>
    )}
    <div>
      <p className="experience-card-label">Academic background</p>
      <h3 className="experience-education-degree">{degree}</h3>
      <p className="experience-education-place">{place}</p>
      {status && <span className="experience-education-status">{status}</span>}
    </div>
  </article>
);

export default EducationCard;
