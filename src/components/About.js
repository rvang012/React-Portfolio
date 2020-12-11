import React from 'react'

function About(){
    return(
        <div className="card">
                <img className="w-75 p-3 d-inline-block" src={process.env.PUBLIC_URL + "public/photos/profilepic.png"} alt="profile" />
                <hr />
                <div className="card-body">
                    <p>Hello, my name is Ruth.</p>
                
                </div>
            </div>
    )
}
export default About;