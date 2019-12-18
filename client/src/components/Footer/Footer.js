import React from 'react';
import { Footer } from 'react-materialize';

function Foot() {
    return(
        <Footer
            className="Footer blue-grey darken-3"
            copyrights="&copy 2015 Copyright Text"
            links={<ul><li><a className="grey-text text-lighten-3" href="#!">Careers</a></li><li><a className="grey-text text-lighten-3" href="#!">About Us</a></li><li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Terms and Conditions</a>}
        >
            <h5 className="white-text">
                SKIIMATIK
            </h5>
            <p className="grey-text text-lighten-4">
                Thanks for Vistiting!
    </p>
        </Footer>
    )
}

export default Foot;