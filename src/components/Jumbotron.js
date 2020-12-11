import React from "react";
import { Link } from "react-router-dom";

function Jumbotron(){
    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Ruth Vang</h1>
                <hr />
                <Link className="btn btn-primary" to="/React-Portoflio/project">Project</Link>

            </div>
        </div>
    )
}

export default Jumbotron;