import { Link } from "react-router-dom";
import HomeAmbient from "../Components/OtherComponents/HomeAmbient";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path
      d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Home = () => (
  <div className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <HomeAmbient />
      <div className="home-hero-copy">
        <p className="home-eyebrow">Software engineer · Creative builder</p>
        <h1 className="home-title" id="home-title">
          Christian
          <span>Caliendo.</span>
        </h1>
        <p className="home-intro">
          I build thoughtful web experiences and playful software, bringing
          curiosity, collaboration, and a love of problem-solving to every
          project.
        </p>
        <div className="home-actions">
          <Link className="home-button" to="/projects">
            Explore my work <ArrowIcon />
          </Link>
          <Link className="home-button home-button-secondary" to="/contact">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="home-art" aria-hidden="true">
        <div className="home-art-ring" />
        <div className="home-art-card">
          <p className="home-art-label">A little bit of everything</p>
          <div className="home-art-code">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="home-art-footer">
            <span>Ideas → things that work</span>
            <span className="home-art-dot" />
          </div>
        </div>
      </div>
    </section>

    <section className="home-below" aria-label="A little about me">
      <article className="home-story">
        <p className="home-section-label">A little about me</p>
        <h2 className="home-section-title">Curious by nature, builder by choice.</h2>
        <p>
          My path into computer science started with Scratch and grew into
          full-stack development, databases, and game design at St. John&apos;s
          University. I enjoy turning a rough idea into something useful—and
          working with good people along the way.
        </p>
        <p>
          Outside of web projects, game jams have introduced me to new tools,
          creative teams, and the fun of making something under a deadline.
        </p>
        <Link className="home-text-link" to="/experience">
          More about my experience <ArrowIcon />
        </Link>
      </article>

      <aside className="home-highlights">
        <p className="home-section-label">What I enjoy</p>
        <h2 className="home-section-title">A mix of logic &amp; imagination.</h2>
        <ul className="home-highlight-list">
          <li>Building web apps from front to back</li>
          <li>Making games with a team</li>
          <li>Learning tools by putting them to work</li>
        </ul>
      </aside>
    </section>
  </div>
);

export default Home;
