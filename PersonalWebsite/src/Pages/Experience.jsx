import GETlogo from "../Assets/GETlogo.png";
import awsCP from "../Assets/awsCP.png";
import QhstImage from "../Assets/QhstImage.jpeg";
import StJohnsImage from "../Assets/StJohnsImage.png";
import CareerAdvantageLogo from "../Assets/CareerAdvantageLogo.jpeg";

import ExpCard from "../Components/CardComponents/ExpCard";
import EducationCard from "../Components/CardComponents/EducationCard";
import CertificateCard from "../Components/CardComponents/CertificateCard";


const Experience = () => {
    return ( 
        <>
        <p className="text-4xl bg-emerald-400 flex justify-center font-ptSans font-bold">Experience</p>
        
            
        <div className="bg-emerald-300 grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-4 p-4 md:mx-5 place-content-evenly font-ptSans font-bold md:rounded">
        <mark className=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded ">Work Experience</mark>
            <div className="p-1 bg-emerald-600 rounded-3xl shadow-md">
                <ExpCard
                    title="Software Engineer"
                    employer="Career Advantage Inc."
                    photoUrl={CareerAdvantageLogo}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Remade and reimagined company site using React and TailwindCSS</li>
                            <li>Hosted site using AWS: S3 and Route 53</li>
                            <li>Engineered a dynamic webpage for job listing page to render and display hundreds of current job openings in the company based on job listing data</li>
                            <li>Designed and made all pages and components with responsive web design</li>
                        </ul>
                    }
                />
            </div>
            <div className="p-1 bg-emerald-600 rounded-3xl shadow-md">
                <ExpCard
                    title="Software Engineer"
                    employer="Gaming and Emerging Technologies Club"
                    photoUrl={GETlogo}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li> Contributed to 5 major group projects involving programming with C# and Unity Game Engine to develop games</li>
                            <li> Created and finished 2 award-winning and publicly accessible games with collaboration from many participants with wide variety of skill sets</li>
                            <li>  Managed team to develop AR technology using Unreal Engine and C++</li>
                        </ul>
                    }
                />
            </div>
            <mark className="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded">Educational Experience</mark>
            <div className="p-1 bg-red-400 rounded-3xl shadow-md">
                <EducationCard
                    degree="Bachelors Degree, in Computer Science"
                    place="St. John's University"
                    photoUrl={StJohnsImage}
                />
            </div>
            <div className="p-1 bg-red-400 rounded-3xl shadow-md">
                <EducationCard
                    degree="High School Degree"
                    place="Queens Highschool of Teaching"
                    photoUrl={QhstImage}
                /> 
            </div>
            <mark className="text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded">Certifications</mark>
            <div className="p-1 rounded-3xl shadow-md bg-indigo-400 lg:col-span-2 col-span-1 lg:w-1/2 justify-self-center">
                <CertificateCard
                    title="Certified Cloud Practicioner"
                    company="Amazon Web Services"
                    photoUrl={awsCP}
                    certLink="https://www.credly.com/badges/279841b4-e562-4bde-9169-61b23df670d4/linked_in_profile"
                />
            </div>
        </div>
        </>
    );
}
export default Experience;