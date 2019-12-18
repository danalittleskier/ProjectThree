import React, { useState, useEffect } from 'react';
// import API from "../../utils/API";
// import { Button, TextInput } from 'react-materialize';
import desktopImage from "./assets/images/powder-ski.jpg";
import logo from "./assets/images/logo.png"
import mobileImage from "./assets/images/tour-mobile.jpg";
import "./assets/style.css";

const LandingHero = (handleSearchSubmit) => {
    //Set the image url based on window size
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    //useState updates the search term
    // const [searchTerm, setSearchTerm] = useState("");
    
    return (

        <div className="landing-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})` }}>
            <div className="landing-image-content">
                <div className="logo-container">
                    <img src={logo} style={{ width: "300px" }} alt="skiimatic" />
                    {/* <div className='search-container'>
                        <TextInput
                            placeholder="enter a city to get the closest snow station report"
                            onChange={event => setSearchTerm(event.target.value)}
                            name="search"
                            id="search"
                            value={searchTerm}
                        />
                        <Button onClick={
                        }>Submit</Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

// const handleInputChange = () => {
//     const [searchTerm, setSearchTerm] = useState("");

// }

//This function will det
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return windowWidth;
};

export default LandingHero;