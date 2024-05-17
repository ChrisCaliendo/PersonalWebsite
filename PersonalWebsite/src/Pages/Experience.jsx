import GETlogo from "../Assets/GETlogo.png";
import awsCP from "../Assets/awsCP.png";
import QhstImage from "../Assets/QhstImage.jpeg";
import StJohnsImage from "../Assets/StJohnsImage.png";
import CareerAdvantageLogo from "../Assets/CareerAdvantageLogo.jpeg";
import SymbolsLogo from "../Assets/symbo_ls_logo.jpg";

import ExpCard from "../Components/CardComponents/ExpCard";
import EducationCard from "../Components/CardComponents/EducationCard";
import CertificateCard from "../Components/CardComponents/CertificateCard";


const Experience = () => {
    return ( 
        <>
        <p className="mh-4 text-4xl bg-emerald-400 flex justify-center font-ptSans font-bold">Experience</p>
        
            
        <div className="bg-emerald-300 grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-4 p-4 md:mx-5 place-content-evenly font-ptSans font-bold md:rounded">
        <mark className=" text-center md:col-span-1 lg:col-span-2 text-4xl font-bold ppx-2 text-white bg-emerald-800 rounded ">Work Experience</mark>
        <div className="mh-4 p-1 bg-emerald-600 rounded-3xl shadow-md">
                <ExpCard
                    title="Web Developer Intern  and QA Tester"
                    employer="Symbols"
                    photoUrl={SymbolsLogo}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Developed frontend components and web applications using experimental web-based code editor and javascript framework leveraging prior knowlege of Javascript, Jquery, React, Angular and Css</li>
                            <li>Gave reports on bugs with the framework on the company platform, missing documentation, suggested features to aid in user productivity and provided feedback on new features</li>
                            <li>Completed 4 projects utilizing the Symbols in-development framework DOMQL to create reusable components and pages to be available on company platform while following Figma guidelines for design and functionality requirements</li>
                            <li>Aided in assistance of other interns to teach them how to set up backend services, connect with API's and help them understand how to better use the company plateform and framework</li>
                        </ul>
                    }
                />
            </div>
            <div className="p-1 bg-emerald-600 rounded-3xl shadow-md ">
                <ExpCard
                    title="Software Engineer"
                    employer="Career Advantage Inc."
                    photoUrl={CareerAdvantageLogo}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Spearheaded the transformation of the company website using React and TailwindCSS, resulting in a modernized and user-friendly interface</li>
                            <li>Engineered a dynamic job listing page for real-time display of hundreds of listings, boosting user efficiency</li>
                            <li>Employed responsive web design techniques to optimize the website for seamless usage and accessibility across devices</li>
                            <li>Implemented AWS infrastructure, leveraging S3 and Route 53, to ensure scalability and reliability of the hosted website</li>
                        </ul>
                    }
                />
            </div>
            <div className="mh-4 p-1 bg-emerald-600 rounded-3xl shadow-md lg:col-span-2 col-span-1 lg:w-1/2 justify-self-center">
                <ExpCard
                    title="Software Engineer"
                    employer="Gaming and Emerging Technologies Club"
                    photoUrl={GETlogo}
                    desc={
                        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                            <li>Contributed to 5 major group projects involving programming with C# and Unity Game Engine to develop games with groups ranging from 4-8 people</li>
                            <li>Created and finished 2 award-winning and publicly accessible games with collaboration from many participants with wide variety of skill sets</li>
                            <li>Managed a team of 5 to develop AR technology using Unreal Engine and C++</li>
                            <li>Designed over a hundred game assets for multiple projects as well as redesigned and redrew club logo</li>
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