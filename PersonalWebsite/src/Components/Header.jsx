import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <>
        <div className="text-white bg-slate-800">
        <nav className="bg-emerald-600 p-4">
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-white text-xl font-bold">Christian Caliendo</div>
            <ul className="flex space-x-4">
            <li><Link className="navbar-option" to="/home">Home</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/skills">Skills</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/experience">Experience</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/web_apps">Web Apps</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/software">Software</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/games">Games</Link></li>
            <li><Link className="text-white text-xl font-bold" to="/contact">Contact</Link></li>
            </ul>
        </div>
        </nav>
        </div>
        </>
    );
}
export default Header;