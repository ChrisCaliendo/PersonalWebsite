import GameCard from "../Components/GameCard";
import RigbyImage from "../Assets/RigbyImage.png";
import TrashJobImage from "../Assets/TrashJobImage.png";
import WalbangImage from "../Assets/WalbangImage.png";

const Projects = () => {
    return ( 
        <>
        <p className="text-4xl flex justify-center font-ptSans font-bold">Experience</p>
        <div className="bg-emerald-300 grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 place-content-evenly font-ptSans font-bold">
        <mark class=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-blue-600 rounded dark:bg-blue-500">Work</mark>
            <div className="p-3  bg-purple-300 rounded-md shadow-md">
                <div className=" grid grid-cols-2 grid-rows-1">
                    <div>
                        <p>Eloquent Reviews</p>
                        <p className="italic">JavaScript, React.js, Tailwind, Python, Flask</p>
                    </div>
                    <img className="w-20 rounded-2xl" src="https://media.licdn.com/dms/image/C4E0BAQF6OYSlqipOWQ/company-logo_200_200/0/1631329033032?e=1712793600&v=beta&t=R8S98_o1iY2opiVjjrW-mU0zX0inNv2rQZV8B9KpDjo" alt="" />
                </div>
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Performed as Sole Engineer of a dynamic web application to find and display product reviews</li>
                    <li>Built a frontend with a responsive form and user interface to display reviews and alter preferences</li>
                    <li>Implemented back-end and web scraping capabilities with Python, Flask and BeautifulSoup to scrape from thousands of reviews from Steam</li>
                    <li>Used the Steam API for text processing and sorting based on user preferences</li>
                </ul>
                <p>GitHub Code: https://github.com/ChrisCaliendo/EloquentReviews</p>
            </div>
            <div className="p-3 bg-purple-300 rounded-md shadow-md">
                
                <div className="grid grid-cols-2 grid-rows-1 place-content-center">
                    <div>
                        <p>Cost Minus Drugs</p>
                        <p className="italic">MongoDB, Express, React.js, Node.js, ChakraUI</p>
                    </div>
                </div>
                
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Developed a prototype full-stack e-commerce website that distributes and sells generic drugs for affordable pricing, all with 24 hours</li>
                    <li>Served as the lead frontend engineer, leveraging React and ChakraUI</li>
                    <li>Won beginner prize at Divhacks hackathon 2023</li>
                </ul>
                <p> GitHub Code: https://github.com/Sajid2001/divhacks-project</p>
            </div>
            <div className="p-3 bg-purple-300 rounded-md shadow-md">
                
                <div className="grid grid-cols-2 grid-rows-1 place-content-center">
                    <div>
                        <p>Omniswipe</p>
                        <p className="italic">React Native, Expo, Firebase Firestore, Git</p>
                    </div>
                </div>
                
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Contributed to 5 major group projects involving programming with C# and Unity Game Engine to develop games</li>
                    <li>Created and finished 2 award-winning and publicly accessible games with collaboration from many participants with wide variety of skill sets</li>
                    <li>Managed team to develop AR technology using Unreal Engine and C++</li>
                </ul>
                <p>GitHub Code: https://github.com/JuanPringle/OmniSwipe</p>
            </div>
            <div className="p-3 bg-purple-300 rounded-md shadow-md">
                
                <div className="grid grid-cols-2 grid-rows-1 place-content-center">
                    <div>
                        <p>Vehicle Cloud Management Software</p>
                        <p className="italic">Java, JFrame, MySQL, Git</p>
                    </div>
                </div>
                
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Served as lead programmer in the development of a Vehicular cloud program, alongside 3 other developers, using Java and JFrame</li>
                    <li>Functioned as lead programmer of backend and engineer for data management database using Java and MySQL</li>
                    <li>Connected frontend interface to backend data storage with multithreading.</li>
                </ul>
                <p>GitHub Code: https://github.com/jlin7500/GUI</p>
            </div>
            <mark class="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-blue-600 rounded dark:bg-blue-500">Games</mark>
            <div className="pl-3 bg-blue-300 rounded-md shadow-md">
                <GameCard
                    title="RiGBY"
                    desc="A platformer made with Unity and C#"
                    photoUrl={RigbyImage}
                />
            </div>
            <div className="pl-3 bg-blue-300 rounded-md shadow-md">
                <p>Walbang!</p>
                <p></p>
                
            </div>
            <div className="pl-3 bg-blue-300 rounded-md shadow-md">
                <p>Trash Job</p>
                <p></p>
                
            </div>
        </div>
        </>
    );
}
export default Projects;