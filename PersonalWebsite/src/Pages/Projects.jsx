const Projects = () => {
    return ( 
        <>
        <p className="text-4xl flex justify-center font-ptSans font-bold">Experience</p>
        <div className="bg-emerald-300 grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 place-content-evenly font-ptSans font-bold">
        <mark class=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-blue-600 rounded dark:bg-blue-500">Work</mark>
            <div className="p-3  bg-purple-300 rounded-md shadow-md">
                <div className=" grid grid-cols-2 grid-rows-1">
                    <div>
                        <p>Software Engineer</p>
                        <p>Career Advantage Inc</p>
                    </div>
                    <img className="w-20 rounded-2xl" src="https://media.licdn.com/dms/image/C4E0BAQF6OYSlqipOWQ/company-logo_200_200/0/1631329033032?e=1712793600&v=beta&t=R8S98_o1iY2opiVjjrW-mU0zX0inNv2rQZV8B9KpDjo" alt="" />
                </div>
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Remade and reimagined company site using React and TailwindCSS</li>
                    <li>Hosted site using AWS: S3 and Route 53</li>
                    <li>Engineered a dynamic webpage for job listing page to render and display hundreds of current job openings in the company based on job listing data</li>
                    <li>Designed and made all pages and components with responsive web design</li>
                </ul>
            </div>
            <div className="p-3 bg-purple-300 rounded-md shadow-md">
                
                <div className="grid grid-cols-2 grid-rows-1 place-content-center">
                    <div>
                        <p>Software Engineer</p>
                        <p>Gaming and Emerging Technologies Club</p>
                    </div>
                </div>
                
                
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li> Contributed to 5 major group projects involving programming with C# and Unity Game Engine to develop games</li>
                    <li> Created and finished 2 award-winning and publicly accessible games with collaboration from many participants with wide variety of skill sets</li>
                    <li>  Managed team to develop AR technology using Unreal Engine and C++</li>
                </ul>
            </div>
            <mark class="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-blue-600 rounded dark:bg-blue-500">Games</mark>
            <div className="pl-3 bg-blue-300 rounded-md shadow-md">
                <p>Bachelors Degree, in Computer Science</p>
                <p>St. Johns University</p>
                
            </div>
            <div className="pl-3 bg-blue-300 rounded-md shadow-md">
                <p>High School Degree</p>
                <p>Queens Highschool of Teaching</p>
                
            </div>
        </div>
        </>
    );
}
export default Projects;