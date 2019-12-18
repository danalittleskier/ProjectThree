import React, { useState, useEffect } from 'react';
import desktopImage from "./assets/images/powder-ski.jpg";

import mobileImage from "./assets/images/tour-mobile.jpg";
import "./assets/style.css";

const LandingHero = (search) => {
    //Set the image url based on window size
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;



    return (

        <div className="landing-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
            <div className="landing-image-content">
                <div className="logo-container">
                    <h1>SKIIMATIC</h1>
                    <p>Earth's First Predictive Ski Use Algorithm</p>
                    <div className='search-container'>
                        {/* <TextInput
                            placeholder="enter a city to get the closest snow station report"
                            onChange={handleInputChange}
                            name="search"
                            id="search"
                            value={search}
                        /> */}
                         {/* <Button onClick={handleSearchSubmit}>Submit</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
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