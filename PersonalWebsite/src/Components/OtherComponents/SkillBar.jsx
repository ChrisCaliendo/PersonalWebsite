const getLevel = (progress) => {
  if (progress <= 20) return "Beginner";
  if (progress <= 40) return "Intermediate";
  if (progress <= 60) return "Proficient";
  if (progress <= 80) return "Exceptional";
  return "Expert";
};

const SkillBar = ({ name, progress }) => {
  const level = getLevel(progress);

  return (
    <div className="skill-row">
      <div className="skill-row-heading">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-valuetext={level}
      >
        <span
          className="skill-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
