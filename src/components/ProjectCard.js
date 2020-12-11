import React from "react";

//don't forget to put in the links for the projects!!!
function ProjectCard(){
    return(
        <div>
            <div className="container">
                <div className="card">
                    <h2>Projects</h2>
                </div>
                <hr />
                <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "/public/photos/motivationstationshot.PNG"} alt="MotivationStation" />
                <hr />
                <div className="card-body">
                    Project 1 that I created with my group members. It is an app created to generate motivational quotes with an image. 
                </div>
            </div>
            <div className="card">
                <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "public/photos/budgetracker.png"} alt="Budget" />
                <hr />
                <div className="card-body">
                    This is a Budget Tracker app to track the User's finances on and off line. 
                </div>
            </div>
            <div className="card">
            <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "public/photos/foodappimg.PNG"} alt="FoodApp" />
                <div className="card-body">
                    Project 2 that I created with my grounp members. It is an app to track your food intake and calculate your calories. 
                </div>
            </div>
            <div className="card">
            <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "/public/photos/notetakerimg.PNG"} alt="NoteTaker" />
                <div className="card-body">
                    Note Taking app where the User can delete their notes and add to it. 
                </div>
            </div>
            <div className="card">
            <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "public/photos/passshot.PNG"} alt="PasswordGen" />
                <div className="card-body">
                    A Password Generator that generates a random password for User's to use. 
                </div>
            </div>
            <div className="card">
            <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "public/photos/workdayshot.PNG"} alt="WorkSchedule" />
                <div className="card-body">
                    Work day schedule that User's can use to schedule out their week. 
                </div>
            </div>
        </div>
    
    )
}

export default ProjectCard;
