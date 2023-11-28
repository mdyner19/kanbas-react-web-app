import { Link, useLocation } from "react-router-dom";
import "./kanbasnavigation.css";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function KanbasNavigation() {
    const links = [{
        name: "Account",
        icon: "white fas fa-user-circle fa-2x"
    },
    {
        name: "Dashboard",
        icon: "red fas fa-tachometer-alt fa-2x"
    },
    {
        name: "Courses",
        icon: "red fas fa-book fa-2x"
    },
    {
        name: "Calendar",
        icon: "red far fa-calendar-alt fa-2x"
    },
    {
        name: "Inbox",
        icon: "red fas fa-envelope-open-text fa-2x"
    },
    {
        name: "History",
        icon: "red far fa-clock fa-2x"
    },
    {
        name: "Studio",
        icon: "red fas fa-desktop fa-2x"
    },
    {
        name: "Commons",
        icon: "red fas fa-sign-out-alt fa-2x"
    },
    {
        name: "Help",
        icon: "red far fa-question-circle fa-2x"
    }];
    const { pathname } = useLocation();
    return (
        <div className="wrapper">
            <ul className="list-group kanbas-navigation">
                <li className="kanbas-navigation-li">
                    <Link to="/Kanbas"
                        className={"list-group-item kanbas-navigation"}>
                        <span className="kanbas-navigation-labels">
                            <img src="../../NEUicon.png" height="50px" alt="NEU Logo" />
                        </span>
                    </Link>
                </li>
                <li className="kanbas-navigation-li">
                    <Link to={`/Kanbas/signin`}>Sign In</Link>
                </li>
                <li className="kanbas-navigation-li">
                    <Link to={`/Kanbas/signup`}>Sign Up</Link>
                </li>
                {links.map((link, index) => (
                    <li className="kanbas-navigation-li">
                        <Link
                            key={index}
                            to={`/Kanbas/${link.name}`}
                            className={`list-group-item kanbas-navigation ${pathname.includes(link.name) && "active"}`}>
                            <i className={link.icon}></i>
                            <span className="kanbas-navigation-labels">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;