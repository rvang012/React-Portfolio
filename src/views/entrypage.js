import React from "react";
import Jumbotron from "../components/Jumbotron"


function EntryPage(){
    return(
        <div>
            <div className="container-fluid entrypage-bgimage">
                <Jumbotron />
            <footer className="footer-contact">
                &copy; Portfolio Version 3.0 Copyright 2020 
            </footer>
            </div>
        </div>
    )
}

export default EntryPage;