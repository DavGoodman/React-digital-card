import React from "react"

function Footer(props){
    const light = props.lightMode? "f-light" : "f-dark"

    return(
        <footer className={light}>
            <img src="../Facebook icon.png"/>
            <img src="../Twitter icon.png"/>
            <img src="../Instagram icon.png"/>
            <img src="../GitHub icon.png"/>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDark}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </footer>
    )
}

export default Footer