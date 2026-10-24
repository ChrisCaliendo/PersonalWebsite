const CertificateCard = ({ title, company, photoUrl, certLink }) => (
  <article className="experience-certification-card">
    <div className="experience-certification-copy">
      <p className="experience-card-label">Certification</p>
      <h3 className="experience-certification-title">{title}</h3>
      <p className="experience-certification-company">{company}</p>
      {certLink && (
        <a
          className="experience-credential-link"
          href={certLink}
          target="_blank"
          rel="noreferrer"
        >
          View credential <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
    {photoUrl && (
      <span className="experience-logo-frame experience-certification-logo">
        <img
          className="experience-logo-image"
          src={photoUrl}
          alt={`${company} certification badge`}
        />
      </span>
    )}
  </article>
);

export default CertificateCard;
