import GithubIcon from "../Assets/GithubIcon.png";
import LinkedInIcon from "../Assets/LinkedInIcon.png";
import ItchIcon from "../Assets/ItchIcon.png";

import SocialLink from "../Components/OtherComponents/SocialLink";

const socialLinks = [
  {
    name: "LinkedIn",
    detail: "Connect professionally",
    picture: LinkedInIcon,
    link: "https://www.linkedin.com/in/christiancaliendo/",
  },
  {
    name: "GitHub",
    detail: "Explore my code",
    picture: GithubIcon,
    link: "https://github.com/ChrisCaliendo",
  },
  {
    name: "itch.io",
    detail: "Play my games",
    picture: ItchIcon,
    link: "https://calcym.itch.io/",
  },
];

const Contact = () => (
  <div className="contact-page">
    <header className="contact-intro">
      <p className="contact-eyebrow">Have a project in mind?</p>
      <h1 className="contact-title">Let&apos;s talk<span>.</span></h1>
      <p className="contact-description">
        I&apos;m always happy to connect about software, creative projects, and
        opportunities to build something useful together.
      </p>
      <a
        className="contact-email-button"
        href="mailto:christiantcaliendo@gmail.com"
      >
        <span className="contact-email-icon" aria-hidden="true">@</span>
        <span>
          <span className="contact-email-label">Send me an email</span>
          <span className="contact-email-address">christiantcaliendo@gmail.com</span>
        </span>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>

    <section className="contact-social-section" aria-labelledby="connect-heading">
      <div className="contact-section-heading">
        <p className="contact-section-kicker">Find me around the web</p>
        <h2 id="connect-heading">More ways to connect</h2>
      </div>
      <div className="contact-social-grid">
        {socialLinks.map((social) => (
          <SocialLink key={social.name} {...social} />
        ))}
      </div>
    </section>
    <p className="contact-note">
      Prefer a quick message? You can reach me on LinkedIn.
    </p>
  </div>
);

export default Contact;
