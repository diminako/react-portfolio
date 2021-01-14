import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom"

const style = {
    brand: {
        fontSize: "3rem",
        color: "black"
    },
    headBar: {
        background: "linear-gradient(202deg, #00917c, #dfe0df)",
        paddingLeft: "1em",
        paddingRight: "1em",
    },
    headerLi: {
        display: "flex",
        flexDirection: "row",
        color: "black"
    },
    color: {
        color: "black"
    }
}
function Header() {
    const navArray = [
        "aboutme",
        "porfolio",
        "contact"
    ];
    const location = useLocation();
    return (
        <nav style={style.headBar}>
            <div className="nav-wrapper">
                <span className="left">
                    <span className="brand-logo left" style={style.brand}>
                        <Link to="/" style={style.brand} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            DN
                </Link>
                    </span>
                </span>
                <ul className="nav nav-tabs right hide-on-xsmall-and-down" id="nav-mobile" style={style.headerLi}>
                    <span style={style.spanLi}>
                        {navArray.map((navTab) => <li key={navTab.id} style={style.color} id="nav-mobile"><Link key={navTab.id} to={navTab} className={location.pathname === { navTab } ? "nav-link active" : "nav-link"}>{navTab}</Link></li>)}
                    </span>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
