import ProjectCard from "../Components/CardComponents/ProjectCard";
import GameCard from "../Components/CardComponents/GameCard";

import RigbyImage from "../Assets/RigbyImage.png";
import TrashJobImage from "../Assets/TrashJobImage.png";
import WalbangImage from "../Assets/WalbangImage.png";
import EloquentImage from "../Assets/EloquentImage.png";
import OmniswipeImage from "../Assets/OmniswipeImage.png";
import MangoReaderImage from "../Assets/mango-reader.png";

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-intro">
        <p className="projects-eyebrow">A few things I&apos;ve made</p>
        <h1 className="projects-title">Projects<span>.</span></h1>
        <p className="projects-description">
          A collection of web apps, experiments, dashboards, and games built
          with great people and plenty of curiosity.
        </p>
        <div className="projects-summary" aria-label="Project overview">
          <span><strong>8</strong> applications</span>
          <span><strong>3</strong> games</span>
        </div>
      </header>
      <div className="projects-grid">
        <mark className=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold px-2 text-white bg-emerald-800 rounded">
          Websites and Applications
        </mark>
        <div className="project-tile">
          <ProjectCard
            title="Mango Reader"
            elements="Electron, React.js, PostgreSQL, Python, Flask, Redux, Docker"
            photoUrl={MangoReaderImage}
            desc={
              <ul className="ps-5 pb-2 space-y-1 list-disc list-inside">
                <li>
                  Led a team of 3 developers to create a full-stack desktop
                  application for a comic book/manga reader
                </li>
                <li>
                  Engineered frontend using React and Redux to allow for
                  browsing of thousands of series and to store a library of
                  favorites locally
                </li>
                <li>
                  Implemented and managed a PostgreSQL database to handle and
                  store scraped comic information and images. As well as ran a
                  Flask server to handle HTTP requests and data transfer.
                </li>
              </ul>
            }
            gitLink="https://github.com/Sajid2001/mango-reader"
            depoLink=""
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Eloquent Reviews"
            elements="JavaScript, React.js, Tailwind, Python, Flask"
            photoUrl={EloquentImage}
            desc={
              <ul className="ps-5 pb-2 space-y-1 list-disc list-inside">
                <li>
                  Performed as Sole Engineer of a full stack dynamic web
                  application to find and display product reviews
                </li>
                <li>
                  Built a frontend with a responsive form and user interface to
                  display reviews and alter preferences
                </li>
                <li>
                  Implemented back-end and web scraping capabilities with
                  Python, Flask and BeautifulSoup to scrape from thousands of
                  reviews from Steam
                </li>
                <li>
                  Used the Steam API for text processing and sorting based on
                  user preferences
                </li>
              </ul>
            }
            gitLink="https://github.com/ChrisCaliendo/EloquentReviews"
            depoLink="https://eloquent-reviews.vercel.app/"
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Web Analytics Dashboard"
            elements="Next.js, React.js, TypeScript, Redis"
            photoUrl=""
            desc={
              <ul className="ps-5 pb-2 space-y-1 list-disc list-inside">
                <li>
                  Created an API to track user activity on personal website and
                  projects and gauge effectiveness of SEO changes
                </li>
                <li>
                  Tracks site analytics up to a week for hundreds of users and
                  tracks userbase data like location, what pages user tend to
                  visit more and where the majority of user traffic comes from{" "}
                </li>
                <li>
                  Stored user and site data using Redis database through
                  middleware on sites to then be called by a dashboard
                  interface.
                </li>
              </ul>
            }
            gitLink="https://github.com/ChrisCaliendo/website_analytics_dashboard"
            depoLink=""
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Cost Minus Drugs"
            elements="MongoDB, Express, React.js, Node.js, ChakraUI"
            photoUrl=""
            desc={
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Developed a prototype full-stack e-commerce website that
                  distributes and sells generic drugs for affordable pricing,
                  all with 24 hours
                </li>
                <li>
                  Served as the lead frontend engineer, leveraging React and
                  ChakraUI
                </li>
                <li>Won beginner prize at Divhacks hackathon 2023</li>
              </ul>
            }
            gitLink="https://github.com/Sajid2001/divhacks-project"
            depoLink=""
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Omniswipe"
            elements="React Native, Expo, Firebase Firestore, Git"
            photoUrl={OmniswipeImage}
            desc={
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Developed a mobile dating application for both iOS and Android
                  using React Native and Expo
                </li>
                <li>
                  Composed recommendation systems that match users based on
                  personal preferences, hobbies and appearances stored and
                  sorted with Google Firestore as a user info cloud database
                </li>
                <li>Implemented user authentication using Firebase</li>
              </ul>
            }
            gitLink="https://github.com/JuanPringle/OmniSwipe"
            depoLink=""
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Vehicle Cloud Management Software"
            elements="Java, JFrame, MySQL, Git"
            photoUrl=""
            desc={
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Served as lead programmer in the development of a Vehicular
                  cloud program, alongside 3 other developers, using Java and
                  JFrame
                </li>
                <li>
                  Functioned as lead programmer of backend and engineer for data
                  management database using Java and MySQL
                </li>
                <li>
                  Connected frontend interface to backend data storage with
                  multithreading.
                </li>
              </ul>
            }
            gitLink="https://github.com/jlin7500/GUI"
            depoLink=""
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Airline Review Dashboard"
            elements="Tableau"
            photoUrl=""
            desc={
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Built a dashboard for an airline reviews using Tableau with
                  SQL data
                </li>
                <li>
                  Created data visualizations that can display the change in
                  user reviews over time in multiple catagories
                </li>
                <li>
                  Designed an interactive dashboard that makes sorting though
                  thousands of reviews managable
                </li>
              </ul>
            }
            gitLink=""
            depoLink="https://public.tableau.com/app/profile/christian.caliendo/viz/AirlineReviewDashboard_17097834221560/Dashboard1?publish=yes"
          />
        </div>
        <div className="project-tile">
          <ProjectCard
            title="Checklist Web Application"
            elements="JavaScript, HTML, CSS, Bootstraps"
            photoUrl=""
            desc={
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Built a front-end single page application website for a
                  personal task list manager
                </li>
                <li>
                  Made with basic JavaScript, HTML and styled with basic CSS and
                  Bootstraps
                </li>
              </ul>
            }
            gitLink="https://github.com/ChrisCaliendo/Web-Development"
            depoLink="https://chriscaliendo.github.io/Web-Development/"
          />
        </div>
        <mark className="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded">
          Games
        </mark>
        <div className="project-tile project-game-tile">
          <GameCard
            title="RiGBY"
            elements="Unity and C#"
            desc="A puzzle platformer game made with a team of 5 people over the course of a weeklong game jam. Won first place for a game jam hosted at St. Johns University."
            photoUrl={RigbyImage}
            gameLink="https://akrifel.itch.io/rigby"
            note="Playable in browser or by download"
          />
        </div>
        <div className="project-tile project-game-tile">
          <GameCard
            title="Walbang!"
            elements="Unity and C#"
            desc="A bullet hell shooter game made with a team of 4 others for a 48 hour game jam"
            photoUrl={WalbangImage}
            gameLink="https://sajid2001.itch.io/walbang"
            note="Playable only by download"
          />
        </div>

        <div className="project-tile project-game-tile">
          <GameCard
            title="Trash Job"
            elements="Unity and C#"
            desc="A small stealth game with 3 others over a weekend time period. Won first place for a game jam hosted at St. Johns University."
            photoUrl={TrashJobImage}
            gameLink="https://sajid2001.itch.io/trash-job"
            note="Playable only by download"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
