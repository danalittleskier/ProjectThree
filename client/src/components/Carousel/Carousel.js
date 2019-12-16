import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-materialize';
import desktopImage from "./assets/images/powder-ski.jpg";
import mobileImage from "./assets/images/tour-mobile.jpg";
import "./assets/style.css";

const LandingHero = () => {
    //Set the image url based on window size
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (

        <div className="landing-image" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="landing-image-content">
                <h1>SKIIMATIC</h1>
                <p>Earth's First Predictive Ski Use Algorithm</p>
                <div className='btn-container'>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                    <Button>Search Snow Stations</Button>
                    <div className="toggle-search">
                        <TextInput
                            placeholder="Enter your location"
                        />
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