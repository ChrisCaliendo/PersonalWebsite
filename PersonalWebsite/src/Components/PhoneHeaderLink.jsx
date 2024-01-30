import { Link, useLocation } from "react-router-dom";
const PhoneHeaderLink = (props) => {
    const location = useLocation();
    return (  
        <li>
            <Link className={`${location.pathname === props.pathway ? "text-emerald-800 bg-white" : "text-white bg-green-700 hover:text-slate-300 hover:bg-emerald-800"} transition ease-out duration-300 block py-2 px-3 rounded-top`} to={props.pathway}>{props.name}</Link>
        </li>
    );
}
export default PhoneHeaderLink;