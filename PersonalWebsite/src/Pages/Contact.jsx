import GithubIcon from "../Assets/GithubIcon.png";
import LinkedInIcon from "../Assets/LinkedInIcon.png";
import ItchIcon from "../Assets/ItchIcon.png";

import SocialLink from "../Components/OtherComponents/SocialLink";

const Contact = () => {
    return ( 
        <>
                        <p className="text-4xl flex justify-center  font-ptSans font-bold">Contact</p>

        <div className="bg-emerald-500 grid lg:grid-cols-2 md:grid-cols-1 gap-40 place-content-around p-10 lg:p-20">
            
            <div className=" bg-emerald-800 text-white col-span-1 font-semibold">
                <div className="border-b-4 border-white text-xl px-6 py-2" >
                    <p className=" text-center">Follow Me</p>
                </div>
                <div className="flex px-5 py-2 bg-emerald-700 place-content-center">
                    <SocialLink
                        picture={LinkedInIcon}
                        link="https://www.linkedin.com/in/christiancaliendo/"
                    />
                    <SocialLink
                        picture={GithubIcon}
                        link="https://github.com/ChrisCaliendo"
                    />
                    <SocialLink
                        picture={ItchIcon}
                        link="https://calcym.itch.io/"
                    />
                    
                </div>
                
                
                <br/>
                    <br />
                    <br />
                    <br />
                    <br />
            </div>
            <div className=" text-center bg-emerald-800 text-white col-span-1 font-semibold">
                <div className="border-b-4 border-white text-xl px-6 py-2" >
                    <p className=" text-center">Contact Me</p>
                </div>
                <div className="px-5 py-2 bg-emerald-700">
                    <p>Email Me: christiantcaliendo@gmail.com</p>
                    <p>You can also message me on Linkedin</p>
                </div>
                
                
                <br/>
                    <br />
                    <br />
                    <br />
                    <br />
            </div>
            
        </div>
        </>
    );
}
export default Contact;