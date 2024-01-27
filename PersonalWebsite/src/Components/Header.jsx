import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderLink from './HeaderLink';
import PhoneHeaderLink from './PhoneHeaderLink';


const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 770); // Adjust the threshold as needed
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
        
    return (  
        <>
        <div className="text-white bg-slate-800">
        <nav className="bg-emerald-600 p-4">
        {isMobile ? 
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="text-white text-xl font-bold">Christian Caliendo</div>
            <button onClick={(e) => setIsOpen(!isOpen)} type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            { isOpen &&
                <div class="w-full" id="navbar-hamburger">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <PhoneHeaderLink name="Home" pathway="/"/>
                    <PhoneHeaderLink name="Skills" pathway="/skills"/>
                    <PhoneHeaderLink name="Experience" pathway="/experience"/>
                    <PhoneHeaderLink name="Projects" pathway="/projects"/>
                    <PhoneHeaderLink name="Contact" pathway="/contect"/>
                </ul>
                </div>
            }
            
            </div>
        :
            <div className="container mx-auto flex items-center justify-between">
            <div className="text-white text-xl font-bold">Christian Caliendo</div>
            <ul className="flex space-x-4">
                <HeaderLink name="Home" pathway="/"/>
                <HeaderLink name="Skills" pathway="/skills"/>
                <HeaderLink name="Experience" pathway="/experience"/>
                <HeaderLink name="Projects" pathway="/projects"/>
                <HeaderLink name="Contact" pathway="/contect"/>
            </ul>
            </div>
        }
        
        </nav>
        </div>
        </>
    );
}
export default Header;