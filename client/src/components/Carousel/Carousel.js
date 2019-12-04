import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./assets/images/powder-ski.jpg";
 
function LandingCarousel() {

        return (
            <Carousel>
                <div>
                    <img src="./assets/images/powder-ski.jpg" alt="NOT FOUND" />

                </div>
                <div>
                    <img src="assets/2.jpeg" alt="NOT FOUND"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="NOT FOUND"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    
};




export default LandingCarousel;