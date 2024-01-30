import { Link, useLocation } from "react-router-dom";
const HeaderLink = (props) => {
    const location = useLocation();
    return (  
        <li>
            <Link className="disabled:text-blue-500 p-1 pb-2 px-2 rounded-xl transition ease-in-out duration-150 text-white text-xl font-bold hover:text-slate-300 hover:bg-emerald-800" disabled={location.pathname === props.pathway} to={props.pathway}>{props.name}</Link>
        </li>
    );
}
export default HeaderLink;