import { Link, useLocation } from "react-router-dom";
const PhoneHeaderLink = (props) => {
    const location = useLocation();
    return (  
        <li>
            <Link className="transition ease-in-out duration-300 block py-2 px-3 text-white bg-green-700 rounded-top" disabled={location.pathname == props.pathway} to={props.pathway}>{props.name}</Link>
        </li>
    );
}
export default PhoneHeaderLink;