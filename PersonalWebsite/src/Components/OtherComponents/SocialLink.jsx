const SocialLink = ({ name, detail, picture, link }) => (
  <a
    className="contact-social-card"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <span className="contact-social-icon">
      <img src={picture} alt="" />
    </span>
    <span className="contact-social-copy">
      <span className="contact-social-name">{name}</span>
      <span className="contact-social-detail">{detail}</span>
    </span>
    <span className="contact-social-arrow" aria-hidden="true">↗</span>
  </a>
);

export default SocialLink;
