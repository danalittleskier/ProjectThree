import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imageOne from "./assets/images/powder-ski.jpg";
// import imageTwo from "";
// import imageThree from "";
import "./assets/style.css";
 
function LandingCarousel() {

        return (
            <Carousel className="landing-carousel" showArrows={false} showThumbs={false}>
                <div>
                    <img src={imageOne} alt="NOT FOUND" />
                </div>
                <div>
                    {/* <img src={imageTwo} alt="NOT FOUND"/> */}
                </div>
                <div>
                    {/* <img src={imageThree} alt="NOT FOUND"/> */}
                </div>
            </Carousel>
        );
    
};




export default LandingCarousel;