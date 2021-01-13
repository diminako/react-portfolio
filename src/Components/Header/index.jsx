import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    useLocation
} from "react-router-dom"

const style = {
    headerLi: {
        display: "flex",
        flexDirection: "row"
    },
    spanLi: {
        display: "flex",
        flexDirection: "row"
    }
}

function Header() {
    const navArray = [
        "AboutMe",
        "Porfolio",
        "Contact"
    ];

    const location = useLocation();
    return (
        <nav>
            <div className="nav-wrapper">

            <a className="nav-item brand-logo">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    DN
                </Link>
            </a>
        <ul className="nav nav-tabs right hide-on-med-and-down" id="nav-mobile" style={style.headerLi}>
            <span style={style.spanLi}>
                {navArray.map((navTab) => <li id="nav-mobile" ><Link to={navTab} className={location.pathname === {navTab} ? "nav-link active" : "nav-link"}>{navTab}</Link></li>)}
            </span>
        </ul>
            </div>
        </nav>
    );
}

export default Header;
