import React from "react";
import ProjectCard from "../components/ProjectCard"
import About from "../components/About"
import Footer from "../components/Footer"


function Home() {
    return(
        <div>
            <About />
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default Home;
