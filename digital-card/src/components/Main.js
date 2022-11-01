import React from "react"

function Main(){
    return(
        <div className="main">

            <div className="info-1">
                <h1>David Brynjarsson</h1>
                <h2 className="dev">Frontend Developer</h2>
                <h5>Mywebsite.com</h5>

                <span className="buttons">
                    <button className="email-btn"><img src="../email.png"/> Email</button>
                    <button className="in-btn"><img src="../in.png"/>Linkedin</button>
                </span>
            </div>

            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple
                and automating daily tasks. I try to keep up
                with security and best practices, and am always looking
                for new things to learn.
            </p>

            <h2 style={{ marginTop: "40px"}}>Interests</h2>
            <p>I am a frontend developer with a particular interest in making things simple
                and automating daily tasks. I try to keep up
                with security and best practices, and am always looking
                for new things to learn.
            </p>
            
            

        </div>
    )
}

export default Main