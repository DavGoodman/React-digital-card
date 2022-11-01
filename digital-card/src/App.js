import React from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"



function App(){

    const [lightMode, setLightMode] = React.useState(false)
    const light = lightMode? "light" : ""

    function handleClick(){
        setLightMode(prev => !prev)
    }

    return (
        <div className={"app " + light}>
            <img className="self" src="../self.jpg"/>
            <Main />
            <Footer 
            lightMode={lightMode}
            toggleDark={handleClick}/>
        </div>
    )
}

export default App