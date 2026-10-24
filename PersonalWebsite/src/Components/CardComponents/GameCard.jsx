const GameCard = ({ title, desc, elements, photoUrl, gameLink, note }) => (
  <article className="project-card project-game-card">
    <div className="project-card-media project-game-media">
      <img src={photoUrl} alt={`${title} game artwork`} />
      <span className="project-game-platform">{elements}</span>
    </div>
    <div className="project-card-content">
      <div className="project-game-heading">
        <h2 className="project-card-title">{title}</h2>
        <span className="project-game-type">Game</span>
      </div>
      <div className="project-card-description">{desc}</div>
      <p className="project-game-note">{note}</p>
      {gameLink && (
        <div className="project-card-actions">
          <a
            className="project-action project-action-primary"
            href={gameLink}
            target="_blank"
            rel="noreferrer"
          >
            Play on itch.io <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  </article>
);

export default GameCard;
