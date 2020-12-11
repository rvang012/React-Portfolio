import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/React-Portfolio/home">Ruth·Vang </Link>
             <ul className="navbar-nav">
                 <Link className="nav-item active" to="/React-Portoflio/contact">Contact</Link>
                 <Link className="nav-item active" to="/React-Portoflio/project">Project</Link>
             </ul>
             </nav>
        </div>
    )
}

export default Navbar;