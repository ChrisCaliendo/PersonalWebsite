import SkillBar from "../Components/OtherComponents/SkillBar";

const skillGroups = [
  {
    title: "Languages",
    description: "The building blocks",
    skills: [
      ["Java", 100],
      ["JavaScript", 100],
      ["Python", 80],
      ["C#", 80],
      ["SQL", 60],
      ["C++", 20],
    ],
  },
  {
    title: "Frameworks & runtimes",
    description: "Interfaces, services & applications",
    skills: [
      ["React", 100],
      ["Node.js", 80],
      ["Flask", 60],
      ["React Native", 60],
      ["TypeScript", 60],
      ["Angular", 60],
    ],
  },
  {
    title: "Engineering practices",
    description: "How I build with a team",
    skills: [
      ["Object-Oriented Programming", 100],
      ["Agile Development", 60],
      ["DevOps", 40],
      ["SDLC", 20],
      ["Code Reviews", 40],
      ["Automated Testing", 40],
    ],
  },
  {
    title: "Cloud, data & tools",
    description: "Platforms behind the product",
    skills: [
      ["Amazon Web Services", 60],
      ["MongoDB", 60],
      ["Firebase", 60],
      ["Visual Studio", 60],
      ["PostgreSQL", 40],
      ["Docker", 20],
    ],
  },
];

const skillCount = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

const Skills = () => (
  <div className="skills-page">
    <header className="skills-intro">
      <p className="skills-eyebrow">Things I work with</p>
      <h1 className="skills-title">My toolkit<span>.</span></h1>
      <p className="skills-description">
        A mix of languages, frameworks, and practices I use to turn ideas into
        useful things. Always learning, always building.
      </p>
      <div className="skills-summary" aria-label="Skills overview">
        <span><strong>{skillGroups.length}</strong> areas</span>
        <span><strong>{skillCount}</strong> skills</span>
        <span><strong>∞</strong> things to learn</span>
      </div>
    </header>

    <section className="skills-grid" aria-label="Skills by category">
      {skillGroups.map((group, index) => (
        <article
          className="skills-card"
          key={group.title}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <header className="skills-card-header">
            <div>
              <p className="skills-card-kicker">Category 0{index + 1}</p>
              <h2 className="skills-card-title">{group.title}</h2>
              <p className="skills-card-description">{group.description}</p>
            </div>
            <span className="skills-card-count">
              {group.skills.length} skills
            </span>
          </header>
          <div className="skills-list">
            {group.skills.map(([name, progress]) => (
              <SkillBar
                key={name}
                name={name}
                progress={progress}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  </div>
);

export default Skills;
