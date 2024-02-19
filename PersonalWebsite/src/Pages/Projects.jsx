import ProjectCard from "../Components/CardComponents/ProjectCard";
import GameCard from "../Components/CardComponents/GameCard";

import RigbyImage from '../Assets/RigbyImage.png';
import TrashJobImage from "../Assets/TrashJobImage.png";
import WalbangImage from "../Assets/WalbangImage.png";
import EloquentImage from "../Assets/EloquentImage.png";
import OmniswipeImage from "../Assets/OmniswipeImage.png";


const Projects = () => {
    
    return ( 
        <>
        <p className="text-4xl flex justify-center font-ptSans font-bold">Projects</p>
        <div className="bg-emerald-300 grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-4 p-4 md:mx-5 place-content-evenly font-ptSans font-bold md:rounded">
        <mark className=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded">Websites, Web Apps and Software</mark>
            <div className="p-1 bg-emerald-400 rounded-3xl shadow-md">
                <ProjectCard
                    title="Eloquent Reviews"
                    elements="JavaScript, React.js, Tailwind, Python, Flask"
                    photoUrl={EloquentImage}
                    desc={
                        <ul className="ps-5 pb-2 space-y-1 list-disc list-inside">
                            <li>Performed as Sole Engineer of a dynamic web application to find and display product reviews</li>
                            <li>Built a frontend with a responsive form and user interface to display reviews and alter preferences</li>
                            <li>Implemented back-end and web scraping capabilities with Python, Flask and BeautifulSoup to scrape from thousands of reviews from Steam</li>
                            <li>Used the Steam API for text processing and sorting based on user preferences</li>
                        </ul>
                    }
                    gitLink="https://github.com/ChrisCaliendo/EloquentReviews"
                    depoLink="https://eloquent-reviews.vercel.app/"
                />
            </div>
            <div className="p-1 bg-emerald-400 rounded-3xl shadow-md">
                <ProjectCard
                    title="Cost Minus Drugs"
                    elements="MongoDB, Express, React.js, Node.js, ChakraUI"
                    photoUrl=""
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Developed a prototype full-stack e-commerce website that distributes and sells generic drugs for affordable pricing, all with 24 hours</li>
                            <li>Served as the lead frontend engineer, leveraging React and ChakraUI</li>
                            <li>Won beginner prize at Divhacks hackathon 2023</li>
                        </ul>
                    }
                    gitLink="https://github.com/Sajid2001/divhacks-project"
                    depoLink=""
                />
            </div>
            <div className="p-1 bg-emerald-400 rounded-3xl shadow-md">
                <ProjectCard
                    title="Omniswipe"
                    elements="React Native, Expo, Firebase Firestore, Git"
                    photoUrl={OmniswipeImage}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Developed a mobile dating application for both iOS and Android using React Native and Expo</li>
                            <li>Composed recommendation systems that match users based on personal preferences, hobbies and appearances stored and sorted with Google Firestore as a user info cloud database</li>
                            <li>Implemented user authentication using Firebase</li>
                        </ul>
                    }
                    gitLink="https://github.com/JuanPringle/OmniSwipe"
                    depoLink=""
                />
            </div>
            <div className="p-1 bg-emerald-400 rounded-3xl shadow-md">
                <ProjectCard
                    title="Vehicle Cloud Management Software"
                    elements="Java, JFrame, MySQL, Git"
                    photoUrl=""
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Served as lead programmer in the development of a Vehicular cloud program, alongside 3 other developers, using Java and JFrame</li>
                            <li>Functioned as lead programmer of backend and engineer for data management database using Java and MySQL</li>
                            <li>Connected frontend interface to backend data storage with multithreading.</li>
                        </ul>
                    }
                    gitLink="https://github.com/jlin7500/GUI"
                    depoLink=""
                />
            </div>
            <div className="p-1 bg-emerald-400 rounded-3xl shadow-md">
                <ProjectCard
                    title="Checklist Web Application"
                    elements="JavaScript, HTML, CSS, Bootstraps"
                    photoUrl=""
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Built a front-end single page application website for a personal task list manager</li>
                            <li>Made with basic JavaScript, HTML and styled with basic CSS and Bootstraps</li>
                        </ul>
                    }
                    gitLink="https://github.com/ChrisCaliendo/Web-Development"
                    depoLink="https://chriscaliendo.github.io/Web-Development/"
                />
            </div>
            <mark className="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded">Games</mark>
            <div className="bg-blue-300 rounded-3xl shadow-md">
                <GameCard
                    title="RiGBY"
                    desc="A puzzle platformer made with Unity and C# with a team of 5 people over the course of a weeklong game jam"
                    photoUrl={RigbyImage}
                    gameLink="https://akrifel.itch.io/rigby"
                    note="Playable in browser or by download"
                />
            </div>
            <div className="bg-blue-300 rounded-3xl shadow-md">
                <GameCard
                    title="Walbang!"
                    desc="A bullet hell shooter made with Unity and C# with 4 others under 48 hours"
                    photoUrl={WalbangImage}
                    gameLink="https://sajid2001.itch.io/walbang"
                    note="Playable only by download"
                />
            </div>
            <div className="bg-blue-300 rounded-3xl shadow-md">
                <GameCard
                    title="Trash Job"
                    desc="A small stealth made with Unity and C# with 3 others over a weekend"
                    photoUrl={TrashJobImage}
                    gameLink="https://sajid2001.itch.io/trash-job"
                    note="Playable only by download"
                />
                
            </div>
        </div>
        </>
    );
}
export default Projects;