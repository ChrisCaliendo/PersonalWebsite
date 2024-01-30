import { Link, useLocation } from "react-router-dom";
const HeaderLink = (props) => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (  
        <li>
            <Link className={`${location.pathname === props.pathway ? "text-emerald-800 bg-white" : "text-white hover:text-slate-300 hover:bg-emerald-800"} p-1 pb-2 px-2 rounded-xl transition ease-in-out duration-150  text-xl font-bold `} to={props.pathway}>{props.name}</Link>
        </li>
    );
}
export default HeaderLink;