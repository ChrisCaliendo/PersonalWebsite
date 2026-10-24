import GETlogo from "../Assets/GETlogo.png";
import awsCP from "../Assets/awsCP.png";
import QhstImage from "../Assets/QhstImage.jpeg";
import StJohnsImage from "../Assets/StJohnsImage.png";
import CareerAdvantageLogo from "../Assets/CareerAdvantageLogo.jpeg";
import SymbolsLogo from "../Assets/symbo_ls_logo.jpg";
import ComptiaLogo from "../Assets/CompTIA_A_2B.png";
import BaruchLogo from "../Assets/baruch.jpg";

import ExpCard from "../Components/CardComponents/ExpCard";
import EducationCard from "../Components/CardComponents/EducationCard";
import CertificateCard from "../Components/CardComponents/CertificateCard";

const experienceItems = [
  {
    title: "Web Developer Intern and QA Tester",
    employer: "Symbols",
    photoUrl: SymbolsLogo,
    achievements: [
      "Developed frontend components and web applications using the experimental DOMQL framework, drawing on JavaScript, jQuery, React, Angular, and CSS.",
      "Reported framework bugs, documentation gaps, and feature ideas to improve the platform and user productivity.",
      "Completed four projects with DOMQL, creating reusable components and pages based on Figma design and functionality requirements.",
      "Helped other interns set up backend services, connect APIs, and get more from the company platform.",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Career Advantage Inc.",
    photoUrl: CareerAdvantageLogo,
    achievements: [
      "Led the company website transformation using React and Tailwind CSS, delivering a more modern and user-friendly experience.",
      "Engineered a dynamic job-listing page to display hundreds of listings in real time.",
      "Applied responsive design techniques for seamless use across devices.",
      "Implemented AWS infrastructure with S3 and Route 53 for scalable, reliable hosting.",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Gaming and Emerging Technologies Club",
    photoUrl: GETlogo,
    achievements: [
      "Contributed to five major group projects using C# and Unity, working with teams of four to eight people.",
      "Collaborated on two award-winning games made available to the public.",
      "Managed a team of five developing augmented reality technology with Unreal Engine and C++.",
      "Designed more than a hundred game assets and redesigned the club logo.",
    ],
  },
];

const educationItems = [
  
  {
    degree: "Master of Science in AI and Business Analytics",
    place: "Baruch College",
    photoUrl: BaruchLogo,
    status: "In progress",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    place: "St. John's University",
    photoUrl: StJohnsImage,
  },
  {
    degree: "High School Diploma",
    place: "Queens High School of Teaching",
    photoUrl: QhstImage,
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    photoUrl: awsCP,
    certLink:
      "https://www.credly.com/badges/279841b4-e562-4bde-9169-61b23df670d4/linked_in_profile",
  },
  {
    title: "CompTIA A+",
    company: "CompTIA",
    photoUrl: ComptiaLogo,
    certLink: "",
  },
];

const Experience = () => (
  <div className="experience-page">
    <header className="experience-intro">
      <p className="experience-eyebrow">The path so far</p>
      <h1 className="experience-title">Experience<span>.</span></h1>
      <p className="experience-description">
        A blend of professional work, collaborative projects, education, and
        certifications that keeps me building and learning.
      </p>
      <div className="experience-summary" aria-label="Experience overview">
        <span><strong>{experienceItems.length}</strong> roles</span>
        <span><strong>{educationItems.length}</strong> schools</span>
        <span><strong>{certifications.length}</strong> certifications</span>
      </div>
    </header>

    <section className="experience-section" aria-labelledby="work-heading">
      <div className="experience-section-heading">
        <div>
          <p className="experience-section-kicker">Where I&apos;ve contributed</p>
          <h2 id="work-heading">Work &amp; projects</h2>
        </div>
      </div>
      <div className="experience-work-grid">
        {experienceItems.map((item) => (
          <ExpCard
            key={item.employer}
            {...item}
            desc={
              <ul className="experience-achievements">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </section>

    <section className="experience-section" aria-labelledby="education-heading">
      <div className="experience-section-heading">
        <div>
          <p className="experience-section-kicker">Foundations &amp; learning</p>
          <h2 id="education-heading">Education</h2>
        </div>
      </div>
      <div className="experience-education-grid">
        {educationItems.map((item) => (
          <EducationCard key={item.place} {...item} />
        ))}
      </div>
    </section>

    <section className="experience-section" aria-labelledby="certifications-heading">
      <div className="experience-section-heading">
        <div>
          <p className="experience-section-kicker">Skills, recognized</p>
          <h2 id="certifications-heading">Certifications</h2>
        </div>
      </div>
      <div className="experience-certification-grid">
        {certifications.map((certification) => (
          <CertificateCard key={certification.title} {...certification} />
        ))}
      </div>
    </section>
  </div>
);

export default Experience;
